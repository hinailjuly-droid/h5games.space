const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Hidden Forest",
    seoContent: `![Hidden Forest](https://www.htmlgames.com/uploaded/game/thumb800/hiddenforest800450.webp)

Hidden Forest strips the wildly popular hidden object genre down to its absolute, most captivating and subtly demanding core, completely abandoning cluttered urban environments or messy attics in favor of the breathtaking, organic complexity of nature. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing lush, overgrown woodlands, sun-dappled clearings, and ancient, moss-covered roots. Your objective is elegantly simple: locate specific, thematic items expertly blended into the dense foliage. The atmosphere is deeply relaxing and incredibly focused, accompanied by soothing ambient sounds of rustling leaves and distant birdsong, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, complex botanical geometry, and shifting light. Visually, the game opts for a highly realistic, almost painterly aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy mushroom and cleverly disguised leaf insect is rendered with breathtaking clarity. Hidden Forest is the ultimate brain-training routine for acute observation.

## How to Play
* Your objective is to find every single item listed in the top UI bar hidden within the main high-definition forest scene.
* Use your \`Mouse\` to carefully scan the high-definition image.
* When you spot a required object (e.g., a specific type of berry, a hidden compass, or a camouflaged animal), click directly on it.
* Successfully locating an object will remove it from your target list and award you points.
* Be extremely precise! Randomly spam-clicking around the screen will often result in a heavy time penalty or score deduction.
* Complete the list before the timer expires to advance deeper into the forest.

## Tips and Tricks
* **Look for Geometry, Not Just Color:** The developers are experts at camouflaging objects. A brown walking stick hidden on a brown tree branch will be perfectly color-matched. Stop looking for contrasting colors and start looking for the strict, geometric outline of the object that doesn't quite match the natural flow of the bark.
* **Divide the Screen:** Do not try to scan the entire massive image at once; it will overwhelm your eyes. Mentally divide the screen into four quadrants and meticulously search one corner (like the base of an old oak tree) before moving to the next.
* **Check the Shadows and Highlights:** The hardest items to find are the dark ones hiding in the deep black shadows beneath fern leaves, or the bright ones hiding in the blown-out glare of a sunbeam cutting through the canopy. Adjust your monitor brightness!
* **Step Back:** If you are completely stuck on the final object, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the hidden shape suddenly pop out.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Neon Math",
    seoContent: `![Neon Math](https://www.htmlgames.com/uploaded/game/thumb800/neon-math-800450.webp)

Neon Math fundamentally rewrites the rules of the traditional spatial logic puzzle (like 2048 or Sudoku) by abandoning rigid geometric shape-fitting in favor of a highly complex, free-flowing numerical subtraction system wrapped in a stark, glowing cyberpunk aesthetic. Set against a clean, visually minimalist black grid, players are presented with a series of brightly colored, neon-glowing tiles. Some tiles contain a base number, while others contain specific mathematical operators (e.g., "-2", "-5"). Your objective is intensely focused and brutally unforgiving: you must physically drag the numbered tiles across the grid, colliding them with the operator tiles to systematically reduce their base value to exactly ZERO. The atmosphere is deeply cerebral and immensely satisfying; you are essentially managing a massive game of localized arithmetic while planning complex spatial routes to ensure you have the exact right operators available to zero out every tile. The visual presentation is highly functional, utilizing crisp, high-contrast typography.

## How to Play
* The primary objective is to reduce the value of every single numbered tile on the board to exactly zero.
* Use your \`Mouse\` to click and drag a numbered tile (e.g., a tile with the number 7).
* Drag it directly onto an operator tile (e.g., a tile that says "-3").
* **The Math Rule:** The numbered tile will absorb the operator, reducing its value (the 7 becomes a 4). The operator tile is consumed and disappears.
* You must continue routing the numbered tile through various operators until its value hits exactly 0, at which point the tile disappears.
* **The Fatal Error:** You cannot reduce a tile below zero (e.g., dragging a 2 onto a -5). If you run out of valid operators to zero out all remaining tiles, the level is failed.

## Tips and Tricks
* **Work Backwards (The Golden Strategy):** Do not just start randomly subtracting numbers. Look at a tile (e.g., 9) and look at the available operators (-5, -2, -2). Mentally calculate the exact path required (9 - 5 - 2 - 2 = 0) *before* you make your first move.
* **Share the Operators:** In complex levels, you might have two numbered tiles (a 5 and a 4) and a shared pool of operators. You must carefully calculate which tile gets which operator. Giving the -3 to the 5 might leave the 4 mathematically unsolvable.
* **Clear the Blockers:** Sometimes an operator tile is physically blocking the path you need to take. You might have to temporarily detour a number through that operator just to remove it from the board, even if it wasn't the most mathematically efficient route.
* **Order of Operations:** The order in which you drag a tile over operators rarely matters in pure subtraction, but if the game introduces multiplication or division tiles, the path sequence becomes incredibly strict.
* **Restart Quickly:** If you make a mathematical error on your first move, do not try to salvage a broken board. Hit the restart button immediately. This game requires perfect execution.`
  },
  {
    title: "Mahjong Triple Dimensions",
    seoContent: `![Mahjong Triple Dimensions](https://www.htmlgames.com/uploaded/game/thumb800/mahjongtripledimensions-800450.webp)

Mahjong Triple Dimensions completely shatters the rules of traditional pathfinding puzzles by ripping the 2D grid off the screen and forcing players to navigate a massive, fully rotatable geometric cluster, while simultaneously increasing the difficulty by requiring matches of THREE instead of two. You are not just looking at a flat image; you are actively spinning a floating monolith of glowing cubes in three-dimensional space. Your objective is brutally difficult: you must find and match three identical cubes, but the connections rely entirely on 3D spatial awareness rather than simple top-down unblocking. The atmosphere is deeply calculating and demands an entirely new level of visual memory; because you need three tiles, you must often memorize the location of a tile on the back of the cluster while searching the front. The visual presentation is exceptionally polished, utilizing crisp graphics and dynamic lighting that ensures the puzzle remains perfectly readable even when rotating rapidly. It is a brilliant, uncompromising evolution of the matching genre.

## How to Play
* The primary objective is to completely dismantle the floating 3D structure by matching identical cubes before the timer expires.
* Use your \`Mouse\` (or arrow keys) to physically rotate the entire 3D puzzle cluster 360 degrees in any direction.
* **The Triple Match:** Click an exposed cube to select it, find a second matching cube, and then find a THIRD matching cube to instantly eliminate all three.
* **The 3D Golden Rule:** A cube is strictly considered "free" and clickable ONLY if it has at least TWO of its adjacent sides completely exposed to empty air. (Top and bottom usually do not count; focus on the four vertical sides).
* If a cube is wedged tightly between other blocks on three sides, it cannot be selected.

## Tips and Tricks
* **Rotate Constantly:** You cannot solve this puzzle by staring at one side. You must constantly spin the structure after every single move to see if your removal unblocked a new cube on the opposite side of the cluster.
* **The Memory Game:** Because you need three tiles, finding the first two is easy; finding the third is the challenge. When you spot a pair, do not click them immediately. Leave them unselected and spin the board until you find the third, then rapidly click all three.
* **Clear the Protruding Corners:** Cubes sticking out of the sharpest corners of the 3D structure are the easiest to connect, because they naturally have three or four sides exposed to empty air. Clear the sharp edges instantly.
* **Work from the Outside In:** Do not try to drill a deep hole into the dead center of the 3D cluster. You must peel the structure like an onion, removing the outermost layer of cubes entirely before moving inward.
* **Use the Reshuffle (If Available):** If the board is massive and you are completely lost, use the shuffle button to scramble the remaining cubes. It often reveals obvious matches that were previously hidden.`
  },
  {
    title: "Space Blast",
    seoContent: `![Space Blast](https://www.htmlgames.com/uploaded/game/thumb800/space-blast-800450.webp)

Space Blast injects a massive dose of interstellar, sci-fi energy into the highly competitive tile-collapsing genre (often called "Blast" or "Collapse" games), delivering a visual feast of exploding planets and intensely satisfying combination mechanics. Stepping entirely away from generic gem-swapping, this title places you in the deep cosmos. You are presented with a massive grid filled with tightly packed celestial bodies—gas giants, ringed planets, volcanic worlds, and icy moons. Your objective is intensely focused: you must rapidly scan the board and click on massive, pre-existing clusters of identical planets to instantly shatter them into cosmic dust. When destroyed, the entire column collapses under the gravity of a black hole, shifting the board state and creating new clusters. The atmosphere is deeply engaging, accompanied by sweeping, cinematic synth music. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition sprites that crackle with kinetic energy. Space Blast is a pure test of cascade optimization and gravity management.

## How to Play
* The core mechanic revolves around clicking clusters of identical planets to remove them from the board.
* Use your \`Mouse\` to click on any group of TWO OR MORE identically colored planets that are touching horizontally or vertically.
* When clicked, the entire cluster explodes instantly, and gravity causes the planets above them to fall straight down.
* **The Primary Objective:** Completely clear the board, or reach a specific target score, before running out of allowed moves.
* If a column is completely emptied, the remaining columns will usually slide toward the center to fill the gap.
* **The Black Holes/Rockets:** Clearing massive clusters (e.g., 6 or 8 planets at once) often spawns powerful rockets or localized black holes that can clear entire rows, columns, or specific colors.

## Tips and Tricks
* **Work from the Bottom:** Always prioritize clicking clusters at the lowest possible points on the grid. This triggers the maximum amount of gravity shifting, often causing planets higher up to naturally fall into massive, pre-aligned super-clusters without you having to waste a move.
* **Build Massive Clusters (Patience is Key):** While clicking a group of two planets is safe, it yields a terrible score and doesn't spawn power-ups. The true strategy is to click the smaller groups *around* a specific color to manually build a massive, screen-spanning cluster of 15 or 20 planets before detonating it.
* **Combine the Power-Ups:** The most devastating move in the game is activating two power-ups that are sitting directly next to each other. Combining a horizontal rocket with a vertical rocket creates a massive cross-blast. Combining a rocket with a black hole creates absolute devastation.
* **Don't Isolate Single Planets:** The absolute worst thing you can do is accidentally clear all the planets surrounding a specific color, stranding a single planet with no identical neighbors. Always ensure you have a planned route.
* **Focus on the Objective:** If you only need to clear 10 more red planets to win the level, completely ignore the massive, satisfying cluster of blue planets on the other side of the board.`
  },
  {
    title: "Mahjongg China",
    seoContent: `![Mahjongg China](https://www.htmlgames.com/uploaded/game/thumb800/mahjonggchina800450.webp)

Mahjongg China delivers the absolute purest, most unadulterated distillation of the legendary Chinese tile-matching puzzle, completely stripping away the bloated, over-stylized themes of modern adaptations to present the genre exactly as it was meant to be played. Set against a clean, visually uncluttered backdrop—a loving homage to classic physical parlor games and ancient dynasties—players are presented with the iconic, towering pyramid formations consisting of beautifully rendered, authentic ivory-colored tiles. Your objective is elegantly simple yet brutally difficult in execution: you must meticulously dismantle the massive, overlapping structure by finding and matching identical pairs of tiles. The atmosphere is deeply relaxing and incredibly focused, trading the tense ticking clocks of arcade games for a soothing, meditative puzzle environment accompanied by traditional, ambient Chinese instrumentation. The visual presentation is highly functional, utilizing crisp, high-contrast traditional symbols (Bamboos, Characters, Circles, Winds, and Dragons) that ensure perfect readability. It is the ultimate, timeless brain-training routine for puzzle purists.

## How to Play
* Your primary objective is to clear all tiles from the board by matching them in identical pairs.
* Use your \`Left Mouse Button\` to click on a "free" tile to select it.
* Click on a matching "free" tile to instantly eliminate both from the board.
* **The Golden Rule of Freedom:** A tile is strictly considered "free" (and therefore clickable) ONLY if it has absolutely no other tile resting on top of it, AND it is completely unblocked on at least one of its immediate left or right vertical sides.
* If a tile is wedged tightly between two other tiles horizontally, it cannot be selected.
* The game is won when the board is completely clear. The game is lost (deadlocked) if no valid matches remain.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your absolute highest priority on breaking down the tallest, thickest stacks of tiles in the dead center of the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board offers vastly more horizontal matching options and reveals more hidden tiles simultaneously.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach Bamboo tiles on the very outer edge of the board, ignore them! Save them. You might desperately need those outer tiles later to match a Bamboo tile buried deep in the center tower.
* **Understand the Exceptions:** Remember the classic rules: any Season tile (Spring, Summer, Autumn, Winter) can match with any other Season tile. Any Flower tile (Plum, Orchid, Chrysanthemum, Bamboo) can match with any other Flower tile. They do not have to be visually identical.
* **Use the Undo Button:** If you make a match and it immediately deadlocks the board, use the undo button to reverse it. Always scout the board to see if a specific tile has three visible copies; if it does, match the two that unblock the most hidden tiles.`
  },
  {
    title: "Coloring Mandalas",
    seoContent: `![Coloring Mandalas](https://www.htmlgames.com/uploaded/game/thumb800/coloring-mandalas-800x450.webp)

Coloring Mandalas completely abandons the high-stress environments of timers, scores, and fail-states, delivering a deeply therapeutic, purely creative digital experience designed specifically for mindfulness and relaxation. Moving entirely away from traditional gaming mechanics, this title functions as an interactive, highly polished digital canvas. Players are presented with a massive library of intricate, geometrically perfect mandala line-art designs—ranging from simple floral patterns to incredibly complex, hypnotic, kaleidoscopic arrays. Your objective is entirely self-directed: you must select a palette and meticulously fill the empty spaces with vibrant colors, bringing the black-and-white geometry to life. The atmosphere is profoundly meditative, often accompanied by soothing ambient tracks, allowing players to enter a state of deep focus (a flow state) as they lose themselves in the repetitive, satisfying act of color coordination. The visual presentation is flawless, utilizing a vector-based rendering engine that ensures the lines remain perfectly crisp and the colors vividly saturated, no matter how deeply you zoom in.

## How to Play
* The primary objective is entirely creative: choose a mandala design and color it to your satisfaction.
* Select a black-and-white mandala template from the main gallery.
* Use the color palette (usually located at the bottom or side of the screen) to select a specific color.
* Use your \`Mouse\` to click on any enclosed white space within the mandala.
* The "paint bucket" tool will instantly fill that specific geometric section with your chosen color.
* You can zoom in on the canvas to fill the incredibly tiny, intricate details.
* Once finished, you can usually save the image to your device or print it.

## Tips and Tricks
* **Establish a Color Palette First:** Before you start clicking randomly, decide on a theme. Are you going for warm, fiery colors (reds, oranges, yellows)? Cool, calming colors (blues, greens, purples)? Or high-contrast neon? Limiting your palette creates a much more cohesive final piece.
* **Work from the Center Out:** Mandalas are inherently radial designs. The most satisfying way to color them is to start at the absolute dead center and work your way outward in concentric rings, ensuring the symmetry is maintained.
* **Utilize Symmetry:** If the mandala has eight identical "petals" branching outward, color all eight of them the exact same shade of blue before moving on to a new color. This maintains the hypnotic, kaleidoscopic effect.
* **Embrace Negative Space:** You do not have to color every single pixel. Sometimes leaving specific geometric rings or shapes pure white provides a brilliant, stark contrast that makes the colored sections pop even harder.
* **Don't Rush:** There is no timer. The entire purpose of the application is the *process* of coloring, not just finishing it quickly. Take your time, experiment with wild color combinations, and undo mistakes freely.`
  },
  {
    title: "One Line",
    seoContent: `![One Line](https://www.htmlgames.com/uploaded/game/thumb800/oneline800x450.webp)

One Line strips the spatial puzzle genre down to its absolute, most mathematically pure and elegantly simple core, delivering a digital adaptation of a deeply complex topological problem (often related to Eulerian paths). Set against a clean, visually minimalist grid that varies wildly in shape—from simple squares to complex, irregular polygons—players are presented with a single starting point. Your objective is intensely focused and brutally unforgiving: you must draw a single, continuous, unbroken line through the grid that physically passes through every single empty cell exactly once. The atmosphere is deeply cerebral and intentionally demanding, requiring an intense level of forward-thinking, spatial visualization, and process of elimination. You cannot lift your "pen," you cannot retrace your steps, and you cannot leave any cell empty. The visual presentation is highly functional, utilizing crisp, neon graphics that track your path, ensuring the complex routing remains perfectly readable. One Line is the ultimate brain-training routine for hardcore logic puzzle fans.

## How to Play
* The primary objective is to fill every single empty cell on the board using one continuous line.
* The game usually provides a designated starting cell (often highlighted).
* Use your \`Mouse\` to click and hold the \`Left Mouse Button\` on the starting cell.
* Drag your mouse to an adjacent cell (up, down, left, or right) to draw the line.
* Continue dragging through the grid, turning corners to navigate the shape.
* **The Golden Rule:** The line CANNOT cross itself, it CANNOT double back over a cell it has already visited, and it MUST pass through every single playable cell on the board.
* If you trap yourself in a corner, release the mouse or hit the undo button to reverse your path.

## Tips and Tricks
* **Work the Perimeter First:** The absolute most common mistake is driving the line straight through the dead center of the puzzle early on. This almost always cuts the board in half, trapping empty cells on the other side. Always try to hug the outer walls and hug the perimeter for as long as possible.
* **Beware the "Choke Points":** Look at the overall shape of the board. Are there two massive areas connected by a single, narrow 1-cell wide hallway? You MUST plan your entire route so that you completely finish one area before passing through that choke point, because you can never go back.
* **The "Dead End" Deduction:** Look for cells that only have ONE possible entrance/exit (like a single cell sticking out of the main block). If a cell only has one connection point, it MUST be the absolute end of your line. You must route your path so you finish in that cell.
* **Snake Mentality:** Think of the line like the classic game of Snake. You must coil the line tightly against itself, filling every nook and cranny systematically, rather than drawing wild, sweeping loops.
* **Work Backwards Mentally:** If a puzzle is incredibly complex, start at the designated beginning, but also mentally trace a path backward from any obvious dead-end cells to see where the two lines must eventually meet in the middle.`
  },
  {
    title: "Hex Link Christmas",
    seoContent: `![Hex Link Christmas](https://www.htmlgames.com/uploaded/game/thumb800/merrychristmas800450.webp)

Hex Link Christmas takes the highly structural, geometric pathfinding mechanics of the classic Onet or Kyodai genre and injects a massive layer of complexity by ripping up the standard square grid and replacing it with a mathematically dense hexagonal honeycomb, all wrapped in a warm, festive holiday aesthetic. Instead of 3D, overlapping pyramids, this game places every single thematic tile (featuring incredibly crisp, high-definition reindeer, Santa hats, ornaments, and gifts) flat on a single-layer hex grid. Your objective is not just to find matching pairs, but to prove that a clear, unobstructed path can physically be drawn between them. The honeycomb structure radically alters the line-of-sight optimization; instead of four directions, you now have six, completely changing how "corners" and pathways are calculated. The atmosphere is deeply engaging, accompanied by cheerful holiday music, requiring intense spatial calculation. Hex Link Christmas is a pure, uncompromising test of geometric routing and visual parsing.

## How to Play
* Your primary objective is to clear the entire flat hexagonal grid by connecting identical pairs of Christmas tiles before the timer runs out.
* Use your \`Mouse\` to click on a tile, then click on a matching tile to attempt a connection.
* **The Golden Pathfinding Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two tiles using a maximum of three straight lines (which means no more than two sharp turns/corners).
* Because it is a hex grid, the lines travel through the flat edges of the hexagons, offering six different angles of movement.
* You can route the path entirely outside the main grid boundary (the empty space surrounding the puzzle).
* If you successfully clear all tiles, you win.

## Tips and Tricks
* **Clear the Perimeter First:** Tiles sitting on the absolute outer edge of the honeycomb are by far the easiest to connect, because their path can route freely through the empty space outside the grid using the two-turn rule. Clear the borders instantly to shrink the board.
* **Understand Hexagonal Turns:** A "turn" on a hex grid is not a sharp 90-degree angle like a square grid. It is a 60-degree or 120-degree bend. You must visualize the path snaking through the flat edges of the honeycombs. A straight line can pass through many hexes.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the dense, congested center of the honeycomb.
* **Don't Tunnel Vision:** If you can't find a path for two specific reindeer tiles, stop looking at them. Scan the entire board for an obvious, free match to keep the timer from running down.
* **Use the Hint Button Sparingly:** If you are truly stuck, use the hint button, but be aware that relying on it prevents you from training your brain to see the complex two-turn hexagonal pathways.`
  },
  {
    title: "Dunk Balls",
    seoContent: `![Dunk Balls](https://www.htmlgames.com/uploaded/game/thumb800/dunkballs800450.webp)

Dunk Balls strips the complex sports simulation genre down to its absolute, most viscerally satisfying and physics-dependent core, delivering a pure, unadulterated test of spatial calculation, reflex timing, and trajectory management. Moving entirely away from team management or chaotic 3D courts, this title embraces a highly stylized, colorful 2D aesthetic. You are not controlling a player; you are directly controlling the environment. Set against a clean, visually minimalist backdrop, a basketball hoop is positioned somewhere on the screen. From various points, basketballs are continuously fired, dropped, or launched into the air. Your objective is intensely focused: you must rapidly draw a physical line (a trampoline or paddle) on the screen to intercept the balls in mid-air, calculating the perfect angle of ricochet to bounce them flawlessly through the hoop. The atmosphere is deeply kinetic; gravity and momentum are constant, unrelenting forces, and you must constantly adapt your angles to the speed of the incoming balls. Dunk Balls is a pure shot of arcade physics.

## How to Play
* The primary objective is to bounce the falling basketballs into the hoop to score points.
* Basketballs will spawn and fall or shoot across the screen.
* Use your \`Mouse\` to click and drag anywhere on the screen to draw a solid, straight line.
* This line acts as a physical barrier/trampoline.
* When a ball hits your drawn line, it will bounce off based on realistic physics (angle of incidence equals angle of reflection).
* You must draw the line at the exact correct angle and position to ricochet the ball directly into the basket.
* You usually only have a limited amount of "ink" to draw lines, or lines disappear after a single bounce, requiring constant, rapid redrawing.

## Tips and Tricks
* **Calculate the Arc:** Do not just draw a flat, horizontal line under a falling ball. A ball dropping straight down onto a flat line will bounce straight back up. You must draw angled lines (like a ramp) to redirect the vertical momentum into horizontal momentum toward the hoop.
* **Use the Walls (The Bank Shot):** In many levels, the hoop is impossible to hit directly. You must draw a line that bounces the ball aggressively into the side wall, calculating the secondary ricochet to guide it into the basket.
* **Steeper is Faster:** A steep, sharply angled line will deflect the ball quickly and maintain its speed. A shallow, nearly flat line will slow the ball down and create a high, lazy arc. Choose the angle based on how far the ball needs to travel.
* **Draw Close to the Ball:** If you draw a massive line across the entire screen, you lose control over exactly where the ball hits it. Draw short, precise lines directly in the immediate path of the ball to guarantee the exact point of impact.
* **Anticipate the Spawns:** In rapid-fire modes, do not wait for the ball to be halfway down the screen before drawing. As soon as you see the spawn point, draw your calculated line immediately.`
  },
  {
    title: "Chinese Freecell",
    seoContent: `![Chinese Freecell](https://www.htmlgames.com/uploaded/game/thumb800/chinesefreecell800450.webp)

Chinese Freecell is an incredibly deep, mathematically rich variation of standard Freecell that fundamentally alters the classic open-information structure, offering a brutal, highly tactical puzzle wrapped in a polished, minimalist aesthetic. While the core objective remains the same—maneuvering cards to build sequences in the foundation piles—the deck is severely modified. Instead of four suits, this game uses a custom deck consisting of only THREE suits. All cards are dealt face-up immediately, arranged into a massive, sprawling tableau. Your objective is elegantly simple yet incredibly unforgiving: you must manage limited empty space to juggle massive stacks. However, the defining feature is the terrifyingly restrictive movement rule on the tableau: you can build downward on ANY color, EXCEPT the exact same suit (e.g., you can put a Red Heart 8 on a Black Spade 9, or a Green Club 9, but NEVER a Red Heart 9). This complete removal of the simple "alternating color" rule requires an entirely new level of sequence planning. Chinese Freecell is an uncompromising test of logic for veteran card players.

## How to Play
* The primary objective is to move all cards into the three foundation piles at the top right, building upward in suit from Ace to King.
* All cards are dealt face-up into the main tableau columns at the start of the game.
* Use your \`Mouse\` to click and drag cards between columns.
* **The Unique Tableau Rule:** You can build cards downward on the tableau on ANY suit, EXCEPT the exact same suit. (e.g., A Heart can go on a Spade or a Club, but a Heart cannot go on a Heart).
* **The Free Cells:** You have open slots at the top left. You can temporarily park any single card into an empty free cell to get it out of the way.
* You can move entire valid sequences of cards, BUT the number of cards you can move at once is strictly limited by the number of empty free cells and empty tableau columns you currently have available.

## Tips and Tricks
* **Protect the Free Cells:** Your free cells are your absolute most valuable resource. Never park a card in a free cell unless you have a concrete, immediate, multi-step plan to get it back out onto the tableau shortly after. A clogged free cell is a death sentence.
* **Empty Columns are Pure Gold:** An empty tableau column is infinitely more valuable than a free cell. It allows you to park entire sequences or start a fresh cascade with a King. Prioritize clearing the shorter columns first to create these spaces.
* **Unearth the Aces Early:** Your entire early game must focus heavily on excavating the three Aces so they can be moved to the foundations. The game cannot progress without them.
* **Embrace the Mixed Suits:** Because you cannot build Heart-on-Heart, you are forced to create massive, mixed-suit cascades on the tableau. You must constantly calculate how to untangle these mixed stacks later to move the cards to the foundations in suit.
* **Calculate the Cascade limit:** If you have 2 free cells open, you can only move a stack of 3 cards. If you try to move a 5-card stack, the game will reject it. Always do the math before committing to a massive shift.`
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
