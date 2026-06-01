const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config({path: './.env'});
mongoose.connect(process.env.MONGODB_URI).then(async () => {
  const Game = require('../src/models/Game');
  const games = await Game.find({ active: true, thumbnail: { $regex: 'githubassets.com', $options: 'i' } });
  const list = games.map(g => '- ' + g.title).join('\n');
  fs.writeFileSync('github_games.txt', list);
  console.log('Done');
  process.exit(0);
});
