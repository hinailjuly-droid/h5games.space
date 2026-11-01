const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const Game = require('../src/models/Game');

const articles = [
  {
    title: 'Merge Melons',
    seoContent: `
*Merge Melons* is a delightfully simple, dangerously addictive, and visually vibrant puzzle game that capitalizes perfectly on the viral "Suika Game" mechanics that have taken the casual gaming world by storm. At its core, the game is a masterclass in physics-based fruit matching, wrapping a high-score chasing loop inside an incredibly relaxing, pastel-colored aesthetic. The premise is universally accessible: you drop various types of fruit into a confined, claw-machine-style box. When two identical fruits collide, they merge into the next largest fruit in the evolutionary chain, culminating in the massive, titular melon. The atmosphere is undeniably charming, filled with satisfying "pop" sound effects and bouncy, squishy fruit physics that give the game a wonderful tactile feel despite being entirely digital. However, beneath the cute exterior lies a surprisingly deep strategic layer. As the box fills up, the physics engine becomes your biggest adversary. Dropping a small fruit incorrectly can cause a cascading avalanche that pushes a massive melon into an awkward corner, ruining your chances of a high score. It perfectly balances the dopamine rush of watching a massive combo chain explode with the crushing tension of the fruit pile creeping ever closer to the dreaded "game over" line at the top of the box.

## How to Play
The mechanics of *Merge Melons* are designed to be played entirely with a single input. Using your mouse or tapping the screen, you control a small cloud hovering at the top of the fruit box. Moving the mouse side-to-side positions the next fruit, and clicking drops it straight down. 

The game relies heavily on its physics engine. Fruits are not static blocks; they are round, bouncy objects that roll, shift, and react to weight. Your objective is to strategically drop fruits so that identical ones touch and merge. For example, two cherries merge into a strawberry, two strawberries into a grape, and so on. Your "next fruit" indicator at the top right of the screen shows what you will be dropping next, allowing you to plan one step ahead. The game ends immediately if any fruit crosses and settles above the dotted red line at the top of the container. Your score increases with every successful merge, with the holy grail being the creation of two massive watermelons that merge together to clear themselves entirely from the board. 

## Our tips
While dropping fruit randomly might get you through the first few minutes, achieving a truly massive high score requires understanding the physics and spatial management of the box.

1. **The Corner Strategy:** The most fundamental rule of *Merge Melons* is to keep your largest fruits securely anchored in one of the bottom corners. If you allow a large melon to settle in the absolute center of the box, it effectively cuts the playing field in half, making it incredibly difficult to maneuver smaller fruits around it. Dedicate one corner (usually the bottom right) to your "heavy" fruits.

2. **The "Squeeze" Technique:** Because the fruits are circular, they naturally want to roll down into gaps. You can use a heavy, medium-sized fruit (like an apple) to "squeeze" a tiny fruit (like a cherry) through a narrow gap to reach a matching pair at the bottom of the pile. Do not just drop fruits on top of each other; look for angled drops that utilize gravity to push fruits into the desired position.

3. **Size Matters (for Stability):** Dropping a massive fruit directly onto a pile of tiny fruits will violently disrupt the pile, sending the smaller fruits flying everywhere (and often up past the game-over line). Always try to stack fruits in a pyramidal structure: large fruits on the bottom, medium in the middle, small on top. 

4. **Plan Two Drops Ahead:** The game always shows you your current fruit and your next fruit. If your current fruit is useless, do not just drop it randomly. Look at your *next* fruit. Drop the useless fruit in a spot where it will either stay out of the way or act as a stepping stone for the next, more important fruit.

5. **Patience is Key:** After a massive chain reaction, the fruits will continue to roll and shift for several seconds. Do not rush your next drop. Wait for the physics engine to completely settle. A fruit that looks stuck might slowly roll into a perfect matching position if you just give it five seconds of breathing room.
`
  },
  {
    title: 'Poppy Strike',
    seoContent: `
*Poppy Strike* is an unapologetic, chaotic, and highly entertaining collision of the classic, high-octane *Counter-Strike* formula with the terrifying mascot horror universe of *Poppy Playtime*. In a bizarre but brilliant twist on the shooter genre, this browser game strips away the slow, methodical stealth of the original horror game and replaces it with heavy weaponry, fast-paced movement, and endless waves of terrifying, fuzzy blue antagonists. The game drops you into a recognizable, blocky rendering of the iconic *Counter-Strike* map "Dust 2," but instead of fighting terrorists, you are defending your position against a relentless swarm of Huggy Wuggys. The atmosphere is a strange, intoxicating mix of nostalgic FPS action and absurd internet meme culture. The familiar desert architecture contrasts sharply with the towering, lanky monstrosities sprinting toward you. The game makes no attempt at a deep narrative; it is a pure, arcade-style survival shooter that prioritizes fast reflexes, ammunition management, and crowd control. It’s incredibly satisfying to take a staple of the horror genre, arm yourself to the teeth, and turn the tables on the monster that has chased millions of players through abandoned toy factories.

## How to Play
*Poppy Strike* utilizes the exact control scheme that PC shooter veterans have relied on for decades. You navigate the arena using the WASD keys, utilizing the Spacebar to jump and the Shift key to sprint (if available). The mouse is used to aim, with the Left Mouse Button handling firing and the Right Mouse Button used for aiming down sights (ADS) with specific weapons like sniper rifles. 

The core objective is wave-based survival. You start the game with a basic pistol and a combat knife. As you eliminate the incoming Huggy Wuggys, you earn cash. Between waves, or during brief moments of respite, you can access the buy menu (typically pressing 'B') to purchase significantly better weapons. The arsenal mimics classic tactical shooters: you can buy submachine guns for close-range crowd control, assault rifles for reliable mid-range damage, or high-powered sniper rifles to pick off the monsters before they get close. You must also purchase ammunition and health packs. The enemies become faster, more numerous, and increasingly resilient with each passing wave, forcing you to constantly upgrade your firepower to stay alive.

## Our tips
Surviving an onslaught of giant blue mascots on Dust 2 requires excellent positioning and financial management.

1. **The 'Catwalk' Defense:** Do not run around the map randomly. The key to wave survival is finding a "choke point." On the Dust 2 map, the elevated "Catwalk" area or the back of "B Site" are excellent defensive positions. They force the Huggy Wuggys to run toward you in a straight line through a narrow corridor, allowing you to easily line up devastating headshots without getting surrounded.

2. **Economy Management:** Do not waste your money buying a mediocre submachine gun on Wave 2 if you don't absolutely need it. Stick to your pistol for the first few weak waves and save your cash. Your goal should be to buy a high-capacity Assault Rifle (like the AK or M4 equivalent) as early as possible. A powerful rifle will carry you through significantly more waves than a cheap SMG.

3. **Aim for the Head:** The Huggy Wuggys have surprisingly large health pools in the later waves. Shooting them in the center of mass will quickly drain your ammunition. You must discipline yourself to aim exclusively for the head. A single headshot from a powerful rifle will instantly drop them, saving you bullets and precious time.

4. **The Reload Retreat:** Never stand your ground while reloading an empty weapon. If your magazine runs dry, instantly turn around and sprint backward while the reload animation plays. Only turn back to face the horde once your weapon is fully loaded and ready to fire. 

5. **Listen for the Spawn:** The enemies don't just appear silently; the game utilizes audio cues to signal when a new wave is spawning or when an enemy is approaching from behind. If you are holding a choke point, keep your ears open. If you hear footsteps approaching from your rear flank, immediately reposition so you don't get trapped in a pincer maneuver.
`
  },
  {
    title: 'Poppy Strike 2',
    seoContent: `
*Poppy Strike 2* takes the absurd, meme-fueled brilliance of its predecessor and violently cranks the intensity dial up to eleven. Expanding upon the foundation of crossing tactical *Counter-Strike* gameplay with the menacing *Poppy Playtime* universe, this sequel introduces new maps, vastly improved weapon mechanics, and a significantly more aggressive enemy AI. The game no longer relies on the sheer novelty of shooting Huggy Wuggy; it demands actual shooter skills. The environments are more complex, offering greater verticality and multiple flanking routes, which the AI will actively exploit to surround you. The atmosphere remains a hilarious, terrifying mashup of nostalgic FPS maps (often heavily inspired by classic source engine architecture) and neon-colored, fuzzy horrors. The visual feedback has been upgraded, with punchier gun sounds, more satisfying impact animations, and a grittier overall aesthetic. It perfectly scratches the itch for players looking for a fast, accessible, and high-action browser shooter that doesn't require a massive download or a high-end gaming PC to enjoy. 

## How to Play
The controls in *Poppy Strike 2* remain faithful to the golden age of PC shooters. The WASD keys control movement, Spacebar jumps, and the mouse is your aiming interface. Left-click fires your weapon, right-click aims down sights, and 'R' initiates a reload. 

The structure of the game is heavily focused on the economy-based survival loop. You are dropped into a map and must survive increasingly difficult waves of enemies. Every monster you eliminate grants you cash. This cash is your lifeline, used in the in-game shop menu to purchase better weapons, restock critical ammunition, and buy health kits. The sequel introduces a wider variety of enemies; you aren't just fighting the standard blue Huggy Wuggy anymore. You will encounter faster, smaller variants, heavily armored brutes, and occasionally, terrifying boss-level enemies that require massive amounts of sustained firepower to bring down. Managing your cash to ensure you always have enough ammunition for your primary weapon while slowly saving up for the top-tier sniper rifles or machine guns is the core strategic element of the game.

## Our tips
Surviving the upgraded horrors of *Poppy Strike 2* requires a significantly more tactical approach than the first game.

1. **Master the Side-Arm:** Ammunition is a massive issue in the later waves. Do not use your expensive assault rifle bullets on a single, isolated enemy. Switch to your pistol (usually the '2' key) to deal with stragglers. The pistol is highly accurate and free to reload, allowing you to save your primary weapon for when you are being actively swarmed.

2. **The Funnel Technique:** The AI in the sequel is smarter and will attempt to surround you if you stand in the open. You must utilize the environment to create "funnels." Stand at the end of a long, narrow hallway or at the top of a staircase. This forces all the enemies to line up in a single file line, allowing your bullets to penetrate multiple targets simultaneously.

3. **Buy Armor (If Available):** If the shop menu offers armor or a Kevlar vest, prioritize it over a slightly better weapon. The damage output of the enemies scales drastically in the late game. A single hit from a brute enemy can instantly kill you if you are unarmored. Armor gives you the crucial buffer needed to survive a mistake.

4. **Tap Firing:** The weapon recoil in *Poppy Strike 2* is noticeably higher than in the original. Holding down the left mouse button with an automatic weapon is highly discouraged. You must "tap fire"—clicking the mouse rapidly to fire 1 or 2 bullets at a time. This allows the weapon's crosshair to reset instantly, guaranteeing that every shot lands exactly where you are aiming.

5. **Don't Get Greedy:** When a massive pile of cash drops in the middle of an open courtyard, do not immediately sprint out to grab it if the wave is still active. The cash will not disappear immediately. Clear the immediate area from the safety of cover, and only venture out to collect your rewards when the wave is winding down.
`
  },
  {
    title: 'Chess',
    seoContent: `
*Chess* in its digital browser format is the ultimate, timeless equalizer of the gaming world. Long before high-speed internet, graphics cards, or even electricity, this profound game of strategy, foresight, and tactical warfare has captivated human minds for centuries. Bringing *Chess* into the browser strips away the need for physical boards and opponents, offering instantaneous matchmaking, deep AI analysis, and a flawlessly clean aesthetic. The beauty of this specific digital iteration is its absolute lack of distraction. There are no flashing lights, no microtransactions, and no convoluted mechanics to learn—just 64 squares, 32 pieces, and an infinitely deep well of strategic possibilities. The atmosphere is one of intense, quiet contemplation. Whether you are playing against a highly tuned AI to practice your openings, or matching up against a live human opponent across the globe, the tension is entirely psychological. It is a game of perfect information; there is no luck, no random number generation, and no hidden mechanics. Every single victory is a direct result of outthinking your opponent, making it one of the most deeply satisfying and intellectually rewarding games available on any platform.

## How to Play
The digital interface of *Chess* is universally intuitive. You use your mouse (or touchscreen) to interact with the board. Clicking on one of your pieces will usually highlight all of the legal squares that piece can move to, serving as an excellent visual aid for beginners. You then click the destination square to complete the move.

The objective is simple: trap the opponent's King so that it is under attack (in "check") and has no legal moves to escape (resulting in "checkmate"). Each piece has unique movement rules: Pawns move forward but capture diagonally; Knights move in an 'L' shape and can jump over pieces; Bishops move diagonally; Rooks move horizontally and vertically; the Queen combines the power of the Rook and Bishop; and the King moves one square in any direction. The game relies entirely on turn-based strategy. You must develop your pieces from their starting positions, control the center of the board, defend your King, and launch coordinated attacks to capture enemy material and corner their King. 

## Our tips
*Chess* takes a day to learn and a lifetime to master. If you want to stop blundering and start winning your online matches, you must internalize these fundamental principles:

1. **Control the Center:** The four squares in the absolute center of the board (d4, e4, d5, e5) are the high ground of the chess battlefield. A piece placed in the center controls significantly more squares than a piece on the edge. Your opening moves should always aim to place pawns in the center and position your Knights and Bishops to attack the center.

2. **Develop Your Pieces Early:** Do not move the same piece multiple times in the opening phase of the game unless you absolutely have to. Your goal in the first 10 moves should be to move your central pawns, get both Knights and both Bishops off the back rank, and castle your King. A developed army will easily crush an opponent who only attacks with their Queen.

3. **Castle Early and Often:** Castling is a special move that allows you to tuck your King safely into the corner behind a wall of pawns while simultaneously bringing your powerful Rook into the center of the board. You should aim to castle before move 10 in almost every single game you play. A King left in the center of the board is a prime target for a devastating attack.

4. **Always Look for Checks, Captures, and Threats:** Before you make any move, and immediately after your opponent makes a move, you must run through a mental checklist. Are there any checks available? Can I capture a free piece? What is my opponent threatening to do with their last move? If you blindly follow your own plan without analyzing your opponent's threats, you will lose instantly.

5. **Don't Bring the Queen Out Too Early:** The Queen is your most powerful piece, but bringing her into the middle of the board on move 3 is a massive beginner mistake. Your opponent will simply develop their minor pieces (Knights and Bishops) while attacking your Queen, forcing you to waste turns running away while they build a massive positional advantage.
`
  }
];

async function run() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    for (const art of articles) {
      await Game.findOneAndUpdate(
        { title: art.title },
        {
          $set: {
            curated: true,
            seoContent: art.seoContent
          }
        }
      );
      console.log('Successfully wrote massive article for:', art.title);
    }
    
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
run();
