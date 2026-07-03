const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const Game = require('../src/models/Game');
const API_KEY = process.env.GEMINI_API_KEY;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function curateGames() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Fetch top 10 games by views
    const topGames = await Game.find({ active: true, curated: false }).sort({ views: -1, plays: -1 }).limit(10);
    console.log(`Found ${topGames.length} top games to curate.`);

    for (let i = 0; i < topGames.length; i++) {
      const game = topGames[i];
      console.log(`[${i+1}/${topGames.length}] Curating ${game.title}...`);

      const prompt = `You are a professional video game journalist and editor for a high-quality browser gaming portal. 
      I am giving you a game to review. Write a MASSIVE, deep-dive 1,000+ word editorial piece in Markdown format. This must be extremely detailed, robust, and full of dense paragraphs.
      
      CRITICAL INSTRUCTIONS: 
      1. You MUST write at least 1,000 words. Expand heavily on every single point. 
      2. Whenever you mention a keyboard key (like W, A, S, D, Spacebar, Enter, Arrows), you MUST wrap it in Markdown inline backticks like this: \`W\`, \`Spacebar\`, \`↑\`. This is mandatory for the controls section to visually represent keypads.
      3. You must embed the following thumbnail image at the very beginning of the article exactly like this: ![${game.title}](${game.thumbnail})

      Game Title: ${game.title}
      Category: ${game.category}
      Default Description: ${game.description}

      Your review MUST follow this EXACT format and structure. Do NOT include an H1 or introductory header:
      
      ![${game.title}](${game.thumbnail})
      
      (Write a massive 400-word overview introduction right here without any header above it. Discuss the premise, graphics, and atmosphere).
      
      ## How to Play
      (Write a detailed 300-word breakdown of the mechanics, controls, and how the game progresses. Format this strictly as bullet points. Use <kbd> tags for ALL controls!).
      
      ## Tips and Tricks
      (Provide 5-7 concrete, in-depth strategies to master the game, totaling 300 words. Format this strictly as bullet points).

      Output ONLY valid Markdown. Be engaging, write like a real gamer. Do not mention that you are an AI.`;

      let success = false;
      while (!success) {
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
          
          if (data.error && data.error.code === 429) {
            console.log(`Rate limited (429 Quota Exceeded). Sleeping for 1 HOUR before trying again...`);
            await sleep(3600000); // 1 hour
            continue;
          }

          if (data.candidates && data.candidates.length > 0) {
            let text = data.candidates[0].content.parts[0].text;
            
            // Clean up if AI accidentally adds an H1
            text = text.replace(/^# .*\\n/g, '');

            await Game.findByIdAndUpdate(game._id, {
              $set: {
                curated: true,
                seoContent: text
              },
              $unset: { editorRating: 1 }
            });
            console.log(`Successfully curated: ${game.title}`);
            success = true;
          } else {
            console.error(`Invalid API response for ${game.title}. Retrying in 10s...`, data);
            await sleep(10000);
          }
        } catch (err) {
          console.error(`Fetch attempt failed for ${game.title}. Retrying in 10s...`, err.message);
          await sleep(10000);
        }
      }

      // Delay to avoid hitting the 15 RPM limit
      await sleep(5000);
    }

    console.log('Curating complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error during curation:', error);
    process.exit(1);
  }
}

curateGames();
