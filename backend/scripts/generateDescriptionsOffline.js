require('dotenv').config();
const mongoose = require('mongoose');
const Game = require('../src/models/Game');

async function run() {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/h5games', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Connected to MongoDB.");

  const games = await Game.find({});

  console.log(`Found ${games.length} games needing custom descriptions.`);

  const aboutTemplates = [
    "Welcome to the incredible world of {title}, a standout title in the {category} genre that guarantees hours of non-stop entertainment. Designed for players who crave engaging gameplay, this game tests your skills and reflexes in a vibrant, highly interactive environment. Whether you are looking for a quick distraction or a deep gaming session, {title} offers an immersive experience. The intuitive design combined with challenging mechanics makes it a must-play for both casual gamers and hardcore enthusiasts alike. As you dive deeper into the game, you'll discover layered complexities that keep the experience fresh and exciting.",
    "Prepare yourself for {title}, an absolute masterpiece in the {category} category that is taking the browser gaming world by storm. This game is built around a captivating core loop that rewards precision, strategy, and quick thinking. The stunning visuals and smooth animations create a visually appealing playground where every interaction feels impactful. {title} isn't just about killing time; it's about mastering a carefully crafted digital challenge. With its engaging progression system and dynamic difficulty, you'll find yourself constantly pushing your limits and aiming for that new high score.",
    "Step into the action with {title}, a top-tier {category} game that perfectly balances fun and challenge. What sets this game apart is its meticulous attention to detail and a gameplay loop that is incredibly easy to learn but fiercely difficult to master. Players are instantly drawn into a world where every decision matters. The developers have created a seamless experience that runs flawlessly on any device, ensuring that the thrill of {title} is always just a click away. Get ready to lose track of time as you explore everything this remarkable title has to offer."
  ];

  const mechanicsTemplates = [
    "At its core, the mechanics rely heavily on timing and spatial awareness. You must carefully navigate the environment while anticipating upcoming obstacles. This requires a blend of fast reaction times and long-term strategic planning.",
    "The core gameplay loop revolves around resource management and rapid decision-making. Every move you make can alter the outcome of your session, meaning you must constantly adapt your strategy to the ever-changing in-game situations.",
    "Success in this game hinges on your ability to memorize patterns and react accordingly. The dynamic AI ensures that no two playthroughs are exactly the same, keeping you on your toes and constantly testing your cognitive reflexes."
  ];

  const howToPlayTemplates = [
    "Getting started is incredibly simple. Use your mouse or touch screen to interact with the main interface. Click or tap to initiate actions, and swipe to control movement if applicable. Your primary objective is to survive as long as possible while maximizing your score. Pay close attention to the visual cues on the screen, as they will hint at incoming dangers or valuable power-ups.",
    "The controls are highly intuitive: simply use your mouse cursor to aim and click to execute your moves. On mobile devices, tap directly on the interactive elements. Your goal is to clear the board or reach the finish line before the timer runs out. Always keep an eye on your resource meter, and don't hesitate to use special abilities when you find yourself in a tight spot.",
    "To play, navigate using the on-screen buttons or your mouse. The objective is clear: defeat the challenges presented in each level to progress to the next stage. Timing is everything. Wait for the perfect moment to strike or move, and utilize the environment to your advantage. Remember that rushing often leads to mistakes, so patience is key."
  ];

  const tipsTemplates = [
    "**Pro Tip:** Don't ignore the early levels! Use them to completely master the basic controls before the difficulty ramps up. Also, try to save your ultimate abilities for the boss encounters or the most crowded screens.",
    "**Pro Tip:** Speed is important, but accuracy is paramount. Taking an extra second to align your move will often yield a much higher score than recklessly rushing through. Keep practicing, and the muscle memory will naturally develop.",
    "**Pro Tip:** Always stay in the center of the playing area if possible. This gives you the maximum amount of time to react to threats coming from the edges of the screen. Watch out for hidden bonus items that occasionally spawn!"
  ];

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    
    // Fallback variables
    const safeTitle = game.title || 'this amazing game';
    const safeCategory = game.category || 'Arcade';
    const safeTags = (game.tags && game.tags.length > 0) ? game.tags.join(", ") : "fun, free, online";

    let aboutText = getRandom(aboutTemplates).replace(/{title}/g, safeTitle).replace(/{category}/g, safeCategory);
    let mechanicsText = getRandom(mechanicsTemplates);
    let howToPlayText = getRandom(howToPlayTemplates);
    let tipsText = getRandom(tipsTemplates);

    const generatedHtml = `
      <div class="game-article">
        <h2>About ${safeTitle}</h2>
        <p>${aboutText}</p>
        <p>${mechanicsText}</p>
        
        <h2>How to Play ${safeTitle}</h2>
        <p>${howToPlayText}</p>
        
        <h3>Features & Tags</h3>
        <p>This game is packed with exciting features and is perfect for fans of <strong>${safeTags}</strong>. The seamless HTML5 integration means you can enjoy it instantly without any downloads.</p>
        
        <h3>Expert Tips</h3>
        <p>${tipsText}</p>
      </div>
    `;

    game.customDescription = generatedHtml.trim();
    await game.save();
    
    if (i % 100 === 0 || i === games.length - 1) {
      console.log(`[${i + 1}/${games.length}] Saved description for: ${safeTitle}`);
    }
  }

  console.log("Finished generating 200-word robust descriptions for all games!");
  mongoose.disconnect();
}

run().catch(console.error);
