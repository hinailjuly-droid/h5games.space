const mongoose = require('mongoose');

require('dotenv').config({path: './.env'});

const API_KEY = process.env.GEMINI_API_KEY;

const articlesToGenerate = [
  {
    title: "GTA 6 Pre-Orders Are Finally Live",
    slug: "gta-6-pre-orders-are-finally-live",
    category: "News",
    facts: "Pre-orders started June 25, 2026. Standard $79.99, Ultimate $99.99. Release Date Nov 19, 2026.",
    image: "https://image.pollinations.ai/prompt/GTA%206%20vice%20city%20neon%20sports%20car%20video%20game?width=800&height=450&nologo=true"
  },
  {
    title: "God of War Laufey: What to Expect",
    slug: "god-of-war-laufey-what-to-expect",
    category: "Guides",
    facts: "Prequel where you play as Faye (Laufey) after her death. Set in 'The Everywhen' afterlife. Fast aerial combat. Phranque is her cosmic companion. Rumored release early 2027.",
    image: "https://image.pollinations.ai/prompt/Viking%20female%20warrior%20Laufey%20God%20of%20War%20afterlife%20mythology?width=800&height=450&nologo=true"
  },
  {
    title: "Wolverine Releases September 2026",
    slug: "wolverine-releases-september-2026",
    category: "News",
    facts: "Official release Sept 15, 2026. PS5 exclusive. Developed by Insomniac Games.",
    image: "https://image.pollinations.ai/prompt/Wolverine%20mutant%20superhero%20adamantium%20claws%20video%20game%20graphics?width=800&height=450&nologo=true"
  },
  {
    title: "007 First Light is a Massive Hit",
    slug: "007-first-light-massive-hit",
    category: "News",
    facts: "Released May 27, 2026. Sold 3 million copies in two weeks. Developed by IO Interactive.",
    image: "https://image.pollinations.ai/prompt/James%20Bond%20007%20secret%20agent%20tuxedo%20gun%20video%20game?width=800&height=450&nologo=true"
  },
  {
    title: "Hollow Knight Silksong Updates",
    slug: "hollow-knight-silksong-updates",
    category: "News",
    facts: "Discuss the long wait for Silksong and recent gameplay reveals.",
    image: "https://image.pollinations.ai/prompt/Hollow%20Knight%20Silksong%20Hornet%20needle%20insect%20metroidvania?width=800&height=450&nologo=true"
  },
  {
    title: "Why Cozy Games Are Taking Over",
    slug: "why-cozy-games-are-taking-over",
    category: "Editorials",
    facts: "Explore the rise of farming sims, relaxing games, and avoiding toxicity in multiplayer.",
    image: "https://image.pollinations.ai/prompt/Cozy%20farming%20simulator%20game%20cute%20animals%20isometric?width=800&height=450&nologo=true"
  },
  {
    title: "Cloud Gaming vs Local Hardware",
    slug: "cloud-gaming-vs-local-hardware",
    category: "Technology",
    facts: "Debate the pros and cons of cloud gaming services versus buying an expensive PC.",
    image: "https://image.pollinations.ai/prompt/Cloud%20gaming%20server%20streaming%20futuristic%20controller?width=800&height=450&nologo=true"
  },
  {
    title: "Top 10 Low-Spec PC Games",
    slug: "top-10-low-spec-pc-games",
    category: "Guides",
    facts: "List great games that can run on integrated graphics in 2026.",
    image: "https://image.pollinations.ai/prompt/Old%20laptop%20running%20indie%20pixel%20art%20game?width=800&height=450&nologo=true"
  },
  {
    title: "PS5 Graphics vs High-End PCs",
    slug: "ps5-graphics-vs-high-end-pcs",
    category: "Technology",
    facts: "Analyze how current consoles hold up against modern RTX GPUs.",
    image: "https://image.pollinations.ai/prompt/PS5%20console%20next%20to%20high%20end%20gaming%20PC%20RGB?width=800&height=450&nologo=true"
  },
  {
    title: "The Anatomy of Viral Mobile Hits",
    slug: "anatomy-of-viral-mobile-hits",
    category: "Editorials",
    facts: "Analyze what makes casual games like Suika Game explode in popularity.",
    image: "https://image.pollinations.ai/prompt/Mobile%20phone%20viral%20casual%20puzzle%20game%20colorful?width=800&height=450&nologo=true"
  },
  {
    title: "AI and Procedural Game Worlds",
    slug: "ai-procedural-game-worlds",
    category: "Technology",
    facts: "Discuss how AI is generating infinite levels and dynamic NPCs in 2026.",
    image: "https://image.pollinations.ai/prompt/Artificial%20intelligence%20generating%203D%20video%20game%20world%20procedural?width=800&height=450&nologo=true"
  },
  {
    title: "Best Free Web Games in 2026",
    slug: "best-free-web-games-2026",
    category: "Guides",
    facts: "Highlight the top browser games you can play right now without downloads.",
    image: "https://image.pollinations.ai/prompt/HTML5%20browser%20gaming%20arcade%20laptop%20screen?width=800&height=450&nologo=true"
  },
  {
    title: "Retro Emulation in the Browser",
    slug: "retro-emulation-in-browser",
    category: "Technology",
    facts: "How WebAssembly lets you play PS2 and GameCube games directly in Chrome.",
    image: "https://image.pollinations.ai/prompt/Retro%20CRT%20TV%20playing%20classic%20video%20games%20controller?width=800&height=450&nologo=true"
  },
  {
    title: "The WebAssembly Game Revolution",
    slug: "webassembly-game-revolution",
    category: "Technology",
    facts: "Explain how Wasm is closing the performance gap between native and web games.",
    image: "https://image.pollinations.ai/prompt/WebAssembly%20code%20futuristic%20gaming%20browser%20performance?width=800&height=450&nologo=true"
  }
];

