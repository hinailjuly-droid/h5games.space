const Game = require("../models/Game");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// State tracker to prevent multiple simultaneous runs
let isGenerating = false;

async function startBackgroundGeneration(providedApiKey) {
  if (isGenerating) return;
  const finalApiKey = providedApiKey || process.env.GEMINI_API_KEY;
  
  if (!finalApiKey) {
    console.error("No GEMINI_API_KEY found in environment variables or provided.");
    return;
  }

  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${finalApiKey}`;

  isGenerating = true;
  console.log("Starting background AI generation...");

  // Inline generateDescription to easily use finalApiKey
  async function generateDescription(game) {
    const prompt = `
      You are an expert gaming journalist. Write a detailed, engaging description for a browser HTML5 game called "${game.title}". 
      The game belongs to the "${game.category}" category.
      Original short description: "${game.description}".
      Tags: ${game.tags.join(", ")}.

      Your task:
      1. Write an "About ${game.title}" section explaining what the game is, its core loop, and why it is fun.
      2. Write a "How to Play" section explaining the controls, objectives, and tips for beginners.
      
      Requirements:
      - Total length should be around 300 to 500 words.
      - Format the output ONLY in clean HTML (e.g., <p>, <h3>, <ul>, <li>).
      - Do NOT wrap the output in markdown backticks like \`\`\`html.
      - Make the content highly engaging and SEO optimized for HTML5 gaming sites.
    `;

    try {
      const response = await fetch(GEMINI_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7 }
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error ${response.status}`);
      }

      const data = await response.json();
      let text = data.candidates[0].content.parts[0].text;
      text = text.replace(/```html\n?/g, "").replace(/```\n?/g, "").trim();
      return text;
    } catch (err) {
      console.error(`Failed to generate description for ${game.title}:`, err.message);
      return null;
    }
  }

  try {
    const games = await Game.find({
      $or: [
        { customDescription: { $exists: false } },
        { customDescription: "" },
        { customDescription: null }
      ]
    });

    console.log(`Found ${games.length} games needing custom descriptions.`);

    for (let i = 0; i < games.length; i++) {
      const game = games[i];
      console.log(`[${i + 1}/${games.length}] Generating description for: ${game.title}...`);

      const generatedHtml = await generateDescription(game);

      if (generatedHtml) {
        game.customDescription = generatedHtml;
        await game.save();
        console.log(`✅ Saved description for ${game.title}`);
      } else {
        console.log(`❌ Skipped ${game.title}`);
      }

      if (i < games.length - 1) {
        await sleep(4000); // 4s delay to stay under rate limits
      }
    }
    console.log("Background generation complete.");
  } catch (error) {
    console.error("Background AI Generator Error:", error);
  } finally {
    isGenerating = false;
  }
}

module.exports = { startBackgroundGeneration };
