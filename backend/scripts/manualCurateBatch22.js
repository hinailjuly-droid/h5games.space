const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Merge Cards",
    seoContent: `![Merge Cards](https://www.htmlgames.com/uploaded/game/thumb800/mergecards800450.webp)

Merge Cards fundamentally rewrites the rules of the massively popular sliding number genre (like 2048 or Threes) by abandoning the rigid 4-way square grid in favor of a vastly more flexible, free-form card inventory system. Instead of frantically swiping the entire board to force numbers together, this game grants players complete, unadulterated surgical control. You are tasked with dragging specific numbered cards from a holding tray onto a main playing field. When two cards of the exact same value are dropped on top of each other, they instantly merge into a single card of a higher value (e.g., merging two "2" cards creates a "4" card). Your ultimate objective is elegantly simple yet brutally difficult: merge numbers high enough to achieve massive scores before you run out of board space or inventory options. The atmosphere is deeply calculating and immensely satisfying; you are essentially building a numerical pipeline, managing a constant influx of low-value cards to construct massive, concentrated sums. The visual presentation is exceptionally clean, utilizing crisp, contrasting colors for different numerical tiers. Merge Cards is a brilliant puzzle experience that trades rapid reflexes for pure spatial logic and long-term cascade planning.

## How to Play
* The primary objective is to survive as long as possible by merging identical cards until the board fills up.
* You are presented with a hand of numbered cards at the bottom of the screen.
* Use your \`Mouse\` to click, hold, and drag a card from your hand onto the main board.
* If you drag and drop a card directly on top of another card with the EXACT SAME number (e.g., a 4 onto a 4), they will instantly merge into a single card with the next highest value (an 8).
* **The Domino Effect:** If dropping a card creates an 8, and there is already another 8 adjacent to it, they might automatically merge into a 16, triggering massive chain reactions.
* The game is instantly over if the main board completely fills up and you cannot place any more cards from your hand.

## Tips and Tricks
* **Keep the Center Clear:** The board fills up incredibly fast. If you place random, isolated numbers directly in the dead center of the board, you will destroy your ability to route matching numbers to each other later. Build from the outside in.
* **Build Sequential Clusters:** Try to keep your numbers organized sequentially. If your biggest card is a 64, try to build a 32 right next to it, and a 16 next to that. When you finally trigger a merge, the physical expansion will trigger an automated domino effect.
* **Group by Value:** Try to keep your low numbers on one side of the board, and your high numbers safely quarantined on the other side so they don't get buried.
* **Don't Be Afraid to Discard:** If your hand is full of useless low-level cards that will just clutter the board, sometimes it is better to intentionally burn them by placing them in corners just to draw better cards.
* **Watch the Chain Reactions:** Before you drop a card, look at the surrounding cards. A well-placed '2' can merge into a 4, which merges into an 8, which merges into a 16, clearing a massive amount of board space in a single move.`
  },
  {
    title: "Zoo Collapse",
    seoContent: `![Zoo Collapse](https://www.htmlgames.com/uploaded/game/thumb800/zoocollapse800450.webp)

Zoo Collapse strips the highly saturated block-breaking genre down to its absolute, most viscerally satisfying core, delivering a pure, unadulterated test of spatial cascade optimization wrapped in an adorable animal aesthetic. Moving away from the slow, methodical swiping of Match-3 games, this title embraces a chaotic, tap-to-destroy mechanic that rewards speed and massive chain reactions. Set against a clean, visually vibrant grid, you are presented with a massive wall of tightly packed, brightly colored blocks featuring cute lions, elephants, hippos, and monkeys. Your objective is intensely focused: locate clusters of identical animals and tap them to instantly obliterate them, causing the entire structure above to collapse downward under gravity. The atmosphere is deeply kinetic and immensely satisfying, perfectly capturing the arcade joy of demolition. The visual presentation is highly polished, utilizing crisp, cartoon textures and spectacular, screen-shaking particle effects whenever a massive cluster is destroyed. Zoo Collapse is a pure test of rapid pattern recognition, forcing you to calculate how the board will settle after every single explosive tap.

## How to Play
* The primary objective is to clear specific quotas of animals (e.g., collect 50 monkeys) before you run out of valid moves.
* Use your \`Left Mouse Button\` to click on any connected cluster of TWO or more identical animal blocks.
* The entire clicked cluster will instantly explode, removing those animals from the board.
* Gravity will immediately pull the remaining blocks directly above the explosion straight down to fill the empty space.
* If an entire vertical column is cleared, the remaining columns will slide horizontally to close the gap.
* The level is won when you reach your quota. The game is lost if you run out of moves or are left with isolated, single blocks that cannot be matched.

## Tips and Tricks
* **Work from the Top Down (Usually):** Unlike Match-3 games where you want to work from the bottom to cause random cascades, clicking a massive cluster at the bottom of the screen will violently scramble the entire board above it, often ruining carefully planned clusters. Try to peel the board from the top down to maintain control.
* **Build Massive Clusters:** Do not click a group of three elephants if there is a way to safely merge them into a group of ten by destroying a few lions separating them. Massive clusters yield exponentially higher scores and often generate powerful bombs.
* **Watch the Singletons:** Your absolute biggest threat is ending up with a single, isolated hippo block on the far left side of the board. Always try to keep animal types grouped together. If you see a singleton, prioritize moving other blocks to rescue it.
* **Calculate the Slide:** When you clear an entire column, the board slides together. Use this mechanic intentionally to force a cluster of giraffes on the left to merge with a cluster on the right.
* **Don't Panic Click:** There is usually no timer. Take a deep breath, analyze the board, and predict exactly where every block will fall *before* you click.`
  },
  {
    title: "Freecell Extreme",
    seoContent: `![Freecell Extreme](https://www.htmlgames.com/uploaded/game/thumb800/freecell-extreme-800x450.webp)

Freecell Extreme is a brilliantly complex, highly demanding variant of the classic card-sorting genre that significantly raises the strategic ceiling compared to standard Klondike, and then ruthlessly tightens the noose by wrapping the entire experience in an escalating difficulty curve. While standard Freecell allows you a generous four empty parking spots, this "Extreme" version actively punishes success; as you advance to higher levels, the game intentionally reduces the number of available free cells, drastically limiting your ability to maneuver cards. The atmosphere is deeply calculating and immensely stressful, requiring players to possess a masterful understanding of card sequencing, cascade math, and long-term tactical sacrifice. The visual presentation is highly polished, utilizing crisp, classic playing card graphics that ensure perfect readability even during complex, multi-card maneuvers. The genius of Freecell Extreme lies entirely in its uncompromising ruleset; a strategy that works perfectly on level one will completely doom you on level five. It is an uncompromising test of logic for veteran card players.

## How to Play
* The primary objective is to move all 52 cards into the four foundation piles at the top right, building upward in suit from Ace to King.
* The main tableau consists of eight columns where cards must be built downward in alternating colors (e.g., a Red 8 can only be placed on a Black 9).
* Use your \`Mouse\` to click and drag cards between columns.
* The "Free Cells" at the top left are temporary parking spots. You can move any single exposed card into an empty free cell to get it out of the way.
* **The Catch:** As you progress through the levels, you will start with fewer than the standard four free cells, forcing you to solve the board with almost no room for error.

## Tips and Tricks
* **Protect the Free Cells:** Your free cells are your most valuable resource. Never park a card in a free cell unless you have a concrete, multi-step plan to get it back out onto the tableau or the foundation shortly after.
* **Empty Columns are Gold:** An empty column in the tableau acts like a super-powered free cell. It allows you to move massive sequences of cards at once. Prioritize clearing columns above all else.
* **The Math of Movement:** The maximum number of cards you can drag in a single sequence is determined mathematically by the number of empty free cells and empty tableau columns you have. If your free cells are full, you can only move one card at a time.
* **Dig for Aces:** The game cannot progress until the Aces are in the foundation. Scan the board immediately upon dealing and formulate a plan specifically to unearth the four Aces.
* **Don't Build Evenly:** Unlike other solitaires, it is sometimes better to aggressively build one specific suit to the foundation in Freecell, as it clears cards off the board entirely and opens up more maneuvering space.`
  },
  {
    title: "Circus Mahjong",
    seoContent: `![Circus Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/circus-mahjong-800x450.webp)

Circus Mahjong plunges the ancient, highly structured mechanics of traditional Chinese tile-matching into a breathtaking, deeply atmospheric "Big Top" environment. Moving far beyond the sterile, flat green felt of standard solitaire games, this title constructs massive, complex architectural pyramids using beautifully illustrated tiles depicting juggling pins, striped tents, unicycles, and circus animals. The atmosphere is incredibly robust and immersive, offering players the choice to tackle stressful, timed challenges or relax via the 'Select Layout' mode to play untimed. You are tasked with analyzing towering, overlapping tile structures, meticulously searching for exposed pairs to dismantle the board. The visual presentation is exceptionally polished, utilizing bright, vibrant color palettes and dynamic lighting effects that ensure the puzzle remains perfectly readable even when the board is massively congested. Circus Mahjong is a highly successful thematic reskin, proving that a timeless puzzle formula can be completely refreshed with a strong, cohesive, and joyful artistic vision.

## How to Play
* Your objective is to completely clear the entire screen by matching identical pairs of circus-themed tiles.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles heavily overlap, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden tiles buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, you lose.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach elephant tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match an elephant tile buried deep in the center tower.
* **Play Untimed:** If you are playing purely to relax, always use the 'Select Layout' option from the main menu. Removing the timer completely changes the game from a frantic rush to a meditative, calculated puzzle.
* **Use the Reshuffle (If Available):** Treat the shuffle button like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably dead.`
  },
  {
    title: "Ninja Breakout",
    seoContent: `![Ninja Breakout](https://www.htmlgames.com/uploaded/game/thumb800/ninjabreakout800450.webp)

Ninja Breakout delivers the absolute purest, most unadulterated distillation of the legendary brick-breaking arcade formula (Arkanoid/Breakout), completely replacing the standard, sterile sci-fi aesthetic with a vibrant, action-packed martial arts theme. This is the genre exactly as it was meant to be played, but elevated with a thematic twist: a massive ceiling of brightly colored bricks, a single paddle (styled as a ninja weapon or scroll), and an unrelenting pursuit of perfect rebound angles. The atmosphere is undeniably hypnotic and deeply kinetic, relying entirely on the visceral satisfaction of keeping the high-speed projectile in play. You are tasked with calculating ricochets, bouncing the ball off the sidewalls, and grabbing falling power-ups to trigger massive structural collapses. The visual presentation is highly polished, utilizing crisp, high-definition sprites that pop against the dojo background. The explosive animations and satisfying audio cues that accompany a board-clearing combo are nothing short of spectacular. Ninja Breakout is a pure test of geometric calculation and reflex aiming.

## How to Play
* The primary objective is to clear the entire screen of bricks by destroying them with a bouncing projectile (often a shuriken or energy ball).
* You control a horizontal paddle at the bottom of the screen.
* Use your \`Mouse\` to move the paddle left and right.
* Ensure the bouncing projectile hits your paddle. If the projectile falls past your paddle off the bottom of the screen, you lose a life.
* When the projectile hits a brick, the brick shatters.
* Destroying certain bricks will cause power-ups (like a wider paddle, lasers, or multiball) to fall toward the bottom of the screen. Catch them with your paddle to activate them.

## Tips and Tricks
* **Control the Angle:** The angle the projectile leaves your paddle is determined by *where* it hits the paddle. Hitting the ball near the exact center sends it mostly straight up. Hitting it on the extreme left or right edge sends it flying off at a sharp, shallow angle.
* **Drill Through the Edges:** The absolute most effective strategy in any Breakout game is to focus entirely on destroying a single, one-brick-wide column on the extreme left or right side of the board. Once you create a "tunnel," fire the ball up through it. It will bounce frantically across the top of the bricks, destroying dozens of them instantly.
* **Don't Be Greedy with Power-ups:** If a powerful laser power-up is falling on the far left side of the screen, but the ball is falling on the far right... IGNORE THE POWER-UP. Your primary objective is keeping the ball alive. Never sacrifice a life for an item.
* **Anticipate the Speed Up:** As you destroy more bricks, the ball will naturally increase in speed. Do not get comfortable with the initial slow pace. Stay alert and keep your eyes focused on the ball, not the falling debris.
* **Watch the Multiball Chaos:** When you grab a multiball power-up, the screen will flood with projectiles. Do not try to track all of them. Pick one or two balls and focus exclusively on keeping them alive, letting the others fall.`
  },
  {
    title: "JapanJong",
    seoContent: `![JapanJong](https://www.htmlgames.com/uploaded/game/thumb800/japanjong800450.webp)

JapanJong plunges the ancient, highly structured mechanics of traditional Chinese tile-matching into a breathtaking, deeply atmospheric Japanese environment across 80 meticulously designed, handcrafted levels. Moving far beyond the sterile, flat green felt of standard solitaire games, this title constructs massive, complex architectural pyramids using beautifully illustrated tiles depicting koi fish, cherry blossoms, samurai swords, and traditional kanji. The atmosphere is incredibly relaxing and immersive, trading the tense ticking clocks of arcade games for the soothing, ambient sounds of a Zen garden. You are tasked with analyzing towering, overlapping tile structures, meticulously searching for exposed pairs to dismantle the board. The visual presentation is exceptionally polished, utilizing earthy, rich color palettes and dynamic lighting effects that simulate sunlight striking bamboo, ensuring the puzzle remains perfectly readable even when the board is massively congested. JapanJong is a highly successful thematic reskin, proving that a timeless puzzle formula can be completely refreshed with a massive volume of content and a strong, cohesive artistic vision.

## How to Play
* Your objective is to completely clear the entire screen by matching identical pairs of Japanese-themed tiles across 80 distinct layouts.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles heavily overlap in 3D structures, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden tiles buried beneath them.
* If you clear every tile from the screen, you advance. If you run out of valid, accessible matches, you lose the level.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Memorize the Categories:** Like traditional Mahjong, this version features groups of tiles (like different seasons or flowers) that can be matched with each other, even if they aren't identical. Learn these groups instantly.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach koi tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a koi tile buried deep in the center tower.
* **Use the Reshuffle (If Available):** Treat the shuffle button like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably dead.`
  },
  {
    title: "Zig Zag Gate",
    seoContent: `![Zig Zag Gate](https://www.htmlgames.com/uploaded/game/thumb800/zigzaggate800450.webp)

Zig Zag Gate strips the endless runner genre down to its absolute, most viscerally satisfying core, delivering a pure, unadulterated test of split-second reflex timing and shape recognition. Moving entirely away from complex combat mechanics or sprawling 3D environments, this title embraces a highly stylized, neon-drenched arcade aesthetic. You are placed in control of a geometric avatar hurtling forward at high speeds along a narrow, winding path. Your objective is intensely focused: navigate through a series of rapidly approaching gates by instantly transforming your avatar to match the exact shape of the hole in the gate. The atmosphere is deeply kinetic; gravity and momentum are constant threats, and the screen is perpetually pushing you forward, forcing you to constantly react to incoming hazards with pixel-perfect precision. The visual presentation is highly polished, utilizing a vibrant, high-contrast style that ensures the incoming gates are perfectly readable against the background, even when the running speed reaches blistering levels. Zig Zag Gate is a pure shot of arcade adrenaline.

## How to Play
* The primary objective is to survive as long as possible and pass through as many gates as you can, racking up a massive high score.
* Your geometric avatar moves forward automatically at a constant, high speed.
* As you approach a solid wall with a specifically shaped hole in it (a gate), you must quickly analyze the shape (e.g., a circle, a square, a triangle).
* Click the \`Left Mouse Button\` or tap the screen to instantly cycle your avatar's shape.
* You must transform your avatar to match the exact shape of the upcoming gate before you collide with it.
* If you hit the wall while in the wrong shape, you are instantly destroyed and the game is over.

## Tips and Tricks
* **Look at the Horizon, Not Your Avatar:** Your eyes should never be focused on the shape you currently are. Your eyes should be permanently glued to the absolute furthest point on the horizon. You must identify the incoming gate shape seconds before it arrives.
* **Memorize the Cycle Order:** The shapes always cycle in the exact same order (e.g., Circle -> Square -> Triangle). You MUST memorize this loop. If you are a circle and a triangle gate is coming, you must know instantly whether you need to click once or twice.
* **Don't Panic Click:** The most common cause of death is seeing a gate, panicking, and rapidly double-clicking, causing you to accidentally cycle past the correct shape. One deliberate, calculated click is better than a frantic double-click.
* **Find the Rhythm:** The gates are often spaced out at regular intervals. Try to get into a rhythmic flow state, timing your clicks to the beat of the game rather than just reacting visually.
* **Stay Calm During Speed Boosts:** As you progress, the game will inevitably speed up. Do not tense your hand. Keep your clicking finger relaxed to ensure your timing doesn't become erratic.`
  },
  {
    title: "Tap It Away 3D",
    seoContent: `![Tap It Away 3D](https://www.htmlgames.com/uploaded/game/thumb800/tapitaway3d800450.webp)

Tap It Away 3D fundamentally rewrites the rules of the traditional spatial logic puzzle, replacing flat, 2D grids with a massive, fully rotatable, interlocking 3D cube structure. Set against a clean, visually minimalist aesthetic, players are presented with a massive cluster of smaller blocks. Every single block has a directional arrow painted on it. Your objective is elegantly simple yet brutally difficult in execution: you must click the blocks to make them fly away, completely dismantling the entire structure. However, a block will only fly away if its designated flight path (indicated by the arrow) is completely unobstructed by other blocks. The atmosphere is deeply calculating and immensely satisfying, relying entirely on your ability to visualize intersecting flight paths in a 3D space. The visual presentation is exceptionally polished, utilizing vibrant, high-contrast colors and a remarkably smooth camera system that allows you to inspect the structure from any angle. Tap It Away 3D is a pure, unpressured test of sequence planning and structural engineering.

## How to Play
* The primary objective is to completely dismantle the massive 3D structure by tapping every single block away.
* Use your \`Mouse\` to click and drag the background to physically rotate the entire 3D puzzle cluster 360 degrees.
* Every block has an arrow on it indicating the direction it wants to fly.
* Click the \`Left Mouse Button\` on a block to attempt to remove it.
* **The Golden Rule:** The block will ONLY fly away if there is absolutely no other block sitting directly in front of its arrow.
* If a block's path is blocked, it will wiggle slightly but remain in place.
* You must systematically rotate the structure, finding the blocks on the outer edges that have clear flight paths, slowly peeling the layers away to unlock the blocks trapped in the center.

## Tips and Tricks
* **Rotate Constantly:** You cannot solve this puzzle by staring at one side. You must constantly spin the structure after every single move to see if your removal unblocked a new block on the opposite side of the cluster.
* **Look for the "Outward" Arrows:** Your absolute highest priority at the start of a level is locating the blocks whose arrows point directly outward into empty space, away from the center mass. These are always the first pieces to remove.
* **Trace the Path Backwards:** If you see a block trapped deep in the center that you really want to remove, look at its arrow. Physically trace the invisible line that arrow creates through the other blocks, and dismantle that specific "tunnel" first.
* **Don't Forget Up and Down:** The structure is fully 3D. Many blocks are locked because their arrows point straight up into the "ceiling" of the cluster, or straight down into the "floor." Rotate the camera to look directly from above or below.
* **Take Your Time:** There is usually no timer. Do not blindly tap blocks hoping one is free. Treat it like a Rubik's cube; analyze the structure, find the loose ends, and deliberately pull the thread.`
  },
  {
    title: "Happy Bees",
    seoContent: `![Happy Bees](https://www.htmlgames.com/uploaded/game/thumb800/happybees800x450.webp)

Happy Bees strips the highly saturated Match-3 puzzle genre down to a delightfully chaotic, apiary-themed core, replacing the standard static swapping mechanics with a highly kinetic, sliding-row system (often referred to as "Chuzzle" mechanics). Set against a bright, visually vibrant honeycomb grid, players are tasked with managing a massive swarm of brightly colored, cartoon bees. Instead of clicking two adjacent items to swap them, you must physically click and drag entire horizontal rows or vertical columns, sliding the bees across the board to force identical colors to touch. The atmosphere is deeply calculating and intensely satisfying; you are essentially managing a massive, interconnected slide puzzle. The visual presentation is exceptionally polished, utilizing crisp, brightly colored bee sprites that buzz happily when matched, accompanied by satisfying, sticky audio cues. The brilliance of Happy Bees lies entirely in its demanding spatial logic; sliding a row to make a match on the right side might inadvertently break a massive combo you were building on the left. It is a pure test of sequence planning and bottleneck management.

## How to Play
* The primary objective is to clear specific quotas of colored bees (e.g., collect 50 red bees) before you run out of moves or time.
* You do not swap individual pieces. Use your \`Mouse\` to click, hold, and drag an ENTIRE horizontal row left or right, or an ENTIRE vertical column up or down.
* When you slide a row, the bees wrap around the board (e.g., a bee pushed off the right edge reappears on the left edge).
* When a slide results in three or more identical bees physically touching (horizontally or vertically), they will instantly pop and disappear.
* Gravity will pull the remaining bees down, and new bees will fall from the ceiling.

## Tips and Tricks
* **Check the Collateral Damage:** The most common mistake in this game is sliding a row to make a simple match of three, completely ignoring that the slide just ruined a massive, five-bee combo that was forming on the other side of the board. Look at the *entire* row before you slide it.
* **The "Wrap Around" Move:** Because the rows wrap around the edges of the board, you can often make matches by pushing two bees on the far right edge into a single bee on the far left edge. Utilize the screen borders!
* **Work the Corners:** It is incredibly difficult to align bees in the dead center of the board because sliding the center rows affects almost everything else. Try to build your massive combos near the edges where they are less likely to be disrupted.
* **Look for 2x2 Squares:** Unlike standard Match-3 games, many sliding games allow you to match a 2x2 block (four bees in a square). This is often easier to set up via sliding than a straight line of three.
* **Focus on the Objective:** If the level requires you to collect 40 yellow bees, stop sliding rows to make accidental blue matches. Every move you make should be mathematically designed to bring yellow bees closer together.`
  },
  {
    title: "Bubble Throw",
    seoContent: `![Bubble Throw](https://www.htmlgames.com/uploaded/game/thumb800/bubblethrow800450.webp)

Bubble Throw delivers the absolute purest, most unadulterated distillation of the legendary arcade-shooter formula, completely stripping away the bloated narratives, unnecessary mini-games, and complex meta-progression that plague modern iterations of the genre. This is the genre exactly as it was meant to be played: a massive ceiling of brightly colored spheres, a single aiming cannon, and an unrelenting pursuit of massive, structure-collapsing chain reactions. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core shooting mechanic. You are tasked with calculating angles, bouncing shots off the sidewalls, and grouping colors to trigger massive structural collapses. The visual presentation is highly polished, utilizing crisp, high-definition sprites that pop with color against the simple background. The explosive animations and satisfying audio cues that accompany a board-clearing combo are nothing short of spectacular, providing a constant dopamine drip. Bubble Throw is a pure, uncompromising test of geometric calculation and reflex aiming.

## How to Play
* The primary objective is to clear the entire screen of bubbles before the ceiling physically lowers and crushes your cannon.
* You control a cannon at the bottom of the screen holding a specifically colored bubble.
* Use your \`Mouse\` to aim the trajectory line.
* Click the \`Left Mouse Button\` to fire your bubble.
* When your fired bubble connects with a cluster of two or more bubbles of the EXACT SAME color, the entire connected group will pop and disappear.
* If you shoot and fail to make a match a certain number of times (indicated by grey dots at the bottom), the entire ceiling will shift downward by one row.

## Tips and Tricks
* **Master the Bank Shot:** You cannot always shoot straight. You MUST learn to bounce your bubbles off the left and right walls to ricochet them into tight, otherwise unreachable gaps near the top of the structure.
* **Sever the Root:** Do not just shoot at the lowest hanging bubbles. Look for the "structural joints"—small clusters of bubbles holding up massive, mixed-color chunks below them. If you destroy the joint, the entire massive chunk below it falls instantly, granting huge points.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* bubble color. Knowing what you have in reserve completely dictates where you should place your current shot.
* **Don't Build Walls:** If you have a red bubble and no red clusters are visible, do not just shoot it directly into the middle of the board, blocking other colors. Shoot it off to the extreme left or right edge to keep the center open.
* **Clear High Colors Completely:** If there are only two yellow bubbles left on the entire board, prioritize eliminating them immediately. Once a color is entirely gone, the game will stop generating it in your cannon, drastically increasing your odds of getting the colors you actually need.`
  }
];

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  let updated = 0;
  for (let g of manualData) {
    const res = await Game.updateMany(
      { title: g.title },
      {
        $set: {
          curated: true,
          seoContent: g.seoContent
        },
        $unset: { editorRating: 1 }
      }
    );
    if (res.modifiedCount > 0) {
      console.log('Successfully updated: ' + g.title);
      updated++;
    } else {
      console.log('Failed to update: ' + g.title);
    }
  }
  console.log('Total updated: ' + updated);
  process.exit(0);
}
run();
