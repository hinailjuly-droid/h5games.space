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
    coverImageAlt: '10 best GTA 6 AI photo editing prompts to turn your photo into a Vice City character',
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
      { id: 'final-thoughts', title: 'Final Thoughts & Disclaimer' },
      { id: 'faqs', title: 'Frequently Asked Questions' },
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

## Final Thoughts & Disclaimer {#final-thoughts}

Creating GTA 6-inspired AI photographs is an exciting way to experiment with the latest image generation and photo-editing models. Whether you prefer neon-lit city streets, luxury sports cars, tropical beaches or illustrated character posters, these 10 prompts give you versatile creative blueprints to explore.

Try different styles with your own photographs, experiment with lighting and backgrounds, and see which version fits your personality best!

> **Legal Disclaimer:** This article is an independent fan-inspired AI prompt guide. It is not affiliated with, endorsed by, or sponsored by Rockstar Games or Take-Two Interactive. Grand Theft Auto and GTA are registered trademarks of their respective owners.
    `,
  },
  {
    _id: 'article-christmas',
    title: '10 Best Christmas AI Photo Editing Prompts for Gemini and ChatGPT',
    slug: 'best-christmas-ai-photo-editing-prompts',
    excerpt: 'Transform your everyday photos into magical holiday portraits. Here are 10 original Christmas AI photo editing prompts for Google Gemini and ChatGPT.',
    coverImage: '/blog/christmas/christmas-ai-prompts-hero.webp',
    coverImageAlt: '10 best Christmas AI photo prompts for creating festive portraits using Gemini and ChatGPT.',
    category: 'AI Photo Editing',
    categorySlug: 'ai-photo-editing',
    tags: ['Christmas', 'Holiday Portraits', 'AI Photo Editing', 'Google Gemini', 'ChatGPT', 'Photorealism'],
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      role: 'Prompt Engineer & Photographer',
    },
    readTime: '8 min read',
    publishedAt: '2026-11-24',
    updatedAt: '2026-11-24',
    featured: true,
    popular: true,
    relatedPromptCategory: 'portrait',
    toc: [
      { id: 'how-to-create', title: 'How to Create Christmas AI Photos' },
      { id: 'prompt-1', title: '1. Christmas Candy Cane Glamour Portrait' },
      { id: 'prompt-2', title: '2. Cozy Christmas Tree Portrait' },
      { id: 'prompt-3', title: '3. Snowy Winter Wonderland Portrait' },
      { id: 'prompt-4', title: '4. Santa Hat Studio Portrait' },
      { id: 'prompt-5', title: '5. Festive Outdoor Winter Portrait' },
      { id: 'prompt-6', title: '6. Regal Emerald Velvet Christmas Portrait' },
      { id: 'prompt-7', title: '7. Heartwarming Holiday Dog Portrait' },
      { id: 'prompt-8', title: '8. Christmas Lights Bokeh Portrait' },
      { id: 'prompt-9', title: '9. Festive Red Dress Christmas Photoshoot' },
      { id: 'prompt-10', title: '10. Christmas Snow Globe Portrait' },
      { id: 'tips', title: 'Tips for Getting the Best Christmas AI Photos' },
      { id: 'final-thoughts', title: 'Final Thoughts & Holiday Greetings' },
      { id: 'faqs', title: 'Frequently Asked Questions' },
    ],
    prompts: [
      {
        title: 'Christmas Candy Cane Glamour Portrait',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '2:3',
        explanation: 'Transform your portrait into a glamorous holiday studio portrait with Santa-inspired red velvet fashion, oversized candy canes, and glowing fairy lights.',
        prompt: "Transform the uploaded photograph into an ultra-detailed, glamorous Christmas studio portrait. Preserve the person's original facial identity, facial structure, natural skin texture, beard, hairstyle, and recognizable features accurately. Dress the person in an elegant holiday ensemble featuring a luxurious red velvet fleece-lined Santa robe over a cream knit Christmas reindeer sweater and tailored red trousers, styled with modern dark sunglasses and a silver watch. Place them in a festive indoor holiday studio decorated with a glowing Christmas tree, oversized red and white striped candy canes, warm hanging fairy lights, wrapped gift boxes with red ribbons, and a vintage glowing snow lantern. Use warm, cinematic holiday studio lighting, soft background bokeh, rich red and gold tones, and crisp 8k photorealistic rendering. Vertical 2:3 composition, no text, logos or watermarks.",
      },
      {
        title: 'Cozy Christmas Tree Portrait',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '2:3',
        explanation: 'A warm, cozy Christmas evening scene beside a glowing decorated tree and a rustic fireplace.',
        prompt: "Use the uploaded photograph as the facial identity reference. Transform the person into a cozy Christmas evening portrait inside a warm, festively decorated living room. Accurately preserve the person's original facial structure, hairstyle, beard, and natural expressions. Dress the person in a festive cream knit sweater with red reindeer and snowflake patterns, paired with a cozy red wool scarf, dark trousers, and a watch. Position the person standing comfortably beside a grand Christmas tree adorned with glowing warm fairy lights, red baubles, pinecones, and golden stars. In the background, include a rustic stone fireplace with a crackling warm fire, hanging holiday stockings, and a Christmas wreath with a red velvet bow on the wall. Use soft warm ambient lighting, beautiful cinematic depth of field, and photorealistic rendering. Vertical 2:3 composition, no text or watermarks.",
      },
      {
        title: 'Snowy Winter Wonderland Portrait',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '2:3',
        explanation: 'An enchanting winter outdoor portrait with gently falling snow, warm holiday coat, and frosted pine trees.',
        prompt: "Transform the uploaded photograph into an ultra-detailed, cinematic winter wonderland outdoor portrait. Preserve the person's original facial identity, natural bone structure, beard, hairstyle, and facial expression accurately. Dress the person in a rugged dark hooded winter parka with fur trim, a textured grey turtleneck sweater, cozy red knit scarf, dark snow pants, winter gloves, and hiking boots with a backpack. Position them sitting outdoors on a snow-covered rock in a breathtaking alpine mountain landscape with gently falling snowflakes, frosted pine trees, and a warmly lit rustic log cabin decorated with a Christmas wreath in the background. Use soft natural daylight with warm glowing cabin illumination, crisp 8k photorealistic rendering, and vertical 2:3 composition. No text or watermarks.",
      },
      {
        title: 'Santa Hat Studio Portrait',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '3:4',
        explanation: 'A festive and playful studio portrait wearing a plush Santa hat, red reindeer knit sweater, and a silver watch beside a decorated Christmas tree.',
        prompt: "Transform the uploaded photograph into an ultra-detailed, charming Christmas studio portrait. Preserve the person's original facial identity, facial structure, natural beard, curly dark hair, and expressive eyes accurately. Dress the person in a festive deep red knit sweater featuring white reindeer and snowflake Nordic patterns, paired with a plush red and white velvet Santa hat with a fluffy pompom and dark trousers, accessorized with a stylish silver wrist watch. Position the person resting their chin thoughtfully on their hand, seated in front of a grand decorated Christmas tree sparkling with warm fairy lights and golden ornaments, with wrapped gift boxes in the foreground. Use soft warm studio portrait lighting, shallow depth of field, rich Christmas colors, and 8k photorealistic rendering. Vertical composition, no text or watermarks.",
      },
      {
        title: 'Festive Outdoor Winter Portrait',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '3:4',
        explanation: 'A joyful winter portrait of a man embracing falling snow outdoors in front of a glowing Christmas log cabin.',
        prompt: "Convert the uploaded photograph into an authentic, joyful winter holiday outdoor portrait. Accurately preserve the person's facial likeness, bone structure, beard, and joyful expression. Position the person standing outdoors with their arms open wide to the sky as gentle snowflakes fall around them. Dress them in a stylish dark winter coat worn over a warm cream ribbed knit sweater, paired with a long textured red wool scarf and dark winter gloves. In the background, set a picturesque snow-covered wooden log cabin illuminated with warm glowing holiday string lights and decorated with a Christmas wreath on the window, nestled among snow-draped pine trees. Cinematic soft snowfall lighting, natural cold-weather skin tones, shallow depth of field, and photorealistic 8k quality. Vertical composition, no text or logos.",
      },
      {
        title: 'Regal Emerald Velvet Christmas Portrait',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '1:1',
        explanation: 'An aristocratic, high-society holiday portrait blending ornate gold-embroidered emerald velvet attire with a cozy manor fireplace and golden Christmas tree.',
        prompt: "Transform the uploaded photograph into an ultra-detailed, aristocratic Christmas portrait. Preserve the person's original facial identity, facial structure, handsome features, and dark hairstyle accurately. Dress the person in an opulent deep emerald green velvet frock coat adorned with intricate baroque gold embroidery along the wide lapels and cuffs, layered over a patterned gold brocade waistcoat, black formal shirt, black tie, tailored black trousers, and polished black leather dress shoes. Position the person sitting with legs crossed in a vintage tufted brown leather armchair in a grand Victorian manor. Beside them, feature an ornate carved dark stone fireplace with a crackling fire and burning candle sconces on the mantel, surrounded by neatly wrapped holiday gifts in kraft paper and gold ribbons. In the background, place a towering Christmas tree illuminated with warm golden fairy lights and shiny gold baubles, next to antique oil paintings on wood-paneled walls. Rich warm ambient lighting, elegant festive atmosphere, photorealistic 8k quality, 1:1 square composition, no text or watermarks.",
      },
      {
        title: 'Heartwarming Holiday Dog Portrait',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '1:1',
        explanation: 'A tender holiday portrait capturing the joy and warmth of embracing a golden retriever on Christmas morning beside a glowing tree.',
        prompt: "Convert the uploaded photograph into a heartwarming, candid Christmas morning portrait. Accurately preserve the person's facial likeness, beard, genuine smile, and natural facial features. Position the person kneeling happily on a soft white faux fur rug, lovingly embracing and nuzzling a beautiful fluffy golden retriever dog that leans affectionately into their chest. Dress the person in a classic red and white plush Santa hat, paired with a cozy cream-colored Nordic knit sweater with brown geometric patterns, grey denim jeans, and festive patterned socks. In the background, set a brightly lit Christmas tree decorated with warm fairy lights and soft pastel ornaments, with wrapped gift packages on the floor and a warm cozy living room setting. Soft diffused morning holiday lighting, shallow depth of field, authentic emotional atmosphere, photorealistic 8k rendering, 1:1 square composition, no text or watermarks.",
      },
      {
        title: 'Christmas Lights Bokeh Portrait',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '3:4',
        explanation: 'A joyful Christmas morning scene surrounded by beautifully wrapped presents and morning sunlight.',
        prompt: "Transform the uploaded photograph into a candid, joyful Christmas morning scene. Preserve natural facial identity and expression. Dress the person in festive holiday loungewear or pajamas. Place them beside a brightly lit Christmas tree surrounded by colorful opened and wrapped gift boxes, glossy wrapping paper, and morning sunlight streaming through the window. Warm, authentic photographic feel, vertical 2:3 framing.",
      },
      {
        title: 'Festive Red Dress Christmas Photoshoot',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '3:4',
        explanation: 'An atmospheric evening street walk surrounded by glowing holiday light installations and festive store windows.',
        prompt: "Convert the uploaded photograph into a cinematic holiday evening street portrait. Preserve facial features and hair naturally. Dress the person in a stylish modern winter trench coat and knit scarf. Place them on an illuminated downtown boulevard decorated with grand Christmas light arches, glowing store windows, and glistening damp pavement with colorful festive reflections. Vertical 2:3 composition, shallow depth of field, photorealistic.",
      },
      {
        title: 'Christmas Snow Globe Portrait',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '3:4',
        explanation: 'A warm festive dining scene seated at an elaborately decorated holiday table with candles and pine centerpieces.',
        prompt: "Use the uploaded photograph to create a rich, warm Christmas dinner portrait. Preserve original facial identity. Position the person at an elegant holiday dining table laid with fine china, glowing tapered candles, pinecone and holly centerpieces, and traditional Christmas dishes. Warm ambient holiday dining illumination, vertical 2:3 framing, photorealistic 8k rendering.",
      },
    ],
    faqs: [
      {
        question: 'Can I use Google Gemini or ChatGPT to create these Christmas photos?',
        answer: 'Yes. Both Google Gemini and ChatGPT (with DALL-E 3) support image uploads and image-to-image editing. Attach your clear selfie or portrait, copy one of the prompts in this guide, and generate your holiday portrait.',
      },
      {
        question: 'How do I ensure the AI preserves my real face?',
        answer: "Always instruct the AI to 'preserve original facial identity, natural bone structure, beard, and recognizable features accurately'. Uploading a high-resolution, well-lit photo with your face directly facing the camera yields the best results.",
      },
      {
        question: 'Are these Christmas AI prompts free to copy?',
        answer: 'Yes, all prompts in this guide are 100% free to copy and customize. Click the COPY PROMPT button beneath any prompt box to instantly copy the text to your clipboard.',
      },
    ],
    content: `
