const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Olko 2",
    seoContent: `![Olko 2](https://www.htmlgames.com/uploaded/game/thumb800/olko2800450.webp)

Olko 2 fundamentally rewrites the rules of the traditional tile-matching formula (like Mahjong Solitaire) by stripping away the massive 3D, overlapping pyramids in favor of a brutally restrictive, single-layer 2D puzzle geometry. Set against a clean, visually minimalist background, players are presented with a massive, flat grid tightly packed with beautifully illustrated tiles featuring intricate Celtic-inspired knots, abstract patterns, and ornate shields. Your objective is elegantly simple yet intensely difficult in execution: you must completely clear the board by finding and matching identical pairs of tiles. However, the game introduces a massive structural caveat: you can ONLY select tiles that are located on the absolute outer edge (the perimeter) of the entire tile cluster. The atmosphere is deeply calculating and incredibly unyielding; you cannot simply reach into the center of the board. The visual presentation is highly functional, utilizing crisp, high-contrast symbols to ensure perfect readability. Olko 2 is a pure, uncompromising test of sequence planning, spatial deduction, and perimeter management.

## How to Play
* Your primary objective is to clear all tiles from the flat 2D board by matching them in identical pairs.
* Use your \`Left Mouse Button\` to click on a "free" tile to select it.
* Click on a matching "free" tile to instantly eliminate both from the board.
* **The Perimeter Rule:** A tile is strictly considered "free" (and therefore clickable) ONLY if it can physically slide outward off the board without hitting another tile. Practically, this means it MUST be on the absolute outer edge of the main cluster, unblocked on at least one side.
* Tiles trapped completely in the center of the mass cannot be clicked under any circumstances.
* The game is won when the board is completely clear. The game is lost (deadlocked) if no valid matches exist on the perimeter.

## Tips and Tricks
* **Work from the Outside In:** Because of the restrictive rules, you have no choice but to systematically peel the board like an onion. Focus heavily on clearing the four extreme corners of the cluster first, as they expose the maximum number of new perimeter tiles.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach blue shield tiles on the right edge, ignore them! Save them. You might desperately need one of those blue shields later to match a blue shield that is currently buried deep in the center of the board.
* **The "Tunneling" Strategy:** Sometimes, the board forms narrow indentations or "tunnels." If a match allows you to dig deeper into a tunnel, take it, as it increases the total surface area of the perimeter, giving you more options.
* **Scan for Deadlocks:** If you only have two green tiles left on the board, and one is physically blocking the other from reaching the perimeter, the game is mathematically deadlocked and you should restart immediately.
* **Use the Undo Button (If Available):** This game heavily punishes impulsive moves. If you make a match that immediately restricts the board, undo it and look for an alternative path.`
  },
  {
    title: "Flower Merge",
    seoContent: `![Flower Merge](https://www.htmlgames.com/uploaded/game/thumb800/flowermerge800450.webp)

Flower Merge injects a massive dose of vibrant, springtime energy into the highly addictive, mathematical puzzle genre, replacing sterile numbers or abstract shapes with a beautifully illustrated, botanical evolutionary chain. Set against a lush, green garden grid, players are tasked with managing a board filled with brightly colored seedlings, buds, daisies, and massive sunflowers. Instead of swiping the entire board (like 2048) or swapping adjacent tiles, you must physically draw a line to connect three or more identical items. When connected, they merge into a single, higher-tier flower (e.g., three daisies merge into a rose). The atmosphere is deeply relaxing and immensely satisfying, accompanied by cheerful, ambient nature sounds. The visual presentation is highly polished, utilizing crisp, high-definition sprites that bloom and sparkle with magical pollen when merged. Flower Merge is a pure, unpressured test of sequence planning and inventory management, requiring you to carefully build massive botanical chains without cluttering your greenhouse.

## How to Play
* The primary objective is to fulfill specific collection goals (e.g., create 3 Sunflowers) before running out of moves or physical grid space.
* Use your \`Mouse\` to click and hold the \`Left Mouse Button\` on a flower.
* Drag your mouse across adjacent identical flowers (horizontally, vertically, or diagonally) to draw a glowing connecting line.
* You must connect at least THREE identical flowers to trigger a merge.
* Release the mouse button to merge the connected flowers into a single, upgraded flower at the exact location of the *last* flower in your chain.
* **The Evolutionary Path:** Flowers follow a strict upgrade sequence (e.g., Seed -> Sprout -> Bud -> Daisy -> Rose -> Sunflower).

## Tips and Tricks
* **Control the Merge Point:** The absolute most critical mechanic in this game is understanding that the new, upgraded flower spawns exactly where you *release* your mouse click. Always end your chain in a strategic location (usually an open corner) to avoid trapping the new flower.
* **Build Massive Chains:** While three flowers are required to merge, connecting five, seven, or ten flowers simultaneously often yields massive bonus points and sometimes spawns powerful, board-clearing items. Never settle for three if you can safely connect five.
* **Keep High Tiers Together:** Try to build your highest-tier flowers (like Roses or Sunflowers) directly next to each other. If you randomly spawn a Rose in the top left corner, and another Rose in the bottom right, it will be incredibly difficult to eventually merge them.
* **Clear the Clutter:** If the board is filling up with low-tier seeds that you don't need, use a few moves to merge them just to get them out of the way and free up physical space on the grid.
* **Plan the Cascade:** Before you execute a merge, look at what the new flower will be. Will that new flower immediately sit next to two other identical flowers, allowing for a rapid, secondary combo?`
  },
  {
    title: "Princess Jewels",
    seoContent: `![Princess Jewels](https://www.htmlgames.com/uploaded/game/thumb800/princessjewels800450.webp)

Princess Jewels delivers a brilliant, highly kinetic evolution of the classic block-falling arcade genre (Columns/Tetris), fusing relentless gravity with high-speed color-matching mechanics, all wrapped in a visually stunning, royal aesthetic. Set against a backdrop of a luxurious castle vault, players are tasked with managing a constant stream of descending columns, each composed of three stacked, brightly colored, hyper-realistic gemstones—diamonds, rubies, and sapphires. As the columns fall from the ceiling, you cannot rotate them horizontally like Tetris pieces. Instead, you must actively cycle the vertical order of the three jewels within the falling column, dropping them into the accumulating stack below to form solid lines of three or more identical gems (horizontally, vertically, or diagonally). The atmosphere is deeply kinetic and increasingly stressful; the game demands an extreme level of reflex timing, spatial logic, and rapid visual parsing before the board overflows. Princess Jewels is a pure, uncompromising test of cascade planning.

## How to Play
* The primary objective is to survive as long as possible by clearing jewels before the stack reaches the top of the screen.
* Columns of three stacked jewels will fall from the top of the screen one at a time.
* Use the \`Left Arrow\` and \`Right Arrow\` keys to steer the falling column horizontally across the grid.
* Press the \`Up Arrow\` key (or \`Spacebar\`) to rapidly cycle the order of the three jewels within the falling column (moving the top jewel to the bottom).
* Press the \`Down Arrow\` key to accelerate the column's fall speed (Soft Drop).
* **The Matching Rule:** When three or more IDENTICAL jewels touch horizontally, vertically, or diagonally anywhere on the board, they instantly shatter and disappear.

## Tips and Tricks
* **Embrace the Diagonal:** Unlike standard Match-3 games, diagonal matches are incredibly powerful here. Do not just look for flat rows. Stacking jewels in a staircase pattern is often the fastest way to clear massive chunks of the board.
* **Build for Cascades (Chain Reactions):** The true skill in this game lies in setting up chain reactions. Place a blue jewel on top of two red jewels, so that when a third red jewel falls next to them and shatters, the blue jewel falls perfectly into place to trigger a secondary blue explosion.
* **Keep the Board Flat:** Your absolute highest priority is ensuring the top layer of your stack remains as flat and even as possible. Massive spikes and deep, narrow valleys make it incredibly difficult to maneuver falling columns from one side to the other.
* **Cycle Rapidly:** Do not let the column fall while you decide what order the jewels should be in. Rapidly hit the cycle key the instant the piece spawns so you can visually verify the arrangement before it hits the bottom.
* **Watch the "Next Piece" Indicator:** Knowing exactly which three jewels are falling next completely dictates where you should place your current column. Never drop a piece without checking the preview window.`
  },
  {
    title: "Circus Match 3",
    seoContent: `![Circus Match 3](https://www.htmlgames.com/uploaded/game/thumb800/circusmatch3800x450.webp)

Circus Match 3 injects a massive dose of whimsical, high-energy Big Top flair into the highly competitive tile-swapping genre, delivering a visual feast of carnival icons and intensely satisfying combination mechanics. Stepping entirely away from generic, sterile gem-swapping, this title embraces a highly thematic approach, requiring players to physically align brightly colored juggling pins, circus tents, clown hats, and circus animals. The atmosphere is undeniably upbeat and engaging, perfectly capturing the frantic, joyful energy of a carnival without sacrificing the deep, strategic complexity that hardcore puzzle fans demand. Every level is a meticulously designed challenge, focusing heavily on shattering specific colored background tiles (the "stage") within a strict move limit. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition sprites that crackle with magical confetti when linked together. Circus Match 3 is a pure, unadulterated test of spatial planning, cascade optimization, and high-speed acrobatics.

## How to Play
* The core mechanic revolves around swapping adjacent circus items to create horizontal or vertical lines of three or more identical objects.
* Use your \`Mouse\` to click on an item, then click an adjacent one to swap their positions, or simply click and drag.
* Your objective is to fulfill specific collection goals displayed at the top of the screen before you run out of allowed moves.
* **The Background Objective:** Many levels feature colored background tiles. You MUST make a successful match *on top* of those specific tiles to shatter the background and clear the level.
* Matching exactly four items creates a glowing, line-clearing super-item.
* Matching five items in an L or T shape creates a devastating area-of-effect bomb.
* Matching five items in a straight row creates a magical star that obliterates all items of a specific type from the board.

## Tips and Tricks
* **Prioritize the Background:** It is incredibly easy to get distracted by a massive chain of clown hats, but if that match doesn't shatter a colored background tile, you are wasting a precious move. Focus laser-like on the objective.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading items dropping from the ceiling, often resulting in free, accidental combos that accidentally shatter background tiles for you.
* **Combine the Power-Ups:** The most devastating move in the game is swapping two power-ups with each other. Swapping a line-clear with a bomb creates a massive, cross-shaped explosion that clears half the circus tent instantly.
* **Attack the Corners Early:** The hardest background tiles to shatter are the ones tucked into the extreme corners or narrow columns of the grid because very few new items flow through those areas. Dedicate your early game to breaking the corners.
* **Save the Stars:** Do not use the five-in-a-row item immediately. Save it until you desperately need to collect a specific item to meet your quota, or wait to combine it with another power-up for a board-wiping effect.`
  },
  {
    title: "Pirate Mysteries",
    seoContent: `![Pirate Mysteries](https://www.htmlgames.com/uploaded/game/thumb800/piratemysteries800450.webp)

Pirate Mysteries is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and adventurous core. Forget convoluted detective storylines or messy urban apartments; this title is a pure, unadulterated shot of visual immersion focused entirely on acute observation within the shadowy, salt-sprayed world of a swashbuckling treasure hunt. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing wrecked galleons, treasure-filled sea caves, pirate taverns, and moonlit Caribbean beaches. Your objective is elegantly simple: locate the subtle, thematic items expertly blended into the nautical environment. The atmosphere is intoxicatingly rich and slightly dangerous, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, scattered gold coins, and complex ship rigging. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy cutlass and rusted anchor is rendered with breathtaking clarity. 

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of the pirate scene.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden objects before the strict time limit expires to advance deeper into the pirate cove.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the captain's desk) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A modern wrench might be tinted rust-brown to blend perfectly into the hull of a ship.
* **Check the Shadows and Highlights:** The developers love hiding dark objects inside the deep shadows beneath barrels, or hiding bright objects directly inside the glare of a lantern. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a spyglass, you will accidentally spot the hidden parrot.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Country Labyrinth 3",
    seoContent: `![Country Labyrinth 3](https://www.htmlgames.com/uploaded/game/thumb800/countrylabyrinth3800450.webp)

Country Labyrinth 3 strips the maze exploration genre down to its absolute, most viscerally satisfying core, delivering a pure, unadulterated test of spatial navigation and route memorization, all wrapped in a charming, geography-themed aesthetic. Moving entirely away from complex combat mechanics, inventories, or sprawling narratives, this title embraces a highly stylized, top-down grid format. You are presented with a sprawling, complex maze, often shaped like the geographical borders of a specific country. Your objective is intensely focused: you must draw a continuous path from the starting flag, navigate the winding corridors, and reach the designated exit point before the timer expires. The atmosphere is deeply calculating and increasingly tense; the mazes often feature massive dead ends, looping corridors, and intentionally deceptive pathways designed to force you to constantly adapt your route. The visual presentation is highly functional, utilizing a clean, high-contrast style that ensures the pathways are perfectly readable. Country Labyrinth 3 is a pure shot of retro puzzle adrenaline that demands flawless spatial awareness.

## How to Play
* The primary objective is to find the correct path through the maze from the starting flag to the exit.
* Depending on the specific control scheme, use your \`Mouse\` to click and drag a line through the maze, OR use the \`Up\`, \`Down\`, \`Left\`, and \`Right\` Arrow keys to navigate an avatar.
* You must avoid hitting the solid walls of the maze.
* The level is successfully completed the exact moment you reach the exit point.
* You must complete the maze before the strict time limit (if applicable) runs out.

## Tips and Tricks
* **The "Right-Hand Rule":** This is the ultimate mathematical secret to solving any simple maze. When you start, place your imaginary "right hand" on the wall to your right. Follow that wall continuously, never taking your hand off it, turning exactly when the wall turns. This algorithm guarantees you will explore every single dead end and eventually find the exit.
* **Scan the Horizon:** Do not just focus on the pixels immediately in front of you. Always look as far down the corridor as the screen allows. Anticipate dead ends before you waste time walking all the way down them.
* **Work Backwards Mentally:** If you are completely stuck in the center of the maze, stop looking at your starting point. Look at the exit flag. Visually trace the path backward from the exit into the maze. Often, this reverse perspective reveals the correct route instantly.
* **Don't Retrace if Unnecessary:** If you hit a massive dead end, mentally "cross off" that entire section of the maze. Do not wander back down it later.
* **Use the Zoom (If Available):** If the maze is massive and the game provides a zoom-out function, use it constantly to understand the macro-structure of the labyrinth before committing to a long path.`
  },
  {
    title: "Spike Solitaire",
    seoContent: `![Spike Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/spikesolitaire800450.webp)

Spike Solitaire delivers a brilliant, highly demanding variation of the classic Klondike formula, fundamentally altering the strategic ceiling by introducing massive, multi-card tableaus that force players to completely rewire how they manage hidden information. Set against a clean, visually uncluttered green felt aesthetic, players are tasked with the familiar goal of moving all 52 cards into four foundation piles. However, the initial deal is vastly different, featuring incredibly deep, spike-like columns that bury critical cards much further down than standard solitaire games. The atmosphere is deeply calculating and immensely satisfying, requiring players to possess a masterful understanding of card sequencing, cascade math, and long-term tactical sacrifice. The visual presentation is exceptionally crisp, featuring high-definition traditional playing cards that ensure perfect readability even when the massive columns are fully extended. Spike Solitaire is not a game of luck; it is an uncompromising test of logic for veteran card players who demand total control and heavily structured layouts.

## How to Play
* The primary objective is to move all 52 cards into the four foundation piles at the top right, building upward in suit from Ace to King.
* The main tableau consists of columns where cards must be built downward in **alternating colors** (e.g., a Red 8 can only be placed on a Black 9).
* Use your \`Mouse\` to click and drag cards between columns.
* **The Movement Rule:** You can move single cards, OR entire valid sequences of alternating-color cards, between the columns to unearth hidden cards.
* Only a King (or a valid sequence starting with a King) can be moved into a completely empty tableau column.
* Use the draw pile (stock) at the top left to deal new cards when you run out of valid moves on the board.

## Tips and Tricks
* **Unearth the Hidden Spikes Early:** Your absolute highest priority in the early game is to flip over the face-down cards buried deep in the massive initial columns. Always choose a move that reveals a hidden card over a move that just builds a sequence.
* **Empty Columns are Still King:** An empty column is the most powerful tool in the game, as it is the only place you can drop a King to start a fresh, clean sequence. Prioritize clearing the shorter columns first to create these spaces.
* **Don't Rush to the Foundations:** Just because you *can* move a Black 5 to the foundation doesn't mean you *should*. Sometimes keeping it on the tableau is necessary to hold a Red 4 that you desperately need to anchor a massive stack and reveal a hidden card.
* **Calculate the Cascade:** Before moving a massive stack, look at the card it leaves behind. Does moving this stack unblock a 4 that you desperately need for another column? Never move a card blindly.
* **Save Your Draw Cards:** Exhaust absolutely every single possible sequence and hidden-card reveal on the main board before you click the draw pile. Your draw pile is your lifeline.`
  },
  {
    title: "Traffic Racer 2",
    seoContent: `![Traffic Racer 2](https://www.htmlgames.com/uploaded/game/thumb800/trafficracer2800450.webp)

Traffic Racer 2 strips the sprawling, complex racing simulation genre down to its absolute, most tension-fueled and reflex-dependent core, placing players directly behind the wheel of a high-speed vehicle hurtling down a crowded, endlessly straight highway. Moving away from technical cornering or realistic physics tuning, this title is purely focused on high-speed logistical management and crash prevention. Set against a clean, top-down isometric or slightly angled view of a busy multilane road, your sole objective is to weave between slower-moving civilian cars, lumbering trucks, and unpredictable traffic patterns to rack up a massive high score without causing a catastrophic pileup. The atmosphere is intensely stressful and highly engaging; the volume of traffic continuously escalates, forcing you to constantly scan the horizon for tiny gaps. The visual presentation is highly polished, utilizing a vibrant aesthetic with crisp vehicle models that ensure trajectories are easily readable. Traffic Racer 2 is a pure, unadulterated test of spatial awareness, timing, and crisis management under extreme pressure.

## How to Play
* The primary objective is to survive as long as possible and achieve a massive high score by driving incredibly fast and passing other vehicles closely.
* Your car moves forward automatically, constantly accelerating.
* Use the \`Left Arrow\` and \`Right Arrow\` keys (or \`A\` and \`D\`) to steer your car between the lanes of the highway.
* Use the \`Up Arrow\` (or \`W\`) to manually engage a speed boost (if available) for extra points.
* Use the \`Down Arrow\` (or \`S\`) to hit the brakes and slow down to avoid an unavoidable collision.
* The game is instantly over if you physically crash into the back of another vehicle or the side barriers.
* Collect scattered coins or power-ups on the road to increase your score or gain temporary invincibility.

## Tips and Tricks
* **Look at the Horizon, Not Your Hood:** The most common mistake is staring directly at your own car. Your eyes should be permanently glued to the absolute furthest visible point on the highway. You must identify traffic clusters seconds before you reach them.
* **The "Near Miss" Mechanic:** In most traffic racing games, passing a civilian car incredibly closely at high speed (a "near miss") awards massive bonus points or fills your boost meter. Master the art of threading the needle.
* **Don't Get Boxed In:** Never drive directly next to a slow-moving truck if another car is coming up fast in the lane next to you. Always ensure you have an "out" (an empty lane) to escape into if a car suddenly swerves.
* **Use the Brakes Sparingly:** While braking is necessary to survive, relying on it too heavily destroys your momentum and ruins your high score. Try to navigate the traffic by steering, using the brakes only as an absolute last resort.
* **Anticipate Lane Changes:** Watch the civilian cars carefully. They will often subtly drift or use turn signals before changing lanes. Anticipate their movements and steer into the space they are vacating.`
  },
  {
    title: "Dream Pet Dimensions",
    seoContent: `![Dream Pet Dimensions](https://www.htmlgames.com/uploaded/game/thumb800/dream-pet-dimensions-800x450.webp)

Dream Pet Dimensions completely shatters the rules of traditional pathfinding puzzles (like Mahjong Solitaire or classic Onet) by ripping the 2D grid off the screen and forcing players to navigate a massive, fully rotatable 3D geometric cluster wrapped in an overwhelmingly adorable, pastel-colored animal aesthetic. You are not just looking at a flat image of tiles; you are actively spinning a floating monolith of glowing cubes featuring high-definition kittens, puppies, bunnies, and hamsters in three-dimensional space. Your objective is to find matching pairs, but the connections rely on 3D spatial awareness rather than simple top-down unblocking. The atmosphere is deeply calculating and demands an entirely new level of spatial awareness; you must constantly spin the board to verify which blocks are truly "free" on their sides. The visual presentation is exceptionally polished, utilizing crisp, vibrant graphics and soft lighting that ensures the puzzle remains perfectly readable even when rotating rapidly. Dream Pet Dimensions is a brilliant, uncompromising evolution of the matching genre.

## How to Play
* The primary objective is to completely dismantle the floating 3D pet structure by matching identical cubes before the timer expires.
* Use your \`Mouse\` (or arrow keys) to physically rotate the entire 3D puzzle cluster 360 degrees in any direction.
* Click an exposed cube to select it, then click a matching cube to instantly eliminate both.
* **The 3D Golden Rule:** A cube is strictly considered "free" and clickable ONLY if it has at least TWO of its adjacent sides completely exposed to empty air. (Top and bottom usually do not count; focus on the four vertical sides).
* If a cube is wedged tightly between other blocks on three sides, it cannot be selected.

## Tips and Tricks
* **Rotate Constantly:** You cannot solve this puzzle by staring at one side. You must constantly spin the structure after every single move to see if your removal unblocked a new cube on the opposite side of the cluster.
* **Clear the Protruding Corners:** Cubes sticking out of the sharpest corners of the 3D structure are the easiest to connect, because they naturally have three or four sides exposed to empty air. Clear the sharp edges instantly.
* **Work from the Outside In:** Do not try to drill a hole into the dead center of the 3D cluster. You must peel the structure like an onion, removing the outermost layer of cubes entirely before moving inward.
* **Don't Tunnel Vision:** If you can't find a match for a specific puppy cube, stop looking at it. Spin the board 180 degrees and look for an obvious, free match on the back to keep the timer from running down.
* **Use the Reshuffle (If Available):** If the board is massive and you are completely lost, use the shuffle button to scramble the remaining cubes. It often reveals obvious matches that were previously hidden inside the structure.`
  },
  {
    title: "Neon Hex",
    seoContent: `![Neon Hex](https://www.htmlgames.com/uploaded/game/thumb800/neonhex800450.webp)

Neon Hex fundamentally rewrites the rules of the traditional spatial logic puzzle (like Tangrams or classic Tetris) by abandoning the standard square grid and falling gravity in favor of a vastly more complex, static hexagonal matrix wrapped in a stunning, high-contrast cyberpunk aesthetic. Set against a dark, minimalist background, players are presented with a completely empty, specifically shaped grid composed of tiny hexagons. Below the grid are several massive, complex geometric shapes also constructed from hexagons. Your objective is elegantly simple yet brutally difficult in execution: you must physically drag the complex shapes into the grid and arrange them perfectly so that every single empty space is filled, with absolutely no overlapping pieces and no gaps remaining. The atmosphere is deeply cerebral and immensely satisfying; there is no timer, allowing for pure, unpressured geometric calculation. The visual presentation is highly polished, utilizing crisp, glowing neon colors that ensure the complex shapes remain perfectly readable. Neon Hex is a flawless test of spatial reconstruction and process of elimination.

## How to Play
* The primary objective is to completely fill the empty hexagonal grid at the top of the screen using ALL the provided shapes at the bottom.
* Use your \`Mouse\` to click, hold, and drag a neon shape from the bottom tray up into the main grid.
* Release the \`Left Mouse Button\` to drop the shape into place. It will snap to the grid if aligned correctly.
* **The Golden Rule:** You CANNOT rotate the pieces. You must play them in the exact orientation they appear in the tray.
* Pieces cannot overlap each other.
* The level is instantly completed when the grid is 100% full with no gaps and no pieces remaining in the tray.

## Tips and Tricks
* **Look for the Sharpest Corners First:** The absolute most critical strategy is identifying the pieces that contain sharp, narrow points or massive flat edges. A shape with a massive flat edge usually MUST fit against the absolute outer border of the main grid.
* **Find the "Forced" Moves:** Analyze the grid for tiny, one-block or two-block indentations along the perimeter. Look at your pieces. Often, there is only ONE specific piece in your entire tray that can physically fit into that specific corner. Place that piece first.
* **Process of Elimination:** Do not try to solve the entire board at once. If you place a large piece in the center, and it leaves a small 3-hex hole that doesn't match any piece in your tray, you know instantly that your first placement was wrong. Pull it out and try a different piece.
* **Work from the Outside In:** It is generally much easier to build the puzzle by forming the outer frame (the border) and working your way toward the center, rather than placing pieces blindly in the middle of the board.
* **Don't Be Afraid to Reset:** If the board is 90% full but the final piece doesn't fit, do not just stare at it. Rip three or four pieces out immediately and try a completely different permutation.`
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
