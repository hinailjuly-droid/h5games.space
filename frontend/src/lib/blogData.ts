import { BlogPost, BlogCategory } from '@/types';

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    name: 'Google Gemini Guides',
    slug: 'google-gemini-guides',
    description: 'Master Google Gemini and Imagen 3 for photorealistic portraits, text rendering, and cinematic scenes.',
    icon: 'Sparkles',
  },
  {
    name: 'ChatGPT Guides',
    slug: 'chatgpt-guides',
    description: 'Step-by-step guides for DALL-E 3 and ChatGPT prompt architecture, styles, and prompt refinement.',
    icon: 'Bot',
  },
  {
    name: 'AI Image Generation',
    slug: 'ai-image-generation',
    description: 'Foundations and advanced workflows for commercial visuals, lighting setups, and composition.',
    icon: 'Image',
  },
  {
    name: 'AI Photo Editing',
    slug: 'ai-photo-editing',
    description: 'How to re-light, upscale, fix anatomy, and convert everyday photos into studio masterpieces.',
    icon: 'Camera',
  },
  {
    name: 'AI Video Generation',
    slug: 'ai-video-generation',
    description: 'Prompting techniques, camera motions, and frame consistency for modern generative video models.',
    icon: 'Video',
  },
  {
    name: 'AI Tools & Reviews',
    slug: 'ai-tools-reviews',
    description: 'Honest comparisons, benchmarks, pricing, and capability tests across major AI visual generators.',
    icon: 'Layers',
  },
  {
    name: 'Prompt Engineering',
    slug: 'prompt-engineering',
    description: 'The science of photographic keywords, lens optics, weights, negative prompting, and aspect ratios.',
    icon: 'Terminal',
  },
  {
    name: 'AI for Productivity',
    slug: 'ai-productivity',
    description: 'Speed up marketing workflows, brand assets, social media assets, and commercial mockups.',
    icon: 'Zap',
  },
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    _id: 'article-gta6',
    title: '10 Best GTA 6 AI Photo Editing Prompts to Turn Your Photo into a Vice City Character',
    slug: 'best-gta-6-ai-photo-editing-prompts',
    excerpt: 'Have you ever wondered what you would look like as a character in GTA 6? Here are 10 original AI photo editing prompts to transform any ordinary photo into a cinematic Vice City character.',
    coverImage: '/blog/gta-6/gta6-prompts-cover.webp',
    category: 'AI Photo Editing',
    categorySlug: 'ai-photo-editing',
    tags: ['GTA 6', 'AI Photo Editing', 'Google Gemini', 'Vice City', 'Character Portrait', 'Photorealism'],
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      role: 'Prompt Engineer & Photographer',
    },
    readTime: '8 min read',
    publishedAt: '2026-11-22',
    updatedAt: '2026-11-22',
    featured: true,
    popular: true,
    relatedPromptCategory: 'cinematic',
    toc: [
      { id: 'how-to-create', title: 'How to Create GTA 6-Style AI Photos' },
      { id: 'prompt-1', title: '1. GTA 6 Cinematic Character Portrait' },
      { id: 'prompt-2', title: '2. Vice City Neon Night Portrait' },
      { id: 'prompt-3', title: '3. GTA 6 Luxury Car Lifestyle Scene' },
      { id: 'prompt-4', title: '4. GTA 6 Beachside Character Portrait' },
      { id: 'prompt-5', title: '5. GTA 6 Motorcycle Street Scene' },
      { id: 'prompt-6', title: '6. GTA 6 Sunset Rooftop Portrait' },
      { id: 'prompt-7', title: '7. GTA 6 Gangster-Inspired Street Fashion' },
      { id: 'prompt-8', title: '8. GTA 6 Rainy Night Cinematic Scene' },
      { id: 'prompt-9', title: '9. GTA 6 Convertible Car Sunset Scene' },
      { id: 'prompt-10', title: '10. GTA 6 Official-Style Game Loading Screen' },
      { id: 'tips', title: 'Tips for Getting Better GTA 6-Inspired AI Photos' },
      { id: 'faqs', title: 'Frequently Asked Questions' },
      { id: 'final-thoughts', title: 'Final Thoughts & Disclaimer' },
    ],
    prompts: [
      {
        title: 'GTA 6 Cinematic Character Portrait',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '2:3',
        explanation: 'Transform your ordinary portrait into a cinematic video-game character inspired by modern tropical open-world promotional artwork.',
        prompt: "Transform the uploaded photograph into an ultra-detailed cinematic open-world video game character portrait inspired by the atmosphere of a modern tropical crime-action game. Preserve the person's original facial identity, facial structure, hairstyle and natural appearance. Give the character a confident expression, stylish casual clothing and a relaxed pose. Place them against a beautiful tropical coastal city background with palm trees, warm sunlight, luxury architecture and subtle urban details. Use realistic 3D game-engine rendering, cinematic lighting, rich colors, detailed skin textures and professional character artwork composition. The result should look like a premium fictional video game promotional portrait, vertical 2:3 composition. Do not add text, logos or watermarks.",
      },
      {
        title: 'Vice City Neon Night Portrait',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '2:3',
        explanation: 'A vibrant nighttime photograph with pink and blue neon lighting, tropical streets, and a dramatic coastal city atmosphere.',
        prompt: 'Use the uploaded photograph as the identity reference and transform the person into a cinematic nighttime character in a fictional tropical coastal city inspired by the neon atmosphere of Vice City. Preserve the original face and recognizable features. Dress the person in stylish modern streetwear. Surround them with glowing pink and electric-blue neon signs, palm trees, wet reflective streets and colorful storefronts. Add realistic reflections, dramatic cinematic shadows, subtle atmospheric haze and detailed 3D video game rendering. The image should feel like a high-budget open-world action game scene, with vibrant colors and realistic textures. Vertical portrait composition, no logos or text.',
      },
      {
        title: 'GTA 6 Luxury Car Lifestyle Scene',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '2:3',
        explanation: 'A stylish character standing beside a luxury sports car in a sunlit coastal city boulevard.',
        prompt: "Transform the uploaded photograph into a realistic cinematic open-world video game scene. Keep the person's face, identity and natural body proportions recognizable. Show the person standing confidently beside a sleek luxury sports car parked on a sunlit coastal boulevard. Include palm trees, modern buildings, warm tropical sunshine, expensive architecture and a beautiful blue sky. Give the person fashionable casual clothing and a confident relaxed pose. Use realistic automotive reflections, detailed environments, premium 3D game-engine graphics and cinematic color grading. Create the atmosphere of a fictional luxury coastal city in a crime-action video game. No existing game logos, text or watermarks.",
      },
      {
        title: 'GTA 6 Beachside Character Portrait',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '2:3',
        explanation: 'A relaxed tropical beach atmosphere with beautiful sunlight, coastal scenery, and summer fashion.',
        prompt: "Convert the uploaded photograph into a cinematic tropical beachside character portrait. Preserve the person's original facial identity, hairstyle and recognizable appearance. Place the character near a beautiful fictional coastal city beach with turquoise water, palm trees, beachside buildings and warm golden sunlight. Give them stylish summer clothing, sunglasses if appropriate and a relaxed confident expression. Use detailed realistic 3D video game graphics, natural skin textures, beautiful environmental lighting, vibrant tropical colors and professional cinematic composition. Make the image resemble a premium open-world video game screenshot. Vertical 4:5 aspect ratio, no text or logos.",
      },
      {
        title: 'GTA 6 Motorcycle Street Scene',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '2:3',
        explanation: 'An action-oriented street portrait featuring a motorcycle and an urban tropical environment.',
        prompt: 'Use the uploaded image as the facial identity reference. Transform the person into a stylish motorcycle-riding character in a fictional tropical open-world city. Preserve their facial features and recognizable identity. Position the character beside a powerful modern sports motorcycle on a colorful urban street. Include palm trees, roadside shops, warm afternoon sunlight, realistic road textures and distant city buildings. Give the character fashionable streetwear and a confident cinematic pose. Render the scene using detailed realistic 3D video game graphics, dynamic lighting, cinematic depth and rich environmental details. The image should feel like a screenshot from a premium open-world action game. No brand logos or text.',
      },
      {
        title: 'GTA 6 Sunset Rooftop Portrait',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '2:3',
        explanation: 'A cinematic rooftop scene overlooking a beautiful coastal city during a dramatic sunset.',
        prompt: 'Transform the uploaded photograph into an atmospheric cinematic video game character portrait. Preserve the original face and identity accurately. Show the person standing on a luxury rooftop overlooking a fictional tropical coastal city during a dramatic sunset. Include distant skyscrapers, palm trees, illuminated buildings, beautiful orange and purple skies and warm golden reflections. Dress the character in elegant casual clothing. Use realistic 3D rendering, cinematic lighting, detailed environmental textures, subtle film grain and sophisticated color grading. Create a premium open-world game promotional artwork aesthetic, vertical composition, without any text or logos.',
      },
      {
        title: 'GTA 6 Gangster-Inspired Street Fashion',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '2:3',
        explanation: 'A bold streetwear portrait with dramatic character styling, varsity jacket, and graffiti surroundings.',
        prompt: "Transform the uploaded photograph into a cinematic street-style video game character portrait. Maintain the person's original facial identity, hairstyle and recognizable features. Give the character a fashionable urban streetwear outfit consisting of a premium jacket, fitted shirt, stylish accessories and modern sneakers. Place them in a colorful tropical city neighborhood with palm trees, graffiti-inspired wall textures, parked cars and warm sunlight. Use detailed realistic 3D game graphics, dramatic character lighting, natural facial textures and professional character design. The overall mood should be confident, stylish and inspired by modern open-world action games. No weapons, logos, text or watermarks.",
      },
      {
        title: 'GTA 6 Rainy Night Cinematic Scene',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '2:3',
        explanation: 'A dramatic rainy city environment with wet road reflections, glowing streetlights, and a moody atmosphere.',
        prompt: "Turn the uploaded photograph into a highly cinematic rainy-night video game character scene. Preserve the person's facial identity and recognizable appearance. Position the character standing on a wet tropical city street at night, surrounded by colorful neon lights, palm trees, illuminated buildings and reflections on the road. Add realistic raindrops, atmospheric fog, glowing streetlights and dramatic blue and magenta lighting. Use photorealistic 3D game-engine rendering, detailed skin textures, realistic reflections and professional cinematic composition. The final result should resemble a high-budget open-world action game screenshot. Vertical 4:5 framing, no logos or text.",
      },
      {
        title: 'GTA 6 Convertible Car Sunset Scene',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '3:4',
        explanation: 'A luxury lifestyle scene featuring a convertible driving along a tropical coastal highway at golden hour.',
        prompt: "Use the uploaded photograph as the main character reference. Preserve the person's original facial identity, hairstyle and recognizable features. Place the character sitting confidently inside a stylish luxury convertible driving along a beautiful tropical coastal highway. Show palm trees, ocean views, modern coastal buildings and a warm sunset in the background. Use cinematic camera framing, detailed realistic vehicle interiors, natural sunlight, realistic reflections and premium 3D video game graphics. Give the scene a luxurious open-world adventure atmosphere with rich colors and professional cinematic rendering. No visible brand logos, text or watermarks.",
      },
      {
        title: 'GTA 6 Official-Style Game Loading Screen',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '3:4',
        explanation: 'A dramatic character composition inspired by the illustrated promotional artwork and loading-screen aesthetics of open-world games.',
        prompt: "Transform the uploaded photograph into a premium illustrated video game character poster inspired by modern tropical open-world crime-action games. Preserve the person's facial identity and recognizable features while giving the portrait a polished cinematic game-art appearance. Use a dynamic composition with a tropical coastal city, palm trees, luxury vehicles, neon-lit buildings and a beautiful sunset. Combine detailed digital illustration with realistic 3D character rendering, dramatic lighting, rich warm colors and professional game-poster composition. Make the character the main focus while the environment provides a vibrant fictional coastal city atmosphere. No copyrighted characters, official game logos, trademarks, titles or watermarks.",
      },
    ],
    faqs: [
      {
        question: 'Can I create GTA 6-style photos using Google Gemini?',
        answer: 'Yes. You can use Google Gemini’s image generation and editing capabilities where available. Upload a photograph and provide a detailed description of the desired transformation.',
      },
      {
        question: 'Are these GTA 6 AI prompts free to use?',
        answer: 'The prompts in this article are completely free to copy and experiment with. However, the availability and usage limits of the AI image generation tools depend on their respective providers and plans.',
      },
      {
        question: 'Can I use my own photograph?',
        answer: 'Yes. These prompts are designed specifically for image-to-image editing. Upload your own photograph and instruct the AI to preserve your facial identity and recognizable features.',
      },
      {
        question: 'Why doesn’t my generated image look like GTA 6?',
        answer: 'AI tools interpret prompts differently. Try describing specific visual characteristics such as tropical coastal environments, neon lighting, cinematic shadows, detailed 3D rendering and open-world game aesthetics instead of relying only on the words "GTA 6 style".',
      },
    ],
    content: `
Have you ever wondered what you would look like as a character in GTA 6? With modern AI image generators, you can now transform an ordinary photograph into a cinematic, video-game-inspired portrait featuring tropical streets, neon lights, luxury cars and the vibrant atmosphere of a fictional coastal city.

The GTA 6-inspired photo trend is particularly exciting because you don't need professional photography skills or complex 3D modeling software. You simply upload your photograph, enter a well-crafted AI prompt and let the generative engine transform your picture.

In this guide, we've put together **10 original GTA 6-inspired AI photo editing prompts**. Each prompt explores a different visual style, from cinematic character portraits to luxury lifestyle scenes and neon-lit night photography.

You can copy these prompts and try them with any AI image generator that supports image uploads and photo editing, such as **Google Gemini** or **ChatGPT Plus**.

---

## How to Create GTA 6-Style AI Photos {#how-to-create}

Before trying the prompts, follow these straightforward steps:

1. **Choose a clear photograph of yourself**: Make sure your face is well-lit and unobstructed by sunglasses or heavy motion blur.
2. **Open an AI image generator**: Navigate to an AI tool that supports image-to-image editing, such as Google Gemini or ChatGPT.
3. **Upload your photograph**: Attach your portrait image in the chat interface.
4. **Copy one of the prompts below**: Use the 1-click **COPY PROMPT** button under your chosen style and paste it into the AI prompt box.
5. **Generate and refine**: If needed, adjust the clothing colors, weather, or time of day to match your personal preference.

> **Pro Tip:** Use a photograph where your face is clearly visible. Always include an explicit instruction to preserve your original facial identity and bone structure if you want the generated character to look genuinely like you.

---

## 1. GTA 6 Cinematic Character Portrait {#prompt-1}

**The style:** Transform your ordinary portrait into a cinematic video-game character. This is a great starting point if you want an image that resembles promotional character artwork for an open-world action game.

![GTA 6 inspired cinematic character portrait in a tropical Vice City-style environment with palm trees and a pink classic car.](/blog/gta-6/gta6-cinematic-character-portrait.webp "Cinematic GTA 6-inspired character portrait created using an AI image prompt.")

[PROMPT:1]

---

## 2. Vice City Neon Night Portrait {#prompt-2}

**The style:** A vibrant nighttime photograph with pink and blue neon lighting, tropical streets and a dramatic city atmosphere.

![GTA 6 inspired neon night portrait featuring a character on a rain-soaked Vice City street with pink and blue neon lights.](/blog/gta-6/gta6-vice-city-neon-night-portrait.webp "Neon-lit Vice City-inspired character portrait created using an AI image prompt.")

[PROMPT:2]

---

## 3. GTA 6 Luxury Car Lifestyle Scene {#prompt-3}

**The style:** A stylish character standing beside a luxury sports car in a beautiful tropical coastal city.

![GTA 6 inspired luxury car lifestyle portrait with a character leaning against a magenta sports car on a tropical coastal boulevard.](/blog/gta-6/gta6-luxury-car-lifestyle-scene.webp "Luxury sports car lifestyle scene created using an AI image prompt.")

[PROMPT:3]

---

## 4. GTA 6 Beachside Character Portrait {#prompt-4}

**The style:** A relaxed tropical beach atmosphere with beautiful sunlight, coastal scenery and summer fashion.

![GTA 6 inspired beachside character portrait with tropical palm trees, turquoise ocean and a coastal city background.](/blog/gta-6/gta6-beachside-character-portrait.webp "Tropical beachside character portrait created using an AI image prompt.")

[PROMPT:4]

---

## 5. GTA 6 Motorcycle Street Scene {#prompt-5}

**The style:** An action-oriented street portrait featuring a modern sports motorcycle and an urban tropical environment.

![GTA 6 inspired motorcycle street scene featuring a stylish character beside a black and red sports motorcycle in a tropical neon-lit city.](/blog/gta-6/gta6-motorcycle-street-scene.webp "Motorcycle street scene created using an AI image prompt.")

[PROMPT:5]

---

## 6. GTA 6 Sunset Rooftop Portrait {#prompt-6}

**The style:** A cinematic rooftop scene overlooking a beautiful coastal city during a dramatic sunset.

![GTA 6 inspired rooftop character portrait overlooking a tropical coastal city during a pink and orange sunset.](/blog/gta-6/gta6-sunset-rooftop-portrait.webp "Cinematic sunset rooftop portrait created using an AI image prompt.")

[PROMPT:6]

---

## 7. GTA 6 Gangster-Inspired Street Fashion {#prompt-7}

**The style:** A bold streetwear portrait with dramatic character styling, varsity jacket, and colorful urban surroundings.

![GTA 6 inspired gangster street fashion portrait featuring a stylish character in dark streetwear beside a classic lowrider.](/blog/gta-6/gta6-gangster-street-fashion.webp "Street fashion character portrait created using an AI image prompt.")

[PROMPT:7]

---

## 8. GTA 6 Rainy Night Cinematic Scene {#prompt-8}

**The style:** A dramatic rainy city environment with wet road reflections, glowing streetlights and a moody atmospheric haze.

![GTA 6 inspired rainy night portrait with pink and blue neon lights, wet streets, palm trees and a cinematic city atmosphere.](/blog/gta-6/gta6-rainy-night-cinematic-scene.webp "Rainy neon-lit Vice City-inspired character portrait.")

[PROMPT:8]

---

## 9. GTA 6 Convertible Car Sunset Scene {#prompt-9}

**The style:** A luxury lifestyle scene featuring a convertible driving along a tropical coastal highway at golden hour.

![GTA 6 inspired luxury convertible car scene with a character driving along a tropical coastal boulevard at sunset.](/blog/gta-6/gta-prompt-09.webp "Luxury convertible cruising along a tropical coastal boulevard at sunset.")

[PROMPT:9]

---

## 10. GTA 6 Official-Style Game Loading Screen {#prompt-10}

**The style:** A dramatic character composition inspired by the illustrated promotional artwork and loading-screen aesthetics of open-world video games.

![Cinematic open-world action game scene featuring a character, helicopter and police chase in a tropical coastal city.](/blog/gta-6/gta-prompt-10.webp "Cinematic action-game artwork inspired by a tropical open-world city.")

[PROMPT:10]

---

## Tips for Getting Better GTA 6-Inspired AI Photos {#tips}

Here are five proven techniques to achieve the most authentic game-character results:

1. **Upload a high-quality photograph**: A clear image with good lighting helps the AI tool understand your facial structure, hair texture, and eye shape.
2. **Tell the AI to preserve your face**: Always include explicit anchor phrases such as *"preserve original facial identity, natural bone structure, and recognizable features"*.
3. **Experiment with atmospheric lighting**: Pink neon, cool blue night lighting, golden sunsets, and harsh tropical daylight create dramatically different narrative moods.
4. **Try different aspect ratios**: Use **4:5** for Instagram portrait posts, **1:1** for square avatars, and **16:9** for cinematic desktop wallpapers.
5. **Generate multiple variations**: If the first result isn't quite right, slightly modify specific elements (such as clothing color or time of day) rather than rewriting the entire prompt.

---

## Frequently Asked Questions {#faqs}

---

## Final Thoughts & Disclaimer {#final-thoughts}

Creating GTA 6-inspired AI photographs is an exciting way to experiment with the latest image generation and photo-editing models. Whether you prefer neon-lit city streets, luxury sports cars, tropical beaches or illustrated character posters, these 10 prompts give you versatile creative blueprints to explore.

Try different styles with your own photographs, experiment with lighting and backgrounds, and see which version fits your personality best!

> **Legal Disclaimer:** This article is an independent fan-inspired AI prompt guide. It is not affiliated with, endorsed by, or sponsored by Rockstar Games or Take-Two Interactive. Grand Theft Auto and GTA are registered trademarks of their respective owners.
    `,
  },

];