Celebrate the holiday season by transforming your photos into festive masterpieces! With modern AI image generators like **Google Gemini** and **ChatGPT**, you can turn an everyday selfie or portrait into an enchanting holiday portrait—complete with decorated Christmas trees, crackling fireplaces, snow-dusted lanterns, and cozy winter fashion.

In this guide, we present **10 original Christmas AI photo editing prompts** designed specifically for image-to-image workflows. Each prompt preserves your natural facial identity while placing you in cinematic holiday environments.

---

## How to Create Christmas AI Photos {#how-to-create}

1. **Select a clear reference photo**: Choose a well-lit photo where your face is clearly visible and unobstructed.
2. **Open your preferred AI tool**: Navigate to Google Gemini or ChatGPT Plus with image generation capabilities.
3. **Upload your picture**: Attach your reference portrait in the chat prompt.
4. **Copy a prompt below**: Use our 1-click **COPY PROMPT** button beneath your desired style.
5. **Generate & Refine**: Adjust lighting, clothing colors, or holiday props to personalize your festive portrait.

---

## 1. Christmas Candy Cane Glamour Portrait {#prompt-1}

**The style:** A high-fashion holiday studio look blending luxury red velvet fashion, candy cane accents, and warm twinkling fairy lights.

![Festive Christmas portrait featuring a man in a red Santa-inspired outfit sitting in a decorated Christmas studio with candy canes and glowing lights.](/blog/christmas/christmas-candy-cane-glamour-portrait.webp "Festive candy cane Christmas studio portrait with elegant red styling.")

