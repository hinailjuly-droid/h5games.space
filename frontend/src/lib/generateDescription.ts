/**
 * Generates a unique, deterministic 200+ word game guide using
 * only the game's existing metadata (title, category, tags, description).
 * No database writes needed — runs purely on the frontend at render time.
 */

// Simple hash to pick templates deterministically (same game = same description every time)
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

function pick<T>(arr: T[], hash: number, offset: number = 0): T {
  return arr[(hash + offset) % arr.length];
}

export function generateGameGuide(game: {
  title: string;
  category: string;
  tags?: string[];
  description?: string;
}): string {
  const title = game.title || "this game";
  const category = game.category || "Arcade";
  const tags = game.tags && game.tags.length > 0 ? game.tags.join(", ") : "fun, free, online";
  const shortDesc = game.description || "";
  const hash = simpleHash(title + category);

  const aboutOptions = [
    `Welcome to the incredible world of <strong>${title}</strong>, a standout title in the <strong>${category}</strong> genre that guarantees hours of non-stop entertainment. Designed for players who crave engaging gameplay, this game tests your skills and reflexes in a vibrant, highly interactive environment. Whether you are looking for a quick distraction or a deep gaming session, ${title} offers an immersive experience that keeps you coming back for more. The intuitive design combined with challenging mechanics makes it a must-play for both casual gamers and hardcore enthusiasts alike. As you dive deeper into the game, you will discover layered complexities that keep the experience fresh and exciting every single time you play.`,

    `Prepare yourself for <strong>${title}</strong>, an absolute masterpiece in the <strong>${category}</strong> category that is taking the browser gaming world by storm. This game is built around a captivating core loop that rewards precision, strategy, and quick thinking. The stunning visuals and smooth animations create a visually appealing playground where every interaction feels impactful and satisfying. ${title} is not just about killing time — it is about mastering a carefully crafted digital challenge that pushes your abilities to the limit. With its engaging progression system and dynamic difficulty scaling, you will find yourself constantly pushing your limits and aiming for that new personal best.`,

    `Step into the action with <strong>${title}</strong>, a top-tier <strong>${category}</strong> game that perfectly balances fun and challenge in equal measure. What sets this game apart from hundreds of others is its meticulous attention to detail and a gameplay loop that is incredibly easy to learn but fiercely difficult to master. Players are instantly drawn into a world where every decision matters and every second counts. The developers have created a seamless experience that runs flawlessly on any device, ensuring that the thrill of ${title} is always just a click away no matter where you are.`,

    `Discover <strong>${title}</strong>, a brilliantly designed <strong>${category}</strong> game that has captivated thousands of players worldwide with its addictive gameplay and polished presentation. From the moment you start playing, you will notice the exceptional quality that goes into every aspect of this title. The responsive controls, beautiful art style, and carefully balanced difficulty curve make ${title} an outstanding choice for anyone looking for a premium gaming experience right in their browser. Every level introduces new mechanics and surprises that keep the gameplay loop feeling fresh and engaging throughout your entire journey.`
  ];

  const mechanicsOptions = [
    `At its core, the mechanics of ${title} rely heavily on timing and spatial awareness. You must carefully navigate the environment while anticipating upcoming obstacles and challenges. This requires a perfect blend of fast reaction times and long-term strategic planning that will keep your mind sharp and engaged.`,

    `The core gameplay loop of ${title} revolves around resource management and rapid decision-making under pressure. Every move you make can alter the outcome of your entire session, meaning you must constantly adapt your strategy to the ever-changing in-game situations and emerging threats.`,

    `Success in ${title} hinges on your ability to recognize patterns and react with precision. The dynamic game engine ensures that no two playthroughs are exactly the same, keeping you on your toes and constantly testing your cognitive reflexes and problem-solving abilities.`,

    `What makes ${title} truly special is its layered difficulty system that gradually introduces new challenges as you progress. The game respects your intelligence by never holding your hand, instead rewarding players who take the time to learn its intricacies and develop their own winning strategies.`
  ];

  const howToPlayOptions = [
    `Getting started with ${title} is incredibly simple and intuitive. Use your mouse or touch screen to interact with the main game interface. Click or tap to initiate actions, and swipe or drag to control movement where applicable. Your primary objective is to progress through each challenge while maximizing your score along the way. Pay close attention to the visual and audio cues on the screen, as they will hint at incoming dangers, hidden opportunities, or valuable power-ups that can turn the tide in your favor.`,

    `The controls for ${title} are designed to be highly intuitive for players of all skill levels. Simply use your mouse cursor to aim and click to execute your moves with precision. On mobile devices, tap directly on the interactive elements for seamless gameplay. Your goal is to clear each stage or reach the finish line before time runs out. Always keep a close eye on your progress indicators, and do not hesitate to use special abilities when you find yourself in a challenging situation.`,

    `To play ${title}, navigate using the on-screen buttons or your mouse and keyboard. The objective is straightforward: overcome the challenges presented in each level to progress to the next stage and unlock new content. Timing is absolutely everything in this game. Wait for the perfect moment to act, and utilize the environment to your strategic advantage. Remember that rushing headlong into obstacles often leads to costly mistakes, so patience and careful observation are your greatest allies.`,

    `Playing ${title} is easy to pick up but endlessly rewarding to master. The game uses standard browser controls — mouse clicks for desktop and touch input for mobile devices. Navigate through each level by interacting with the game elements strategically. The game provides helpful tutorials during the opening stages, but the real challenge begins when the training wheels come off. Focus on mastering the fundamentals first, and advanced techniques will naturally follow as you gain experience and confidence.`
  ];

  const tipsOptions = [
    `<strong>Pro Tips for ${title}:</strong> Do not underestimate the early levels! Use them to completely master the basic controls and mechanics before the difficulty ramps up significantly. Save your most powerful abilities for critical moments rather than using them immediately. Take short breaks between intense sessions to keep your reflexes sharp and your decision-making clear. Most importantly, learn from every failure — each attempt teaches you something valuable about the game.`,

    `<strong>Expert Strategy for ${title}:</strong> Speed is important in this game, but accuracy is absolutely paramount. Taking an extra half-second to align your move precisely will often yield a much higher score than recklessly rushing through challenges. Practice consistently to build muscle memory, and do not be afraid to experiment with different approaches to the same problem. The best players are those who combine quick reflexes with thoughtful strategy.`,

    `<strong>Winning Tips for ${title}:</strong> Always try to maintain a central position in the playing area when possible. This strategic positioning gives you the maximum amount of time to react to threats and opportunities coming from any direction. Watch carefully for hidden bonus items and secret paths that occasionally appear during gameplay. Keep track of your highest scores and set incremental goals to improve steadily over time rather than trying to achieve perfection immediately.`,

    `<strong>Master Guide for ${title}:</strong> The key to excelling at this game is understanding its rhythm and flow. Every ${category} game has a natural pace, and ${title} is no exception. Once you tune into this rhythm, you will find that obstacles become more predictable and opportunities become more visible. Study the leaderboard strategies of top players for inspiration, and remember that consistency beats occasional brilliance in the long run.`
  ];

  const about = pick(aboutOptions, hash, 0);
  const mechanics = pick(mechanicsOptions, hash, 1);
  const howToPlay = pick(howToPlayOptions, hash, 2);
  const tips = pick(tipsOptions, hash, 3);

  return `
    <div class="game-article">
      <h2>About ${title}</h2>
      <p>${about}</p>
      ${shortDesc ? `<p><em>Official description: ${shortDesc}</em></p>` : ""}
      <p>${mechanics}</p>

      <h2>How to Play ${title}</h2>
      <p>${howToPlay}</p>

      <h3>Features &amp; Tags</h3>
      <p>This game is packed with exciting features and is perfect for fans of <strong>${tags}</strong>. The seamless HTML5 integration means you can enjoy ${title} instantly without any downloads, installations, or plugins — just click and play directly in your browser on any device.</p>

      <h3>Expert Tips</h3>
      <p>${tips}</p>
    </div>
  `.trim();
}
