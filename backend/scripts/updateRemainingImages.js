const mongoose = require('mongoose');
require('dotenv').config({path: './.env'});
mongoose.connect(process.env.MONGODB_URI).then(async () => {
  const BlogPost = require('../src/models/BlogPost');
  await BlogPost.updateOne({ slug: 'wolverine-releases-september-2026' }, { $set: { coverImage: '/assets/blog/wolverine.png' } });
  await BlogPost.updateOne({ slug: 'top-10-low-spec-pc-games' }, { $set: { coverImage: '/assets/blog/low-spec.png' } });
  await BlogPost.updateOne({ slug: 'ps5-graphics-vs-high-end-pcs' }, { $set: { coverImage: '/assets/blog/ps5-pc.png' } });
  await BlogPost.updateOne({ slug: 'anatomy-of-viral-mobile-hits' }, { $set: { coverImage: '/assets/blog/viral-mobile.png' } });
  await BlogPost.updateOne({ slug: 'ai-procedural-game-worlds' }, { $set: { coverImage: '/assets/blog/ai-procedural.png' } });
  await BlogPost.updateOne({ slug: 'best-free-web-games-2026' }, { $set: { coverImage: '/assets/blog/web-games.png' } });
  await BlogPost.updateOne({ slug: 'retro-emulation-in-browser' }, { $set: { coverImage: '/assets/blog/retro.png' } });
  await BlogPost.updateOne({ slug: 'webassembly-game-revolution' }, { $set: { coverImage: '/assets/blog/webassembly.png' } });
  
  console.log('Remaining 8 images updated!');
  process.exit(0);
});