async function generateArticle(article) {
  const prompt = `Write a MASSIVE, COMPREHENSIVE, DEEP-DIVE 1,500-word article for a gaming website titled "${article.title}". 
  CRITICAL: You MUST write at least 1,200 words. Do not write a short summary. Expand heavily on every single point. 
  Include detailed lore analysis, extensive gameplay speculation, fictional but plausible developer quotes, deep technical analysis, and long paragraphs.
  Use markdown formatting (H2, H3, bold text, bullet points). 
  Do not include the main title (H1). 
  Make sure to deeply integrate this specific factual information: ${article.facts}
  End with a detailed concluding paragraph.`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.8, maxOutputTokens: 8192 }
      })
    });
    const data = await response.json();
    if (data.candidates && data.candidates.length > 0) {
      return data.candidates[0].content.parts[0].text;
    } else {
      console.error('Error with AI response:', data);
      return null;
    }
  } catch (err) {
    console.error('Fetch error:', err);
    return null;
  }
}

mongoose.connect(process.env.MONGODB_URI).then(async () => {
  const BlogPost = require('../src/models/BlogPost');
  
  console.log('Starting massive article generation...');
  for (let i = 0; i < articlesToGenerate.length; i++) {
    const art = articlesToGenerate[i];
    console.log(`[${i+1}/${articlesToGenerate.length}] Generating: ${art.title}`);
    
    const content = await generateArticle(art);
    if (!content) {
      console.log(`Failed to generate content for ${art.title}`);
      continue;
    }

    const excerptMatch = content.match(/^(?!#)(.+)$/m);
    let excerpt = excerptMatch ? excerptMatch[1].substring(0, 150) + '...' : 'Read more about ' + art.title;
    excerpt = excerpt.replace(/\*/g, '').trim();

    await BlogPost.findOneAndUpdate(
      { slug: art.slug },
      {
        $set: {
          title: art.title,
          content: content,
          excerpt: excerpt,
          coverImage: art.image,
          category: art.category,
          readTime: '8 min read',
          tags: ['Gaming', art.category],
          author: {
            name: "h5games space Team",
            avatar: "/assets/brand/logo.png"
          }
        }
      },
      { upsert: true, new: true }
    );
    
    console.log(`Successfully updated: ${art.title}`);
    await new Promise(r => setTimeout(r, 4000));
  }

  console.log('Finished generating all 14 massive articles!');
  process.exit(0);
});
