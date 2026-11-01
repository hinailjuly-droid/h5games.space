const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

async function moveImages() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    const games = await Game.find({ curated: true }).select('_id title seoContent');
    let updatedCount = 0;
    
    for (let game of games) {
      if (game.seoContent) {
        const imgRegex = /!\[.*?\]\(.*?\)/;
        const match = game.seoContent.match(imgRegex);
        
        if (match) {
          const imgStr = match[0];
          
          // Remove the image from its current location
          let newContent = game.seoContent.replace(imgRegex, '');
          
          // Clean up any weird spacing left at the very top of the text
          newContent = newContent.trim();
          
          // Check if "## How to Play" exists
          if (newContent.includes('## How to Play')) {
             // Insert the image right before "## How to Play"
             // Also add some spacing so it looks nice
             newContent = newContent.replace('## How to Play', `${imgStr}\n\n## How to Play`);
             
             await Game.updateOne({ _id: game._id }, { $set: { seoContent: newContent } });
             updatedCount++;
          } else {
             console.log(`Skipped (No How to Play section): ${game.title}`);
          }
        }
      }
    }
    
    console.log(`\nSuccessfully moved images for ${updatedCount} games.`);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    process.exit(0);
  }
}

moveImages();
