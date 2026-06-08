const mongoose = require('mongoose');
require('dotenv').config({path: './.env'});
mongoose.connect(process.env.MONGODB_URI).then(async () => {
  const Game = require('../src/models/Game');
  const games = await Game.find({ active: true, thumbnail: { $not: /githubassets/ } }).sort({ plays: -1 }).limit(10);
  games.forEach(g => console.log(g.title, '|||', g.slug));
  process.exit(0);
});
