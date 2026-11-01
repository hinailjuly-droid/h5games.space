const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Kraken",
    seoContent: `![Kraken](https://www.htmlgames.com/uploaded/game/thumb800/kraken-800x450.webp)

Kraken delivers a brilliant, highly competitive digital adaptation of the deeply strategic Dutch trick-taking card game (a brutal, high-stakes variant of Klaverjassen), stripping away casual play in favor of a mathematically intense, partnership-based duel. Set against a clean, visually minimalist green felt table, players are locked in a relentless two-on-two battle against highly capable AI opponents. Your objective is intensely focused: you and your partner must win tricks containing valuable point cards to reach a target score before the opposing team. However, Kraken introduces a terrifying, high-risk mechanic: the "Kraak" (Double). If the opposing team declares the trump suit, and you believe they cannot secure more than half the points, you can instantly double the stakes of the entire game. They can then redouble ("Herkraken"), escalating the tension exponentially. The visual presentation is highly polished, utilizing crisp traditional playing cards. Kraken is an uncompromising test of card counting, trump management, and aggressive betting.

## How to Play
* The primary objective is to score points by winning tricks that contain high-value cards (Aces, 10s, Kings, Queens, Jacks).
* The game is played with a 32-card deck (7s through Aces only).
* **The Trump Suit:** One suit is chosen as "trump." Trump cards beat ALL other suits, regardless of value.
* **The Unique Ranking:** In the Trump suit, the Jack is the highest card (20 points), followed by the 9 (14 points), then Ace, 10, K, Q, 8, 7. In non-trump suits, the Ace is highest (11 points).
* You MUST follow suit if led. If you cannot follow suit, you MUST play a trump card (if you have one) to win the trick.
* **The Kraak (Double):** If the opposing team chooses trump, you can click "Kraak" to double the points for the round if you think they will fail to get more than half the available points.

## Tips and Tricks
* **Count the Trump:** This is the most critical skill. You must memorize exactly how many trump cards have been played. If you know you hold the highest remaining trump card, you control the entire board and can safely lead your aces.
* **The "Roem" (Meld) Bonus:** You earn massive bonus points for playing a sequence of three cards of the same suit in a single trick, or a King and Queen of the trump suit ("Stuk"). Always try to organize your hand to bait out these sequences.
* **Don't Kraak Blindly:** Doubling the game is incredibly dangerous. Only Kraak if you hold the Jack of Trump (the highest card) AND at least two other strong trump cards, or if you hold a massive sequence of guaranteed Aces in other suits.
* **Feed Your Partner:** If your partner is clearly going to win the trick (e.g., they played the highest trump), do not play a useless 7 or 8. Throw your highest point card (like a 10 or Ace of a non-trump suit) into the trick so your team collects those points.
* **Lead Trump to Disarm:** If your team chose the trump suit and you hold strong cards, immediately lead a trump card on the first turn. This forces the opponents to burn their trump cards early, leaving them defenseless later.`
  },
  {
    title: "Hidden Spots - Christmas",
    seoContent: `![Hidden Spots - Christmas](https://www.htmlgames.com/uploaded/game/thumb800/hiddenspotschristmas800450.webp)

Hidden Spots - Christmas is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core, all wrapped in a warm, festive holiday aesthetic. Forget convoluted storylines or searching for random household items; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within breathtaking holiday illustrations. You are placed directly into a series of stunningly detailed, high-definition images showcasing cozy winter cabins, bustling toy workshops, snow-covered pine forests, and massive, glittering Christmas trees. Your objective is elegantly simple: locate the subtle, minute "spots" or discrepancies expertly blended into the photograph. These are not standard objects, but tiny visual anomalies—a slightly blurred bauble, a disguised snowflake, or a distorted shadow on a wrapped gift. The atmosphere is deeply relaxing, accompanied by soothing holiday chimes. Hidden Spots - Christmas is the ultimate brain-training routine for acute observation.

## How to Play
* Your objective is to find every single hidden "spot" or anomaly hidden within the main high-definition Christmas image.
* Use your \`Mouse\` to carefully scan the high-definition scene.
* When you spot a visual discrepancy or hidden area, click directly on it.
* Successfully locating a spot will circle it and update your counter.
* The counter at the top of the screen displays exactly how many spots are left to find in the current level.
* Be precise! Randomly spam-clicking around the screen will often result in a time penalty or a temporary point deduction.

## Tips and Tricks
* **Scan Methodically:** Do not just stare at the whole screen randomly. Mentally divide the image into a tight grid. Meticulously scan the top-left quadrant of the image, analyzing every single pine needle or ribbon, before moving to the top-right.
* **Look for Broken Patterns:** The holiday theme is full of repeating patterns (wrapping paper stripes, strings of identical lights, symmetrical snowflakes). The hidden spots are often created by artificially breaking or blurring these patterns. Look for areas that seem slightly out of focus or geometrically incorrect.
* **Check the Shadows and Highlights:** The developers love hiding spots inside the deep black shadows beneath the tree skirt, or hiding them directly inside the blown-out glare of a glowing candle. Adjust your monitor brightness!
* **Step Back:** If you are completely stuck on the final spot, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the hidden anomaly suddenly pop out.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Glacier Solitaire",
    seoContent: `![Glacier Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/glaciersolitaire800450.webp)

Glacier Solitaire completely re-invents the complex, alternating-color mechanics of standard card sorting by stripping it down to a brutally elegant, mathematically pure game of addition, all wrapped in a visually stunning, icy, arctic aesthetic. Moving away from the green felt of a casino, this title constructs a massive, overlapping triangular pyramid structure using beautifully illustrated playing cards (or sometimes thematic icy coins). Your objective is intensely focused: completely dismantle the massive glacier by pairing exposed cards that mathematically add up to exactly eleven. The atmosphere is deeply calculating but incredibly thematic, trading intense arcade pressure for a soothing, ambient puzzle environment complete with soft wind sound effects and cool blue colors. The visual presentation is exceptionally polished, utilizing crisp, highly legible typography that ensures perfect readability even when the massive icy structure is heavily congested. It is a masterclass in taking a simple arithmetic concept (like Pyramid Solitaire) and tweaking the math just enough to completely change the strategy.

## How to Play
* Your primary objective is to clear all the cards/coins from the massive glacier pyramid structure.
* Use your \`Left Mouse Button\` to click on any combination of fully exposed (unblocked) cards whose numerical values add up to exactly 11.
* **Card Values:** Number cards are worth their face value. Unlike standard Pyramid (which totals 13), this game requires 11. (e.g., a 7 and a 4 = 11, or an 8, 2, and Ace = 11).
* A card is strictly considered "exposed" only if there is absolutely no other card resting on top of it.
* If you have no valid pairs of 11 on the pyramid, click the face-down draw pile at the bottom to reveal new cards to use.

## Tips and Tricks
* **Prioritize the Pyramid Over the Draw Pile:** If you have a 5 exposed on the pyramid, and a 5 in your draw pile, and you need to pair a 6 on the board... ALWAYS use the 5 on the pyramid. You must prioritize dismantling the structure over emptying the draw pile.
* **Dig Evenly:** Do not drill a deep hole down one specific side of the glacier. Try to peel cards away evenly across the entire structure. An even, flat pyramid offers vastly more exposed cards and potential pairings.
* **Look for Multi-Card Combos:** Do not just look for pairs (e.g., 6 and 5). Sometimes a massive section of the board is blocked by a 9, and the only way to clear it is to combine a 9, an Ace, and another Ace. Always scan for 3-card combinations.
* **Track Your Cards:** If you desperately need a 3 to clear an 8, take a quick glance at the discard pile. If all four 3s have already been played, you know for a mathematical fact that the pyramid is dead and you must restart.
* **The "Undo" Button (If Available):** Use it strategically! If you pair a 10 from the draw pile with an Ace on the board, but realize another Ace was blocking a massive stack of hidden cards, undo the move and pair the 10 with the *blocking* Ace.`
  },
  {
    title: "Reach 2048",
    seoContent: `![Reach 2048](https://www.htmlgames.com/uploaded/game/thumb800/reach2048-800450.webp)

Reach 2048 fundamentally rewrites the rules of the viral numerical sliding puzzle by completely abandoning the chaotic, full-board swiping mechanic in favor of a brutally calculating, precision-based geometric grouping system. Set against a clean, visually minimalist grid, players are presented with a board filled with brightly colored, numbered tiles. However, in this brilliant variant, tiles do not merge in pairs. Your objective is intensely focused: you must physically drag tiles across the grid to group exactly FOUR (or more) identical numbers directly adjacent to each other. When grouped, they merge into a single, upgraded tile of the next highest power of two (e.g., four 2s merge into one 4). Your ultimate goal is to navigate this incredibly slow, space-restrictive mathematical climb to reach the elusive 2048 tile. The atmosphere is deeply cerebral; you are essentially managing a massive game of localized arithmetic while simultaneously preventing the board from clogging up.

## How to Play
* The primary objective is to strategically group numbers to eventually create a tile with the value of "2048".
* Use your \`Mouse\` to click and drag a numbered tile across the empty space on the grid. (Tiles cannot jump over other tiles; there must be a clear path).
* You must position the tiles so that FOUR OR MORE tiles of the EXACT SAME number are touching horizontally or vertically.
* **The Merge Rule:** When 4 or more identical numbers touch, they disappear, and a single new tile is created with the next highest value in the sequence (2 -> 4 -> 8 -> 16 -> 32, etc.).
* The new upgraded tile will spawn in the location of the *last* tile moved into the group.
* After every move, new random, low-value tiles will spawn on the board, constantly threatening to trap your high numbers.

## Tips and Tricks
* **Control the Corners:** Your absolute most critical strategy is designating one specific corner of the grid as the permanent home for your single highest-value tile. Never, ever move your highest tile out of that corner. Build everything else toward it.
* **Build the "Snake":** To effectively feed your highest tile, you must arrange the board in a descending numerical pattern leading away from the corner. (e.g., The corner is 64, the tiles next to it are 32s, the next are 16s). This allows for massive, rapid chain reactions when you finally complete a group of four.
* **Don't Strand the High Numbers:** If you accidentally create a 128 in the top-left corner, and your main 128 is in the bottom-right corner, you are in serious trouble. Those two numbers will likely never meet because the board will fill up before you can drag them across.
* **Clear the Clutter (Burn Moves):** Sometimes the board is filled with useless 2s blocking your path. It is often mathematically required to waste a few moves intentionally grouping four 2s just to delete them from the board and free up physical space, even if the resulting 4 doesn't immediately help you.
* **Calculate the Path:** Before you click, ensure the tile can actually reach its destination. If you build a wall of numbers across the middle of the board, you have effectively cut your playing area in half.`
  },
  {
    title: "Jewel Rush",
    seoContent: `![Jewel Rush](https://www.htmlgames.com/uploaded/game/thumb800/jewelrush800450.webp)

Jewel Rush delivers the absolute purest, most unadulterated distillation of the legendary tile-swapping puzzle formula, completely stripping away the bloated narratives, unnecessary mini-games, and complex meta-progression that plague modern iterations of the genre. This is the genre exactly as it was meant to be played: a massive grid filled with brightly colored, hyper-realistic gemstones—diamonds, rubies, sapphires, and emeralds. Your objective is intensely focused: manually swap adjacent gems to form horizontal or vertical lines of three or more, triggering satisfying cascade reactions to reach a massive high score before the strict timer expires. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of pattern recognition and explosive combos. The visual presentation is highly polished, utilizing crisp, high-definition sprites that crackle with magical energy, screen-shaking explosions, and flashy particle effects when massive combos are triggered. Jewel Rush is a pure, uncompromising test of spatial logic and high-speed cascade optimization.

## How to Play
* The core mechanic revolves around swapping adjacent jewels to create horizontal or vertical lines of three or more identical gems.
* Use your \`Mouse\` to click on a jewel, then click an adjacent one to swap their positions, or simply click and drag.
* Swaps are only permitted if they immediately result in a valid match of three or more.
* Your objective is to score as many points as possible before the timer bar at the top of the screen empties completely. (Matching gems usually adds a tiny bit of time back to the clock).
* Matching exactly four jewels creates a glowing, line-clearing explosive gem.
* Matching five jewels in an L or T shape creates a devastating area-of-effect bomb.
* Matching five jewels in a straight row creates a hyper-cube that obliterates all jewels of a specific color from the board.

## Tips and Tricks
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading jewels dropping from the ceiling, often resulting in massive, free combo points that require zero effort on your part.
* **Combine the Power-Ups:** The most devastating move in the game is swapping two power-ups with each other. Swapping a line-clear gem with a bomb creates a massive, cross-shaped explosion that clears half the board instantly, scoring massive points and triggering huge cascades.
* **Scan During Animations:** Do not just watch the explosions! While a massive cascade is happening on the left side of the board, use that split second to scan the right side of the board and locate your next move. In a timed game, every millisecond counts.
* **Set Up the Hyper-Cube:** When you see the potential for a 5-in-a-row match, do everything in your power to execute it. The color-clearing hyper-cube is the single most powerful tool for manipulating the board state and saving a dying timer.
* **Don't Force Bad Matches:** If you have a choice between a 3-gem match at the top of the board, or spending two seconds looking for a match at the bottom, take the top match immediately. In "Rush" modes, constant movement is better than perfect movement.`
  },
  {
    title: "Jigsaw Jam World",
    seoContent: `![Jigsaw Jam World](https://www.htmlgames.com/uploaded/game/thumb800/jigsawjamworld800450.webp)

Jigsaw Jam World delivers the absolute purest, most fundamentally relaxing distillation of the classic tabletop puzzle experience, transporting players on a breathtaking visual tour across the globe without ever leaving their browser. Set against a clean, visually minimalist workspace, players are presented with stunning, high-definition photography of the world's most iconic landmarks—the Eiffel Tower, the Great Wall of China, the Colosseum, and Machu Picchu. Your objective is elegantly simple yet deeply engaging: you must sift through a chaotic jumble of uniquely shaped, interlocking puzzle pieces and physically drag them into their correct positions to reconstruct the unbroken image. The atmosphere is deeply cerebral and intentionally soothing, abandoning the strict timers and stressful fail-states of arcade games in favor of a pure, meditative flow state. The visual presentation is highly polished, ensuring the image textures on each piece remain perfectly crisp, which is absolutely crucial for identifying subtle gradients in the sky or the specific grain of ancient stone.

## How to Play
* The primary objective is to reconstruct the scrambled photograph by connecting all the interlocking jigsaw pieces.
* Use your \`Mouse\` to click and hold the \`Left Mouse Button\` on any loose puzzle piece scattered around the workspace.
* Drag the piece onto the central puzzle board.
* If two pieces belong together, dropping them near each other will cause them to magnetically "snap" and lock together into a single, larger chunk.
* Continue connecting pieces until the entire high-definition image of the world landmark is complete.

## Tips and Tricks
* **The "Edge First" Strategy (The Golden Rule):** Absolutely never start by trying to assemble the center of the image. Your absolute first priority is to sift through the pile, isolate every single piece that has a perfectly flat, straight edge, and construct the entire outer border (the frame) of the puzzle. This instantly defines your physical workspace.
* **Sort by Color and Texture:** Once the frame is built, do not pick up pieces randomly. Look at the reference image. If the image features a massive blue sky, separate all the solid blue pieces into one pile. If there is a green forest, make a green pile. Solve the puzzle in thematic "chunks."
* **Look for Unique Architectural Details:** When solving cityscapes or landmarks, focus on the highly distinct elements first. A piece showing the very tip of the Eiffel Tower or the eye of a statue is infinitely easier to place than a piece showing generic gray clouds.
* **Rotate the Chunks:** If you have assembled a large chunk of the sky but don't know exactly where it goes inside the frame, just leave it off to the side. Eventually, it will become obvious where the massive chunk anchors to the rest of the image.
* **Don't Force It:** If two pieces don't magnetically snap together with a satisfying click, they do not belong together. Never try to force a piece that looks "close enough" based solely on color; the interlocking shape must be perfect.`
  },
  {
    title: "Egypt Collapse",
    seoContent: `![Egypt Collapse](https://www.htmlgames.com/uploaded/game/thumb800/egyptcollapse800450.webp)

Egypt Collapse injects a massive dose of historical, archaeological mystery into the highly competitive tile-collapsing genre (often called "Blast" or "Collapse" games), delivering a visual feast of ancient iconography and intensely satisfying combination mechanics. Stepping entirely away from generic gem-swapping, this title places you deep inside a pharaoh's tomb. You are presented with a massive grid filled with tightly packed stone blocks featuring incredibly crisp, high-definition hieroglyphics, Ankhs, scarabs, and the Eye of Horus. Your objective is intensely focused: you must rapidly scan the board and click on massive, pre-existing clusters of identical ancient blocks to instantly shatter them. When destroyed, the entire column collapses under gravity, shifting the board state and creating new clusters. The atmosphere is deeply engaging, accompanied by rhythmic, cinematic Egyptian music. Egypt Collapse is a pure, unadulterated test of spatial planning, cascade optimization, and gravity management.

## How to Play
* The core mechanic revolves around clicking clusters of identical hieroglyphic blocks to remove them from the board.
* Use your \`Mouse\` to click on any group of TWO OR MORE identically colored blocks that are touching horizontally or vertically.
* When clicked, the entire cluster shatters instantly, and gravity causes the blocks above them to fall straight down.
* **The Primary Objective:** Completely clear the board, or reach a specific target score, before running out of valid moves.
* If a column is completely emptied, the remaining columns will usually slide toward the center to fill the gap.
* **The Bombs:** You are given a very limited number of explosive bombs (usually located at the bottom of the screen). You can use a bomb to destroy a single, isolated block that cannot be matched, but use them sparingly!

## Tips and Tricks
* **Work from the Bottom:** Always prioritize clicking clusters at the lowest possible points on the grid. This triggers the maximum amount of gravity shifting, often causing blocks higher up to naturally fall into massive, pre-aligned super-clusters without you having to waste a move.
* **Don't Isolate Single Blocks:** The absolute worst thing you can do is accidentally clear all the blocks surrounding a specific color, stranding a single block with no identical neighbors. If too many blocks become isolated, the board will deadlock, forcing you to waste your precious bombs.
* **Build Massive Clusters (Patience is Key):** While clicking a group of two blocks is safe, it yields a terrible score. The true strategy is to click the smaller groups *around* a specific color to manually build a massive, screen-spanning cluster of 15 or 20 blocks before detonating it for maximum points.
* **Save the Bombs for the End:** Absolutely never use a bomb in the first half of the level just to make things look neat. You will desperately need every single bomb you have when the board is nearly empty and you have three isolated, unmatchable blocks left.
* **Calculate the Horizontal Slide:** Remember that emptying a column causes the board to slide together. Before you clear a column, look to see if sliding the left and right halves together will create a massive new match or completely ruin your setup.`
  },
  {
    title: "Pyramid Mahjong Solitaire",
    seoContent: `![Pyramid Mahjong Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/pyramidmahjongsolitaire800450.webp)

Pyramid Mahjong Solitaire executes a brilliant, mind-bending fusion of two of the most popular puzzle formats in history, taking the brutal mathematical addition rules of Pyramid Solitaire and applying them directly to the complex, overlapping 3D architecture of Mahjong. Moving entirely away from traditional pairing (matching a Bamboo to a Bamboo), this title presents a towering pyramid constructed entirely of Mahjong tiles, but each tile has a numerical value assigned to it (often displayed as playing card ranks overlaid on the tiles). Your objective is intensely focused: completely dismantle the massive 3D structure by selecting exposed tiles that mathematically add up to exactly thirteen. The atmosphere is deeply calculating and incredibly challenging, forcing your brain to rapidly switch between 3D spatial awareness (to see which tiles are free) and 2D arithmetic. The visual presentation is highly polished, ensuring the numerical values are perfectly readable even when the structure is heavily congested. It is a masterclass in puzzle hybridization.

## How to Play
* Your primary objective is to clear all the tiles from the massive 3D pyramid structure.
* Use your \`Left Mouse Button\` to click on any combination of fully exposed (unblocked) tiles whose numerical values add up to exactly 13.
* **Tile Values:** Numbered tiles are worth their face value. A Jack (J) = 11, Queen (Q) = 12, Ace (A) = 1.
* Kings (K) are worth exactly 13 and can be clicked individually to instantly remove them.
* **The Golden Rule of Freedom:** Just like standard Mahjong, a tile is strictly considered "exposed" only if there is absolutely no other tile resting on top of it, AND it is completely unblocked on at least one of its immediate left or right vertical sides.
* If you have no valid pairs of 13 on the pyramid, use the draw pile at the bottom to reveal new tiles.

## Tips and Tricks
* **Prioritize the Pyramid Over the Draw Pile:** If you have a 5 exposed on the pyramid, and a 5 in your draw pile, and you need to pair an 8 on the board... ALWAYS use the 5 on the pyramid. You must prioritize dismantling the 3D structure over emptying the draw pile.
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles in the dead center of the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **Save the Kings:** Because Kings equal 13 by themselves, they can be removed instantly. However, if they are not blocking anything important, leave them on the board. They don't hurt you, and occasionally you might accidentally click a King when you meant to click something else.
* **Track Your Values:** If you desperately need a 4 to clear a 9 that is blocking a massive stack, take a quick glance at the board and discard pile. If all four 4s have already been played, you know for a mathematical fact that the pyramid is deadlocked.
* **The "Undo" Button (If Available):** Use it strategically! If you pair a 10 from the draw pile with a 3 on the board, but realize another 3 was blocking a massive stack of hidden tiles, undo the move and pair the 10 with the *blocking* 3.`
  },
  {
    title: "Archer",
    seoContent: `![Archer](https://www.htmlgames.com/uploaded/game/thumb800/archer800450.webp)

Archer strips the sprawling, complex physics-shooter genre down to its absolute, most tension-fueled and reflex-dependent core, delivering a pure, unadulterated test of spatial calculation, patience, and trajectory management. Moving entirely away from chaotic combat or complex inventories, this title is entirely focused on the silent, methodical art of the perfect shot. Set against a clean, visually minimalist 2D landscape, players are placed in control of a stationary bowman. Your objective is elegantly simple yet brutally difficult in execution: you must calculate the parabolic arc of gravity, draw back your bowstring, and execute a perfect shot to skewer a specific target (usually a piece of fruit resting precariously on someone's head, or a distant bullseye). The atmosphere is deeply engaging; there is no timer, only the pressure of limited arrows and the devastating consequences of a miss. The visual presentation is highly polished, utilizing realistic bowstring tension physics and crisp graphics. Archer is a flawless tactical experience.

## How to Play
* The primary objective is to shoot the specific target (e.g., an apple) without hitting anything else (especially the person holding it).
* Use your \`Mouse\` to click and hold the \`Left Mouse Button\` anywhere on the screen to grab the bowstring.
* Drag the mouse backward, away from the target, to draw the bow and build tension (power).
* Move the mouse up and down to adjust the vertical angle of your shot.
* A dotted trajectory line will often appear, showing the initial path of the arrow, but you must manually calculate the drop caused by gravity.
* Release the mouse button to fire the arrow.
* **The Fatal Error:** Hitting the person holding the fruit, or running out of arrows before hitting the target, will instantly fail the level.

## Tips and Tricks
* **Respect the Gravity:** The arrow does not fly in a straight laser line. Gravity immediately begins pulling it downward the millisecond it leaves the bow. For distant targets, you MUST aim significantly higher than the actual target to allow the arrow to drop perfectly onto it.
* **Use the Screen as a Ruler:** If you miss a shot by an inch, do not blindly guess on the next shot. Look at where your mouse pointer was physically located on your monitor (e.g., exactly next to a specific cloud in the background). Use that physical point as a reference to adjust your power slightly on the next draw.
* **Max Power Isn't Always Best:** While drawing the bow back to 100% power makes the arrow fly flatter, it isn't always the correct solution. Sometimes you need to shoot with 50% power at a very high angle to drop the arrow vertically over a high wall.
* **Account for the Wind (If Applicable):** In advanced levels, a wind indicator might appear. A strong headwind will cause your arrow to drop much faster, requiring you to aim higher. A tailwind will carry the arrow further, requiring you to aim lower.
* **Patience is Key:** You are not on a timer. Do not rapid-fire arrows. Take a deep breath, analyze the distance, calculate the arc, and take the shot only when you are perfectly confident.`
  },
  {
    title: "Tens",
    seoContent: `![Tens](https://www.htmlgames.com/uploaded/game/thumb800/tens800450.webp)

Tens fundamentally rewrites the rules of the traditional spatial logic puzzle (like Tetris or Sudoku) by abandoning rigid geometric shape-fitting in favor of a highly complex, free-flowing numerical arithmetic system. Set against a clean, visually minimalist grid (usually 5x5 or larger), players are presented with a continuous feed of blocks, each displaying a single digit (1 through 9). Your objective is intensely focused: you must physically drag these numbered blocks onto the grid, strategically placing them so that the sum of the numbers in any complete horizontal row or vertical column equals exactly TEN. When a row or column hits exactly 10, those blocks instantly vanish, freeing up crucial space on the grid. The atmosphere is deeply cerebral and immensely satisfying; you are essentially managing a massive game of localized addition while simultaneously planning to prevent the board from clogging up. The visual presentation is highly functional, utilizing crisp, high-contrast typography that ensures the complex numerical pathways remain perfectly readable. Tens is a pure test of arithmetic logic and spatial packing.

## How to Play
* The primary objective is to survive as long as possible by placing numbered blocks onto the grid so they add up to exactly 10 in a row or column.
* You will be given a random selection of numbered blocks (e.g., a 3, an 8, and a 1) at the bottom of the screen.
* Use your \`Mouse\` to click and drag a block onto any empty square on the main grid.
* You MUST place all the blocks given to you before a new set is generated.
* **The Clearing Rule:** If the numbers in any horizontal row or vertical column add up to EXACTLY 10 (e.g., 4 + 4 + 2, or just 8 + 2), all the blocks in that specific line are instantly destroyed, freeing up space.
* **The Fatal Error:** If the total of a line exceeds 10 (e.g., placing a 5 in a row that already totals 6), the line is "busted" and cannot be cleared, effectively dead-locking that space on the board. The game ends when you can no longer place any blocks.

## Tips and Tricks
* **Avoid the High Numbers (Usually):** Blocks with an 8 or a 9 are incredibly dangerous. They immediately lock down an entire row and column, requiring exactly a 2 or a 1 to clear. Place them on the extreme edges of the board to minimize the amount of space they infect.
* **Build with Low Numbers:** Blocks like 1, 2, and 3 are your best friends. They give you massive flexibility. A row with "1 + 2 + 1" only totals 4, giving you plenty of room to maneuver and find a 6 to clear it later.
* **The Cross-Clear Strategy:** The absolute best move in the game is placing a block that simultaneously completes a horizontal row (reaching 10) AND a vertical column (reaching 10). This clears massive amounts of space at once. Always look for intersection points.
* **Keep Your Options Open:** Never place a 7 in a row that already has a 3 (totaling 10) if doing so forces the vertical column to total 11 (busting the line). It is better to leave the row at 3 than to permanently ruin a column.
* **Plan Your Spawns:** Look at all three blocks given to you before placing the first one. If you have a 5, a 3, and a 2, you can guarantee a line clear immediately by placing them all in the same row.`
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
