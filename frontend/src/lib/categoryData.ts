export interface PromptCategoryEditorial {
  name: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  introduction: string;
  useCases: string[];
  recommendedOptics: string;
  relatedTutorialSlug?: string;
  relatedTutorialTitle?: string;
  relatedCategories: { name: string; slug: string }[];
}

export const CATEGORY_EDITORIAL_DATA: Record<string, PromptCategoryEditorial> = {
  fashion: {
    name: 'Fashion',
    slug: 'fashion',
    seoTitle: 'Fashion & Editorial AI Prompts for Google Gemini & ChatGPT',
    seoDescription: 'Curated prompts for high-fashion runway, street style, luxury brand lookbooks, and textile textures with accurate camera lens optics.',
    introduction: 'Fashion prompt engineering demands precise material rendering — from raw silk drape and brushed cashmere to heavy twill tailoring. Our curated collection focuses on high-end editorial framing, contemporary street fashion, and luxury lookbook aesthetics suitable for designers, apparel brands, and digital stylists.',
    useCases: [
      'Digital Lookbooks: Generate realistic seasonal apparel previews without studio shoots.',
      'Moodboard Exploration: Rapidly prototype silhouettes, color palettes, and textile weaves.',
      'Social Campaign Creatives: Produce high-end street-style and editorial visuals for Instagram and Pinterest.',
    ],
    recommendedOptics: '50mm to 85mm prime lenses at f/2.0 for balanced subject separation; diffused softbox or natural overcast daylight to prevent washed-out fabric details.',
    relatedTutorialSlug: 'best-gemini-prompts-for-professional-instagram-photos',
    relatedTutorialTitle: '20 Best Gemini Prompts for Professional Instagram Photos',
    relatedCategories: [
      { name: 'Portrait', slug: 'portrait' },
      { name: 'Cinematic', slug: 'cinematic' },
      { name: 'Couple', slug: 'couple' },
    ],
  },
  couple: {
    name: 'Couple',
    slug: 'couple',
    seoTitle: 'Couple & Romantic Portrait AI Prompts | Gemini & ChatGPT',
    seoDescription: 'Discover tested AI prompts for romantic couple portraits, traditional Indian pre-wedding photography, and authentic emotional storytelling.',
    introduction: 'Capturing believable chemistry between two subjects is one of the most challenging tasks in AI generation. These prompts emphasize natural, unforced poses, synchronized ambient lighting, and authentic emotional expression across traditional cultural celebrations, candid city walks, and intimate golden hour sessions.',
    useCases: [
      'Pre-Wedding & Engagement Concepts: Explore traditional bridal and groom attire in scenic architectural settings.',
      'Storytelling Posters: Create cinematic relationship narratives with subtle emotional cues.',
      'Gift & Anniversary Visuals: Generate custom commemorative digital art with personalized cultural motifs.',
    ],
    recommendedOptics: '85mm f/1.4 lens for flattering compression; warm golden hour backlight with soft front fill to balance both faces evenly.',
    relatedTutorialSlug: 'how-to-turn-normal-photos-into-cinematic-portraits-using-ai',
    relatedTutorialTitle: 'How to Turn Normal Photos into Cinematic Portraits Using AI',
    relatedCategories: [
      { name: 'Fashion', slug: 'fashion' },
      { name: 'Festival', slug: 'festival' },
      { name: 'Portrait', slug: 'portrait' },
    ],
  },
  cinematic: {
    name: 'Cinematic',
    slug: 'cinematic',
    seoTitle: 'Cinematic & Movie Still AI Prompts | 35mm Hollywood Aesthetics',
    seoDescription: 'Master volumetric lighting, anamorphic bokeh, and moody color grading with cinematic AI prompts for Gemini and ChatGPT.',
    introduction: 'Cinematic prompting goes beyond crisp resolution; it controls volumetric atmosphere, intentional lens aberrations, and deliberate color grading. These prompts bring film-still realism through anamorphic bokeh, atmospheric mist, split-tone key lighting, and classic 35mm emulsion roll-off.',
    useCases: [
      'Film Concept Art: Prototype storyboard frames, scene lighting, and character silhouettes.',
      'Music Video & Narrative Planning: Test visual themes, neon-lit nightscapes, and moody environmental moods.',
      'Desktop & Poster Art: Generate dramatic, widescreen 16:9 art ready for high-resolution displays.',
    ],
    recommendedOptics: '35mm or 50mm anamorphic prime lens, 2.39:1 widescreen framing, subtle horizontal lens flare, and low-key chiaroscuro lighting.',
    relatedTutorialSlug: 'how-to-turn-normal-photos-into-cinematic-portraits-using-ai',
    relatedTutorialTitle: 'How to Turn Normal Photos into Cinematic Portraits Using AI',
    relatedCategories: [
      { name: 'Architecture', slug: 'architecture' },
      { name: 'Nature & Landscape', slug: 'nature-landscape' },
      { name: 'Portrait', slug: 'portrait' },
    ],
  },
  'nature-landscape': {
    name: 'Nature & Landscape',
    slug: 'nature-landscape',
    seoTitle: 'Nature & Landscape AI Prompts | Majestic Outdoor Photography',
    seoDescription: 'Generate photorealistic mountain vistas, misty forests, coastal sunsets, and aerial landscapes with accurate atmospheric depth.',
    introduction: 'Landscape photography in generative models requires careful handling of spatial layers — foreground rocks, midground foliage, and atmospheric background haze. This collection delivers grand scale and serene natural lighting across alpine peaks, serene Scandinavian fjords, and sunlit coastal dunes.',
    useCases: [
      'Digital Wallpaper & Art Prints: High-resolution serene nature scenes for interior displays and backgrounds.',
      'Travel & Tourism Mockups: Illustrate destination concepts and scenic nature reserves.',
      'Environmental Storytelling: Build atmospheric backdrops for creative projects and game worlds.',
    ],
    recommendedOptics: '24mm to 35mm wide-angle lens at f/8 for sharp edge-to-edge depth of field; polarizers for water reflections and morning mist.',
    relatedTutorialSlug: 'how-to-write-effective-ai-image-generation-prompts',
    relatedTutorialTitle: 'How to Write Effective AI Image Generation Prompts',
    relatedCategories: [
      { name: 'Architecture', slug: 'architecture' },
      { name: 'Cinematic', slug: 'cinematic' },
      { name: 'Other', slug: 'other' },
    ],
  },
  portrait: {
    name: 'Portrait',
    slug: 'portrait',
    seoTitle: 'Photorealistic Portrait AI Prompts | Gemini & ChatGPT',
    seoDescription: 'Authentic human portraits with natural skin pores, realistic eye reflections, studio lighting setups, and zero plastic smoothing.',
    introduction: 'The secret to authentic AI portraiture lies in avoiding synthetic perfection. These prompts specify natural skin imperfections, realistic catchlights in pupils, fine stray hair strands, and real optical lens compression to deliver portraits that look genuinely photographed on commercial cameras.',
    useCases: [
      'Headshots & Personal Branding: Generate corporate and creative portraits for avatars and mock profiles.',
      'Character Design: Develop consistent character faces for graphic novels and creative writing.',
      'Lighting Practice: Study the effect of Rembrandt, butterfly, and split lighting setups in AI synthesis.',
    ],
    recommendedOptics: '85mm f/1.4 or 105mm f/2.0 portrait prime; large diffused softbox with silver bounce reflector for natural eye catchlights.',
    relatedTutorialSlug: 'how-to-create-realistic-photos-using-google-gemini',
    relatedTutorialTitle: 'How to Create Realistic Photos Using Google Gemini',
    relatedCategories: [
      { name: 'Fashion', slug: 'fashion' },
      { name: 'Couple', slug: 'couple' },
      { name: 'Cinematic', slug: 'cinematic' },
    ],
  },
  festival: {
    name: 'Festival',
    slug: 'festival',
    seoTitle: 'Festival & Celebration AI Prompts | Cultural Art Prompts',
    seoDescription: 'Vibrant celebration visuals featuring Diwali diyas, Holi colors, Eid festive attire, and glowing lanterns with authentic cultural fidelity.',
    introduction: 'Festival and holiday imagery demands vibrant color balance without garish clipping. These prompts capture traditional cultural wear, intricate embroidery, warm candlelight, and joyful community gatherings with dignified cultural accuracy.',
    useCases: [
      'Holiday Greeting Cards: Design bespoke social media cards and festive banners for clients and family.',
      'Cultural Event Marketing: Create festive collateral for community galas, temple celebrations, and fairs.',
      'Textile & Decor Exploration: Visualize festive home decorations, floral rangolis, and festive table arrangements.',
    ],
    recommendedOptics: '50mm f/1.8 lens; warm 2700K tungsten ambient light combined with candlelight and festive fairy lights.',
    relatedTutorialSlug: 'best-gemini-prompts-for-professional-instagram-photos',
    relatedTutorialTitle: '20 Best Gemini Prompts for Professional Instagram Photos',
    relatedCategories: [
      { name: 'Fashion', slug: 'fashion' },
      { name: 'Couple', slug: 'couple' },
      { name: 'Portrait', slug: 'portrait' },
    ],
  },
  architecture: {
    name: 'Architecture',
    slug: 'architecture',
    seoTitle: 'Architecture & Interior AI Prompts | Modern & Minimalist Spaces',
    seoDescription: 'Explore architectural AI prompts for brutalist concrete, Scandinavian interiors, parametric facades, and luxury minimalist villas.',
    introduction: 'Architectural rendering in AI demands straight vertical lines, accurate material reflections (concrete, travertine, glass), and balanced natural lighting. These prompts help interior designers and architectural enthusiasts visualize spatial volumes and textural palettes.',
    useCases: [
      'Interior Design Concepts: Prototype residential and commercial floorplans, materials, and furniture layouts.',
      'Real Estate Visualizations: Create aspirational luxury villa and urban loft concept images.',
      'Architectural Studies: Explore how natural daylight interacts with raw materials throughout the day.',
    ],
    recommendedOptics: '24mm to 35mm tilt-shift perspective control lens to maintain parallel vertical lines; diffused morning window illumination.',
    relatedTutorialSlug: 'how-to-create-professional-product-photography-using-ai',
    relatedTutorialTitle: 'How to Create Professional Product Photography Using AI',
    relatedCategories: [
      { name: 'Nature & Landscape', slug: 'nature-landscape' },
      { name: 'Cinematic', slug: 'cinematic' },
      { name: 'Other', slug: 'other' },
    ],
  },
  other: {
    name: 'Other',
    slug: 'other',
    seoTitle: 'Creative & Experimental AI Prompts | h5games Prompt Library',
    seoDescription: 'Unique, abstract, macro, and experimental AI art prompts pushing the creative boundaries of generative visual engines.',
    introduction: 'An eclectic archive of experimental prompts that defy standard genre classification — including macro liquid caustics, surreal conceptual compositions, retro-futuristic technology, and bespoke still-life installations.',
    useCases: [
      'Abstract Backgrounds: Generate high-resolution graphic textures for web design and branding.',
      'Creative Ideation: Break through creative blocks with unconventional prompt combinations.',
      'Artistic Experimentation: Test model capability limits with micro-textures, refractions, and mixed media.',
    ],
    recommendedOptics: '100mm macro lens or extreme telephoto compression; experimental split-gel lighting and multi-source chromatic reflections.',
    relatedTutorialSlug: 'common-ai-prompt-mistakes-and-how-to-fix-them',
    relatedTutorialTitle: 'Common AI Prompt Mistakes and How to Fix Them',
    relatedCategories: [
      { name: 'Cinematic', slug: 'cinematic' },
      { name: 'Architecture', slug: 'architecture' },
      { name: 'Anime & Cartoon', slug: 'anime-cartoon' },
    ],
  },
  'anime-cartoon': {
    name: 'Anime & Cartoon',
    slug: 'anime-cartoon',
    seoTitle: 'Anime & Manga AI Prompts | Studio Ghibli & Shonen Art Styles',
    seoDescription: 'Tested prompts for modern anime character design, nostalgic cel animation, watercolor backdrops, and vibrant comic illustrations.',
    introduction: 'Anime and illustrated prompt design requires distinct artistic styling — from Makoto Shinkai-inspired cloudscapes and Studio Ghibli watercolor backgrounds to clean modern Shonen character lineart. These prompts capture vibrant stylized color palettes and expressive line weights.',
    useCases: [
      'Character Concept Art: Design original anime characters with distinct silhouettes and outfits.',
      'Background Artwork: Generate painterly landscapes and cozy anime bedrooms for animation or streaming.',
      'Illustration Projects: Explore mixed traditional ink and modern digital cel shading workflows.',
    ],
    recommendedOptics: 'Crisp hand-drawn line weight, gouache or watercolor texturing, vibrant complementary anime color palettes.',
    relatedTutorialSlug: 'how-to-write-effective-ai-image-generation-prompts',
    relatedTutorialTitle: 'How to Write Effective AI Image Generation Prompts',
    relatedCategories: [
      { name: 'Cinematic', slug: 'cinematic' },
      { name: 'Portrait', slug: 'portrait' },
      { name: 'Other', slug: 'other' },
    ],
  },
};
