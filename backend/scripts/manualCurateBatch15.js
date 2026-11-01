const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Mahjong Collection",
    seoContent: `![Mahjong Collection](https://www.htmlgames.com/uploaded/game/thumb800/mahjongcollection800450.webp)

Mahjong Collection serves as the ultimate, definitive anthology for fans of the ancient Chinese tile-matching puzzle, offering an unprecedented eleven distinct variations of the game housed within a single, highly polished digital interface. Moving far beyond a simple reskin, this massive compilation provides players with an incredibly diverse set of challenges, ranging from the traditional, towering 3D pyramids of classic Mahjong Solitaire to wildly complex 2D pathfinding variants like Nikakudori (Connect) and sliding tile puzzles. The atmosphere is immensely satisfying and highly customizable, allowing you to seamlessly switch between intensely demanding geometric layouts and relaxing, untimed matching sessions. The visual presentation is exceptionally crisp, featuring high-definition traditional tile sets that ensure perfect readability regardless of which of the 11 rule sets you are currently playing. Mahjong Collection is not just a game; it is a comprehensive library of brain-training exercises, guaranteeing hundreds of hours of meticulously designed, tile-matching perfection for both veterans and newcomers alike.

## How to Play
* The primary objective varies depending on which of the 11 Mahjong variations you select from the main menu.
* **Classic Solitaire:** Use your \`Left Mouse Button\` to click and match identical, "free" tiles (tiles unblocked on the left or right) to clear the 3D structure.
* **Connect/Nikakudori:** Click two identical tiles to connect them, provided a clear path with no more than two 90-degree corners can be drawn between them on the flat grid.
* **Slide:** Physically click and drag tiles across the board to push them into identical matching pairs.
* Each specific game mode features a built-in "?" or "Help" button. ALWAYS click this before starting a new variation to understand the specific rules of removal.

## Tips and Tricks
* **Read the Rules:** Because this is a collection, the rules change drastically between games. Do not assume you know how to play. A valid move in Classic Solitaire might be an illegal move in Mahjong Connect.
* **Classic - Work from the Outside In:** In 3D layouts, always prioritize matching tiles on the absolute highest peaks and the extreme outer edges to maximize the number of tiles you uncover underneath.
* **Connect - Clear the Borders:** In the 2D pathfinding modes, the tiles on the extreme outer edge of the board are the easiest to match because their path can route freely through the empty space outside the grid.
* **Don't Rush:** Many of the variations in this collection do not have strict timers. Treat them like a game of chess. Analyze the entire board and predict the consequences of a match before clicking.
* **Use the Hints (To Learn):** If you are playing a brand-new variation for the first time and get stuck, use the hint button to see what a valid move looks like in that specific rule set.`
  },
  {
    title: "Illustrations 3",
    seoContent: `![Illustrations 3](https://www.htmlgames.com/uploaded/game/thumb800/illustrations3800450.webp)

Illustrations 3 strips the "spot the difference" puzzle genre down to its absolute, most captivating and artistically driven core. Forget messy, cluttered photographs or convoluted detective storylines; this title is a pure, unadulterated shot of visual immersion focused entirely on acute observation of beautiful, hand-drawn art. You are presented with two seemingly identical, stunningly detailed digital illustrations—often featuring surreal landscapes, quirky characters, and vibrant color palettes. Your task is to meticulously scan both images side-by-side to locate the subtle discrepancies deliberately injected by the artist. The atmosphere is intoxicatingly rich and deeply relaxing, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise and complex geometry. Visually, the game opts for a highly stylized, almost painterly aesthetic, ensuring that the differences are hidden within the brushstrokes and shading rather than just missing objects. The sensation of discovery is incredibly well-executed, making every successfully located difference feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single subtle difference between the two side-by-side artistic illustrations.
* Use your \`Mouse\` to carefully scan the high-definition scenes.
* When you spot a discrepancy (e.g., a missing leaf, a different colored hat, an extra line), click the \`Left Mouse Button\` directly on that spot in EITHER image.
* Successfully locating a difference will usually draw a circle around it and update your counter.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the differences before the strict time limit expires to advance to the next illustration.

## Tips and Tricks
* **The Magic Eye Technique:** Instead of looking back and forth rapidly between the two images, try to relax your eyes and look at the "dead space" directly in the middle of the screen. Sometimes, the subtle differences will create a slight visual flicker in your peripheral vision.
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the top-left sky) before moving to the next.
* **Look for Shapes, Not Just Objects:** Because these are illustrations, the artist might not remove an entire object; they might just slightly alter the curve of a smile or the angle of a shadow. Look for geometric alterations in the linework.
* **Check the Edges:** Artists love hiding tiny differences right on the absolute edge of the frame, where players rarely focus their attention.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Medieval Defense",
    seoContent: `![Medieval Defense](https://www.htmlgames.com/uploaded/game/thumb800/medievaldefense800450.webp)

Medieval Defense injects a massive dose of strategic depth, resource management, and vertical architectural planning into the highly competitive tower defense genre. Moving away from sprawling, horizontal maps where you place dozens of separate turrets, this title forces you to construct and manage a single, towering monolith. You are placed in command of a heavily fortified medieval tower, tasked with adding new floors and deploying specific units—archers, mages, and heavy infantry—to hold the line against relentless hordes of invading barbarians, mythical beasts, and siege engines approaching from the ground and the air. The atmosphere is intensely focused and deeply tactical; you must constantly balance spending gold on building new vertical floors versus upgrading the lethal output of your existing soldiers. The visual presentation is exceptionally polished, utilizing a vibrant, high-definition 2D art style that brings the chaotic siege to life. The satisfying clash of steel, the thwack of arrows, and the spectacular magical explosions ensure that every successful wave defense feels like a hard-won victory.

## How to Play
* The primary objective is to prevent the enemy waves from destroying your central tower.
* You start with a basic tower and a limited amount of gold. Enemies will approach from the left and right sides of the screen.
* Use your \`Mouse\` to click on the tower and spend gold to build a new floor.
* Once a floor is built, click it to purchase and assign a specific defensive unit (e.g., Archer, Mage, Cannon) to that floor.
* Your units will automatically attack any enemy within their specific range radius.
* Killing enemies rewards you with more gold, which you must use to build higher, add more units, or instantly upgrade existing units to increase their damage.
* If enemies reach the base of your tower, they will attack it. If the tower's health drops to zero, you lose.

## Tips and Tricks
* **Height Matters:** In a vertical tower defense, the units on the highest floors have the longest line of sight and the widest firing arc. Always put your longest-range units (like snipers or specific mages) on the absolute top floor.
* **Protect the Base:** Ground troops (like heavy knights or spike traps) should always be placed on the absolute bottom floor to physically stop enemy battering rams from hitting the stone walls.
* **Understand Armor Types:** The core of the game is rock-paper-scissors logic. Archers are great against fast, unarmored targets. Mages are mandatory for heavily armored knights. Artillery is needed for massive crowds. Do not spam just one unit type.
* **Upgrade Over Quantity:** Three fully upgraded archer floors are vastly superior to ten weak, level-one archer floors. Once you have a basic defense covering the ground and air, focus your gold purely on upgrading those core anchors.
* **Don't Forget the Air:** Eventually, flying enemies will bypass your ground-level defenses entirely and attack the middle of the tower. Ensure you have dedicated anti-air units built before the later waves arrive.`
  },
  {
    title: "Slide Wood",
    seoContent: `![Slide Wood](https://www.htmlgames.com/uploaded/game/thumb800/slidewood800450.webp)

Slide Wood fundamentally rewrites the rules of the massively popular block-falling puzzle genre (like Tetris), replacing the frantic anxiety of descending pieces with a highly tactile, physically grounded test of horizontal gravity and geometric manipulation. Set against a beautiful, high-definition digital rendering of a polished wooden game board, players are tasked with managing a massive stack of irregularly sized wooden beams. Instead of dropping blocks from the top, you must physically click and drag individual wooden blocks horizontally to the left or right. The objective is to slide a block so that it falls into an empty gap below it, strategically filling horizontal rows to clear them. The atmosphere is deeply calculating and immensely satisfying; you are essentially managing a controlled demolition, calculating exactly how the entire wooden structure will collapse downward when a support beam is moved. The visual presentation is highly polished, utilizing realistic wood-grain textures and incredibly satisfying, percussive "clacking" audio cues. Slide Wood is a pure test of long-term planning and spatial optimization.

## How to Play
* The primary objective is to survive as long as possible by creating completely solid horizontal lines of wooden blocks.
* The board is filled with wooden blocks of various lengths (from 1 unit to 4 units wide).
* Use your \`Mouse\` to click, hold, and drag a block horizontally to the left or right.
* When you slide a block over an empty gap, gravity will instantly pull it straight down until it lands on another block.
* When a completely solid horizontal line of blocks is formed (no empty gaps), that entire line is instantly destroyed, lowering the entire stack above it.
* After every move you make, a brand new row of randomly sized blocks pushes up from the very bottom of the screen.
* The game is instantly over if the stack of blocks reaches the absolute top of the board.

## Tips and Tricks
* **Work from the Bottom Up:** Your absolute highest priority is clearing the lines closest to the bottom of the screen. Every move you make pushes the stack higher, so you must constantly clear the foundation to keep the structure low.
* **Beware the Long Blocks:** A massive, 4-unit-wide wooden block is incredibly dangerous because it covers multiple gaps and is very hard to drop cleanly. Always prioritize sliding smaller blocks out of the way to allow the massive blocks to fall flat.
* **Calculate the Cascade:** Do not just slide a block to clear one line. Look at the structure *above* the block you are moving. Try to set up a slide where the block falls, clears a line, and causes the blocks above it to fall perfectly into another solid line, creating a massive combo.
* **Keep the Board Flat:** Try to avoid building a massive, towering peak on one side of the board and a deep valley on the other. A jagged board makes it impossible to slide blocks across the screen.
* **Think Two Moves Ahead:** Before you release the mouse button, visualize exactly where the block will land, and more importantly, visualize the brand new row of blocks that will instantly appear at the bottom. Will your move trap you?`
  },
  {
    title: "Clock Solitaire",
    seoContent: `![Clock Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/clocksolitaire800450.webp)

Clock Solitaire completely abandons the traditional, vertical-column sequence building of standard Klondike, replacing it with a brilliant, highly visual, and entirely luck-driven mechanic based entirely on the face of an analog clock. Instead of building descending runs of alternating colors, players are tasked with sorting a fully shuffled deck of 52 cards into 12 piles arranged in a perfect circle (representing the hours 1 through 12), with a 13th pile sitting in the dead center. The atmosphere is incredibly fast-paced, highly addictive, and requires absolutely zero deep strategic planning; it is a pure, unadulterated game of chance and rapid card placement. The visual presentation is exceptionally clean, utilizing crisp, classic playing card graphics set against a traditional green felt backdrop, ensuring perfect readability as you rapidly flick cards around the dial. Clock Solitaire is the ultimate, bite-sized palette cleanser for card game fans, offering a lightning-fast gameplay loop that perfectly captures the "just one more try" mentality.

## How to Play
* The primary objective is to successfully uncover all four cards in every single hour slot (1 through 12) before you uncover the fourth and final King in the center pile.
* The board is arranged like a clock. The top pile is 12, the right pile is 3, the bottom is 6, etc. The center pile represents the Kings (13).
* The game starts by turning over the top card of the center pile.
* Look at the number on the card. Use your \`Left Mouse Button\` to click on the corresponding pile on the clock face (e.g., if you draw a 4, click the pile at the 4 o'clock position).
* The card will be placed face-up under that pile, and you will automatically draw the top face-down card from that 4 o'clock pile to play next.
* Aces are placed at 1 o'clock. Jacks are placed at 11 o'clock. Queens are placed at 12 o'clock. Kings are placed in the center pile.

## Tips and Tricks
* **There is No Strategy:** It is vital to understand that Clock Solitaire is 100% reliant on the initial shuffle of the deck. There are absolutely no strategic choices to make. Your only job is to place the card in the correct slot as fast as possible.
* **The Death Condition:** You lose the game the exact second you draw the fourth King and place it in the center pile, *unless* every other card on the clock face is already face-up.
* **Speed is Key:** Because the game requires no thought, challenge yourself to play it as quickly as humanly possible. Treat it like a reaction-time test to see how fast you can map the number on the card to the physical location on the clock.
* **Memorize the Face Cards:** Don't waste time thinking about where the face cards go. Instantly map them in your brain: Jack is Top-Left (11), Queen is Dead-Top (12), King is Center.
* **Enjoy the Ride:** Don't get frustrated if you lose five games in a row. The win rate for Clock Solitaire is mathematically very low (around 1 in 13). It is entirely about the dopamine hit of placing the cards rapidly.`
  },
  {
    title: "Atlantis Gem",
    seoContent: `![Atlantis Gem](https://www.htmlgames.com/uploaded/game/thumb800/atlantisgem800450.webp)

Atlantis Gem delivers the absolute purest, most unadulterated distillation of the legendary match-3 formula, wrapping it in a stunning, high-definition aquatic aesthetic. Completely stripping away the bloated narratives, unnecessary mini-games, and complex meta-progression that plague modern iterations of the genre, this title focuses entirely on the visceral satisfaction of the core swapping mechanic. Set against the ruins of a sunken civilization, you are tasked with physically aligning glowing sapphires, golden coins, and ancient pearls to trigger massive cascading chain reactions. The game introduces a fantastic objective-based twist: you aren't just matching gems for points; you must make matches *over* specific colored tiles on the grid to shatter the background and unearth the ruins. The visual presentation is highly polished, utilizing crisp sprites that crackle with magical water energy when linked together. The explosive animations and satisfying audio cues that accompany a board-clearing combo provide a constant, reliable dopamine drip. Atlantis Gem is a pure, uncompromising test of spatial planning and reflex execution.

## How to Play
* The core mechanic revolves around swapping adjacent jewels to create horizontal or vertical lines of three or more identical gems.
* Use your \`Mouse\` to click on a jewel, then click an adjacent one to swap their positions, or simply click and drag.
* Swaps are only permitted if they immediately result in a valid match of three or more.
* **The Primary Objective:** Some squares on the grid have a solid colored background (often stone or gold). You MUST make a successful match of three jewels *on top* of those specific squares to shatter the background. The level is won only when all colored backgrounds are destroyed.
* Matching four or five jewels creates glowing, line-clearing explosive gems or area-of-effect bombs.

## Tips and Tricks
* **Ignore the High Score, Focus on the Background:** It is incredibly easy to get distracted by a massive chain of red gems sitting in the middle of the board. If that match doesn't shatter a colored background tile, you are wasting a move (and the timer). Focus laser-like on the objective.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading gems dropping from the ceiling, often resulting in massive, free combos that accidentally shatter background tiles for you.
* **Attack the Corners Early:** The hardest background tiles to shatter are the ones tucked into the extreme corners or narrow columns of the grid because very few gems flow through those areas. Dedicate your early game to breaking the corners.
* **Combine the Power-Ups:** The most devastating move in the entire game is swapping two power-ups with each other. Swapping a line-clear with a bomb creates a massive, cross-shaped explosion that shatters a massive amount of background tiles instantly.
* **Don't Tunnel Vision:** It is incredibly easy to spend 30 seconds staring at the top left corner trying to force a match. If you can't see a move instantly, physically force your eyes to scan the opposite side of the board.`
  },
  {
    title: "Picture Pie - Ancient City",
    seoContent: `![Picture Pie - Ancient City](https://www.htmlgames.com/uploaded/game/thumb800/picturepieancientcity800450.webp)

Picture Pie - Ancient City takes the traditional jigsaw puzzle format and shatters it, replacing the tedious sorting of scattered pieces with a highly structured, intensely satisfying swapping mechanic. Set against a beautiful, high-definition backdrop of towering historical ruins, coliseums, and ancient statues, the game presents you with a stunning photograph that has been sliced into a rigid grid of square tiles. However, the tiles are already placed perfectly within the frame—they are just scrambled in the wrong locations. Your objective is not to rotate them, but to physically swap the positions of two adjacent tiles until the seamless historical photograph is perfectly restored. The atmosphere is incredibly relaxing yet highly engaging, completely devoid of the frustrating "where does this piece go" feeling of normal jigsaws. The visual presentation is highly polished, utilizing crisp, high-definition photography that makes aligning the subtle textures of weathered stone and blue skies a genuine test of visual acuity. Picture Pie is a brilliant, streamlined evolution of a classic pastime.

## How to Play
* Your objective is to restore the scrambled historical image to its original, perfect state.
* The image is divided into a grid of square tiles. All tiles are already facing the correct direction; they are just in the wrong spots.
* Use your \`Left Mouse Button\` to click and drag a tile, dropping it onto an immediately adjacent tile (up, down, left, or right) to instantly swap their positions on the grid.
* Continue swapping adjacent tiles until their visual lines, colors, and textures perfectly align with the surrounding pieces.
* The level is successfully completed when every single tile has been swapped into its correct, original location, revealing the full ancient city scene.

## Tips and Tricks
* **Start with the Borders:** Just like a traditional jigsaw, the absolute easiest pieces to solve are the edges. A tile with a stark, flat line (like the edge of a building against a blank sky) is easy to identify. Swap all the border pieces into place first to frame the puzzle.
* **Look for Distinct Lines:** Hunt for tiles that feature sharp, contrasting elements, like a dark stone pillar against a bright cloud, or the straight edge of a sword. These lines must connect seamlessly to the adjacent tiles.
* **Check the Corners:** The four corner tiles are a massive freebie. They usually contain very distinct colors that don't match the center of the image. Route them to the corners immediately.
* **The "Bubble Sort" Method:** If you know a piece belongs on the far right side of the board, but it is currently on the far left, simply swap it with the piece next to it, then the next, "bubbling" it across the board until it reaches its destination.
* **Use the Faces (If Any):** If the image features a historical figure or statue, start grouping the tiles containing their eyes or nose. Human brains are highly evolved to recognize facial symmetry, making these easy to align.`
  },
  {
    title: "Candy Mahjong",
    seoContent: `![Candy Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/candymahjong800450.webp)

Candy Mahjong plunges the ancient, highly structured mechanics of traditional Chinese tile-matching into a breathtaking, deeply atmospheric wonderland of sugar and sweets. Moving far beyond the sterile, flat green felt of standard solitaire games, this title constructs massive, complex architectural pyramids using beautifully illustrated tiles depicting glowing peppermints, chocolate bars, jelly beans, and lollipops. The atmosphere is incredibly relaxing and immersive, trading the tense ticking clocks of arcade games for a soothing, colorful puzzle environment that feels genuinely uplifting. You are tasked with analyzing towering, overlapping tile structures, meticulously searching for exposed pairs to dismantle the board. The visual presentation is exceptionally polished, utilizing bright, highly saturated color palettes that make identifying matching candies incredibly intuitive, even when the board is massively congested. Candy Mahjong is a highly successful thematic reskin, proving that a timeless puzzle formula can be completely refreshed with a strong, cohesive, and mouth-watering artistic vision.

## How to Play
* Your objective is to completely clear the entire screen by matching identical pairs of candy-themed tiles.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles heavily overlap, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden candies buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, you lose.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach lollipop tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a lollipop tile buried deep in the center tower.
* **Unlock Multipliers:** Always prioritize matching a pair if it results in *two* new tiles becoming free, rather than matching a pair that only frees up one.
* **Use the Reshuffle (If Available):** Treat the shuffle button like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably dead.`
  },
  {
    title: "4 Winds",
    seoContent: `![4 Winds](https://www.htmlgames.com/uploaded/game/thumb800/4winds800450.webp)

4 Winds delivers an absolute masterclass in minimalist, logic-driven puzzle design, taking a brilliantly simple pathfinding premise and pushing it to its absolute cerebral limits. Set against a clean, visually austere grid, players are presented with a board containing several scattered, numbered squares. Your objective is elegantly simple yet brutally difficult: you must draw straight lines (representing the wind) emanating from the numbered squares to completely fill every single empty cell on the entire grid. The atmosphere is deeply intellectual; there is no narrative, no flashy explosions, and absolutely no luck involved. It is a pure test of your ability to process numerical constraints, visualize invisible boundaries, and execute complex logical deductions through the process of elimination. The visual presentation is highly appealing in its absolute starkness, ensuring the puzzle mechanics remain perfectly readable. 4 Winds is the ultimate, uncompromising brain-training routine for hardcore logic purists.

## How to Play
* The primary objective is to fill every single empty square on the grid with a line (the "wind").
* The grid contains specific starting blocks with a number inside them (e.g., a "3").
* This number dictates exactly how many empty squares the lines emanating from that specific block must cover.
* Use your \`Mouse\` to click and drag from a numbered block to draw a straight line (up, down, left, or right).
* A numbered block can shoot lines in all four directions, but the *total* length of all its lines combined must exactly equal its number.
* Lines from different blocks CANNOT cross each other, and they CANNOT share the same square.
* The puzzle is solved when every empty square is covered by a line, and every numbered block's quota is perfectly met.

## Tips and Tricks
* **Find the "Trapped" Squares First:** Scan the grid for an empty square that is tucked into a corner or a narrow gap with only one possible line of sight to a numbered block. If an empty square can only be reached by the "4" block, instantly draw that line.
* **The "Max Out" Rule:** Look at the numbers. If you have a "5" block sitting in a corner, and it only has two possible directions to shoot (up or right), and the grid boundary is only 3 squares away... you know for a fact it MUST shoot in both directions to reach 5 total squares.
* **Blocks Can Stop Lines:** A line cannot pass *through* another numbered block. If a "2" is sitting directly below a "4", the "4" cannot shoot a line straight down past the "2". Use the numbered blocks as physical walls to limit the possibilities of other lines.
* **Never Guess:** This is a 100% pure math and logic puzzle. If you guess and draw a random line, you will break the board. Every single line placement can be proven mathematically.
* **Work from the Outside In:** The edges and corners of the board are highly restricted. Solve the perimeter first, as it naturally builds walls that force the center lines into specific patterns.`
  },
  {
    title: "Nonogram Saga",
    seoContent: `![Nonogram Saga](https://www.htmlgames.com/uploaded/game/thumb800/nonogramsaga800450.webp)

Nonogram Saga (frequently known as Picross, Griddlers, or Hanjie) delivers an absolute masterclass in pure binary logic design, seamlessly fusing hardcore mathematical deduction with the deeply satisfying reveal of pixel art. Set against a clean, visually minimalist grid, players are tasked with filling a board exclusively with black squares and empty spaces (X's) while strictly adhering to a brutal set of numerical clues listed on the edges of the board. The atmosphere is deeply intellectual; there is no narrative and no luck involved. It is a pure test of your ability to process intersecting rules and execute complex logical deductions through the process of elimination. The visual presentation is highly appealing in its absolute austerity, utilizing a stark grid that ensures the puzzle mechanics remain perfectly readable on grids scaling from a manageable 5x5 all the way up to a brain-melting 20x20. The genius of Nonogram Saga is the reward: perfectly solving the math reveals a beautiful, retro-style pixel art image. It is the ultimate brain-training routine for hardcore logic purists.

## How to Play
* Your objective is to color in the correct squares on the grid to reveal the hidden pixel art image.
* The numbers at the top of the columns and the left of the rows dictate exactly how many solid squares are in that line.
* **The Golden Rule:** A clue of "3 2" means there is exactly one unbroken block of three solid squares, followed by at least one empty space, followed by exactly one unbroken block of two solid squares in that specific row.
* Use your \`Left Mouse Button\` to click an empty square to color it in.
* Use your \`Right Mouse Button\` (or secondary click) to place an "X" in a square you mathematically know must be empty. This is crucial for solving.

## Tips and Tricks
* **The "Overlap" Method:** This is the most important technique in the game. Look at a 10x10 grid. If a row has a clue of "8", count 8 squares from the left, then count 8 squares from the right. The squares in the absolute middle that overlap in both counts MUST be colored in, regardless of where the block actually starts.
* **The "Zero" Clue:** If a row or column has a clue of "0", this is a massive freebie! Instantly fill that entire line with X's. You just created a wall that will help solve intersecting lines.
* **Mark Your X's:** Do not rely on your memory. If you know a square must be empty, physically place an X there. The X acts as a solid wall, helping you calculate the remaining space for the solid blocks.
* **Cap the Edges:** If a clue is "3" and you have colored in three squares touching the left wall, you MUST immediately place an X on the fourth square to "cap" the block, preventing it from growing larger.
* **Never Guess:** Nonograms are 100% pure mathematical logic. If you guess a square and you are wrong, you will break the entire puzzle and not realize it until 10 minutes later. Every placement can be proven.`
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
