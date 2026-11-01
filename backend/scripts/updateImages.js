const mongoose = require('mongoose');
require('dotenv').config({path: './.env'});
mongoose.connect(process.env.MONGODB_URI).then(async () => {
  const BlogPost = require('../src/models/BlogPost');
  await BlogPost.updateOne({ slug: 'gta-6-pre-orders-are-finally-live' }, { $set: { coverImage: '/assets/blog/gta-6.png' } });
  await BlogPost.updateOne({ slug: 'god-of-war-laufey-what-to-expect' }, { $set: { coverImage: '/assets/blog/laufey.png' } });
  await BlogPost.updateOne({ slug: '007-first-light-massive-hit' }, { $set: { coverImage: '/assets/blog/007.png' } });
  await BlogPost.updateOne({ slug: 'hollow-knight-silksong-updates' }, { $set: { coverImage: '/assets/blog/silksong.png' } });
  await BlogPost.updateOne({ slug: 'why-cozy-games-are-taking-over' }, { $set: { coverImage: '/assets/blog/cozy.png' } });
  await BlogPost.updateOne({ slug: 'cloud-gaming-vs-local-hardware' }, { $set: { coverImage: '/assets/blog/cloud.png' } });
  console.log('Images updated!');
  process.exit(0);
});
