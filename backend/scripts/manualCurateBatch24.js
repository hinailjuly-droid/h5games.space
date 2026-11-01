const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Easter Hex Puzzle",
    seoContent: `![Easter Hex Puzzle](https://www.htmlgames.com/uploaded/game/thumb800/easterhexpuzzle800450.webp)

Easter Hex Puzzle fundamentally rewrites the rules of the traditional spatial logic puzzle by abandoning the standard square grid in favor of a vastly more complex, interconnected hexagonal matrix (often known as a "Lights Out" variant). Wrapped in an adorable, pastel-colored springtime aesthetic, players are tasked with guiding a cute Easter Bunny across a field of hexagonal tiles to reach a glowing Easter egg. However, you do not directly control the rabbit. Instead, you manipulate the environment. When you click a hexagonal tile, it toggles its state (active or inactive). Crucially, clicking a tile *also* toggles the state of all six immediately adjacent neighboring tiles. The atmosphere is deeply calculating and immensely satisfying, requiring players to visualize complex chain reactions and overlapping toggles. The visual presentation is exceptionally polished, utilizing soft springtime colors that ensure the "active" and "inactive" states of the tiles are perfectly readable. Easter Hex Puzzle is a pure, uncompromising test of sequence planning and reverse engineering.

## How to Play
* The primary objective is to create a solid, continuous path of "active" (usually brightly colored) tiles from the rabbit's starting position to the Easter egg.
* Use your \`Mouse\` to click on any hexagonal tile on the board.
* **The Toggle Rule:** Clicking a tile instantly reverses its current state (turning it "on" if it was "off", or "off" if it was "on").
* **The Chain Reaction:** Simultaneously, clicking a tile also reverses the state of every single tile physically touching its six sides.
* You must carefully calculate your clicks so that the overlapping toggles eventually leave a perfectly solid path.
* The level is instantly completed when a valid, unbroken path connects the bunny to the egg.

## Tips and Tricks
* **Work Backwards (Reverse Engineering):** Do not start clicking randomly near the rabbit. Look at the Easter egg. What is the very last tile needed to connect to it? Figure out how to activate that specific tile, and then work your way backward toward the start.
* **The "Chase the Lights" Strategy:** A common tactic for these puzzles is to pick a direction (e.g., top to bottom) and systematically click the tile directly *below* an inactive tile to turn the one above it on. This "chases" the broken tiles to the bottom edge of the board.
* **Don't Be Afraid to Break It:** Often, to fix a single broken tile, you must click a tile that temporarily ruins five perfectly good tiles. Do not panic. Embrace the chaos, as the overlapping toggles will eventually resolve themselves if you stick to your plan.
* **Isolate the Corners:** Hexagons on the extreme corners or edges of the board only have two or three neighbors instead of six. These are incredibly powerful pivot points because their chain reaction is much smaller and easier to control.
* **Restart Quickly:** If you have clicked 30 times and the board looks like static television noise, you have lost the mathematical thread. Use the restart button to wipe the board clean and try a new sequence.`
  },
  {
    title: "Tetris 1024",
    seoContent: `![Tetris 1024](https://www.htmlgames.com/uploaded/game/thumb800/tetris1024800450.webp)

Tetris 1024 brilliantly fuses the relentless gravity and spatial organization of the iconic block-falling arcade genre with the highly addictive, mathematical merging mechanics of "2048". Set against a clean, visually minimalist grid, players are tasked with managing a constant stream of falling, numbered squares instead of complex geometric shapes. As the numbered blocks descend from the ceiling, you must actively steer them, dropping them onto identical numbers to instantly merge them into a single block of a higher value (e.g., dropping a 4 onto a 4 creates an 8). The atmosphere is deeply kinetic and incredibly stressful; you aren't just trying to keep the board flat, you are desperately trying to route specific numbers into their designated stacks before the board fills up. The visual presentation is highly polished, utilizing crisp, contrasting colors for different numerical tiers. Tetris 1024 is a pure, uncompromising test of reflex timing, spatial logic, and rapid numerical cascade planning.

## How to Play
* The primary objective is to survive as long as possible by merging numbered blocks until you reach the target number (often 1024 or higher).
* Numbered blocks will fall from the top of the screen one at a time.
* Use the \`Left\` and \`Right\` Arrow keys to steer the falling block horizontally across the columns.
* Press the \`Down Arrow\` key to instantly hard-drop the block straight to the bottom of its current column.
* When a falling block lands directly on top of, or lands directly adjacent to (horizontally), a block with the EXACT SAME number, they merge into a single block with a higher value (e.g., two 16s merge into a 32).
* The game is instantly over if any column of blocks stacks high enough to touch the ceiling.

## Tips and Tricks
* **Keep the High Numbers at the Bottom:** Your absolute highest priority is ensuring your largest numbers (64, 128, 256) stay firmly anchored at the very bottom of the grid. Never drop a tiny '2' directly on top of your massive '256', permanently burying it.
* **Build Sequential Columns:** Try to keep your numbers organized sequentially. If your biggest block is a 128, try to build a 64 right next to it, and a 32 next to that. When you finally trigger a merge, the physical expansion will trigger an automated domino effect horizontally.
* **Don't Let the Board Become Jagged:** A highly uneven board with massive spikes and deep valleys makes it incredibly difficult to maneuver falling blocks from the left side to the right side. Try to keep the top layer of your board relatively flat.
* **Use the Hard Drop Strategically:** Do not let pieces float down slowly. The faster you hard-drop pieces, the more time you have to analyze the board state before the *next* piece spawns.
* **Watch the "Next Piece" Indicator:** Knowing exactly what number is falling next completely dictates where you should steer your current piece.`
  },
  {
    title: "Rome Hidden Objects",
    seoContent: `![Rome Hidden Objects](https://www.htmlgames.com/uploaded/game/thumb800/romehiddenobjects800450.webp)

Rome Hidden Objects is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and historically immersive core. Forget convoluted detective storylines; this title is a pure, unadulterated shot of visual tourism focused entirely on acute observation. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing the iconic, ancient architecture of Rome, from the towering, weathered arches of the Colosseum to the sun-drenched ruins of the Forum and vibrant piazzas. Your objective is elegantly simple: locate the subtle, thematic items expertly blended into the Italian environment. The atmosphere is intoxicatingly rich and deeply relaxing, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, classical statues, and complex marble geometry. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy cobblestone and crumbling pillar is rendered with breathtaking clarity. The sensation of discovery makes every successfully located item feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of the Roman scene.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden objects before the strict time limit expires to advance to the next historical location.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the base of a gladiator statue) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A modern wrench might be tinted stone-grey to blend into an ancient wall.
* **Check the Shadows:** The developers love hiding dark objects inside the deep shadows of arched doorways, underneath cafe tables, or inside unlit alleyways. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a centurion's helmet, you will accidentally spot the hidden scroll.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Puppy Puzzle",
    seoContent: `![Puppy Puzzle](https://www.htmlgames.com/uploaded/game/thumb800/puppypuzzle800450.webp)

Puppy Puzzle strips the highly saturated block-breaking genre down to its absolute, most viscerally satisfying core, delivering a pure, unadulterated test of spatial cascade optimization wrapped in an overwhelmingly adorable canine aesthetic. Moving away from the slow, methodical swiping of standard Match-3 games, this title embraces a chaotic, tap-to-destroy "collapse" mechanic that rewards speed and massive chain reactions. Set against a clean, visually vibrant grid, you are presented with a massive wall of tightly packed blocks featuring cute Golden Retrievers, Pugs, Dalmatians, and Huskies. Your objective is intensely focused: locate clusters of identical puppies and tap them to instantly obliterate them, causing the entire structure above to collapse downward under gravity. The atmosphere is deeply kinetic and immensely satisfying, perfectly capturing the arcade joy of demolition. The visual presentation is highly polished, utilizing crisp, cartoon textures and satisfying sound effects. Puppy Puzzle is a pure test of rapid pattern recognition, forcing you to calculate how the board will settle after every single explosive tap.

## How to Play
* The primary objective is to clear specific quotas of puppies (e.g., collect 50 pugs) before you run out of valid moves.
* Use your \`Left Mouse Button\` to click on any connected cluster of TWO or more identical puppy blocks.
* The entire clicked cluster will instantly explode, removing those puppies from the board.
* Gravity will immediately pull the remaining blocks directly above the explosion straight down to fill the empty space.
* If an entire vertical column is cleared, the remaining columns will slide horizontally to close the gap.
* The level is won when you reach your quota. The game is lost if you run out of moves or are left with isolated, single blocks that cannot be matched.

## Tips and Tricks
* **Work from the Top Down (Usually):** Unlike Match-3 games where you want to work from the bottom to cause random cascades, clicking a massive cluster at the bottom of the screen will violently scramble the entire board above it, often ruining carefully planned clusters. Try to peel the board from the top down to maintain control.
* **Build Massive Clusters:** Do not click a group of three Dalmatians if there is a way to safely merge them into a group of ten by destroying a few Huskies separating them. Massive clusters yield exponentially higher scores and often generate powerful bombs.
* **Watch the Singletons:** Your absolute biggest threat is ending up with a single, isolated Pug block on the far left side of the board. Always try to keep puppy types grouped together. If you see a singleton, prioritize moving other blocks to rescue it.
* **Calculate the Slide:** When you clear an entire column, the board slides together. Use this mechanic intentionally to force a cluster of retrievers on the left to merge with a cluster on the right.
* **Don't Panic Click:** There is usually no timer. Take a deep breath, analyze the board, and predict exactly where every block will fall *before* you click.`
  },
  {
    title: "Shape Grid",
    seoContent: `![Shape Grid](https://www.htmlgames.com/uploaded/game/thumb800/shapegrid800450.webp)

Shape Grid fundamentally rewrites the rules of the massively popular Match-3 genre by entirely abandoning the rigid, adjacent-swapping mechanic in favor of a highly tactical, completely open-ended movement system on a static grid (often known as a "Lines" or "Color Lines" variant). Set against a clean, visually minimalist board, players are tasked with organizing randomly spawning geometric shapes (circles, squares, triangles) of various colors. You can click ANY shape on the board and move it to ANY empty square, provided there is a clear, unobstructed path between the two points. However, every time you move a shape without forming a valid match, three *more* shapes instantly spawn on the grid. The atmosphere is deeply calculating and immensely stressful; you are essentially managing a constant influx of mismatched inventory, desperately trying to construct massive lines before the board completely fills up and locks you out. The visual presentation is exceptionally clean, utilizing crisp, high-contrast shapes. Shape Grid is a pure, unpressured test of spatial logic and long-term pathfinding.

## How to Play
* The primary objective is to survive as long as possible and score points by forming groups of identical shapes.
* Use your \`Mouse\` to click on any shape on the grid to select it.
* Click on any empty square on the grid to move the selected shape there.
* **The Pathfinding Rule:** The shape will only move if a clear, unobstructed path of empty squares exists between its current location and its destination (it cannot jump over other shapes).
* When you successfully align 4 or more identical shapes (horizontally, vertically, or often diagonally), they will instantly pop and disappear from the grid, scoring points and granting you a "free" turn.
* If you move a piece and DO NOT form a match of 4, the game will automatically spawn three random new shapes onto the grid.
* The game is over when the grid is completely full.

## Tips and Tricks
* **Prioritize Match-4s:** Your absolute highest priority is making a match to prevent the game from spawning three new pieces. If you have an opportunity to complete a line of 4, do it immediately to buy yourself breathing room.
* **Don't Build in the Center:** Placing a massive clump of shapes directly in the dead center of the grid acts as a massive wall, completely blocking your ability to route shapes from the left side to the right side. Build your lines along the outer edges of the board.
* **Anticipate the Spawns (If Possible):** Some versions of this game show you exactly which three shapes (and colors) are about to spawn next, and vaguely where they might land. Use this information! Don't move a red square across the board if a new red square is about to spawn exactly where you need it.
* **Set Up Combos:** Try to build structures where dropping one final piece into place completes a horizontal line of 4 *and* a vertical line of 4 simultaneously.
* **Leave Escape Routes:** Always ensure that your main building areas are connected to the rest of the board by at least a one-square-wide corridor.`
  },
  {
    title: "Bubble Bubble",
    seoContent: `![Bubble Bubble](https://www.htmlgames.com/uploaded/game/thumb800/bubblebubble800450.webp)

Bubble Bubble delivers the absolute purest, most unadulterated distillation of the legendary arcade-shooter formula, completely stripping away the bloated narratives, unnecessary mini-games, and complex meta-progression that plague modern iterations of the genre. This is the genre exactly as it was meant to be played: a massive ceiling of brightly colored spheres, a single aiming cannon, and an unrelenting pursuit of massive, structure-collapsing chain reactions. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core shooting mechanic. You are tasked with calculating angles, bouncing shots off the sidewalls, and grouping colors to trigger massive structural collapses before the weight of the bubbles crushes you. The visual presentation is highly polished, utilizing crisp, high-definition sprites that pop with color against the simple background. The explosive animations and satisfying audio cues that accompany a board-clearing combo are nothing short of spectacular, providing a constant dopamine drip. Bubble Bubble is a pure, uncompromising test of geometric calculation and reflex aiming.

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
  },
  {
    title: "Twenty One",
    seoContent: `![Twenty One](https://www.htmlgames.com/uploaded/game/thumb800/twentyone800450.webp)

Twenty One strips the world's most famous casino card game (Blackjack) down to its absolute, most fundamentally engaging core, completely removing the bloated meta-mechanics of gambling, splitting, and doubling down. Instead, it delivers a pure, rapid-fire test of mathematical probability and risk assessment. Set against a clean, visually minimalist green felt aesthetic, players are locked in a relentless, one-on-one duel against a digital dealer across five increasingly difficult levels. Your objective is elegantly simple yet brutally difficult in execution: you must draw cards to build a hand whose total numerical value is as close to exactly 21 as possible, without ever exceeding it (busting), and you must beat the dealer's final total. The atmosphere is deeply calculating and incredibly tense, relying entirely on your ability to memorize the adjusted card values and quickly calculate odds under pressure. The visual presentation is highly polished, utilizing crisp, custom-designed playing cards that ensure perfect readability. Twenty One is the ultimate, timeless brain-training routine for quick mental arithmetic.

## How to Play
* The primary objective is to beat the dealer's hand by getting a total card value closer to 21 than the dealer, without going over 21.
* **Unique Card Values:** Number cards (2-10) are worth their face value. Aces are usually worth 1 or 11. **CRITICAL CHANGE:** In this variant, Jacks (J) = 2 points, Queens (Q) = 3 points, and Kings (K) = 4 points.
* At the start of a round, you are dealt two cards face up. The dealer receives one card face up, and one face down.
* Use your \`Mouse\` to click the **"Hit"** button to draw an additional card from the deck to increase your total.
* Click the **"Stand"** button when you are satisfied with your total and want to end your turn.
* The dealer will then reveal their hidden card and must draw cards until they reach a minimum threshold (usually 17).
* If your total is higher than the dealer's (without going over 21), you win the round and advance to the next level.

## Tips and Tricks
* **Memorize the Face Cards:** Do not play this like standard Blackjack! The face cards (J, Q, K) are not worth 10. They are worth 2, 3, and 4. This fundamentally changes the math. A hand of 18 is incredibly safe to "Hit" on if the deck is full of Kings (4 points).
* **Assume the Dealer's Hidden Card:** The golden rule of Blackjack applies here: always mathematically assume the dealer's face-down card is the highest possible value (in this game, a 10). If the dealer is showing a 6, assume they have 16.
* **Don't Risk a Bust on a Dealer's Weakness:** If the dealer is showing a 4, 5, or 6, they have a very high statistical probability of busting when they are forced to draw. If you have a 13, do not risk hitting and busting yourself; stand, and let the dealer make the mistake.
* **Hit Hard on a Dealer's Strength:** If the dealer is showing a 9 or a 10, you must assume they have a 19 or 20. If you have a 16, standing is a guaranteed loss. You MUST hit and take the risk of busting to have any chance of winning.
* **Track the 10s:** The deck is heavily populated by 10s. If you haven't seen a 10 in three rounds, expect one to pop out soon and adjust your risk accordingly.`
  },
  {
    title: "Hawaiian Solitaire",
    seoContent: `![Hawaiian Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/hawaiiansolitaire800450.webp)

Hawaiian Solitaire takes the beloved, foundational mechanics of classic Klondike and injects a massive dose of flexibility, fundamentally altering the strategic ceiling while wrapping the entire experience in a beautiful, highly polished tropical aesthetic. Instead of the rigid, unforgiving rules of standard Windows solitaire where you can only move perfectly sequenced stacks, this variant introduces the "Supermove" or "Relaxed" rule: you are allowed to grab and move *any* group of face-up cards, regardless of whether they are in correct sequential order, provided the bottom-most card of the group forms a valid alternating-color match with its destination. This single rule change completely shatters traditional chokepoints. The atmosphere is deeply relaxing and incredibly satisfying, set against a stunning backdrop of palm trees and ocean sunsets. The visual presentation is exceptionally crisp, featuring high-definition tropical card sets that ensure perfect readability. Hawaiian Solitaire is the ultimate palette cleanser for card game fans who want the joy of massive cascading maneuvers without the frustrating deadlocks of standard Klondike.

## How to Play
* The primary objective is to move all 52 cards into the four foundation piles at the top right, building upward in suit from Ace to King.
* The main tableau consists of seven columns where cards must be built downward in alternating colors (e.g., a Red 8 can only be placed on a Black 9).
* Use your \`Mouse\` to click and drag cards between columns.
* **The Hawaiian Rule:** You can move ANY stack of face-up cards as a single unit, even if they are not in a valid sequence. For example, if you have a Black 5 resting on top of a Red Queen, you can grab the Black 5 and move *both* cards, as long as you place the Black 5 onto a Red 6.
* Use the stock pile at the top left to draw new open cards when you run out of valid moves.

## Tips and Tricks
* **Abuse the Group Move:** Do not play this like standard Klondike. The ability to move un-sequenced junk piles is your greatest weapon. Use this mechanic aggressively to temporarily shift massive stacks out of the way just to unearth a single face-down card at the bottom of a column.
* **Empty Columns are Still King:** Despite the relaxed movement rules, an empty column is still your most powerful tool, as it is the only place you can drop a King to start a fresh sequence. Prioritize clearing columns.
* **Unearth the Hidden Cards:** Your absolute highest priority in the early game is to flip over the face-down cards on the tableau. Always choose a move that reveals a hidden card over a move that just builds a sequence.
* **Don't Rush to the Foundations:** Just because you *can* move a Black 5 to the foundation doesn't mean you *should*. Sometimes keeping it on the tableau is necessary to hold a Red 4 that you desperately need to anchor a massive junk pile.
* **Build Evenly:** Try to build your four foundation piles at roughly the same pace. If you push the Spades up to Jack while Hearts are on 2, you limit your options.`
  },
  {
    title: "Peg Solitaire",
    seoContent: `![Peg Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/pegsolitaire800450.webp)

Peg Solitaire delivers the absolute purest, most unadulterated distillation of the legendary 17th-century physical tabletop puzzle, seamlessly transitioning the tactile joy of jumping wooden pegs into a highly polished digital environment. Moving entirely away from modern, chaotic arcade mechanics or complex card rules, this title embraces a deeply relaxing, highly methodical gameplay loop focused entirely on spatial logic, foresight, and the brutal mathematics of subtraction. Set against a clean, visually uncluttered workspace (often modeled as a wooden board), players are presented with a grid filled with pegs, leaving exactly one empty hole in the center. Your objective is elegantly simple yet brutally difficult: you must physically jump pegs over each other to remove them from the board, systematically dismantling the entire structure until only one single, solitary peg remains. The atmosphere is intensely focused; there are no ticking clocks or score multipliers. The visual presentation is highly functional, utilizing realistic textures and satisfying "clack" audio cues. Peg Solitaire is the ultimate brain-training routine for puzzle purists.

## How to Play
* The primary objective is to remove all pegs from the board until only exactly one peg is left (ideally in the dead center hole).
* Use your \`Mouse\` to click on a peg you wish to move.
* You can only move a peg by "jumping" it horizontally or vertically over an adjacent peg, landing in an empty hole directly on the other side.
* **The Golden Rule:** You CANNOT jump diagonally.
* When a peg is jumped over, it is instantly removed from the board.
* The game is instantly over (deadlocked) if you have multiple pegs left on the board, but no peg is positioned directly next to another peg with an empty hole behind it to execute a jump.

## Tips and Tricks
* **Work from the Outside In:** Do not start jumping pegs wildly in the dead center of the board. Your absolute highest priority is clearing the pegs located in the extreme corners and outer edges of the cross. If you leave a peg stranded in a corner, it is mathematically impossible to retrieve it later.
* **The Rule of Three:** Try to leave pegs in groups of three forming an "L" shape or a straight line. This ensures that you always have the necessary geometric setup to execute the final jumps in an isolated area.
* **Don't Isolate Pegs:** Before you execute a jump, visualize the board *after* the jump. Are you leaving a peg completely alone on the left side of the board with no neighbors? If so, do not make that jump.
* **Clear Entire Arms:** The board is usually shaped like a cross. Focus on systematically clearing an entire "arm" of the cross (e.g., the top 3x3 grid) before moving on to the next arm.
* **The "Undo" Button (If Available):** This game is mathematically unforgiving. If you realize you stranded a peg five moves ago, use the undo button. Trying to blindly brute-force a solution without backtracking is impossible.`
  },
  {
    title: "Music Mahjong",
    seoContent: `![Music Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/musicmahjong800450.webp)

Music Mahjong plunges the ancient, highly structured mechanics of traditional Chinese tile-matching into a breathtaking, deeply atmospheric symphony of sound and visuals. Moving far beyond the sterile, flat green felt of standard solitaire games, this title constructs massive, complex architectural pyramids using beautifully illustrated tiles depicting grand pianos, acoustic guitars, gleaming brass instruments, and delicate musical notes. The atmosphere is incredibly relaxing and immersive, trading the tense ticking clocks of arcade games for the soothing, ambient sounds of classical orchestration and gentle acoustic melodies. You are tasked with analyzing towering, overlapping tile structures, meticulously searching for exposed pairs to dismantle the board like a digital maestro conducting a visual symphony. The visual presentation is exceptionally polished, utilizing rich, warm color palettes that ensure the puzzle remains perfectly readable even when the board is massively congested. Music Mahjong is a highly successful thematic reskin, proving that a timeless puzzle formula can be completely refreshed with a strong, cohesive, and audibly beautiful artistic vision.

## How to Play
* Your objective is to completely clear the entire screen by matching identical pairs of music-themed tiles.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles heavily overlap, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden instruments buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, you lose.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Memorize the Categories:** Like traditional Mahjong, this version may feature groups of tiles (like different types of woodwind instruments or percussion) that can be matched with each other, even if they aren't identical. Learn these groups instantly if the game utilizes them.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach piano tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a piano tile buried deep in the center tower.
* **Use the Reshuffle (If Available):** Treat the shuffle button like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably dead.`
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
