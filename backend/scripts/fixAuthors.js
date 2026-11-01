const mongoose = require('mongoose');
require('dotenv').config({path: './.env'});
mongoose.connect(process.env.MONGODB_URI).then(async () => {
  const BlogPost = require('../src/models/BlogPost');
  await BlogPost.updateMany({}, {
    $set: {
      "author.name": "h5games space Team",
      "author.avatar": "/assets/brand/logo.png"
    }
  });
  console.log('Fixed authors');
  process.exit(0);
});