[PROMPT:1]

---

## 2. Cozy Christmas Tree Portrait {#prompt-2}

**The style:** A cozy, heartwarming fireside portrait featuring a traditional decorated tree, glowing fireplace, and classic winter knitwear.

![Cozy Christmas portrait of a man wearing a cream festive sweater and red scarf beside a decorated Christmas tree and warm fireplace.](/blog/christmas/cozy-christmas-tree-portrait.webp "Cozy Christmas evening portrait beside a beautifully decorated tree.")

[PROMPT:2]

---

## 3. Snowy Winter Wonderland Portrait {#prompt-3}

**The style:** An enchanting winter outdoor portrait with gently falling snow, warm holiday coat, and frosted pine trees.

![Man wearing a dark winter coat and red scarf sitting in a snowy mountain landscape beside a warmly illuminated cabin.](/blog/christmas/snowy-winter-wonderland-portrait.webp "Winter portrait surrounded by snow-covered mountains and pine trees.")

[PROMPT:3]

---

## 4. Santa Hat Studio Portrait {#prompt-4}

**The style:** A charming, festive holiday studio portrait with a classic red Santa hat, patterned reindeer sweater, and sparkling Christmas tree bokeh.

![Festive holiday studio portrait featuring a man wearing a plush red Santa hat and Nordic reindeer knit sweater beside a decorated Christmas tree.](/blog/christmas/santa-hat-studio-portrait.webp "Festive Santa hat studio portrait with classic holiday sweater styling.")

