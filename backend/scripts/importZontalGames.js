const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const Game = require('../src/models/Game');

const sqlFilePath = 'd:\\h5games.space\\temp_zontal_script\\Zontal-v1.5\\zontal.sql';

// Map Zontal categories to our Game schema categories
const categoryMap = {
  'action': 'Action',
  'adventure': 'Action & Arcade',
  'arcade': 'Arcade',
  'racing': 'Racing',
  'puzzles': 'Puzzle',
  'strategy': 'Strategy',
  'sports': 'Sports',
  'girls': 'Other',
  'shooting': 'Action',
  'clicker': 'Action & Arcade',
  'multiplayer': 'Multiplayer',
  'hypercasual': 'Arcade',
  'fighting': 'Action',
  'puzzle': 'Puzzle',
  '2 player': 'Multiplayer',
  'boys': 'Other',
  '3d': 'Action & Arcade'
};

const mapCategory = (cat) => {
  if (!cat) return 'Other';
  const lowerCat = cat.toLowerCase().trim();
  return categoryMap[lowerCat] || 'Other';
};

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

async function importGames() {
  try {
    const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');
    
    const lines = sqlContent.split('\n');
    const games = [];

    let isParsingValues = false;
    let valuesStr = '';

    for (const line of lines) {
      if (line.includes('INSERT INTO `zon_games`')) {
        isParsingValues = true;
        const startIdx = line.indexOf('VALUES');
        if (startIdx !== -1) {
            valuesStr += line.substring(startIdx + 6).trim();
        }
      } else if (isParsingValues) {
        if (line.trim() === '' || line.startsWith('--')) {
            // skip empty or comments
        } else {
            valuesStr += ' ' + line.trim();
        }
        if (line.includes(';')) {
            isParsingValues = false;
            
            // Regex to match (id, 'name', 'desc', 'image', 'url', 'pub', 'cat', status, played)
            // It uses (?:[^'\\]|\\.)* to match everything inside single quotes, ignoring escaped single quotes.
            const regex = /\((\d+),\s*'((?:[^'\\]|\\.)*)',\s*'((?:[^'\\]|\\.)*)',\s*'((?:[^'\\]|\\.)*)',\s*'((?:[^'\\]|\\.)*)',\s*'((?:[^'\\]|\\.)*)',\s*'((?:[^'\\]|\\.)*)',\s*(\d+),\s*(\d+)\)/g;
            let match;
            while ((match = regex.exec(valuesStr)) !== null) {
                let title = match[2].replace(/\\'/g, "'").replace(/\\\\/g, "\\").trim();
                let slug = generateSlug(title) || `zontal-game-${match[1]}`;
                
                games.push({
                    title: title,
                    description: match[3].replace(/\\'/g, "'").replace(/\\\\/g, "\\").replace(/\\n/g, "\n").trim(),
                    thumbnail: match[4],
                    playUrl: match[5],
                    category: mapCategory(match[7]),
                    plays: parseInt(match[9], 10),
                    active: true,
                    hasLiveUrl: true,
                    slug: slug
                });
            }
            valuesStr = '';
        }
      }
    }

    console.log(`Found ${games.length} games in the SQL file.`);

    if (games.length === 0) {
        console.log("No games found. Please check the regex or SQL format.");
        return;
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000 // fail fast if network is down
    });
    console.log('Connected to MongoDB successfully.');

    let importedCount = 0;
    for (const gameData of games) {
        // Check if game already exists by slug
        let existingGame = await Game.findOne({ slug: gameData.slug });
        
        // If slug exists but title is different, generate new slug
        if (existingGame && existingGame.title !== gameData.title) {
            gameData.slug = gameData.slug + '-' + Math.floor(Math.random() * 10000);
            existingGame = await Game.findOne({ slug: gameData.slug });
        }

        if (!existingGame) {
            const game = new Game(gameData);
            await game.save();
            importedCount++;
        }
    }

    console.log(`Successfully imported ${importedCount} new games!`);

  } catch (error) {
    console.error('Error importing games:', error.message);
  } finally {
    await mongoose.connection.close();
  }
}

importGames();
