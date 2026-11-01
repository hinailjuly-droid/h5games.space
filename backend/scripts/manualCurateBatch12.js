const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Steps Solitaire",
    seoContent: `![Steps Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/stepssolitaire800450.webp)

Steps Solitaire takes the beloved, foundational mechanics of classic Klondike and violently escalates the complexity by doubling the deck and fundamentally altering the starting architecture of the tableau. Instead of the standard, manageable seven columns, this monumental card game forces players to navigate a massive, stepped staircase formation constructed from 104 individual cards. The atmosphere is deeply calculating and demands an extreme level of long-term strategic foresight; what appears to be a simple maneuver in the early game can easily trigger a catastrophic deadlock an hour later. The visual presentation is highly polished, utilizing crisp, classic playing card graphics set against a traditional green felt backdrop, ensuring perfect readability even when the massive board becomes heavily congested with cascading sequences. Steps Solitaire is not for the faint of heart; it is an uncompromising, hardcore test of sequence building, suit management, and cascade math, perfect for veteran players who find standard solitaire variants too simplistic.

## How to Play
* The primary objective is to move all 104 cards into the eight foundation piles at the top right, building upward in suit from Ace to King.
* The massive main tableau consists of columns where cards must be built downward in alternating colors (e.g., a Red 8 can only be placed on a Black 9).
* Use your \`Mouse\` to click and drag cards between columns. You can move entire sequences of correctly stacked cards, provided you have enough empty columns to legally facilitate the move.
* The starting layout resembles a staircase, meaning the columns on the right are vastly deeper and hide significantly more face-down cards than the columns on the left.
* Use the stock pile at the top left to draw new open cards when you run out of valid moves on the main board.

## Tips and Tricks
* **Attack the Deep End:** Your absolute highest priority in the early game is to unearth the face-down cards buried at the very bottom of the longest columns on the right side of the staircase. Ignore the short columns on the left initially.
* **Empty Columns are Critical:** Because you are playing with two full decks, you will need to move massive sequences of 10 or 15 cards at once. The game's internal math only allows this if you have empty columns available. Do everything in your power to clear a column completely.
* **Don't Rush to the Foundations:** Just because you *can* move a Black 5 to the foundation doesn't mean you *should*. Sometimes keeping it on the tableau is necessary to hold a Red 4 that you desperately need for a massive sequence.
* **Build Evenly:** Try to build your eight foundation piles at roughly the same pace. If you push the Spades all the way up to Jack while the Hearts are still on 2, you will severely limit your options on the alternating-color tableau.
* **Use the Undo Button:** This game heavily punishes impulsive moves. If you drag a card and it immediately locks the board, use the undo button (if available) to try the alternate path.`
  },
  {
    title: "Space Pinball",
    seoContent: `![Space Pinball](https://www.htmlgames.com/uploaded/game/thumb800/space-pinball-800x450.webp)

Space Pinball violently propels the classic, tactile joy of the silver ball into the dark, neon-infused reaches of the cosmos. Moving away from standard, static arcade tables, this title embraces a deeply kinetic, sci-fi aesthetic, outfitting its massive board with glowing wormholes, hyper-speed ramps, and magnetic gravity wells. The atmosphere is intensely frantic and visually spectacular; you aren't just trying to keep the ball from draining, you are trying to trigger massive, explosive multi-ball events that completely saturate the screen with kinetic chaos. The visual presentation is highly polished, utilizing dynamic lighting that flashes in sync with the high-energy synthesizer soundtrack, making every successful bumper hit feel like a concussive blast. The physics engine is exceptionally well-tuned, perfectly replicating the weighty momentum and chaotic ricochets that define the greatest physical pinball machines. Space Pinball is a pure, unadulterated shot of arcade adrenaline that masterfully bridges the gap between retro mechanics and modern visual flair.

## How to Play
* The primary objective is to keep the silver ball in play for as long as possible while scoring maximum points by hitting targets, bumpers, and ramps.
* Press the \`Spacebar\` to pull back the plunger and launch the ball into the playfield. Hold it down longer for a more powerful launch.
* Use the \`Left Arrow\` key to flip the left flipper, and the \`Right Arrow\` key to flip the right flipper.
* Do not let the ball fall down the center drain between your flippers, or you will lose a life (or "ball").
* Hit specific sequences of glowing targets to activate massive score multipliers, unlock hidden mini-games, or trigger the chaotic multi-ball mode.

## Tips and Tricks
* **Learn to "Catch":** The biggest mistake beginners make is blindly flipping both flippers the second the ball comes near them. If the ball is moving slowly, just hold the flipper UP to "catch" and trap the ball. This completely stops its momentum and allows you to take a perfectly aimed shot.
* **Aim for the Ramps:** Hitting the flashing ramps is usually the key to unlocking the highest-scoring modes. Practice your timing to consistently hit the sweet spot on your flippers that sends the ball up the primary ramps.
* **Nudge the Table:** Real pinball players know that you can physically shove the machine to slightly alter the ball's trajectory (called nudging). If the game supports a nudge button, use it when the ball is heading straight down the side gutters, but don't overdo it or the machine will "Tilt" and lock up.
* **Focus During Multi-ball:** When you have three balls flying around the screen, it is physically impossible to track all of them perfectly. Focus your eyes purely on the lower half of the screen, just above the flippers, and react purely to instinct.
* **Shoot the Flashing Lights:** Pinball machines are literally designed to tell you what to do. If a specific ramp or target has a massive, flashing neon arrow pointing at it, shoot it!`
  },
  {
    title: "Higher or Lower",
    seoContent: `![Higher or Lower](https://www.htmlgames.com/uploaded/game/thumb800/higherorLower800450.webp)

Higher or Lower strips the guessing-game genre down to its absolute, most tension-fueled and mathematically pure core. Forget convoluted trivia questions or complex UI; this title relies entirely on basic probability and raw intuition. Set against a clean, visually minimalist digital interface, you are presented with a massive grid of numbers and a singular, hidden target number chosen by the computer. Your objective is elegantly simple yet brutally difficult: you must deduce the exact hidden number using the absolute minimum amount of guesses possible. The atmosphere is deeply focused; every single click narrows the mathematical window, slowly tightening the noose around the correct answer. The visual presentation is highly appealing in its absolute austerity, utilizing a stark, clean grid that ensures the mechanics remain perfectly readable. Higher or Lower is the ultimate, bite-sized test of binary deduction, offering a deeply satisfying loop that perfectly captures the "just one more try" mentality.

## How to Play
* The primary objective is to deduce the computer's randomly generated secret number.
* The game board displays a large grid of possible numbers (e.g., from 1 to 100).
* Use your \`Mouse\` to click on any number in the grid to lock in your guess, then click the \`Checkmark\` button to submit it.
* The computer will instantly respond with one of two clues: "Higher" (meaning the secret number is greater than your guess) or "Lower" (meaning the secret number is less than your guess).
* Use these clues to mathematically eliminate impossible numbers and narrow down the remaining options until you find the exact match.

## Tips and Tricks
* **The Binary Search Strategy:** This is the absolute, mathematically proven best strategy for this game. NEVER guess randomly. Always guess the exact middle number of the remaining possibilities.
* **How it Works:** If the range is 1 to 100, your first guess MUST be 50. If the computer says "Higher," you instantly eliminate 1-50. The new range is 51-100. Your next guess MUST be the middle of that (75).
* **Stick to the Math:** It is incredibly tempting to guess "99" if you feel lucky, but guessing the extremes is a massive waste of a turn unless you are completely trapped. Always split the difference to guarantee you eliminate exactly half the board on every single turn.
* **Track the Range:** The game interface usually grays out the numbers you have eliminated, but always keep the absolute lowest possible number and the absolute highest possible number firmly in your short-term memory.
* **Don't Rush:** While the game might track your time, the primary metric of success is the number of guesses used. Take a second to calculate the exact median number before clicking.`
  },
  {
    title: "Mindful Mahjong",
    seoContent: `![Mindful Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/mindfulmahjong800450.webp)

Mindful Mahjong purposefully strips away the chaotic, adrenaline-fueled timers and punishing competitive mechanics that plague modern puzzle games, replacing them with an atmosphere of absolute Zen and deep, unhurried focus. Moving away from flashy explosions, this title returns the ancient Chinese tile-matching game to its purest, most meditative roots. Set against a beautiful, softly lit backdrop accompanied by ambient, relaxing audio, players are tasked with meticulously analyzing towering, complex pyramid layouts. The objective is simply to clear the board at your own pace, enjoying the tactile satisfaction of matching beautifully illustrated, high-definition traditional tiles. The visual presentation is exceptionally polished, utilizing soft, natural color palettes that ensure the puzzle remains perfectly readable without straining the eyes, even when the board is massively congested. Mindful Mahjong is not just a game; it is a highly effective, interactive relaxation tool designed to quiet the mind while engaging your spatial reasoning skills.

## How to Play
* Your objective is to completely clear the entire screen by matching identical pairs of traditional Mahjong tiles at your own pace.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the structure.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles heavily overlap, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden tiles buried beneath them.
* If you clear every tile from the screen, you win. There is no stressful countdown timer to worry about.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of valid moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Memorize the Seasons:** The seasonal tiles (Spring, Summer, Autumn, Winter) and the flower tiles can be matched with *any* other tile in their specific set. Do not waste time looking for identical copies.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach bamboo tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a bamboo tile buried deep in the center tower.
* **Use the Reshuffle (If Available):** Many relaxing versions offer an unlimited "shuffle" button. While there is no penalty, try to use it sparingly to genuinely train your pattern recognition skills.`
  },
  {
    title: "Binairo",
    seoContent: `![Binairo](https://www.htmlgames.com/uploaded/game/thumb800/binairo-800x450.webp)

Binairo (frequently known in puzzle circles as Takuzu or Tic-Tac-Logic) delivers an absolute masterclass in pure binary logic design, taking a brilliantly simple premise and pushing it to its absolute mathematical limits. Set against a clean, visually minimalist grid, players are tasked with filling a board exclusively with the numbers 0 and 1 while strictly adhering to a brutal set of numerical constraints. The atmosphere is deeply intellectual; there is no narrative, no flashy explosions, and absolutely no luck involved. It is a pure test of your ability to process intersecting rules and execute complex logical deductions through the process of elimination. The visual presentation is highly appealing in its absolute austerity, utilizing crisp typography that ensures the puzzle mechanics remain perfectly readable on grids scaling from a manageable 6x6 all the way up to a brain-melting 12x12. Binairo is the ultimate, uncompromising brain-training routine for hardcore logic purists who demand rigorous, error-free gameplay.

## How to Play
* Your objective is to fill every empty square on the grid with either a "0" or a "1".
* **Rule 1:** You can NEVER have three identical numbers in a row (horizontally or vertically). Max two 0s or two 1s can sit next to each other.
* **Rule 2:** Every single row and every single column MUST contain an exact equal number of 0s and 1s.
* **Rule 3:** The combination of 0s and 1s in every row must be completely unique. The same applies to every column. No two rows can be identical.
* Use your \`Left Mouse Button\` to click an empty square to toggle between 0, 1, and blank.

## Tips and Tricks
* **The "Sandwich" Rule:** If you see a 1, an empty space, and another 1 in a row, the empty space MUST be a 0. If you put a 1 there, you violate Rule 1 (three in a row).
* **The "Bookend" Rule:** If you see two 0s sitting directly next to each other, you MUST cap both ends of them with 1s. If you place a 0 on either side, you violate Rule 1.
* **Count Your Digits:** If you are playing on a 10x10 grid, every row and column must have exactly five 0s and five 1s. If a row currently has five 1s and two 0s, you instantly know the remaining three empty squares MUST be 0s.
* **Check for Duplicates:** Once you have a nearly completed grid, check Rule 3. If a row is missing two numbers, and filling them in as "0, 1" makes that row completely identical to the row above it, you know it MUST be "1, 0".
* **Never Guess:** Binairo is 100% pure mathematical logic. If you guess a number and you are wrong, you will break the entire puzzle and not realize it until 10 minutes later.`
  },
  {
    title: "Street Hidden Objects",
    seoContent: `![Street Hidden Objects](https://www.htmlgames.com/uploaded/game/thumb800/streethiddenobjects800480.webp)

Street Hidden Objects is a masterclass in atmospheric, visually dense puzzle design, stripping the genre down to its absolute, most captivating and urban-focused core. Forget convoluted detective storylines; this title is a pure, unadulterated shot of visual immersion focused entirely on acute observation. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing gritty back alleys, bustling neon cityscapes, and quiet suburban roads, tasked with locating a specific list of cleverly concealed modern artifacts. The atmosphere is intoxicatingly rich, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, urban architecture, and complex geometry. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy corner, brick wall, and scattered newspaper is rendered with breathtaking clarity. The sensation of discovery is incredibly well-executed, making every successfully located item feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of the urban street scene.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden objects before the strict time limit expires to advance to the next city location.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the neon sign) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A red apple might be tinted grey to blend into the asphalt.
* **Check the Shadows:** The developers love hiding dark objects inside the shadows of dumpsters, underneath parked cars, or inside unlit windows. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a spray can, you will accidentally spot the hidden wrench.
* **Save Your Hints:** If the game provides a green hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Marble Shooter",
    seoContent: `![Marble Shooter](https://www.htmlgames.com/uploaded/game/thumb800/marbleshooter800450.webp)

Marble Shooter fundamentally reinvents the static, grid-based mechanics of traditional match-3 games by injecting them into a highly kinetic, constantly moving, serpentine track. Heavily inspired by arcade legends like Zuma and Luxor, this title places you in control of a central, rapidly pivoting cannon facing down a relentless, winding chain of colored marbles slowly creeping toward a deadly sinkhole. The atmosphere is incredibly frantic and demands a completely new type of spatial awareness, forcing you to constantly calculate rotational aiming, trajectory, and lead distance. The visual presentation is highly polished, utilizing crisp, brightly colored spheres that roll smoothly along complex, labyrinthine grooves cut into beautiful backgrounds. The satisfying "clack" of marbles colliding and the explosive visual effects of a massive chain reaction breaking the snake provide a constant dopamine rush. Marble Shooter is a pure, uncompromising test of reflex aiming and geometric calculation, offering a deeply hypnotic spin on the matching genre.

## How to Play
* The primary objective is to destroy the entire creeping chain of marbles before the leading marble falls into the skull sinkhole at the end of the track.
* You control a cannon (often located in the center of the screen) that holds a specific colored marble.
* Use your \`Mouse\` to physically aim the cannon, tracing the path of the moving chain.
* Click the \`Left Mouse Button\` to fire your current marble into the moving chain.
* If your fired marble connects with two or more marbles of the exact same color, they will explode and temporarily halt the chain's forward momentum.
* Press the \`Spacebar\` (if applicable) to instantly swap your current marble with the next one in the queue to set up better combos.

## Tips and Tricks
* **Lead Your Target:** The most common mistake is aiming directly at the marble you want to hit. Because the chain is constantly moving, your shot will miss and stick to the wrong color. You must aim slightly *ahead* of your target's path.
* **Look for the Magnet Pull:** If you destroy a cluster of red marbles in the middle of the chain, leaving blue marbles on both sides of the gap, the front half of the chain will magnetically snap backward to connect with the back half. Use this constantly to slow the chain down.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* marble color. Knowing what you have in reserve completely dictates where you should place your current shot.
* **Shoot the Back of the Line:** Don't focus entirely on the head of the snake. Often, it is much safer to make matches at the very back of the line to slowly eat away at the total volume while you wait for the right colors to appear.
* **Don't Hoard Power-ups:** If you hit a bomb marble or a reverse-speed marble, do not save it. The board state changes too quickly. Use it instantly to gain a massive tactical advantage.`
  },
  {
    title: "Nikakudori",
    seoContent: `![Nikakudori](https://www.htmlgames.com/uploaded/game/thumb800/nikakudori800450.webp)

Nikakudori (frequently known as Onet, Kyodai, or Shisen-Sho) injects a massive dose of highly structural, geometric pathfinding into the classic Mahjong tile-matching genre, delivering a visual puzzle that demands intense calculation. Stepping entirely away from the 3D, overlapping pyramids of standard Mahjong Solitaire, this game places every single tile flat on a massive, single-layer 2D grid. Your objective is not just to find matching pairs, but to prove that a clear, unobstructed path can physically be drawn between them using a very specific set of routing rules. The atmosphere is deeply engaging, requiring players to constantly weigh the immediate satisfaction of a simple edge match against the necessity of unblocking the dense center of the board. The visual style is exceptionally polished, utilizing crisp, high-definition traditional Mahjong iconography that ensures perfect readability. It is a pure, unadulterated test of spatial planning, line-of-sight optimization, and the ability to visualize invisible lines across a chaotic grid.

## How to Play
* Your primary objective is to clear the entire flat grid by connecting identical pairs of Mahjong tiles.
* Use your \`Mouse\` to click on a tile, then click on a matching tile to attempt a connection.
* **The Golden Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two tiles using a maximum of three straight lines (which means no more than two 90-degree corners).
* You can connect tiles that are sitting directly next to each other, or you can route the path entirely outside the main grid boundary (the empty space surrounding the puzzle).
* If you successfully clear all tiles, you win. If no more valid moves exist on the board, you lose.

## Tips and Tricks
* **Clear the Perimeter First:** Tiles sitting on the absolute outer edge of the board are by far the easiest to connect, because their path can route freely through the empty space outside the grid using the two-turn rule. Clear the borders instantly.
* **Look for the "U" Shape:** The two-turn rule allows for a perfect "U" shape connection. If two identical tiles are on the exact same row, but separated by other tiles, check if there is empty space directly above or below both of them to draw the U.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the grid from the outside toward the dense center.
* **Don't Tunnel Vision:** If you can't find a path for the two specific Bamboo tiles you are looking at, stop looking at them. Scan the entire board for an obvious, free match.
* **Use the Hint Button Sparingly:** If you are truly stuck, use the hint or shuffle button, but be aware that relying on it prevents you from training your brain to see the complex two-turn pathways.`
  },
  {
    title: "Rotate Puzzle - Summer Beach",
    seoContent: `![Rotate Puzzle - Summer Beach](https://www.htmlgames.com/uploaded/game/thumb800/rotatepuzzle-summerbeach800450.webp)

Rotate Puzzle - Summer Beach takes the traditional jigsaw puzzle format and shatters it, replacing the tedious sorting of scattered pieces with a highly structured, intensely satisfying rotational mechanic. Set against a beautiful, sun-drenched backdrop of tropical beaches, surfboards, and crashing ocean waves, the game presents you with an image that has been sliced into a rigid grid of square tiles. However, the tiles are already in their correct physical locations—they are just spun wildly out of alignment. Your objective is not to move the pieces, but to click and rotate them 90 degrees at a time until the seamless summer photograph is perfectly restored. The atmosphere is incredibly relaxing yet highly engaging, completely devoid of the frustrating "where does this piece go" feeling of normal jigsaws. The visual presentation is highly polished, utilizing crisp, high-definition summer photography that makes aligning the subtle textures of sand and water a genuine test of visual acuity. Rotate Puzzle is a brilliant, streamlined evolution of a classic pastime.

## How to Play
* Your objective is to restore the scrambled summer image to its original, perfect state.
* The image is divided into a grid of square tiles. The tiles cannot be moved from their current position on the grid.
* Use your \`Left Mouse Button\` to click on any tile to rotate it exactly 90 degrees clockwise.
* Continue clicking a tile until its visual lines, colors, and textures perfectly align with the tiles immediately adjacent to it.
* The level is successfully completed when every single tile has been rotated to its correct, original orientation, revealing the full beach scene.

## Tips and Tricks
* **Start with the Borders:** Just like a traditional jigsaw, the absolute easiest pieces to solve are the edges. A tile with a straight, flat border line can only face outward. Align all the border pieces first to frame the puzzle.
* **Look for Distinct Lines:** Hunt for tiles that feature sharp, contrasting elements, like a dark palm tree branch against the bright blue sky, or the straight edge of a surfboard. These lines must connect seamlessly to the adjacent tiles.
* **Check the Corners:** The four corner tiles are a massive freebie. They have two flat edges, meaning there is only one mathematically possible orientation for them to sit in the corner.
* **Use the Faces (If Any):** If the image features a person or an animal on the beach, start rotating the tiles containing their eyes or nose. Human brains are highly evolved to recognize facial symmetry, making these easy to align.
* **Don't Over-Rotate:** Click methodically. If you spam-click a tile, you might accidentally spin it right past its correct orientation, forcing you to click it three more times to fix it.`
  },
  {
    title: "Aquatic Slice",
    seoContent: `![Aquatic Slice](https://www.htmlgames.com/uploaded/game/thumb800/aquaticslice800450.webp)

Aquatic Slice delivers an incredibly unique, highly satisfying physics-based puzzle experience that completely abandons traditional grids and tiles in favor of free-form geometric manipulation. Set against a vibrant, cartoonish underwater backdrop, the game presents you with large, irregularly shaped blocks of ice or jelly containing several trapped fish. Your objective is elegantly simple yet wildly complex in execution: you must physically draw straight lines across the screen to slice the massive block into smaller pieces, isolating exactly one fish per piece. The atmosphere is heavily focused on spatial reasoning and trajectory calculation, requiring you to think like a sculptor carving away excess material. The visual presentation is exceptionally polished, utilizing a clean, colorful aesthetic and an incredibly robust physics engine that realistically simulates gravity, momentum, and the satisfying "thwack" of a perfect slice splitting a block in two. Aquatic Slice is a masterclass in innovative, tactile puzzle design that rewards precision over brute force.

## How to Play
* The primary objective is to slice the main geometric shape into smaller pieces so that every single piece contains exactly ONE fish.
* Use your \`Mouse\` to click and hold outside the boundary of the shape.
* Drag your cursor entirely *through* the shape and release the \`Left Mouse Button\` on the other side to draw a laser-straight slicing line.
* The shape will instantly split along the line you drew.
* You only have a strictly limited number of slices per level (often indicated at the top of the screen).
* The level is successfully completed when the slice limit is reached and no two fish share the same physical piece of the shape.

## Tips and Tricks
* **Plan the Intersection:** Do not just start hacking away at the block. The most powerful slices are ones that intersect multiple fish clusters at once. Look for the straightest line that separates the maximum number of fish.
* **Mind the Physics:** When you slice a block, the pieces don't just sit there; gravity takes over. If you slice a piece off the bottom, the entire top section will fall. You must calculate where the pieces will end up *after* the cut.
* **Cut the Corners:** Often, a fish is trapped tightly in a corner of the main shape. A tiny, diagonal slice across that corner is a great way to isolate that fish while using minimal space on the rest of the block.
* **Symmetry is Key:** Many levels are designed with a specific geometric solution in mind. Look for symmetry in the placement of the fish. A perfect slice straight down the middle often solves half the puzzle instantly.
* **Don't Trap the Empties:** If you slice off a massive chunk of the block that contains absolutely no fish, you haven't helped yourself, and you've wasted a precious slice. Every cut must actively separate fish from each other.`
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
