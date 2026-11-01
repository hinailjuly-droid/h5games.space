const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Secret Russian",
    seoContent: `![Secret Russian](https://www.htmlgames.com/uploaded/game/thumb800/secretrussian800450.webp)

Secret Russian is an incredibly deep, mathematically rich variation of traditional Solitaire that fundamentally alters the classic Yukon/Russian formula by aggressively injecting a massive element of terrifying uncertainty. Set against a clean, visually minimalist green felt table aesthetic, players are presented with a sprawling tableau of seven columns. The brutal twist that shatters standard strategy is right in the name: instead of all cards being exposed (like standard Russian Solitaire), massive chunks of the tableau are dealt face-down ("secret" cards). Your objective remains the same: maneuver the cards to build four complete sequences in the foundation piles, from Ace up to King by suit. The atmosphere shifts from purely calculating to intensely risky, requiring players to possess a masterful understanding of cascade math while simultaneously gambling on uncovering the specific cards they need hidden in the dark. It is an uncompromising test of logic where the safety of perfect information has been violently stripped away.

## How to Play
* The primary objective is to move all 52 cards into the four foundation piles at the top right, building upward in suit from Ace to King.
* Cards are dealt into seven tableau columns. The top cards are face-up, but the cards beneath them are "secret" (face-down).
* Use your \`Mouse\` to click and drag exposed face-up cards between columns.
* **The Russian Rule (Crucial):** You can build cards downward on the tableau **in the EXACT SAME suit** (e.g., a Hearts 8 can ONLY be placed on a Hearts 9).
* **The Group Move Rule:** You can move ANY face-up card to a valid destination, and *every single card resting on top of it will come along for the ride*, regardless of whether they are in sequential order or not.
* Moving a face-up card off a face-down card will automatically reveal the hidden card.

## Tips and Tricks
* **Prioritize the Reveal:** In standard Russian Solitaire, you plan massive, ten-step cascade chains. In *Secret* Russian, you MUST be willing to make sub-optimal, messy moves if it means uncovering a face-down card. Information is the absolute most valuable resource in this variant.
* **Empty Columns are Pure Gold:** An empty tableau column is infinitely valuable, as it gives you a safe place to dump Kings you uncover blindly, or a place to park a messy, un-sorted stack of cards while you excavate the column beneath them.
* **Unearth the Aces Early:** Your entire early game must focus heavily on excavating the four Aces so they can be moved to the foundations. Dig aggressively into the columns that have the most face-down cards to find them.
* **The "Undo" Button is Mandatory:** If you make a risky move to uncover a face-down card, and it turns out to be a useless card that deadlocks your board (because you had to move a messy stack to get it), you must immediately undo the move.
* **Embrace the Chaos:** Because you can move non-sequential stacks, do not be afraid to temporarily bury a card you need if it allows you to uncover three face-down cards in another column.`
  },
  {
    title: "Daily Traffic Jam",
    seoContent: `![Daily Traffic Jam](https://www.htmlgames.com/uploaded/game/thumb800/dailytrafficjam800x450.webp)

Daily Traffic Jam strips the spatial logic puzzle genre down to its absolute, most mathematically pure and elegantly simple core, delivering a digital adaptation of the notoriously difficult "Rush Hour" sliding block puzzle. Set against a clean, visually minimalist grid representing a congested parking lot, players are presented with a chaotic jumble of brightly colored cars and trucks blocking a single exit lane. Your objective is intensely focused and brutally unforgiving: you must physically drag the vehicles back and forth within their designated lanes to clear a path, allowing the primary target vehicle (usually a police car or a red sports car) to drive straight out of the exit. The atmosphere is deeply cerebral and intentionally demanding, requiring an intense level of forward-thinking, geometric routing, and process of elimination. You cannot rotate the cars, and you cannot lift them off the grid. Daily Traffic Jam offers a fresh, algorithmically generated set of puzzles every single day, serving as the ultimate brain-training routine for hardcore logic fans.

## How to Play
* The primary objective is to slide the main target vehicle (usually a Police Car) off the right side of the grid through the marked exit.
* The grid is filled with obstructing cars (2 squares long) and trucks (3 squares long).
* Use your \`Mouse\` to click and hold a vehicle.
* **The Sliding Rule:** You can only slide a vehicle forward or backward along its longest axis. Horizontal cars can only slide left/right. Vertical cars can only slide up/down.
* You cannot rotate vehicles or move them diagonally.
* You must slide the obstructing vehicles out of the way to create a clear, straight path for the target vehicle.

## Tips and Tricks
* **Work Backwards (The Golden Rule):** Do not just start wildly sliding cars around. Look at the exit. What is the single vehicle directly blocking the target car from leaving? Okay, where does *that* blocking vehicle need to move? What is blocking *it*? Mentally trace the required chain of movements from the exit backward to the start.
* **Identify the "Key" Vehicle:** In complex levels, there is almost always one massive truck (usually a 3-tile vertical truck in the center of the board) that acts as the primary lock. Your entire early game must focus on shifting everything else just enough to slide that one key truck out of the target lane.
* **Don't Be Afraid to Backtrack:** Often, the only way to move a car forward is to first move it completely backward into a corner, use the empty space to shuffle three other cars, and then move the original car forward again.
* **Use the Edges:** The perimeter of the grid is your best friend. Try to slide the longest trucks completely flush against the outer walls of the parking lot to maximize the empty space in the center.
* **Reset if Deadlocked:** If you have shifted the cars into a massive, tightly packed clump and can't remember your original plan, hit the reset button. It is much faster to execute a fresh mental plan than to untangle a ruined board.`
  },
  {
    title: "Ski Slalom",
    seoContent: `![Ski Slalom](https://www.htmlgames.com/uploaded/game/thumb800/skislalom800450.webp)

Ski Slalom strips the sprawling, complex sports-simulation genre down to its absolute, most tension-fueled and reflex-dependent core, delivering a pure, unadulterated test of spatial calculation, momentum physics, and split-second trajectory management. Moving entirely away from deep career modes or complex trick systems, this title is focused entirely on the terrifying art of high-speed downhill racing. Set against a clean, visually minimalist slope of pure white snow, players are placed in control of a highly responsive skier. Your objective is elegantly simple yet brutally difficult in execution: you must aggressively steer your skier through a tightly arranged, complex sequence of colored gates (flags) placed precariously down the mountain. The atmosphere is deeply kinetic; gravity and momentum are constant, unrelenting forces, and you must constantly adapt your angles to your ever-increasing speed to avoid missing a gate or crashing into the trees. Ski Slalom is a pure shot of high-altitude adrenaline.

## How to Play
* The primary objective is to ski down the mountain and pass perfectly between every single set of colored gates in the correct order, reaching the finish line as fast as possible.
* The skier accelerates automatically due to gravity.
* Use the \`Left Arrow\` and \`Right Arrow\` keys (or click/tap the sides of the screen) to steer the skier.
* **The Physics Engine:** Turning sharply causes your skier's edges to dig into the snow, generating friction and significantly slowing you down.
* You must pass physically *between* the two poles of every gate.
* **The Penalty:** Missing a gate usually results in a massive time penalty added to your final score, or an instant disqualification depending on the difficulty setting.

## Tips and Tricks
* **The Racing Line (Don't Oversteer):** The most common mistake is turning too hard, bleeding off all your speed. To get the fastest time, you must calculate the smoothest, shallowest curve possible that still allows you to clip the inside edge of the gates.
* **Look Ahead (The Golden Rule):** Do not stare at the gate you are currently passing through. Your eyes should be locked on the *next* two gates down the mountain. By the time you pass through gate #1, you should already be shifting your weight and aligning your trajectory for gate #2.
* **Anticipate the Rhythm:** Slalom courses are designed with a specific rhythm (Left, Right, Left, Right). Get into the metronomic swing of the course. If the rhythm suddenly breaks (e.g., a massive gap followed by a sharp hairpin turn), you must recognize the visual cue instantly.
* **Sacrifice Speed for Accuracy:** If you are coming into a hairpin turn too hot, it is always better to carve hard and lose speed to make the gate than to fly past it and take a 5-second penalty.
* **Ride the Edge:** You do not need to pass directly through the dead center of the flags. Clipping the absolute extreme edge of the inside pole still counts as a valid pass and saves crucial milliseconds of travel time.`
  },
  {
    title: "Flower Garden",
    seoContent: `![Flower Garden](https://www.htmlgames.com/uploaded/game/thumb800/flowergarden800450.webp)

Flower Garden is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core, all wrapped in a breathtaking, vibrant botanical aesthetic. Forget searching for random household items or convoluted clues; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within stunning digital paintings of lush springtime environments. You are placed directly into a series of high-definition images showcasing blooming rose bushes, manicured hedges, sunny patios, and colorful tulip beds. Your objective is elegantly simple: locate the subtle, minute alphabetical letters (A through Z) expertly blended into the environment. These are not massive text blocks, but tiny visual anomalies—faint outlines perfectly camouflaged into the curve of a petal, the texture of a stone path, or the shadows of a greenhouse. The atmosphere is deeply relaxing, accompanied by ambient bird song. It is the ultimate brain-training routine for acute observation.

## How to Play
* Your objective is to find every single letter of the alphabet hidden within the main high-definition garden photograph/painting.
* Use your \`Mouse\` to carefully scan the high-definition image.
* When you spot the faint outline of a specific letter, click directly on it.
* Successfully locating a letter will remove it from the alphabet list at the bottom of the screen.
* Be precise! Randomly spam-clicking around the screen will often result in a time penalty or a temporary point deduction.
* Find all 26 letters before the timer runs out to advance to the next garden layout.

## Tips and Tricks
* **Scan Methodically:** Do not just stare at the whole screen randomly. Mentally divide the image into a tight grid. Meticulously scan the top-left quadrant of the image, analyzing every single leaf on the ivy or shadow behind a flowerpot, before moving to the top-right.
* **Look for Broken Patterns:** The letter outlines often disrupt the natural, organic flow of the botanical image. Look for areas on a curved leaf where the texture suddenly seems to form an unnaturally perfect 'S' curve or the sharp angle of an 'A'.
* **Check the Extremes (Shadows and Glare):** The developers love hiding dark letters inside the deep black shadows beneath the hedges, or hiding white letters directly inside the blown-out, pure white glare of the sun hitting a patio stone. Adjust your monitor brightness!
* **Step Back:** If you are completely stuck on the final letter, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the hidden geometry suddenly pop out.
* **Don't Search Alphabetically:** Do not waste time looking specifically for the letter 'A' just because it is first. Scan the entire image for *any* letter, and click them as you find them.`
  },
  {
    title: "Color Catch",
    seoContent: `![Color Catch](https://www.htmlgames.com/uploaded/game/thumb800/colorcatch800450.webp)

Color Catch strips the reflex-arcade genre down to its absolute, most tension-fueled and visually demanding core, delivering a pure, unadulterated test of spatial calculation, rapid pattern recognition, and split-second manual dexterity. Moving entirely away from complex narratives or deep upgrade trees, this title focuses on a highly stylized, minimalist environment. Set against a clean grid, players control a set of brightly colored "catchers" (baskets or platforms) at the absolute bottom of the screen. Your objective is brutally elegant: a relentless barrage of brightly colored geometric blocks falls from the ceiling. You must rapidly maneuver your catchers horizontally to intercept the falling blocks, but you MUST ensure the color of the catcher perfectly matches the color of the falling block upon impact. The atmosphere is deeply kinetic; gravity and acceleration are constant, unrelenting forces, and the game rapidly spirals into a chaotic test of hand-eye coordination. Color Catch is a flawless tactical physics experience.

## How to Play
* The primary objective is to catch the falling blocks with the catcher of the exact same color, scoring points and surviving as long as possible.
* You control a row of colored catchers at the bottom of the screen.
* Use your \`Mouse\` (or \`Left Arrow\` and \`Right Arrow\` keys) to slide the catchers horizontally across the screen.
* As colored blocks fall from the top, align the corresponding colored catcher directly beneath them.
* **The Fatal Error:** If a red block falls into a blue catcher, or if a block misses the catchers entirely and hits the floor, you instantly lose a life (or the game ends immediately, depending on the difficulty).
* The falling blocks will continuously accelerate the longer you survive.

## Tips and Tricks
* **Focus on the Drop Zone (Don't Look Up):** The absolute most common mistake is staring at the top of the screen where the blocks spawn. By the time your eyes track the block down, you are too late. Keep your eyes locked on the middle/lower third of the screen, reacting to the blocks as they enter the "danger zone."
* **Memorize Your Catcher Layout:** You cannot afford to look down at your catchers to see where the red one is. You must memorize their exact sequence (e.g., Red is Left, Blue is Right) so your hands move automatically based purely on the color you see falling.
* **Prioritize the Lowest Block:** When three blocks are falling simultaneously at different speeds, completely ignore the top two. Your absolute only priority is intercepting the one closest to the floor. Deal with the others a split second later.
* **Micro-Movements:** Do not wildly swing the catchers from edge to edge. Keep them centralized as much as possible, using tiny, controlled slides to catch blocks and immediately returning to a neutral center position.
* **Embrace the Rhythm:** At high speeds, you stop seeing individual blocks and start seeing a rhythm. Trust your peripheral vision and your muscle memory.`
  },
  {
    title: "Flower Burst",
    seoContent: `![Flower Burst](https://www.htmlgames.com/uploaded/game/thumb800/flowerburst800450.webp)

Flower Burst fundamentally rewrites the rules of the traditional Match-3 and town-building genres by merging them into a highly complex, spatially demanding puzzle of botanical development. Set against a clean, visually minimalist grid resembling a garden plot, players are presented with an empty board. Your objective is intensely focused: you are given a queue of basic seeds or small floral buds from a "well" (or queue). You must physically drag these items onto the grid. When three or more identical flowers are placed adjacent to each other, they instantly merge (fuse) into a single, highly upgraded, fully bloomed flower of the next tier. The ultimate goal is to cultivate the most advanced, glowing super-blooms possible before the grid completely fills up and deadlocks. The atmosphere is deeply cerebral and immensely satisfying; you are essentially managing a massive game of localized arithmetic while simultaneously planning garden zoning. Flower Burst is a pure test of sequence planning and inventory management.

## How to Play
* The primary objective is to strategically place and merge flowers to create massive blooms without running out of space on the grid.
* Look at the "Next Item" well/queue to see what flower you are about to place.
* Use your \`Mouse\` to click and drag the flower from the well onto any empty square on the main grid.
* **The Rotation Mechanic:** Before placing, you can often click the flowers inside the well to rotate their orientation if multiple are given at once.
* **The Fusion Rule:** When THREE OR MORE identical flowers are placed adjacent to each other (horizontally or vertically), they instantly merge into a single, upgraded bloom.
* The new, upgraded flower will spawn in the exact location of the *last* flower placed to trigger the merge.
* The game ends when every single square on the grid is filled and no more fusions are possible.

## Tips and Tricks
* **Control the Merge Point:** The absolute most critical mechanic in this game is understanding that the new, upgraded flower spawns exactly where you *drop* the final piece to trigger the merge. Always end your chain in a strategic location (usually an open corner) to avoid trapping a massive super-bloom in the center of the board.
* **Group by Tiers:** Dedicate specific areas of your grid to specific tiers of flowers. Keep all your basic buds on the left side, and your medium blooms on the right side. Mixing them randomly will quickly clog the board with unmatchable pieces.
* **Build Massive Chains:** While three items are required to merge, connecting five or more simultaneously often yields massive bonus points and sometimes skips a tier entirely, or spawns a board-clearing wild card.
* **Use the Rotation:** If the well gives you a linked pair of a blue bud and a red bud, rotate them carefully so that dropping them simultaneously triggers two separate merges in two different columns.
* **Think Ahead:** Before placing a flower to trigger a merge, ask yourself: "When this becomes a Tier 3 bloom, will it be sitting next to two other Tier 3 blooms, triggering a secondary Tier 4 merge?" Set up chain reactions.`
  },
  {
    title: "Mysterious Mahjong",
    seoContent: `![Mysterious Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/mysteriousmahjong800x450.webp)

Mysterious Mahjong delivers an incredibly robust, deeply engaging evolution of the classic Chinese tile-matching genre, completely stripping away the traditional ivory tiles and sterile casino aesthetic in favor of a breathtaking, brooding, and enigmatic visual style. The defining feature of this massive package is its staggering volume: over 300 distinct, meticulously designed puzzle layouts. Set against a backdrop of deep shadows, ancient ruins, and magical iconography, players are presented with massive, overlapping 3D pyramids constructed entirely of tiles carved with arcane symbols, glowing runes, and mystical artifacts. Your objective is elegantly simple yet brutally difficult in execution: you must meticulously dismantle the overlapping structures by finding and matching identical pairs of tiles. The atmosphere is deeply relaxing and incredibly focused, trading tense ticking clocks for a soothing, meditative puzzle environment accompanied by ambient, ethereal soundscapes. It is the ultimate, endless brain-training routine for puzzle enthusiasts who demand volume and variety.

## How to Play
* Your primary objective is to clear all the mystical tiles from the board by matching them in identical pairs.
* The game features 300 different board layouts; you must clear the current board to progress.
* Use your \`Left Mouse Button\` to click on a "free" (highlighted) tile to select it.
* Click on a matching "free" tile to instantly eliminate both from the board.
* **The Golden Rule of Freedom:** A tile is strictly considered "free" (and therefore clickable/highlighted) ONLY if it has absolutely no other tile resting on top of it, AND it is completely unblocked on at least one of its immediate left or right vertical sides.
* If a tile is wedged tightly between two other tiles horizontally, it cannot be selected.
* The game is won when the board is completely clear.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your absolute highest priority on breaking down the tallest, thickest stacks of tiles in the dead center of the layout. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board offers vastly more horizontal matching options and reveals more hidden tiles simultaneously.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach rune tiles on the very outer edge of the board, ignore them! Save them. You might desperately need those outer tiles later to match a rune buried deep in the center tower.
* **Memorize the Arcane Symbols:** The mystical carvings are highly intricate and can easily blend together in the dark aesthetic. Take a moment at the start of the level to mentally categorize the tiles ("the glowing blue swirl", "the sharp red triangle") to dramatically speed up your visual scanning.
* **Use the Undo Button:** If you make a match and it immediately deadlocks the board, use the undo button to reverse it. Always scout the board to see if a specific tile has three visible copies; if it does, match the two that unblock the most hidden tiles.`
  },
  {
    title: "Mah Jong Connect II",
    seoContent: `![Mah Jong Connect II](https://www.htmlgames.com/uploaded/game/thumb800/mahjongconnectII800450.webp)

Mah Jong Connect II (the definitive sequel to the classic Onet or Kyodai genre) injects a massive dose of highly structural, geometric pathfinding into the tile-matching formula, delivering a visual puzzle that demands intense calculation. Stepping entirely away from the 3D, overlapping pyramids of standard Mahjong Solitaire, this game places every single tile flat on a massive, single-layer 2D grid. Your objective is not just to find matching pairs of traditional Chinese symbols, but to prove that a clear, unobstructed path can physically be drawn between them using a very specific set of routing rules. The atmosphere is deeply engaging, requiring players to constantly weigh the immediate satisfaction of a simple edge match against the necessity of unblocking the dense center of the board. The visual style is exceptionally clean, ensuring perfect readability even when the board is packed, and this sequel introduces new items, sliding gravity mechanics, and massive layouts. It is a pure test of spatial planning.

## How to Play
* Your primary objective is to clear the entire flat grid by connecting identical pairs of Mahjong tiles before the strict timer runs out.
* Use your \`Mouse\` to click on a tile, then click on a matching tile to attempt a connection.
* **The Golden Pathfinding Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two tiles using a maximum of three straight lines (which means no more than two 90-degree corners).
* You can connect tiles that are sitting directly next to each other, or you can route the path entirely outside the main grid boundary (the empty space surrounding the puzzle).
* **Gravity Mechanics:** In some levels, when you clear a pair, the remaining tiles might slide down, left, or right to fill the gap, drastically altering the board state.
* If you successfully clear all tiles, you win.

## Tips and Tricks
* **Clear the Perimeter First:** Tiles sitting on the absolute outer edge of the board are by far the easiest to connect, because their path can route freely through the empty space outside the grid using the two-turn rule. Clear the borders instantly.
* **Look for the "U" Shape:** The two-turn rule allows for a perfect "U" shape connection. If two identical tiles are on the exact same row, but separated by other tiles, check if there is empty space directly above or below both of them to draw the U through the air.
* **Anticipate the Slide:** If the level has gravity (tiles sliding down when matches are made), NEVER make a match blindly. Mentally calculate where the tiles above will fall. You can often intentionally make a bad match just to drop a crucial tile into perfect alignment with its twin.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the grid from the outside toward the dense center.
* **Use Power-Ups Strategically:** The sequel gives you swords to instantly clear pairs, or telescopes for hints. Save these exclusively for the final 30 seconds when the timer is critical and the board is deadlocked.`
  },
  {
    title: "Gold Coast Klondike",
    seoContent: `![Gold Coast Klondike](https://www.htmlgames.com/uploaded/game/thumb800/goldcoastklondike800450.webp)

Gold Coast Klondike delivers the absolute purest, most unadulterated distillation of the legendary Solitaire formula, completely stripping away the convoluted gimmicks of modern variations to present the quintessential card game exactly as it was meant to be played. Set against a breathtaking, highly polished aesthetic featuring the sun-drenched beaches and azure waters of the Gold Coast, players are presented with the iconic seven-column cascading tableau. Your objective is elegantly simple yet notoriously difficult to execute perfectly: you must meticulously excavate hidden cards, untangle alternating-color sequences, and move all 52 cards into the four foundation piles, building upward from Ace to King by suit. The atmosphere is deeply relaxing and intentionally meditative, trading the tense ticking clocks of arcade games for a soothing puzzle environment accompanied by ambient ocean waves. The visual presentation utilizes crisp, high-definition traditional playing cards that ensure perfect readability. Gold Coast Klondike is the ultimate digital refuge for purists.

## How to Play
* The primary objective is to move all 52 cards into the four foundation piles at the top right, building upward in strict suit order from Ace to King.
* The game begins with 28 cards dealt into seven tableau columns (the first column has one card, the second has two, etc.). The top card is face-up; the rest are face-down.
* Use your \`Mouse\` to click and drag exposed face-up cards between columns.
* **The Tableau Rule:** You can only build cards downward on the tableau in **alternating colors** (e.g., a Red 8 can ONLY be placed on a Black 9).
* Moving a face-up card off a face-down card will automatically reveal the hidden card.
* Only a King (or a valid sequence starting with a King) can be moved into a completely empty tableau column.
* If you have no valid moves on the board, click the face-down draw pile at the top left to reveal new cards (usually drawn 1 or 3 at a time).

## Tips and Tricks
* **Prioritize the Reveal (The Golden Rule):** Your absolute highest priority on every single turn is uncovering face-down cards. If you have a choice between playing a Black 5 from the draw pile, or moving a Black 5 on the tableau to reveal a hidden card beneath it, ALWAYS choose the tableau move. Information is power.
* **Empty Columns are for Kings:** Do not aggressively clear a column just to have it empty. An empty column is useless unless you currently have a King available to drop into it to start a massive new sequence.
* **Don't Auto-Play to the Foundations:** Just because you *can* move a Red 6 to the foundation doesn't mean you *should*. Sometimes keeping it on the tableau is absolutely necessary to hold a Black 5 that you desperately need to anchor a massive stack.
* **Unearth the Aces Early:** Your entire early game must focus heavily on excavating the four Aces. The game cannot progress to the foundations without them. Dig aggressively into the columns that have the most face-down cards.
* **Track the Draw Pile:** If the game draws 3 cards at a time, pay close attention to the order. If you need a specific 7, but it is the second card in a 3-card draw, you must figure out how to play the first card to gain access to the 7.`
  },
  {
    title: "Muffin Fun",
    seoContent: `![Muffin Fun](https://www.htmlgames.com/uploaded/game/thumb800/muffinfun800450.webp)

Muffin Fun delivers the absolute purest, most delightfully unadulterated distillation of the legendary "Bubble Shooter" arcade formula, completely stripping away the bloated narratives and complex meta-progression, and wrapping the core mechanics in a mouth-watering, bakery-themed aesthetic. This is the genre exactly as it was meant to be played: a massive ceiling of brightly colored, perfectly rendered pastries (blueberry muffins, chocolate cupcakes, strawberry tarts), a single aiming cannon at the bottom, and an unrelenting pursuit of massive, structure-collapsing chain reactions. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core geometric shooting mechanic accompanied by cheerful, upbeat music. You are tasked with calculating angles, bouncing shots off the sidewalls, and grouping specific pastries to trigger massive structural collapses before the weight of the bakery crushes your launcher. The visual presentation is highly polished, utilizing crisp, high-definition sprites. Muffin Fun is a pure test of geometric calculation and reflex aiming.

## How to Play
* The primary objective is to clear the entire screen of muffins before the ceiling physically lowers and crushes your pastry cannon.
* You control a cannon at the bottom of the screen holding a specific type of muffin.
* Use your \`Mouse\` to aim the trajectory line.
* Click the \`Left Mouse Button\` to fire your muffin up into the pastry cluster.
* When your fired muffin connects with a cluster of two or more muffins of the EXACT SAME type, the entire connected group will pop and disappear.
* If you shoot and fail to make a match a certain number of times, the entire ceiling will shift downward by one row, reducing your playable space.

## Tips and Tricks
* **Master the Bank Shot (The Golden Rule):** You cannot always shoot straight. You MUST learn to bounce your muffins off the left and right walls of the play area to ricochet them into tight, otherwise unreachable gaps near the top of the structure.
* **Sever the Root:** Do not just shoot at the lowest hanging pastries. Look for the "structural joints"—small clusters of identical muffins holding up massive, mixed-type chunks below them. If you destroy the joint, the entire massive chunk below it falls instantly, granting huge points.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* muffin type. Knowing what you have in reserve completely dictates where you should place your current shot to set up the next combo.
* **Don't Build Walls:** If you have a chocolate muffin and no chocolate clusters are visible, do not just shoot it directly into the middle of the board, blocking other types. Shoot it off to the extreme left or right edge to keep the center channels open.
* **Clear Types Completely:** If there are only two strawberry tarts left on the entire board, prioritize eliminating them immediately. Once a specific pastry type is entirely gone, the game will stop generating it in your cannon, drastically increasing your odds of getting the pastries you actually need.`
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