[PROMPT:4]

---

## 5. Festive Outdoor Winter Portrait {#prompt-5}

**The style:** A joyful, open-arms winter scene capturing the magic of falling snow in front of a warm illuminated alpine holiday cabin.

![Joyful outdoor winter portrait of a man with arms outstretched embracing falling snow in front of a glowing wooden cabin.](/blog/christmas/festive-outdoor-winter-portrait.webp "Joyful outdoor winter portrait embracing falling snow beside a festive alpine cabin.")

[PROMPT:5]

---

## 6. Regal Emerald Velvet Christmas Portrait {#prompt-6}

**The style:** An aristocratic, high-society holiday aesthetic blending ornate gold-embroidered emerald velvet with classic Victorian library architecture.

![Aristocratic holiday portrait of a man in an embroidered emerald velvet coat seated in a luxury Christmas manor beside a fireplace.](/blog/christmas/regal-emerald-christmas-portrait.webp "Aristocratic holiday portrait in an emerald velvet jacket beside a glowing Christmas hearth.")

[PROMPT:6]

---

## 7. Heartwarming Holiday Dog Portrait {#prompt-7}

**The style:** A tender, candid festive portrait capturing the joy and warmth of celebrating Christmas morning with a golden retriever.

![Heartwarming Christmas portrait of a man wearing a Santa hat kneeling on a fur rug and hugging a golden retriever beside a glowing tree.](/blog/christmas/cozy-christmas-dog-portrait.webp "Heartwarming holiday moment sharing Christmas joy with a golden retriever.")

[PROMPT:7]

---

## 8. Christmas Lights Bokeh Portrait {#prompt-8}

**The style:** A joyful Christmas morning scene surrounded by beautifully wrapped presents and morning sunlight.

![Man reading a Christmas storybook in a warmly decorated vintage study.](/blog/christmas/christmas-prompt-08.webp "Man reading a Christmas storybook in a warmly decorated vintage study.")

[PROMPT:8]

---

## 9. Festive Red Dress Christmas Photoshoot {#prompt-9}

**The style:** An atmospheric evening street walk surrounded by glowing holiday light installations and festive store windows.

![Man celebrating in a snowy Christmas village wearing a red winter jacket.](/blog/christmas/christmas-prompt-09.webp "Man celebrating in a snowy Christmas village wearing a red winter jacket.")

[PROMPT:9]

---

## 10. Christmas Snow Globe Portrait {#prompt-10}

