const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Bubble Circle",
    seoContent: `![Bubble Circle](https://www.htmlgames.com/uploaded/game/thumb800/bubblecircle800450.webp)

Bubble Circle brilliantly reinvents the rigid, downward-pushing mechanics of traditional arcade shooters by introducing a massive, freely rotating central vortex. Moving away from the static grid of classic bubble poppers, this game places a gravitational core in the dead center of your screen, drawing a constant, terrifying spiral of colorful orbs toward it. Your objective is intensely focused: circle the perimeter and fire your own bubbles inward to match and destroy the incoming spiral before it completely collapses into the center hole. The atmosphere is deeply kinetic and demands a completely new type of spatial awareness, forcing you to constantly calculate rotational speed and angular trajectories. The visual presentation is highly polished, utilizing crisp, neon-infused bubbles that pop against the dark background, ensuring perfect readability even when the spiral accelerates to a blinding speed. Bubble Circle is a pure, uncompromising test of reflex aiming and geometric calculation, offering a deeply hypnotic spin on a beloved genre.

## How to Play
* The primary objective is to prevent the rotating spiral of bubbles from reaching the black hole in the exact center of the screen.
* You control a cannon that freely orbits the absolute outer perimeter of the massive bubble circle.
* Use your \`Mouse\` to drag the cannon around the perimeter, aiming inward toward the spiral.
* Click the \`Left Mouse Button\` to fire your current colored bubble directly at the mass.
* Connecting three or more bubbles of the identical color will cause them to pop, severing the spiral and pushing it slightly backward.
* Hold down the \`Spacebar\` (if applicable) to temporarily accelerate the rotation for higher score multipliers.

## Tips and Tricks
* **Lead Your Target:** The most common mistake is aiming directly at the bubble you want to hit. Because the spiral is constantly rotating, your shot will miss and stick to the wrong color. You must aim slightly *ahead* of your target's path of rotation.
* **Cut the Head off the Snake:** Do not focus entirely on the tail of the spiral. The most critical bubbles are the ones closest to the center hole. Target the absolute front of the line whenever possible.
* **Use the Wall Bounce:** If a critical cluster of red bubbles is on the exact opposite side of the circle from your cannon, you don't necessarily have to orbit all the way around. Bank your shot off the invisible outer walls to hit it from behind.
* **Don't Hoard Power-ups:** If a rainbow bubble appears in your cannon, use it instantly to destroy the most dangerous cluster near the center. Saving it often results in the spiral collapsing before you get the chance.
* **Keep Moving:** Do not leave your cannon parked in one spot on the perimeter. Constantly trace the rotation of the spiral with your mouse so you are always prepared to fire from the optimal angle.`
  },
  {
    title: "Smoothie Connect",
    seoContent: `![Smoothie Connect](https://www.htmlgames.com/uploaded/game/thumb800/smoothieconnect800450.webp)

Smoothie Connect takes the incredibly satisfying, line-drawing mechanics of classic link puzzles and blends them into a vibrantly colorful, fast-paced culinary challenge. Moving away from abstract gems or numbers, this game asks you to physically draw winding paths through dense clusters of incredibly detailed, high-definition tropical fruit to fuel a massive blender. The atmosphere is relentlessly upbeat and intensely satisfying, trading slow, methodical puzzle-solving for frantic, high-speed combination hunting. Every level acts as a specific customer order, requiring you to harvest specific quotas of bananas, strawberries, and kiwis to craft massive smoothies before the timer expires. The visual presentation is exceptional, featuring mouth-watering, glossy fruit sprites and spectacular, juice-splattering particle effects whenever a massive, 15-fruit chain is successfully linked. Smoothie Connect is a masterclass in highly tactile, visually rewarding arcade puzzle design that perfectly captures the frantic energy of a busy juice bar.

## How to Play
* Your primary objective is to fulfill specific smoothie orders located on the right side of the screen by collecting the required types of fruit.
* Use your \`Mouse\` to click on a piece of fruit, then drag a continuous line through adjacent, identically colored fruits to link them together.
* You can link the fruit horizontally, vertically, and diagonally, allowing for incredibly long, winding chains.
* Release the \`Left Mouse Button\` to harvest the linked fruit, causing the grid to collapse and new fruit to drop down.
* Once the fruit requirements for a smoothie are met, you must physically click the completed smoothie glass on the right to serve it and earn your points.

## Tips and Tricks
* **Always Maximize the Chain:** Never settle for linking just three strawberries if there is a path to link eight. Take an extra second to trace the longest possible route with your eyes before committing.
* **Don't Forget to Serve:** The biggest mistake beginners make is harvesting all the necessary fruit but forgetting to actually click the completed smoothie glass. The order doesn't count until it's served!
* **Target the Objective Exclusively:** It is incredibly satisfying to harvest a massive chain of 20 blueberries, but if your current smoothie orders only require bananas and oranges, you just wasted five seconds of precious time.
* **Use Diagonal Links to Escape:** If you are building a chain of fruit and get boxed in, remember that diagonal links are your lifeline. You can often squeeze through two mismatched fruits to connect to a massive cluster on the other side.
* **Clear the Bottom First:** Just like all gravity-based puzzle games, clearing fruit at the very bottom of the screen maximizes the cascading effect, often resulting in massive, accidental chain reactions as the board settles.`
  },
  {
    title: "Memory Puzzle",
    seoContent: `![Memory Puzzle](https://www.htmlgames.com/uploaded/game/thumb800/memorypuzzle800450.webp)

Memory Puzzle strips the casual gaming experience down to its absolute, most fundamentally engaging core, delivering a pure, unadulterated test of short-term cognitive retention and spatial awareness. Originating from the classic tabletop card game "Concentration," this digital adaptation requires players to memorize the precise locations of various images hidden beneath a grid of identical, face-down tiles. The atmosphere is deeply cerebral and intentionally calming, completely devoid of the chaotic explosions and stressful timers that plague modern mobile games. It is a pure test of your brain's ability to map visual information to a physical location. The visual presentation is highly polished in its minimalism, utilizing a clean interface and a massive variety of high-definition, distinct icons—ranging from animals to vehicles to abstract symbols—ensuring that every game feels fresh and visually distinct. Memory Puzzle is the ultimate, timeless brain-training routine, perfect for players looking to actively sharpen their cognitive recall.

## How to Play
* The primary objective is to clear the entire board by finding and matching all pairs of identical hidden images.
* Use your \`Left Mouse Button\` to click on any face-down tile to reveal the image hidden underneath it.
* Click a second face-down tile to reveal it.
* If the two revealed images are an exact match, they will be permanently removed from the board.
* If the two images do not match, they will briefly remain face-up so you can memorize them, before flipping back over.
* The game is successfully completed when every single pair has been found and the board is completely empty.

## Tips and Tricks
* **The "Sweep" Method:** Do not click randomly. On your very first few turns, methodically click the top-left tile, then the one next to it, moving across the rows like you are reading a book. Your goal isn't to find matches early; your goal is to map the board in your head.
* **Create Mental Stories:** If you flip a "Dog" in the top left, and a "Car" in the bottom right, create a weird mental image to link them physically (e.g., "The dog is driving the car from the top to the bottom"). This makes retrieval much easier.
* **Don't Guess on the Second Tile:** If you flip a tile and reveal a "Star," and you *think* you remember seeing another star, but you aren't sure where, DO NOT click randomly. Only click the second tile if you are 100% certain. Otherwise, flip a completely unknown tile to gather new information.
* **Group by Category:** As you reveal tiles, mentally group them. "Okay, the animals are mostly on the left side, the tools are on the right."
* **Patience is Key:** The tiles flip back over relatively quickly. Do not rush to make your next move. Take a breath, visualize the board, and commit the two failed images to memory before proceeding.`
  },
  {
    title: "Nautilus Mahjong",
    seoContent: `![Nautilus Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/nautilusmahjong800450.webp)

Nautilus Mahjong plunges the ancient, rigid traditions of Chinese tile-matching into a breathtaking, deeply atmospheric underwater environment. Moving far beyond the sterile, flat green felt of standard solitaire games, this title constructs massive, complex architectural pyramids using beautifully illustrated tiles depicting marine life, sunken artifacts, and mythical sea creatures. The atmosphere is incredibly relaxing and immersive, trading the tense ticking clocks of arcade games for the soothing, ambient sounds of the deep ocean. You are tasked with analyzing towering, overlapping tile structures, meticulously searching for exposed pairs to dismantle the board. The visual presentation is exceptionally polished, utilizing soft, aquatic color palettes and dynamic lighting effects that simulate sunlight filtering through the water, ensuring the puzzle remains perfectly readable even when the board is massively congested. Nautilus Mahjong is a highly successful thematic reskin, proving that a timeless puzzle formula can be completely refreshed with a strong, cohesive artistic vision.

## How to Play
* Your objective is to completely clear the entire screen by matching identical pairs of oceanic-themed tiles.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles heavily overlap, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden tiles buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, you lose.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Memorize the Categories:** Unlike traditional Mahjong, Nautilus features groups of tiles (like different types of fish or different types of shells) that can be matched with each other, even if they aren't identical. Learn these groups instantly.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach seahorse tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a seahorse tile buried deep in the center tower.
* **Use the Reshuffle (If Available):** Treat the shuffle button like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably dead.`
  },
  {
    title: "Car Match",
    seoContent: `![Car Match](https://www.htmlgames.com/uploaded/game/thumb800/carmatch800450.webp)

Car Match introduces a wildly addictive, highly structured mechanical twist to the classic tile-matching formula, replacing static gems with a massive, gridlocked parking lot of brightly colored vehicles. Instead of instantly matching and removing pairs on the board, you must physically extract specific cars and park them into a limited, seven-slot holding garage at the bottom of the screen. The atmosphere is deeply intense and demands meticulous forward planning; the puzzle isn't just about finding matching colors, it's about managing the incredibly tight inventory space of your garage while untangling the physical traffic jam. If your garage fills up before a match of three identical cars is completed, it's an instant game over. The visual style is exceptionally clean and readable, utilizing crisp, 3D-rendered isometric vehicles that pop against the asphalt grid, making it easy to distinguish models even when the lot is massively congested. Car Match is a masterclass in fusing traditional solitaire mapping with modern, high-stakes inventory management.

## How to Play
* The objective is to completely clear the massive traffic jam by extracting all the cars from the parking lot.
* Use your \`Left Mouse Button\` to click any fully exposed (unblocked) car in the lot to drive it down into your holding garage.
* Your holding garage can only park a maximum of seven cars at any given time.
* When three identical cars are parked in your garage, they will instantly merge and drive away, freeing up three crucial inventory slots.
* The game is immediately over if your seven-slot garage becomes completely full without forming a matching set of three.

## Tips and Tricks
* **Never Blindly Click:** The most common mistake is clicking every free red car you see. Before clicking a car, you must mentally confirm where the *other two* identical cars are located in the traffic jam.
* **Manage Your Garage Space:** Treat your seven parking slots like pure gold. Never have more than four "unmatched" singleton cars sitting in your garage at once. Always leave room to dig for matches.
* **Dig Deep:** Sometimes you need a specific blue car that is blocked by three yellow cars. It is acceptable to temporarily park those yellow cars in your garage, *provided* that reaching the blue car instantly triggers a match-three clear.
* **Clear the Exits:** Cars on the absolute outer edges of the parking lot are generally safer to extract, as they rarely block critical central pathways.
* **Watch the Bumpers:** Pay close attention to the orientation of the cars to understand exactly which vehicle is blocking which. A car facing horizontally is blocking entirely different paths than a car facing vertically.`
  },
  {
    title: "Dubai Hidden Objects",
    seoContent: `![Dubai Hidden Objects](https://www.htmlgames.com/uploaded/game/thumb800/dubaihiddenobjects800450.webp)

Dubai Hidden Objects is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and luxurious core. Forget convoluted detective storylines or unnecessary mini-games; this title is a pure, unadulterated shot of cultural immersion focused entirely on acute visual observation. You are placed directly into a series of stunningly detailed, high-definition photographs showcasing the towering skyscrapers, opulent hotels, and vibrant desert landscapes of Dubai, tasked with locating a specific list of cleverly concealed artifacts. The atmosphere is intoxicatingly rich, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, modern architecture, and complex geometry. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy corner, market stall, and mosaic tile is rendered with breathtaking clarity. The sensation of discovery is incredibly well-executed, making every successfully located item feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of Dubai.
* Use your \`Mouse\` to carefully scan the scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty.
* You must find all the hidden objects before the strict time limit expires to advance to the next luxurious location.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the top-left skyscraper) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A red apple might be tinted gold to blend into a chandelier.
* **Check the Shadows:** The developers love hiding dark objects inside the shadows of buildings or underneath luxury cars. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a teapot, you will accidentally spot the hidden sunglasses.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "2048 Christmas",
    seoContent: `![2048 Christmas](https://www.htmlgames.com/uploaded/game/thumb800/2048christmas800450.webp)

2048 Christmas takes the ferociously addictive, mathematically rigorous mechanics of the legendary sliding-block puzzle and wraps it in a delightfully cozy, festive aesthetic. Moving away from the sterile, abstract number grids of the original, this title replaces the stark tiles with beautifully illustrated holiday icons—gingerbread men, ornaments, snow globes, and massive presents—each representing an exponentially increasing numerical value. The atmosphere is undeniably charming, trading intense arcade pressure for a pure, deeply cerebral test of spatial grid management and foresight. You are tasked with sliding the entire grid in four directions, forcing identical tiles to collide and merge into the next massive numerical tier, all while desperately trying to keep the board from completely locking up. The visual presentation is highly polished, utilizing crisp, festive graphics and incredibly smooth, satisfying sliding animations that make every successful merge feel rewarding. 2048 Christmas is a perfect, holiday-themed evolution of one of the most brilliant puzzle formulas ever created.

## How to Play
* The primary objective is to slide tiles around a 4x4 grid, merging identical tiles together until you create a single tile with the value of 2048.
* Use your \`Arrow Keys\` (Up, Down, Left, Right) or \`W, A, S, D\` to slide all tiles on the board simultaneously in that direction.
* When two tiles containing the exact same number (or the exact same Christmas image) collide during a slide, they will instantly merge into a single tile with double the value.
* Every time you make a move, a new low-value tile (usually a 2 or a 4) will spawn in a random empty square on the grid.
* The game is immediately over if all 16 squares on the grid are completely full and no more valid merges are physically possible in any direction.

## Tips and Tricks
* **The Corner Strategy:** Pick one specific corner of the board (e.g., the bottom-right) and NEVER move your highest value tile out of that corner. Build all your merges toward that massive anchor tile.
* **Never Swipe Up (or Away from Your Corner):** If your massive anchor tile is in the bottom-right corner, you should only ever use the \`Down\` and \`Right\` arrow keys. Using the \`Up\` key will pull your anchor out of the corner and ruin your entire structure.
* **Build Sequential Rows:** Try to keep your tiles organized in sequential order. If your anchor is 512, the tile next to it should be 256, the one next to that 128, creating a perfect merging pipeline.
* **Keep the Board Clean:** Do not just randomly swipe keys hoping for accidental merges. Every single swipe should have a specific purpose to eliminate low-value tiles.
* **Plan the Spawn:** Remember that every swipe spawns a new tile. Before you swipe, visualize where the empty spaces will be, and ask yourself if a new tile spawning there will block a critical merge.`
  },
  {
    title: "Xmas Card Connect",
    seoContent: `![Xmas Card Connect](https://www.htmlgames.com/uploaded/game/thumb800/xmascardconnect800450.webp)

Xmas Card Connect injects a massive dose of festive, holiday cheer into the highly structural, pathfinding puzzle genre, delivering a visual feast of Christmas iconography and intensely satisfying combination mechanics. Stepping away from simple adjacent swapping, this title (often known as Onet or Kyodai) demands a much more calculating approach. You are presented with a massive grid of flat tiles featuring beautifully detailed Santa hats, reindeer, and ornaments. Your objective is not just to find matching pairs, but to prove that a clear, unobstructed path can physically be drawn between them using no more than two 90-degree turns. The atmosphere is deeply engaging, requiring players to constantly weigh the immediate satisfaction of a simple edge match against the necessity of unblocking the dense center of the board. The visual style is exceptionally polished, utilizing crisp, high-definition holiday art that crackles with magical energy when a valid connection is forged. It is a pure, unadulterated test of spatial planning and line-of-sight optimization.

## How to Play
* Your primary objective is to clear the entire grid by connecting identical pairs of Christmas-themed tiles before the timer expires.
* Use your \`Mouse\` to click on a tile, then click on a matching tile to attempt a connection.
* A connection is only valid if a clear, unobstructed path can be drawn between the two tiles using a maximum of three straight lines (which means no more than two 90-degree corners).
* You can connect tiles that are sitting directly next to each other, or you can route the path entirely outside the main grid boundary.
* If you successfully clear all tiles, you advance to the next level. If the timer hits zero, or if no more valid moves exist, you fail.

## Tips and Tricks
* **Clear the Perimeter First:** Tiles sitting on the absolute outer edge of the board are by far the easiest to connect, because their path can route freely through the empty space outside the grid. Clear the borders instantly.
* **Look for the "U" Shape:** The two-turn rule allows for a perfect "U" shape connection. If two identical tiles are on the exact same row, but separated by other tiles, check if there is empty space directly above or below both of them to draw the U.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the grid from the outside toward the dense center.
* **Don't Tunnel Vision:** If you can't find a path for the two specific snowmen you are looking at, stop looking at them. Scan the entire board for an obvious, free match.
* **Use the Hint Button Sparingly:** If you are truly stuck, use the hint or shuffle button, but be aware that doing so often incurs a time penalty or a score reduction.`
  },
  {
    title: "Unlock the King",
    seoContent: `![Unlock the King](https://www.htmlgames.com/uploaded/game/thumb800/unlocktheking800450.webp)

Unlock the King fundamentally reinvents the heavily saturated match-3 genre by introducing a brilliant, chess-inspired VIP escort mechanic that completely changes how you interact with the board. Moving away from the generic goal of simply "scoring points," this title places a singular, highly valuable King piece at the top of a densely packed grid. Your objective is to actively carve a physical path through the puzzle structure, matching and destroying specific barriers to safely escort the King to the escape zone at the very bottom of the screen. The atmosphere is incredibly tense and deeply strategic, as every single swipe must be calculated not for points, but for spatial manipulation. The visual presentation is highly polished, utilizing crisp, regal iconography and smooth, satisfying cascade animations that trigger when you successfully clear a major chokepoint. Unlock the King is a masterclass in objective-based puzzle design, proving that forcing the player to protect a single, vulnerable entity completely revitalizes the mechanics of gem-swapping.

## How to Play
* The primary objective of every level is to safely guide the VIP King piece from its starting position down to the exit portal at the absolute bottom of the grid.
* The King piece CANNOT be swapped or matched with other items; it only moves downward via gravity when the items directly beneath it are destroyed.
* Use your \`Mouse\` to click and swap adjacent colored items to create horizontal or vertical lines of three or more identical pieces to destroy them.
* Swapping items to create a massive 2x2 square (or a line of four) generates powerful explosives that can clear large sections of the board instantly.
* You must successfully drop the King into the exit portal before your strict move limit reaches zero.

## Tips and Tricks
* **Focus Exclusively on the Path:** It is incredibly easy to get distracted by a massive chain reaction happening on the left side of the board. If the King is on the right side, that chain reaction is completely useless to you. Focus only on the column directly underneath the King.
* **Clear the Chokepoints:** Pay close attention to the architecture of the level. Some grids have narrow bottlenecks or unbreakable stone blocks. You must meticulously clear the path around these obstacles.
* **Build Vertical Matches:** When trying to drop the King, look for vertical matches directly underneath him. A vertical match drops him three spaces instantly, whereas a horizontal match only drops him one space.
* **Save the Bombs:** If you create a massive board-clearing bomb, do not detonate it immediately! Wait until the King is trapped by an awkward block, and use the bomb to surgically remove the obstruction.
* **Don't Let the King Move Sideways:** Try to drop the King straight down. If you accidentally shift him horizontally into a tight corner, it will cost you massive amounts of moves to dig him out.`
  },
  {
    title: "Draw Domino",
    seoContent: `![Draw Domino](https://www.htmlgames.com/uploaded/game/thumb800/drawdomino800450.webp)

Draw Domino flawlessly translates one of the oldest, most strategically profound tabletop games in human history into a sleek, highly accessible digital format. Stripping away the cumbersome physical setup, this HTML5 adaptation delivers a pure, tension-fueled test of probability, tile counting, and aggressive tactical blocking against a relentless computer AI. Set against a beautiful, high-definition digital wood-grain table, you are tasked with managing your virtual "hand" of dotted tiles, desperately trying to empty your rack before your opponent does. The atmosphere is intensely cerebral; there are no flashy power-ups or arcade mechanics. It is a pure test of your ability to read the board, deduce what tiles your opponent is holding, and mathematically lock down the available playing ends. The visual style is exceptionally polished, utilizing crisp, contrasting domino pips and incredibly smooth, satisfying placement animations that replicate the tactile joy of slamming a heavy tile onto a wooden table. Draw Domino is a perfect digital preservation of a timeless classic.

## How to Play
* The primary objective is to be the first player to completely empty your hand of all domino tiles.
* The game begins with a single tile placed face-up in the center of the table.
* On your turn, use your \`Left Mouse Button\` to click one of your tiles and place it on either open end of the domino chain on the table.
* You can only place a tile if the number of dots (pips) on one half of your tile exactly matches the number of dots on the open end of the chain on the table.
* If you do not hold any valid tiles that can be played, you MUST draw from the "boneyard" (the remaining face-down deck) until you find a playable tile.
* If the boneyard is empty and you cannot play, you must "pass" your turn.

## Tips and Tricks
* **Play Your Heavies First:** Always try to get rid of your highest-value tiles (like the double-six or the 6-5) as early as possible. If the game ends in a deadlock, the player with the lowest total dot count in their hand wins.
* **Control the Board Ends:** If you hold three tiles with a "4" on them, try to manipulate the board so that both open ends require a "4". This guarantees you have a move on your next turn and severely restricts your opponent.
* **Count the Tiles:** There are exactly seven of every number (e.g., seven tiles containing a "blank"). If you see five "blanks" on the board and you hold the other two, you know for an absolute fact that your opponent cannot play on a blank end. Lock them out!
* **Save Your Doubles:** Doubles (like the 4-4) are the hardest tiles to get rid of because they only have one usable number. Play them the absolute second you have the opportunity.
* **Force the Draw:** The most aggressive move in the game is forcing your opponent to draw from the boneyard. By controlling the ends, you can force them to pick up massive amounts of unwanted tiles, ruining their hand.`
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
