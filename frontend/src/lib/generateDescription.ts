/**
 * Generates a unique, deterministic 200+ word game guide using
 * only the game's existing metadata (title, category, tags, description).
 */

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

  const introOptions = [
    `${title} is a standout title in the <strong>${category}</strong> genre that guarantees hours of non-stop entertainment. Designed for players who crave engaging gameplay, this game tests your skills and reflexes in a vibrant, highly interactive environment. Whether you are looking for a quick distraction or a deep gaming session, ${title} offers an immersive experience that keeps you coming back for more. The intuitive design combined with challenging mechanics makes it a must-play for both casual gamers and hardcore enthusiasts alike. As you dive deeper into the game, you will discover layered complexities that keep the experience fresh and exciting every single time you play.`,

    `${title} is an absolute masterpiece in the <strong>${category}</strong> category that is taking the browser gaming world by storm. This game is built around a captivating core loop that rewards precision, strategy, and quick thinking. The stunning visuals and smooth animations create a visually appealing playground where every interaction feels impactful and satisfying. ${title} is not just about killing time — it is about mastering a carefully crafted digital challenge that pushes your abilities to the limit. With its engaging progression system and dynamic difficulty scaling, you will find yourself constantly pushing your limits and aiming for that new personal best.`,

    `${title} is a top-tier <strong>${category}</strong> game that perfectly balances fun and challenge in equal measure. What sets this game apart from hundreds of others is its meticulous attention to detail and a gameplay loop that is incredibly easy to learn but fiercely difficult to master. Players are instantly drawn into a world where every decision matters and every second counts. The developers have created a seamless experience that runs flawlessly on any device, ensuring that the thrill of ${title} is always just a click away no matter where you are.`,

    `${title} is a brilliantly designed <strong>${category}</strong> game that has captivated thousands of players worldwide with its addictive gameplay and polished presentation. From the moment you start playing, you will notice the exceptional quality that goes into every aspect of this title. The responsive controls, beautiful art style, and carefully balanced difficulty curve make ${title} an outstanding choice for anyone looking for a premium gaming experience right in their browser.`
  ];

  const mechanicsOptions = [
    `At its core, the mechanics rely heavily on timing and spatial awareness. You must carefully navigate the environment while anticipating upcoming obstacles and challenges. This requires a perfect blend of fast reaction times and long-term strategic planning.`,

    `The core gameplay loop revolves around resource management and rapid decision-making under pressure. Every move you make can alter the outcome of your entire session, meaning you must constantly adapt your strategy to the ever-changing in-game situations.`,

    `Success hinges on your ability to recognize patterns and react with precision. The dynamic game engine ensures that no two playthroughs are exactly the same, keeping you on your toes and constantly testing your cognitive reflexes and problem-solving abilities.`,

    `What makes this game truly special is its layered difficulty system that gradually introduces new challenges as you progress. The game respects your intelligence by never holding your hand, instead rewarding players who take the time to learn its intricacies.`
  ];

  const stepsOptions = [
    [
      `Open the game in your browser — no downloads or installations required.`,
      `Use your <strong>mouse</strong> to click or <strong>touch screen</strong> to tap on interactive elements.`,
      `Follow the on-screen tutorial during the first level to learn the basic controls.`,
      `Complete each challenge to progress to the next stage and unlock new content.`,
      `Pay close attention to visual and audio cues — they hint at dangers and power-ups.`,
      `Track your score and try to beat your personal best with each new attempt.`
    ],
    [
      `Launch ${title} directly in your browser — it works on both desktop and mobile.`,
      `Use your <strong>mouse cursor</strong> to aim and <strong>click</strong> to execute moves. On mobile, tap the screen.`,
      `Start with the beginner levels to familiarize yourself with the game mechanics.`,
      `Manage your resources carefully — every action has consequences.`,
      `Use special abilities strategically when you find yourself in tough spots.`,
      `Keep an eye on your progress meter and aim for the highest score possible.`
    ],
    [
      `Click <strong>Play</strong> to start ${title} instantly in your web browser.`,
      `Navigate using on-screen buttons, mouse, or keyboard arrow keys depending on the game mode.`,
      `Learn the objective — whether it's clearing the board, reaching the goal, or surviving as long as possible.`,
      `Master the timing — wait for the perfect moment before making your move.`,
      `Utilize the environment to your advantage and look for hidden shortcuts.`,
      `Practice consistently to improve your reflexes and climb the leaderboard.`
    ],
    [
      `Start playing ${title} with a single click — no plugins or sign-ups needed.`,
      `Use standard browser controls: <strong>mouse clicks</strong> for desktop, <strong>touch gestures</strong> for mobile.`,
      `Begin with the tutorial section to understand the core game mechanics.`,
      `Progress through levels by completing objectives and overcoming obstacles.`,
      `Collect bonuses and power-ups scattered throughout each stage for extra points.`,
      `Challenge yourself to achieve higher scores and unlock all achievements.`
    ]
  ];

  const tipsOptions = [
    [
      `Don't rush through the early levels — use them to master the fundamentals.`,
      `Save your most powerful abilities for critical moments rather than using them immediately.`,
      `Take short breaks between sessions to keep your reflexes sharp.`,
      `Learn from every failure — each attempt teaches you something valuable.`
    ],
    [
      `Accuracy is more important than speed — take an extra moment to plan your moves.`,
      `Experiment with different strategies to find what works best for your play style.`,
      `Practice consistently to build muscle memory for faster reaction times.`,
      `Watch for patterns in the game — most challenges follow a predictable rhythm.`
    ],
    [
      `Stay centered in the play area to maximize your reaction time to threats.`,
      `Watch for hidden bonus items that appear during gameplay.`,
      `Set small incremental goals rather than trying for perfection immediately.`,
      `Study top players' strategies for inspiration on advanced techniques.`
    ],
    [
      `Focus on understanding the game's rhythm and flow — every ${category} game has one.`,
      `Don't ignore the scoring multipliers — they can dramatically boost your results.`,
      `Use headphones if possible — audio cues often provide gameplay advantages.`,
      `Consistency beats occasional brilliance in the long run.`
    ]
  ];

  const intro = pick(introOptions, hash, 0);
  const mechanics = pick(mechanicsOptions, hash, 1);
  const steps = pick(stepsOptions, hash, 2);
  const tips = pick(tipsOptions, hash, 3);

  const stepsHtml = steps.map((step, i) => 
    `<li><span class="step-number">${i + 1}</span>${step}</li>`
  ).join("\n");

  const tipsHtml = tips.map(tip => `<li>${tip}</li>`).join("\n");

  return `
<div class="game-guide-content">
  <p>${intro}</p>
  ${shortDesc ? `<p><em>${shortDesc}</em></p>` : ""}
  <p>${mechanics}</p>

  <h2>How to Play ${title}</h2>
  <ol class="steps-list">
    ${stepsHtml}
  </ol>

  <p>This game is packed with exciting features and is perfect for fans of <strong>${tags}</strong>. The seamless HTML5 integration means you can enjoy ${title} instantly without any downloads, installations, or plugins — just click and play directly in your browser on any device.</p>

  <h2>Tips & Tricks</h2>
  <ul class="tips-list">
    ${tipsHtml}
  </ul>
</div>
  `.trim();
}
