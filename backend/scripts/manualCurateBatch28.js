const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Mahjong Solitaire",
    seoContent: `![Mahjong Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/mahjong-solitaire-800x450.webp)

Mahjong Solitaire delivers the absolute purest, most unadulterated distillation of the legendary Chinese tile-matching puzzle, completely stripping away the bloated, over-stylized themes of modern adaptations to present the genre exactly as it was meant to be played. Set against a clean, visually uncluttered green felt background—a loving homage to classic physical parlor games—players are presented with the iconic "Turtle" formation consisting of 144 beautifully rendered, traditional ivory-colored tiles. Your objective is elegantly simple yet brutally difficult in execution: you must meticulously dismantle the massive, overlapping pyramid by finding and matching identical pairs of tiles. The atmosphere is deeply relaxing and incredibly focused, trading the tense ticking clocks of arcade games for a soothing, meditative puzzle environment. The visual presentation is highly functional, utilizing crisp, high-contrast traditional symbols (Bamboos, Characters, Circles, Winds, and Dragons) that ensure perfect readability even when the massive stone structure is heavily congested. It is the ultimate, timeless brain-training routine for puzzle purists.

## How to Play
* Your primary objective is to clear all 144 tiles from the board by matching them in identical pairs.
* Use your \`Left Mouse Button\` to click on a "free" tile to select it.
* Click on a matching "free" tile to instantly eliminate both from the board.
* **The Golden Rule of Freedom:** A tile is strictly considered "free" (and therefore clickable) ONLY if it has absolutely no other tile resting on top of it, AND it is completely unblocked on at least one of its immediate left or right vertical sides.
* If a tile is wedged tightly between two other tiles horizontally, it cannot be selected.
* The game is won when the board is completely clear. The game is lost (deadlocked) if no valid matches remain on the board.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your absolute highest priority on breaking down the tallest, thickest stacks of tiles in the dead center of the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board offers vastly more horizontal matching options and reveals more hidden tiles simultaneously.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach Bamboo tiles on the very outer edge of the board, ignore them! Save them. You might desperately need those outer tiles later to match a Bamboo tile buried deep in the center tower.
* **Understand the Exceptions:** Remember the classic rules: any Season tile (Spring, Summer, Autumn, Winter) can match with any other Season tile. Any Flower tile (Plum, Orchid, Chrysanthemum, Bamboo) can match with any other Flower tile. They do not have to be visually identical.
* **Use the Undo Button:** If you make a match and it immediately deadlocks the board, use the undo button to reverse it. Always scout the board to see if a specific tile has three visible copies; if it does, match the two that unblock the most hidden tiles.`
  },
  {
    title: "Halloween Jewels",
    seoContent: `![Halloween Jewels](https://www.htmlgames.com/uploaded/game/thumb800/halloweenjewels800450.webp)

Halloween Jewels injects a massive dose of spooky, autumnal energy into the highly competitive tile-swapping genre, delivering a visual feast of ghoulish icons and intensely satisfying combination mechanics. Stepping entirely away from generic, sterile gem-swapping, this title embraces a highly thematic approach, requiring players to physically align brightly colored Jack-o'-lanterns, glowing ghosts, witch hats, and eerie spell books. The atmosphere is undeniably engaging, perfectly capturing the fun, slightly creepy vibe of a haunted house without sacrificing the deep, strategic complexity that hardcore puzzle fans demand. Every level is a meticulously designed challenge, presenting specific objective quotas (like collecting 40 orange pumpkins or breaking frozen ice blocks off the grid) that must be met within a strict move limit. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition sprites that crackle with magical, purple energy when linked together. It is a pure, unadulterated test of spatial planning, cascade optimization, and high-speed trick-or-treating.

## How to Play
* The core mechanic revolves around swapping adjacent Halloween items to create horizontal or vertical lines of three or more identical objects.
* Use your \`Mouse\` to click on an item, then click an adjacent one to swap their positions, or simply click and drag.
* Your objective is to fulfill specific collection goals displayed at the top of the screen before you run out of allowed moves.
* Matching exactly four items creates a glowing, line-clearing super-pumpkin that obliterates an entire row or column.
* Matching five items in an L or T shape creates a devastating area-of-effect ghost bomb.
* Matching five items in a straight row creates a magical cauldron that instantly collects all items of a specific type from the board.

## Tips and Tricks
* **Prioritize the Quota:** It is incredibly easy to get distracted by a massive chain of green Frankenstein heads, but if your objective only requires purple bats, you are wasting a precious move. Focus laser-like on the goal.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading items dropping from the ceiling, often resulting in free, accidental combos as the board settles.
* **Combine the Power-Ups:** The most devastating move in the game is swapping two power-ups with each other. Swapping a line-clear with a ghost bomb creates a massive, cross-shaped explosion that clears half the graveyard instantly.
* **Attack the Corners Early:** The hardest items to collect or break are the ones tucked into the extreme corners or narrow columns of the grid because very few new items flow through those areas. Dedicate your early game to breaking the corners.
* **Save the Cauldrons:** Do not use the five-in-a-row item immediately. Save it until you desperately need to collect a specific item to meet your quota, or wait to combine it with another power-up for a board-wiping effect.`
  },
  {
    title: "Snake Dash",
    seoContent: `![Snake Dash](https://www.htmlgames.com/uploaded/game/thumb800/snakedash800450.webp)

Snake Dash strips the legendary, Nokia-era arcade game down to its absolute, most viscerally satisfying core, delivering a pure, unadulterated test of split-second reflex timing, spatial awareness, and greed management. Moving away from complex modern mechanics, this title embraces a highly stylized, minimalist neon aesthetic. You are placed in control of a constantly moving, segmented snake trapped within a strict, enclosed rectangular grid. Your objective is intensely focused: navigate the grid, consume the randomly spawning glowing dots (apples/food) to increase your score, and avoid crashing. However, every single dot you consume permanently adds a segment to the length of your snake's tail. The atmosphere is deeply kinetic and increasingly claustrophobic; what starts as a simple drive quickly becomes a desperate, high-speed puzzle as your massive tail becomes a physical wall blocking your own path. The visual presentation is highly polished, utilizing crisp, contrasting colors that ensure the snake's head and tail are perfectly readable. Snake Dash is a pure shot of retro arcade adrenaline.

## How to Play
* The primary objective is to survive as long as possible and achieve a massive high score by eating the glowing dots.
* The snake moves forward automatically at a constant, unyielding speed.
* Use the \`Up\`, \`Down\`, \`Left\`, and \`Right\` Arrow keys to instantly change the snake's direction of travel by 90 degrees.
* You must navigate the snake's head directly over a glowing dot to consume it.
* **The Fatal Errors:** The game is instantly over if the snake's head crashes into the solid outer walls of the grid, OR if the snake's head crashes into any part of its own tail.

## Tips and Tricks
* **Hug the Walls:** When your snake becomes incredibly long, the absolute safest place to travel is directly against the outer walls of the grid. This maximizes the open space in the center of the board for sudden maneuvers.
* **The "Zig-Zag" Packing Method:** If you are trapped in a tight space with a massive tail, you must learn to "pack" the snake by repeatedly moving back and forth in tight, adjacent columns (like a radiator coil). This compresses your length into the smallest possible area, buying time for the tail to clear.
* **Don't Chase Blindly:** If a dot spawns right next to your tail, do not immediately dive for it. Calculate exactly where your tail will be by the time you reach the dot. Sometimes it is safer to take a massive detour around the board to let the tail move out of the way.
* **Don't Trap Yourself in Corners:** Never enter a 1x1 space or a tight U-turn if you do not have a mathematically guaranteed exit path. Always leave yourself an escape route.
* **Master the Quick Turn:** The game allows for incredibly rapid inputs. You can press Down and immediately Left to execute a perfect U-turn within a single grid square, which is often necessary to survive late-game claustrophobia.`
  },
  {
    title: "Tetrix",
    seoContent: `![Tetrix](https://www.htmlgames.com/uploaded/game/thumb800/tetrix800450.webp)

Tetrix delivers the absolute purest, most unadulterated distillation of the legendary, Soviet-era block-falling arcade formula, completely stripping away the bloated, hyper-stylized gimmicks of modern adaptations to present the genre exactly as it was meant to be played. Set against a clean, visually minimalist grid (the "Matrix"), players are tasked with managing a relentless, gravity-driven downpour of complex geometric shapes (Tetrominoes). As the pieces descend from the ceiling, you must actively steer and rotate them, dropping them into the accumulating stack at the bottom of the screen. Your objective is elegantly simple yet brutally difficult in execution: you must perfectly interlock the shapes to form solid, unbroken horizontal lines of blocks across the entire width of the grid. When a line is completed, it instantly vanishes, freeing up crucial space. The atmosphere is deeply kinetic and incredibly stressful; you aren't just trying to keep the board flat, you are fighting an ever-increasing fall speed. Tetrix is a pure, uncompromising test of reflex timing, spatial logic, and rapid geometric cascade planning.

## How to Play
* The primary objective is to survive as long as possible by clearing horizontal lines before the stack of blocks reaches the top of the screen.
* Tetrominoes will fall from the top of the screen one at a time.
* Use the \`Left Arrow\` and \`Right Arrow\` keys to steer the falling block horizontally across the columns.
* Use the \`Up Arrow\` key to instantly rotate the falling block 90 degrees.
* Use the \`Down Arrow\` key to accelerate the block's fall speed (Soft Drop).
* Press the \`Spacebar\` to instantly slam the block straight to the bottom of the stack (Hard Drop).
* When you create a solid horizontal line of 10 blocks with no empty gaps, that line disappears.

## Tips and Tricks
* **Keep the Board Flat:** Your absolute highest priority is ensuring the top layer of your stack remains as flat and even as possible. Massive spikes and deep, narrow valleys make it incredibly difficult to maneuver and rotate falling blocks later in the game.
* **Build for the "Tetris" (Line Piece):** The most efficient way to score massive points is to intentionally leave exactly one single vertical column completely empty on the far left or right edge of the board. Build a solid 4-line high wall next to it, and wait for the long, straight cyan piece (the "I" block) to drop in and clear four lines simultaneously.
* **Don't Depend on the Line Piece:** While building for a 4-line clear is great, do not stubbornly hold out for a straight piece if your board is dangerously high. Sometimes you must "burn" lines by clearing them one or two at a time with jagged pieces just to lower the stack and survive.
* **Use the Hard Drop Strategically:** Do not let pieces float down slowly in the early levels. The faster you hard-drop (\`Spacebar\`) pieces, the more time you have to analyze the board state before the *next* piece spawns.
* **Watch the "Next Piece" Indicator:** Knowing exactly what shape is falling next completely dictates where you should rotate and place your current piece. Never place a piece without checking the preview window.`
  },
  {
    title: "Tokyo Hidden Objects",
    seoContent: `![Tokyo Hidden Objects](https://www.htmlgames.com/uploaded/game/thumb800/tokyohiddenobjects800450.webp)

Tokyo Hidden Objects is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and culturally immersive core. Forget convoluted detective storylines; this title is a pure, unadulterated shot of visual tourism focused entirely on acute observation. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing the vibrant, chaotic, and beautiful landscape of Tokyo, from the neon-drenched streets of Akihabara and bustling crosswalks of Shibuya to the serene, cherry-blossom-filled gardens of ancient temples. Your objective is elegantly simple: locate the subtle, thematic items expertly blended into the Japanese environment. The atmosphere is intoxicatingly rich and deeply engaging, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, massive billboards, and complex urban geometry. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy lantern and glowing vending machine is rendered with breathtaking clarity.

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of the Tokyo scene.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden objects before the strict time limit expires to advance to the next iconic location.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the neon signs on the left building) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A modern smartphone might be tinted red to blend perfectly into a paper lantern.
* **Check the Shadows and Highlights:** The developers love hiding dark objects inside the deep shadows of alleyways, or hiding bright, glowing objects directly inside the glare of a massive neon billboard. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a sushi roll, you will accidentally spot the hidden origami crane.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Rotate Puzzle - Cats and Dogs",
    seoContent: `![Rotate Puzzle - Cats and Dogs](https://www.htmlgames.com/uploaded/game/thumb800/rotatepuzzle-catsanddogs800450.webp)

Rotate Puzzle - Cats and Dogs fundamentally rewrites the rules of the traditional jigsaw puzzle format, abandoning the slow, methodical edge-sorting and piece-swapping of physical cardboard in favor of a highly geometric, orientation-based digital grid. Set against a series of stunning, overwhelmingly adorable high-definition photographs of puppies and kittens, the game takes a perfect image, slices it into a massive grid of identical square tiles, and then maliciously rotates every single tile by 90, 180, or 270 degrees. Every tile is already in its exact, mathematically correct location on the board; your objective is entirely focused on orientation. You must systematically click the tiles to spin them back to their original, upright positions. The atmosphere is deeply calculating and immensely satisfying; you aren't looking for matching colors, you are actively unscrambling a visual matrix based entirely on lines of continuity. The visual presentation is exceptionally clean, forcing you to rely entirely on subtle visual textures—a whisker here, a paw there—to determine correct alignment. Rotate Puzzle is a pure, unpressured test of spatial reconstruction.

## How to Play
* The primary objective is to fully reconstruct the high-definition photograph by fixing the orientation of every tile.
* The image is divided into a grid of perfectly square tiles, but every tile is facing the wrong direction.
* Use your \`Mouse\` to click on any tile on the board.
* Every time you click the \`Left Mouse Button\`, the selected tile will instantly rotate 90 degrees clockwise.
* You must continue clicking each tile until it aligns perfectly with its neighboring tiles to recreate the unbroken image.
* The puzzle is complete when every single tile is facing the correct, upright direction.

## Tips and Tricks
* **Fix the Borders First:** Just like a physical jigsaw puzzle, the absolute easiest tiles to orient are the ones on the outer edges. A border tile will always have a hard, straight edge that must align with the outer frame of the board. Spin all the perimeter tiles first.
* **Look for High Contrast Lines:** The easiest interior pieces to orient are those containing sharp, contrasting straight lines, like the edge of a cat's ear, a collar, or a piece of furniture in the background. Spin the tile until the line smoothly connects to the adjacent tile.
* **Focus on the Eyes:** In any puzzle featuring animals or humans, the eyes are the most recognizable feature. Locate the tiles containing the eyes and orient them upright. They will serve as powerful anchor points for the rest of the face.
* **Use the Reference Image (If Available):** If the game provides a button to view the completed photograph, use it constantly! Use the reference image to identify exactly which direction a specific patch of fur or a colorful toy should be facing.
* **Check the Gradients:** If you are staring at a massive patch of solid blue sky, look at the color gradient. The sky is usually lighter near the horizon and darker near the top. Use this subtle shading to determine which way is "up."`
  },
  {
    title: "Bubble Trip",
    seoContent: `![Bubble Trip](https://www.htmlgames.com/uploaded/game/thumb800/bubbletrip800450.webp)

Bubble Trip delivers the absolute purest, most unadulterated distillation of the legendary arcade-shooter formula, completely stripping away the bloated narratives, unnecessary mini-games, and complex meta-progression that plague modern iterations of the genre. This is the genre exactly as it was meant to be played: a massive ceiling of brightly colored spheres, a single aiming cannon, and an unrelenting pursuit of massive, structure-collapsing chain reactions, all wrapped in a visually soothing, vibrant aesthetic. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core shooting mechanic. You are tasked with calculating angles, bouncing shots off the sidewalls, and grouping colors to trigger massive structural collapses before the weight of the bubbles crushes your launcher. The visual presentation is highly polished, utilizing crisp, high-definition sprites that pop with color against the simple background. The explosive animations and satisfying audio cues that accompany a board-clearing combo are nothing short of spectacular, providing a constant dopamine drip. Bubble Trip is a pure, uncompromising test of geometric calculation and reflex aiming.

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
    title: "Red and Green 2",
    seoContent: `![Red and Green 2](https://www.htmlgames.com/uploaded/game/thumb800/redandgreen2800450.webp)

Red and Green 2 fundamentally rewrites the rules of the physics-based projectile puzzle genre (popularized by games like Angry Birds), abandoning the destructive demolition of wooden structures in favor of a highly calculated, billiards-style game of positional nudging. Set against a bright, colorful, cartoonish 2D environment, players are placed in control of a massive cannon. Your objective is not to destroy the adorable, sleepy Red and Green creatures scattered across the platforms, but rather to feed them. You must fire heavy cannonballs into the environment, using kinetic energy, gravity, and ricochets to physically bump the Red creatures into the Red candies, and the Green creatures into the Green candies. The atmosphere is deeply calculating and immensely satisfying, requiring players to visualize complex chain reactions and momentum transfer. The visual presentation is highly polished, utilizing crisp, expressive sprites and an incredibly robust physics engine that perfectly simulates the weight and friction of rolling objects. Red and Green 2 is a pure test of geometric calculation and kinetic logic.

## How to Play
* The primary objective is to physically push every creature into a piece of candy of the EXACT same color.
* You control a cannon that fires heavy, physics-based cannonballs.
* Use your \`Mouse\` to move the aiming reticle around the cannon to set the trajectory angle.
* Move the mouse further away from the cannon to increase the firing power (usually indicated by an arrow).
* Click the \`Left Mouse Button\` to fire the cannonball.
* The cannonball will bounce off walls and violently strike the creatures, rolling them across the platforms.
* The level is won when the Red creature touches the Red candy, and the Green creature touches the Green candy.

## Tips and Tricks
* **Transfer Momentum:** You are playing billiards with living creatures. If you hit a creature perfectly dead-center with a cannonball, the creature will absorb almost all the kinetic energy and launch forward rapidly. A glancing blow will result in a slow, weak roll.
* **Use the Environment:** Do not always shoot directly at the creatures. Sometimes you must fire a cannonball into a wooden plank to act as a seesaw, launching a creature vertically into the air to reach a high ledge.
* **Mind the Colors:** The most common way to lose a level is accidentally bumping a Red creature into a Green candy. You must carefully control the blast radius and rolling paths to ensure the colors do not cross streams.
* **Conserve Ammo:** While you may have a large supply of cannonballs, using fewer shots usually results in a significantly higher 3-star score. Analyze the board and try to find a single shot that initiates a massive, multi-creature chain reaction.
* **Reset Quickly:** If a creature rolls off a platform into the abyss, or gets wedged into a corner it cannot escape from, don't waste your remaining ammo. Hit the restart button instantly and recalculate your initial angle.`
  },
  {
    title: "Jungle Link",
    seoContent: `![Jungle Link](https://www.htmlgames.com/uploaded/game/thumb800/jungle-link-800x450.webp)

Jungle Link (a highly polished variant of the classic Onet or Kyodai genre) injects a massive dose of highly structural, geometric pathfinding into the tile-matching formula, delivering a visual puzzle that demands intense calculation wrapped in an overwhelmingly vibrant, tropical jungle aesthetic. Stepping entirely away from the 3D, overlapping pyramids of standard Mahjong Solitaire, this game places every single tile flat on a massive, single-layer 2D grid featuring cute monkeys, exotic birds, roaring lions, and massive tribal masks. Your objective is not just to find matching pairs, but to prove that a clear, unobstructed path can physically be drawn between them using a very specific set of routing rules. The atmosphere is deeply engaging, requiring players to constantly weigh the immediate satisfaction of a simple edge match against the necessity of unblocking the dense center of the board. The visual style is exceptionally clean, ensuring perfect readability even when the canopy board is packed. It is a pure test of spatial planning, line-of-sight optimization, and the ability to visualize invisible lines across a chaotic grid.

## How to Play
* Your primary objective is to clear the entire flat grid by connecting identical pairs of jungle tiles before the strict timer runs out.
* Use your \`Mouse\` to click on an animal, then click on a matching animal to attempt a connection.
* **The Golden Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two tiles using a maximum of three straight lines (which means no more than two 90-degree corners).
* You can connect tiles that are sitting directly next to each other, or you can route the path entirely outside the main grid boundary (the empty space surrounding the puzzle).
* If you successfully clear all tiles, you win. If no more valid moves exist, the board will usually automatically reshuffle.

## Tips and Tricks
* **Clear the Perimeter First:** Tiles sitting on the absolute outer edge of the board are by far the easiest to connect, because their path can route freely through the empty space outside the grid using the two-turn rule. Clear the borders instantly.
* **Look for the "U" Shape:** The two-turn rule allows for a perfect "U" shape connection. If two identical tigers are on the exact same row, but separated by other animals, check if there is empty space directly above or below both of them to draw the U.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the grid from the outside toward the dense center.
* **Don't Tunnel Vision:** If you can't find a path for two specific monkeys, stop looking at them. Scan the entire board for an obvious, free match to keep the timer from running down.
* **Use the Hint Button Sparingly:** If you are truly stuck, use the hint button, but be aware that relying on it prevents you from training your brain to see the complex two-turn pathways.`
  },
  {
    title: "Remember the Bubbles",
    seoContent: `![Remember the Bubbles](https://www.htmlgames.com/uploaded/game/thumb800/rememberbubbles800450.webp)

Remember the Bubbles completely strips away the chaotic action and rapid reflexes of traditional arcade games, replacing them with a highly focused, brutally difficult exercise in short-term visual memory and pattern recall (often compared to the classic physical game "Simon"). Set against a clean, visually minimalist, aquatic-themed background, players are presented with a grid containing a specific sequence of brightly colored, glowing bubbles. Your objective is elegantly simple yet mentally taxing: you must study the arrangement of the colored bubbles for a fleeting few seconds before they vanish entirely, leaving only empty circles. You must then flawlessly recreate that exact color pattern by clicking the empty circles and assigning the correct colors from a palette at the bottom of the screen. The atmosphere is deeply calculating and incredibly tense; the game relies entirely on your brain's ability to hold a temporary image. The visual presentation is highly functional, utilizing stark, high-contrast neon colors that ensure the patterns are bold and distinct. Remember the Bubbles is a pure, uncompromising brain-training routine.

## How to Play
* The primary objective is to flawlessly recreate a hidden pattern of colored bubbles from memory.
* **Phase 1 (Memorization):** At the start of a level, a grid of colored bubbles is displayed on the screen. You have a very limited amount of time (usually a few seconds) to memorize exactly which colors are in which specific positions.
* **Phase 2 (Recall):** The bubbles will disappear, leaving empty circles. A palette of colors will appear at the bottom of the screen.
* Use your \`Mouse\` to click on a color from the bottom palette to select it.
* Click on an empty circle in the main grid to fill it with your selected color.
* You must completely fill the grid to perfectly match the original hidden pattern.
* If you make a single mistake in placement or color, you fail the level.

## Tips and Tricks
* **Vocalize the Pattern:** Do not just stare at the screen. Say the colors out loud as you scan them (e.g., "Red, Blue, Green, Red"). Activating the auditory part of your brain significantly reinforces short-term memory recall compared to visual input alone.
* **Group by Shape, Not Just Color:** If you see four red bubbles clustered in a square in the top right corner, don't memorize "red top right, red top middle..." Memorize "Red Square Top Right." Chunking information makes it vastly easier to store.
* **Look for Symmetry:** Our brains are exceptionally good at recognizing patterns. Look for symmetrical lines or repeating color sequences. If the left side mirrors the right side, you only have to memorize half the board.
* **Use Physical Gestures:** While the colors are displayed, use your finger to physically trace the path of all the blue bubbles on your monitor. This adds a kinetic memory anchor.
* **Don't Second Guess:** When the bubbles vanish, your first instinct is almost always correct. If you hesitate and start overthinking whether a bubble was green or yellow, you will overwrite your own short-term memory and fail.`
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
