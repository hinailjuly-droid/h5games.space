const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Paganini Solitaire",
    seoContent: `![Paganini Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/paganinisolitaire800450.webp)

Paganini Solitaire fundamentally rewrites the rules of the massively popular card-sorting genre (specifically Montana or Gaps) by entirely abandoning the complex, overlapping tableau columns of Klondike in favor of a flat, highly tactical grid-based logic puzzle with a very specific musical twist. Set against a clean, visually uncluttered aesthetic, all 52 cards of a standard deck are dealt face-up into four massive horizontal rows, creating four distinct "gaps" or empty spaces. Your objective is elegantly simple yet brutally difficult in execution: you must physically slide cards into the empty gaps to reconstruct the four suits. However, unlike standard Montana, the sequence rule is completely unique: the sequence goes Ace, 6, 7, 8, 9, 10, Jack, Queen, King (the 2, 3, 4, and 5 are completely removed or bypassed). The atmosphere is deeply calculating and immensely satisfying; you are essentially managing a massive game of musical chairs with playing cards. The visual presentation is highly polished, utilizing crisp, custom-designed playing cards that ensure perfect readability. Paganini Solitaire is a pure, unpressured test of sequence planning and bottleneck management.

## How to Play
* The primary objective is to arrange all four suits in perfect numerical order across the four horizontal rows.
* **The Unique Sequence:** The required order from left to right is: Ace -> 6 -> 7 -> 8 -> 9 -> 10 -> Jack -> Queen -> King.
* At the start of the game, the four Aces are usually automatically moved to the far left of each row, leaving four empty "gaps" scattered throughout the grid.
* Use your \`Mouse\` to click a card and move it into an empty gap.
* **The Golden Rule:** You can ONLY move a card into an empty gap if it is the EXACT SAME SUIT and the NEXT CARD IN SEQUENCE to the card sitting immediately to the left of the gap.
* (e.g., If the card to the left of the gap is the Ace of Hearts, you can ONLY move the 6 of Hearts into that gap).
* If you get stuck, you usually have three "reshuffles" that will randomly scramble all cards that are not yet correctly sequenced.

## Tips and Tricks
* **Work Backwards from the Gaps:** Do not look at the cards; look at the empty spaces. If you have a gap next to a 7 of Spades, find the 8 of Spades immediately. This is the only valid move for that space.
* **Beware the Dead Gaps:** The absolute most common way to lose this game is to create gaps directly to the right of Kings. If all four gaps end up trapped behind Kings, the board is deadlocked and you must reshuffle.
* **Prioritize the Left Side:** Your ultimate goal is to build long, unbroken chains starting from the Aces on the far left. Focus heavily on placing the 6s, 7s, and 8s early. A correctly placed card on the far right of the board is useless if the chain is broken in the middle.
* **Calculate the Cascade:** Moving the 9 of Hearts into a gap will naturally create a NEW gap where the 9 of Hearts used to be. Before you move it, look at what card is to the left of its *original* position. Are you creating a useful gap or a dead gap?
* **Use Reshuffles Sparingly:** Never use a reshuffle unless the board is mathematically deadlocked. Exhaust absolutely every possible move first.`
  },
  {
    title: "Jewel Classic",
    seoContent: `![Jewel Classic](https://www.htmlgames.com/uploaded/game/thumb800/jewelclassic800450.webp)

Jewel Classic delivers the absolute purest, most unadulterated distillation of the legendary tile-swapping puzzle formula, completely stripping away the bloated narratives, unnecessary mini-games, and complex meta-progression that plague modern iterations of the genre. This is the genre exactly as it was meant to be played: a massive grid filled with brightly colored, hyper-realistic gemstones—diamonds, rubies, sapphires, and emeralds. Your objective is intensely focused: manually swap adjacent gems to form horizontal or vertical lines of three or more, triggering satisfying cascade reactions to reach a specific target score or clear a certain number of background tiles. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of pattern recognition and explosive combos. The visual presentation is highly polished, utilizing crisp, high-definition sprites that crackle with magical energy, screen-shaking explosions, and flashy particle effects when massive combos are triggered. Jewel Classic is a pure, uncompromising test of spatial logic and cascade optimization.

## How to Play
* The core mechanic revolves around swapping adjacent jewels to create horizontal or vertical lines of three or more identical gems.
* Use your \`Mouse\` to click on a jewel, then click an adjacent one to swap their positions, or simply click and drag.
* Swaps are only permitted if they immediately result in a valid match of three or more.
* Your objective is to fulfill specific collection goals or score targets displayed at the top of the screen before you run out of allowed moves or time.
* Matching exactly four jewels creates a glowing, line-clearing explosive gem.
* Matching five jewels in an L or T shape creates a devastating area-of-effect bomb.
* Matching five jewels in a straight row creates a hyper-cube that obliterates all jewels of a specific color from the board.

## Tips and Tricks
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading jewels dropping from the ceiling, often resulting in massive, free combo points that require zero effort on your part.
* **Combine the Power-Ups:** The most devastating move in the game is swapping two power-ups with each other. Swapping a line-clear gem with a bomb creates a massive, cross-shaped explosion that clears half the board instantly, scoring massive points and triggering huge cascades.
* **Target the Objectives, Not Just the Combos:** If your goal is to break frozen ice blocks, a massive 5-gem match on the other side of the board is visually satisfying but strategically useless. Focus your moves on the specific areas that need clearing.
* **Set Up the Hyper-Cube:** When you see the potential for a 5-in-a-row match, do everything in your power to execute it. The color-clearing hyper-cube is the single most powerful tool for manipulating the board state.
* **Don't Rush (If Untimed):** If you are playing a mode with a move limit rather than a timer, take your time. Analyze the board for two minutes if necessary to find the single move that will trigger the longest chain reaction.`
  },
  {
    title: "Fruit Bubble",
    seoContent: `![Fruit Bubble](https://www.htmlgames.com/uploaded/game/thumb800/fruitbubble800450.webp)

Fruit Bubble injects a massive dose of vibrant, tropical energy into the legendary arcade-shooter formula, completely replacing the standard, sterile aesthetic of solid-colored spheres with beautifully illustrated, high-definition fruits—strawberries, oranges, grapes, and watermelons. Set against a lush, sun-drenched orchard background, players are tasked with managing a massive, slowly descending canopy of fruit. You control a cannon at the bottom of the screen. Your objective is intensely focused: fire specific fruits directly into the canopy, strategically grouping identical fruits to trigger massive, gravity-driven structural collapses before the weight of the harvest crushes your launcher. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core shooting mechanic and the juicy "pop" sound effects. The visual presentation is highly polished, utilizing crisp sprites that burst with color when matched. Fruit Bubble is a pure, uncompromising test of geometric calculation and reflex aiming wrapped in a delightful aesthetic.

## How to Play
* The primary objective is to clear the entire screen of fruit before the canopy physically lowers and crushes your cannon.
* You control a cannon at the bottom of the screen holding a specifically colored fruit.
* Use your \`Mouse\` to aim the trajectory line.
* Click the \`Left Mouse Button\` to fire your fruit.
* When your fired fruit connects with a cluster of two or more fruits of the EXACT SAME type, the entire connected group will pop and disappear.
* If you shoot and fail to make a match a certain number of times, the entire canopy will shift downward by one row.

## Tips and Tricks
* **Master the Bank Shot:** You cannot always shoot straight. You MUST learn to bounce your fruits off the left and right walls to ricochet them into tight, otherwise unreachable gaps near the top of the structure.
* **Sever the Root:** Do not just shoot at the lowest hanging fruits. Look for the "structural joints"—small clusters of fruit holding up massive, mixed-fruit chunks below them. If you destroy the joint, the entire massive chunk below it falls instantly, granting huge points.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* fruit type. Knowing what you have in reserve completely dictates where you should place your current shot.
* **Don't Build Walls:** If you have a strawberry and no strawberry clusters are visible, do not just shoot it directly into the middle of the board, blocking other fruits. Shoot it off to the extreme left or right edge to keep the center open.
* **Clear High Fruits Completely:** If there are only two oranges left on the entire board, prioritize eliminating them immediately. Once a fruit type is entirely gone, the game will stop generating it in your cannon, drastically increasing your odds of getting the fruits you actually need.`
  },
  {
    title: "Squirrel Connection",
    seoContent: `![Squirrel Connection](https://www.htmlgames.com/uploaded/game/thumb800/squirrelconnection800450.webp)

Squirrel Connection fundamentally rewrites the rules of the traditional spatial logic puzzle (like Sudoku or Picross) by abandoning number crunching in favor of a highly visual, geometric pattern-matching system wrapped in a cute, autumnal forest aesthetic. Set against a clean, visually minimalist grid, players are presented with a large play area filled with various forest-themed tiles (acorns, leaves, mushrooms). On the side of the screen is a smaller "Target Pattern" showing a specific arrangement of those tiles. Your objective is intensely focused: you must physically draw a continuous, snaking line through the main grid, connecting adjacent tiles so that the sequence of tiles you collect *perfectly matches* the target pattern. The atmosphere is deeply cerebral and immensely satisfying; you are essentially hunting for a specific visual signature hidden within a chaotic matrix. The visual presentation is highly functional, utilizing crisp, distinct icons that ensure the patterns remain perfectly readable. Squirrel Connection is a pure, unpressured test of sequence planning and visual parsing.

## How to Play
* The primary objective is to find and trace the specific "Target Pattern" hidden within the main grid.
* Look at the target pattern on the side of the screen (e.g., Acorn -> Leaf -> Mushroom -> Acorn).
* Use your \`Mouse\` to click and hold the \`Left Mouse Button\` on the first tile in the sequence (the Acorn).
* Drag your mouse to an adjacent tile (up, down, left, right, or diagonal) that matches the second tile in the sequence (the Leaf).
* Continue drawing the continuous line until you have perfectly traced the entire target sequence.
* Release the mouse button to submit the pattern. If it matches, those tiles are removed, and a new target pattern is generated.

## Tips and Tricks
* **Locate the Rarest Tile:** Do not just start scanning from the first tile in the target sequence. Look at the entire sequence and identify the rarest tile (e.g., if there are 20 acorns on the board but only 3 mushrooms, and the sequence contains a mushroom, start your search by looking at the 3 mushrooms).
* **The "Wrap-Around" Search:** The required pattern does not have to be a straight line. It can snake, twist, and turn back around itself. Always check if a pattern can turn a sharp corner to pick up the necessary tiles.
* **Work Backwards Mentally:** If the target sequence is long and complex, sometimes it is easier to find the *last* tile in the sequence on the board and trace the pattern backward to the start.
* **Look for "Dead Ends":** If you find an Acorn next to a Leaf, but the Leaf is completely surrounded by wrong tiles, you know instantly that this specific pairing is a dead end. Move on to a different section of the board.
* **Don't Let the Grid Overwhelm You:** If the board is massively cluttered, physically lean back from your monitor or blur your eyes slightly to focus on the macro-composition rather than individual tiles.`
  },
  {
    title: "London Hidden Objects",
    seoContent: `![London Hidden Objects](https://www.htmlgames.com/uploaded/game/thumb800/londonhiddenobjects800450.webp)

London Hidden Objects is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and culturally immersive core. Forget convoluted detective storylines; this title is a pure, unadulterated shot of visual tourism focused entirely on acute observation. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing the iconic, historic landscape of London, from the towering gothic architecture of Big Ben and Westminster Abbey to the foggy, gas-lit streets of Victorian alleyways and vibrant red double-decker buses. Your objective is elegantly simple: locate the subtle, thematic items expertly blended into the British environment. The atmosphere is intoxicatingly rich and deeply engaging, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, cobblestones, and complex urban geometry. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy umbrella and glowing streetlamp is rendered with breathtaking clarity.

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of the London scene.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden objects before the strict time limit expires to advance to the next iconic location.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the base of a telephone box) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A modern teacup might be tinted grey to blend perfectly into a stone wall.
* **Check the Shadows and Highlights:** The developers love hiding dark objects inside the deep shadows of arched doorways, or hiding bright objects directly inside the glare of a massive clock face. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a magnifying glass, you will accidentally spot the hidden bowler hat.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Endless Dimensions",
    seoContent: `![Endless Dimensions](https://www.htmlgames.com/uploaded/game/thumb800/endless-dimensions-800x450.webp)

Endless Dimensions completely shatters the rules of traditional pathfinding puzzles (like Mahjong Solitaire) by ripping the 2D grid off the screen and forcing players to navigate a massive, fully rotatable 3D geometric cluster. However, the true genius of this specific variant is the "Endless" mechanic: as you match and remove cubes from the floating monolith, new layers of cubes continuously generate and attach themselves to the structure. You are not just trying to clear a finite board; you are desperately fighting to keep the continuously growing structure from becoming too massive and unmanageable. Your objective is to find matching pairs, but the connections rely on 3D spatial awareness rather than simple top-down unblocking. The atmosphere is deeply calculating and intensely stressful; you must constantly spin the board to verify which blocks are truly "free" on their sides while racing against the growing mass. The visual presentation is exceptionally polished, utilizing crisp, glowing neon graphics that ensure the puzzle remains perfectly readable even when rotating rapidly. Endless Dimensions is a brilliant, uncompromising evolution of the matching genre.

## How to Play
* The primary objective is to survive as long as possible by matching identical cubes before the structure grows too large or the timer expires.
* Use your \`Mouse\` (or arrow keys) to physically rotate the entire 3D puzzle cluster 360 degrees in any direction.
* Click an exposed cube to select it, then click a matching cube to instantly eliminate both.
* **The 3D Golden Rule:** A cube is strictly considered "free" and clickable ONLY if it has at least TWO of its adjacent sides completely exposed to empty air. (Top and bottom usually do not count; focus on the four vertical sides).
* As you play, new cubes will periodically spawn and attach to the main structure.

## Tips and Tricks
* **Rotate Constantly:** You cannot solve this puzzle by staring at one side. You must constantly spin the structure after every single move to see if your removal unblocked a new cube on the opposite side of the cluster.
* **Manage the Growth (Pruning):** Because the structure constantly grows, your priority is no longer just finding matches, but finding matches that keep the core of the structure tight and manageable. Aggressively prune the long, unwieldy "arms" that grow outward.
* **Clear the Protruding Corners:** Cubes sticking out of the sharpest corners of the 3D structure are the easiest to connect, because they naturally have three or four sides exposed to empty air. Clear the sharp edges instantly.
* **Don't Tunnel Vision:** If you can't find a match for a specific cube, stop looking at it. Spin the board 180 degrees and look for an obvious, free match on the back to keep the timer from running down.
* **Use the Reshuffle (If Available):** If the board has grown into a massive, tangled mess and you are completely lost, use the shuffle button to scramble the remaining cubes. It often reveals obvious matches that were previously hidden inside.`
  },
  {
    title: "Rotris",
    seoContent: `![Rotris](https://www.htmlgames.com/uploaded/game/thumb800/rotris800450.webp)

Rotris delivers a mind-bending, highly demanding evolution of the legendary, gravity-driven block-falling arcade formula (Tetris), fundamentally rewriting the rules of line clearing by introducing a complex spatial mechanic based on solid squares rather than horizontal lines. Set against a clean, visually minimalist grid, players are tasked with managing a relentless downpour of complex geometric shapes. As the pieces descend, you must actively steer and rotate them, dropping them into the accumulating stack. However, in Rotris, completing a horizontal line across the board does absolutely nothing. Your objective is brutally difficult in execution: you must perfectly interlock the shapes to form solid, unbroken blocks of at least 3x3 squares (or larger). When a massive 3x3 block is completed, it instantly vanishes, freeing up crucial space. The atmosphere is deeply kinetic and incredibly stressful; you aren't just trying to keep the board flat, you are actively building massive, dense cubes. Rotris is a pure, uncompromising test of reflex timing, spatial logic, and radical architectural planning.

## How to Play
* The primary objective is to survive as long as possible by clearing 3x3 (or larger) solid blocks before the stack reaches the top of the screen.
* Tetrominoes will fall from the top of the screen one at a time.
* Use the \`Left Arrow\` and \`Right Arrow\` keys to steer the falling block horizontally across the columns.
* Use the \`Up Arrow\` key to instantly rotate the falling block 90 degrees.
* Use the \`Down Arrow\` key to accelerate the block's fall speed (Soft Drop).
* Press the \`Spacebar\` to instantly slam the block straight to the bottom of the stack (Hard Drop).
* **The Clearing Rule:** You MUST build a perfectly solid, completely filled square of at least 3x3 blocks. When achieved, that massive 3x3 block disappears.

## Tips and Tricks
* **Abandon the "Flat Board" Strategy:** Playing this like standard Tetris will result in instant failure. A perfectly flat, 2-line high board is useless here. You must actively build vertically, constructing dense, concentrated pillars of blocks to eventually cap them off into 3x3 squares.
* **Plan for the 3x3 Grid:** Mentally divide your screen into 3x3 zones. When you place a piece, you are not just placing it on the floor; you are placing it into a specific "zone" that you intend to fill completely.
* **The "U" Shape Trap:** The most common mistake is building a 3x3 square but leaving a hole right in the bottom middle. Once that piece is buried under the outer walls of the square, it is nearly impossible to fill. Fill the center first, then build the walls around it.
* **Use the Hard Drop Strategically:** Do not let pieces float down slowly in the early levels. The faster you hard-drop (\`Spacebar\`) pieces, the more time you have to analyze the board state before the *next* piece spawns.
* **Watch the "Next Piece" Indicator:** Knowing exactly what shape is falling next completely dictates where you should rotate and place your current piece. Never place a piece without checking the preview window.`
  },
  {
    title: "Daily Tairupeinto",
    seoContent: `![Daily Tairupeinto](https://www.htmlgames.com/uploaded/game/thumb800/daily-tairupeinto-800x450.webp)

Daily Tairupeinto strips the spatial puzzle genre down to its absolute, most mathematically pure and elegantly simple core, delivering a digital adaptation of a deeply complex Japanese logic puzzle that combines the visual deduction of Picross/Nonograms with rigid territorial rules. Set against a clean, visually minimalist grid that is irregularly divided into distinct, bordered regions (similar to jigsaw puzzle pieces), players are presented with numerical clues along the outside edges of the board. Your objective is intensely focused: you must deduce which cells to paint black and which to leave white. The numbers indicate exactly how many cells in that specific row or column must be painted black. However, the brutal constraint is that if a region contains black cells, ALL black cells within that region must be physically connected. The atmosphere is deeply cerebral and intentionally demanding, requiring an intense level of forward-thinking and process of elimination, offering a fresh puzzle every single day. Daily Tairupeinto is the ultimate brain-training routine for hardcore logic puzzle fans.

## How to Play
* The primary objective is to correctly identify and paint the required number of black cells in the grid based on the numerical clues.
* The numbers outside the grid indicate the EXACT total number of black cells in that respective row or column.
* The grid is divided by heavy black lines into irregular regions.
* Use your \`Left Mouse Button\` to click a cell to paint it black. Click it again (or right-click) to mark it with an 'X' (definitively white).
* **The Regional Connection Rule:** Within any given region, if there are multiple black cells, they MUST all be connected horizontally or vertically (diagonals do not count). You cannot have two isolated black cells within the same region.
* **The Regional Disconnection Rule:** Black cells in *different* regions CANNOT share an edge (they cannot touch horizontally or vertically).

## Tips and Tricks
* **Mark the Zeroes and Maxes First:** This is the universal starting point for all logic puzzles. If a row has a "0" clue, immediately fill that entire row with 'X' marks. If a row has an "8" clue on an 8x8 grid, immediately paint the entire row black.
* **The Overlap Strategy:** If a row is 8 cells wide and the clue is "6", count 6 cells from the left, then count 6 cells from the right. The cells that overlap in the middle (the center 4) MUST be black, regardless of where the other 2 go. Paint them immediately.
* **Use the Regional Rules to Eliminate:** If you paint a cell black in Region A, you know for a mathematical fact that every single cell in Region B that directly touches that black cell MUST be marked with an 'X'.
* **The Connectivity Constraint:** If a region has two black cells painted, and they are separated by a white cell, you MUST paint the cells between them black to connect them, or else you have violated the primary rule.
* **Use the X Generously:** Do not rely on your memory. If you mathematically deduce that a cell must be white, mark it with an X. Your brain needs the visual confirmation of empty space.`
  },
  {
    title: "Portuguese Solitaire",
    seoContent: `![Portuguese Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/portuguesesolitaire800450.webp)

Portuguese Solitaire is an incredibly deep, mathematically rich variation of standard Solitaire that fundamentally alters the classic tableau structure, offering a brutal, perfect-information puzzle wrapped in a highly polished aesthetic. Unlike Klondike, all 52 cards are dealt face-up immediately, arranged into a massive, sprawling layout of 13 columns (each containing exactly four cards). Your objective is elegantly simple yet incredibly unforgiving: you must maneuver the cards to build four complete sequences in the foundation piles, from Ace up to King by suit. The atmosphere is deeply calculating and intensely strategic, requiring players to possess a masterful understanding of card sequencing and long-term tactical sacrifice. The defining feature of Portuguese Solitaire is its terrifyingly restrictive movement rule: on the tableau, you can only build downward, but suit and color *do not matter at all*. You can place a Black 9 on a Red 10, or a Black 10. The catch? You can ONLY move one single card at a time. You cannot move stacks. The visual presentation is crisp, ensuring perfect readability. Portuguese Solitaire is an uncompromising test of logic for veteran card players.

## How to Play
* The primary objective is to move all 52 cards into the four foundation piles at the top right, building upward in suit from Ace to King.
* All 52 cards are dealt face-up into 13 columns at the start of the game.
* Use your \`Mouse\` to click and drag a SINGLE card between columns.
* **The Movement Rule:** You can move a card onto another card on the tableau if it is exactly ONE value lower, regardless of suit or color (e.g., a 7 of Hearts can go on an 8 of Hearts, Spades, Clubs, or Diamonds).
* **The Restriction:** You can ONLY move one single card at a time. You can NEVER pick up a stack of cards.
* Only a King can be moved into an empty column.

## Tips and Tricks
* **Empty Columns are Pure Gold (But Hard to Use):** Because you can only move one card at a time, an empty column is the most powerful tool in the game. It allows you to temporarily park a King, or use the empty space as a stepping stone to "juggle" cards. Prioritize clearing columns above all else.
* **Unearth the Aces Early:** Your entire early game must focus heavily on excavating the four Aces so they can be moved to the foundations. The game cannot progress without them.
* **Build in Suit When Possible:** Even though the rules allow you to mix suits on the tableau, you should try to avoid it. If you have a sequence of Mixed Suits (8 of Spades, 7 of Hearts, 6 of Clubs), you will have to painstakingly dismantle that entire sequence one card at a time to move them to the foundations later.
* **Calculate the Cascade:** Before moving a card, look at the card it leaves behind. Does moving this card unblock a 4 that you desperately need for another column? Never move a card blindly.
* **Use the Undo Button:** This game is mathematically unforgiving. A strategy that works perfectly on move one will completely doom you on move ten. Use the undo button to scout paths before committing.`
  },
  {
    title: "Airport Sniper",
    seoContent: `![Airport Sniper](https://www.htmlgames.com/uploaded/game/thumb800/airportsniper800450.webp)

Airport Sniper strips the sprawling, complex first-person shooter genre down to its absolute, most tension-fueled and reflex-dependent core, delivering a pure, unadulterated test of spatial calculation, patience, and marksmanship. Moving away from chaotic, fast-paced combat or complex inventories, this title is entirely focused on the silent, methodical art of hitting a distant, moving target under extreme pressure. Set against a beautiful, high-definition digital rendering of a busy international airport tarmac, players are placed in control of a high-powered sniper rifle. Your objective is elegantly simple yet brutally difficult in execution: you must scan the environment, identify specific high-value targets (often mixed into crowds of innocent civilians), calculate the lead time, and execute a perfect shot before they board a plane and escape. The atmosphere is deeply cinematic and incredibly engaging; the game heavily utilizes a simulated zoom mechanic that drastically restricts your field of view, forcing you to constantly switch between macro-scanning and micro-aiming. The visual presentation is highly polished, utilizing realistic physics and crisp graphics. Airport Sniper is a flawless tactical experience.

## How to Play
* The primary objective is to locate and eliminate specific assigned targets at the airport before they escape.
* At the start of a mission, you will be given a description or a photo of your specific target.
* Use your \`Mouse\` to move the crosshairs across the airport tarmac.
* Click the \`Right Mouse Button\` (or press \`Spacebar\`) to look through the sniper scope, drastically zooming in on the environment.
* While zoomed in, carefully track your target. Remember, the bullet has travel time.
* Click the \`Left Mouse Button\` to fire the rifle.
* **The Fatal Errors:** Hitting an innocent civilian or missing the target and causing them to flee will instantly fail the mission.

## Tips and Tricks
* **Scan Un-Zoomed First:** Do not spend the entire game looking through the sniper scope. The scope's massive zoom drastically reduces your field of view, making it impossible to see the entire airport. Scan the area un-zoomed to locate the general area of the target first.
* **Identify the Behaviors:** In crowded missions, your target might be wearing the same suit as 10 other civilians. Look for specific behavioral clues given in the mission briefing (e.g., "Target is carrying a red briefcase" or "Target is walking with a limp").
* **Lead Your Target:** The bullet does not teleport to the target instantly. If the target is sprinting across the tarmac, you MUST aim your crosshairs slightly in front of them, calculating exactly where they will be when the bullet arrives.
* **Control Your Breathing (If Applicable):** Some versions feature scope sway. Do not try to fight it violently. Let the crosshair sway naturally, and time your shot for the exact millisecond it crosses the target.
* **Patience is Key:** You often only have one bullet before the target is spooked. Do not take a shot if a civilian is walking behind the target, as the bullet might over-penetrate. Wait for the perfect, clean opening.`
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
