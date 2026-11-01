const Prompt = require('../models/Prompt');

// Helper to sanitize regex search
const escapeRegex = (text) => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

exports.getPrompts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      category,
      model,
      tag,
      search,
      sort = 'trending'
    } = req.query;

    const query = { status: 'published' };

    if (category && category !== 'all' && category !== 'All') {
      query.category = { $regex: new RegExp(`^${escapeRegex(category)}$`, 'i') };
    }

    if (model && model !== 'all' && model !== 'All') {
      query.model = { $regex: new RegExp(`^${escapeRegex(model)}$`, 'i') };
    }

    if (tag) {
      query.tags = { $in: [new RegExp(`^${escapeRegex(tag)}$`, 'i')] };
    }

    if (search && search.trim()) {
      const searchRegex = new RegExp(escapeRegex(search.trim()), 'i');
      query.$or = [
        { title: searchRegex },
        { prompt: searchRegex },
        { tags: searchRegex },
        { category: searchRegex }
      ];
    }

    let sortOptions = {};
    switch (sort) {
      case 'copies':
      case 'most-copied':
        sortOptions = { copies: -1, createdAt: -1 };
        break;
      case 'likes':
      case 'most-liked':
        sortOptions = { likes: -1, createdAt: -1 };
        break;
      case 'newest':
      case 'latest':
        sortOptions = { createdAt: -1 };
        break;
      case 'trending':
      default:
        sortOptions = { copies: -1, likes: -1, createdAt: -1 };
        break;
    }

    const pageNum = Math.max(1, parseInt(page, 10));
    const limitNum = Math.min(50, Math.max(1, parseInt(limit, 10)));
    const skip = (pageNum - 1) * limitNum;

    const [prompts, total] = await Promise.all([
      Prompt.find(query)
        .sort(sortOptions)
        .skip(skip)
        .limit(limitNum)
        .lean(),
      Prompt.countDocuments(query)
    ]);

    res.json({
      prompts,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum),
        hasNext: skip + prompts.length < total,
        hasPrev: pageNum > 1
      }
    });
  } catch (error) {
    console.error('Error fetching prompts:', error);
    res.status(500).json({ error: 'Failed to fetch prompts' });
  }
};

exports.getPromptBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const prompt = await Prompt.findOneAndUpdate(
      { slug, status: 'published' },
      { $inc: { views: 1 } },
      { new: true }
    ).lean();

    if (!prompt) {
      return res.status(404).json({ error: 'Prompt not found' });
    }

    // Fetch related prompts
    const relatedPrompts = await Prompt.find({
      _id: { $ne: prompt._id },
      category: prompt.category,
      status: 'published'
    })
      .sort({ copies: -1, likes: -1 })
      .limit(6)
      .lean();

    res.json({ prompt, relatedPrompts });
  } catch (error) {
    console.error('Error fetching prompt:', error);
    res.status(500).json({ error: 'Failed to fetch prompt details' });
  }
};

exports.getFeaturedPrompts = async (req, res) => {
  try {
    const prompts = await Prompt.find({ featured: true, status: 'published' })
      .sort({ copies: -1, createdAt: -1 })
      .limit(10)
      .lean();

    res.json(prompts);
  } catch (error) {
    console.error('Error fetching featured prompts:', error);
    res.status(500).json({ error: 'Failed to fetch featured prompts' });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Prompt.aggregate([
      { $match: { status: 'published' } },
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $project: { name: '$_id', count: 1, _id: 0 } }
    ]);

    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

exports.getModels = async (req, res) => {
  try {
    const models = await Prompt.aggregate([
      { $match: { status: 'published' } },
      { $group: { _id: '$model', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $project: { name: '$_id', count: 1, _id: 0 } }
    ]);

    res.json(models);
  } catch (error) {
    console.error('Error fetching models:', error);
    res.status(500).json({ error: 'Failed to fetch models' });
  }
};

exports.trackCopy = async (req, res) => {
  try {
    const { id } = req.params;
    const prompt = await Prompt.findByIdAndUpdate(
      id,
      { $inc: { copies: 1 } },
      { new: true, select: 'copies' }
    );

    if (!prompt) {
      return res.status(404).json({ error: 'Prompt not found' });
    }

    res.json({ success: true, copies: prompt.copies });
  } catch (error) {
    console.error('Error tracking copy:', error);
    res.status(500).json({ error: 'Failed to track copy' });
  }
};

exports.trackLike = async (req, res) => {
  try {
    const { id } = req.params;
    const { action = 'like' } = req.body; // 'like' or 'unlike'
    const inc = action === 'unlike' ? -1 : 1;

    const prompt = await Prompt.findByIdAndUpdate(
      id,
      { $inc: { likes: inc } },
      { new: true, select: 'likes' }
    );

    if (!prompt) {
      return res.status(404).json({ error: 'Prompt not found' });
    }

    res.json({ success: true, likes: Math.max(0, prompt.likes) });
  } catch (error) {
    console.error('Error tracking like:', error);
    res.status(500).json({ error: 'Failed to track like' });
  }
};
