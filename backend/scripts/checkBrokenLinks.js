const mongoose = require('mongoose');
require('dotenv').config({path: './.env'});

mongoose.connect(process.env.MONGODB_URI).then(async () => {
  const BlogPost = require('../src/models/BlogPost');
  const Game = require('../src/models/Game');
  
  const posts = await BlogPost.find({ active: true });
  const regex = /\/game\/([a-zA-Z0-9-]+)/g;
  let foundBrokenLinks = false;

  for (const post of posts) {
    let match;
    while((match = regex.exec(post.content)) !== null) {
      const slug = match[1];
      const game = await Game.findOne({ slug });
      
      if (!game) {
        console.log(`[BROKEN] Post "${post.slug}" links to non-existent game: ${slug}`);
        foundBrokenLinks = true;
      } else if (!game.active) {
        console.log(`[BROKEN] Post "${post.slug}" links to deactivated game: ${slug}`);
        foundBrokenLinks = true;
      }
    }
  }

  if (!foundBrokenLinks) {
    console.log('No broken game links found in any active blog posts!');
  }
  process.exit(0);
});
