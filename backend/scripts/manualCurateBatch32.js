const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Mahjongg 3 Dimensions",
    seoContent: `![Mahjongg 3 Dimensions](https://www.htmlgames.com/uploaded/game/thumb800/mahjongg-3-dimensions-800450.webp)

Mahjongg 3 Dimensions completely shatters the rules of traditional pathfinding puzzles (like Mahjong Solitaire) by ripping the 2D grid off the screen and forcing players to navigate a massive, fully rotatable geometric cluster. You are not just looking at a flat image of traditional bamboo and character tiles; you are actively spinning a floating monolith of glowing, high-tech cubes in three-dimensional space. Your objective is to find matching pairs, but the connections rely entirely on 3D spatial awareness rather than simple top-down unblocking. The atmosphere is deeply calculating and demands an entirely new level of spatial visualization; you must constantly spin the board to verify which blocks are truly "free" on their sides. The visual presentation is exceptionally polished, utilizing crisp graphics and dynamic lighting that ensures the puzzle remains perfectly readable even when rotating rapidly. Mahjongg 3 Dimensions is a brilliant, uncompromising evolution of the matching genre that will completely test your ability to think outside the flat plane.

## How to Play
* The primary objective is to completely dismantle the floating 3D structure by matching identical cubes before the timer expires.
* Use your \`Mouse\` (or arrow keys) to physically rotate the entire 3D puzzle cluster 360 degrees in any direction.
* Click an exposed cube to select it, then click a matching cube to instantly eliminate both.
* **The 3D Golden Rule:** A cube is strictly considered "free" and clickable ONLY if it has at least TWO of its adjacent sides completely exposed to empty air. (Top and bottom usually do not count; focus on the four vertical sides).
* If a cube is wedged tightly between other blocks on three sides, it cannot be selected.

## Tips and Tricks
* **Rotate Constantly:** You cannot solve this puzzle by staring at one side. You must constantly spin the structure after every single move to see if your removal unblocked a new cube on the opposite side of the cluster.
* **Clear the Protruding Corners:** Cubes sticking out of the sharpest corners of the 3D structure are the easiest to connect, because they naturally have three or four sides exposed to empty air. Clear the sharp edges instantly.
* **Work from the Outside In:** Do not try to drill a deep hole into the dead center of the 3D cluster. You must peel the structure like an onion, removing the outermost layer of cubes entirely before moving inward.
* **Don't Tunnel Vision:** If you can't find a match for a specific cube, stop looking at it. Spin the board 180 degrees and look for an obvious, free match on the back to keep the timer from running down.
* **Use the Reshuffle (If Available):** If the board is massive and you are completely lost, use the shuffle button to scramble the remaining cubes. It often reveals obvious matches that were previously hidden inside the structure.`
  },
  {
    title: "Neon Lights",
    seoContent: `![Neon Lights](https://www.htmlgames.com/uploaded/game/thumb800/neon-lights-800450.webp)

Neon Lights strips the spatial logic genre down to its absolute, most mathematically pure and elegantly simple core, delivering a digital adaptation of the classic "Pipe Mania" or circuit-connecting puzzle. Set against a stark, high-contrast black grid, players are presented with a chaotic jumble of disconnected, glowing neon wires, corner pieces, T-junctions, and unlit lightbulbs. Somewhere on the board is a central power source (the battery). Your objective is intensely focused: you must physically click every single wire segment to rotate it, creating an unbroken electrical circuit that connects the main battery to every single lightbulb on the grid simultaneously. The atmosphere is deeply calculating and immensely satisfying, relying entirely on your ability to visualize continuous pathways and logical deductions. The visual presentation is highly functional, utilizing brilliant neon colors that light up sequentially as you build the circuit, ensuring the active pathways are perfectly readable. Neon Lights is a pure, unpressured test of geometric orientation.

## How to Play
* The primary objective is to light up every single neon bulb on the grid by connecting them all to the central power source.
* The grid is filled with various wire segments (straight lines, L-corners, T-junctions, and cross-pieces).
* Use your \`Mouse\` to click on any wire segment. Each click will instantly rotate the segment 90 degrees clockwise.
* You must rotate the pieces until they form a continuous, unbroken line leading from the battery to the bulbs.
* The level is complete when absolutely no bulbs are left dark, and there are no "loose ends" (wires leading nowhere) leaking power.

## Tips and Tricks
* **Start at the Dead Ends:** The absolute best place to start is with the lightbulbs themselves or the straight edge of the board. A bulb only has one connection point, so you know *exactly* which direction the wire attached to it must face. Lock those in first.
* **The Corners Reveal the Path:** If a piece is located in the extreme physical corner of the grid, it MUST be an L-shaped corner piece facing inward. It is physically impossible for a straight wire to point off the edge of the board.
* **Work Backwards from the Source:** Once you have locked in the outer edges and the bulbs, trace the path backward toward the central battery. This often reveals forced moves where only one specific rotation of a T-junction will complete the circuit.
* **No Loose Ends:** Many variations of this game require a "closed circuit," meaning no wire can be pointing off into empty space. If you have a T-junction and only two valid paths, that piece is likely incorrect and needs to be swapped for a corner piece.
* **Visualize the Flow:** Don't just click randomly. Look at a cluster of three bulbs and ask yourself: "How can a single wire branch out to hit all three of these?" The shape of the T-junctions usually dictates the answer.`
  },
  {
    title: "Neon Breaker",
    seoContent: `![Neon Breaker](https://www.htmlgames.com/uploaded/game/thumb800/neonbreaker800450.webp)

Neon Breaker delivers an absolutely brilliant, high-speed evolution of the legendary Arkanoid/Breakout arcade staple, fundamentally altering the structural demolition mechanics by replacing the slow, single bouncing ball with a chaotic, physics-driven barrage of glowing projectiles. Set against a stark, cyberpunk-inspired grid, you control a paddle (or a direct aiming reticle) at the bottom of the screen. Above you rests a massive, fortified ceiling of brightly colored neon blocks, each displaying a specific number indicating exactly how many times it must be hit before it shatters. Your objective is intensely focused: aim your launcher and unleash a rapid-fire stream of dozens of neon balls, calculating ricochets and trajectory angles to whittle down the block health before they slowly advance to the bottom of the screen. The atmosphere is deeply kinetic and visually overwhelming; the screen fills with glowing light trails as hundreds of collisions occur simultaneously. Neon Breaker is a pure shot of arcade adrenaline that demands flawless aiming and geometric calculation.

## How to Play
* The primary objective is to destroy the descending ceiling of numbered neon blocks before any block physically touches the bottom of the screen.
* You control an aiming reticle at the bottom of the screen.
* Use your \`Mouse\` to aim the trajectory line. This line often shows the exact path of the first few ricochets.
* Click the \`Left Mouse Button\` to unleash your entire stockpile of neon balls in a continuous stream.
* The balls will bounce off the walls, the ceiling, and the numbered blocks. Each collision reduces the block's number by one.
* When a block reaches zero, it shatters.
* After all balls return to the bottom, the entire block structure shifts downward by one row, and you get to shoot again.

## Tips and Tricks
* **The Horizontal Tunnel (The Golden Strategy):** Your absolute highest priority is finding a tiny gap between the blocks and the side wall. If you can fire your stream of balls *above* the main structure, they will bounce frantically between the ceiling and the top of the blocks, hitting them dozens of times per second.
* **Aim for the Corners:** Firing directly upward into a flat wall of blocks is incredibly inefficient because the balls just bounce straight back down. Always aim at shallow angles to force the balls to zig-zag horizontally through the structure.
* **Prioritize the Lowest Blocks:** While tunneling is the best strategy, if a block is one row away from hitting the bottom and ending the game, you MUST dedicate your entire next shot to destroying it, regardless of efficiency.
* **Collect the Extras:** Be on the lookout for white glowing orbs scattered among the blocks. Hitting these adds a permanent extra ball to your arsenal for every subsequent shot. Increasing your ball count is the only way to survive the high-numbered blocks later in the game.
* **Let the Physics Work:** Don't panic if your first few shots don't seem to do much damage. The game is about setting up the perfect angle and letting the ricochet engine do the heavy lifting.`
  },
  {
    title: "Time Mahjong",
    seoContent: `![Time Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/timemahjong800450.webp)

Time Mahjong delivers the absolute purest, most unadulterated distillation of the legendary Chinese tile-matching puzzle, but injects a massive dose of adrenaline by replacing the traditionally relaxed, meditative pace with a brutal, relentless ticking clock. Set against a clean, visually uncluttered background, players are presented with massive, overlapping pyramids of beautifully rendered, traditional ivory-colored tiles. Your objective is elegantly simple yet intensely stressful in execution: you must meticulously dismantle the massive structure by finding and matching identical pairs of tiles before the timer expires. However, this specific variant introduces crucial "Time Tiles" scattered throughout the board. Matching these specific tiles rewards you with precious extra seconds, turning the game into a frantic balancing act between making easy matches and digging specifically for the time bonuses to stay alive. The visual presentation is highly functional, utilizing crisp, high-contrast symbols to ensure perfect readability during high-speed scanning. Time Mahjong is the ultimate brain-training routine for speed-reading under pressure.

## How to Play
* Your primary objective is to clear all tiles from the board by matching them in identical pairs before the strict timer hits zero.
* Use your \`Left Mouse Button\` to click on a "free" tile to select it.
* Click on a matching "free" tile to instantly eliminate both from the board.
* **The Golden Rule of Freedom:** A tile is strictly considered "free" (and therefore clickable) ONLY if it has absolutely no other tile resting on top of it, AND it is completely unblocked on at least one of its immediate left or right vertical sides.
* **The Time Tiles:** Specifically look for glowing tiles or tiles featuring a clock icon. Matching these adds crucial seconds back onto your timer.

## Tips and Tricks
* **Prioritize the Time Bonuses:** If you see an easy match of Bamboo tiles, but you also see a slightly more difficult match that clears a Time Tile, ALWAYS take the Time Tile first. You are fighting the clock more than the board layout.
* **Dismantle the Towers First:** Always focus your absolute highest priority on breaking down the tallest, thickest stacks of tiles in the dead center of the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves when the clock is low.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board offers vastly more horizontal matching options and reveals more hidden tiles simultaneously.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach tiles on the very outer edge of the board, ignore them! Save them. You might desperately need those outer tiles later to match a tile buried deep in the center tower to unlock a Time Tile.
* **Scan Rapidly:** Do not stare at one specific tile looking for its mate. Keep your eyes constantly moving across the entire board, relying on peripheral vision to spot identical shapes.`
  },
  {
    title: "Tower of London Solitaire",
    seoContent: `![Tower of London Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/toweroflondonsolitaire800450.webp)

Tower of London Solitaire is an incredibly deep, mathematically rich variation of Freecell that fundamentally alters the classic open-information structure, offering a brutal, highly tactical puzzle wrapped in a polished aesthetic. Unlike standard Klondike, all 52 cards are dealt face-up immediately, but they are arranged into a massive, heavily overlapping tableau. Your objective is elegantly simple yet incredibly unforgiving: you must maneuver the cards to build four complete sequences in the foundation piles, from Ace up to King by suit. The atmosphere is deeply calculating and intensely strategic, requiring players to possess a masterful understanding of card sequencing, cascade math, and long-term tactical sacrifice. The defining feature of this variant is the extreme limitation on "free cells" (temporary holding slots). You must meticulously manage the limited empty space to juggle massive stacks of alternating-color cards without permanently blocking your access to the crucial lower layers. Tower of London Solitaire is an uncompromising test of logic for veteran card players.

## How to Play
* The primary objective is to move all 52 cards into the four foundation piles at the top right, building upward in suit from Ace to King.
* All 52 cards are dealt face-up into the main tableau columns at the start of the game.
* Use your \`Mouse\` to click and drag cards between columns.
* **The Tableau Rule:** You can build cards downward on the tableau in **alternating colors** (e.g., a Red 8 can only be placed on a Black 9).
* **The Free Cells:** You have a very limited number of open slots at the top left of the screen. You can temporarily park any single card into an empty free cell to get it out of the way.
* You can move entire valid sequences of alternating-color cards between tableau columns, BUT the number of cards you can move at once is strictly limited by the number of empty free cells and empty tableau columns you currently have available.

## Tips and Tricks
* **Protect the Free Cells:** Your free cells are your absolute most valuable resource. Never park a card in a free cell unless you have a concrete, immediate, multi-step plan to get it back out onto the tableau shortly after. A clogged free cell is a death sentence.
* **Empty Columns are Pure Gold:** An empty tableau column is infinitely more valuable than a free cell. It allows you to park entire sequences or start a fresh cascade with a King. Prioritize clearing the shorter columns first to create these spaces.
* **Unearth the Aces Early:** Your entire early game must focus heavily on excavating the four Aces so they can be moved to the foundations. The game cannot progress without them.
* **Calculate the Cascade:** Before moving a massive stack, look at the card it leaves behind. Does moving this stack unblock a 4 that you desperately need for another column? Never move a card blindly.
* **Build Evenly:** Try to build the four foundation piles at roughly the same pace. If you rush all your Spades up to the King while your Hearts are still on the 2, you will likely realize you desperately need the 5 of Spades back on the tableau to hold a Red 4.`
  },
  {
    title: "Restaurant Hidden Differences",
    seoContent: `![Restaurant Hidden Differences](https://www.htmlgames.com/uploaded/game/thumb800/restauranthiddendifferences800x450.webp)

Restaurant Hidden Differences strips the observational puzzle genre down to its absolute, most mathematically pure and elegantly simple core, delivering a digital adaptation of the classic "Spot the Difference" mechanic. Set against a series of stunningly detailed, high-definition digital illustrations showcasing bustling restaurant kitchens, elegant dining rooms, cozy cafes, and chaotic chef stations, players are presented with two seemingly identical images side-by-side. Your objective is intensely focused: you must meticulously scan both images simultaneously, comparing every single pixel to locate the subtle, minute discrepancies between them. The atmosphere is deeply calculating and intentionally demanding, requiring an intense level of visual parsing and short-term memory retention. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every misplaced spoon, slightly altered shadow, or missing slice of bread is rendered with breathtaking clarity. Restaurant Hidden Differences is the ultimate brain-training routine for acute observation.

## How to Play
* The primary objective is to find all the subtle differences between the two side-by-side images before the timer expires.
* Carefully compare the left image to the right image.
* When you spot a discrepancy (e.g., a missing coffee cup, a differently colored plate, an extra chair), use your \`Mouse\` to click directly on the difference in EITHER of the two images.
* Successfully locating a difference will circle it and update your counter.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.

## Tips and Tricks
* **The "Magic Eye" Technique (Cross-Eyed Method):** This is the ultimate, high-level trick for this genre. Stare directly between the two images and intentionally cross your eyes until the two images perfectly overlap and merge into a single, central 3D image. When they overlap perfectly, any differences between the two will physically appear to shimmer, vibrate, or look "holographic," allowing you to spot them instantly without consciously searching.
* **Scan Methodically:** If you cannot cross your eyes, do not just stare at the whole screen randomly. Mentally divide the image into a grid. Meticulously scan the top-left quadrant of both images, then move to the top-right, etc.
* **Look for Missing Geometry:** The most common differences are entire objects being removed (a missing salt shaker) or extra objects being added (an extra bird out the window). Look for empty spaces where something *should* be.
* **Check the Textures and Colors:** The developers love subtly changing the color of an object (e.g., turning a red wine glass into a white wine glass) or altering a pattern (e.g., changing the stripes on a chef's apron).
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Link Numbers",
    seoContent: `![Link Numbers](https://www.htmlgames.com/uploaded/game/thumb800/linknumbers800450.webp)

Link Numbers fundamentally rewrites the rules of the traditional spatial logic puzzle (like Sudoku or classic connect-the-dots) by abandoning rigid straight lines in favor of a highly complex, free-flowing numerical cascade system. Set against a clean, visually minimalist grid, players are presented with a board filled with numbered blocks. Your objective is intensely focused: you must physically draw a continuous, snaking line through the grid, connecting adjacent numbers (horizontally, vertically, or diagonally) in strict ascending or descending order. However, the catch is that you must combine identical numbers to create the next number in the sequence (e.g., connecting a 2 to a 2 creates a 3). The atmosphere is deeply cerebral and immensely satisfying; you are essentially managing a massive game of localized addition while simultaneously planning a massive, board-spanning geometric route. The visual presentation is highly functional, utilizing crisp, high-contrast typography that ensures the complex numerical pathways remain perfectly readable. Link Numbers is a pure test of sequence planning and arithmetic logic.

## How to Play
* The primary objective is to link numbered tiles together to form higher numbers and clear the board.
* Use your \`Mouse\` to click and hold the \`Left Mouse Button\` on a starting number.
* Drag your mouse across adjacent tiles (horizontally, vertically, or diagonally) to connect them.
* **The Linking Rule:** You must connect tiles of the EXACT SAME number to merge them into a tile of the next highest value (e.g., Link 1-1-1 to create a 2. Link 2-2 to create a 3).
* You can connect long chains of identical numbers (e.g., 2-2-2-2-2). The more tiles you link in a single chain, the higher your score multiplier.
* Release the mouse button to merge the connected tiles into a single, upgraded tile at the exact location of the *last* tile in your chain.

## Tips and Tricks
* **Control the Merge Point:** The absolute most critical mechanic in this game is understanding that the new, upgraded number spawns exactly where you *release* your mouse click. Always end your chain in a strategic location (usually right next to another high number) to set up your next combo.
* **Build Massive Chains:** While linking two 4s is fine, linking five 4s is vastly superior. Spend time setting up the board by linking smaller numbers (like 1s and 2s) to strategically position a massive, continuous line of identical higher numbers.
* **Don't Strand the High Numbers:** If you randomly spawn an 8 in the top left corner, and another 8 in the bottom right, it will be incredibly difficult to eventually link them because of the massive physical distance. Keep your high numbers grouped tightly together in the center of the board.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers cascading tiles dropping from the ceiling, often resulting in free, accidental combos as the board settles.
* **Think Backwards:** If your goal is to create a 10, ask yourself: "Where are my 9s?" Then ask, "How can I merge my 8s to place a 9 directly next to my existing 9?" Work the arithmetic backward from the goal.`
  },
  {
    title: "Tesla Defense",
    seoContent: `![Tesla Defense](https://www.htmlgames.com/uploaded/game/thumb800/tesladefense800450.webp)

Tesla Defense delivers an absolutely brilliant, high-voltage fusion of the traditional Tower Defense genre and visceral, active-shooter arcade mechanics. Set against a dark, industrial, steampunk-inspired aesthetic, players are placed in control of a massive, stationary Tesla coil anchoring the center of the map. Rather than passively watching automated turrets do all the work, your objective is intensely hands-on: you must actively aim and fire devastating arcs of electricity at relentless swarms of incoming enemy soldiers, tanks, and aircraft trying to destroy your generator. Between the frantic waves, the game layers in deep strategic complexity, allowing you to spend collected resources to deploy automated support towers, upgrade your main coil's voltage, or call in orbital strikes. The atmosphere is deeply kinetic and incredibly stressful; you are constantly balancing your own active aiming with the macro-management of your automated defenses. The visual presentation is highly polished, utilizing crisp, metallic sprites and spectacular, screen-shaking lighting effects when the electricity arcs. Tesla Defense is a pure shot of strategic adrenaline.

## How to Play
* The primary objective is to protect your central Tesla coil from being destroyed by increasingly difficult waves of enemies.
* **Active Defense:** Use your \`Mouse\` to aim the crosshairs at incoming enemies.
* Click and hold the \`Left Mouse Button\` to unleash a continuous stream of electricity from your main Tesla coil to fry the target. (Watch your energy meter; it can overheat or deplete).
* **Strategic Defense:** Between waves (or during combat), use the menu at the bottom of the screen to purchase and deploy automated defensive towers (like smaller coils, mines, or anti-air flak) by dragging them onto the battlefield.
* Defeating enemies earns you money, which is used to upgrade your main coil's damage, increase your health, or buy more advanced automated towers.

## Tips and Tricks
* **Prioritize the Immediate Threat:** Do not just shoot at the enemies furthest away. Always prioritize the enemies that are physically closest to your central coil, or the heavy tanks that deal massive damage.
* **Manage Your Energy:** The absolute most common cause of death is holding down the fire button too long, completely draining your main coil's energy, and leaving yourself defenseless while it recharges. Fire in controlled bursts. Let the electricity arc, then stop to recharge.
* **Build Choke Points:** Do not place your automated towers randomly. Study the paths the enemies take and cluster your automated defenses in tight groups at intersections, creating massive kill zones where enemies take damage from multiple sources simultaneously.
* **Don't Forget Anti-Air:** Ground defenses are useless against bombers. Always ensure you have dedicated anti-air towers deployed, or you will have to spend all your personal energy shooting the sky instead of defending the ground.
* **Upgrade the Core First:** While buying ten small towers is tempting, upgrading the raw damage output and energy capacity of your main, player-controlled Tesla coil is usually the most efficient use of early-game funds.`
  },
  {
    title: "Summer Mahjong",
    seoContent: `![Summer Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/summermahjong800450.webp)

Summer Mahjong plunges the ancient, highly structured mechanics of traditional Chinese tile-matching into a breathtaking, deeply atmospheric environment of sun-drenched beaches, crashing waves, and tropical vacations. Moving far beyond the sterile, flat green felt of standard solitaire games, this title constructs massive, complex architectural pyramids using beautifully illustrated tiles depicting incredibly crisp, high-definition flip-flops, sunglasses, palm trees, cocktails, and seashells. The atmosphere is incredibly relaxing and immersive, trading the tense ticking clocks of arcade games for a soothing, colorful puzzle environment that feels genuinely warm and inviting. You are tasked with analyzing towering, overlapping tile structures, meticulously searching for exposed pairs to dismantle the board. The visual presentation is exceptionally polished, utilizing bright, highly saturated color palettes that simulate intense summer sunlight, making identifying matching items incredibly intuitive, even when the board is massively congested. Summer Mahjong is a highly successful thematic reskin, proving that a timeless puzzle formula can be completely refreshed with a strong, cohesive artistic vision.

## How to Play
* Your objective is to completely clear the entire screen by matching identical pairs of summer-themed tiles.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles heavily overlap, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden items buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, you lose.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach sunglasses tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a sunglasses tile buried deep in the center tower.
* **Memorize the Colors:** Because some tiles might look slightly similar (e.g., two different cocktails), take a moment to mentally categorize them by their dominant color (like "the blue drink" or "the red umbrella") to speed up your scanning.
* **Use the Reshuffle (If Available):** Treat the shuffle button like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably dead.`
  },
  {
    title: "Toy Factory",
    seoContent: `![Toy Factory](https://www.htmlgames.com/uploaded/game/thumb800/toy-factory-800450.webp)

Toy Factory injects a massive dose of whimsical, high-energy charm into the highly competitive tile-collapsing genre (often called "Blast" or "Collapse" games), delivering a visual feast of cute plushies and intensely satisfying combination mechanics. Stepping entirely away from generic gem-swapping, this title embraces a highly thematic approach. You are presented with a massive grid filled with brightly colored, solid blocks. Resting on top of these blocks are various stuffed animals (bears, bunnies, penguins) that need to be "collected" by safely dropping them to the very bottom of the screen. Your objective is to rapidly scan the board and click on massive, pre-existing clusters of identical colored blocks to instantly shatter them, causing the entire column to collapse under gravity, inching the toys closer to the bottom. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition sprites that crackle with kinetic energy when large chunks are cleared. Toy Factory is a pure, unadulterated test of spatial planning, cascade optimization, and gravity management.

## How to Play
* The core mechanic revolves around clicking clusters of identical colored blocks to remove them from the board.
* Use your \`Mouse\` to click on any group of TWO OR MORE identically colored blocks that are touching horizontally or vertically.
* When clicked, the entire cluster vanishes instantly, and gravity causes the blocks above them to fall down.
* **The Primary Objective:** Specific toys (like a stuffed bear) are resting on top of the blocks. You must collapse the columns beneath them until the toy physically touches the absolute bottom row of the screen, removing it from the board.
* You must collect the required number of toys before you run out of allowed moves.
* Clearing massive clusters (e.g., 6 or 8 blocks at once) often spawns powerful rockets or bombs that can clear entire rows or columns.

## Tips and Tricks
* **Work from the Bottom:** Always prioritize clicking clusters at the lowest possible points on the grid. This triggers the maximum amount of gravity shifting, often causing blocks higher up to naturally fall into massive, pre-aligned super-clusters without you having to waste a move.
* **Don't Isolate the Toys:** The absolute worst thing you can do is accidentally clear all the blocks in a column *except* the ones directly under a toy, stranding the toy on a tall, narrow pillar of unmatchable colors. Always ensure you have a planned route to the bottom.
* **Combine the Power-Ups:** The most devastating move in the game is activating two power-ups that are sitting directly next to each other. Combining a rocket with a bomb creates a massive, cross-shaped explosion that clears half the factory instantly.
* **Save the Bombs for the Pillars:** If a toy gets stranded on a narrow pillar, do not panic. Use your remaining moves to build a bomb or rocket on an adjacent column, then detonate it to blast away the obstructing pillar.
* **Focus on the Objective:** If you only need to rescue one more toy on the far left side, completely ignore the massive, satisfying cluster of red blocks on the far right side. Every move must serve the objective.`
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
