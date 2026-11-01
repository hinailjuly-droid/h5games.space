const mongoose = require('mongoose');

const promptSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true
  },
  prompt: {
    type: String,
    required: true,
    trim: true
  },
  negativePrompt: {
    type: String,
    default: '',
    trim: true
  },
  model: {
    type: String,
    required: true,
    index: true,
    default: 'Midjourney v6.1'
  },
  category: {
    type: String,
    required: true,
    index: true,
    default: 'Cinematic'
  },
  tags: [{
    type: String,
    trim: true,
    index: true
  }],
  imageUrl: {
    type: String,
    required: true
  },
  aspectRatio: {
    type: String,
    default: '16:9'
  },
  parameters: {
    ar: { type: String, default: '16:9' },
    seed: { type: String, default: '' },
    stylize: { type: String, default: '' },
    chaos: { type: String, default: '' },
    version: { type: String, default: '6.1' },
    cfgScale: { type: String, default: '' },
    steps: { type: String, default: '' }
  },
  description: {
    type: String,
    default: ''
  },
  copies: {
    type: Number,
    default: 0,
    index: true
  },
  likes: {
    type: Number,
    default: 0,
    index: true
  },
  views: {
    type: Number,
    default: 0
  },
  featured: {
    type: Boolean,
    default: false,
    index: true
  },
  status: {
    type: String,
    enum: ['published', 'draft'],
    default: 'published',
    index: true
  }
}, {
  timestamps: true
});

promptSchema.index({ title: 'text', prompt: 'text', tags: 'text', category: 'text' });

module.exports = mongoose.model('Prompt', promptSchema);