**The style:** A festive evening scene at a bustling holiday market with glowing carnival lights and gently falling snow.

![Man wearing a dark winter coat and red scarf holding hot chocolate at a snowy Christmas market.](/blog/christmas/christmas-prompt-10.webp "Man wearing a dark winter coat and red scarf holding hot chocolate at a snowy Christmas market.")

[PROMPT:10]

---

## Tips for Getting the Best Christmas AI Photos {#tips}

1. **Use clear, well-lit reference photos**: Sharp facial features allow the AI to match your bone structure and natural expression without distortion.
2. **Explicitly request facial preservation**: Always include phrases like *"preserve original facial identity, facial structure, and natural features"*.
3. **Specify holiday lighting styles**: Mention warm candle glow, bokeh fairy lights, or twilight ambiance to achieve rich festive atmosphere.
4. **Choose appropriate aspect ratios**: 2:3 and 4:5 vertical framing are ideal for portraiture, mobile screens, and Instagram stories.
5. **Tweak wardrobe details**: Specify festive textures like chunky knit sweaters, fleece lining, velvet, and wool scarves.

---

## Final Thoughts & Holiday Greetings {#final-thoughts}

Creating Christmas-themed AI portraits is a fun, creative way to celebrate the holiday season, design personalized holiday cards, or update your social media profile pictures with holiday cheer. Experiment with these 10 prompts to find the festive style that best fits your personality.

