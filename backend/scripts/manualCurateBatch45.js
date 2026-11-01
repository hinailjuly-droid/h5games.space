const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Mahjong Gardens 2",
    seoContent: `![Mahjong Gardens 2](https://www.htmlgames.com/uploaded/game/thumb800/mahjonggarden2800x450.webp)

Mahjong Gardens 2 delivers an incredibly robust, deeply engaging evolution of the classic Chinese tile-matching genre, completely stripping away the sterile casino aesthetic in favor of a breathtaking, vibrant botanical environment. Set against a lush backdrop of blooming cherry blossoms, gentle streams, and manicured hedges, players are presented with massive, overlapping 3D pyramids constructed of beautifully illustrated tiles featuring birds, bamboo, and lotus flowers. The defining feature of this sequel is the "Bird Release" mechanic: some tiles depict caged birds. When you successfully match and clear those specific tiles, the birds are visually freed to fly around the garden. Your objective is elegantly simple yet brutally difficult in execution: you must meticulously dismantle the overlapping structure by finding identical pairs. The atmosphere is deeply relaxing and incredibly focused, trading tense ticking clocks for a soothing, meditative puzzle environment accompanied by ambient bird song. It is the ultimate digital sanctuary for puzzle enthusiasts.

## How to Play
* Your primary objective is to clear all tiles from the board by matching them in identical pairs.
* Use your \`Left Mouse Button\` to click on a "free" (highlighted) tile to select it.
* Click on a matching "free" tile to instantly eliminate both from the board.
* **The Golden Rule of Freedom:** A tile is strictly considered "free" (and therefore clickable) ONLY if it has absolutely no other tile resting on top of it, AND it is completely unblocked on at least one of its immediate left or right vertical sides.
* If a tile is wedged tightly between two other tiles horizontally, it cannot be selected.
* The game is won when the board is completely clear.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your absolute highest priority on breaking down the tallest, thickest stacks of tiles in the dead center of the layout. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board offers vastly more horizontal matching options and reveals more hidden tiles simultaneously.
* **Prioritize the Bird Tiles:** Since freeing the birds is often a secondary objective (or directly tied to your score multiplier), try to match the bird tiles as soon as they become safely available, but do not ruin a massive cascade to reach them early.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach Bamboo tiles on the very outer edge of the board, ignore them! Save them. You might desperately need those outer tiles later to match a Bamboo tile buried deep in the center tower.
* **Use the Undo Button:** If you make a match and it immediately deadlocks the board, use the undo button to reverse it. Always scout the board to see if a specific tile has three visible copies; if it does, match the two that unblock the most hidden tiles.`
  },
  {
    title: "Hex Stream",
    seoContent: `![Hex Stream](https://www.htmlgames.com/uploaded/game/thumb800/hexstream800450.webp)

Hex Stream (a brilliant evolution of the "Flow Free" puzzle formula) strips the spatial routing genre down to its absolute, most mathematically pure core, injecting a massive layer of complexity by ripping up the standard square grid and replacing it with a dense hexagonal honeycomb. Set against a clean, visually minimalist black void, players are presented with a series of colored dots (nodes) scattered across the hex grid. Your objective is intensely focused and brutally unforgiving: you must draw continuous, glowing streams of light to connect the matching colored dots. However, the constraints are severe: streams absolutely cannot cross each other, and you MUST completely fill every single empty hexagonal cell on the entire board to win the level. The atmosphere is deeply cerebral; the honeycomb structure radically alters pathfinding, offering six directions of movement instead of four, completely changing how "corners" are calculated. Hex Stream is a pure test of geometric routing and topological logic.

## How to Play
* The primary objective is to connect all matching colored dots with continuous lines AND fill every single empty hex on the board.
* Use your \`Mouse\` to click and hold on a colored dot.
* Drag the mouse across the adjacent empty hexes to draw a glowing stream of light.
* Release the mouse when you reach the matching colored dot to complete the connection.
* **The Rules:**
  1. Streams of different colors CANNOT cross each other.
  2. A single stream cannot loop back onto itself.
  3. To complete the level, absolutely 100% of the grid must be filled with color.

## Tips and Tricks
* **Start with the Edges (The Perimeter Run):** The absolute most critical strategy is routing the outer colors first. If a red dot is sitting directly on the outer edge of the honeycomb, trace its path tightly against the outer wall. By hugging the perimeter, you leave the massive center area completely open for the more complex routing of other colors.
* **Identify the Bottlenecks:** Look at the board and find the narrowest "hallways" (e.g., a one-hex wide gap between two dots). You must logically deduce which specific color *has* to pass through that gap. If only the blue stream can reach it without crossing another color, route the blue stream through it immediately.
* **Beware the "Shortest Path" Trap:** The most common mistake is connecting two dots using a straight, direct line. Because you must fill 100% of the board, you almost ALWAYS have to intentionally draw long, snaking, convoluted paths to ensure every hex is covered.
* **Work Backwards from Dead Ends:** If a single empty hex is completely surrounded by drawn lines on five sides, the remaining open side MUST be the entry/exit point for a stream. Adjust your lines to route a color into that dead end and back out.
* **Reset Often:** If your board is a massive knot of overlapping colors and you have empty hexes you can't reach, do not try to untangle it. Hit the reset button. It is faster to execute a fresh mental plan.`
  },
  {
    title: "Snow Balls",
    seoContent: `![Snow Balls](https://www.htmlgames.com/uploaded/game/thumb800/snowballs800450.webp)

Snow Balls strips the reflex-arcade genre down to its absolute, most tension-fueled and visually demanding core, delivering a pure, unadulterated test of spatial calculation, rapid trajectory prediction, and split-second manual dexterity. Moving entirely away from complex narratives or deep upgrade trees, this title focuses on a highly stylized, minimalist winter environment. Set against a clean, snowy landscape, players control a simple basket or character at the bottom of the screen. Your objective is brutally elegant: a relentless barrage of bright white snowballs (and often dangerous obstacles like ice chunks or rocks) falls from the sky. You must rapidly maneuver horizontally to intercept the falling snowballs, collecting them for points, while aggressively dodging the hazards. The atmosphere is deeply kinetic; gravity and acceleration are constant, unrelenting forces, and the game rapidly spirals into a chaotic test of hand-eye coordination. Snow Balls is a flawless tactical physics experience.

## How to Play
* The primary objective is to catch the falling snowballs in your basket to score points while surviving as long as possible.
* You control a basket/catcher moving along the bottom edge of the screen.
* Use the \`Left Arrow\` and \`Right Arrow\` keys (or swipe on a touch screen) to slide the basket horizontally.
* As snowballs fall from the top, align the basket directly beneath them to catch them.
* **The Hazards:** Not everything falling is good. You must actively dodge black rocks, sharp icicles, or bombs. Catching a hazard usually results in an instant game over or a massive loss of lives.
* The falling objects will continuously accelerate the longer you survive.

## Tips and Tricks
* **Focus on the Drop Zone (Don't Look Up):** The absolute most common mistake is staring at the top of the screen where the objects spawn. By the time your eyes track a fast-falling rock down to the bottom, you are too late. Keep your eyes locked on the middle/lower third of the screen, reacting to the objects as they enter the "danger zone."
* **Prioritize Survival Over Score:** If a snowball and a bomb are falling right next to each other, and you are not 100% confident you can catch the snow without clipping the bomb, *abandon the snowball*. Losing a few points is always better than losing a life.
* **Prioritize the Lowest Object:** When three objects are falling simultaneously at different speeds, completely ignore the top two. Your absolute only priority is intercepting (or dodging) the one closest to the floor. Deal with the others a split second later.
* **Micro-Movements:** Do not wildly swing the basket from edge to edge. Keep it centralized as much as possible, using tiny, controlled slides to catch objects and immediately returning to a neutral center position.
* **Learn the Hitboxes:** Sometimes the visual graphic of your basket is larger than its actual physical collision box. Learn exactly which pixels count as a "catch" and which pixels count as a "miss."`
  },
  {
    title: "Beijing Hidden Objects",
    seoContent: `![Beijing Hidden Objects](https://www.htmlgames.com/uploaded/game/thumb800/beijinghiddenobjects800450.webp)

Beijing Hidden Objects is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core, all wrapped in a breathtaking virtual tour of China's most iconic city. Forget convoluted detective storylines or searching for random household items; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within stunning travel photography. You are placed directly into a series of highly detailed, high-definition digital images showcasing the Forbidden City, the Great Wall, bustling street markets, and serene temple gardens. Your objective is elegantly simple: locate specific, thematic items expertly blended into the bustling urban and historical environments. The atmosphere is deeply relaxing and incredibly focused, accompanied by traditional Chinese instrumentation. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every disguised paper lantern and camouflaged jade dragon is rendered with breathtaking clarity.

## How to Play
* Your primary objective is to find every single item listed (either as text or silhouettes) hidden within the main high-definition scenes of Beijing.
* Use your \`Mouse\` to carefully scan the high-definition image.
* You can often click to zoom in and out of the high-definition image to inspect tiny details on the temple roofs or the market stalls.
* When you spot a required object, click directly on it.
* Successfully locating an object will remove it from your list and award you points.
* Be extremely precise! Randomly spam-clicking around the screen will often result in a heavy time penalty or score deduction.

## Tips and Tricks
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A modern teapot might be tinted gray to blend perfectly into the stone of the Great Wall.
* **Divide the Screen:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the base of a specific statue) before moving to the next.
* **Check the Extremes (Shadows and Glare):** The developers love hiding dark objects inside the deep black shadows beneath the ornate eaves of the temples, or hiding bright objects directly inside the blown-out glare of the sun. Adjust your monitor brightness!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a hidden fan, you will accidentally spot the hidden coins.
* **Save Your Hints:** If you are completely stuck, you can click the glowing light bulb icon for a hint, but absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Emoji Match",
    seoContent: `![Emoji Match](https://www.htmlgames.com/uploaded/game/thumb800/emojimatch800450.webp)

Emoji Match delivers the absolute purest, most delightfully unadulterated distillation of the legendary tile-swapping puzzle formula (Match-3), completely stripping away complex meta-progression and wrapping the core mechanics in a vibrant, universally recognizable aesthetic of modern internet culture. This is the genre exactly as it was meant to be played: a massive grid filled with brightly colored, highly expressive emoji faces—crying laughing, sunglasses, heart-eyes, and angry faces. Your objective is intensely focused: manually swap adjacent emojis to form horizontal or vertical lines of three or more, triggering satisfying cascade reactions to reach a massive high score or collect specific target emojis before the strict timer expires. The atmosphere is undeniably upbeat and deeply engaging, relying entirely on the visceral satisfaction of pattern recognition and explosive combos. The visual presentation is highly polished, utilizing crisp, high-definition sprites that crackle with kinetic energy when massive combos are triggered. Emoji Match is a pure, uncompromising test of spatial logic and high-speed cascade optimization.

## How to Play
* The core mechanic revolves around swapping adjacent emojis to create horizontal or vertical lines of three or more identical faces.
* Use your \`Mouse\` to click on an emoji, then click an adjacent one to swap their positions, or simply click and drag.
* Swaps are only permitted if they immediately result in a valid match of three or more.
* Your objective is to score as many points as possible, or collect specific emojis, before the timer bar at the top of the screen empties completely.
* Matching exactly four emojis creates a glowing, line-clearing explosive emoji.
* Matching five emojis in an L or T shape creates a devastating area-of-effect bomb.
* Matching five emojis in a straight row creates a hyper-cube that obliterates all emojis of a specific face from the board.

## Tips and Tricks
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading emojis dropping from the ceiling, often resulting in massive, free combo points that require zero effort on your part.
* **Combine the Power-Ups:** The most devastating move in the game is swapping two power-ups with each other. Swapping a line-clear emoji with a bomb creates a massive, cross-shaped explosion that clears half the board instantly, scoring massive points and triggering huge cascades.
* **Scan During Animations:** Do not just watch the explosions! While a massive cascade is happening on the left side of the board, use that split second to scan the right side of the board and locate your next move. In a timed game, every millisecond counts.
* **Set Up the Hyper-Cube:** When you see the potential for a 5-in-a-row match, do everything in your power to execute it. The face-clearing hyper-cube is the single most powerful tool for manipulating the board state and saving a dying timer.
* **Don't Force Bad Matches:** If you have a choice between a 3-emoji match at the top of the board, or spending two seconds looking for a match at the bottom, take the top match immediately. Constant movement is better than perfect movement.`
  },
  {
    title: "Jolly Jong Butterfly",
    seoContent: `![Jolly Jong Butterfly](https://www.htmlgames.com/uploaded/game/thumb800/jollyjongbutterfly800450.webp)

Jolly Jong Butterfly executes a brilliant, incredibly satisfying twist on the traditional Mahjong Solitaire formula, completely abandoning the static, heavy stone blocks in favor of a delicate, beautifully animated springtime aesthetic. Set against a clean, visually uncluttered backdrop, players are presented with massive, overlapping 3D pyramids constructed of tiles. However, these are not standard tiles; each tile features exactly one half of a beautifully illustrated butterfly wing. Your objective is intensely focused and incredibly rewarding: you must meticulously dismantle the structure by finding and pairing the left and right wings of the identical butterfly species. When a valid pair is matched, the two halves fuse together into a fully animated butterfly that physically flutters off the board. The atmosphere is deeply relaxing and visually stunning, trading the tense ticking clocks of arcade games for a soothing, meditative puzzle environment. It is a pure test of visual pairing and sequence planning.

## How to Play
* Your primary objective is to clear all the wing tiles from the board by matching them in identical pairs.
* Use your \`Left Mouse Button\` to click on a "free" (highlighted) wing tile to select it.
* Click on the matching opposite wing to instantly fuse them and eliminate both from the board.
* **The Golden Rule of Freedom:** Just like standard Mahjong, a tile is strictly considered "free" (and therefore clickable) ONLY if it has absolutely no other tile resting on top of it, AND it is completely unblocked on at least one of its immediate left or right vertical sides.
* If a tile is wedged tightly between two other tiles horizontally, it cannot be selected.
* The game is won when the board is completely clear.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your absolute highest priority on breaking down the tallest, thickest stacks of tiles in the dead center of the layout. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board offers vastly more horizontal matching options and reveals more hidden tiles simultaneously.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach Monarch wings on the very outer edge of the board, ignore them! Save them. You might desperately need those outer tiles later to match a Monarch wing buried deep in the center tower.
* **Color Coordinate (Not Just Pattern):** Because the wings are split in half, the intricate patterns can be hard to match quickly. Rely heavily on the primary color palette of the wing (e.g., "I need the bright cyan wing with black trim") to dramatically speed up your visual scanning.
* **Use the Undo Button:** If you make a match and it immediately deadlocks the board, use the undo button to reverse it. Always scout the board to see if a specific wing has three visible copies; if it does, match the two that unblock the most hidden tiles.`
  },
  {
    title: "Push Puzzle",
    seoContent: `![Push Puzzle](https://www.htmlgames.com/uploaded/game/thumb800/pushpuzzle800450.webp)

Push Puzzle completely rewrites the rules of the traditional Match-3 genre by abandoning the standard "swap adjacent tiles" mechanic in favor of a highly complex, edge-driven pushing system wrapped in a vibrant, tactile aesthetic. Set against a clean, visually minimalist grid, the board is partially filled with brightly colored spheres resting on shaded background tiles. However, you do not directly manipulate the balls inside the grid. Instead, you utilize directional arrows located on the absolute perimeter of the board. Your objective is intensely focused: you must click an arrow to physically shoot a new colored ball straight into the grid from the edge, pushing an entire row or column. When four or more identical balls align, they vanish, destroying the shaded background beneath them. The atmosphere is deeply cerebral and immensely satisfying; you are essentially managing a massive game of localized gravity and spatial displacement. Push Puzzle is a pure test of cascade prediction and geometric routing.

## How to Play
* The primary objective is to clear all the shaded background tiles from the grid before the timer expires.
* Look at the "Next Ball" indicator on the outer edge of the grid, next to a directional arrow.
* Use your \`Mouse\` to click the arrow. This shoots the ball into the main grid.
* Shooting a ball from the right side forces every other ball in that specific horizontal row to slide one space to the left.
* **The Matching Rule:** If your push causes FOUR or more identical balls to touch (horizontally or vertically), they instantly shatter and are removed, along with the background tiles directly beneath them.
* You win the level when all backgrounds are clear.

## Tips and Tricks
* **Calculate the Slide (The Golden Rule):** Never push a ball blindly. Before you click, look at the entire row. If you push from the right, the ball on the extreme left edge might be pushed completely off the board (or squished, resulting in a penalty). Trace the final resting place of every single ball in the row *before* you move.
* **Set Up the Cascade:** The most powerful moves in this game are not direct matches. The best moves involve pushing a row specifically to align three red balls, so that on your *next* move, you can push a fourth red ball from a perpendicular angle to trigger a massive combo.
* **Focus on the Backgrounds:** Completely ignore massive, satisfying 5-ball combos on the left side of the board if the remaining background tiles are all on the right side. Every move must serve the objective of clearing the shaded tiles.
* **Work from the Inside Out:** It is often much easier to clear the massive, dense cluster in the dead center of the board first. If you push everything to the outer edges immediately, you limit your future pushing angles.
* **Use the Walls:** Sometimes you want a ball to stop sliding. Push it toward a row that already has a solid wall of balls on the opposite side; this acts as a backstop.`
  },
  {
    title: "Solitaire Connect",
    seoContent: `![Solitaire Connect](https://www.htmlgames.com/uploaded/game/thumb800/solitaireconnect800450.webp)

Solitaire Connect executes a brilliant, mind-bending fusion of two wildly different puzzle genres, taking the traditional, highly recognizable playing cards of Solitaire and completely stripping away the tableau sorting mechanics, injecting them directly into the geometric pathfinding engine of the classic Onet/Kyodai tile-matching game. Instead of building descending sequences on a green felt table, every single card from a standard deck is laid completely flat on a massive, single-layer 2D grid. Your objective is intensely focused: you are not just trying to find pairs of identical rank and color (e.g., two Red 8s); you must prove that a clear, unobstructed path can physically be drawn between them using a very specific set of routing rules. The atmosphere is deeply engaging, requiring players to constantly weigh the immediate satisfaction of a simple edge match against the necessity of unblocking the dense center of the board. Solitaire Connect is a pure, uncompromising test of spatial planning and line-of-sight optimization.

## How to Play
* Your primary objective is to clear the entire flat grid by connecting identical pairs of playing cards before the strict timer runs out.
* Pairs must be identical in RANK and COLOR (e.g., the 8 of Hearts can only connect to the 8 of Diamonds; the King of Spades connects to the King of Clubs).
* Use your \`Mouse\` to click on a card, then click on a matching card to attempt a connection.
* **The Golden Pathfinding Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two cards using a maximum of three straight lines (which means no more than two 90-degree corners).
* You can route the path entirely outside the main grid boundary (the empty space surrounding the puzzle).
* If you successfully clear all cards, you win.

## Tips and Tricks
* **Clear the Perimeter First:** Cards sitting on the absolute outer edge of the board are by far the easiest to connect, because their path can route freely through the empty space outside the grid using the two-turn rule. Clear the borders instantly to shrink the board.
* **Look for the "U" Shape:** The two-turn rule allows for a perfect "U" shape connection. If two identical Red Queens are on the exact same row, but separated by other cards, check if there is empty space directly above or below both of them to draw the U through the air.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the grid from the outside toward the dense, congested center.
* **Scan by Color, Not Just Rank:** Because suits matter (Red matches Red, Black matches Black), you can quickly filter the board. If you need a Black 7, completely ignore half the board that contains red cards. This dramatically speeds up visual processing.
* **Don't Tunnel Vision:** If you can't find a path for two specific Kings, stop looking at them. Scan the entire board for an obvious, free match (like two Aces touching each other) to keep the timer from running down.`
  },
  {
    title: "Hidden Spots - Indonesia",
    seoContent: `![Hidden Spots - Indonesia](https://www.htmlgames.com/uploaded/game/thumb800/hiddenspotsindonesia800450.webp)

Hidden Spots - Indonesia is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core, all wrapped in a breathtaking virtual tour of Southeast Asia. Forget convoluted detective storylines or searching for random household items; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within stunning travel photography. You are placed directly into a series of highly detailed, high-definition digital images showcasing lush Balinese rice terraces, ancient volcanic temples, bustling Jakarta streets, and pristine tropical beaches. Your objective is elegantly simple: you are not looking for specific objects, but rather specific "spots" or tiny cropped segments of the main image displayed at the bottom of the screen. You must meticulously scan the massive photograph to find the exact location of that tiny detail. The atmosphere is deeply relaxing and incredibly focused. It is the ultimate brain-training routine for pattern recognition.

## How to Play
* Your primary objective is to locate specific, tiny cropped segments (spots) hidden within the main high-definition photograph of Indonesia.
* The spots you need to find are displayed in a queue at the bottom or side of the screen.
* Use your \`Mouse\` to carefully scan the high-definition image.
* When you find the exact location in the main image that matches the small cropped spot, click directly on it.
* Successfully locating a spot will remove it from your list and award you points.
* Be extremely precise! Randomly spam-clicking around the screen will often result in a heavy time penalty or score deduction.

## Tips and Tricks
* **Look for Unique Textures:** Do not try to memorize the entire cropped spot. Identify one highly unique texture or color gradient within it (e.g., a very specific jagged edge of a green palm leaf overlapping a gray stone). Scan the main image strictly for that one specific intersection of colors.
* **Divide the Screen:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the base of the temple steps) before moving to the next.
* **Check the Edges:** The developers love placing the cropped spots on the absolute extreme borders of the main image, where players rarely look. Always scan the very top and very bottom pixels of the photograph.
* **Step Back:** If you are completely stuck on a spot, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the micro-detail suddenly pop into context.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Farm Girl",
    seoContent: `![Farm Girl](https://www.htmlgames.com/uploaded/game/thumb800/farmgirl800450.webp)

Farm Girl delivers the absolute purest, most unadulterated distillation of the legendary tile-swapping puzzle formula (Match-3), completely stripping away the bloated narratives and complex meta-progression that plague modern iterations, and wrapping the core mechanics in a charming, deeply relaxing agricultural aesthetic. This is the genre exactly as it was meant to be played: a massive grid filled with brightly colored, highly stylized farm produce—plump tomatoes, golden corn, crisp carrots, and purple eggplants. Your objective is intensely focused: manually swap adjacent vegetables to form horizontal or vertical lines of three or more, triggering satisfying cascade reactions to reach a massive high score or collect specific target crops before the strict timer expires. The atmosphere is undeniably upbeat and deeply engaging, relying entirely on the visceral satisfaction of pattern recognition and explosive combos, accompanied by cheerful country music. The visual presentation is highly polished, utilizing crisp, high-definition sprites. Farm Girl is a pure, uncompromising test of spatial logic and high-speed cascade optimization.

## How to Play
* The core mechanic revolves around swapping adjacent crops to create horizontal or vertical lines of three or more identical vegetables.
* Use your \`Mouse\` to click on a crop, then click an adjacent one to swap their positions, or simply click and drag.
* Swaps are only permitted if they immediately result in a valid match of three or more.
* Your objective is to score as many points as possible, or harvest specific vegetables, before the timer bar at the top of the screen empties.
* Matching exactly four crops creates a glowing, line-clearing explosive vegetable.
* Matching five crops in an L or T shape creates a devastating area-of-effect bomb.
* Matching five crops in a straight row creates a pitchfork (hyper-cube) that obliterates all crops of a specific type from the board.

## Tips and Tricks
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading vegetables dropping from the top, often resulting in massive, free combo points that require zero effort on your part.
* **Combine the Power-Ups:** The most devastating move in the game is swapping two power-ups with each other. Swapping a line-clear tomato with a bomb creates a massive, cross-shaped explosion that clears half the board instantly, scoring massive points and triggering huge cascades.
* **Scan During Animations:** Do not just watch the explosions! While a massive cascade is happening on the left side of the board, use that split second to scan the right side of the board and locate your next move. In a timed game, every millisecond counts.
* **Set Up the Hyper-Cube:** When you see the potential for a 5-in-a-row match, do everything in your power to execute it. The color-clearing pitchfork is the single most powerful tool for manipulating the board state and saving a dying timer.
* **Don't Force Bad Matches:** If you have a choice between a 3-crop match at the top of the board, or spending two seconds looking for a match at the bottom, take the top match immediately. Constant movement is better than perfect movement.`
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
