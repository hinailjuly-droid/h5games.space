const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Daily StoStone",
    seoContent: `![Daily StoStone](https://www.htmlgames.com/uploaded/game/thumb800/daily-stostone-800450.webp)

Daily StoStone strips the spatial logic puzzle genre down to its absolute, most mathematically pure and elegantly complex core, delivering a digital adaptation of a notoriously difficult Japanese grid puzzle (often compared to Sudoku or Nonograms, but with gravity mechanics). Set against a clean, visually minimalist grid divided into distinct irregular regions (outlined in bold), players are tasked with shading specific cells black to form "stones." Your objective is brutally unforgiving and relies on an interlocking set of severe constraints: you must shade exactly the number of cells indicated by any number inside a region, ensuring all shaded cells in a region touch. However, stones from different regions can never touch each other. The ultimate, mind-bending twist? If gravity were applied and all the blackened stones "fell" to the absolute bottom of the grid, they must perfectly fill exactly the bottom half of the puzzle, with zero gaps. Daily StoStone offers a fresh puzzle every day, providing an uncompromising brain-training exercise in logic and spatial planning.

## How to Play
* The primary objective is to shade the correct squares black to satisfy the region rules AND the gravity rule.
* Use your \`Left Mouse Button\` to click a square and turn it black (making a stone).
* Use your \`Right Mouse Button\` (or an alternate toggle) to place an 'X' in a square you mathematically know MUST be empty.
* **Region Rules:** All black squares within a single boldly outlined region must connect horizontally or vertically. If a region contains a number (e.g., '3'), exactly 3 squares in that region must be black.
* **Separation Rule:** A black stone in one region CANNOT touch a black stone in an adjacent region horizontally or vertically.
* **The Gravity Rule:** Mentally simulate all the black squares falling straight down. They must perfectly stack up to fill exactly half the grid, leaving the top half completely empty.

## Tips and Tricks
* **Count the Total Stones First (The Golden Rule):** The grid is usually an even number of rows (e.g., 10x10). The gravity rule dictates that exactly half the grid must be black. In a 10x10 grid, there must be exactly 50 black squares. Count the required numbers in the regions. This helps you deduce how many squares to shade in the "numberless" regions.
* **Fill the Bottom Row:** Because the stones must fall and pack perfectly, the absolute bottom row of the grid MUST be completely filled with black squares (either resting there originally, or falling there). This is a crucial starting point.
* **X Marks the Spot:** Marking squares as definitively empty ("X") is equally as important as shading squares. If a region needs 2 stones, and you found them, you MUST immediately place X's in all remaining squares in that region, and all adjacent squares in neighboring regions.
* **Watch for "Trapped" White Space:** If a white space is completely surrounded by black stones below it, it means the stones above it cannot fall to the bottom. You must redesign your layout to ensure a clear vertical drop path.
* **Never Guess:** If you guess, you will ruin the puzzle 10 steps later. Only shade a square if you can logically prove it.`
  },
  {
    title: "Three Cell",
    seoContent: `![Three Cell](https://www.htmlgames.com/uploaded/game/thumb800/threecell800450.webp)

Three Cell takes the absolute gold standard of perfect-information puzzle games (Freecell) and aggressively injects a massive element of terrifying restriction, fundamentally altering the legendary formula. Set against a clean, visually minimalist green felt table aesthetic, players are presented with the standard eight sprawling tableau columns of face-up cards. However, in a brutal twist that completely shatters standard cascade strategy, you are only given THREE empty "Free Cells" instead of the traditional four. Your objective remains the same: maneuver the cards to build four complete sequences in the foundation piles, from Ace up to King by suit. But the atmosphere shifts from purely calculating to intensely claustrophobic. Losing that single free cell mathematically slashes the maximum number of cards you can move in a single stack from five down to four. It is an uncompromising test of logic and bottleneck management where the safety net has been violently reduced.

## How to Play
* The primary objective is to move all 52 cards into the four foundation piles at the top right, building upward in suit from Ace to King.
* Cards are dealt into eight face-up tableau columns.
* Use your \`Mouse\` to click and drag exposed face-up cards between columns.
* **The Tableau Rule:** You can build cards downward on the tableau in **alternating colors** (e.g., a Red 8 can only be placed on a Black 9).
* **The Free Cells (The Catch):** You only have THREE open slots at the top left. You can temporarily park any single card into an empty free cell.
* You can move entire valid sequences of alternating-color cards, BUT the number of cards you can move at once is strictly limited by the formula: '(1 + empty free cells) * (2 ^ empty tableau columns)'.

## Tips and Tricks
* **Empty Columns are Pure Gold (The Golden Rule):** Because you are missing a free cell, an empty tableau column is infinitely more valuable than in standard Freecell. It mathematically doubles the number of cards you can move in a single stack. Prioritize clearing the shorter columns immediately.
* **Protect the Cells:** Do not carelessly throw cards into your three free cells just to see what's underneath. If you fill all three cells early, your mobility drops to practically zero, and the board will deadlock instantly.
* **Unearth the Aces Early:** Your entire early game must focus heavily on excavating the four Aces so they can be moved to the foundations to create safe space.
* **The "Undo" Button is Mandatory:** If you make a massive sequence move and realize it strands a crucial King, you must immediately undo the move. There is almost no room for error recovery in Three Cell.
* **Don't Auto-Play to the Foundations:** Just because you *can* move a Black 5 to the foundation doesn't mean you *should*. Sometimes keeping it on the tableau is absolutely necessary to hold a Red 4 you desperately need to anchor a stack.`
  },
  {
    title: "Panda Mahjong",
    seoContent: `![Panda Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/pandamahjong800-450.webp)

Panda Mahjong delivers an incredibly robust, deeply engaging evolution of the classic Chinese tile-matching genre, completely stripping away the sterile casino aesthetic in favor of a breathtaking, vibrant botanical environment focusing on adorable pandas and lush bamboo forests. Set against a lush backdrop, players are presented with massive, overlapping 3D pyramids constructed of beautifully illustrated tiles featuring pandas, paw prints, bamboo shoots, and traditional characters. Your objective is elegantly simple yet brutally difficult in execution: you must meticulously dismantle the overlapping structure by finding identical pairs. The atmosphere is deeply relaxing and incredibly focused, trading tense ticking clocks for a soothing, meditative puzzle environment accompanied by ambient, relaxing music. The visual presentation is highly polished, ensuring the thematic iconography remains perfectly readable even when the massive structures are heavily congested. It is the ultimate digital sanctuary for puzzle enthusiasts.

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
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach Panda tiles on the very outer edge of the board, ignore them! Save them. You might desperately need those outer tiles later to match a Panda tile buried deep in the center tower.
* **Memorize the Flora/Fauna Tiles:** In traditional Mahjong, Season/Flower tiles don't have to be identical. Check the specific rules of this game to see if all "Bamboo" tiles match each other, or if they must be strictly identical images.
* **Use the Undo Button:** If you make a match and it immediately deadlocks the board, use the undo button to reverse it. Always scout the board to see if a specific tile has three visible copies; if it does, match the two that unblock the most hidden tiles.`
  },
  {
    title: "Zoo Mysteries",
    seoContent: `![Zoo Mysteries](https://www.htmlgames.com/uploaded/game/thumb800/zoomysteries800450.webp)

Zoo Mysteries is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core, all wrapped in a breathtaking virtual tour of a sprawling wildlife sanctuary. Forget convoluted detective storylines or searching for random household items; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within stunningly detailed digital artwork of animal enclosures. You are placed directly into a series of highly detailed, high-definition digital images showcasing dense monkey jungles, sprawling lion savannas, murky reptile houses, and vibrant aviaries. Your objective is elegantly simple: locate specific, thematic items expertly blended into the complex habitats. The atmosphere is deeply relaxing and incredibly focused, accompanied by ambient animal sounds. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every disguised banana and camouflaged snake is rendered perfectly.

## How to Play
* Your primary objective is to find every single item listed (either as text or silhouettes) hidden within the main high-definition scenes of the zoo enclosures.
* The game may also feature "spot the difference" mechanics between two seemingly identical animal habitats.
* Use your \`Mouse\` to carefully scan the high-definition image.
* When you spot a required object (or a difference), click directly on it.
* Successfully locating an object will remove it from your list and award you points.
* Be extremely precise! Randomly spam-clicking around the screen will often result in a heavy time penalty or score deduction.

## Tips and Tricks
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A modern flashlight might be tinted green to blend perfectly into the broad leaf of a jungle plant.
* **Divide the Screen:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the rocky outcrop in the lion enclosure) before moving to the next.
* **Check the Extremes (Shadows and Glare):** The developers love hiding dark objects inside the deep black shadows beneath the rocks, or hiding bright objects directly inside the blown-out glare of the sun hitting the water in the penguin pool.
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a hidden parrot, you will accidentally spot the hidden zookeeper's keys.
* **Save Your Hints:** If you are completely stuck, you can click the hint button, but absolutely refuse to use it until the timer is in the red zone.`
  },
  {
    title: "Upside Down",
    seoContent: `![Upside Down](https://www.htmlgames.com/uploaded/game/thumb800/upsidedown800450.webp)

Upside Down brilliantly re-engineers the legendary, gravity-driven block-falling arcade formula (Tetris), completely shattering the established rules by aggressively reversing the core physics engine. Instead of shapes falling from the ceiling, this title forces you to build from the absolute top of the screen downwards, as massive geometric blocks (Tetrominoes) defy gravity and "fall" UPWARD from the floor. Set against a clean, visually minimalist grid, players must actively steer and rotate the rising blocks, locking them into the accumulating stack resting against the ceiling. Your objective remains elegantly simple yet brutally difficult in execution: you must perfectly interlock the pieces to form solid, unbroken horizontal lines. The atmosphere is deeply kinetic and incredibly disorienting at first; your brain is hardwired for standard gravity, and this game forces you to completely rewire your spatial planning and cascade logic in real-time. Upside Down is an uncompromising test of adaptability.

## How to Play
* The primary objective is to survive as long as possible by clearing horizontal lines before the stack of blocks reaches the absolute bottom of the screen.
* Geometric shapes will spawn at the bottom of the screen and float upwards.
* Use the \`Left Arrow\` and \`Right Arrow\` keys to steer the rising block horizontally across the columns.
* Use the \`Up Arrow\` (or a specific rotate key) to instantly rotate the rising block 90 degrees.
* Use the \`Down Arrow\` key to accelerate the block's upward speed (Soft Drop).
* Press the \`Spacebar\` to instantly slam the block straight to the top of the stack (Hard Drop).
* When you create a solid horizontal line of blocks with no empty gaps, that line vanishes.

## Tips and Tricks
* **Keep the Ceiling Flat (The Golden Rule):** Your absolute highest priority is ensuring the bottom layer of your "ceiling stack" remains as flat and even as possible. Massive spikes reaching down make it incredibly difficult to maneuver and rotate rising blocks.
* **Build for the "Tetris" (Line Piece):** Just like the original, the most efficient way to score massive points is to intentionally leave exactly one single vertical column completely empty on the far left or right edge of the board. Build a solid 4-line high wall next to it, and wait for the long, straight piece to slam up into it.
* **Retrain Your Brain:** The hardest part of this game is fighting your muscle memory. When you panic, you will instinctively press 'Down' to drop a piece faster, but here, 'Down' might just move it, or 'Up' might be the drop. Take the first 10 levels very slowly.
* **Use the Hard Drop Strategically:** Do not let pieces float up slowly in the early levels. The faster you hard-drop (\`Spacebar\`) pieces, the more time you have to analyze the board state before the *next* piece spawns.
* **Watch the "Next Piece" Indicator:** Knowing exactly what shape is rising next completely dictates where you should rotate and place your current piece.`
  },
  {
    title: "Hidden Spots - Castles",
    seoContent: `![Hidden Spots - Castles](https://www.htmlgames.com/uploaded/game/thumb800/hiddenspotscastles800450.webp)

Hidden Spots - Castles is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core, all wrapped in a breathtaking virtual tour of medieval European architecture. Forget convoluted detective storylines or searching for random anachronistic items; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within stunning macro-photography of ancient fortresses, sprawling courtyards, stone towers, and ornate throne rooms. Your objective is elegantly simple: you are not looking for specific objects, but rather specific "spots" or tiny cropped segments of the main image displayed at the bottom of the screen. You must meticulously scan the massive, highly textured photograph to find the exact location of that tiny architectural detail. The atmosphere is deeply relaxing and incredibly focused. Visually, the game utilizes hyper-realistic, high-definition photography, meaning every crack in the mortar is a potential clue.

## How to Play
* Your primary objective is to locate specific, tiny cropped segments (spots) hidden within the main high-definition photograph of the castles.
* The spots you need to find are displayed in a queue at the bottom or side of the screen.
* Use your \`Mouse\` to carefully scan the high-definition image.
* When you find the exact location in the main image that matches the small cropped spot, click directly on it.
* Successfully locating a spot will remove it from your list and award you points.
* Be extremely precise! Randomly spam-clicking around the screen will often result in a heavy time penalty or score deduction.

## Tips and Tricks
* **Look for Unique Textures:** Do not try to memorize the entire cropped spot. Castles are dominated by stone and wood grain. Identify one highly unique reflection, a specific moss pattern, or a color gradient within the spot. Scan the main image strictly for that one specific intersection of colors.
* **Divide the Screen:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the battlements on the top right) before moving to the next.
* **Check the Edges:** The developers love placing the cropped spots on the absolute extreme borders of the main image, or blurring them slightly by hiding them in the depth-of-field background of the macro photography.
* **Step Back:** If you are completely stuck on a spot, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the micro-detail suddenly pop into context.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone.`
  },
  {
    title: "Monkey Island",
    seoContent: `![Monkey Island](https://www.htmlgames.com/uploaded/game/thumb800/monkeyisland800450.webp)

Monkey Island delivers the absolute purest, most delightfully unadulterated distillation of the legendary "Bubble Shooter" arcade formula, completely stripping away the bloated narratives and wrapping the core mechanics in a vibrant, deeply satisfying tropical aesthetic. This is the genre exactly as it was meant to be played: a massive ceiling of brightly colored, perfectly rendered jungle bubbles, a single aiming cannon controlled by a cheerful monkey at the bottom, and an unrelenting pursuit of massive, structure-collapsing chain reactions. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core geometric shooting mechanic accompanied by cheerful steel drum music. You are tasked with calculating angles, bouncing shots off the sidewalls, and grouping specific colors to trigger massive structural collapses, all with the specific goal of collecting bananas trapped high in the canopy. The visual presentation is highly polished, utilizing crisp sprites. It is a pure test of geometric calculation and reflex aiming.

## How to Play
* The primary objective is to collect all the hidden bananas by clearing the bubbles surrounding them.
* You control a monkey operating a bubble cannon at the bottom of the screen.
* Use your \`Mouse\` to aim the trajectory line.
* Click the \`Left Mouse Button\` to fire your bubble up into the cluster.
* When your fired bubble connects with a cluster of two or more bubbles of the EXACT SAME color, the entire connected group will pop and disappear.
* Bananas caught within the popping bubbles will fall down and be collected.
* If you shoot and fail to make a match a certain number of times, the entire ceiling will shift downward, reducing your playable space.

## Tips and Tricks
* **Master the Bank Shot (The Golden Rule):** You cannot always shoot straight. You MUST learn to bounce your bubbles off the left and right walls of the jungle to ricochet them into tight, otherwise unreachable gaps near the top of the structure to hit the bananas.
* **Sever the Root:** Do not just shoot at the lowest hanging bubbles. Look for the "structural joints"—small clusters holding up massive, mixed-color chunks below them. If you destroy the joint, the entire massive chunk below it falls instantly, granting huge points.
* **Target the Bananas Early:** Your only real objective is the bananas. If you have a clear shot at a banana, take it immediately, even if it means missing a satisfying 10-bubble combo on the other side of the board.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* bubble color. Knowing what you have in reserve completely dictates where you should place your current shot to set up the next combo.
* **Clear Colors Completely:** If there are only two red bubbles left on the entire board, prioritize eliminating them.`
  },
  {
    title: "Beetle Solitaire",
    seoContent: `![Beetle Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/beetlesolitaire800x450.webp)

Beetle Solitaire executes a brilliant, mind-bending variation on the notoriously difficult Spider Solitaire formula, aggressively modifying the rules to create a slightly more forgiving but equally calculating puzzle experience. Set against a clean, visually minimalist green felt table aesthetic, players are presented with a massive ten-column cascading tableau. The defining twist of Beetle Solitaire is its open-information design: while cards are dealt face-down in standard Spider, Beetle deals massive portions of the initial tableau entirely face-up, stripping away the terrifying element of blind gambling. Your objective remains the same: you must weave the sprawling columns to build eight complete, descending sequences from King down to Ace in the EXACT same suit, completely clearing the board. The atmosphere is deeply cerebral; it is a pure test of cascade math, complex sequence sorting, and extreme bottleneck management. Beetle Solitaire is an uncompromising test of logic where every single move counts.

## How to Play
* The primary objective is to build eight complete sequences on the tableau, descending from King down to Ace in the exact same suit (e.g., King of Hearts down to Ace of Hearts). Completed sequences are automatically removed from the board.
* The game begins with ten tableau columns. Many cards are dealt face-up.
* Use your \`Mouse\` to click and drag exposed face-up cards between columns.
* **The Building Rule:** You can build cards downward on the tableau REGARDLESS of suit or color (e.g., a Red 8 can be placed on a Black 9 or a Red 9).
* **The Moving Rule (Crucial):** You can only pick up and move a stack of multiple cards if that stack is in perfect descending order AND in the exact same suit.
* If you have no valid moves on the board, click the face-down draw pile (stock) to deal exactly one new card onto the bottom of every single tableau column.

## Tips and Tricks
* **Prioritize Same-Suit Builds (The Golden Rule):** While you *can* place a Heart on a Spade to keep a column moving, it traps the cards. Your absolute highest priority is building sequences in the exact same suit, because that is the only way you can pick them up and move them later.
* **Empty Columns are Pure Gold:** An empty tableau column is infinitely valuable. It acts as a temporary holding zone to dump "garbage" cards (like a single 3) while you untangle a massive sequence in another column. Prioritize clearing the shorter columns first.
* **Calculate the Deal:** Before you click the draw pile to deal 10 new cards onto your carefully organized board, ensure you have exhausted EVERY possible move. Dealing new cards essentially "locks" the bottom of every column until you can clear the new cards away.
* **Unearth the Face-Down Cards:** Your entire early game must focus heavily on excavating the few face-down cards that exist. Dig aggressively into the columns that have them to unlock all available information.
* **The "Undo" Button is Mandatory:** Spider variants require massive chain reactions. If a 10-step move ends in a deadlock, use the undo button to reverse it entirely.`
  },
  {
    title: "Finish the Proverbs",
    seoContent: `![Finish the Proverbs](https://www.htmlgames.com/uploaded/game/thumb800/finishtheproverbs800450.webp)

Finish the Proverbs strips the word-puzzle genre down to its absolute, most linguistically educational and culturally engaging core, delivering a pure, unadulterated test of vocabulary recall, idiom knowledge, and deductive spelling. Moving entirely away from the frantic pace of falling-letter arcade games, this title places you in a relaxed, cerebral environment. Set against a clean, visually minimalist chalkboard or parchment aesthetic, you are presented with a famous, classic English proverb—but the critical final word (or key phrase) is completely missing, replaced by a series of blank underscores indicating the exact letter count. Your objective is elegantly simple yet demanding: you must rely on your cultural knowledge to identify the missing word, and then physically select the correct letters from a scrambled pool to spell it out. The atmosphere is deeply relaxing and intentionally educational; it is the ultimate brain-training routine for language learners and trivia enthusiasts alike.

## How to Play
* The primary objective is to correctly identify and spell the missing word in a famous English proverb to advance to the next phrase.
* The game presents a proverb with a missing word (e.g., "A bird in the hand is worth two in the ____").
* Below the proverb, there are blank spaces indicating the length of the required word.
* Below the blank spaces is a pool of scrambled letter tiles.
* Use your \`Mouse\` to click the letter tiles in the correct spelling order to fill in the blanks.
* If you make a mistake, you can usually click the filled letter to send it back to the pool.
* Successfully complete the proverb to score points.

## Tips and Tricks
* **Count the Blanks (The Golden Rule):** Before you even read the proverb, look at the number of blank spaces. If the proverb is "Don't judge a book by its ____" and there are 5 blanks, you know instantly the answer is "COVER". If there are only 4 blanks, the answer might be something entirely different or a trick.
* **Look at the Letter Pool:** If you are completely stumped on the cultural meaning of the proverb, treat it like an anagram puzzle. Look at the scrambled letters. If you see C, O, V, E, R, your brain will often automatically assemble the word before you even realize it fits the proverb.
* **Identify the Rhyme Scheme:** Many classic proverbs rely on rhymes to be memorable (e.g., "An apple a day keeps the doctor away"). If the first half of the phrase ends in a specific sound, look for a word in the letter pool that rhymes with it.
* **Check the Grammar:** Look at the word immediately preceding the blank. If the word is "an", the missing word MUST start with a vowel (A, E, I, O, U). This drastically narrows your choices from the letter pool.
* **Take Your Time:** There is rarely a strict, punishing timer in these educational games. Say the phrase out loud. Your ear will often catch the missing word better than your eyes will.`
  },
  {
    title: "Mahjong 2048",
    seoContent: `![Mahjong 2048](https://www.htmlgames.com/uploaded/game/thumb800/mahjong2048800450.webp)

Mahjong 2048 executes a brilliant, mind-bending fusion of two of the most popular puzzle formats in history, taking the brutal, exponential mathematical merging rules of the viral sensation "2048" and applying them directly to the complex, overlapping 3D pyramid structures of traditional Mahjong Solitaire. Set against a clean, visually minimalist grid, players are presented with massive, layered towers of tiles. However, instead of matching identical Chinese characters, every tile features a numerical value (2, 4, 8, 16...). Your objective is intensely focused on spatial manipulation and rapid arithmetic: you must physically slide "free" tiles across the board. When two tiles of the EXACT SAME number collide, they merge into a single tile of double the value (e.g., 4 + 4 = 8). The ultimate goal is to fuse enough tiles to create the legendary 2048 tile before the board becomes completely deadlocked. Mahjong 2048 is an uncompromising test of pure spatial logic and exponential cascade math.

## How to Play
* The primary objective is to merge numbered tiles to reach the value of 2048 before running out of valid moves.
* The game is played on a 3D, overlapping Mahjong-style layout.
* Use your \`Mouse\` to click and select a "free" numbered tile.
* **The Movement Rule:** You can slide a selected free tile horizontally or vertically across the board, provided the path is completely clear of obstacles.
* **The Merge Mechanic:** If you slide a '4' tile directly into another '4' tile, they will instantly merge into a single '8' tile, freeing up crucial space on the board.
* Just like standard Mahjong, a tile is strictly considered "free" ONLY if it has absolutely no other tile resting on top of it, AND it is completely unblocked on at least one of its immediate left or right vertical sides.

## Tips and Tricks
* **Build in the Corners (The Golden Rule):** The absolute most critical strategy in any 2048 variant is corner-building. Pick one specific corner of the layout (e.g., the bottom-right). Funnel all of your highest-value tiles into that corner. Never, ever move your highest tile out of that corner, as it will scramble the board.
* **The "Peel" Strategy:** Because the tiles overlap in 3D, you must prioritize merging the tiles on the top layers first to expose the numbers buried beneath them. A '64' tile is completely useless if it is buried under a massive stack.
* **Set Up Chain Reactions:** Do not just merge 2+2=4. Slide a 2 into a 2 to make a 4, which slides perfectly next to another 4 to make an 8, which is sitting right next to an 8 to make a 16. Plan the entire cascade before you move.
* **Keep the Center Clear:** A clogged center makes moving tiles from one side of the board to the other impossible. Try to keep the middle lanes open for transit.
* **Don't Rush the Obvious Merge:** If you see two 8s sitting safely on the edge, don't merge them immediately if you have other pressing issues (like a buried tile you need to expose).`
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
