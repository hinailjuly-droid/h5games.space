const mongoose = require('mongoose');
require('dotenv').config({path: './.env'});
mongoose.connect(process.env.MONGODB_URI).then(async () => {
  const Game = require('../src/models/Game');
  const BlogPost = require('../src/models/BlogPost');
  
  // Update Game
  await Game.findOneAndUpdate({ slug: 'antipacman' }, { thumbnail: '/blog/anti-pacman.png' });
  // Update Blog
  await BlogPost.findOneAndUpdate({ slug: 'best-web-games-offline-html5-2026' }, { coverImage: '/blog/anti-pacman.png' });
  
  // Count remaining
  const githubGames = await Game.find({ thumbnail: { $regex: 'githubassets.com', $options: 'i' } });
  console.log('Updated Anti Pac Man. Found ' + githubGames.length + ' other games using github thumbnails.');
  githubGames.forEach(g => console.log('- ' + g.title));
  
  process.exit(0);
});
