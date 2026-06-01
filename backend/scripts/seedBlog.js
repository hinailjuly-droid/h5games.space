const mongoose = require('mongoose');
const BlogPost = require('../src/models/BlogPost');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

async function seedBlog() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await BlogPost.deleteMany({});
    console.log('Cleared existing blog posts');

    const contentPath = path.join(__dirname, 'blogContent.json');
    const posts = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
    
    // We removed the filler loop so the posts will remain at their original length without repeating text.

    await BlogPost.insertMany(posts);
    console.log('Successfully seeded 5 blog posts');

    await mongoose.disconnect();
    console.log('Disconnected');
  } catch (error) {
    console.error('Error seeding blog:', error);
    process.exit(1);
  }
}

seedBlog();