Happy holidays and merry Christmas!
    `,
  },
  {
    _id: 'article-romantic-couple',
    title: '10 Best Romantic Couple AI Photo Editing Prompts for Gemini and ChatGPT (2026)',
    slug: 'best-romantic-couple-ai-photo-editing-prompts',
    excerpt: "Want to turn an ordinary couple photograph into a beautiful romantic photoshoot? Explore 10 romantic couple AI photo editing prompts for Google Gemini and ChatGPT.",
    coverImage: '/blog/couple/couple-prompt-01.webp',
    coverImageAlt: 'Romantic Indian couple wearing a traditional red silk saree and embroidered ivory kurta in a decorated Indian courtyard.',
    category: 'AI Photo Editing',
    categorySlug: 'ai-photo-editing',
    tags: ['Romantic Couple', 'Couple Prompts', 'AI Photo Editing', 'Google Gemini', 'ChatGPT', 'Pre-Wedding'],
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      role: 'Prompt Engineer & Photographer',
    },
    readTime: '8 min read',
    publishedAt: '2026-11-26',
    updatedAt: '2026-11-26',
    featured: true,
    popular: true,
    relatedPromptCategory: 'couple',
    toc: [
      { id: 'how-to-create', title: 'How to Create Romantic Couple Photos Using Gemini' },
      { id: 'prompt-1', title: '1. Traditional Indian Couple in Saree and Kurta' },
      { id: 'prompt-2', title: '2. Royal Couple in Luxury Western Outfits' },
      { id: 'prompt-3', title: '3. Romantic Indian Pre-Wedding Photoshoot' },
      { id: 'prompt-4', title: '4. Rainy Night Romantic Couple Portrait' },
      { id: 'prompt-5', title: '5. Sunset Beach Romantic Photoshoot' },
      { id: 'prompt-6', title: '6. Royal Indian Palace Couple Portrait' },
      { id: 'prompt-7', title: '7. Cozy Winter Romantic Couple Portrait' },
      { id: 'prompt-8', title: '8. Luxury Garden Romantic Photoshoot' },
      { id: 'prompt-9', title: '9. Vintage Romantic Couple Photography' },
      { id: 'prompt-10', title: '10. Fairytale Romantic Garden Photoshoot' },
      { id: 'tips', title: 'Tips for Better Romantic Couple AI Photos' },
      { id: 'final-thoughts', title: 'Final Thoughts' },
      { id: 'faqs', title: 'Frequently Asked Questions' },
    ],
    prompts: [
      {
        title: 'Traditional Indian Couple in Saree and Kurta',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '4:5',
        explanation: 'Create a beautiful desi romantic portrait featuring a woman wearing an elegant traditional saree and a man dressed in a matching kurta.',
        prompt: "Transform the uploaded couple photograph into a stunning traditional Indian romantic photoshoot. Preserve both individuals' original facial identities, facial structures, skin tones and recognizable features. Dress the woman in a luxurious deep-red silk saree with intricate golden embroidery, traditional jewellery, elegant earrings and a beautifully styled hairstyle. Dress the man in an elegant cream-coloured embroidered kurta with a matching churidar. Position the couple standing close together in a beautifully decorated traditional Indian courtyard with warm golden lanterns, marigold flowers, carved pillars and subtle festive decorations. Capture a natural romantic moment with the woman gently holding the man's hand while they exchange affectionate smiles. Use professional Indian wedding photography, warm cinematic lighting, realistic fabric textures and premium editorial photography. Vertical 4:5 composition.",
      },
      {
        title: 'Royal Couple in Luxury Western Outfits',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '4:5',
        explanation: 'Create a sophisticated romantic portrait featuring a man in a perfectly tailored formal suit and a woman wearing a luxurious evening gown.',
        prompt: "Transform the uploaded couple photograph into an elegant luxury romantic photoshoot. Preserve both individuals' original facial identities and recognizable features. Dress the man in a perfectly tailored black tuxedo with a crisp white shirt and black bow tie. Dress the woman in an elegant champagne-gold evening gown with delicate detailing and flowing fabric. Position the couple inside a luxurious European ballroom featuring grand chandeliers, marble flooring, golden architectural details and elegant floral arrangements. Show the man gently holding his partner's hand while she looks towards him with a natural smile. Use sophisticated fashion photography, cinematic golden lighting, realistic skin textures and high-end editorial photography. Create an atmosphere of timeless luxury and romance.",
      },
      {
        title: 'Romantic Indian Pre-Wedding Photoshoot',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '4:5',
        explanation: 'Create a cinematic pre-wedding photograph inspired by professional Indian wedding photography, with beautiful traditional clothing and a dreamy outdoor location.',
        prompt: "Transform the uploaded couple photograph into a cinematic Indian pre-wedding photoshoot. Preserve both individuals' original facial identities and natural appearances. Dress the woman in a flowing pastel-pink lehenga with delicate floral embroidery and elegant jewellery. Dress the man in an ivory sherwani with subtle embroidery. Position the couple in a beautiful palace garden surrounded by blooming flowers, elegant fountains and decorative architecture. Capture the woman gently resting her head against her partner's shoulder while he holds her hand. Use soft golden-hour sunlight, cinematic depth of field, professional wedding photography and realistic clothing details. Create a romantic luxury pre-wedding photography aesthetic.",
      },
      {
        title: 'Rainy Night Romantic Couple Portrait',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '4:5',
        explanation: 'A cinematic rainy-night photoshoot featuring beautiful reflections, city lights and an intimate romantic moment.',
        prompt: "Transform the uploaded couple photograph into a cinematic romantic nighttime portrait. Preserve both individuals' original facial identities and recognizable features. Dress the man in a sophisticated dark formal outfit and the woman in an elegant black evening dress. Position the couple standing beneath a transparent umbrella on a beautiful city street during gentle rainfall. Capture the man gently holding the woman's waist while they look into each other's eyes. Add reflections of warm streetlights, blurred neon signs, wet pavement and soft raindrops. Use dramatic cinematic lighting, realistic water reflections, professional nighttime photography and beautiful shallow depth of field. Create an intimate romantic movie-scene atmosphere.",
      },
      {
        title: 'Sunset Beach Romantic Photoshoot',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '4:5',
        explanation: 'Create a dreamy romantic photograph of a couple enjoying a beautiful sunset beside the ocean.',
        prompt: "Transform the uploaded couple photograph into a breathtaking sunset beach photoshoot. Preserve both individuals' original facial identities, facial structures and recognizable features. Dress the woman in a flowing elegant pastel-white summer dress and the man in a relaxed beige linen shirt with matching trousers. Position the couple walking barefoot along the shoreline while holding hands. Capture a natural moment with the woman turning towards her partner as the wind gently moves her dress and hair. Include beautiful ocean waves, golden sunlight reflecting on the water, distant clouds and a warm sunset sky. Use professional romantic lifestyle photography, natural lighting, cinematic composition and realistic environmental details.",
      },
      {
        title: 'Royal Indian Palace Couple Portrait',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '4:5',
        explanation: 'Create a royal Indian couple portrait inspired by traditional palace photography, featuring luxurious ethnic clothing and magnificent architecture.',
        prompt: "Transform the uploaded couple photograph into a royal Indian palace photoshoot. Preserve both individuals' original facial identities and recognizable features. Dress the woman in an elaborate royal maroon lehenga with detailed gold embroidery, traditional kundan jewellery and an elegant dupatta. Dress the man in a luxurious ivory sherwani with gold detailing and a traditional stole. Position the couple inside a magnificent Rajasthani palace courtyard featuring carved marble pillars, traditional arches, ornate doors and elegant chandeliers. Capture the man standing confidently beside his partner as she gently holds his arm. Use rich royal colours, dramatic architectural lighting, realistic fabric details and premium Indian wedding editorial photography.",
      },
      {
        title: 'Cozy Winter Romantic Couple Portrait',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '4:5',
        explanation: 'Create a warm and intimate winter photograph featuring a couple enjoying a peaceful moment together in a beautiful winter setting.',
        prompt: "Transform the uploaded couple photograph into a cozy winter romantic portrait. Preserve both individuals' original facial identities and recognizable features. Dress the woman in an elegant cream winter coat, knitted scarf and gloves. Dress the man in a stylish dark wool coat and a matching winter scarf. Position the couple sitting close together on a wooden bench overlooking a snow-covered mountain village. Capture a natural affectionate moment as they hold warm coffee mugs and smile at each other. Include gently falling snow, pine trees, warm cabin lights and beautiful mountain scenery. Use soft winter lighting, realistic snow textures and professional lifestyle photography.",
      },
      {
        title: 'Luxury Garden Romantic Photoshoot',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '4:5',
        explanation: 'A beautiful outdoor romantic portrait featuring elegant outfits, blooming flowers and a sophisticated garden setting.',
        prompt: "Transform the uploaded couple photograph into a luxury garden romantic photoshoot. Preserve both individuals' original facial identities and recognizable features. Dress the woman in an elegant flowing pastel-lavender gown and the man in a perfectly fitted navy-blue formal suit. Position the couple in a beautifully landscaped European garden featuring blooming roses, decorative pathways, elegant fountains and lush greenery. Capture a natural moment as the man gently kisses the woman's hand while she smiles. Use soft afternoon sunlight, beautiful floral details, professional fashion photography and cinematic depth of field. Create an elegant romantic editorial atmosphere.",
      },
      {
        title: 'Vintage Romantic Couple Photography',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '4:5',
        explanation: 'Give your couple photograph a timeless vintage appearance inspired by classic romantic film photography.',
        prompt: "Transform the uploaded couple photograph into a timeless vintage romantic portrait. Preserve both individuals' original facial identities and recognizable features. Dress the woman in an elegant vintage cream-coloured dress with delicate lace details and the man in a classic brown formal suit with a white shirt. Position the couple inside a charming old European café with wooden furniture, vintage windows, warm table lamps and subtle floral decorations. Capture a candid moment as they sit opposite each other, smiling and enjoying a quiet conversation. Apply subtle analog film grain, warm muted colours, natural soft lighting and authentic vintage editorial photography.",
      },
      {
        title: 'Fairytale Romantic Garden Photoshoot',
        model: 'Google Gemini & ChatGPT',
        aspectRatio: '4:5',
        explanation: 'Create a magical romantic portrait featuring dreamy lighting, beautiful outfits and a fairytale-inspired garden.',
        prompt: "Transform the uploaded couple photograph into a magical fairytale romantic photoshoot. Preserve both individuals' original facial identities and recognizable features. Dress the woman in an elegant flowing blush-pink gown with delicate floral detailing and the man in a sophisticated cream formal suit. Position the couple in an enchanted garden surrounded by blooming flowers, glowing fairy lights, beautiful trees and a romantic floral arch. Capture the couple dancing together while the woman's gown flows naturally with the movement. Add soft glowing particles, dreamy golden-hour lighting, cinematic depth of field and realistic photography textures. Create an enchanting luxury romantic portrait.",
      },
    ],
    faqs: [
      {
        question: 'Can I create romantic couple photos using Gemini?',
        answer: 'Yes. Upload your couple photograph to Google Gemini and use a detailed image-editing prompt to create a romantic portrait.',
      },
      {
        question: 'Can I use these prompts with ChatGPT?',
        answer: "Yes. These prompts can be used with ChatGPT's image generation and editing capabilities.",
      },
      {
        question: "Can AI preserve both people's faces?",
        answer: 'AI can attempt to preserve the original facial identities when provided with clear reference photographs, although results may vary.',
      },
      {
        question: 'Can I create traditional Indian couple photos using AI?',
        answer: 'Yes. You can describe sarees, kurtas, lehengas, sherwanis, traditional jewellery and Indian wedding locations to create different desi couple photography styles.',
      },
      {
        question: 'Are these romantic couple prompts free?',
        answer: 'Yes. The prompts are free to copy. However, image-generation limits and subscription requirements depend on the platform.',
      },
    ],
    content: `
