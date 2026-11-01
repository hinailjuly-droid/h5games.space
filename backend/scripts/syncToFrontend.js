const fs = require('fs');
const path = require('path');

const importedPrompts = require('../data/importedPrompts.json');

// Calculate categories count
const catCounts = {};
for (const p of importedPrompts) {
  catCounts[p.category] = (catCounts[p.category] || 0) + 1;
}

const categoryIcons = {
  'Cinematic': 'Clapperboard',
  'Fashion': 'Shirt',
  'Couple': 'Heart',
  'Portrait': 'Sparkles',
  'Saree & Traditional': 'Crown',
  'Festival': 'Sparkles',
  'Nature & Landscape': 'Trees',
  'Architecture': 'Building2',
  'Anime & Cartoon': 'Palette',
  '3D & Render': 'Box',
  'Animals': 'Trees',
  'Kids': 'Heart',
  'Other': 'Sparkles'
};

const categories = [
  { name: 'All', slug: 'all', count: importedPrompts.length, icon: 'Sparkles' },
  ...Object.entries(catCounts).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    count,
    icon: categoryIcons[name] || 'Sparkles'
  }))
];

// Calculate model counts
const modelCounts = {};
for (const p of importedPrompts) {
  modelCounts[p.model] = (modelCounts[p.model] || 0) + 1;
}

const aiModels = [
  { name: 'All Models', count: importedPrompts.length },
  ...Object.entries(modelCounts).map(([name, count]) => ({ name, count }))
];

const mockDataContent = `import { Prompt, CategoryItem, BlogPost } from '@/types';

export const INITIAL_PROMPTS: Prompt[] = ${JSON.stringify(importedPrompts, null, 2)};

export const CATEGORIES: CategoryItem[] = ${JSON.stringify(categories, null, 2)};

export const AI_MODELS = ${JSON.stringify(aiModels, null, 2)};

export const BLOG_POSTS: BlogPost[] = [
  {
    _id: "blog-1",
    title: "Mastering Google Gemini Image Prompts: Complete Guide for Photorealistic Portraits",
    slug: "mastering-gemini-photorealistic-portraits",
    excerpt: "Learn the exact keywords, camera angles, and natural lighting setups that unlock hyper-realistic portraits with Google Gemini.",
    content: \`
# Mastering Google Gemini Image Prompts: Complete Guide for Photorealistic Portraits

Google Gemini has revolutionized AI image generation with Imagen 3. Gemini excels at understanding conversational nuances, complex lighting, Indian traditional attire (sarees, lehengas), and hyper-detailed natural portraits without weird artifacts.

## 1. Natural Language vs. Comma Tags
Gemini understands conversational natural language syntax:

> **Pro Tip:** Write like a creative director describing a real photoshoot scene.

### Recommended Prompt Formula:
\\\`[Subject & Age] + [Expression & Gaze] + [Wardrobe & Fabric Details] + [Setting & Background] + [Lighting & Atmosphere] + [Camera Gear & Framing]\\\`

## 2. Realistic Skin Texture Keywords
Avoid buzzwords like *ultra-realistic* or *8k*, which cause plastic smoothing. Instead, incorporate:
- *Natural skin pores, subtle freckles, authentic skin imperfections*
- *Warm golden hour rim lighting, soft depth of field bokeh*
- *Shot on Canon EOS R5 with 85mm f/1.4 lens*

## 3. Best Aspect Ratios
- **3:5 or 9:16:** Perfect for vertical mobile wallpaper and Instagram reels.
- **16:9:** Ideal for cinematic wide scenes.
    \`,
    coverImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    category: "Tutorial",
    tags: ["Google Gemini", "Gemini Prompts", "Photorealism", "Portrait"],
    author: {
      name: "h5games Editorial",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
    },
    readTime: "5 min read",
    publishedAt: "2026-10-28",
    featured: true
  },
  {
    _id: "blog-2",
    title: "Top ChatGPT & DALL-E Prompt Techniques for Cinematic Aesthetics",
    slug: "top-chatgpt-prompts-cinematic-aesthetics",
    excerpt: "Take complete control of lighting, color grading, and composition in ChatGPT to create stunning cinematic scenes.",
    content: \`
# Top ChatGPT & DALL-E Prompt Techniques for Cinematic Aesthetics

Controlling atmosphere, focal length, and color grading is the key to creating breathtaking cinematic images using ChatGPT.

## Essential Cinematography Techniques:
1. **Volumetric Lighting:** Specify hazy morning sunlight breaking through trees or neon reflections on wet asphalt.
2. **Color Palette:** Mention specific color grades like *teal and orange blockbuster grading* or *moody vintage Polaroid film tone*.
3. **Camera Perspective:** Use *low-angle hero perspective* or *close-up portrait with creamy bokeh*.
    \`,
    coverImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85",
    category: "Guide",
    tags: ["ChatGPT", "DALL-E", "Cinematic", "Prompts"],
    author: {
      name: "h5games Editorial",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80"
    },
    readTime: "7 min read",
    publishedAt: "2026-10-26",
    featured: true
  }
];
`;

const frontendMockPath = path.join(__dirname, '../../frontend/src/lib/mockData.ts');
fs.writeFileSync(frontendMockPath, mockDataContent);
console.log('✅ Successfully synced 100 prompts into frontend/src/lib/mockData.ts!');
