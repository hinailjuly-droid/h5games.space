const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Goblin's Treasure Match",
    seoContent: `![Goblin's Treasure Match](https://www.htmlgames.com/uploaded/game/thumb800/goblins-treasure-match-800x450.webp)

Goblin's Treasure Match injects a massive dose of fantasy adventure into the highly competitive tile-swapping genre, delivering a visual feast of shiny loot and intensely satisfying combination mechanics. Stepping entirely away from generic, sterile gem-swapping, this title embraces a highly thematic approach, requiring players to physically align glowing gold coins, rubies, enchanted axes, and magical potions. The atmosphere is undeniably engaging, perfectly capturing the frantic, greedy energy of a goblin hoarding treasure in a dark, flickering cave. Every level is a meticulously designed heist, presenting specific objective quotas (like collecting 40 blue diamonds or breaking stone blocks) that must be met within a strict move limit. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition sprites that crackle with magical energy when linked together. It is a pure, unadulterated test of spatial planning, cascade optimization, and high-speed looting.

## How to Play
* The core mechanic revolves around swapping adjacent treasure items to create horizontal or vertical lines of three or more identical objects.
* Use your \`Mouse\` to click on an item, then click an adjacent one to swap their positions, or simply click and drag.
* Your objective is to fulfill specific collection goals displayed at the top of the screen before you run out of allowed moves.
* Matching exactly four items creates a glowing, line-clearing bomb that obliterates an entire row or column.
* Matching five items in an L or T shape creates a devastating area-of-effect dynamite barrel.
* Matching five items in a straight row creates a magical amulet that instantly collects all items of a specific type from the board.

## Tips and Tricks
* **Prioritize the Quota:** It is incredibly easy to get distracted by a massive chain of green emeralds, but if your objective only requires gold coins, you are wasting a precious move. Focus laser-like on the goal.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading treasures dropping from the ceiling, often resulting in free, accidental combos as the hoard settles.
* **Combine the Power-Ups:** The most devastating move in the game is swapping two power-ups with each other. Swapping a line-clear with a barrel bomb creates a massive, cross-shaped explosion that clears half the cave instantly.
* **Save the Amulets:** Do not use the five-in-a-row amulet immediately. Save it until you desperately need to collect a specific item to meet your quota, or wait to combine it with another power-up for a board-wiping effect.
* **Analyze the Rock Barriers:** Pay close attention to the shape of the board. Some levels have unmovable stone blocks. Focus on making matches adjacent to the stone to break those barriers early and open up the board.`
  },
  {
    title: "Black and White Mahjong 3",
    seoContent: `![Black and White Mahjong 3](https://www.htmlgames.com/uploaded/game/thumb800/blackandwhitemahjong3800450.webp)

Black and White Mahjong 3 completely revolutionizes the foundational mechanics of traditional tile-matching by introducing a brilliant, highly restrictive dual-color system that forces players to completely rewire how they scan the board. Moving away from simply finding two identical tiles, this game demands that you match one BLACK tile with one WHITE tile of the exact same symbol. This simple ruleset change violently escalates the difficulty; staring at two identical white bamboo tiles does you absolutely no good if the black version is buried. The atmosphere is deeply calculating and immensely satisfying, spread across a staggering 300 meticulously designed levels. The visual presentation is exceptionally clean, utilizing stark, high-contrast monochrome tiles set against minimalist backgrounds, ensuring that the critical difference between positive and negative space is instantly recognizable even when the 3D structures become incredibly dense and complex. It is a masterpiece of puzzle design constraints.

## How to Play
* Your objective is to completely clear the entire screen by matching pairs of tiles.
* **The Core Rule:** You MUST match one White tile with one Black tile containing the exact same symbol. You cannot match White with White, or Black with Black.
* Use your \`Left Mouse Button\` to select a "free" tile, then click its opposite-colored twin to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* If you run out of valid, opposite-color matches, the game is over.

## Tips and Tricks
* **Scan for the Opposite:** Train your eyes to stop looking for "twins." If you see an exposed White Dragon on the edge of the board, immediately begin scanning the *interior* of the structure specifically for the Black Dragon.
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves, especially when color parity is required.
* **Manage Color Parity:** If the board has six exposed White tiles and only two exposed Black tiles, you are in extreme danger of a deadlock. Focus your matches entirely on uncovering more Black tiles to balance the board.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Use Level Select (If Available):** With 300 levels, do not get frustrated if one specific layout breaks you. Use the level select to try a different structure and return to the hard one later with a fresh perspective.`
  },
  {
    title: "Easter Island Solitaire",
    seoContent: `![Easter Island Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/easterislandsolitaire800450.webp)

Easter Island Solitaire takes the immensely popular, rapid-fire mechanics of Tri-Peaks and transports players to one of the most enigmatic and visually stunning locations on Earth. Moving entirely away from the sterile casino aesthetics of standard Klondike, this title sets its massive, three-peaked card structures against beautiful, high-definition illustrations of the iconic Moai statues at sunset. The objective abandons complex alternating-color rules in favor of a lightning-fast, sequential matching system: you simply click exposed cards that are exactly one value higher or lower than your current active card. The atmosphere is deeply relaxing yet inherently fast-paced, accompanied by the ambient sounds of ocean waves and island winds. The visual presentation is highly polished, utilizing crisp, custom-designed playing cards that ensure perfect readability even when the massive peaks are heavily congested. It is the ultimate, timeless relaxation tool for card players who prefer rapid sequencing over slow, methodical tableau building.

## How to Play
* The primary objective is to clear all the cards from the three massive overlapping peaks on the board.
* You have a single face-up "active" card at the bottom of the screen next to your draw pile.
* Use your \`Left Mouse Button\` to click any fully exposed card on the peaks that is exactly ONE value higher or ONE value lower than your active card.
* **Examples:** If your active card is an 8, you can click a 7 or a 9. Suit and color do not matter at all.
* **The Ace Loop:** Kings connect to Aces, and Aces connect to 2s. (e.g., King -> Ace -> 2 -> 3).
* A card is strictly considered "exposed" only if there is absolutely no other card resting on top of it.
* If you have no valid moves on the board, click the face-down draw pile to reveal a new active card.

## Tips and Tricks
* **Plan Your Chains:** Do not just click the first valid card you see. Look at the board and map out a massive combo chain. If your active card is a 5, and the board has a 6, 7, 8, 7, 6... you can clear all five of those cards in one continuous sweep without drawing.
* **Dig Evenly:** Try to dismantle the three peaks at roughly the same pace. If you completely destroy the left peak while the right peak is still untouched, you severely limit your options later in the game.
* **Uncover the Hidden Cards:** If you have a choice between playing an exposed 7 that doesn't unlock anything, or a different exposed 7 that uncovers two face-down cards beneath it, ALWAYS choose the one that reveals more information.
* **Save Your Draw Cards:** Exhaust absolutely every single possible sequence on the main board before you click the draw pile. Your draw pile is your lifeline; wasting it early is a guaranteed loss.
* **The "Undo" Button (If Available):** Use it strategically! If you break a massive combo by clicking the wrong 9, undo the move and correct your sequence.`
  },
  {
    title: "Picture Pie - Harbour City",
    seoContent: `![Picture Pie - Harbour City](https://www.htmlgames.com/uploaded/game/thumb800/picturepieharbourcity800450.webp)

Picture Pie - Harbour City completely revolutionizes the traditional jigsaw puzzle format, abandoning the slow, methodical edge-sorting of physical cardboard in favor of a highly geometric, swap-based digital grid. Set against a series of stunning, high-definition photographs of bustling maritime ports, cargo ships, and coastal skylines, the game takes a perfect image and shatters it into a massive grid of identical square tiles. Your objective is not to find matching interlocking tabs, but to physically swap the positions of adjacent tiles to reconstruct the image. The atmosphere is deeply calculating and immensely satisfying; you aren't just looking for matching colors, you are actively unscrambling a visual matrix. The visual presentation is exceptionally clean, utilizing a stark, frameless grid that forces you to rely entirely on the subtle visual textures of the photograph—a crane cable here, a reflection on the water there—to determine correct placement. Picture Pie is a pure, unpressured test of spatial reconstruction and visual memory.

## How to Play
* The primary objective is to fully reconstruct the scrambled high-definition photograph.
* The image is divided into a grid of perfectly square tiles.
* Use your \`Mouse\` to click on any tile to select it.
* Click on an adjacent tile (up, down, left, or right) to instantly swap their physical positions on the grid.
* Some variations allow you to swap *any* two tiles on the board, regardless of whether they are adjacent. Be sure to test this mechanic early!
* The puzzle is complete when every single tile is in its correct original location.

## Tips and Tricks
* **Sort the Edges First:** This golden rule of jigsaw puzzles still applies here. Immediately locate all the tiles that form a hard, straight edge (like the sky, or the bottom of the water) and swap them to the perimeter of the grid. Build the frame first.
* **Look for High Contrast Lines:** The easiest tiles to place are those containing sharp, contrasting straight lines, like the mast of a ship, a thick steel cable, or the edge of a building. Follow the lines across multiple tiles to orient them.
* **Use the Reference Image (If Available):** If the game provides a button to view the completed photograph, use it constantly! Use the reference image to identify exactly where a specific cluster of windows or a colorful shipping container belongs.
* **Group by Color and Texture:** Don't just swap randomly. Look at a tile of bright blue sky, and find all the other tiles of bright blue sky. Move them all into the general upper area of the grid before trying to perfectly align them.
* **Focus on the Corners:** The absolute easiest tiles to identify are the four extreme corners of the image. Lock those in first to anchor your frame.`
  },
  {
    title: "Connect the Dots",
    seoContent: `![Connect the Dots](https://www.htmlgames.com/uploaded/game/thumb800/connectthedots800450.webp)

Connect the Dots strips the spatial puzzle genre down to its absolute, most mathematically pure and elegantly simple core, delivering a digital adaptation of the classic "Eulerian path" problem (often known as the "One Line" puzzle). Set against a clean, visually minimalist grid or abstract background, players are presented with a series of complex geometric shapes constructed of glowing nodes (dots) connected by faint pathways. Your objective is intensely focused: you must draw a single, continuous line through the shape, crossing every single pathway exactly once, without ever lifting your digital pen or retracing a line you have already drawn. The atmosphere is deeply cerebral and intentionally demanding, requiring an intense level of forward-thinking and topological visualization. The visual presentation is highly functional, utilizing stark, high-contrast neon graphics that ensure the complex geometric webs remain perfectly readable. Connect the Dots is the ultimate, timeless brain-training routine for route optimization and spatial logic.

## How to Play
* The primary objective is to trace the entire geometric shape without ever retracing a line.
* Use your \`Mouse\` to click on a starting dot and hold the \`Left Mouse Button\` down.
* Drag your mouse along the faint pathways to draw a solid, glowing line connecting the dots.
* **The Golden Rule:** You CANNOT draw over a line you have already created. Every single pathway must be used exactly once.
* You CAN visit the same dot (intersection) multiple times, as long as you arrive and leave via different pathways.
* If you get stuck or trap yourself in a dead end, simply release the mouse or click a "reset" button to clear the lines and try again.

## Tips and Tricks
* **Count the Odd Nodes (The Mathematical Secret):** This is the key to solving any Eulerian path. Look at how many lines connect to a specific dot. A dot with 1, 3, or 5 lines is an "Odd Node." A dot with 2, 4, or 6 lines is an "Even Node."
* **Start and End Points:** If a shape has exactly TWO Odd Nodes, you *must* start your line at one of those Odd Nodes, and you will mathematically be forced to end your line at the other Odd Node.
* **No Odd Nodes? Start Anywhere:** If every single dot in the entire shape is an Even Node (e.g., a simple square where every corner has 2 lines), you can start drawing at literally any point and you will eventually return to where you started.
* **Don't Trap the Dead Ends:** If you see a dot that only has ONE line connected to it (a true dead end), you cannot start in the middle of the shape and walk into it, because you can never get out. You must either start your drawing at that dead end, or make it the absolute final point of your drawing.
* **Trace Mentally First:** Do not just start wildly clicking and dragging. Spend 10 seconds tracing the route with your eyes before committing to drawing.`
  },
  {
    title: "Connect the Blocks",
    seoContent: `![Connect the Blocks](https://www.htmlgames.com/uploaded/game/thumb800/connecttheblocks800450.webp)

Connect the Blocks (a highly polished variant of the classic Onet or Kyodai genre) injects a massive dose of highly structural, geometric pathfinding into the tile-matching formula, delivering a visual puzzle that demands intense calculation wrapped in a clean, minimalist aesthetic. Stepping entirely away from the 3D, overlapping pyramids of standard Mahjong Solitaire, this game places every single block flat on a massive, single-layer 2D grid featuring cute animals or abstract symbols. Your objective is not just to find matching pairs, but to prove that a clear, unobstructed path can physically be drawn between them using a very specific set of routing rules. The atmosphere is deeply engaging, requiring players to constantly weigh the immediate satisfaction of a simple edge match against the necessity of unblocking the dense center of the board. The visual style is exceptionally crisp, ensuring perfect readability. It is a pure test of spatial planning, line-of-sight optimization, and the ability to visualize invisible lines across a chaotic grid.

## How to Play
* Your primary objective is to clear the entire flat grid by connecting identical pairs of blocks before the strict timer runs out.
* Use your \`Mouse\` to click on a block, then click on a matching block to attempt a connection.
* **The Golden Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two blocks using a maximum of three straight lines (which means no more than two 90-degree corners).
* You can connect blocks that are sitting directly next to each other, or you can route the path entirely outside the main grid boundary (the empty space surrounding the puzzle).
* If you successfully clear all blocks, you win. If no more valid moves exist, the board will usually automatically reshuffle.

## Tips and Tricks
* **Clear the Perimeter First:** Blocks sitting on the absolute outer edge of the board are by far the easiest to connect, because their path can route freely through the empty space outside the grid using the two-turn rule. Clear the borders instantly.
* **Look for the "U" Shape:** The two-turn rule allows for a perfect "U" shape connection. If two identical blocks are on the exact same row, but separated by other blocks, check if there is empty space directly above or below both of them to draw the U.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the grid from the outside toward the dense center.
* **Don't Tunnel Vision:** If you can't find a path for two specific Lion blocks, stop looking at them. Scan the entire board for an obvious, free match to keep the timer from running down.
* **Use the Hint Button Sparingly:** If you are truly stuck, use the hint button, but be aware that relying on it prevents you from training your brain to see the complex two-turn pathways.`
  },
  {
    title: "Traffic Control",
    seoContent: `![Traffic Control](https://www.htmlgames.com/uploaded/game/thumb800/trafficcontrol800450.webp)

Traffic Control strips the complex, sprawling city-builder simulation genre down to its absolute, most tension-fueled and reflex-dependent core, placing players directly in charge of the most dangerous intersections in a massive metropolis. Moving away from zoning laws and tax rates, this title is purely focused on high-speed logistical management and crash prevention. Set against a clean, top-down isometric view of busy roads, your sole objective is to manually operate the traffic lights, carefully balancing the flow of speeding cars, lumbering trucks, and unpredictable pedestrians to prevent catastrophic multi-vehicle pileups. The atmosphere is intensely stressful and highly engaging; the volume of traffic continuously escalates, forcing you to constantly scan all four directions simultaneously. The visual presentation is highly polished, utilizing a vibrant, cartoonish aesthetic with crisp vehicle models that ensure trajectories are easily readable. Traffic Control is a pure, unadulterated test of spatial awareness, timing, and crisis management under extreme pressure.

## How to Play
* The primary objective is to safely route a specific quota of vehicles through the intersection without causing a single crash.
* You do not control the vehicles directly. You only control the traffic lights.
* Use your \`Mouse\` to click directly on a traffic light (or a specific lane) to instantly toggle it between Red (Stop) and Green (Go).
* Vehicles will automatically accelerate when their light turns green, and will slam on their brakes when it turns red.
* If two vehicles physically collide in the middle of the intersection, the level is instantly failed.

## Tips and Tricks
* **Don't Let Them Back Up:** While keeping a light red is safe, letting massive lines of cars build up off-screen is a guaranteed way to lose later. You must keep the flow moving. Switch lights rapidly to let small bursts of cars through.
* **Watch the Speeds:** Not all vehicles move at the same speed. A tiny sports car will rocket through the intersection, while a massive semi-truck takes forever to cross. You must leave the light green significantly longer for heavy trucks to clear the kill zone safely.
* **The "Clear the Box" Rule:** Before you turn a light green for the North/South traffic, you MUST visually confirm that the last car from the East/West traffic has completely exited the center of the intersection.
* **Look at the Spawn Points:** Don't just watch the center of the screen. Keep your eyes on the absolute edges of the screen where cars spawn. Anticipate the heavy traffic lanes before they reach the lights.
* **Prioritize the Heaviest Flow:** If three cars are waiting at the North light, and one car is waiting at the East light, let the North lane go first. Managing volume is critical to preventing gridlock.`
  },
  {
    title: "Farm Mysteries",
    seoContent: `![Farm Mysteries](https://www.htmlgames.com/uploaded/game/thumb800/farmmysteries800450.webp)

Farm Mysteries is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and rustic core. Forget convoluted detective storylines or messy urban apartments; this title is a pure, unadulterated shot of visual immersion focused entirely on acute observation in a charming countryside setting. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing massive red barns, sprawling cornfields, quiet stables, and vintage tractors. Your objective is elegantly simple: locate the subtle, thematic items expertly blended into the rural environment. The atmosphere is intoxicatingly rich and incredibly peaceful, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, farm animals, and complex wooden architecture. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy pitchfork and scattered haystack is rendered with breathtaking clarity. The sensation of discovery makes every successfully located item feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of the farm scene.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden objects before the strict time limit expires to advance to the next rural location.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the loft of the barn) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A horseshoe might be tinted brown to blend into a wooden fence.
* **Check the Shadows:** The developers love hiding dark objects inside the shadows of the tractor tires, underneath the water trough, or inside unlit stalls. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a bucket, you will accidentally spot the hidden rope.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Daily Queens",
    seoContent: `![Daily Queens](https://www.htmlgames.com/uploaded/game/thumb800/daily-queens-800x450.webp)

Daily Queens delivers a brilliant, highly cerebral daily evolution of the classic mathematical "Eight Queens" chess problem, stripping away the movement and combat of chess to focus entirely on pure spatial logic and territorial control. Set against a clean, visually minimalist grid that is irregularly divided into distinct colored regions (similar to Sudoku blocks, but jagged), players are tasked with placing a set number of Queens onto the board. The objective is elegant but brutally restrictive: you must place the Queens so that they follow a strict set of territorial rules, ensuring no Queen can "attack" another. The atmosphere is deeply calculating and entirely unpressured; it is a pure test of logical deduction and process of elimination, offering three fresh, unique layouts every single day. The visual presentation is highly functional, utilizing stark colors to define the irregular regions, ensuring the complex overlapping rulesets remain perfectly readable. Daily Queens is the ultimate, timeless brain-training routine for hardcore logic puzzle fans.

## How to Play
* The primary objective is to successfully place a Queen on the board according to three absolute, unbreakable rules.
* **Rule 1:** There can only be EXACTLY ONE Queen in every vertical column.
* **Rule 2:** There can only be EXACTLY ONE Queen in every horizontal row.
* **Rule 3:** There can only be EXACTLY ONE Queen in every highlighted, irregular colored region.
* **The Golden Rule (Diagonals):** Two Queens CANNOT touch each other in any direction, not even diagonally (e.g., if a Queen is at 0,0, you cannot place a Queen at 1,1).
* Use your \`Mouse\` to click an empty square to place a Queen. Click again to remove it, or use right-click to place an 'X' to mark a square as definitively empty.

## Tips and Tricks
* **Mark the Impossibles First:** This game is solved by elimination, not by guessing. If you place a Queen, IMMEDIATELY use the 'X' marker to cross out every single square in that same row, column, region, and adjacent diagonal squares. Visually shrinking the board is mandatory.
* **Look for Tiny Regions:** If the board has a tiny colored region consisting of only two or three squares, focus there first. The limited options in small regions quickly force the logical placement of Queens in other, larger regions.
* **The "Forced Corner" Logic:** If crossing out squares forces a specific colored region to only have one remaining legal square, you MUST place a Queen there. This will then cascade and eliminate more squares for other regions.
* **Use the X Generously:** Do not rely on your memory. If you mathematically deduce that a square cannot hold a Queen, mark it with an X. Your brain needs the visual confirmation of empty space.
* **Don't Guess:** Guessing will ruin the entire puzzle because an incorrect placement early on won't be obvious until the very last move. If you are stuck, step back and re-read the rows and columns.`
  },
  {
    title: "Harbour Escape",
    seoContent: `![Harbour Escape](https://www.htmlgames.com/uploaded/game/thumb800/harbour-escape-800-450.webp)

Harbour Escape fundamentally rewrites the rules of the legendary sliding-block logic puzzle (often known globally as Rush Hour), replacing the gridlocked asphalt of a city street with a chaotic, brightly colored nautical harbor. Set against a clean, top-down isometric grid representing a wooden dock, players are presented with a massive maritime traffic jam. Your objective is intensely focused and heavily reliant on sequential planning: you must manually slide massive cargo ships, long barges, and small speedboats horizontally or vertically along their specific axes to clear a direct, unobstructed path for your designated red boat to sail out of the harbor exit. The atmosphere is deeply calculating and immensely satisfying, demanding an extreme level of forward-thinking; you aren't just moving pieces randomly, you are executing complex, multi-step logistical maneuvers where moving a boat forward specifically to move another boat backward is mandatory. The visual presentation is exceptionally clean, utilizing crisp, contrasting colors for the different vessel lengths. Harbour Escape is a pure, unpressured test of spatial reasoning.

## How to Play
* The primary objective is to clear a path so the Red Boat can slide through the exit on the right side of the board.
* The board is filled with blocking boats of various lengths (2 or 3 grid squares long).
* Use your \`Mouse\` to click, hold, and drag a boat.
* **The Golden Rule:** Boats can ONLY slide forward or backward along their long axis. A boat placed horizontally can only slide left or right. A boat placed vertically can only slide up or down. You CANNOT rotate the boats.
* You must shuffle the blocking boats back and forth into empty water spaces until a straight, empty lane is created for the Red Boat.

## Tips and Tricks
* **Work Backwards from the Exit:** Do not just start wildly sliding boats around the left side of the screen. Look at the exit on the right. What is the *immediate* boat blocking the exit? Where does that specific boat need to slide? Focus entirely on clearing that one specific blocker first.
* **The "Shuffle" Maneuver:** Often, a long vertical barge blocking the exit cannot be moved down because a horizontal speed boat is in the way. You must move the speed boat left, slide the barge down, move your red boat forward one space, slide the barge back up, and move the speed boat back right just to gain one inch. Embrace the multi-step shuffle.
* **Don't Trap the Emptiness:** Empty water is your most valuable resource. Do not slide a massive 3-length cargo ship into a corner unless you mathematically know you won't need that empty space to maneuver a different boat later.
* **Use the "Undo" Button (If Available):** This game heavily punishes impulsive moves. If you make a slide that immediately locks the board, undo it and try the alternate path.
* **Take a Break:** If you have been staring at a level for 10 minutes and sliding boats in circles, reset the level completely and walk away for 5 minutes. You will often solve it instantly upon returning with a fresh perspective.`
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
