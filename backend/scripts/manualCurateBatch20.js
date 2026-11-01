const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Water Sort",
    seoContent: `![Water Sort](https://www.htmlgames.com/uploaded/game/thumb800/watersort800450.webp)

Water Sort fundamentally rewrites the rules of the traditional spatial logic puzzle, replacing rigid sliding blocks with a highly tactile, physically simulated fluid dynamic. Set against a clean, visually minimalist laboratory aesthetic, players are presented with a series of glass test tubes, each containing chaotic, horizontally stacked layers of brightly colored liquids. Your objective is intensely focused and heavily reliant on sequence planning: you must pour the liquid between the tubes, strategically separating the chaotic mixtures until every single tube contains only one solid, unified color. The atmosphere is deeply calculating and immensely satisfying, relying entirely on the visual feedback of the liquid physics perfectly settling into place. The visual presentation is exceptionally polished, utilizing vibrant, high-contrast neon colors that pop against the dark background, accompanied by incredibly soothing, ASMR-style water pouring sound effects. Water Sort is a pure, unpressured test of bottleneck management and logistical foresight.

## How to Play
* The primary objective is to sort the mixed liquids so that each individual glass tube holds only one solid color.
* Use your \`Mouse\` to click on a test tube to select it (it will slightly elevate).
* Click on a second test tube to pour the top layer of liquid from the first tube into the second.
* **The Golden Rules:** You can ONLY pour liquid into a tube if it is completely empty, OR if the top layer of liquid in the receiving tube is the EXACT SAME COLOR as the liquid you are pouring.
* You cannot pour liquid if the receiving tube is completely full (usually holding 4 units of liquid).
* The level is successfully completed when all colors are perfectly isolated into their own tubes.

## Tips and Tricks
* **Empty Tubes are Gold:** An entirely empty test tube is your most powerful tool. It is the only place you can legally dump a blocking color to unearth the liquids trapped beneath it. Do everything in your power to clear a tube quickly.
* **Work Backwards:** Look at the liquids trapped at the very bottom of the deepest tubes. If you see three units of blue liquid buried deep, you know you need to establish a dedicated "blue tube" somewhere else to extract them.
* **Don't Bury the Singletons:** If you pour a yellow liquid on top of a red liquid, you have essentially permanently trapped that red liquid until you can find another place to move the yellow. Always try to build homogeneous stacks.
* **Use the "Undo" Button (If Available):** This game heavily punishes impulsive moves. If you make a pour that immediately locks the board, undo it and try the alternate path.
* **Consolidate Early:** If you have two red units in tube A, and two red units in tube B, combine them into a single tube immediately. Consolidation frees up crucial maneuvering space.`
  },
  {
    title: "Bumble Tumble",
    seoContent: `![Bumble Tumble](https://www.htmlgames.com/uploaded/game/thumb800/bumbletumble800450.webp)

Bumble Tumble injects a massive dose of dizzying, centrifugal physics into the highly saturated tile-swapping genre, completely abandoning the static, rectangular grid in favor of a massive, constantly rotating circular wheel. Moving away from standard top-down gravity, this title forces players to manage gravity from the center outward. You are tasked with rotating a massive, chaotic honeycomb of brightly colored bugs, bees, and flowers. When three or more identical icons touch, they merge and vanish, causing the remaining pieces to tumble outward toward the edge of the wheel. The atmosphere is deeply kinetic and immensely satisfying; you are essentially managing a controlled avalanche inside a washing machine. The visual presentation is highly polished, utilizing crisp, vibrant cartoon graphics that remain perfectly readable even when the entire puzzle is spinning at high speeds. Bumble Tumble is a brilliant, uncompromising test of spatial logic and rotational cascade planning.

## How to Play
* The primary objective is to clear all the items from the massive wheel by matching them in groups of three or more.
* You do not click and drag individual pieces to swap them. Instead, you rotate the entire wheel.
* Use the \`Left\` and \`Right\` Arrow keys, or click and drag your \`Mouse\` along the edge of the screen, to physically spin the wheel clockwise or counter-clockwise.
* As the wheel turns, gravity (which pulls outward from the center, or downward depending on the mode) will cause the pieces to tumble and shift positions.
* When three or more identical items physically touch each other during the tumble, they will instantly match and disappear.

## Tips and Tricks
* **Don't Spin Wildly:** The most common mistake is spinning the wheel as fast as possible hoping for random matches. You must be deliberate. Look for two red bugs that are separated by a small gap, and calculate exactly how many degrees you need to turn the wheel to make them fall into each other.
* **Control the Avalanche:** When you make a massive match, the pieces above it will fall violently. Use this to your advantage. Before making a match, look at what will fall into the newly created empty space.
* **Work the Center:** Items stuck in the absolute dead center of the wheel are the hardest to move because they experience the least amount of rotational gravity. Focus on clearing the center early.
* **Use the Momentum:** Sometimes a piece won't fall into a gap if you turn the wheel slowly. Give the wheel a hard, fast spin to use centrifugal force to lodge pieces into tight corners.
* **Look for Clusters:** Scan the wheel for areas where four or five identical items are loosely grouped, but not touching. A simple 45-degree rotation is often enough to collapse them all together.`
  },
  {
    title: "Planet Shooter",
    seoContent: `![Planet Shooter](https://www.htmlgames.com/uploaded/game/thumb800/planetshooter800450.webp)

Planet Shooter delivers the absolute purest, most unadulterated distillation of the legendary arcade-shooter formula, completely replacing the standard, sterile geometric spheres with a vibrant, sci-fi aesthetic of glowing celestial bodies and gas giants. This is the genre exactly as it was meant to be played, but elevated with a cosmic thematic twist: a massive ceiling of brightly colored planets, a single aiming cannon (often styled as a spaceship), and an unrelenting pursuit of massive, structure-collapsing chain reactions. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core shooting mechanic. You are tasked with calculating angles, bouncing shots off the sidewalls, and grouping colors to trigger massive orbital collapses. The visual presentation is highly polished, utilizing crisp, high-definition sprites that pop against the deep black of space. The explosive animations and satisfying audio cues that accompany a board-clearing combo are nothing short of spectacular. Planet Shooter is a pure test of geometric calculation and reflex aiming.

## How to Play
* The primary objective is to clear the entire screen of planets before the ceiling physically lowers and crushes your cannon.
* You control a cannon at the bottom of the screen holding a specifically colored planet.
* Use your \`Mouse\` to aim the trajectory line.
* Click the \`Left Mouse Button\` to fire your planet.
* When your fired planet connects with a cluster of two or more planets of the EXACT SAME color, the entire connected group will pop and disappear.
* If you shoot and fail to make a match a certain number of times, the entire ceiling will shift downward by one row.

## Tips and Tricks
* **Master the Bank Shot:** You cannot always shoot straight. You MUST learn to bounce your planets off the left and right walls to ricochet them into tight, otherwise unreachable gaps near the top of the structure.
* **Sever the Root:** Do not just shoot at the lowest hanging planets. Look for the "structural joints"—small clusters holding up massive, mixed-color chunks below them. If you destroy the joint, the entire massive chunk below it falls instantly.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* planet color. Knowing what you have in reserve completely dictates where you should place your current shot.
* **Don't Build Walls:** If you have a red planet and no red clusters are visible, do not just shoot it directly into the middle of the board, blocking other colors. Shoot it off to the extreme left or right edge to keep the center open.
* **Clear High Colors Completely:** If there are only two Earths left on the entire board, prioritize eliminating them immediately. Once a color is entirely gone, the game will stop generating it in your cannon, drastically increasing your odds.`
  },
  {
    title: "Double Klondike",
    seoContent: `![Double Klondike](https://www.htmlgames.com/uploaded/game/thumb800/doubleklondike800450.webp)

Double Klondike takes the beloved, foundational mechanics of classic solitaire and violently escalates the complexity by doubling the deck, fundamentally altering the scale and duration of the entire experience. Instead of the standard, manageable seven columns, this monumental card game forces players to navigate a massive, sprawling tableau constructed from 104 individual cards. The atmosphere is deeply calculating and demands an extreme level of long-term strategic foresight; what appears to be a simple, obvious maneuver in the early game can easily trigger a catastrophic deadlock an hour later. The visual presentation is highly polished, utilizing crisp, classic playing card graphics set against a traditional green felt backdrop, ensuring perfect readability even when the massive board becomes heavily congested with cascading sequences. Double Klondike is not for the faint of heart; it is an uncompromising, hardcore test of sequence building, suit management, and cascade math, perfect for veteran players who find standard solitaire variants too brief or simplistic.

## How to Play
* The primary objective is to move all 104 cards into the eight foundation piles at the top right, building upward in suit from Ace to King.
* The massive main tableau consists of nine columns where cards must be built downward in alternating colors (e.g., a Red 8 can only be placed on a Black 9).
* Use your \`Mouse\` to click and drag cards between columns. You can move entire sequences of correctly stacked cards.
* Use the stock pile at the top left to draw new open cards when you run out of valid moves on the main board.
* Unlike standard Klondike, because there are two decks, there are two identical copies of every single card.

## Tips and Tricks
* **Attack the Deep End:** Your absolute highest priority in the early game is to unearth the face-down cards buried at the very bottom of the longest columns on the right side of the tableau. Ignore the short columns on the left initially.
* **Empty Columns are Critical:** Because you are playing with two full decks, you will need to move massive sequences of 10 or 15 cards at once. Do everything in your power to clear a column completely, as it acts as a crucial staging ground for Kings.
* **Don't Rush to the Foundations:** Just because you *can* move a Black 5 to the foundation doesn't mean you *should*. Sometimes keeping it on the tableau is necessary to hold a Red 4 that you desperately need for a massive sequence.
* **Build Evenly:** Try to build your eight foundation piles at roughly the same pace. If you push the Spades all the way up to Jack while the Hearts are still on 2, you will severely limit your options on the alternating-color tableau.
* **Manage the Duplicates:** With two decks, you have two identical cards for every rank and suit. If you have a choice of moving a Red 8 onto a Black 9, and there are TWO Black 9s available, look closely to see which 9 is covering the most face-down cards.`
  },
  {
    title: "Find the Odd One Out",
    seoContent: `![Find the Odd One Out](https://www.htmlgames.com/uploaded/game/thumb800/findtheoddout800450.webp)

Find the Odd One Out strips the casual puzzle genre down to its absolute, most fundamentally engaging core, delivering a pure, unadulterated test of rapid pattern recognition and visual acuity. Set against a clean, visually minimalist grid, the game entirely abandons chaotic explosions and stressful arcade mechanics. Instead, you are presented with a massive grid filled with dozens of identical characters, emojis, or shapes. Your objective is elegantly simple yet brutally difficult as the timer ticks down: you must scan the massive crowd and identify the single, solitary item that is slightly different from the rest. The atmosphere is deeply cerebral and intentionally demanding, requiring an intense level of focus to spot a missing pixel, a slightly altered smile, or a shifted color palette. The visual presentation is highly functional, utilizing stark, high-contrast graphics to ensure the grid remains perfectly readable. Find the Odd One Out is the ultimate, timeless brain-training routine for visual scanning.

## How to Play
* The primary objective is to locate the one incorrect or altered image in a massive grid of identical images before the timer expires.
* Use your \`Mouse\` to rapidly scan the grid.
* When you spot the odd one out, click the \`Left Mouse Button\` directly on it.
* If you are correct, you will instantly advance to the next, significantly larger and more difficult grid.
* If you click the wrong item (a misclick), you will usually incur a severe time penalty.

## Tips and Tricks
* **The Magic Eye Technique:** Instead of looking directly at individual characters, try to relax your eyes and look at the "dead space" between them. Sometimes, the subtle differences in a character's silhouette will create a slight visual flicker in your peripheral vision.
* **Don't Scan Randomly:** The most common mistake is darting your eyes all over the screen. You must scan systematically. Read the grid like a book: left to right, top to bottom.
* **Look for Missing Features:** The difference is rarely an added color. It is almost always a *missing* line. A missing eyebrow, a missing button on a shirt, or a missing tooth in a smile. Look for the absence of detail.
* **Step Back:** If you are completely stuck and the timer is running low, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the grid makes the hidden discrepancy suddenly pop out.
* **Trust Your Gut:** Often, your subconscious brain will identify the odd one out a fraction of a second before your conscious brain processes *why* it's different. If your eyes keep getting drawn to a specific corner, click it.`
  },
  {
    title: "ABC Tiles",
    seoContent: `![ABC Tiles](https://www.htmlgames.com/uploaded/game/thumb800/abctiles800450.webp)

ABC Tiles fundamentally rewrites the rules of the massively popular Mahjong tile-matching genre by abandoning the rigid, static removal mechanics in favor of a highly tactical, inventory-management system (often known as the "Tile Master" or "Triple Match" formula). Instead of instantly matching and removing pairs directly on the board, this game places you in control of a sprawling, layered pyramid of lettered and brightly colored tiles. You are tasked with clicking individual tiles to transfer them to a limited holding tray at the bottom of the screen. The objective is to gather exactly three identical tiles in the tray to merge and remove them. The atmosphere is deeply calculating and immensely satisfying; you are essentially managing a constant influx of mismatched inventory, desperately trying to unearth the third 'A' tile buried at the bottom of the pile before your tray overflows. The visual presentation is exceptionally clean, utilizing crisp, contrasting letters that ensure perfect readability. ABC Tiles is a brilliant puzzle experience that trades rapid reflexes for pure spatial logic.

## How to Play
* The primary objective is to completely clear the entire overlapping pile of tiles from the screen.
* Use your \`Left Mouse Button\` to click any fully exposed (unblocked) tile on the board to move it down into your holding tray.
* Your holding tray can only hold a very limited number of tiles (usually 7) at any given time.
* **The Rules of Removal:** When exactly three IDENTICAL tiles (e.g., three 'A' tiles) are placed anywhere in your holding tray, they will instantly merge and be removed, freeing up crucial space.
* The game is immediately over if your tray becomes completely full without forming a valid match of three.

## Tips and Tricks
* **Never Blindly Click:** The absolute most common mistake is clicking every free tile you see just because it's on top. Before clicking a tile, you must mentally confirm that you know where the other two identical tiles are located.
* **Manage Your Tray Space:** Treat your holding tray like pure gold. Never have more than four "unmatched" singleton tiles sitting in your tray at once. Always leave two or three empty slots to dig through the pile for the matches you actually need.
* **Dig for the Third Piece:** If you have two 'B' tiles in your tray, your absolute highest priority is finding the third 'B' to clear them. It is acceptable to temporarily fill your tray with blocking tiles, *provided* that reaching the buried 'B' instantly triggers a clear.
* **Peel the Edges:** Tiles on the absolute outer edges of the pile are generally safer to pull, as they rarely block critical pathways in the dense center.
* **Watch the Shadows:** Pay close attention to the visual layering of the pile to understand exactly which tile is resting on top of another.`
  },
  {
    title: "Connect Dimensions",
    seoContent: `![Connect Dimensions](https://www.htmlgames.com/uploaded/game/thumb800/connect-dimensions-800x450.webp)

Connect Dimensions completely shatters the rules of traditional pathfinding puzzles (like Onet or Kyodai) by ripping the 2D grid off the screen and forcing players to navigate a massive, fully rotatable 3D geometric cluster. You are not just looking at a flat image of tiles; you are actively spinning a floating monolith of glowing, high-tech cubes in three-dimensional space. Your objective is to find matching pairs, but the connections must be drawn through the empty space *surrounding* the 3D structure, strictly adhering to the classic "maximum of two 90-degree corners" rule. The atmosphere is deeply calculating and demands an entirely new level of spatial awareness; you must constantly spin the board to verify line of sight. The visual presentation is exceptionally polished, utilizing crisp, neon-infused sci-fi graphics that ensure the puzzle remains perfectly readable even when rotating rapidly. Connect Dimensions is a brilliant, uncompromising evolution of the matching genre that will break your brain in the best way possible.

## How to Play
* The primary objective is to completely dismantle the floating 3D structure by matching identical cubes.
* Use your \`Mouse\` to click and drag the background to physically rotate the entire 3D puzzle cluster 360 degrees in any direction.
* Click an exposed cube to select it, then click a matching cube to connect them.
* **The Golden Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two cubes through the empty space outside the cluster, using a maximum of three straight lines (two 90-degree corners).
* If a path cannot be drawn without clipping through another cube in the 3D structure, the match is invalid.

## Tips and Tricks
* **Rotate Constantly:** You cannot solve this puzzle by staring at one side. You must constantly spin the structure after every single move to see if your removal unblocked a new cube on the opposite side of the cluster.
* **Clear the Protruding Corners:** Cubes sticking out of the sharpest corners of the 3D structure are the easiest to connect, because their path can route freely through the massive empty space surrounding the puzzle. Clear the sharp edges instantly.
* **Look for the "U" Shape in 3D:** The two-turn rule allows for a perfect "U" shape connection. If two identical cubes are on the same flat plane, but separated by other cubes, check if there is empty space directly above or below both of them to draw the U through the air.
* **Don't Tunnel Vision:** If you can't find a path for two specific cubes, stop looking at them. Spin the board 180 degrees and look for an obvious, free match on the back to keep the board moving.
* **Understand the Hitboxes:** A line cannot graze the corner of another cube. The path must be entirely clear. If the line turns red, spin the board to see exactly which cube is blocking your route.`
  },
  {
    title: "Solitaire Collection 2",
    seoContent: `![Solitaire Collection 2](https://www.htmlgames.com/uploaded/game/thumb800/solitairecollection2800450.webp)

Solitaire Collection 2 serves as the ultimate, definitive anthology for hardcore fans of card-sorting puzzles, offering an unprecedented variety of rule sets housed within a single, highly polished digital interface. Moving far beyond the standard Klondike game included with every PC, this massive compilation provides players with an incredibly diverse set of challenges, ranging from the brutal, open-information logic of Freecell and Spider, to highly obscure, localized variants like Yukon, Scorpion, and Pyramid. The atmosphere is immensely satisfying and highly customizable, allowing you to seamlessly switch between intensely demanding cascade math and relaxing, luck-driven matching sessions. The visual presentation is exceptionally crisp, featuring high-definition traditional card sets that ensure perfect readability regardless of which complex layout you are currently playing. Solitaire Collection 2 is not just a game; it is a comprehensive library of card-based brain-training exercises, guaranteeing hundreds of hours of meticulously designed perfection.

## How to Play
* The primary objective varies entirely depending on which of the many Solitaire variations you select from the main menu.
* **Klondike/Freecell/Spider:** Use your \`Mouse\` to click and drag cards between columns, building sequences based on alternating colors or matching suits.
* **Pyramid/TriPeaks:** Click exposed cards to match them mathematically (adding to 13) or sequentially (one higher/one lower) to remove them from a static structure.
* Each specific game mode features a built-in "?" or "Help" button. ALWAYS click this before starting a new variation to understand the specific rules of sequence building and removal.

## Tips and Tricks
* **Read the Rules:** Because this is a collection, the rules change drastically between games. Do not assume you know how to play. A valid move in Klondike might be an illegal move in Yukon.
* **Freecell - Protect the Cells:** Your free cells are your most valuable resource. Never park a card in a free cell unless you have a concrete, multi-step plan to get it back out onto the tableau shortly after.
* **Spider - Empty Columns:** An empty column in Spider Solitaire is the most powerful tool in the game. It allows you to temporarily park massive sequences of cards to unearth the face-down cards buried beneath them.
* **Pyramid - Dig Evenly:** Do not drill a deep hole down one specific side of the pyramid. Try to peel cards away evenly across the entire structure to maximize exposed cards.
* **Use the Undo Button:** Many of the harder variations in this collection are mathematically unwinnable if you make a single wrong move. Use the undo button to scout paths before committing.`
  },
  {
    title: "Escape Room - Home Escape",
    seoContent: `![Escape Room - Home Escape](https://www.htmlgames.com/uploaded/game/thumb800/escaperoom-homeescape800450.webp)

Escape Room - Home Escape strips the immensely popular physical adventure room format down to a brilliant, highly atmospheric point-and-click digital experience. You wake up trapped inside a seemingly normal, beautifully furnished modern house. The doors are locked, the windows are sealed, and the environment is littered with cryptic clues, locked safes, and bizarre mechanical contraptions. Your objective is intensely focused: meticulously explore every single inch of the 3D rendered rooms, gather inventory items, combine them in logical (and sometimes illogical) ways, and solve a cascading series of logic puzzles to find the final key and escape. The atmosphere is deeply engaging and slightly tense, relying entirely on your ability to connect disparate pieces of visual information across multiple rooms. The visual presentation is highly polished, utilizing crisp, realistic lighting and textures that ensure critical clues aren't unfairly hidden in pixelated shadows. Escape Room - Home Escape is a pure, uncompromising test of lateral thinking and deduction.

## How to Play
* The primary objective is to unlock the main front door and escape the house.
* Use your \`Mouse\` to click around the environment. Clicking objects allows you to inspect them closely, open drawers, or interact with keypads.
* Collect items by clicking on them. They will be stored in your inventory bar at the side or bottom of the screen.
* Click an item in your inventory to select it, then click on something in the environment to use it (e.g., use a key on a locked cabinet).
* You can often combine two items in your inventory by clicking one and then clicking the other (e.g., combine a battery with a flashlight).
* Use the navigation arrows on the edges of the screen to move between different rooms in the house.

## Tips and Tricks
* **Click EVERYTHING:** This is the golden rule of escape games. If a book looks slightly out of place, click it. If a painting has a weird smudge, click it. If a plant has an odd leaf, click it. Leave absolutely no stone unturned.
* **Write Things Down:** Keep a physical piece of paper next to your keyboard. If you see a sequence of colors on a painting (Red, Blue, Green, Yellow), write it down instantly. You will absolutely need that code for a padlock three rooms away.
* **Examine Your Inventory:** Most games allow you to double-click an item in your inventory to view it up close. A standard screwdriver might have a microscopic serial number carved into the handle that you need to unlock a safe.
* **Think Laterally:** If you need to unscrew a vent, but you don't have a screwdriver, look at your inventory. A thin silver coin or a sturdy butter knife will often serve the exact same mechanical purpose.
* **Retrace Your Steps:** If you solve a puzzle and obtain a strange gear, immediately walk back through every single room in the house looking for a machine that was previously missing a gear.`
  },
  {
    title: "The Watermelon Game",
    seoContent: `![The Watermelon Game](https://www.htmlgames.com/uploaded/game/thumb800/thewatermelongame800450.webp)

The Watermelon Game (often known globally as Suika Game) is an absolute viral phenomenon that brilliantly fuses the mathematical merging logic of 2048 with the chaotic, physics-driven physics of a claw machine. Set against a bright, ridiculously cute pastel aesthetic, players are tasked with dropping a constant stream of anthropomorphic fruits (cherries, strawberries, apples) into a confined glass box. The core mechanic is elegantly simple: when two identical fruits physically touch, they instantly merge and evolve into the next, significantly larger fruit in the evolutionary chain. The ultimate objective is to merge enough fruits to create the massive, board-filling Watermelon. The atmosphere is immensely satisfying but quickly devolves into frantic panic as the box fills up. The physics engine is the true star here; fruits are perfectly round, meaning they roll, bounce, and violently push each other around the box, completely ruining your carefully laid plans. The Watermelon Game is a masterpiece of unpredictable, physics-based puzzle design.

## How to Play
* The primary objective is to survive as long as possible and score maximum points by merging fruits, ultimately creating a Watermelon.
* A cute cloud at the top of the screen holds the next fruit to be dropped.
* Use your \`Mouse\` to move the cloud horizontally across the top of the box.
* Click the \`Left Mouse Button\` to drop the fruit into the box below.
* When two identical fruits (e.g., two cherries) physically collide, they instantly merge into the next largest fruit (e.g., a strawberry).
* The game is instantly over if the pile of fruit physically crosses the dotted "game over" line at the top of the box.

## Tips and Tricks
* **Keep the Big Fruits at the Bottom:** Your absolute highest priority is ensuring your largest, heaviest fruits (apples, peaches, melons) stay anchored near the bottom corners of the box. Never drop a tiny cherry directly in front of a massive melon, blocking it forever.
* **Build Sequential Clusters:** Try to keep your fruits organized sequentially. If your biggest fruit is an apple, try to build a peach right next to it, and a strawberry next to that. When you finally trigger a merge, the physical expansion will trigger a domino effect.
* **Use Force and Wedges:** Because the fruits are round, you can use physics to your advantage. If two apples are *almost* touching, dropping a heavy fruit directly between them can act as a wedge, forcing them apart and shifting the entire pile.
* **Look Ahead:** Always pay attention to the "Next Fruit" indicator. Knowing what is coming next completely dictates where you should drop your current fruit.
* **Don't Rush the Drop:** The physics engine takes a long time to settle. Do not rapidly spam-click drops. Wait for the pile to completely stop rolling and bouncing before committing your next piece, or it will bounce into the wrong spot.`
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
