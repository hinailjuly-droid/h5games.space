const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Hex Connect",
    seoContent: `![Hex Connect](https://www.htmlgames.com/uploaded/game/thumb800/hexconnect800450.webp)

Hex Connect takes the highly structural, geometric pathfinding mechanics of the classic Onet or Kyodai genre and injects a massive layer of complexity by ripping up the standard square grid and replacing it with a mathematically dense hexagonal honeycomb. Instead of 3D, overlapping pyramids, this game places every single thematic tile flat on a single-layer hex grid. Your objective is intensely focused: you are not just trying to find matching pairs; you must prove that a clear, unobstructed path can physically be drawn between them. The honeycomb structure radically alters the line-of-sight optimization; instead of four directions, you now have six, completely changing how "corners" and pathways are calculated. The atmosphere is deeply engaging, requiring intense spatial calculation as you navigate the dense grid. Because the tiles do not overlap, you must rely entirely on line-of-sight optimization and the ability to visualize invisible, snaking pathways through the maze of remaining tiles. Hex Connect is a pure, uncompromising test of geometric routing and visual parsing.

## How to Play
* Your primary objective is to clear the entire flat hexagonal grid by connecting identical pairs of tiles before the strict timer runs out.
* Use your \`Mouse\` to click on a tile, then click on a matching tile to attempt a connection.
* **The Golden Pathfinding Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two tiles using a maximum of three straight lines (which means no more than two sharp turns/corners).
* Because it is a hex grid, the lines travel through the flat edges of the hexagons, offering six different angles of movement rather than the standard four.
* You can route the path entirely outside the main grid boundary (the empty space surrounding the puzzle).
* If you successfully clear all tiles, you win.

## Tips and Tricks
* **Clear the Perimeter First:** Tiles sitting on the absolute outer edge of the honeycomb are by far the easiest to connect, because their path can route freely through the empty space outside the grid using the two-turn rule. Clear the borders instantly to shrink the board.
* **Understand Hexagonal Turns:** A "turn" on a hex grid is not a sharp 90-degree angle like a square grid. It is a 60-degree or 120-degree bend. You must visualize the path snaking through the flat edges of the honeycombs. A straight line can pass through many hexes.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the dense, congested center of the honeycomb.
* **Don't Tunnel Vision:** If you can't find a path for two specific tiles, stop looking at them. Scan the entire board for an obvious, free match to keep the timer from running down.
* **Scan for Dead Ends:** If a tile is completely surrounded on all six sides by different tiles, it is fundamentally impossible to match it right now. Ignore it completely until you clear at least one of its neighbors.`
  },
  {
    title: "Jewel Shop",
    seoContent: `![Jewel Shop](https://www.htmlgames.com/uploaded/game/thumb800/jewelsshop800x450.webp)

Jewel Shop delivers a highly addictive, fast-paced evolution of the classic time-management and resource simulation genre, completely abandoning slow-paced farming or city-building in favor of a frantic retail environment. Set against a highly detailed, colorful storefront, you are placed in the role of a desperate boutique manager. Your objective is intensely focused: you must rapidly serve a relentless stream of demanding customers who walk through the door requesting specific, brightly colored gemstones or floral arrangements. You must physically move around the shop, collect the correct items from the display cases, deliver them to the counter, and collect the cash before the customer's patience meter expires and they storm out. The atmosphere is deeply kinetic and intentionally stressful, relying entirely on your ability to memorize inventory locations, queue multiple tasks simultaneously, and manage a rapidly ticking clock. The visual presentation is highly polished, utilizing crisp sprites and satisfying "cha-ching" audio cues. Jewel Shop is a pure test of high-speed multi-tasking.

## How to Play
* The primary objective is to earn a specific amount of money before the business day (the timer) ends.
* Customers will enter the shop and a "thought bubble" will appear above their head showing exactly what item they want to buy.
* Use your \`Mouse\` to click on the corresponding item in your shop's inventory displays.
* Once your character picks up the item, click on the customer to hand it to them.
* Click the money left on the counter to collect it.
* **Inventory Management:** You have a limited supply of items in your display cases. If you run out of blue sapphires, you must click the "Order" phone or catalog to purchase more stock, which takes precious seconds to arrive.
* The faster you serve a customer, the larger the tip they leave.

## Tips and Tricks
* **Queue Your Actions:** The most critical skill in time-management games is understanding that you do not have to wait for an animation to finish. You can click the red ruby, click customer A, click the green emerald, click customer B, and click the cash register all in one rapid sequence. Your character will execute the actions in order.
* **Never Walk Empty-Handed:** If you walk to the right side of the screen to deliver an item, always try to pick up something else or collect cash on your way back to the center.
* **Anticipate Restocks:** Do not wait until your display case is completely empty before ordering more stock. If you see you only have one blue sapphire left, order a new batch immediately so it arrives *before* the next customer demands one.
* **Prioritize the Angry Customers:** Customers have a patience meter (usually a changing color or a shrinking bar). If a customer is about to leave, drop whatever you are doing and serve them instantly, even if another customer arrived first. A lost customer hurts your final score massively.
* **Upgrade Wisely:** Between levels, use your profits to buy upgrades. Always prioritize upgrades that increase your walking speed or increase customer patience before buying purely cosmetic items.`
  },
  {
    title: "Ocean Puzzle",
    seoContent: `![Ocean Puzzle](https://www.htmlgames.com/uploaded/game/thumb800/oceanpuzzle800450.webp)

Ocean Puzzle completely rewrites the rules of the traditional Match-3 genre by abandoning the standard "swap adjacent tiles" mechanic in favor of a highly complex, edge-driven pushing system wrapped in a vibrant, deep-sea aesthetic. Set against a clean, visually minimalist grid suspended in the ocean, the board is partially filled with brightly colored blocks featuring starfish, shells, and pearls. However, you do not directly manipulate the blocks inside the grid. Instead, you are given a specific block sitting on the extreme outer edge of the board. Your objective is intensely focused: you must physically push this new block inward from the perimeter, forcing the entire row or column to shift. When three or more identical oceanic blocks align, they vanish. The atmosphere is deeply cerebral and immensely satisfying; you are essentially managing a massive game of localized gravity and spatial displacement. The visual presentation is highly functional, utilizing crisp, high-contrast aquatic sprites. Ocean Puzzle is a pure test of cascade prediction.

## How to Play
* The primary objective is to completely clear the grid of all ocean blocks by matching them in groups of three or more.
* Look at the "Next Item" block sitting on the outer edge (the perimeter) of the grid.
* Use your \`Mouse\` to click the directional arrows (or click the block itself) to push it into the main grid.
* Pushing a block from the right side forces every other block in that specific horizontal row to slide one space to the left.
* **The Matching Rule:** If your push causes three or more identical blocks to touch (horizontally or vertically), they instantly shatter and are removed.
* You win the level when the board is completely empty.

## Tips and Tricks
* **Calculate the Slide (The Golden Rule):** Never push a block blindly. Before you click, look at the entire row. If you push from the right, the block on the extreme left edge might be pushed completely off the board (or squished). Trace the final resting place of every single block in the row *before* you move.
* **Set Up the Cascade:** The most powerful moves in this game are not direct matches. The best moves involve pushing a row specifically to align two green shells, so that on your *next* move, you can push a third green shell from a perpendicular angle to trigger a massive combo.
* **Work from the Inside Out:** It is often much easier to clear the massive, dense cluster in the dead center of the board first. If you push everything to the outer edges immediately, you limit your future pushing angles.
* **Use the Walls:** Sometimes you want a block to stop sliding. Push it toward a row that already has a solid wall of blocks on the opposite side; this acts as a backstop, allowing you to position the new block exactly where you want it.
* **Patience:** There is no timer. Take your time to mentally trace the layers of the puzzle before making your first click.`
  },
  {
    title: "Neon Billiards",
    seoContent: `![Neon Billiards](https://www.htmlgames.com/uploaded/game/thumb800/neonbilliards800450.webp)

Neon Billiards delivers a brilliant, highly kinetic digital adaptation of traditional pool (specifically 8-ball), stripping away the smoky tavern aesthetic in favor of a breathtaking, high-contrast cyberpunk environment where glowing balls ricochet across a pitch-black table. Designed strictly as a single-player high-score challenge rather than a competitive simulation, players are tasked with clearing the entire table of solids and stripes before sinking the 8-ball. However, the game introduces a massive scoring mechanic: you are heavily rewarded for sinking the balls in strict numerical order (from 1 up to 7, or 9 up to 15). Your objective is intensely focused: you must calculate the angle of incidence, the raw kinetic power of your break, and the complex spin mechanics to meticulously control the cue ball's resting position. The atmosphere is deeply engaging, accompanied by synth-wave music. The visual presentation is exceptionally polished, utilizing highly realistic physics and glowing neon trails. Neon Billiards is a pure test of geometric calculation and extreme precision.

## How to Play
* The primary objective is to pocket all the numbered balls on the table, and then legally pocket the black 8-ball last.
* Use your \`Mouse\` to aim the cue stick. A faint trajectory line will often appear showing the initial angle of impact.
* Click and hold the \`Left Mouse Button\`, then drag backward to build power on the cue stick.
* Release the mouse button to strike the white cue ball.
* **The High Score Rule:** While you can sink any ball at any time, you receive massive bonus multipliers if you manage to sink them in perfect numerical order (e.g., sink the 1-ball, then the 2-ball, then the 3-ball).
* Sinking the 8-ball before all other balls are cleared results in an instant game over.

## Tips and Tricks
* **Position is Everything (Leave):** The hallmark of a terrible pool player is sinking a ball but leaving the white cue ball trapped behind a cluster, ruining the next shot. Before you shoot the 1-ball, you must mentally calculate exactly where the white ball will roll *after* the impact so you have a perfectly straight shot at the 2-ball.
* **Master the Bank Shot:** You will not always have a straight line to the pocket. You MUST learn to calculate the angle of incidence. Hit the object ball aggressively into the heavy rubber rail (the cushion) to bounce it across the table into a pocket on the opposite side.
* **Control Your Power:** Smashing the ball at 100% power is almost always a mistake unless you are breaking the initial rack. High power causes the balls to bounce unpredictably. A soft, controlled tap ensures the balls stop exactly where you planned.
* **Break the Clusters:** If you see three balls tightly clumped together, they are unplayable. Use one of your turns to intentionally shoot the cue ball into the cluster just to break them apart and scatter them across the table.
* **Plan the 8-Ball Early:** Do not wait until the end of the game to figure out how you will sink the 8-ball. If the 8-ball is trapped in a corner, you must spend your early turns aggressively bumping it into the open.`
  },
  {
    title: "Circus Solitaire",
    seoContent: `![Circus Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/circussolitaire800450.webp)

Circus Solitaire completely re-invents the complex, alternating-color mechanics of standard card sorting by stripping it down to a brutally elegant, mathematically pure game of addition, all wrapped in a vibrant, high-energy Big Top aesthetic. Moving away from the green felt of a casino, this title constructs a massive, overlapping triangular structure using beautifully illustrated playing cards featuring clowns, lions, and acrobats. Your objective is intensely focused: completely dismantle the massive pyramid by pairing exposed cards that mathematically add up to exactly thirteen. The atmosphere is deeply calculating but incredibly thematic, trading intense arcade pressure for a soothing, ambient puzzle environment complete with cheerful circus organ music. The visual presentation is exceptionally polished, utilizing crisp, highly legible typography that ensures perfect readability even when the massive card structure is heavily congested. It is a masterclass in taking a simple arithmetic concept (Pyramid Solitaire) and turning it into a highly addictive, atmospheric puzzle experience.

## How to Play
* Your primary objective is to clear all the cards from the massive triangular pyramid structure.
* Use your \`Left Mouse Button\` to click on any two fully exposed (unblocked) cards whose numerical values add up to exactly 13.
* **Card Values:** Number cards are worth their face value (e.g., a 7 and a 6 = 13). Jacks are 11 (requires a 2). Queens are 12 (requires an Ace). Kings are exactly 13 and can be clicked individually to instantly remove them.
* A card is strictly considered "exposed" only if there is absolutely no other card resting on top of it.
* If you have no valid pairs of 13 on the pyramid, click the face-down draw pile at the bottom to reveal a new card to use.

## Tips and Tricks
* **Prioritize the Pyramid Over the Draw Pile:** If you have a 5 exposed on the pyramid, and a 5 in your draw pile, and you need to pair an 8 on the board... ALWAYS use the 5 on the pyramid. You must prioritize dismantling the structure over emptying the draw pile.
* **Dig Evenly:** Do not drill a deep hole down one specific side of the pyramid. Try to peel cards away evenly across the entire structure. An even, flat pyramid offers vastly more exposed cards and potential pairings.
* **Save the Kings:** Because Kings equal 13 by themselves, they can be removed instantly. However, if they are not blocking anything important, leave them on the board. They don't hurt you, and occasionally you might accidentally click a King when you meant to click something else.
* **Track Your Cards:** If you desperately need a 4 to clear a 9, take a quick glance at the discard pile. If all four 4s have already been played, you know for a mathematical fact that the pyramid is dead and you must restart.
* **The "Undo" Button (If Available):** Use it strategically! If you pair a 10 from the draw pile with a 3 on the board, but realize another 3 was blocking a massive stack of hidden cards, undo the move and pair the 10 with the *blocking* 3.`
  },
  {
    title: "Bubble Wheel",
    seoContent: `![Bubble Wheel](https://www.htmlgames.com/uploaded/game/thumb800/bubblewheel800450.webp)

Bubble Wheel takes the legendary, static ceiling mechanics of the classic Bubble Shooter genre and fundamentally shatters them by introducing a terrifying, constantly shifting axis of gravity. Instead of shooting at a flat wall of spheres, you are presented with a massive, free-spinning cluster of brightly colored bubbles orbiting a central anchor point. Your objective is intensely focused: you control a cannon at the bottom of the screen and must shoot colored bubbles into the cluster to match three or more of the same color. However, every single time your fired bubble connects with the mass, the sheer kinetic force of the impact causes the entire wheel to physically rotate and spin, completely altering your line of sight for the next shot. The atmosphere is undeniably hypnotic and deeply engaging, demanding a mastery of angular momentum. The visual presentation is highly polished, utilizing crisp sprites and fluid physics. Bubble Wheel is a pure, uncompromising test of geometric calculation and rotational anticipation.

## How to Play
* The primary objective is to clear the entire spinning wheel of bubbles by matching colors.
* You control a cannon at the bottom of the screen holding a specifically colored bubble.
* Use your \`Mouse\` to aim the trajectory line.
* Click the \`Left Mouse Button\` to fire your bubble at the rotating mass in the center.
* When your fired bubble connects with a cluster of two or more bubbles of the EXACT SAME color, the entire connected group will pop and disappear.
* **The Rotation Mechanic:** The physical impact of your shot hitting the wheel will cause it to spin. Hitting it on the extreme left edge will cause it to spin violently clockwise. Hitting it dead-center will not spin it at all.

## Tips and Tricks
* **Use the Spin to Your Advantage:** This is the most critical skill. If the green bubbles you need to hit are currently hidden on the back side of the wheel, do not waste shots blindly. Fire a useless bubble at the extreme outer edge of the wheel to intentionally spin it 180 degrees, bringing the green bubbles into your line of sight.
* **Master the Bank Shot:** You cannot always shoot straight. You MUST learn to bounce your bubbles off the left and right walls to ricochet them into tight gaps on the side of the wheel.
* **Sever the Root:** Look for the "structural joints"—small clusters of bubbles holding up massive, mixed-color branches extending outward from the center. If you destroy the joint closest to the center, the entire branch falls instantly.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* bubble color. Knowing what you have in reserve dictates where you should spin the wheel with your current shot.
* **Control the Momentum:** If the wheel is spinning wildly out of control, fire a shot directly at the center of mass (or fire a shot countering the rotation) to act as a brake and stabilize the board.`
  },
  {
    title: "Castle Mysteries",
    seoContent: `![Castle Mysteries](https://www.htmlgames.com/uploaded/game/thumb800/castlemysteries800450.webp)

Castle Mysteries is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core, all wrapped in a brooding, gothic medieval aesthetic. Forget modern detective storylines; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within breathtaking historical illustrations. You are placed directly into a series of stunningly detailed, high-definition digital paintings showcasing dusty armories, echoing grand halls, overgrown courtyards, and dimly lit dungeons. Your objective is elegantly simple: locate specific, thematic items expertly blended into the environment (or sometimes spot the subtle differences between two nearly identical images). The atmosphere is deeply relaxing yet inherently tense, accompanied by ambient sounds of dripping water and distant thunder. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every disguised sword hilt and camouflaged goblet is rendered with breathtaking clarity.

## How to Play
* Your primary objective is to find every single item listed (either as text or silhouettes) hidden within the main high-definition castle scene.
* Use your \`Mouse\` to carefully scan the high-definition image.
* When you spot a required object, click directly on it.
* Successfully locating an object will remove it from your list and award you points.
* **Spot the Difference Mode:** In some levels, you will be shown two identical images side-by-side. You must find and click the subtle missing details (e.g., a missing candle on a chandelier).
* Be extremely precise! Randomly spam-clicking around the screen will often result in a heavy time penalty or score deduction.

## Tips and Tricks
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A modern smartphone might be tinted stone-gray to blend perfectly into the castle wall.
* **Divide the Screen:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the base of the massive suit of armor) before moving to the next.
* **Check the Extremes (Shadows and Glare):** The developers love hiding dark objects inside the deep black shadows beneath tables, or hiding bright objects directly inside the blown-out glare of a roaring fireplace. Adjust your monitor brightness!
* **Step Back:** If you are completely stuck on the final object, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the hidden geometry suddenly pop out.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Mahjong Blocks - Maya",
    seoContent: `![Mahjong Blocks - Maya](https://www.htmlgames.com/uploaded/game/thumb800/mahjongblocks800450.webp)

Mahjong Blocks - Maya delivers an incredibly robust, deeply engaging evolution of the classic Chinese tile-matching genre, completely stripping away the traditional ivory tiles and sterile casino aesthetic in favor of a breathtaking, heavy stone architecture inspired by ancient Mesoamerican civilizations. Set against a backdrop of deep jungle greens and ruined temples, players are presented with massive, overlapping 3D pyramids constructed entirely of heavy stone blocks, each carved with incredibly detailed, high-definition Mayan iconography—masks, suns, serpents, and complex glyphs. Your objective is elegantly simple yet brutally difficult in execution: you must meticulously dismantle the massive, overlapping structure by finding and matching identical pairs of stone blocks. The atmosphere is deeply relaxing and incredibly focused, trading the tense ticking clocks of arcade games for a soothing, meditative puzzle environment accompanied by ambient jungle soundscapes. The visual presentation is highly functional, ensuring the complex carvings are perfectly readable even when the massive stone structures are heavily congested.

## How to Play
* Your primary objective is to clear all the heavy stone blocks from the board by matching them in identical pairs.
* Use your \`Left Mouse Button\` to click on a "free" block to select it.
* Click on a matching "free" block to instantly eliminate both from the board.
* **The Golden Rule of Freedom:** A block is strictly considered "free" (and therefore clickable) ONLY if it has absolutely no other block resting on top of it, AND it is completely unblocked on at least one of its immediate left or right vertical sides.
* If a block is wedged tightly between two other blocks horizontally, it cannot be selected.
* The game is won when the board is completely clear. The game is lost (deadlocked) if no valid matches remain.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your absolute highest priority on breaking down the tallest, thickest stacks of stone blocks in the dead center of the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board offers vastly more horizontal matching options and reveals more hidden blocks simultaneously.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach Sun blocks on the very outer edge of the board, ignore them! Save them. You might desperately need those outer blocks later to match a Sun block buried deep in the center tower.
* **Memorize the Glyphs:** Mayan carvings are highly intricate and can easily blend together. Take a moment at the start of the level to mentally categorize the blocks ("the square face", "the round shield") to dramatically speed up your visual scanning.
* **Use the Undo Button:** If you make a match and it immediately deadlocks the board, use the undo button to reverse it. Always scout the board to see if a specific block has three visible copies; if it does, match the two that unblock the most hidden tiles.`
  },
  {
    title: "Hashiwokakero",
    seoContent: `![Hashiwokakero](https://www.htmlgames.com/uploaded/game/thumb800/hashiwokakero800450.webp)

Hashiwokakero (often simply called "Hashi" or "Bridges") strips the spatial logic puzzle genre down to its absolute, most mathematically pure and elegantly simple core, delivering a digital adaptation of the notoriously difficult Japanese newspaper puzzle. Set against a clean, visually minimalist grid resembling a vast ocean, players are presented with a series of numbered circles scattered across the screen (the "Islands"). Your objective is intensely focused and brutally unforgiving: you must draw straight, physical lines (the "Bridges") to connect every single island into one massive, unbroken network. However, the constraints are severe: the number inside each island dictates exactly how many bridges must connect to it. The atmosphere is deeply cerebral and intentionally demanding, requiring an intense level of forward-thinking, geometric routing, and process of elimination. You cannot draw diagonal bridges, and bridges can never cross each other. Hashiwokakero is the ultimate brain-training routine for hardcore logic puzzle fans.

## How to Play
* The primary objective is to connect all the numbered islands with bridges so that every island has the exact number of bridges matching its printed number, and all islands are connected in a single continuous network.
* Use your \`Mouse\` to click on an island, then drag a line to another island (or click between two islands) to draw a bridge.
* Click again to draw a double bridge (the maximum allowed between two islands). Click a third time to delete the bridges.
* **The Rules:**
  1. Bridges must begin and end at distinct islands, traveling in a perfectly straight horizontal or vertical line.
  2. Bridges absolutely CANNOT cross other bridges or other islands.
  3. You can draw a maximum of TWO bridges between any pair of islands.
  4. The number of bridges connected to an island must exactly match the number written on that island.

## Tips and Tricks
* **Start with the Extremes (The Corners):** The absolute most critical strategy is finding the forced moves. If you have an island with the number '8', it MUST have two bridges going in all four directions (North, South, East, West). Draw them immediately. If an island with '4' is in a corner (only two valid directions), it MUST have two bridges going in both directions.
* **The "3" in a Corner:** If a '3' island is in a corner, it must have at least one bridge going in both available directions. Draw a single line in both directions to start; you can figure out which one gets the double bridge later.
* **Beware the Isolation Trap:** The most common mistake is perfectly solving a cluster of four islands, but realizing you have closed them off from the rest of the board. Every single island must connect to the main network. Never build a bridge that permanently isolates a group.
* **Process of Elimination:** If an island requires 5 bridges, and three of the four directions are blocked by other lines, you mathematically know exactly where the remaining bridges must go.
* **Work Backwards:** If you are stuck, look for an island that only needs one more bridge, and trace the only possible open path it has left.`
  },
  {
    title: "Sydney Hidden Objects",
    seoContent: `![Sydney Hidden Objects](https://www.htmlgames.com/uploaded/game/thumb800/sydneyhiddenobjects800450.webp)

Sydney Hidden Objects is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core, all wrapped in a breathtaking virtual tour of Australia's most iconic city. Forget convoluted detective storylines or searching for random household items; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within stunning travel photography. You are placed directly into a series of highly detailed, high-definition digital images showcasing the Sydney Opera House, the Harbour Bridge, bustling Bondi Beach, and vibrant city streets. Your objective is elegantly simple: locate specific, thematic items expertly blended into the bustling urban environments. The atmosphere is deeply relaxing and incredibly focused. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every disguised boomerang and camouflaged coffee cup is rendered with breathtaking clarity.

## How to Play
* Your primary objective is to find every single item listed (either as text or silhouettes) hidden within the main high-definition scenes of Sydney.
* Use your \`Mouse\` to carefully scan the high-definition image.
* You can often click to zoom in and out of the high-definition image to inspect tiny details on the Opera House or the bridge.
* When you spot a required object, click directly on it.
* Successfully locating an object will remove it from your list and award you points.
* Be extremely precise! Randomly spam-clicking around the screen will often result in a heavy time penalty or score deduction.

## Tips and Tricks
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A modern smartphone might be tinted white to blend perfectly into the sails of the Opera House.
* **Divide the Screen:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the base of the Harbour Bridge) before moving to the next.
* **Check the Extremes (Shadows and Glare):** The developers love hiding dark objects inside the deep black shadows beneath parked cars, or hiding bright objects directly inside the blown-out glare of the Australian sun. Adjust your monitor brightness!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a hidden koala toy, you will accidentally spot the hidden sunglasses.
* **Save Your Hints:** If you are completely stuck, you can click the glowing light bulb icon for a hint, but absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
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
