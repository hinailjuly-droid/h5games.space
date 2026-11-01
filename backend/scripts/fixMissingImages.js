const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

async function fixMissingImages() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    // Find games that are curated but don't have the image markdown in seoContent
    const games = await Game.find({ curated: true }).select('_id title thumbnail seoContent');
    let fixedCount = 0;
    
    for (let game of games) {
      if (game.seoContent && !game.seoContent.includes('![')) {
        // Prepend the image markdown
        const imageMarkdown = `![${game.title}](${game.thumbnail})\n\n`;
        const updatedContent = imageMarkdown + game.seoContent;
        
        await Game.updateOne({ _id: game._id }, { $set: { seoContent: updatedContent } });
        console.log(`Fixed missing image for: ${game.title}`);
        fixedCount++;
      }
    }
    
    console.log(`\nSuccessfully fixed images for ${fixedCount} games.`);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    process.exit(0);
  }
}

fixMissingImages();
