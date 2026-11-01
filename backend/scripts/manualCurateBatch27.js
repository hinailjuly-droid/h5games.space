const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Thieves of Egypt Solitaire",
    seoContent: `![Thieves of Egypt Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/thievesofegyptsolitaire-800x450.webp)

Thieves of Egypt Solitaire is a brilliant, highly complex double-deck variation of Forty Thieves that fundamentally alters the classic tableau structure, offering an incredibly deep, mathematically rich card-sorting puzzle wrapped in an immersive historical aesthetic. Instead of the massive, flat rows of standard Forty Thieves, this title deals its massive 104-card deck into an Egyptian pyramid-shaped tableau, meaning you start with a massive amount of face-up cards, but the column sizes vary wildly. Your objective is elegantly simple yet brutally difficult in execution: you must move all 104 cards into eight foundation piles, building upwards from Ace to King by suit. The atmosphere is deeply calculating and intensely strategic, requiring players to constantly weigh the benefits of moving a card against the risk of permanently burying a crucial Ace. The visual presentation is highly polished, utilizing crisp, custom-designed playing cards featuring pharaohs and hieroglyphs that ensure perfect readability even when the massive double-deck is fully deployed. It is an uncompromising test of sequence planning and column management.

## How to Play
* The primary objective is to move all 104 cards into the eight foundation piles at the top right, building upward in suit from Ace to King.
* The main tableau consists of ten columns in a pyramid formation. You can build cards downward on the tableau in **alternating colors** (e.g., a Red 8 onto a Black 9).
* Use your \`Mouse\` to click and drag cards between columns.
* **The Movement Rule:** You can move entire sequences of cards together, provided the sequence is built correctly in alternating colors.
* You can only move a King (or a valid sequence starting with a King) into an empty tableau column.
* Use the draw pile (stock) at the top left to deal new cards when you run out of moves. You can usually only pass through the draw pile a limited number of times.

## Tips and Tricks
* **Empty Columns are Crucial:** Unlike standard Forty Thieves where empty columns can hold anything, here they only hold Kings. However, this is vital for moving massive stacks out of the way. Prioritize clearing the shorter columns on the edges of the pyramid first to create these King-spaces.
* **Build Long Sequences:** Because you can move entire valid stacks (unlike strict Forty Thieves), do not be afraid to build massive, 12-card-long alternating sequences on the tableau to keep cards organized while you hunt for Aces.
* **Prioritize the Foundations:** If you can move a card to the foundation, do it immediately. The only exception is if keeping a 4 of Hearts on the board allows you to move a massive stack of cards off a buried Ace.
* **Watch Your Draw Pile Limit:** Pay very close attention to how many times you are allowed to deal through the draw pile. If it's a one-pass game, you must be incredibly conservative and exhaust every single possible tableau move before drawing.
* **Dig for the Aces:** Your entire early game must be focused laser-like on locating and freeing the eight Aces. The game cannot progress without them.`
  },
  {
    title: "Puzzle Drop - Egypt",
    seoContent: `![Puzzle Drop - Egypt](https://www.htmlgames.com/uploaded/game/thumb800/puzzledropegypt800450.webp)

Puzzle Drop - Egypt fundamentally rewrites the rules of the traditional jigsaw puzzle format, abandoning the slow, methodical edge-sorting of physical cardboard in favor of a highly kinetic, gravity-driven digital grid. Set against a series of stunning, high-definition photographs of ancient pyramids, the Sphinx, and bustling desert bazaars, the game takes a perfect image and slices it into vertical columns. Your objective is intensely focused: you are presented with missing puzzle pieces at the top of the screen, and you must accurately drop them into their correct columns before the timer expires. The atmosphere is deeply calculating and immensely satisfying; you aren't just looking for matching colors, you are actively unscrambling a visual matrix while fighting gravity. The visual presentation is exceptionally clean, utilizing a stark grid that forces you to rely entirely on the subtle visual textures of the photograph—a carved hieroglyph here, a shadow on the sand there—to determine correct placement. Puzzle Drop is a pure, fast-paced test of spatial reconstruction and visual memory.

## How to Play
* The primary objective is to fully reconstruct the high-definition Egyptian photograph by dropping the missing pieces into the correct slots.
* The main image has several missing vertical columns.
* A puzzle piece will appear at the top of the screen.
* Use your \`Mouse\` to click the piece, drag it horizontally over the correct empty column, and release the \`Left Mouse Button\` to drop it.
* If you drop the piece into the correct column, it will lock into place.
* If you drop it into the wrong column, it will bounce back or incur a time penalty.
* The puzzle is complete when every single piece is in its correct original location.

## Tips and Tricks
* **Look for High Contrast Lines:** The easiest pieces to place are those containing sharp, contrasting straight lines, like the edge of a pyramid against the blue sky, or the horizon line of the desert. Match these obvious lines first.
* **Use the Reference Image (If Available):** If the game provides a button to view the completed photograph, use it constantly! Use the reference image to identify exactly where a specific cluster of palm trees or a colorful artifact belongs.
* **Sort by Gradient:** If you are staring at three pieces of blue sky, look at the color gradient. The sky is usually lighter near the horizon and darker near the top of the frame. Use this subtle shading to determine placement.
* **Don't Panic Drop:** While there is a timer, wildly dropping pieces into random slots to see what sticks will quickly result in failure. Take three seconds to actually analyze the piece before moving it.
* **Focus on the Edges:** Pieces that contain the absolute hard border of the image (like a solid black line on the side) are instantly identifiable. Drop those into the far left or far right columns immediately.`
  },
  {
    title: "Christmas Merge",
    seoContent: `![Christmas Merge](https://www.htmlgames.com/uploaded/game/thumb800/christmasmerge800450.webp)

Christmas Merge injects a massive dose of holiday cheer into the highly addictive, mathematical puzzle genre, replacing sterile numbers or abstract shapes with beautifully illustrated, festive iconography. Set against a cozy, snow-dusted grid, players are tasked with managing a board filled with brightly colored ornaments, candy canes, stockings, and wrapped presents. Instead of swiping the entire board or swapping adjacent tiles, you must physically draw a line to connect three or more identical items. When connected, they merge into a single, higher-tier holiday item (e.g., three candy canes merge into a stocking). The atmosphere is deeply relaxing and immensely satisfying, accompanied by cheerful, ambient holiday music. The visual presentation is highly polished, utilizing crisp, high-definition sprites that sparkle with magical snow when merged. Christmas Merge is a pure, unpressured test of sequence planning and inventory management, requiring you to carefully build massive chains without cluttering the board.

## How to Play
* The primary objective is to fulfill specific collection goals (e.g., create 3 Christmas Trees) before running out of moves or space.
* Use your \`Mouse\` to click and hold the \`Left Mouse Button\` on a holiday item.
* Drag your mouse across adjacent identical items (horizontally, vertically, or diagonally) to draw a connecting line.
* You must connect at least THREE identical items to trigger a merge.
* Release the mouse button to merge the connected items into a single, upgraded item at the location of the *last* item in your chain.
* **The Upgrade Path:** Items follow a strict evolutionary path (e.g., Ornament -> Candy Cane -> Stocking -> Present -> Tree).

## Tips and Tricks
* **Control the Merge Point:** The absolute most critical mechanic in this game is understanding that the new, upgraded item spawns exactly where you *release* your mouse click. Always end your chain in a strategic location (usually an open corner) to avoid trapping the new item.
* **Build Massive Chains:** While three items are required to merge, connecting five, seven, or ten items simultaneously often yields massive bonus points and sometimes spawns powerful board-clearing bombs. Never settle for three if you can connect five.
* **Keep High Tiers Together:** Try to build your highest-tier items (like Presents or Trees) next to each other. If you randomly spawn a Present in the top left corner, and another Present in the bottom right, it will be incredibly difficult to eventually merge them.
* **Clear the Clutter:** If the board is filling up with low-tier ornaments that you don't need, use a few moves to merge them just to get them out of the way and free up physical space on the grid.
* **Plan Ahead:** Before you execute a merge, look at what the new item will be. Will that new item immediately sit next to two other identical items, allowing for a rapid, secondary combo?`
  },
  {
    title: "Speed Directions",
    seoContent: `![Speed Directions](https://www.htmlgames.com/uploaded/game/thumb800/speeddirections800450.webp)

Speed Directions strips the endless runner genre down to its absolute, most viscerally satisfying core, delivering a pure, unadulterated test of split-second reflex timing and spatial anticipation. Moving entirely away from complex combat mechanics or sprawling 3D environments, this title embraces a highly stylized, minimalist isometric aesthetic. You are placed in control of a geometric avatar hurtling forward at high speeds along a narrow, zig-zagging, elevated pathway suspended in a void. Your objective is intensely focused: navigate the sharp, 90-degree corners by instantly clicking to change your direction of travel. The atmosphere is deeply kinetic; gravity and momentum are constant threats, and the screen is perpetually pushing you forward, forcing you to constantly react to incoming turns with pixel-perfect precision. The visual presentation is highly polished, utilizing a vibrant, high-contrast style that ensures the incoming corners are perfectly readable against the background, even when the running speed reaches blistering levels. Speed Directions is a pure shot of arcade adrenaline.

## How to Play
* The primary objective is to survive as long as possible on the winding path, racking up a massive high score by collecting gems or simply traveling distance.
* Your avatar moves forward automatically at a constant, high speed.
* The path consists entirely of straight lines and sharp 90-degree corners (left or right).
* Click the \`Left Mouse Button\` or tap the screen to instantly change your avatar's direction by 90 degrees.
* You must time your clicks perfectly to turn exactly when your avatar reaches the corner.
* If you click too early, you will turn off the edge of the path. If you click too late, you will run straight off the edge. Falling means instant death.

## Tips and Tricks
* **Look at the Horizon, Not Your Avatar:** Your eyes should never be focused on the avatar itself. Your eyes should be permanently glued to the absolute furthest visible point on the pathway. You must identify the incoming corners seconds before you reach them.
* **Find the Rhythm:** The corners are often spaced out in rhythmic patterns (e.g., left, right, left, right... or left, left, right). Try to get into a flow state, tapping to the beat of the turns rather than just reacting visually.
* **Don't Panic Click:** The most common cause of death is seeing a tight zig-zag, panicking, and rapidly double-clicking, causing you to turn twice and run off the board. One deliberate, calculated click per corner.
* **Stay Calm During Speed Boosts:** As you progress, the avatar will inevitably speed up. Do not tense your hand. Keep your clicking finger relaxed to ensure your timing doesn't become erratic.
* **Ignore the Collectibles:** If a glowing gem is placed dangerously close to the absolute edge of a corner, DO NOT risk your run to collect it unless you are a master. Prioritize staying on the path above all else.`
  },
  {
    title: "Christmas Dimensions",
    seoContent: `![Christmas Dimensions](https://www.htmlgames.com/uploaded/game/thumb800/christmas-dimensions-800x450.webp)

Christmas Dimensions completely shatters the rules of traditional pathfinding puzzles (like Mahjong Solitaire) by ripping the 2D grid off the screen and forcing players to navigate a massive, fully rotatable 3D geometric cluster wrapped in a cozy holiday aesthetic. You are not just looking at a flat image of tiles; you are actively spinning a floating monolith of glowing, high-tech cubes featuring snowmen, reindeer, baubles, and gingerbread men in three-dimensional space. Your objective is to find matching pairs, but the connections rely on 3D spatial awareness rather than simple top-down unblocking. The atmosphere is deeply calculating and demands an entirely new level of spatial awareness; you must constantly spin the board to verify which blocks are truly "free" on their sides. The visual presentation is exceptionally polished, utilizing crisp, festive graphics and soft lighting that ensures the puzzle remains perfectly readable even when rotating rapidly. Christmas Dimensions is a brilliant, uncompromising evolution of the matching genre for the holiday season.

## How to Play
* The primary objective is to completely dismantle the floating 3D holiday structure by matching identical cubes before the timer expires.
* Use your \`Mouse\` (or arrow keys) to physically rotate the entire 3D puzzle cluster 360 degrees in any direction.
* Click an exposed cube to select it, then click a matching cube to instantly eliminate both.
* **The 3D Golden Rule:** A cube is strictly considered "free" and clickable ONLY if it has at least TWO of its adjacent sides completely exposed to empty air. (Top and bottom usually do not count; focus on the four vertical sides).
* If a cube is wedged between other blocks on three sides, it cannot be selected.

## Tips and Tricks
* **Rotate Constantly:** You cannot solve this puzzle by staring at one side. You must constantly spin the structure after every single move to see if your removal unblocked a new cube on the opposite side of the cluster.
* **Clear the Protruding Corners:** Cubes sticking out of the sharpest corners of the 3D structure are the easiest to connect, because they naturally have three or four sides exposed to empty air. Clear the sharp edges instantly.
* **Work from the Outside In:** Do not try to drill a hole into the dead center of the 3D cluster. You must peel the structure like an onion, removing the outermost layer of cubes entirely before moving inward.
* **Don't Tunnel Vision:** If you can't find a match for a specific snowman cube, stop looking at it. Spin the board 180 degrees and look for an obvious, free match on the back to keep the timer from running down.
* **Use the Reshuffle (If Available):** If the board is massive and you are completely lost, use the shuffle button to scramble the remaining cubes. It often reveals obvious matches that were previously hidden inside the structure.`
  },
  {
    title: "Santa Tripeaks",
    seoContent: `![Santa Tripeaks](https://www.htmlgames.com/uploaded/game/thumb800/santatripeaks800450.webp)

Santa Tripeaks takes the immensely popular, rapid-fire mechanics of Tri-Peaks Solitaire and transports players to a cozy, snow-covered winter wonderland. Moving entirely away from the sterile casino aesthetics of standard Klondike, this title sets its massive, multi-peaked card structures against beautiful illustrations of glowing fireplaces, pine trees, and Santa's workshop. The objective abandons complex alternating-color rules in favor of a lightning-fast, sequential matching system: you simply click exposed cards that are exactly one value higher or lower than your current active card. The atmosphere is deeply relaxing yet inherently fast-paced, accompanied by cheerful, ambient holiday music. The visual presentation is highly polished, utilizing crisp, custom-designed playing cards featuring elves, reindeer, and presents that ensure perfect readability even when the massive peaks are heavily congested. It is the ultimate, timeless relaxation tool for card players who prefer rapid sequencing over slow, methodical tableau building.

## How to Play
* The primary objective is to clear all the cards from the massive overlapping peaks on the board.
* You have a single face-up "active" card at the bottom of the screen next to your draw pile.
* Use your \`Left Mouse Button\` to click any fully exposed card on the peaks that is exactly ONE value higher or ONE value lower than your active card.
* **Examples:** If your active card is an 8, you can click a 7 or a 9. Suit and color do not matter at all.
* **The Ace Loop:** Kings connect to Aces, and Aces connect to 2s. (e.g., King -> Ace -> 2 -> 3).
* A card is strictly considered "exposed" only if there is absolutely no other card resting on top of it.
* If you have no valid moves on the board, click the face-down draw pile to reveal a new active card.

## Tips and Tricks
* **Plan Your Chains:** Do not just click the first valid card you see. Look at the board and map out a massive combo chain. If your active card is a 5, and the board has a 6, 7, 8, 7, 6... you can clear all five of those cards in one continuous sweep without drawing.
* **Dig Evenly:** Try to dismantle the multiple peaks at roughly the same pace. If you completely destroy the left peak while the right peak is still untouched, you severely limit your options later in the game.
* **Uncover the Hidden Cards:** If you have a choice between playing an exposed 7 that doesn't unlock anything, or a different exposed 7 that uncovers two face-down cards beneath it, ALWAYS choose the one that reveals more information.
* **Save Your Draw Cards:** Exhaust absolutely every single possible sequence on the main board before you click the draw pile. Your draw pile is your lifeline; wasting it early is a guaranteed loss.
* **The "Undo" Button (If Available):** Use it strategically! If you break a massive combo by clicking the wrong 9, undo the move and correct your sequence.`
  },
  {
    title: "Bubble Buster",
    seoContent: `![Bubble Buster](https://www.htmlgames.com/uploaded/game/thumb800/bubblebuster800450.webp)

Bubble Buster delivers the absolute purest, most unadulterated distillation of the legendary arcade-shooter formula, completely stripping away the bloated narratives, unnecessary mini-games, and complex meta-progression that plague modern iterations of the genre. This is the genre exactly as it was meant to be played: a massive ceiling of brightly colored spheres, a single aiming cannon, and an unrelenting pursuit of massive, structure-collapsing chain reactions. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core shooting mechanic. You are tasked with calculating angles, bouncing shots off the sidewalls, and grouping colors to trigger massive structural collapses before the weight of the bubbles crushes you. The visual presentation is highly polished, utilizing crisp, high-definition sprites that pop with color against the simple background. The explosive animations and satisfying audio cues that accompany a board-clearing combo are nothing short of spectacular, providing a constant dopamine drip. Bubble Buster is a pure, uncompromising test of geometric calculation and reflex aiming.

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
    title: "Sort Bubbles",
    seoContent: `![Sort Bubbles](https://www.htmlgames.com/uploaded/game/thumb800/sortbubbles800450.webp)

Sort Bubbles fundamentally strips the spatial logic genre down to its absolute, most visually pleasing and elegantly simple core, delivering a digital adaptation of the viral "Water Sort" puzzle genre but utilizing stacked colored spheres instead of liquid. Set against a clean, visually minimalist laboratory aesthetic, players are presented with a series of glass test tubes. Inside these tubes are brightly colored bubbles, chaotic and mixed together. Your objective is intensely focused and heavily reliant on sequence planning: you must transfer the bubbles between the tubes, strategically stacking and unstacking them, until every single tube contains only ONE specific color of bubble (or is completely empty). The atmosphere is deeply calculating and immensely satisfying, relying entirely on your ability to visualize the cascading consequences of moving a single sphere. The visual presentation is highly functional, utilizing crisp, high-contrast neon bubbles that ensure the stacks are perfectly readable. Sort Bubbles is a pure, unpressured test of logistical foresight.

## How to Play
* The primary objective is to sort the chaotic mixed bubbles so that each test tube contains four bubbles of the exact same color.
* Use your \`Mouse\` to click on a test tube to select the top-most bubble.
* Click on a second test tube to drop the bubble into it.
* **The Golden Rule:** You can ONLY drop a bubble into a new tube if that tube is either completely empty, OR if the top-most bubble currently in that tube is the EXACT SAME COLOR as the one you are holding.
* You cannot drop a red bubble on top of a blue bubble.
* A tube can usually only hold a maximum of four bubbles.

## Tips and Tricks
* **Find the Empty Tube:** Your absolute most valuable resource in this game is an empty test tube. Never fill an empty tube with a random color unless it is part of a calculated sequence. Empty tubes act as crucial pivot points for shifting massive stacks.
* **Consolidate Colors Early:** If you see a blue bubble sitting on top of a stack, and another tube has a blue bubble on top, move them together immediately. Reducing the number of scattered singletons cleans up the board visually and frees up space underneath them.
* **Don't Trap the Bottom Colors:** Before you fill a tube with three red bubbles, look at the very bottom bubble in that tube. If it's a green bubble, and you desperately need green, you have just buried it under a massive red wall.
* **Think Three Moves Ahead:** Do not just blindly move bubbles because they match. Think: "If I move this yellow one here, it exposes the pink one, which I can then move over there, which frees up the empty tube."
* **Restart Without Penalty:** This is a game of pure logic. If you get confused and the tubes are completely deadlocked, hit the restart button immediately. It is often faster to start the sequence over than to try and salvage a messy board.`
  },
  {
    title: "Funfair Mysteries",
    seoContent: `![Funfair Mysteries](https://www.htmlgames.com/uploaded/game/thumb800/funfairmysteries800450.webp)

Funfair Mysteries is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly chaotic core. Forget convoluted detective storylines or messy urban apartments; this title is a pure, unadulterated shot of visual immersion focused entirely on acute observation within the bright, overwhelming environment of a traveling carnival. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing towering Ferris wheels, striped circus tents, glowing arcade cabinets, and scattered prizes. Your objective is elegantly simple: locate the subtle, thematic items expertly blended into the neon-lit environment. The atmosphere is intoxicatingly rich and incredibly nostalgic, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, colorful balloons, and complex machinery. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy stuffed animal and cracked mirror is rendered with breathtaking clarity. 

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of the carnival scene.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden objects before the strict time limit expires to advance deeper into the funfair.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the prize counter) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A wrench might be tinted pink to blend into a cloud of cotton candy.
* **Check the Shadows:** The developers love hiding dark objects inside the deep shadows of the roller coaster tracks, underneath ticket booths, or inside unlit tents. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a teddy bear, you will accidentally spot the hidden magnifying glass.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Daily Worms",
    seoContent: `![Daily Worms](https://www.htmlgames.com/uploaded/game/thumb800/daily-worms-800x450.webp)

Daily Worms strips the spatial puzzle genre down to its absolute, most mathematically pure and elegantly simple core, delivering a digital adaptation of the classic "Eulerian path" problem, but heavily modified by a strict geometric constraint. Set against a clean, visually minimalist grid, players are presented with a series of empty cells. Your objective is intensely focused: you must draw a single, continuous line (the "worm") through the grid, crossing every single cell exactly once. However, unlike standard connect-the-dots games, Daily Worms introduces a brutal rule: the path MUST change direction exactly once inside every single cell it visits. The atmosphere is deeply cerebral and intentionally demanding, requiring an intense level of forward-thinking and topological visualization. The visual presentation is highly functional, utilizing stark, high-contrast graphics that ensure the complex geometric rules remain perfectly readable. Daily Worms is the ultimate, timeless brain-training routine for route optimization and spatial logic, offering fresh puzzles daily.

## How to Play
* The primary objective is to draw a continuous path that passes through every single empty square on the grid exactly once.
* Use your \`Mouse\` to click on a starting square and hold the \`Left Mouse Button\` down.
* Drag your mouse to draw the solid line through the adjacent squares.
* **The Golden Turn Rule:** You cannot draw a straight line straight through a square. When your line enters a square, it MUST make a 90-degree turn before exiting that square. Every square must contain a corner of the path.
* You CANNOT draw over a line you have already created.
* If you get stuck or trap yourself in a dead end, simply release the mouse or click a "reset" button to clear the lines and try again.

## Tips and Tricks
* **Work the Perimeter First:** The easiest squares to navigate are the ones located on the absolute outer edges or extreme corners of the grid. Because they are bordered by solid walls, they mathematically restrict the number of possible entry and exit angles. Fill the borders first.
* **Identify the Bottlenecks:** Look for areas of the grid that are only connected to the rest of the puzzle by a single square (a chokepoint). You must carefully plan how you enter and exit that bottleneck, as you cannot turn around once inside.
* **Visualize the Turns:** Do not just draw blindly. If you enter a square from the left, you MUST exit from the top or bottom. This immediately dictates what the next square in the sequence will be. Mentally project the alternating turns.
* **Don't Trap the Dead Ends:** If you see a square that only has one viable entry point left, you must make that square the absolute end of your entire path.
* **Trace Mentally First:** Do not just start wildly clicking and dragging. Spend 10 seconds tracing the route with your eyes, ensuring every single square contains a 90-degree turn, before committing to drawing.`
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
