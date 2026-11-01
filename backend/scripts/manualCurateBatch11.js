const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Daily Binairo+",
    seoContent: `![Daily Binairo+](https://www.htmlgames.com/uploaded/game/thumb800/daily-binairo-+-800450.webp)

Daily Binairo+ (often known as Takuzu or Tic-Tac-Logic) delivers an absolute masterclass in binary logic puzzle design, taking a brilliantly simple premise and pushing it to its absolute cerebral limits. Set against a clean, visually minimalist celestial backdrop, players are tasked with filling a grid exclusively with suns and moons while strictly adhering to a brutal set of mathematical rules. The atmosphere is deeply intellectual; there is no narrative, no flashy explosions, and absolutely no luck involved. It is a pure test of your ability to process numerical constraints and execute complex logical deductions through the process of elimination. The visual presentation is highly appealing in its absolute austerity, utilizing a stark, clean grid that ensures the puzzle mechanics remain perfectly readable and distraction-free on any screen size. The "+" in the title introduces advanced relational clues (like "=" for identical adjacent symbols and "x" for opposites), drastically increasing the difficulty ceiling. It is the ultimate, uncompromising brain-training routine for hardcore logic purists.

## How to Play
* Your objective is to fill every empty square on the grid with either a Sun or a Moon symbol.
* **Rule 1:** You can NEVER have three identical symbols in a row (horizontally or vertically). Max two suns or two moons can sit next to each other.
* **Rule 2:** Every single row and every single column MUST contain an exact equal number of Suns and Moons.
* **Rule 3 (The + Rules):** If you see an "=" between two squares, those squares must contain the exact same symbol. If you see an "x", they must contain different symbols.
* Use your \`Left Mouse Button\` to click an empty square to place a Sun, click again for a Moon, and click a third time to clear it.

## Tips and Tricks
* **The "Sandwich" Rule:** If you see a Sun, an empty space, and another Sun in a row, the empty space MUST be a Moon. If you put a Sun there, you violate Rule 1 (three in a row).
* **The "Bookend" Rule:** If you see two Moons sitting directly next to each other, you MUST cap both ends of them with Suns. If you place a Moon on either side, you violate Rule 1.
* **Count Your Symbols:** If you are playing on a 10x10 grid, every row and column must have exactly 5 Suns and 5 Moons. If a row currently has 5 Suns and 2 Moons, you instantly know the remaining 3 empty squares MUST be Moons.
* **Use the Relational Clues First:** The "=" and "x" clues are massive freebies. Look for chains of them to quickly establish a baseline of symbols before you start counting.
* **Never Guess:** Binairo is 100% pure mathematical logic. If you guess a symbol and you are wrong, you will break the entire puzzle and not realize it until 10 minutes later.`
  },
  {
    title: "Holiday Tripeaks",
    seoContent: `![Holiday Tripeaks](https://www.htmlgames.com/uploaded/game/thumb800/holidaytripeaks800450.webp)

Holiday Tripeaks strips the beloved solitaire variant down to its absolute, most highly addictive core while wrapping it in a relaxing, sun-drenched beach aesthetic. Moving away from the slow, methodical pacing of standard Klondike or the sterile green felt of casino adaptations, this title embraces a kinetic, combo-driven gameplay loop set against a backdrop of swaying palm trees and crashing waves. The game presents you with the iconic three-peak pyramid structure of overlapping cards. Your objective is intensely focused: clear the entire board before your draw pile is completely exhausted. The atmosphere is undeniably engaging, trading intense arcade pressure for a soothing, vacation-themed puzzle environment. The visual presentation is highly polished, utilizing crisp, oversized card graphics that are easily readable even when played on smaller mobile screens, and satisfying audio cues that trigger when you hit a massive sequence run. Holiday Tripeaks is a pure, unadulterated test of numerical sequencing and cascade management, perfect for unwinding.

## How to Play
* The primary objective is to clear all the cards from the three peaks by moving them to the discard pile at the bottom.
* Use your \`Left Mouse Button\` to click on any fully exposed (uncovered) card on the board.
* You can only remove a card if its value is exactly ONE rank higher or ONE rank lower than the current face-up card in the discard pile.
* The suit of the cards does not matter. An 8 of Hearts can be played on a 7 of Spades or a 9 of Clubs.
* Aces can connect to Kings, and Kings can connect to Aces, allowing sequences to loop.
* If you have no valid moves on the board, click the face-down draw pile to reveal a new starting card.

## Tips and Tricks
* **Prioritize the Peaks:** The cards at the very top of the three pyramids block the most cards underneath them. Always favor a move that uncovers a card higher up in the structure.
* **Scan for the Longest Chain:** Never just click the first valid card you see. If your discard is a 5, and you have a 4 and a 6 on the board, trace both paths mentally to see which one yields the longest continuous chain of removals.
* **Save the Draw Pile:** Your draw pile is your only lifeline. Exhaust absolutely every single possible sequence on the main board before you even think about clicking for a new card.
* **Uncover Face-Down Cards:** If you have multiple options for a move, always choose the card that will uncover a face-down card below it. Information is your most valuable resource.
* **Use the Undo Button (If Available):** Many variations feature a single 'Undo' button. Use it strategically! If you pick a path that immediately leads to a dead end, undo it and try the alternate route.`
  },
  {
    title: "Medieval Castle Hidden Differences",
    seoContent: `![Medieval Castle Hidden Differences](https://www.htmlgames.com/uploaded/game/thumb800/medievalcastlehiddendifferences800450.webp)

Medieval Castle Hidden Differences is a masterclass in atmospheric, visually dense puzzle design, stripping the "spot the difference" genre down to its absolute, most captivating and historically immersive core. Forget convoluted detective storylines; this title is a pure, unadulterated shot of visual immersion focused entirely on acute observation. You are presented with two seemingly identical, stunningly detailed, high-definition digital illustrations showcasing the ancient, stone-carved architecture, armories, and courtyards of a sprawling medieval fortress. Your task is to meticulously scan both images side-by-side to locate the subtle discrepancies. The atmosphere is intoxicatingly rich, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, tapestries, and complex geometry. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy corner, coiled rope, and weathered brick is rendered with breathtaking clarity. The sensation of discovery is incredibly well-executed, making every successfully located difference feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single subtle difference between the two side-by-side images of the medieval castle.
* Use your \`Mouse\` to carefully scan the high-definition scenes.
* When you spot a discrepancy (e.g., a missing sword, a different colored flag, an extra brick), click the \`Left Mouse Button\` directly on that spot in EITHER image.
* Successfully locating a difference will draw a circle around it and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the differences before the strict time limit expires to advance to the next room of the castle.

## Tips and Tricks
* **The Magic Eye Technique:** Instead of looking back and forth rapidly, try to relax your eyes and look at the "dead space" directly between the two images. Sometimes, the subtle differences will create a slight visual flicker in your peripheral vision.
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the top-left tower) before moving to the next.
* **Look for Shapes, Not Just Objects:** The game often removes subtle architectural lines, shortens a shadow, or changes the curve of an archway. Don't just look for "missing items"; look for geometric alterations.
* **Check the Edges:** The developers love hiding tiny differences right on the absolute edge of the frame, where players rarely focus their attention.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Matchstick Math Puzzle",
    seoContent: `![Matchstick Math Puzzle](https://www.htmlgames.com/uploaded/game/thumb800/matchstickmathpuzzle800450.webp)

Matchstick Math Puzzle delivers an absolute masterclass in minimalist, logic-driven puzzle design, brilliantly adapting one of the oldest, most famous physical bar-trick puzzles into a sleek, highly accessible digital experience. Moving away from the complex grid mechanics of Sudoku, this game relies entirely on lateral thinking and basic arithmetic. You are presented with a mathematically incorrect equation (like 5 + 7 = 2) constructed entirely out of digital wooden matchsticks. Your objective is elegantly simple yet brutally difficult: you must physically pick up and move exactly one (or sometimes two) matchsticks to transform the incorrect numbers and symbols into a perfectly true equation. The atmosphere is intensely intellectual; there is no narrative, no flashy explosions, and no luck involved. It is a pure test of your ability to visualize numerical transformations and execute complex logical deductions. The visual presentation is highly appealing in its absolute austerity, utilizing crisp, realistic matchstick graphics that ensure the puzzle mechanics remain perfectly readable.

## How to Play
* The primary objective is to make the incorrect mathematical equation true by moving a specific number of matchsticks.
* The game will explicitly tell you how many matchsticks you are allowed to move (usually just one or two).
* Use your \`Mouse\` to click on a matchstick to pick it up.
* Drag the matchstick to an empty, valid slot on another number or symbol and click to place it down.
* You can change numbers (e.g., turning a 6 into a 9), or you can change the mathematical operators (e.g., turning a plus sign into a minus sign).
* The puzzle is successfully completed when the equation is mathematically flawless.

## Tips and Tricks
* **Analyze the Operators First:** The most common solution involves changing a plus sign (+) into a minus sign (-) by removing the vertical stick. This gives you a free stick to use somewhere else while drastically altering the sum.
* **Know Your Transformations:** Memorize exactly which numbers can be transformed into others with a single move. A 6 can become a 9 or a 0. An 8 can become a 9, 6, or 0 by removing one stick. A 3 can become a 5.
* **Check the Answer Side:** Don't just focus on the left side of the equation. Often, the easiest solution is to change the final answer on the right side of the equals sign to match the incorrect sum on the left.
* **The "Equals" Trick:** While rare, some puzzles allow you to move a stick from the equals sign (=) to create a minus sign (-), fundamentally changing the structure of the entire equation.
* **Never Guess:** If you are randomly dragging sticks around, you are not learning the logic. Reset the puzzle, look at the numbers, and calculate exactly what numbers you need to create to balance the scale.`
  },
  {
    title: "Mahjong Merge",
    seoContent: `![Mahjong Merge](https://www.htmlgames.com/uploaded/game/thumb800/mahjongmerge800450.webp)

Mahjong Merge fundamentally rewrites the rules of two massively popular puzzle genres by seamlessly fusing the structural, 3D unblocking mechanics of traditional Mahjong Solitaire with the highly addictive, exponential number-crunching of "2048." Instead of simply matching identical symbols to clear them from the board, this game assigns numerical values to every single tile. When you match two exposed tiles, they do not disappear; they instantly merge into a single tile with double the value, forcing you to constantly manage an ever-evolving, increasingly complex 3D pyramid of numbers. The atmosphere is deeply calculating and immensely satisfying, requiring players to possess a masterful understanding of spatial sequencing and algorithmic movement. You are tasked with analyzing overlapping tile structures, meticulously searching for exposed pairs to consolidate your massive numbers while digging deeper into the stack. The visual presentation is highly polished, utilizing crisp, high-definition tiles that are easily readable even when stacked deep. Mahjong Merge is an uncompromising test of logic and patience.

## How to Play
* Your objective is to reach a specific numerical goal (like creating a 2048 tile) by merging identical numbered tiles within the 3D structure.
* Use your \`Left Mouse Button\` to select a "free" numbered tile, then click a matching "free" tile.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its left or right vertical sides.
* When two identical free tiles are matched, they merge into a single tile with double the value (e.g., matching two 8s creates a 16).
* The newly merged, higher-value tile will remain on the board in the exact physical location of the *second* tile you clicked.

## Tips and Tricks
* **Control the Merge Location:** Because the new tile spawns exactly where you make your second click, you have total control over board management. Always try to pull your massive numbers toward the outer edges of the board where they won't block the tiles underneath them.
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **Build Sequential Chains:** Try to keep your numbers organized. If your biggest tile is a 128, try to build a 64 right next to it, and a 32 next to that. This sets up a massive chain reaction later.
* **Don't Bury the Low Numbers:** If you create a massive 256 tile directly on top of a single 2, you have essentially permanently trapped that 2 until you can move the 256. Always try to pull big merges off the main stack.
* **Look Ahead:** Before making a merge, mentally visualize what the board will look like after the two tiles become one. Does this new tile block a crucial pathway you need next?`
  },
  {
    title: "Jewels Classic",
    seoContent: `![Jewels Classic](https://www.htmlgames.com/uploaded/game/thumb800/jewelsclassic800450.webp)

Jewels Classic delivers the absolute purest, most unadulterated distillation of the legendary match-3 formula, completely stripping away the bloated narratives, unnecessary mini-games, and complex meta-progression that plague modern iterations of the genre. This is the genre exactly as it was meant to be played: a massive grid, brightly colored gems, and an unrelenting pursuit of the highest possible score. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core swapping mechanic. You are tasked with physically aligning glowing rubies, sapphires, and emeralds to trigger massive cascading chain reactions. The visual presentation is highly polished, utilizing crisp, high-definition sprites that crackle with magical energy when linked together. The explosive animations and satisfying audio cues that accompany a board-clearing combo are nothing short of spectacular, providing a constant, reliable dopamine drip. Jewels Classic is a pure, uncompromising test of spatial planning and reflex execution.

## How to Play
* The core mechanic revolves around swapping adjacent jewels to create horizontal or vertical lines of three or more identical gems.
* Use your \`Mouse\` to click on a jewel, then click an adjacent one to swap their positions, or simply click and drag.
* Swaps are only permitted if they immediately result in a valid match of three or more.
* Matching exactly four jewels creates a glowing, line-clearing explosive gem.
* Matching five jewels in an L or T shape creates a devastating area-of-effect bomb gem.
* Matching five jewels in a straight row creates a hypercube that obliterates all gems of a specific color from the board.

## Tips and Tricks
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading gems dropping from the ceiling, often resulting in massive, free combos as the board settles.
* **Scan for Patterns, Not Just Colors:** Don't just look for three red gems; look for the "V" shape, the "L" shape, or the two-and-one gap. Training your eyes to recognize these specific geometric setups drastically increases your speed.
* **Combine the Power-Ups:** The most devastating move in the entire game is swapping two power-ups with each other. Swapping a line-clear with a bomb creates a massive, cross-shaped explosion that clears half the board instantly.
* **Save the Hypercubes:** Do not use the five-in-a-row hypercube immediately! Save it until you desperately need to clear a specific color to trigger a cascade, or wait to combine it with another power-up for a board-wiping effect.
* **Don't Tunnel Vision:** It is incredibly easy to spend 30 seconds staring at the top left corner trying to force a match. If you can't see a move instantly, physically force your eyes to scan the opposite side of the board.`
  },
  {
    title: "Medieval Castle Defense",
    seoContent: `![Medieval Castle Defense](https://www.htmlgames.com/uploaded/game/thumb800/medievalcastledefense800450.webp)

Medieval Castle Defense injects a massive dose of strategic depth and resource management into the highly competitive tower defense genre. Moving away from the static, automated turrets of sci-fi shooters, this title places you in command of a living, breathing medieval army tasked with holding the line against relentless hordes of invading barbarians, mythical beasts, and siege engines. The atmosphere is intensely focused and deeply tactical; you aren't just placing towers, you are deploying specific units—archers, knights, and mages—along a winding path, forcing you to constantly adapt your strategy to the specific armor and speed of the incoming waves. The visual presentation is exceptionally polished, utilizing a vibrant, high-definition isometric art style that brings the chaotic battlefield to life. The satisfying clash of steel, the thwack of arrows, and the spectacular magical explosions ensure that every successful wave defense feels like a hard-won victory. It is an uncompromising test of economic forecasting and tactical unit placement.

## How to Play
* The primary objective is to prevent the enemy waves from reaching the end of the path and breaching your castle gates.
* You start with a limited amount of gold. Use your \`Mouse\` to select a defensive unit (e.g., Archer, Mage, Knight) from the bottom menu.
* Click on a valid empty plot along the winding path to deploy the unit.
* Enemies will automatically march down the path. Your units will automatically attack any enemy within their specific range radius.
* Killing enemies rewards you with more gold, which you must use to build more units or instantly upgrade existing units to increase their damage and range.
* If too many enemies reach your castle, your health drops to zero and you lose the level.

## Tips and Tricks
* **Understand Armor Types:** The core of the game is rock-paper-scissors logic. Archers are great against fast, unarmored targets. Mages are mandatory for heavily armored knights. Artillery is needed for massive crowds. Do not spam just one unit type.
* **The "Kill Zone" Strategy:** Do not spread your units thinly across the entire map. Identify the "U-turns" or tight loops in the path where enemies are forced to bunch up, and concentrate ALL your heavy firepower in that single, devastating kill zone.
* **Upgrade Over Quantity:** Three fully upgraded archer towers are vastly superior to ten weak, level-one archer towers. Once your kill zone is established, focus your gold purely on upgrading those core defensive anchors.
* **Use Blockers Wisely:** If the game features ground troops or barracks that spawn knights to block the path, place them directly inside the firing range of your mages and artillery. The knights stop the enemies, the artillery blows them up.
* **Don't Forget the Air:** Eventually, flying enemies will bypass all your ground-based defenses. Ensure you have dedicated anti-air units (usually archers or specific mages) built before the later waves arrive.`
  },
  {
    title: "Daily Photo Guess",
    seoContent: `![Daily Photo Guess](https://www.htmlgames.com/uploaded/game/thumb800/daily-photo-guess-800x450.webp)

Daily Photo Guess delivers an absolute masterclass in minimalist, trivia-driven puzzle design, brilliantly adapting the classic "reveal the picture" format into a sleek, highly accessible daily challenge. Stripping away the chaotic timers and complex UI of standard quiz games, this title relies entirely on your visual deduction and general knowledge. You are presented with a completely obscured, high-definition photograph. Your objective is elegantly simple yet brutally difficult: you must carefully click on a grid of dots to reveal tiny, circular glimpses of the image underneath, and use those fragmented clues to correctly guess what the photograph depicts. The atmosphere is intensely intellectual; there is no narrative and no luck involved. It is a pure test of your brain's ability to extrapolate a massive amount of information from a tiny visual sample. The visual presentation is highly appealing in its absolute austerity, ensuring the puzzle mechanics remain perfectly readable. It is the ultimate, bite-sized brain-training routine for trivia enthusiasts.

## How to Play
* The primary objective is to correctly identify the subject of the hidden photograph using the absolute minimum number of visual clues.
* The image is completely obscured by a grid of dots or tiles.
* Use your \`Left Mouse Button\` to click on a dot to reveal a small, circular section of the photograph underneath.
* Analyze the colors, textures, and shapes revealed in that small window.
* Once you think you know what the image is, use your \`Keyboard\` to type your answer into the text box at the bottom of the screen.
* The fewer dots you click before guessing correctly, the higher your final score will be.

## Tips and Tricks
* **Click the Intersections:** Do not click random dots on the absolute edge of the screen, as they usually only reveal blank sky or background textures. Always start your first few clicks dead in the center of the image, where the main subject is usually located.
* **Look for Textures, Not Just Shapes:** If you reveal a tiny patch of orange and black stripes, you don't need to see the shape of the animal to know it's a tiger. Focus heavily on identifying materials (fur, metal, brick, water).
* **Check the Color Palette:** A purely blue and white color palette is almost always snow, ice, or sky. A vibrant mix of greens and browns is usually a forest. Use the overall color tone to narrow down the category instantly.
* **Think Laterally:** If you reveal a steering wheel, the answer might not be "car." It might be "bus," "truck," or "tractor." Try the most obvious answer first, but be prepared to pivot to synonyms or specific categories.
* **Don't Waste Clicks:** Once you have a strong theory, stop clicking! Every click reduces your score. Type your guess in. If you are wrong, you can always click more dots afterward.`
  },
  {
    title: "Pentris",
    seoContent: `![Pentris](https://www.htmlgames.com/uploaded/game/thumb800/pentris800450.webp)

Pentris violently propels the most legendary, iconic block-falling puzzle formula in gaming history (Tetris) into a significantly more complex and demanding dimension. Moving far beyond the standard, manageable four-block "tetrominoes," this title forces players to manage "pentominoes"—massive, unwieldy geometric shapes constructed from exactly FIVE blocks. The atmosphere is incredibly intense and deeply calculating, demanding a completely new level of spatial geometry and rapid rotational calculation in your mind. Because the shapes are larger and vastly more complex (including weird W-shapes, massive crosses, and long 5-block lines), creating a completely solid horizontal line requires immense foresight and perfect placement. The visual presentation is highly polished, utilizing crisp, brightly colored blocks that pop against the dark background, ensuring perfect readability even when the drop speed reaches terrifying levels. Pentris is a masterclass in taking a perfect, timeless formula and elevating it with a singular, brutal mechanical twist that fundamentally changes how you interact with the board.

## How to Play
* The primary objective is to survive as long as possible by dropping descending 5-block shapes (pentominoes) to form completely solid horizontal lines across the grid.
* The blocks will fall automatically from the top of the screen.
* Use the \`Left\` and \`Right\` arrow keys (or \`A\` and \`D\`) to physically move the falling block horizontally across the grid.
* Use the \`Up\` arrow to rapidly rotate the falling block 90 degrees.
* Use the \`Down\` arrow to accelerate the drop speed of the block (soft drop).
* When a completely solid horizontal line of blocks is formed (no empty gaps), it will flash and disappear, lowering the stack and granting points.
* If the stack of blocks reaches the very top of the grid, the game is over.

## Tips and Tricks
* **Forget Your Tetris Instincts:** The shapes in Pentris behave entirely differently than Tetris shapes. An L-shape in Pentris is 4 blocks long and 2 blocks wide. Do not try to play this game using muscle memory; you must actively analyze every new shape.
* **Keep the Board Flat:** In 2D Tetris, you can build a tall structure on one side and leave a deep well on the other. In Pentris, building unevenly is a death sentence because the complex shapes will instantly lock the board. Keep the entire structure as flat and level as possible.
* **Manage the "Cross" Shape:** The plus-sign (cross) shape is the absolute worst piece in the game because it creates massive, unfillable gaps underneath it unless you drop it into a perfectly shaped hole. Avoid building structures that require a cross to fix.
* **Don't Rely on the Line Piece:** The 5-block straight line is incredibly rare. Do not build a massive, 5-block-deep well hoping for the long piece to arrive. You will die waiting for it.
* **Patience over Speed:** When the drop speed increases, players panic and hard-drop blocks randomly. Focus entirely on finding a safe landing zone, even if it doesn't clear a line, to keep the structure manageable.`
  },
  {
    title: "Treasure Maze",
    seoContent: `![Treasure Maze](https://www.htmlgames.com/uploaded/game/thumb800/treasuremaze800450.webp)

Treasure Maze strips the arcade exploration genre down to its absolute, most tension-fueled and pathfinding-focused core, delivering a pure test of spatial memory and rapid execution. Moving away from complex combat mechanics, this title places you in control of a fragile character trapped within a series of massive, claustrophobic labyrinths. Your objective is intensely focused: navigate the winding, trap-filled corridors to collect every single glowing gold coin or artifact scattered throughout the grid, and then locate the exit portal. The atmosphere is deeply engaging and highly stressful; the maze is completely saturated with lethal hazards, moving patrols, and spikes that demand flawless timing to bypass. The visual presentation is highly polished, utilizing a clean, classic top-down perspective and crisp, high-definition textures that ensure the dangerous traps are perfectly readable against the dungeon floors. Treasure Maze is a pure, unadulterated shot of arcade adrenaline that perfectly captures the anxiety of being hopelessly lost in a dangerous environment.

## How to Play
* The primary objective is to collect every single piece of treasure scattered throughout the labyrinth and safely reach the exit portal before the timer expires.
* Use your \`Arrow Keys\` (Up, Down, Left, Right) or \`W, A, S, D\` to physically move your character through the maze corridors.
* You must actively avoid touching the walls (in some variations) or stepping on deadly spike traps, spinning blades, and patrolling enemies. Touching a hazard usually results in instant death and a level restart.
* Some levels feature locked doors that require you to find specific colored keys hidden in the maze before you can progress.
* Once all the mandatory treasure is collected, the exit portal will open.

## Tips and Tricks
* **The "Right Hand" Rule:** If you are completely lost in a massive, sprawling maze, place your character's metaphorical "right hand" on the right wall and simply follow it continuously. While it is not the fastest route, following one continuous wall will mathematically guarantee you eventually explore every inch of the maze and find the exit.
* **Scout the Patrols:** If an enemy is patrolling a corridor, do not just sprint blindly after them. Stop, observe their exact movement pattern and speed, and only move when they are walking away from you.
* **Look Ahead:** Because of the top-down perspective, you can see slightly ahead of your character. Always look two intersections ahead to plan your route and avoid dead ends.
* **Grab the Corners First:** When you enter a massive open room filled with treasure, clear the absolute outer corners and edges first. Getting trapped in a corner by a moving enemy is a guaranteed death.
* **Don't Panic at the Exit:** The most common way players die is sprinting wildly toward the exit portal once it opens, completely forgetting about the spike trap right in front of it. Stay calm and execute the final steps flawlessly.`
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
