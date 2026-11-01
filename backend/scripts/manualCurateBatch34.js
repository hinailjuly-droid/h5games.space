const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Sensei Mahjongg",
    seoContent: `![Sensei Mahjongg](https://www.htmlgames.com/uploaded/game/thumb800/senseimahjongg800450.webp)

Sensei Mahjongg delivers the absolute purest, most unadulterated distillation of the legendary Chinese tile-matching puzzle, completely stripping away the bloated, over-stylized themes of modern adaptations to present the genre exactly as it was meant to be played. Set against a clean, visually uncluttered green felt background—a loving homage to classic physical parlor games—players are presented with the iconic "Turtle" formation (and other traditional layouts) consisting of beautifully rendered, authentic ivory-colored tiles. Your objective is elegantly simple yet brutally difficult in execution: you must meticulously dismantle the massive, overlapping pyramid by finding and matching identical pairs of tiles. The atmosphere is deeply relaxing and incredibly focused, trading the tense ticking clocks of arcade games for a soothing, meditative puzzle environment. The visual presentation is highly functional, utilizing crisp, high-contrast traditional symbols (Bamboos, Characters, Circles, Winds, and Dragons) that ensure perfect readability even when the massive stone structure is heavily congested. It is the ultimate, timeless brain-training routine for puzzle purists.

## How to Play
* Your primary objective is to clear all tiles from the board by matching them in identical pairs.
* Use your \`Left Mouse Button\` to click on a "free" tile to select it.
* Click on a matching "free" tile to instantly eliminate both from the board.
* **The Golden Rule of Freedom:** A tile is strictly considered "free" (and therefore clickable) ONLY if it has absolutely no other tile resting on top of it, AND it is completely unblocked on at least one of its immediate left or right vertical sides.
* If a tile is wedged tightly between two other tiles horizontally, it cannot be selected.
* The game is won when the board is completely clear. The game is lost (deadlocked) if no valid matches remain on the board.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your absolute highest priority on breaking down the tallest, thickest stacks of tiles in the dead center of the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board offers vastly more horizontal matching options and reveals more hidden tiles simultaneously.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach Bamboo tiles on the very outer edge of the board, ignore them! Save them. You might desperately need those outer tiles later to match a Bamboo tile buried deep in the center tower.
* **Understand the Exceptions:** Remember the classic rules: any Season tile (Spring, Summer, Autumn, Winter) can match with any other Season tile. Any Flower tile (Plum, Orchid, Chrysanthemum, Bamboo) can match with any other Flower tile. They do not have to be visually identical.
* **Use the Undo Button:** If you make a match and it immediately deadlocks the board, use the undo button to reverse it. Always scout the board to see if a specific tile has three visible copies; if it does, match the two that unblock the most hidden tiles.`
  },
  {
    title: "Bubble Billiards",
    seoContent: `![Bubble Billiards](https://www.htmlgames.com/uploaded/game/thumb800/bubblebilliards800450.webp)

Bubble Billiards injects a massive dose of pub-game aesthetics into the legendary arcade-shooter formula, completely replacing the standard, abstract neon spheres with beautifully rendered, hyper-realistic pool balls (solids, stripes, and the 8-ball). Set against a rich, green felt background resembling a high-end billiard table, players are tasked with managing a massive, slowly descending canopy of numbered balls. You control a launcher at the bottom of the screen. Your objective is intensely focused: fire specific pool balls directly into the canopy, strategically grouping identical numbers and colors to trigger massive, gravity-driven structural collapses before the weight of the balls crushes your launcher. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core shooting mechanic and the incredibly satisfying "clack" sound effect of colliding billiard balls. The visual presentation is highly polished, utilizing crisp 3D sprites with realistic reflections. Bubble Billiards is a pure, uncompromising test of geometric calculation, bank shots, and reflex aiming.

## How to Play
* The primary objective is to clear the entire screen of billiard balls before the ceiling physically lowers and crushes your launcher.
* You control a launcher at the bottom of the screen holding a specifically colored/numbered pool ball.
* Use your \`Mouse\` to aim the trajectory line.
* Click the \`Left Mouse Button\` to fire your ball.
* When your fired ball connects with a cluster of two or more balls of the EXACT SAME type (e.g., three solid Red 3s), the entire connected group will pop and disappear.
* If you shoot and fail to make a match a certain number of times, the entire canopy will shift downward by one row.

## Tips and Tricks
* **Master the Bank Shot:** You cannot always shoot straight. You MUST learn to bounce your pool balls off the left and right cushions to ricochet them into tight, otherwise unreachable gaps near the top of the structure.
* **Sever the Root:** Do not just shoot at the lowest hanging balls. Look for the "structural joints"—small clusters holding up massive chunks below them. If you destroy the joint, the entire massive chunk below it falls instantly, granting huge points.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* ball. Knowing what you have in reserve completely dictates where you should place your current shot.
* **Don't Build Walls:** If you have a solid Yellow 1 and no yellow clusters are visible, do not just shoot it directly into the middle of the board. Shoot it off to the extreme left or right edge to keep the center open.
* **Clear High Numbers Completely:** If there are only two striped 10-balls left on the entire board, prioritize eliminating them immediately. Once a ball type is entirely gone, the game will stop generating it in your launcher.`
  },
  {
    title: "Slide Puzzle",
    seoContent: `![Slide Puzzle](https://www.htmlgames.com/uploaded/game/thumb800/slidepuzzle800450.webp)

Slide Puzzle delivers the absolute purest, most fundamentally rigid distillation of the classic "15-puzzle" mechanical toy, stripping away complex physics and chaotic physics in favor of a brutally calculating, perfect-information grid. Players are presented with a high-definition photograph or intricate painting that has been sliced into a grid of perfectly square tiles. However, one single tile has been completely removed from the board, creating an empty space. Furthermore, all the remaining tiles have been wildly scrambled. Your objective is elegantly simple yet intensely frustrating in execution: you must systematically slide the tiles horizontally or vertically into the empty space, rearranging the chaotic jumble until the original, unbroken image is fully restored. The atmosphere is deeply cerebral; there is no timer, no score multiplier, and no random number generation. You are relying entirely on your ability to visualize cascade mathematics and pathing. The visual presentation is highly polished, ensuring the image textures remain perfectly crisp, which is crucial for identifying which piece belongs where.

## How to Play
* The primary objective is to rearrange the scrambled tiles to reconstruct the original image.
* The puzzle consists of a grid (e.g., 4x4 or 5x5) completely filled with tiles, except for one single empty slot.
* Use your \`Mouse\` to click on any tile that is physically adjacent (horizontally or vertically) to the empty space.
* Clicking the tile will instantly slide it into the empty space.
* You cannot lift a tile, and you cannot slide a tile diagonally.
* You must continue sliding tiles one by one until the image is perfect.

## Tips and Tricks
* **Solve Row by Row (The Golden Algorithm):** Do not try to solve the entire board at once. It is mathematically impossible without a system. Your absolute first priority is to place the tiles for the very TOP row in their correct order (e.g., pieces 1, 2, 3, 4). Once the top row is locked in, absolutely ignore it and never touch it again.
* **The "Snake" Technique for the Last Piece in a Row:** Placing pieces 1, 2, and 3 is easy. Placing piece 4 without destroying piece 3 is the core challenge. To do this, you must place piece 4 directly BELOW the top right corner, place piece 3 directly to its left, and then slide them both "up and right" simultaneously into their final locked positions.
* **Solve the Left Column Next:** Once the top row is locked, focus on the far-left column. Lock those pieces in.
* **The Final 2x2 Grid:** By systematically locking rows and columns, you will eventually reduce the massive puzzle down to a tiny 2x2 or 3x3 square in the bottom right corner, which is much easier to brute-force through rotation.
* **Focus on the Edges of the Image:** Don't just look at the overall picture; look at the physical cut of the tile. If a tile has a hard black border, it MUST go on the perimeter of the grid.`
  },
  {
    title: "Prague Hidden Objects",
    seoContent: `![Prague Hidden Objects](https://www.htmlgames.com/uploaded/game/thumb800/praquehiddenobjects800450.webp)

Prague Hidden Objects is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and culturally immersive core. Forget convoluted detective storylines; this title is a pure, unadulterated shot of visual tourism focused entirely on acute observation. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing the iconic, historic landscape of Prague, from the towering gothic spires of the Charles Bridge and the Astronomical Clock to the cobblestone streets lined with vibrant cafes and ancient statues. Your objective is elegantly simple: locate the subtle, thematic items expertly blended into the Czech environment. The atmosphere is intoxicatingly rich and deeply engaging, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, architectural flourishes, and complex urban geometry. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy lantern and carved gargoyle is rendered with breathtaking clarity.

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of the Prague scene.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden objects before the strict time limit expires to advance to the next iconic location.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the base of a gothic statue) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A modern smartphone might be tinted grey to blend perfectly into the stone of the Charles Bridge.
* **Check the Shadows and Highlights:** The developers love hiding dark objects inside the deep shadows of arched doorways, or hiding bright objects directly inside the glare of a stained-glass window. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a pocket watch, you will accidentally spot the hidden umbrella.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Happy Bird",
    seoContent: `![Happy Bird](https://www.htmlgames.com/uploaded/game/thumb800/happybird800450.webp)

Happy Bird strips the endless runner and physics-platforming genres down to their absolute, most viscerally satisfying core, delivering a pure, unadulterated test of split-second reflex timing, spatial anticipation, and momentum control. Moving entirely away from complex combat mechanics or sprawling 3D environments, this title embraces a highly stylized, colorful 2D aesthetic. You are placed in control of a cheerful little bird navigating a dangerous, vertically scrolling (or horizontally weaving) environment. Your objective is intensely focused: you must pilot the bird through narrow gaps in rocks, pipes, or trees to collect glowing items and rack up a massive high score without crashing. The atmosphere is deeply kinetic; gravity is a constant, unrelenting threat, and you must constantly counteract it with perfectly timed flaps. The visual presentation is highly polished, utilizing a vibrant, high-contrast style that ensures the obstacles and the bird's hitbox are perfectly readable against the background. Happy Bird is a pure shot of arcade adrenaline.

## How to Play
* The primary objective is to survive as long as possible by navigating through the obstacles and collecting items.
* Gravity constantly pulls the bird downward toward the ground.
* Click the \`Left Mouse Button\` (or tap the screen) to make the bird flap its wings, causing it to instantly jump upward.
* You must constantly balance the downward pull of gravity with the upward thrust of your flaps to maintain a steady altitude.
* **The Fatal Error:** The game is instantly over if the bird crashes into the ceiling, the floor, or any of the solid obstacles scattered throughout the level.

## Tips and Tricks
* **Find the Rhythm:** Do not panic-click. The bird's physics usually dictate a very specific rhythm. Try to get into a flow state, tapping in a steady "1-2-1-2" beat to maintain a perfectly straight horizontal line, rather than violently bouncing up and down.
* **Aim for the Lower Half of the Gap:** When approaching a narrow gap between two obstacles, it is almost always safer to aim for the lower half of the opening. It is much easier to execute a quick flap to correct a low trajectory than it is to wait for gravity to pull you down from a high trajectory.
* **Ignore the Dangerous Collectibles:** If a glowing star or coin is placed dangerously close to the absolute edge of a spike, DO NOT risk your run to collect it unless you are a master. Prioritize staying alive and passing through the obstacle above all else.
* **Stay Calm During Speed Changes:** In advanced levels, the scrolling speed may increase or fluctuate. Do not tense your hand. Keep your clicking finger relaxed to ensure your timing doesn't become erratic.
* **Watch the Hitbox:** The bird is usually slightly smaller than its visual sprite. Learn exactly which pixels of the bird actually trigger a collision so you can confidently thread the needle through impossibly tight spaces.`
  },
  {
    title: "All Threes Domino",
    seoContent: `![All Threes Domino](https://www.htmlgames.com/uploaded/game/thumb800/allthreesdomino800450.webp)

All Threes Domino delivers an incredibly deep, mathematically rich variation of the legendary tabletop game, fundamentally altering the standard "Block" or "Draw" mechanics by introducing a highly aggressive, active-scoring system. Set against a clean, visually minimalist wooden table aesthetic, players are locked in a relentless, two-on-two (or one-on-one) battle. While the basic rule remains the same—you must connect matching pips (dots) to the open ends of the chain—your objective is entirely different. You are not just trying to empty your hand. You are actively trying to manipulate the board state so that the sum total of all the pips on the exposed, open ends of the domino chain is exactly a multiple of three (3, 6, 9, 12, etc.). If you achieve this, you instantly score those points. The atmosphere is deeply cerebral; it is a pure test of rapid mental arithmetic, probability calculation, and strategic sacrifice. The visual presentation is highly polished, ensuring the pips are perfectly readable. All Threes Domino is the ultimate brain-training routine for mathematical puzzle purists.

## How to Play
* The primary objective is to score points by making the open ends of the domino layout add up to a multiple of 3.
* Each player is dealt a set number of tiles.
* On your turn, use your \`Mouse\` to click and drag a tile from your hand.
* You must connect it to one of the open ends of the domino chain on the table. The numbers MUST match (e.g., a 4 must connect to a 4).
* **The Scoring Rule:** After you place a tile, add up all the pips on the extreme outer ends of the entire chain. If the total is 3, 6, 9, 12, 15, or 18, you instantly score that amount of points.
* (e.g., If one end is a 4, and the other end is a 5, the total is 9. You score 9 points).
* Doubles are usually played crosswise (a spinner) and BOTH ends of the double count toward the total until a tile is played off it.

## Tips and Tricks
* **Do the Math Before You Move:** Never place a tile without calculating the resulting total. If the current board total is 7, and you play a tile that covers a 2 and exposes a 4, the new total will be 9 (7 - 2 + 4). You score!
* **Control the Board Total:** If the board total is currently 4, your opponent cannot possibly score on their next turn if they only have small tiles. However, if the board total is 6, they might easily score 9. Aggressively steer the board total away from multiples of three when you finish your turn.
* **The "Zero" Play:** The blank (zero) tiles are incredibly powerful in All Threes. If the board total is currently 9 (a scoring state), and you play a tile that connects a 5 to a Blank, you remove 5 points from the total and add 0, making the new total 4 (a non-scoring state for your opponent).
* **Hoard the 3s and 6s:** Tiles that inherently total a multiple of 3 (like the 3-0, 3-3, or 6-0) are extremely valuable for maintaining a scoring state or triggering a massive combo.
* **Don't Just Empty Your Hand:** While emptying your hand ("dominoing") gives you points based on your opponent's remaining tiles, the vast majority of points in this game are scored *during* play. It is often worth keeping a tile in your hand if it guarantees a 12-point score on your next turn.`
  },
  {
    title: "Kill the Virus",
    seoContent: `![Kill the Virus](https://www.htmlgames.com/uploaded/game/thumb800/killthevirus800450.webp)

Kill the Virus fundamentally rewrites the rules of the traditional Match-3 genre by abandoning the standard "swap adjacent tiles" mechanic in favor of a highly tactical, row-based shifting system. Set against a microscopic, medical-themed grid, players are presented with a chaotic jumble of brightly colored, menacing virus cells. Your objective is intensely focused: you must physically grab a virus from the absolute front of one horizontal row, and insert it into the front of a different horizontal row. By shifting the viruses between rows, you attempt to align three or more identical viruses in a row or column to eradicate them. The atmosphere is deeply calculating and immensely satisfying; you are essentially managing a complex sliding puzzle while trying to trigger massive cascade reactions to clear the infection. The visual presentation is highly functional, utilizing crisp, distinct, cartoonish virus sprites that ensure the complex pathways remain perfectly readable. Kill the Virus is a pure, unpressured test of sequence planning and logistical foresight.

## How to Play
* The primary objective is to eradicate all the viruses from the grid by matching them in groups of three or more.
* Use your \`Mouse\` to click and hold the \`Left Mouse Button\` on the first virus in any horizontal row.
* Drag your mouse to a completely different horizontal row.
* Release the mouse button to "push" the virus into that row.
* When three or more identical viruses touch horizontally or vertically, they are instantly destroyed.
* The game relies heavily on manipulating the rows to set up massive chain reactions.

## Tips and Tricks
* **Think in Columns, Move in Rows:** While you move the viruses horizontally, the most devastating matches are often created vertically. Push a red virus into Row A, another red virus into Row B, and a final red virus into Row C so they align perfectly in the same column.
* **The "Stacking" Strategy:** Do not just push a virus blindly. If you have a blue virus, look for a row that already has two blue viruses buried deep inside it. Push the blue virus into that row to trigger the match and collapse the row.
* **Calculate the Shift:** When you push a virus into a row, every single virus in that row shifts backward by one space. You must constantly visualize how this shift will affect the vertical alignment of the entire board. Will pushing this green virus accidentally break a yellow vertical column you were building?
* **Clear the Board from the Back:** The viruses at the absolute back of the rows are the hardest to reach. Always prioritize moves that dig deep into the rows to eradicate the buried viruses.
* **Set Up Cascades:** The true skill in this game lies in setting up chain reactions. Push a virus to trigger a horizontal match, knowing that when those viruses disappear, the viruses behind them will slide forward and trigger a secondary vertical match.`
  },
  {
    title: "Hidden Spots - Birds",
    seoContent: `![Hidden Spots - Birds](https://www.htmlgames.com/uploaded/game/thumb800/hiddenspots-birds800450.webp)

Hidden Spots - Birds is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core. Forget convoluted detective storylines or searching for random household items; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within breathtaking wildlife photography. You are placed directly into a series of stunningly detailed, high-definition photographs showcasing incredible species of birds in their natural habitats—from dense tropical rainforests and frozen tundras to sun-drenched savannahs. Your objective is elegantly simple: locate the subtle, minute "spots" or discrepancies expertly blended into the photograph. These are not standard objects, but tiny visual anomalies—a slightly blurred feather, a disguised insect, or a distorted shadow. The atmosphere is deeply relaxing and incredibly focused, demanding complete concentration. Visually, the game relies entirely on photorealism, ensuring that every leaf and branch is rendered with breathtaking clarity. Hidden Spots is the ultimate brain-training routine for acute observation.

## How to Play
* Your objective is to find every single hidden "spot" or anomaly hidden within the main high-definition wildlife photograph.
* Use your \`Mouse\` to carefully scan the high-definition image.
* When you spot a visual discrepancy or hidden area, click directly on it.
* Successfully locating a spot will circle it and update your counter.
* The counter at the top of the screen displays exactly how many spots are left to find in the current level.
* Be precise! Randomly spam-clicking around the screen will often result in a time penalty or a temporary point deduction.

## Tips and Tricks
* **Scan Methodically:** Do not just stare at the whole screen randomly. Mentally divide the image into a tight grid. Meticulously scan the top-left quadrant of the image, analyzing every single leaf, before moving to the top-right.
* **Look for Broken Patterns:** Nature is full of patterns (the grain of wood, the veins of a leaf, the repeating feathers on a wing). The hidden spots are often created by artificially breaking or blurring these natural patterns. Look for areas that seem slightly out of focus or geometrically incorrect.
* **Check the Shadows and Highlights:** The developers love hiding spots inside the deep black shadows beneath the bird, or hiding them directly inside the blown-out glare of a bright sky. Adjust your monitor brightness!
* **Step Back:** If you are completely stuck on the final spot, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the hidden anomaly suddenly pop out.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Solitaire Harvest",
    seoContent: `![Solitaire Harvest](https://www.htmlgames.com/uploaded/game/thumb800/solitaireharvest800450.webp)

Solitaire Harvest takes the immensely popular, rapid-fire mechanics of Golf Solitaire (or Tri-Peaks) and applies them to a highly structured, flat-board layout, all wrapped in a charming, relaxing agricultural aesthetic. Moving entirely away from the complex alternating-color rules and deep tableau sorting of standard Klondike, this title deals a massive grid of face-up cards, representing the "crops" you need to harvest. The objective is lightning-fast and sequentially pure: you simply click exposed cards on the field that are exactly one value higher or lower than your current active card at the bottom of the screen. The atmosphere is deeply relaxing yet inherently fast-paced; there is no complex math, just pure pattern recognition and chain-reaction planning. The visual presentation is highly polished, utilizing crisp, traditional playing cards set against a soothing farm background that ensures perfect readability even when the massive field is fully planted. It is the ultimate, timeless relaxation tool for card players who prefer rapid sequencing.

## How to Play
* The primary objective is to clear all the cards from the main playing field (the harvest).
* You have a single face-up "active" card at the bottom of the screen next to your draw pile.
* Use your \`Left Mouse Button\` to click any fully exposed card on the field that is exactly ONE value higher or ONE value lower than your active card.
* **Examples:** If your active card is an 8, you can click a 7 or a 9. Suit and color do not matter at all.
* **The Ace Loop (Usually):** Kings connect to Aces, and Aces connect to 2s. (e.g., King -> Ace -> 2 -> 3). Check the specific game rules to confirm if wrapping is allowed.
* If you have no valid moves on the board, click the face-down draw pile to reveal a new active card.

## Tips and Tricks
* **Plan Your Chains (Look Ahead):** Do not just click the first valid card you see. Look at the board and map out a massive combo chain. If your active card is a 5, and the board has a 6, 7, 8, 7, 6... you can clear all five of those cards in one continuous sweep without drawing.
* **Prioritize the Blockers:** If you have a choice between playing a 7 that is sitting alone, or a different 7 that is physically blocking three other cards below it, ALWAYS choose the one that unlocks more cards.
* **Dig Evenly:** Try to harvest the field at roughly the same pace. If you completely clear the left side while the right side is untouched, you severely limit your options later in the game when you need specific numbers.
* **Save Your Draw Cards:** Exhaust absolutely every single possible sequence on the main board before you click the draw pile. Your draw pile is your lifeline; wasting it early is a guaranteed loss.
* **Use the Jokers (If Available):** Many Golf Solitaire variations include wildcards (Jokers). Save these for absolute emergencies when a massive, game-winning chain is blocked by a single missing number.`
  },
  {
    title: "Daily Hitori",
    seoContent: `![Daily Hitori](https://www.htmlgames.com/uploaded/game/thumb800/daily-hitori-800x450.webp)

Daily Hitori strips the spatial puzzle genre down to its absolute, most mathematically pure and elegantly simple core, delivering a digital adaptation of a deeply complex Japanese logic puzzle that acts as the ultimate inverse to Sudoku. Set against a clean, visually minimalist grid completely filled with numbers, players are not tasked with adding numbers, but rather systematically eliminating them. Your objective is intensely focused: you must deduce which cells to paint black (eliminate) based on three brutal, unyielding rules. First, no number can appear more than once in any given row or column. Second, black cells cannot touch each other horizontally or vertically. Third, all remaining white (active) cells must form a single, continuous connected area. The atmosphere is deeply cerebral and intentionally demanding, requiring an intense level of forward-thinking and logical deduction, offering a fresh puzzle every single day. Daily Hitori is the ultimate brain-training routine for hardcore logic puzzle fans who demand pure mathematical rigor.

## How to Play
* The primary objective is to paint cells black so that no row or column contains duplicate numbers.
* The board starts completely filled with numbers.
* Use your \`Left Mouse Button\` to click a cell to paint it black (eliminating it). Click it again to mark it with a circle (definitively keeping it white/active).
* **Rule 1 (No Duplicates):** No unpainted (white) number can appear more than once in a single row or column.
* **Rule 2 (No Touching Black Cells):** Two black cells CANNOT be adjacent horizontally or vertically (diagonals are fine).
* **Rule 3 (Continuous White Area):** All white cells MUST be connected to each other horizontally or vertically. You cannot isolate a white cell or a group of white cells from the rest of the board.

## Tips and Tricks
* **The "Sandwich" Deduction:** If you see a sequence like "5 - 2 - 5" in a row, the middle "2" MUST be white. Why? Because if the "2" were black, both "5"s would have to be white (to satisfy the No Duplicates rule), but they would then be separated by a black cell, which might violate the No Touching rule depending on the rest of the board. More definitively, if a number is sandwiched between two identical numbers, the sandwiched number is always white.
* **The "Double-Double" Deduction:** If a row contains two pairs of identical numbers (e.g., two 4s and two 7s), and they are adjacent (4-4 or 7-7), one of each pair MUST be black. Because black cells cannot touch, the cells immediately adjacent to a pair (the cell to the left of the 4-4, and the right of the 4-4) MUST be white.
* **Circle the Forced Whites:** The moment you paint a cell black, you know for a mathematical fact that the four cells directly touching it (up, down, left, right) MUST be white. Mark them with circles immediately.
* **The Corner Isolation Trap:** Pay extreme attention to the corners. If you paint a cell black near a corner, ensure you are not trapping a white cell perfectly in the corner, isolating it from the rest of the board (violating Rule 3).
* **Process of Elimination:** This is not a guessing game. Every single black cell is forced by logic. If you are stuck, systematically re-evaluate every single row and column for duplicate numbers.`
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
