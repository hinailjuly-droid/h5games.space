const mongoose = require('mongoose');
require('dotenv').config({path: './.env'});
mongoose.connect(process.env.MONGODB_URI).then(async () => {
  const Game = require('../src/models/Game');
  const result = await Game.updateMany(
    { thumbnail: { $regex: 'githubassets', $options: 'i' } }, 
    { active: false, status: 'deactivated_as_github_game' }
  );
  console.log(`Deactivated ${result.modifiedCount} games using github thumbnails.`);
  process.exit(0);
});
