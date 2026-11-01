const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  const games = await Game.find({ curated: true });
  let updated = 0;
  for (let g of games) {
    if (g.seoContent && g.seoContent.includes('## Our tips')) {
      const newText = g.seoContent.replace('## Our tips', '## Tips and Tricks');
      await Game.findByIdAndUpdate(g._id, { $set: { seoContent: newText }});
      updated++;
    }
  }
  console.log('Updated ' + updated + ' games.');
  process.exit(0);
}
run();
