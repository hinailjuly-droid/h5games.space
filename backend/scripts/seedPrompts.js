require('dotenv').config();
const mongoose = require('mongoose');
const Prompt = require('../src/models/Prompt');
const importedPrompts = require('../data/importedPrompts.json');

async function seed() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      console.log('No MONGODB_URI found. Ready for MongoDB connection.');
      return;
    }
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB. Clearing existing prompts...');
    await Prompt.deleteMany({});
    console.log('Inserting 100 imported prompts from faymasprompt.in...');
    await Prompt.insertMany(importedPrompts);
    console.log(`Successfully seeded ${importedPrompts.length} prompts into MongoDB!`);
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  seed();
}

module.exports = { importedPrompts };
