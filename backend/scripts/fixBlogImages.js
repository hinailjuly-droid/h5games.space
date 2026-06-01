const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const BlogPost = require('../src/models/BlogPost');
const Game = require('../src/models/Game');

const uniqueImages = [
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580234811432-5202e2195ee0?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop"
];

async function fixImages() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const posts = await BlogPost.find({});
    console.log(`Found ${posts.length} posts`);

    const antiPacManGame = await Game.findOne({ slug: 'antipacman' });
    let imageIndex = 0;

    for (const post of posts) {
      if (post.slug === 'best-web-games-offline-html5-2026') {
        post.coverImage = antiPacManGame.thumbnail;
      } else {
        post.coverImage = uniqueImages[imageIndex % uniqueImages.length];
        imageIndex++;
      }
      await post.save();
      console.log(`Updated image for ${post.slug}`);
    }

    console.log("All images updated!");
  } catch(e) {
    console.error(e);
  } finally {
    process.exit(0);
  }
}

fixImages();
