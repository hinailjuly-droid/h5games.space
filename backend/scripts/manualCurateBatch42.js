const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Shape Mahjong",
    seoContent: `![Shape Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/shapesmahjong800450.webp)

Shape Mahjong fundamentally rewrites the rules of the legendary Chinese tile-matching puzzle by completely abandoning identical pairs in favor of a highly complex, geometrically-driven grouping system. Set against a clean, visually uncluttered backdrop, players are presented with a massive, overlapping 3D pyramid constructed of standard Mahjong tiles. However, your objective is intensely focused and radically different: you must meticulously dismantle the structure by finding and selecting a group of tiles that mathematically belong to a specific geometric "shape" or category dictated by the level (e.g., finding four different Bamboo tiles, or selecting one of every Wind tile). The atmosphere is deeply relaxing but incredibly challenging, forcing your brain to rapidly switch between the 3D spatial awareness required to find "free" tiles, and the categorical logic required to build the specific shape combination. The visual presentation is highly polished, utilizing crisp, high-contrast traditional symbols. It is the ultimate brain-training routine for puzzle purists who have mastered standard pairing.

## How to Play
* Your primary objective is to clear all tiles from the board by selecting them in specific categorical groups, not identical pairs.
* The specific "shape" or category required for the current group will usually be displayed on the UI.
* Use your \`Left Mouse Button\` to click on a "free" tile to select it.
* Continue clicking free tiles until you have successfully built the required combination (e.g., a straight sequence of 1-2-3-4 of Characters).
* **The Golden Rule of Freedom:** Just like standard Mahjong, a tile is strictly considered "free" (and therefore clickable) ONLY if it has absolutely no other tile resting on top of it, AND it is completely unblocked on at least one of its immediate left or right vertical sides.
* The game is won when the board is completely clear.

## Tips and Tricks
* **Understand the Category:** This is the most critical skill. Do not just look for identical tiles. If the required shape is "Four Unique Winds," you must find a North, South, East, and West tile that are all simultaneously exposed on the board.
* **Dismantle the Towers First:** Always focus your absolute highest priority on breaking down the tallest, thickest stacks of tiles in the dead center of the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of valid categories.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board offers vastly more horizontal options, which is crucial when you need four specific, different tiles at the same time.
* **Don't Rush the Obvious Select:** If you need a Bamboo 5 to complete your shape, and you see one on the outer edge, check the center tower first. If the center tower has a Bamboo 5 blocking a massive stack, you MUST use the center one.
* **Use the Undo Button:** If you select a sequence and it immediately deadlocks the board by burying a tile you need for the *next* shape, use the undo button to reverse it.`
  },
  {
    title: "Aerobatics",
    seoContent: `![Aerobatics](https://www.htmlgames.com/uploaded/game/thumb800/aerobatics800450.webp)

Aerobatics strips the sprawling, complex flight-simulation genre down to its absolute, most tension-fueled and reflex-dependent core, delivering a pure, unadulterated test of spatial calculation, momentum physics, and split-second trajectory management. Moving entirely away from combat or navigation, this title is focused entirely on the terrifying art of stunt flying. Set against a clean, visually minimalist blue sky, players are placed in control of a highly responsive, lightweight stunt plane. Your objective is elegantly simple yet brutally difficult in execution: you must aggressively steer your aircraft through a tightly arranged, complex sequence of floating geometric rings, executing perfect barrel rolls, loops, and sharp dives. The atmosphere is deeply kinetic; gravity and momentum are constant, unrelenting forces, and you must constantly adapt your angles to the speed of the plane to avoid stalling or crashing into the terrain. The visual presentation is highly polished, utilizing realistic flight physics and crisp graphics. Aerobatics is a pure shot of high-altitude adrenaline.

## How to Play
* The primary objective is to pilot your stunt plane successfully through every single floating ring in the level to reach the finish line.
* Use the \`Up Arrow\` key to pitch the nose of the plane downward (dive).
* Use the \`Down Arrow\` key to pitch the nose of the plane upward (climb).
* Use the \`Left Arrow\` and \`Right Arrow\` keys to roll the plane or steer left/right, depending on the specific control scheme.
* You must pass directly through the center of the glowing rings in the correct sequential order.
* **The Constraints:** Crashing into the ground, flying outside the designated airspace, or missing a ring entirely will usually result in an instant failure.

## Tips and Tricks
* **Respect the Momentum (Don't Oversteer):** A plane in motion stays in motion. If you hold the climb button for too long, the plane will execute a full backflip. You must use tiny, controlled taps on the arrow keys to make micro-adjustments to your trajectory, rather than holding the keys down.
* **Calculate the Arc:** If the next ring is located directly below you and slightly forward, you cannot simply dive straight down. You must calculate a smooth parabolic arc that allows you to pass through the ring horizontally, otherwise, you will crash immediately after passing through it.
* **Maintain Speed:** Stunt planes rely on speed to generate lift. If you pull up too sharply and point the nose straight at the sky for too long, you will stall, lose all control, and drop like a rock.
* **Look Ahead:** Do not stare at the ring you are currently passing through. Your eyes should be locked on the *next* ring in the sequence. By the time you pass through ring #1, you should already be rolling the plane to align for ring #2.
* **Practice the Loop:** The inside loop (holding the climb button until the plane flips completely over) is the most critical maneuver. Practice it in open air until you understand exactly how much altitude you need to execute it without hitting the ground.`
  },
  {
    title: "Red and Green",
    seoContent: `![Red and Green](https://www.htmlgames.com/uploaded/game/thumb800/redandgreen800450.webp)

Red and Green delivers a brilliant, highly kinetic evolution of the physics-based trajectory puzzle genre (heavily inspired by artillery games), abandoning destructive combat in favor of a playful, intellectually demanding spatial challenge wrapped in a vibrant, candy-colored aesthetic. Set against a clean, 2D platforming environment filled with wooden crates, ice blocks, and steep ramps, players control a stationary cannon. Your objective is intensely focused: you must calculate the exact angle of incidence and the raw kinetic power required to shoot cannon balls, using the physical impact of those balls to push a small Red creature into a Red candy, and a Green creature into a Green candy. The atmosphere is deeply engaging and relies entirely on your ability to predict complex chain reactions. The visual presentation is highly polished, utilizing incredibly realistic momentum physics. Red and Green is a pure test of geometric calculation and indirect manipulation.

## How to Play
* The primary objective is to push the Red animal onto the Red candy, and the Green animal onto the Green candy.
* You control a cannon located somewhere on the screen.
* Use your \`Mouse\` to click and hold.
* Drag the mouse *away* from the target to draw the trajectory line. The length dictates the power; the direction dictates the angle.
* Release the \`Left Mouse Button\` to fire a heavy cannonball.
* **The Physics Engine:** The cannonballs do not destroy the animals; they act as physical weights. You must hit the animals (or the platforms they stand on) to physically knock them across the level.
* You usually have a limited number of cannonballs.

## Tips and Tricks
* **Master the Ricochet:** In almost every advanced level, a direct shot is impossible. You MUST learn to calculate the angle of incidence. Hit the cannonball aggressively into a ceiling or a steep ramp to bounce it around a sharp corner and hit the creature from behind.
* **Use Indirect Force:** Often, hitting the creature directly will knock it too far. The correct strategy is usually shooting a wooden crate, causing the crate to fall onto a seesaw, which gently lofts the creature into the air and onto the candy.
* **Respect the Friction:** Ice blocks are slippery; a tiny tap will send a creature sliding forever. Wood is rough; you need a massive impact to move a creature across a wooden floor. Account for the surface friction when calculating your power.
* **Clear the Path First:** Sometimes a Green creature is blocking the path of the Red creature. You must use your first cannonball specifically to knock the Green creature out of the way before you can even attempt the Red shot.
* **Patience:** There is no timer. Take your time to mentally trace the layers of the physics engine before firing. If I hit block A, it hits block B, which falls on C...`
  },
  {
    title: "Ruins - Hidden Stars",
    seoContent: `![Ruins - Hidden Stars](https://www.htmlgames.com/uploaded/game/thumb800/ruins-hidden-stars-800x450.webp)

Ruins - Hidden Stars is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core, all wrapped in a breathtaking archaeological aesthetic. Forget convoluted detective storylines or searching for random household items; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within stunning photography of ancient, crumbling architecture. You are placed directly into a series of high-definition digital images showcasing forgotten jungle temples, overgrown statues, Roman columns, and moss-covered stone walls. Your objective is elegantly simple: locate the subtle, minute "stars" expertly blended into the photograph. These are not glowing objects, but tiny visual anomalies—faint geometric outlines perfectly camouflaged into the cracks of the stone, the shadows of the vines, or the texture of the dirt. The atmosphere is deeply relaxing, accompanied by ambient nature sounds. Ruins - Hidden Stars is the ultimate brain-training routine for acute observation.

## How to Play
* Your objective is to find every single hidden star camouflaged within the main high-definition ruins photograph.
* Use your \`Mouse\` to carefully scan the high-definition image.
* When you spot the faint, five-pointed outline of a star, click directly on it.
* Successfully locating a star will highlight it and update your counter.
* The counter at the top of the screen displays exactly how many stars are left to find in the current level.
* Be precise! Randomly spam-clicking around the screen will often result in a time penalty or a temporary point deduction.

## Tips and Tricks
* **Scan Methodically:** Do not just stare at the whole screen randomly. Mentally divide the image into a tight grid. Meticulously scan the top-left quadrant of the image, analyzing every single crack in the ancient pillar or leaf on the vine, before moving to the top-right.
* **Look for Broken Patterns:** The star outlines often disrupt the natural, organic flow of the image. Look for areas on a rough stone wall where the texture suddenly seems to form an unnaturally perfect geometric point or straight line.
* **Check the Extremes (Shadows and Glare):** The developers love hiding stars inside the deep black shadows beneath the crumbling archways, or hiding them directly inside the blown-out, pure white glare of the sun hitting the stone. Adjust your monitor brightness!
* **Step Back:** If you are completely stuck on the final star, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the hidden geometry suddenly pop out against the chaotic background.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Space Bubbles",
    seoContent: `![Space Bubbles](https://www.htmlgames.com/uploaded/game/thumb800/spacebubbles800450.webp)

Space Bubbles delivers the absolute purest, most unadulterated distillation of the legendary arcade formula, completely stripping away the bloated narratives and complex meta-progression that plague modern iterations, and wrapping the core mechanics in a vibrant, neon-soaked interstellar aesthetic. This is the genre exactly as it was meant to be played: a massive ceiling of brightly colored, glowing cosmic spheres (planets, asteroids, energy orbs), a single aiming cannon, and an unrelenting pursuit of massive, structure-collapsing chain reactions. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core geometric shooting mechanic accompanied by deep, rhythmic synthwave music. You are tasked with calculating angles, bouncing shots off the sidewalls, and grouping colors to trigger massive cosmic collapses before the weight of the galaxy crushes your launcher. The visual presentation is highly polished, utilizing crisp, high-definition sprites that crackle with kinetic energy. Space Bubbles is a pure, uncompromising test of geometric calculation and reflex aiming.

## How to Play
* The primary objective is to clear the entire screen of cosmic bubbles before the ceiling physically lowers and crushes your space cannon.
* You control a cannon at the bottom of the screen holding a specifically colored energy bubble.
* Use your \`Mouse\` to aim the trajectory line.
* Click the \`Left Mouse Button\` to fire your bubble into the void.
* When your fired bubble connects with a cluster of two or more bubbles of the EXACT SAME color, the entire connected group will detonate and disappear.
* If you shoot and fail to make a match a certain number of times, the entire ceiling will shift downward by one row, reducing your playable space.

## Tips and Tricks
* **Master the Bank Shot (The Golden Rule):** You cannot always shoot straight. You MUST learn to bounce your bubbles off the left and right walls of the play area to ricochet them into tight, otherwise unreachable gaps near the top of the structure.
* **Sever the Root:** Do not just shoot at the lowest hanging bubbles. Look for the "structural joints"—small clusters of bubbles holding up massive, mixed-color chunks below them. If you destroy the joint, the entire massive chunk below it falls into the abyss instantly, granting huge points.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* bubble color. Knowing what you have in reserve completely dictates where you should place your current shot. Set up chain reactions!
* **Don't Build Walls:** If you have a red bubble and no red clusters are visible, do not just shoot it directly into the middle of the board, blocking other colors. Shoot it off to the extreme left or right edge to keep the center channels open.
* **Clear High Colors Completely:** If there are only two yellow planet bubbles left on the entire board, prioritize eliminating them immediately. Once a color is entirely gone, the game will stop generating it in your cannon, drastically increasing your odds of getting the colors you actually need.`
  },
  {
    title: "Tiles of Japan",
    seoContent: `![Tiles of Japan](https://www.htmlgames.com/uploaded/game/thumb800/tilesofjapan800450.webp)

Tiles of Japan completely revolutionizes the massively popular "Mahjong Solitaire" formula by abandoning the traditional pairing mechanic and replacing it with a highly addictive, inventory-based "Match-3" collection system wrapped in a breathtaking, deeply traditional Japanese aesthetic. Instead of simply clicking two exposed tiles to clear them, you are presented with a massive, overlapping 3D pyramid constructed of crisp tiles featuring cherry blossoms, katana swords, koi fish, and kanji. Your objective is intensely focused: you must click tiles to move them down into a wooden holding tray located at the bottom of the screen. When exactly three IDENTICAL thematic tiles are placed in the tray, they instantly merge and disappear. The atmosphere is deeply calculating and immensely satisfying, perfectly simulating the tactical tension of inventory management while accompanied by soothing Shamisen music. The visual presentation is exceptionally polished, ensuring the complex, overlapping layers remain perfectly readable. Tiles of Japan is a brilliant test of sequence planning and bottleneck management.

## How to Play
* The primary objective is to completely dismantle the overlapping structure by moving all tiles into your holding tray in groups of three.
* Use your \`Left Mouse Button\` to click any fully exposed tile on the main board to instantly drop it into your holding tray at the bottom.
* A tile is strictly considered "exposed" if absolutely no other tile is resting directly on top of it.
* Your holding tray can only hold a maximum of SEVEN tiles at any given time.
* **The Rules of Removal:** When exactly three IDENTICAL tiles are sitting anywhere in your holding tray, they will automatically merge and be removed, freeing up crucial space.
* The game is immediately over if your tray reaches its 7-tile limit without triggering a match.

## Tips and Tricks
* **Manage Your Tray Space (The Golden Rule):** Treat your holding tray like pure gold. Never have more than four "unmatched" singleton tiles sitting in your tray at once. Always leave two or three empty slots so you have the flexibility to dig through the pile for the matches you actually need.
* **Dig for the Third Piece:** If you have two Koi Fish tiles in your tray, your absolute highest priority is finding the third Koi Fish tile to clear them. It is acceptable to temporarily fill your tray with blocking items, *provided* that reaching the buried Koi instantly triggers a clear and frees the space again.
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles in the center of the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of options.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal options and reveals more hidden tiles simultaneously.
* **Don't Panic Click:** The timer is secondary to survival. Clicking randomly to reveal tiles will instantly fill your tray and end the game.`
  },
  {
    title: "Neon Ball",
    seoContent: `![Neon Ball](https://www.htmlgames.com/uploaded/game/thumb800/neonball800450.webp)

Neon Ball strips the physics-brawler genre down to its absolute, most tension-fueled and reflex-dependent core, delivering a pure, unadulterated test of spatial calculation, momentum physics, and aggressive trajectory management. Moving entirely away from complex fighting game combos, this title focuses on a highly stylized, glowing cyberpunk arena. Set against a clean, frictionless neon grid (the "table"), players control a team of brightly glowing spheres. Your objective is brutally elegant: you must calculate the exact angle of incidence and the raw kinetic power of your strikes to physically smash into the opposing team's balls, knocking them completely off the edge of the table into the abyss, while ensuring your own balls remain on the board. The atmosphere is deeply kinetic; it is essentially high-stakes, violent billiards. The visual presentation is highly polished, utilizing incredibly realistic collision physics, screen shake on impact, and vibrant neon light trails. Neon Ball is a flawless tactical physics experience.

## How to Play
* The primary objective is to knock every single enemy ball off the table before they knock yours off.
* The game is turn-based. On your turn, use your \`Mouse\` to click and hold directly on one of your glowing balls.
* Drag the mouse *backward*, away from the target, to draw the aiming line and build tension (power).
* Release the \`Left Mouse Button\` to launch your ball across the frictionless table.
* **The Collision Mechanic:** When your ball hits an enemy ball, kinetic energy transfers. You must hit them hard enough to push them over the edge, but angle it perfectly so your own ball doesn't follow them into the void (a "scratch").

## Tips and Tricks
* **Master the Ricochet (Billiards Logic):** You do not have to hit the enemy ball dead-center. In fact, hitting it off-center is usually better. If you clip the extreme left edge of the enemy ball, it will shoot sharply to the right, while your ball deflects to the left, saving you from falling off the edge.
* **The Sacrifice Play:** If you have four balls left and the opponent only has one, it is often a mathematically sound strategy to launch one of your balls at maximum power directly into theirs, intentionally knocking both of them off the table to secure the win.
* **Use the Walls:** The edges of the arena (if they exist) are bouncy. You can bank your shots off the walls to hit enemies hiding behind your own pieces.
* **Light Taps for Positioning:** Not every shot needs to be a 100% power smash. If an enemy ball is dangerously close to the edge, a tiny, 10% power tap is enough to push them over without risking your own piece.
* **Divide and Conquer:** If the enemy has a massive, tight cluster of balls, use a massive power shot to smash into the center of them (the "break"), scattering them to the edges of the board where they are easier to pick off one by one.`
  },
  {
    title: "Chocolate Match",
    seoContent: `![Chocolate Match](https://www.htmlgames.com/uploaded/game/thumb800/chocolatematch800450.webp)

Chocolate Match delivers an incredibly decadent, visually rich evolution of the classic tile-swapping puzzle (Match-3), fusing the addictive cascade mechanics with a focused, objective-based structure wrapped in a mouth-watering confectionery aesthetic. Set against a backdrop resembling a high-end chocolatier's display case, players are tasked with managing a massive grid filled with beautifully illustrated truffles, pralines, white chocolate squares, and dark chocolate swirls. Your objective is not just to rack up a high score, but to physically shatter the specific "background" tiles located behind the chocolates. You do this by swapping adjacent candies to form lines of three or more directly on top of the shaded background tiles, breaking them to clear the level. The atmosphere is deeply engaging and inherently relaxing, accompanied by soothing cafe music. The visual presentation is exceptionally polished, utilizing crisp, high-definition sprites that look genuinely delicious. Chocolate Match is a pure test of spatial planning and cascade optimization.

## How to Play
* The primary objective is to clear all the shaded/colored background tiles from the grid before the timer expires.
* The dark background tiles are located directly behind the chocolate pieces.
* Use your \`Mouse\` to click on a chocolate, then click an adjacent one to swap their positions, forming a horizontal or vertical line of three or more identical candies.
* When the chocolates shatter, they will instantly destroy the dark background tile sitting directly beneath them.
* You must systematically match chocolates over every single background tile to complete the level.

## Tips and Tricks
* **Focus on the Objective, Not the Score:** Your only real objective is the background tiles. Completely ignore massive, satisfying 5-candy combos on the left side of the board if the remaining background tiles are all on the right side. Every move must serve the objective.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points of the grid. This triggers cascading chocolates dropping from the ceiling, often resulting in free, accidental combos that clear background tiles automatically without you having to waste a move.
* **Clear the Corners Early:** The absolute hardest background tiles to clear are the ones isolated in the extreme four corners of the board, or stuck in narrow, 1-tile wide alleys. Always attack the corners first while you have maximum flexibility.
* **Utilize Power-Ups Strategically:** Matching four or five chocolates creates powerful bombs or line-clearing wrappers. Do not detonate them immediately. Try to maneuver them directly next to an impossible-to-reach corner tile before blasting it.
* **Plan the Cascade:** Before making a match, look at the candies resting directly above it. If you clear this row of three, will the falling candies instantly create a secondary match? Always try to trigger chain reactions.`
  },
  {
    title: "Maze Roll",
    seoContent: `![Maze Roll](https://www.htmlgames.com/uploaded/game/thumb800/mazeroll800450.webp)

Maze Roll strips the spatial puzzle genre down to its absolute, most mathematically pure and elegantly simple core, delivering a digital adaptation of a deeply complex topological problem wrapped in a clean, minimalist 3D aesthetic. Set against a visually uncluttered geometric grid suspended in a void, players are placed in control of a single, brightly colored sphere. Your objective is intensely focused and brutally unforgiving: you must navigate the ball through the twisting maze of corridors, but you must physically roll the ball over every single playable square on the board exactly once to "paint" it or activate it. The atmosphere is deeply cerebral and intentionally demanding, requiring an intense level of forward-thinking, spatial visualization, and process of elimination. You cannot jump, and you cannot leave any cell empty. The visual presentation is highly functional, utilizing crisp, neon-style graphics that track your path, ensuring the complex routing remains perfectly readable. Maze Roll is the ultimate brain-training routine for hardcore logic puzzle fans.

## How to Play
* The primary objective is to roll the ball over every single empty square in the maze, coloring them all, without getting permanently trapped.
* Use the \`Arrow Keys\` (Up, Down, Left, Right) or \`WASD\` to roll the ball through the corridors.
* As the ball passes over a square, that square changes color, indicating it has been visited.
* **The Golden Rule:** The ball must physically pass through every single playable tile on the board to complete the level.
* If you trap yourself in a corner or a dead-end with unvisited tiles remaining on the other side of the map, you must restart or retrace your steps (if the game allows backtracking).

## Tips and Tricks
* **Work the Perimeter First:** The absolute most common mistake is driving the ball straight through the dead center of the puzzle early on. This almost always cuts the board in half, trapping empty cells on the other side. Always try to hug the outer walls and clear the perimeter for as long as possible.
* **Beware the "Choke Points":** Look at the overall shape of the board. Are there two massive areas connected by a single, narrow 1-cell wide hallway? You MUST plan your entire route so that you completely finish one area before passing through that choke point, because you might not be able to get back.
* **The "Dead End" Deduction:** Look for cells that only have ONE possible entrance/exit (like a single square sticking out of the main block). If a cell only has one connection point, it MUST be the absolute end of your route, or the absolute beginning. Plan accordingly.
* **Snake Mentality:** Think of the path like the classic game of Snake. You must coil your route tightly against itself, filling every nook and cranny systematically, rather than drawing wild, sweeping loops.
* **Work Backwards Mentally:** If a puzzle is incredibly complex, mentally trace a path backward from any obvious dead-end cells to see how they must connect to the main labyrinth.`
  },
  {
    title: "Double Tower of Hanoi Solitaire",
    seoContent: `![Double Tower of Hanoi Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/doubletowerofhanoisolitaire800450.webp)

Double Tower of Hanoi Solitaire executes a brilliant, mind-bending fusion of two of the most deeply logical puzzle formats in history, taking the brutal mathematical displacement rules of the ancient "Tower of Hanoi" disc puzzle and applying them directly to the complex, alternating mechanics of card sorting. Set against a clean, visually uncluttered green felt aesthetic, players are presented with a massive tableau of cards. Your objective is intensely focused and incredibly restrictive: you must consolidate all the scattered cards into two perfect, towering columns, built in strict descending order from 9 down to Ace, perfectly matched by suit. The atmosphere is deeply calculating and intensely strategic, requiring players to possess a masterful understanding of cascade math and extreme bottleneck management. The defining feature is the ruthless movement rule: you can ONLY move a card onto a higher-ranked card or into a completely empty column. Double Tower of Hanoi Solitaire is an uncompromising test of pure logic.

## How to Play
* The primary objective is to build two complete, descending towers (from 9 down to Ace, matching suit) in the main tableau.
* The game utilizes a stripped-down deck (usually only cards A through 9).
* Use your \`Mouse\` to click and drag the exposed card at the bottom of any column.
* **The Hanoi Rule (Crucial):** You can ONLY place a card onto another card that is strictly HIGHER in rank. (e.g., You can place a 4 on a 5, or an 8, or a 9. You CANNOT place a 6 on a 5). Suit and color do not matter for the temporary moves.
* You can move a card into a completely empty column to start a new stack.
* You can only move one single card at a time. You cannot drag massive, pre-built sequences.

## Tips and Tricks
* **Empty Columns are the Only Lifeline:** Because you can only move one card at a time, and you can never place a high card on a low card, empty columns are your absolute most valuable resource. They act as the "spare pegs" from the original Tower of Hanoi puzzle. Prioritize clearing a column immediately.
* **Never Bury a High Card:** The absolute worst mistake is placing a 2 on top of an 8 if you don't have a plan. Because you can never put a higher card on the 2, that entire column is deadlocked until you can find a place to move the 2.
* **Build the 9s Early:** Locate your 9s immediately. Since nothing can be placed on top of a 9 in the final sequence, 9s should ideally be the foundational base of your empty columns.
* **The "Shuffling" Technique:** If you have a 5, 4, and 3 stacked together, and you need to move them to a 7... you must move the 3 to an empty space, move the 4 to an 8, move the 5 to the 7, move the 4 to the 5, and the 3 to the 4. This requires intense mental calculation.
* **Work Backwards:** If you need to access a buried Ace, look at the card on top of it (a 4). Where can the 4 go? It must go on a 5 or higher. Is there a 5 available? Mentally trace the chain of required moves before touching anything.`
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
