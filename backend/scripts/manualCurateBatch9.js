const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Number Chain",
    seoContent: `![Number Chain](https://www.htmlgames.com/uploaded/game/thumb800/numberchain800450.webp)

Number Chain fundamentally rewrites the rules of the massively popular sliding number genre (like 2048 or Threes) by introducing a highly tactile, physically drawn line-connection mechanic. Instead of frantically swiping the entire board to force numbers together, this game grants players complete surgical control over exactly which tiles merge. Set against a beautiful, minimalist digital grid, you are tasked with linking identical numbered tiles by physically drawing a continuous line through them. The atmosphere is deeply calculating and immensely satisfying; you are essentially building a numerical pipeline that funnels low-value numbers into a massive, concentrated sum. The visual presentation is exceptionally clean, utilizing crisp, contrasting colors for different numerical tiers and satisfying, snappy animations that trigger when a massive chain finally collapses into a single tile. Number Chain is a brilliant, unpressured puzzle experience that trades rapid reflexes for pure, unadulterated spatial logic and long-term cascade planning.

## How to Play
* The primary objective is to reach a specific numerical goal by merging identical tiles to exponentially increase their value.
* Use your \`Mouse\` to click and hold on a numbered tile, then drag a line through adjacent tiles containing the exact same number.
* You can draw connections horizontally, vertically, and diagonally, allowing for incredibly complex, winding chains.
* Release the \`Left Mouse Button\` to collapse the chain. All the connected tiles will merge into a single tile with a higher value (e.g., linking three "2"s might create a "4" or an "8", depending on the specific rule set).
* The new, higher-value tile will spawn exactly at the location of the *last* tile you touched before releasing the mouse.

## Tips and Tricks
* **Control the Drop Zone:** Because the newly merged tile appears at the very end of your drawn chain, you have total control over where massive numbers accumulate. Always end your chain in a designated corner to keep your high numbers safely grouped together.
* **Maximize the Chain:** Never settle for connecting just two tiles if a third is available. A longer chain almost always results in a significantly higher-value final tile and clears more clutter from the board.
* **The "Bridge" Technique:** You can often connect two separated clusters of "4"s by linking them through a single "4" sitting in the middle of the board. Look for these crucial bridge tiles before making a move.
* **Work from the Outside In:** Try to clear low-value tiles from the edges of the board first. Keeping the center of the grid open gives you maximum flexibility for drawing complex diagonal lines later in the game.
* **Don't Strand the Big Numbers:** If you create a massive "128" tile right in the dead center of the board, surrounded by "2"s and "4"s, it becomes a permanent obstacle. Always try to pull your high numbers to the edges.`
  },
  {
    title: "Tropical Fruit Mahjong",
    seoContent: `![Tropical Fruit Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/tropicalfruitmahjong800450.webp)

Tropical Fruit Mahjong takes the ancient, highly structured mechanics of traditional Chinese tile-matching and whisks them away on a vibrant, sun-drenched island vacation. Moving far beyond the austere, historical aesthetic of bamboo and character tiles, this title infuses the classic pyramid layouts with incredibly crisp, high-definition illustrations of exotic fruits—mangos, coconuts, dragonfruit, and pineapples. The atmosphere is undeniably upbeat and refreshing, trading intense, cerebral silence for a vibrant, colorful puzzle environment that feels genuinely relaxing. You are tasked with analyzing complex, overlapping tile structures, meticulously searching for exposed, juicy pairs to dismantle the board before a generous timer expires. The visual presentation is exceptionally polished, utilizing bright, highly saturated color palettes that make identifying matching fruits incredibly intuitive, even when the board is massively congested. Tropical Fruit Mahjong is a highly successful thematic reskin, proving that a timeless puzzle formula can be completely refreshed with a strong, cohesive artistic vision.

## How to Play
* Your objective is to completely clear the entire board by matching identical pairs of tropical fruit tiles before the timer runs out.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the structure.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles heavily overlap, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden fruits buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, or if the timer hits zero, you lose.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach coconut tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a coconut tile buried deep in the center tower.
* **Unlock Multipliers:** Always prioritize matching a pair if it results in *two* new tiles becoming free, rather than matching a pair that only frees up one.
* **Use the Reshuffle (If Available):** Many versions offer a limited "shuffle" button. Treat this like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably dead.`
  },
  {
    title: "Minesweeper",
    seoContent: `![Minesweeper](https://www.htmlgames.com/uploaded/game/thumb800/minesweeper800450.webp)

Minesweeper is the undisputed, undisputed king of digital logic puzzles—a game so fundamentally perfect in its design that it has survived decades without needing a single mechanical alteration. This HTML5 adaptation delivers the purest, most unadulterated version of the classic explosive grid, stripping away any modern bloat or unnecessary graphical upgrades. You are presented with a completely blind grid of grey squares; beneath some lies safety, and beneath others lies instant, game-ending destruction. The atmosphere is an unmatched blend of sheer terror and intense intellectual satisfaction. The game relies entirely on strict mathematical deduction; the numbers revealed on safe squares dictate exactly how many bombs are hidden in the adjacent tiles. It is a pure test of your ability to process intersecting numerical data and execute flawless logical conclusions without making a single mistake. The visual style is iconic and utilitarian, ensuring perfect readability. Minesweeper remains the ultimate, timeless exercise in high-stakes problem solving.

## How to Play
* Your objective is to uncover every single safe square on the grid without clicking on a hidden mine.
* Use your \`Left Mouse Button\` to click a square and reveal what is underneath it.
* If you click a mine, the game is instantly over.
* If you click a safe square, a number (from 1 to 8) will appear. This number tells you exactly how many mines are touching that specific square (horizontally, vertically, or diagonally).
* Use your \`Right Mouse Button\` to place a red flag on a square you are mathematically certain contains a mine. This prevents you from accidentally clicking it later.

## Tips and Tricks
* **The 1-1 Pattern:** If you see a "1" on a flat wall of unrevealed squares, and another "1" right next to it, the mine MUST be touching both. This often allows you to instantly clear the squares next to the second "1" because it is already satisfied.
* **The 1-2-1 Pattern:** When you see the numbers 1, 2, 1 in a straight line against a wall of unrevealed squares, the two mines are ALWAYS located touching the two "1"s, and the square touching the "2" is safe.
* **Corners are the Key:** A "1" tucked into a corner with only one unrevealed square touching it is a massive freebie. Flag that square immediately.
* **Chord for Speed (If Supported):** In many advanced versions, if you have correctly flagged all the mines around a specific number, you can click both the \`Left\` and \`Right\` mouse buttons simultaneously on that number to instantly reveal all remaining adjacent safe squares.
* **Never Guess (Unless Forced):** Minesweeper is 99% pure logic. If you are guessing, you are almost certainly missing a mathematical deduction elsewhere on the board. Only guess if you have literally exhausted every other option.`
  },
  {
    title: "Block Drop",
    seoContent: `![Block Drop](https://www.htmlgames.com/uploaded/game/thumb800/blockdrop800450.webp)

Block Drop introduces a ferociously addictive, physics-based twist to the classic "2048" merging formula, completely changing how players interact with numbered tiles. Instead of sliding numbers around a static grid, you are actively dropping blocks from the top of the screen into a narrow, vertical silo. The atmosphere is deeply intense and requires a hybrid of spatial geometry and rapid mathematical calculation. You must carefully guide falling numbered blocks so they land directly on top of identical numbers, causing them to instantly merge and double in value. However, the physics engine adds a layer of chaotic unpredictability; blocks can bounce, slide off corners, and wedge themselves into awkward gaps. The visual presentation is highly polished, utilizing crisp, brightly colored blocks that pop against the dark background, ensuring perfect readability even when the silo is dangerously full. Block Drop is a masterclass in merging tactical planning with frantic, real-time arcade execution.

## How to Play
* The primary objective is to reach a specific numerical goal (like creating a 2048 block) before the silo completely fills up to the top line.
* A block with a specific number will appear at the top of the screen.
* Use your \`Mouse\` to drag the block left or right to position it.
* Click the \`Left Mouse Button\` (or simply release the block) to drop it down the silo.
* When a dropping block physically touches another block with the exact same number, they will instantly merge into a single block with double the value.
* Merged blocks often cause a cascade, allowing newly formed numbers to drop down and merge with blocks beneath them in massive chain reactions.

## Tips and Tricks
* **Keep the High Numbers at the Bottom:** Your absolute highest priority is ensuring your largest numbers stay anchored at the very bottom of the silo. Never drop a small "2" or "4" directly on top of your massive "512" block.
* **Build Sequential Columns:** Try to stack blocks in descending order (e.g., a 64 on the bottom, a 32 above it, a 16 above that). When you drop an 8 on the 8, it will trigger a massive chain reaction that instantly merges all the way down to the 64.
* **Don't Block the Corners:** If you drop a massive block right in the middle of the silo, you create two narrow, incredibly difficult-to-reach pockets on the left and right sides. Keep your big blocks pushed to the walls.
* **Use the Physics:** The blocks aren't perfectly sticky. If you have a narrow gap, you can sometimes drop a block slightly off-center to make it slide down the side of another block to reach the bottom.
* **Look Ahead:** Always pay attention to the "Next Block" indicator. If you know a 16 is coming next, you might deliberately drop your current 8 into an awkward spot just to prepare a landing pad for the 16.`
  },
  {
    title: "Flower Match 3",
    seoContent: `![Flower Match 3](https://www.htmlgames.com/uploaded/game/thumb800/flowermatch3800450.webp)

Flower Match 3 injects a massive dose of vibrant, botanical energy into the highly competitive tile-swapping genre, delivering a visual feast of blooming flora and intensely satisfying combination mechanics. Stepping away from generic gem-swapping, this title embraces a much more natural, relaxing thematic approach, requiring players to physically align glowing orchids, sunflowers, and vibrant lotuses. The atmosphere is undeniably charming and serene, perfectly capturing the essence of a peaceful garden without sacrificing the deep, strategic complexity that hardcore puzzle fans demand. Every level is a meticulously designed challenge, presenting specific objective quotas (like collecting 30 red roses or breaking frozen flower pots) that must be met within a strict move limit. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition sprites that crackle with magical energy when linked together. The explosive animations and satisfying audio cues that accompany a massive, board-clearing chain reaction are nothing short of spectacular. It is a pure, unadulterated test of spatial planning and cascade optimization.

## How to Play
* The core mechanic revolves around swapping adjacent flowers to create horizontal or vertical lines of three or more identical blooms.
* Use your \`Mouse\` to click on a flower, then click an adjacent one to swap their positions, or simply click and drag.
* Your objective is to fulfill specific level goals displayed at the top of the screen before you run out of allowed moves.
* Matching exactly four flowers creates a glowing line-clear explosive.
* Matching five flowers in an L or T shape creates a devastating area-of-effect bomb.
* Matching five flowers in a straight row creates a rainbow blossom that obliterates all flowers of a specific color from the board.

## Tips and Tricks
* **Prioritize the Objective:** It is incredibly easy to get distracted by a massive chain of yellow sunflowers, but if your objective is only blue orchids, you are wasting a precious move. Focus laser-like on the goal.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading flowers, often resulting in free, accidental combos as the board settles.
* **Combine the Power-Ups:** The most devastating move in the game is swapping two power-ups with each other. Swapping a line-clear with a bomb creates a massive, cross-shaped explosion that clears half the board instantly.
* **Save the Rainbows:** Do not use the five-in-a-row rainbow blossom immediately. Save it until you desperately need to clear a specific color to meet your objective, or wait to combine it with another power-up.
* **Analyze the Chokepoints:** Pay close attention to the shape of the board. Some levels have narrow columns, ice blocks, or chains where flowers can get stuck. Focus on breaking those barriers first.`
  },
  {
    title: "Gate Solitaire",
    seoContent: `![Gate Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/gatesolitaire800450.webp)

Gate Solitaire is a brilliantly complex, highly structured variant of the classic card-sorting genre that significantly raises the strategic ceiling compared to standard Klondike. Moving away from the simple seven-column tableau, this game introduces strict "Gate" mechanics—specifically designated reserve piles that dictate exactly how and when cards can enter the main playing field. The atmosphere is deeply calculating and immensely satisfying, requiring players to possess a masterful understanding of card sequencing and suit management. The visual presentation is highly polished, utilizing crisp, classic playing card graphics set against a traditional green felt backdrop, ensuring perfect readability even during complex maneuvers. The genius of Gate Solitaire lies entirely in its demanding ruleset; a single misplaced card in the early game can completely lock the board hours later. It is an uncompromising test of logic and patience, perfect for veteran card players looking for a vastly more challenging and rewarding solitaire experience.

## How to Play
* The primary objective is to move all 52 cards into the four foundation piles at the top right, building upward in suit from Ace to King.
* The main tableau consists of columns where cards must be built downward in alternating colors (e.g., a Red 8 can only be placed on a Black 9).
* Use your \`Mouse\` to click and drag cards between columns. You can move entire sequences of correctly stacked cards.
* The "Gates" (reserve piles) at the top hold specific cards that can ONLY be played onto the tableau or foundations; you cannot place cards *into* the Gates.
* Use the stock pile at the bottom to draw new cards when you run out of valid moves on the main board.

## Tips and Tricks
* **Empty Columns are Gold:** An empty column in the tableau is your most powerful tool. It is the only place you can legally place a King to start a new, massive sequence. Do everything in your power to clear a column.
* **Watch the Gates:** The cards trapped in the upper reserve piles are often the key to winning the game. Constantly scan the tableau to see if you can build a sequence that allows a trapped Gate card to drop down.
* **Don't Rush to the Foundations:** Just because you *can* move a card to the foundation doesn't mean you *should*. Sometimes keeping a Black 5 on the tableau is necessary to hold a Red 4 that you desperately need for a sequence.
* **Build Evenly:** Try to build your four foundation piles at roughly the same pace. If you push the Spades all the way up to Jack while the Hearts are still on 2, you will severely limit your options on the alternating-color tableau.
* **Think Three Moves Ahead:** Gate Solitaire heavily punishes impulsive moves. Before dragging a card, mentally trace the resulting board state. Does this move actually free up a buried card, or does it just shuffle things around?`
  },
  {
    title: "Magic Tiles",
    seoContent: `![Magic Tiles](https://www.htmlgames.com/uploaded/game/thumb800/magictiles800450.webp)

Magic Tiles introduces a wildly addictive, highly structured mechanical twist to the classic Mahjong matching formula, completely changing how you interact with overlapping puzzle layers. Instead of instantly matching and removing pairs on the board, you must physically extract tiles and place them into a limited, seven-slot holding tray at the bottom of the screen. The atmosphere is deeply intense and demands meticulous forward planning; the puzzle isn't just about finding matching mystical symbols, it's about managing the incredibly tight inventory space of your spell tray. If your tray fills up before a match of three is completed, it's an instant game over. The visual style is exceptionally clean and readable, utilizing crisp, high-definition tiles featuring vibrant magical runes that are easy to distinguish even when stacked several layers deep. The genius of Magic Tiles lies in its fusion of traditional solitaire mapping with modern, high-stakes inventory management, creating an experience that is far more demanding than standard matching games.

## How to Play
* The objective is to completely clear the multi-layered stack of magical tiles from the main board.
* Use your \`Left Mouse Button\` to click any fully exposed (unblocked) tile on the board to move it down into your holding tray.
* Your holding tray can only hold a maximum of seven tiles at any given time.
* When three identical magical tiles are gathered in your tray, they will instantly merge and be removed, freeing up three crucial inventory slots.
* The game is immediately over if your seven-slot tray becomes completely full without forming a match of three.

## Tips and Tricks
* **Never Blindly Click:** The most common mistake is clicking every free tile you see. Before clicking a tile, you must mentally confirm where the other two identical tiles are located in the stack.
* **Manage Your Tray Space:** Treat your seven tray slots like pure gold. Never have more than four "unmatched" singleton tiles sitting in your tray at once. Always leave room to dig for matches.
* **Dig Deep:** Sometimes you need a specific tile that is buried under three other tiles. It is acceptable to temporarily fill your tray with those blocking tiles, *provided* that reaching the buried tile instantly triggers a match-three clear.
* **Peel the Edges:** Tiles on the absolute outer edges of the stack are generally safer to pull, as they rarely block critical pathways in the dense center.
* **Watch the Layers:** Pay close attention to the shadowing on the tiles to understand how many layers deep a specific item is buried before committing your tray space to it.`
  },
  {
    title: "Daily Number Sums",
    seoContent: `![Daily Number Sums](https://www.htmlgames.com/uploaded/game/thumb800/daily-number-sums-800x450.webp)

Daily Number Sums delivers an absolute masterclass in minimalist, math-driven logic puzzles, stripping away all unnecessary arcade mechanics to provide a pure, deeply cerebral daily challenge. Acting as a brilliant fusion of Sudoku and Kakuro, the game presents players with a grid filled entirely with numbers. The objective is elegant yet fiercely demanding: you must systematically delete specific numbers from the grid so that the remaining, un-deleted numbers in every single row and column add up perfectly to the target sums displayed on the edges of the board. The atmosphere is intensely intellectual; there is no narrative, no flashy explosions, and absolutely no luck involved. It is a pure test of your ability to process numerical permutations and execute complex logical deductions through the process of elimination. The visual presentation is highly appealing in its absolute austerity, utilizing a stark, clean grid that ensures the puzzle mechanics remain perfectly readable and distraction-free. It is the ultimate brain-training routine for hardcore math purists.

## How to Play
* The primary objective is to select and keep the correct numbers in the grid so that each row and column equals the target sum shown on the outside edges.
* Use your \`Left Mouse Button\` to click a number to highlight it (indicating you want to keep it).
* Use your \`Right Mouse Button\` (or secondary click) to click a number and grey it out (indicating you want to delete/exclude it from the sum).
* The puzzle is successfully completed only when the sum of the highlighted numbers in every row and column perfectly matches the target clues.

## Tips and Tricks
* **The "Too Big" Rule:** This is your most powerful weapon. Look at a row where the target sum is 15. If there is an "8" and a "9" in that row, they obviously cannot both be kept, because 8+9=17. Use basic addition to instantly eliminate massive numbers that exceed the target.
* **The "Must Keep" Rule:** If a row's target sum is 20, and the sum of EVERY SINGLE NUMBER in that row is 21, you know for an absolute mathematical fact that you MUST delete a "1" and keep everything else. 
* **Find the Zeroes:** If a row or column has a target sum of "0", this is a massive freebie! Instantly grey out every single number in that entire line.
* **Cross-Reference Constantly:** If you grey out a number to fix a horizontal row, you just drastically altered the vertical column that number belonged to. Constantly check the intersecting lines to see how your move affected them.
* **Never Guess:** This game is 100% pure logic. If you are guessing, you will ruin the grid. If you are stuck, stop and recalculate the maximum possible sums of the remaining numbers.`
  },
  {
    title: "Tower of Hanoi Sort",
    seoContent: `![Tower of Hanoi Sort](https://www.htmlgames.com/uploaded/game/thumb800/towerofhanoisort800450.webp)

Tower of Hanoi Sort violently upgrades one of the oldest, most mathematically profound physical puzzles in human history (The Tower of Hanoi) by infusing it with modern, color-sorting mechanics and complex numerical hierarchies. Moving far beyond simply moving discs from one peg to another, this title demands that players actively sort chaotic stacks of colored blocks while strictly adhering to rigorous numerical placement rules. The atmosphere is deeply calculating and immensely satisfying, requiring players to possess a masterful understanding of spatial sequencing and algorithmic movement. You are tasked with analyzing multiple crowded towers, meticulously shuffling pieces between them to organize them perfectly by color and ascending number. The visual presentation is highly polished, utilizing crisp, brightly colored 3D segments that are easily readable even when stacked deep. The genius of Tower of Hanoi Sort lies entirely in its demanding ruleset; a single misplaced block in the early game can completely lock the entire board. It is an uncompromising test of logic and patience.

## How to Play
* The primary objective is to sort the chaotic, mixed segments so that each vertical tower contains only one specific color, stacked in ascending numerical order.
* Use your \`Mouse\` to click the top-most segment of a tower to pick it up.
* Click an empty space or the top of another tower to drop the segment.
* **The Golden Rules:** You can ONLY drop a segment onto an empty space, OR directly on top of a segment of the EXACT same color.
* Furthermore, you can ONLY drop a segment onto a matching color if the number you are holding is HIGHER than the number you are dropping it onto (e.g., drop a Blue 5 onto a Blue 4).
* The level is successfully completed when all colors are perfectly sorted into their own towers.

## Tips and Tricks
* **Empty Columns are Gold:** An entirely empty tower is your most powerful tool. It is the only place you can legally place a massive base number (like a 1) to start a new, clean stack. Do everything in your power to clear a column quickly.
* **Work Backwards:** The bottom of a completed tower MUST be a 1, followed by a 2, etc. Scan the board for the 1s and figure out how to unearth them and get them to the bottom of a stack immediately.
* **Don't Bury the Low Numbers:** If you drop a Red 5 on top of a Red 2, you have essentially permanently trapped that Red 2 until you can find another place to move the 5. Always try to build upward sequentially.
* **Use the "Undo" Button (If Available):** This game heavily punishes impulsive moves. If you make a move that immediately locks the board, undo it and try the alternate path.
* **Think Algorithmic:** The classic Tower of Hanoi requires a specific, repeating pattern of moves to solve. Try to recognize the repeating shuffle patterns required to move a block from tower A to tower C without trapping it in tower B.`
  },
  {
    title: "Guardian Lighthouse - Hidden Secrets",
    seoContent: `![Guardian Lighthouse - Hidden Secrets](https://www.htmlgames.com/uploaded/game/thumb800/guardianlighthousehiddensecrets800450.webp)

Guardian Lighthouse - Hidden Secrets is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and slightly mysterious core. Forget convoluted detective storylines or unnecessary mini-games; this title is a pure, unadulterated shot of visual immersion focused entirely on acute observation and spatial awareness. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing the ancient, windswept architecture of a remote coastal lighthouse, tasked with locating a specific list of cleverly concealed nautical artifacts. The atmosphere is intoxicatingly rich, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, maritime equipment, and complex geometry. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy corner, coiled rope, and weathered brick is rendered with breathtaking clarity. The sensation of discovery is incredibly well-executed, making every successfully located item feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of the lighthouse interior or exterior.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden objects before the strict time limit expires to advance to the next floor of the lighthouse.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the base of the staircase) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A brass telescope might be tinted blue to blend into the ocean window.
* **Check the Shadows:** The developers love hiding dark objects inside the shadows of barrels, underneath floorboards, or inside extinguished lanterns. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a compass, you will accidentally spot the hidden anchor.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
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