Want to turn an ordinary couple photograph into a beautiful romantic photoshoot? AI image generators can help you create stunning couple portraits without booking an expensive photographer or visiting a professional studio.

Whether you want a traditional Indian couple photoshoot featuring a beautiful saree and kurta, an elegant Western-style portrait with a formal suit and evening gown, or a dreamy pre-wedding photograph, the right AI prompt can transform your pictures into something special.

In this guide, we've collected **10 romantic couple AI photo editing prompts** that you can try with **Google Gemini** and **ChatGPT**. Each prompt features a different photography style, outfit, pose and environment.

---

## How to Create Romantic Couple Photos Using Gemini {#how-to-create}

1. Choose a clear photograph of yourself and your partner.
2. Open Google Gemini or ChatGPT.
3. Upload your couple photograph.
4. Copy your favourite prompt from this article.
5. Paste it into the AI image generator.
6. Generate your photograph and request adjustments if needed.

For the best results, use a clear reference photograph and include instructions to preserve both people's original facial identities.

---

## 1. Traditional Indian Couple in Saree and Kurta {#prompt-1}

Create a beautiful desi romantic portrait featuring a woman wearing an elegant traditional saree and a man dressed in a matching kurta. This style is perfect for couples who love Indian traditional fashion.

![Romantic Indian couple wearing a traditional red silk saree and embroidered ivory kurta in a decorated Indian courtyard.](/blog/couple/couple-prompt-01.webp "Traditional Indian couple portrait in elegant festive attire.")

