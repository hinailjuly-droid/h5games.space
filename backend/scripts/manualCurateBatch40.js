const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Tripeaks Farm",
    seoContent: `![Tripeaks Farm](https://www.htmlgames.com/uploaded/game/thumb800/tripeaksfarm800450.webp)

Tripeaks Farm takes the immensely popular, rapid-fire mechanics of sequential matching (often seen in Golf Solitaire variants) and applies them to a highly structured, massively overlapping architectural layout, all wrapped in a charming, relaxing agricultural aesthetic. Moving entirely away from the complex alternating-color rules and deep tableau sorting of standard Klondike, this title deals a massive grid of face-up cards into three distinct "peaks" representing your unharvested crops. The objective is lightning-fast and sequentially pure: you simply click exposed cards on the peaks that are exactly one value higher or lower than your current active card at the bottom of the screen. The atmosphere is deeply relaxing yet inherently fast-paced; there is no complex math, just pure pattern recognition and chain-reaction planning. The visual presentation is highly polished, utilizing crisp, traditional playing cards set against a soothing farm background complete with barns and tractors, ensuring perfect readability even when the massive three-peaked structure is heavily congested.

## How to Play
* The primary objective is to clear all the cards from the three massive, overlapping peaks on the board (the harvest).
* You have a single face-up "active" card at the bottom of the screen next to your draw pile.
* Use your \`Left Mouse Button\` to click any fully exposed card on the peaks that is exactly ONE value higher or ONE value lower than your active card.
* **Examples:** If your active card is an 8, you can click a 7 or a 9. Suit and color do not matter at all.
* **The Ace Loop:** Kings connect to Aces, and Aces connect to 2s. (e.g., King -> Ace -> 2 -> 3).
* A card is strictly considered "exposed" only if there is absolutely no other card resting on top of it.
* If you have no valid moves on the board, click the face-down draw pile to reveal a new active card.

## Tips and Tricks
* **Plan Your Chains (Look Ahead):** Do not just click the first valid card you see. Look at the board and map out a massive combo chain. If your active card is a 5, and the board has a 6, 7, 8, 7, 6... you can clear all five of those cards in one continuous sweep without drawing.
* **Dig Evenly:** Try to dismantle the three peaks at roughly the same pace. If you completely destroy the left tower while the right tower is still untouched, you severely limit your options later in the game when you need specific numbers.
* **Uncover the Hidden Cards:** If you have a choice between playing an exposed 7 that doesn't unlock anything, or a different exposed 7 that uncovers two face-down cards beneath it, ALWAYS choose the one that reveals more information.
* **Save Your Draw Cards:** Exhaust absolutely every single possible sequence on the main board before you click the draw pile. Your draw pile is your lifeline; wasting it early is a guaranteed loss.
* **The "Undo" Button (If Available):** Use it strategically! If you break a massive combo by clicking the wrong 9, undo the move and correct your sequence.`
  },
  {
    title: "Maya Golf 2",
    seoContent: `![Maya Golf 2](https://www.htmlgames.com/uploaded/game/thumb800/mayagolf2800450.webp)

Maya Golf 2 delivers a brilliant, highly kinetic evolution of the physics-based sports puzzle genre (specifically mini-golf), completely abandoning the manicured green lawns of country clubs in favor of a breathtaking, perilous journey through ancient, overgrown Mesoamerican ruins. Set against a series of stunningly detailed, high-definition digital illustrations showcasing crumbling stone temples, dense jungle foliage, and treacherous water hazards, players are tasked with navigating complex, multi-tiered obstacle courses. Your objective is intensely focused: you must carefully calculate the angle of ricochet and the raw kinetic power of your swing to put the golf ball into the target hole using the absolute minimum number of strokes. The atmosphere is deeply engaging and surprisingly tranquil, accompanied by the ambient sounds of the jungle, contrasting sharply with the intense spatial calculation required to navigate the stone ramps, rotating totems, and steep drop-offs. Maya Golf 2 is a pure shot of physics-based puzzling.

## How to Play
* The primary objective is to sink the golf ball into the glowing hole at the end of the course using as few strokes as possible (Par).
* Use your \`Mouse\` to click and hold anywhere on the screen (or directly on the ball, depending on the control scheme).
* Drag the mouse *away* from the ball to draw an aiming line. The length of the line dictates the raw power of the shot; the direction dictates the angle.
* Release the \`Left Mouse Button\` to swing the putter and launch the ball.
* The ball will bounce realistically off stone walls, roll down slopes, and interact with the environment.
* You must wait for the ball to come to a complete stop before you can take your next shot.

## Tips and Tricks
* **Use the Walls (The Bank Shot):** In almost every level, the hole is impossible to hit with a straight, linear shot. You MUST learn to calculate the angle of incidence. Hit the ball aggressively into a flat stone wall to bounce it around a sharp corner.
* **Respect the Ramps:** Power is not always the answer. If you hit a ball at 100% power up a steep ramp, it will launch off the top and fly completely out of bounds. You must use a soft, controlled tap to gently crest the hill so gravity can take over on the descent.
* **Scout the Level First:** Do not just step up and smash the ball. Take five seconds before your first stroke to visually trace the path to the hole. Look for shortcuts, hidden ramps, or dangerous sand traps you need to avoid.
* **Friction Matters:** The ball will roll differently on smooth stone than it will on rough dirt or sand. Account for the surface friction when calculating your power.
* **Patience on Moving Obstacles:** If a massive stone block is sliding back and forth blocking the path, do not try to time your shot as it moves. Wait for it to reach the absolute edge of its patrol route, pause, and then fire.`
  },
  {
    title: "Jewel Match3",
    seoContent: `![Jewel Match3](https://www.htmlgames.com/uploaded/game/thumb800/jewelmatch3800450.webp)

Jewel Match3 delivers the absolute purest, most unadulterated distillation of the legendary tile-swapping puzzle formula, completely stripping away the bloated narratives, unnecessary mini-games, and complex meta-progression that plague modern iterations of the genre. This is the genre exactly as it was meant to be played: a massive grid filled with brightly colored, hyper-realistic gemstones—diamonds, rubies, sapphires, and emeralds. Your objective is intensely focused: manually swap adjacent gems to form horizontal or vertical lines of three or more, triggering satisfying cascade reactions to reach a massive high score before the strict timer expires. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of pattern recognition and explosive combos. The visual presentation is highly polished, utilizing crisp, high-definition sprites that crackle with magical energy, screen-shaking explosions, and flashy particle effects when massive combos are triggered. Jewel Match3 is a pure, uncompromising test of spatial logic and high-speed cascade optimization.

## How to Play
* The core mechanic revolves around swapping adjacent jewels to create horizontal or vertical lines of three or more identical gems.
* Use your \`Mouse\` to click on a jewel, then click an adjacent one to swap their positions, or simply click and drag.
* Swaps are only permitted if they immediately result in a valid match of three or more.
* Your objective is to score as many points as possible before the timer bar at the top of the screen empties completely.
* Matching exactly four jewels creates a glowing, line-clearing explosive gem.
* Matching five jewels in an L or T shape creates a devastating area-of-effect bomb.
* Matching five jewels in a straight row creates a hyper-cube that obliterates all jewels of a specific color from the board.

## Tips and Tricks
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading jewels dropping from the ceiling, often resulting in massive, free combo points that require zero effort on your part.
* **Combine the Power-Ups:** The most devastating move in the game is swapping two power-ups with each other. Swapping a line-clear gem with a bomb creates a massive, cross-shaped explosion that clears half the board instantly, scoring massive points and triggering huge cascades.
* **Scan During Animations:** Do not just watch the explosions! While a massive cascade is happening on the left side of the board, use that split second to scan the right side of the board and locate your next move. In a timed game, every millisecond counts.
* **Set Up the Hyper-Cube:** When you see the potential for a 5-in-a-row match, do everything in your power to execute it. The color-clearing hyper-cube is the single most powerful tool for manipulating the board state and saving a dying timer.
* **Don't Force Bad Matches:** If you have a choice between a 3-gem match at the top of the board, or spending two seconds looking for a match at the bottom, take the top match immediately. Constant movement is better than perfect movement.`
  },
  {
    title: "Olko",
    seoContent: `![Olko](https://www.htmlgames.com/uploaded/game/thumb800/olko800450.webp)

Olko is a brilliant, brutally minimalist deconstruction of the traditional Mahjong Solitaire formula, stripping away the massive 3D pyramids and complex layering mechanics in favor of a purely flat, intensely restrictive 2D puzzle. Set against a clean, visually uncluttered background, players are presented with a solid block of tightly packed tiles featuring abstract, high-contrast symbols. Your objective is elegantly simple yet incredibly difficult in execution: you must completely clear the board by finding and clicking groups of identical tiles. However, the game introduces a massive structural caveat: you can ONLY select tiles that are physically touching the empty space at the absolute edges of the main cluster (the perimeter). You cannot click tiles buried in the center, even if you can see a matching pair. The atmosphere is deeply calculating and immensely satisfying, relying entirely on your ability to visualize the "peeling" of the structure. Olko is a pure, unpressured test of sequence planning and perimeter management.

## How to Play
* Your primary objective is to clear all tiles from the board by clicking on them.
* In Olko, you do not have to match pairs. You simply click on groups of identical tiles.
* **The Perimeter Rule:** You can ONLY click on tiles that are located on the extreme outer edge of the cluster. The tile must have at least one of its four sides touching the empty space surrounding the puzzle.
* If a tile is completely surrounded by other tiles on all four sides (buried in the center), it cannot be clicked, even if it matches something else on the board.
* Click a valid group on the perimeter to remove them, exposing the tiles that were buried behind them, creating a new perimeter.
* The game is won when the board is completely clear.

## Tips and Tricks
* **Work the Corners:** The tiles located on the absolute four corners of the cluster are the most valuable pieces on the board. Removing a corner tile often instantly exposes two new tiles on different sides of the board. Always prioritize clearing corners.
* **Don't Drill Deep Holes:** Try to peel the tiles away evenly across the entire perimeter of the board. If you drill a deep, narrow hole straight into the center, you create a long, jagged channel that severely restricts your horizontal matching options.
* **Calculate the Exposure:** Before you click a group of tiles on the edge, look directly behind them. If you remove them, what specific tiles will be exposed? Will exposing those new tiles create a brilliant combo, or will they just be useless clutter?
* **Scan for Deadlocks:** If you only have two red tiles left, and one is buried deep in the center, you must carefully plan your perimeter peeling to eventually reach that specific tile without running out of moves.
* **Patience:** There is no timer. Take your time to mentally trace the layers of the puzzle before making your first click.`
  },
  {
    title: "City Fuse",
    seoContent: `![City Fuse](https://www.htmlgames.com/uploaded/game/thumb800/cityfuse800450.webp)

City Fuse fundamentally rewrites the rules of the traditional Match-3 and town-building genres by merging them into a highly complex, spatially demanding puzzle of urban development. Set against a clean, visually minimalist isometric grid, players are presented with an empty plot of land. Your objective is intensely focused: you are given a queue of basic structures (like single houses or bushes). You must physically click on the grid to drop these items into place. When three or more identical structures are touching, they instantly merge (fuse) into a single, highly upgraded building (e.g., three small houses fuse into a large mansion; three mansions fuse into a massive skyscraper). The ultimate goal is to build the most advanced metropolis possible before the grid completely fills up and deadlocks. The atmosphere is deeply cerebral and immensely satisfying; you are essentially managing a massive game of localized arithmetic while simultaneously planning urban zoning. City Fuse is a pure test of sequence planning and inventory management.

## How to Play
* The primary objective is to strategically place and merge structures to create a massive city without running out of space on the grid.
* Look at the "Next Item" queue to see what structure you are about to place.
* Use your \`Mouse\` to click on any empty square on the main grid to drop the structure there.
* **The Fusion Rule:** When THREE OR MORE identical structures are placed adjacent to each other (horizontally or vertically, not diagonally), they instantly merge into a single, upgraded building.
* The new, upgraded building will spawn in the exact location of the *last* structure placed to trigger the merge.
* The game ends when every single square on the grid is filled and no more fusions are possible.

## Tips and Tricks
* **Control the Merge Point:** The absolute most critical mechanic in this game is understanding that the new, upgraded building spawns exactly where you *click* to trigger the merge. Always end your chain in a strategic location (usually an open corner) to avoid trapping the massive skyscraper in the center of the board.
* **Group by Tiers:** Dedicate specific areas of your grid to specific tiers of buildings. Keep all your small houses on the left side, and your medium mansions on the right side. Mixing them randomly will quickly clog the board.
* **Build Massive Chains:** While three items are required to merge, connecting five or more simultaneously often yields massive bonus points and sometimes skips a tier entirely.
* **Use the "Trash" or "Swap" (If Available):** Many variations of this game give you a limited ability to trash a useless item (like a rock) or swap your current item for the next one in the queue. Save these abilities for absolute emergencies when the board is about to deadlock.
* **Think Ahead:** Before placing a house to trigger a mansion merge, ask yourself: "When this becomes a mansion, will it be sitting next to two other mansions, triggering a secondary skyscraper merge?" Set up chain reactions.`
  },
  {
    title: "Bubble Ball",
    seoContent: `![Bubble Ball](https://www.htmlgames.com/uploaded/game/thumb800/bubbleball800450.webp)

Bubble Ball strips the sprawling, complex physics-shooter genre down to its absolute, most tension-fueled and reflex-dependent core, delivering a pure, unadulterated test of spatial calculation, ricochet physics, and trajectory management. Moving entirely away from chaotic combat or complex inventories, this title is focused on a highly stylized, almost neon-minimalist puzzle environment. Set against a clean grid, players are presented with a stationary launcher and a series of scattered target bubbles. Your objective is elegantly simple yet brutally difficult in execution: you must calculate the exact angle of ricochet and pull back your launcher to shoot a projectile into the central target hole, often bouncing off walls and navigating around impenetrable barriers. The atmosphere is deeply engaging; there is no timer, only the pressure of limited shots and the devastating consequences of a miss. The visual presentation is highly polished, utilizing realistic bounce physics and crisp graphics. Bubble Ball is a flawless tactical experience.

## How to Play
* The primary objective is to shoot the projectile bubble directly into the central target hole.
* Use your \`Mouse\` to click and hold directly on the projectile bubble (or the launcher).
* Drag the mouse *backward*, away from the target, to draw the bowstring and build tension (power).
* Move the mouse up and down to adjust the angle of your shot. A dotted trajectory line will often appear, showing the initial path and the first bounce.
* Release the \`Left Mouse Button\` to fire the bubble.
* **The Ricochet Mechanic:** Your bubble does not just fly straight; it bounces wildly off the walls of the arena. You must use these ricochets to hit the target if a direct line of sight is blocked.

## Tips and Tricks
* **Think Like a Pool Player:** This game is essentially billiards with bubbles. You must constantly calculate the angle of incidence (the angle the bubble hits the wall) to predict the angle of reflection. A shallow hit results in a shallow bounce; a sharp hit results in a sharp bounce.
* **Use the Screen as a Ruler:** If you miss a shot by an inch, do not blindly guess on the next shot. Look at where your mouse pointer was physically located on your monitor (e.g., exactly next to a specific grid line in the background). Use that physical point as a reference to adjust your angle slightly.
* **Max Power Isn't Always Best:** While drawing the launcher back to 100% power makes the bubble fly faster, it isn't always the correct solution. Sometimes you need a soft, controlled tap to gently bounce the ball around a tight corner.
* **Trace the Path Mentally:** Before you fire, trace the full path of the bubble in your mind. If it hits the left wall, where will it go? If it hits the top wall next, where will it end up?
* **Patience is Key:** You are not on a timer. Do not rapid-fire shots. Take a deep breath, analyze the distance, calculate the arc, and take the shot only when you are perfectly confident.`
  },
  {
    title: "Waterfall - Hidden Stars",
    seoContent: `![Waterfall - Hidden Stars](https://www.htmlgames.com/uploaded/game/thumb800/waterfallhiddenstars800450.webp)

Waterfall - Hidden Stars is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core. Forget convoluted storylines or searching for random household items; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within breathtaking nature photography. You are placed directly into a series of stunningly detailed, high-definition images showcasing majestic, cascading waterfalls, lush jungle rivers, and misty mountain streams. Your objective is elegantly simple: locate the subtle, minute "stars" expertly blended into the photograph. These are not massive, glowing objects, but tiny visual anomalies—faint outlines perfectly camouflaged into the white foam of the crashing water, the wet rocks, or the deep green moss. The atmosphere is deeply relaxing, accompanied by the soothing, ambient sound of rushing water. Waterfall - Hidden Stars is the ultimate brain-training routine for acute observation.

## How to Play
* Your objective is to find every single hidden star camouflaged within the main high-definition waterfall photograph.
* Use your \`Mouse\` to carefully scan the high-definition image.
* When you spot the faint outline of a star, click directly on it.
* Successfully locating a star will highlight it and update your counter.
* The counter at the top of the screen displays exactly how many stars are left to find in the current level.
* Be precise! Randomly spam-clicking around the screen will often result in a time penalty or a temporary point deduction.

## Tips and Tricks
* **Scan Methodically:** Do not just stare at the whole screen randomly. Mentally divide the image into a tight grid. Meticulously scan the top-left quadrant of the image, analyzing every single splash of water or crack in the rock, before moving to the top-right.
* **Look for Broken Patterns:** The star outlines often disrupt the natural flow of the image. Look for areas in the water where the foam seems to form an unnaturally perfect geometric point, or where the texture of a rock looks slightly distorted.
* **Check the Extremes (Shadows and Glare):** The developers love hiding stars inside the deep black shadows beneath the rocks, or hiding them directly inside the blown-out, pure white glare of the crashing waterfall itself. Adjust your monitor brightness!
* **Step Back:** If you are completely stuck on the final star, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the hidden geometry suddenly pop out.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Weave Lines",
    seoContent: `![Weave Lines](https://www.htmlgames.com/uploaded/game/thumb800/weavelines800450.webp)

Weave Lines fundamentally rewrites the rules of the traditional spatial logic puzzle (like connecting dots or un-tangling wires) by abandoning rigid grids in favor of a highly complex, free-flowing geometric manipulation system. Set against a clean, visually minimalist background, players are presented with a chaotic jumble of intersecting, elastic lines stretched between various anchor points (nodes). Above this jumble is a small "Target Pattern" showing a specific, perfectly symmetrical geometric shape. Your objective is intensely focused and brutally unforgiving: you must physically drag the anchor points around the screen to untangle the lines and perfectly recreate the target pattern. The atmosphere is deeply cerebral and intentionally demanding, requiring an intense level of forward-thinking, spatial visualization, and topological logic. The visual presentation is highly functional, utilizing crisp, contrasting lines that ensure the complex web remains perfectly readable. Weave Lines is a pure test of geometric routing.

## How to Play
* The primary objective is to manipulate the elastic lines to exactly match the target shape shown at the top of the screen.
* The main puzzle consists of several lines connected by glowing dots (anchor nodes).
* Use your \`Mouse\` to click and hold the \`Left Mouse Button\` on any anchor node.
* Drag the node to a new location on the screen. The lines attached to it will stretch and follow.
* **The Weaving Rule:** You can drag a line over an existing anchor node to "pin" it there, essentially creating a new vertex and splitting the line in two, allowing for more complex shapes.
* The level is complete when your manipulated web perfectly mirrors the geometry of the target image.

## Tips and Tricks
* **Count the Nodes:** Before you move anything, count the number of nodes (dots) in the target pattern, and compare it to the number of nodes in your starting jumble. This tells you exactly how many times you will need to "pin" a line over a node to create new vertices.
* **Identify the Perimeter:** Look at the target shape and identify its absolute outer boundary (e.g., is it a massive triangle, a square, a star?). Try to drag your outermost nodes into that basic perimeter shape first to establish a framework.
* **Untangle the Mess First:** If the starting lines are crossing each other in a chaotic mess, do not try to build the shape immediately. Spend your first few moves simply dragging the nodes far apart so none of the lines intersect, giving yourself a clear view of the topology.
* **Work the Symmetries:** Most target shapes are perfectly symmetrical. If the left side of the shape requires a sharp point, the right side almost certainly requires the exact same setup.
* **Reset and Rethink:** If you have created a massive knot of overlapping lines and you cannot figure out which line goes where, hit the reset button. It is often faster to start fresh with a new plan than to untangle a ruined web.`
  },
  {
    title: "Clear the Numbers",
    seoContent: `![Clear the Numbers](https://www.htmlgames.com/uploaded/game/thumb800/clearthenumbers800450.webp)

Clear the Numbers delivers an absolutely brilliant, high-speed evolution of the legendary tile-swapping puzzle (Match-3), fundamentally altering the core mechanics by fusing them with the rapid-fire inventory management of games like Zuma or Luxor. Set against a clean, visually minimalist grid, players are tasked with managing a massive wall of brightly colored, numbered blocks slowly descending from the ceiling. However, you do not swap adjacent tiles. Instead, you have a "holding tray" (or queue) at the bottom of the screen. Your objective is intensely focused: you must click specific numbered blocks from the descending wall to drop them into your holding tray. When exactly three IDENTICAL numbers are placed in the tray, they instantly merge and disappear, freeing up space. The atmosphere is deeply kinetic and intensely stressful; if the descending wall touches the bottom, or your holding tray completely fills up, the game is over. Clear the Numbers is a pure shot of arcade adrenaline that demands flawless visual scanning and bottleneck management.

## How to Play
* The primary objective is to prevent the descending wall of numbered blocks from reaching the bottom by clearing them via your holding tray.
* Use your \`Left Mouse Button\` to click any exposed numbered block on the main wall.
* Clicking a block instantly teleports it into your holding tray at the bottom of the screen.
* **The Rules of Removal:** When exactly three IDENTICAL numbers (e.g., three 7s) are sitting anywhere in your holding tray, they will automatically merge and be destroyed.
* Your holding tray can only hold a limited number of blocks (usually 6 or 7).
* The game is over if the main wall touches the bottom, or if your holding tray completely fills up without triggering a match.

## Tips and Tricks
* **Manage Your Tray Space (The Golden Rule):** Treat your holding tray like pure gold. Never have more than four "unmatched" singleton numbers sitting in your tray at once. Always leave two or three empty slots so you have the flexibility to dig through the wall for the matches you actually need.
* **Dig for the Third Piece:** If you have two 5s in your tray, your absolute highest priority is finding the third 5 on the wall to clear them. It is acceptable to temporarily fill your tray with blocking numbers, *provided* that reaching the buried 5 instantly triggers a clear and frees the space again.
* **Clear the Lowest Blocks First:** Always prioritize clicking the blocks that are physically closest to the bottom of the screen. The wall is your primary enemy; keep it pushed back.
* **Don't Click Randomly:** In a panic, players often spam-click the wall to clear it. This is a guaranteed death sentence, as you will instantly fill your holding tray with unmatchable garbage. Every click must be deliberate.
* **Look for Pre-Existing Pairs:** Before you click a random 2, look at the wall to see if there is another 2 readily available. Don't put a number in your tray unless you have a clear plan to find its mates.`
  },
  {
    title: "Bingo",
    seoContent: `![Bingo](https://www.htmlgames.com/uploaded/game/thumb800/bingo800450.webp)

Bingo strips the complex mechanics of modern casino simulations down to its absolute, most universally recognized and thrilling core, delivering a pure digital adaptation of the classic parlor game. Set against a clean, visually uncluttered digital tabletop, players are presented with multiple traditional 5x5 Bingo cards, featuring the iconic "Free Space" in the center. Your objective is intensely focused and relies entirely on rapid visual scanning and auditory attention: a caller (or on-screen display) randomly draws numbered balls (e.g., B-12, G-54). You must rapidly scan your cards and mark the corresponding numbers. The ultimate goal is to be the absolute first player in the lobby to complete a specific pattern—usually a straight horizontal, vertical, or diagonal line of five marked numbers—and hit the "Bingo" button. The atmosphere is deeply nostalgic and incredibly fast-paced; there is no complex math, just pure pattern recognition and the adrenaline rush of needing one final number.

## How to Play
* The primary objective is to complete a line of five marked numbers on your card before anyone else.
* At the start of a round, you can usually choose how many Bingo cards you want to play simultaneously (playing more cards increases your chances, but requires much faster scanning).
* The game will automatically draw numbers at a set pace (displayed at the top of the screen).
* Use your \`Mouse\` to click on the corresponding number on your card(s) to place a "dauber" mark on it.
* **The Winning Pattern:** You must mark five numbers in a row horizontally, vertically, or diagonally. (The center "Free Space" counts as an automatic mark).
* When you complete the pattern on ANY card, you must quickly click the massive "BINGO" button to claim your win.

## Tips and Tricks
* **Manage Your Card Count:** Do not be greedy. If you cannot comfortably scan four cards in the three seconds between ball draws, you will miss numbers and lose. Play with one or two cards until your scanning speed improves.
* **Scan by Column (The B-I-N-G-O Method):** This is the most critical skill. Do not search the entire card for the number "54". The caller said "G-54". You only need to look at the vertical column directly under the "G". This cuts your search time by 80%.
* **Use Peripheral Vision:** When playing multiple cards, position them close together on the screen. Try to keep your eyes focused softly in the center of the screen, using your peripheral vision to spot the required number on the outer cards.
* **Don't Miss the Call:** The biggest mistake new players make is getting a five-in-a-row and forgetting to actually click the "Bingo" button because they are still scanning their other cards. If you have a line, click the button immediately!
* **Auto-Daub (If Available):** Many digital versions offer an "Auto-Daub" feature that marks the cards for you. If you are playing purely for relaxation, use it. If you want a brain-training challenge, turn it off.`
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
