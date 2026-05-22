require('dotenv').config({ path: __dirname + '/../.env' });
const mongoose = require('mongoose');
const Game = require('../src/models/Game');

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    try {
      const count = await Game.countDocuments({ customDescription: { $exists: true, $ne: '' } });
      const sample = await Game.findOne({ customDescription: { $exists: true, $ne: '' } }).select('title customDescription');
      
      console.log('=== AI Generation Check ===');
      console.log('Total games successfully generated so far:', count);
      
      if (sample) {
        console.log('\\nSample from ' + sample.title + ':');
        console.log(sample.customDescription.substring(0, 500) + '...');
      } else {
        console.log('No descriptions found yet. The API might have failed or is still starting.');
      }
    } catch (e) {
      console.error(e);
    } finally {
      mongoose.disconnect();
    }
  })
  .catch(console.error);