[PROMPT:1]

---

## 2. Royal Couple in Luxury Western Outfits {#prompt-2}

Create a sophisticated romantic portrait featuring a man in a perfectly tailored formal suit and a woman wearing a luxurious evening gown.

![Romantic couple wearing a black tuxedo and champagne-gold evening gown in a luxurious ballroom.](/blog/couple/couple-prompt-02.webp "Elegant couple portrait in luxury evening attire.")

[PROMPT:2]

---

## 3. Romantic Indian Pre-Wedding Photoshoot {#prompt-3}

Create a cinematic pre-wedding photograph inspired by professional Indian wedding photography, with beautiful traditional clothing and a dreamy outdoor location.

![Indian pre-wedding couple wearing an ivory sherwani and blush-pink lehenga in a romantic palace garden.](/blog/couple/couple-prompt-03.webp "Romantic Indian pre-wedding portrait in pastel wedding attire.")

[PROMPT:3]

---

## 4. Rainy Night Romantic Couple Portrait {#prompt-4}

A cinematic rainy-night photoshoot featuring beautiful reflections, city lights and an intimate romantic moment.

![Romantic couple in elegant black outfits sharing an intimate moment under a transparent umbrella on a rainy city street at night.](/blog/couple/couple-prompt-04.webp "Romantic rainy-night couple portrait beneath a glowing umbrella.")

[PROMPT:4]

---

## 5. Sunset Beach Romantic Photoshoot {#prompt-5}

Create a dreamy romantic photograph of a couple enjoying a beautiful sunset beside the ocean.

![Romantic couple walking barefoot along a beach at sunset, wearing a cream linen outfit and a flowing floral dress.](/blog/couple/couple-prompt-05.webp "Romantic sunset stroll along a golden beach.")

[PROMPT:5]

---

## 6. Royal Indian Palace Couple Portrait {#prompt-6}

Create a royal Indian couple portrait inspired by traditional palace photography, featuring luxurious ethnic clothing and magnificent architecture.

[PROMPT:6]

---

## 7. Cozy Winter Romantic Couple Portrait {#prompt-7}

Create a warm and intimate winter photograph featuring a couple enjoying a peaceful moment together in a beautiful winter setting.

[PROMPT:7]

---

## 8. Luxury Garden Romantic Photoshoot {#prompt-8}

A beautiful outdoor romantic portrait featuring elegant outfits, blooming flowers and a sophisticated garden setting.

[PROMPT:8]

---

## 9. Vintage Romantic Couple Photography {#prompt-9}

Give your couple photograph a timeless vintage appearance inspired by classic romantic film photography.

[PROMPT:9]

---

## 10. Fairytale Romantic Garden Photoshoot {#prompt-10}

Create a magical romantic portrait featuring dreamy lighting, beautiful outfits and a fairytale-inspired garden.

[PROMPT:10]

---

## Tips for Better Romantic Couple AI Photos {#tips}

### Preserve both facial identities
Always tell the AI to maintain both people's original facial features, face shapes and recognizable appearances.

### Use clear reference photographs
Choose photographs where both faces are visible and well-lit.

### Experiment with different outfits
Try traditional Indian clothing, formal suits, elegant dresses and casual romantic outfits.

### Avoid unnatural poses
Ask the AI to create natural interactions such as holding hands, looking into each other's eyes or sharing a genuine smile.

---

## Final Thoughts {#final-thoughts}

Romantic couple photography doesn't always require a professional photoshoot. With the right AI prompts, you can experiment with traditional Indian outfits, luxurious formal fashion, dreamy outdoor settings and cinematic romantic scenes.

Try different styles, preserve your favourite memories and create beautiful couple portraits worth sharing.
    `,
  },
];
