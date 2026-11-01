const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Dagelijkse Anagram Kruiswoord",
    seoContent: `![Dagelijkse Anagram Kruiswoord](https://www.htmlgames.com/uploaded/game/thumb800/dagelijkse-anagram-kruiswoord-800x450.webp)

Dagelijkse Anagram Kruiswoord completely revitalizes the traditional crossword puzzle format by substituting trivia-based definitions with a purely linguistic challenge, completely localized for Dutch speakers. Set against a clean, visually uncluttered digital newspaper layout, players are presented with a standard intersecting grid of blank squares. However, the clues are not historical facts or synonyms. Instead, every single clue is a perfect anagram of the required Dutch word (e.g., if the answer is "WATER", the clue might be "TARWE"). Your objective is intensely focused and relies entirely on vocabulary manipulation and rapid letter unscrambling: you must physically type the correct anagram into the grid. The atmosphere is deeply cerebral and intentionally demanding, requiring players to constantly juggle letters in their head to find valid combinations that also perfectly intersect with the other words on the board. Offering a fresh, algorithmically generated puzzle every day, this is the ultimate brain-training routine for Dutch language enthusiasts.

## How to Play
* The primary objective is to completely fill the crossword grid with valid Dutch words.
* Every clue provided in the "Across" and "Down" lists is a direct anagram of the answer. You must rearrange all the letters in the clue to form the solution.
* Use your \`Mouse\` to click on a specific row or column in the grid to highlight it.
* Type the correct answer using your \`Keyboard\`.
* **The Intersections:** The core of the crossword mechanic remains. If you solve an "Across" word, it provides you with free letters for the intersecting "Down" words, drastically narrowing the possible anagram solutions.
* A fresh puzzle is generated every 24 hours.

## Tips and Tricks
* **Target the Short Words First:** Do not stare at an 8-letter anagram for five minutes. Immediately scan the clues for 3-letter or 4-letter anagrams. They have drastically fewer permutations and can usually be solved instantly, providing crucial intersection letters for the longer words.
* **Look for Common Prefixes/Suffixes:** If you have an anagram that contains the letters E, N, G, I, look for the common Dutch endings like "-ING" or "-EN". Mentally remove those letters from the anagram and see what is left.
* **Write it in a Circle:** If you are stuck on a long anagram, grab a physical piece of paper and write the scrambled letters in a circle, rather than a straight line. This breaks your brain's tendency to read them sequentially and makes finding hidden words much easier.
* **Use the Grid:** If a 6-letter anagram has two letters already filled in by intersecting words (e.g., _ A _ _ E _), you don't even need to unscramble the whole thing; you just need to find a word that fits that specific physical structure.
* **Don't Guess:** The intersections must be mathematically perfect. Do not force a word that "mostly" fits if it ruins a crossing word.`
  },
  {
    title: "Crucigrama de Anagramas Diario",
    seoContent: `![Crucigrama de Anagramas Diario](https://www.htmlgames.com/uploaded/game/thumb800/crucigrama-de-anagrames-diario-800x450.webp)

Crucigrama de Anagramas Diario completely revitalizes the traditional crossword puzzle format by substituting trivia-based definitions with a purely linguistic challenge, completely localized for Spanish speakers. Set against a clean, visually uncluttered digital newspaper layout, players are presented with a standard intersecting grid of blank squares. However, the clues are not historical facts, translations, or synonyms. Instead, every single clue is a perfect anagram of the required Spanish word. Your objective is intensely focused and relies entirely on vocabulary manipulation and rapid letter unscrambling: you must physically type the correct anagram into the grid. The atmosphere is deeply cerebral and intentionally demanding, requiring players to constantly juggle vowels and consonants in their head to find valid combinations that also perfectly intersect with the other words on the board. Offering a fresh puzzle every single day, this is the ultimate brain-training routine for Spanish language enthusiasts.

## How to Play
* The primary objective is to completely fill the crossword grid with valid Spanish words.
* Every clue provided in the "Across" (Horizontal) and "Down" (Vertical) lists is a direct anagram of the answer. You must rearrange all the letters in the clue to form the solution.
* Use your \`Mouse\` to click on a specific row or column in the grid to highlight it.
* Type the correct answer using your \`Keyboard\`.
* **The Intersections:** The core crossword mechanic remains intact. If you solve an "Across" word, it provides you with free letters for the intersecting "Down" words, drastically narrowing the possible anagram solutions.
* A fresh puzzle is generated every 24 hours.

## Tips and Tricks
* **Target the Vowels:** Spanish is heavily reliant on vowels. Separate the vowels from the consonants in the anagram clue. If you have a lot of A's and O's, you are likely looking at a noun or adjective ending in "AS" or "OS".
* **Look for Common Suffixes:** If the anagram contains C, I, O, N, mentally pull those letters out and test if the word ends in "-CIÓN". This drastically reduces the number of letters you actually need to unscramble.
* **Write it Down:** If you are stuck on a 7-letter anagram, grab a physical piece of paper and write the scrambled letters in a circle. This breaks your brain's tendency to read them as the original scrambled word and helps you spot new patterns.
* **Leverage the Intersections:** If you have an anagram but the grid already shows the word starts with "ES", you only have to unscramble the remaining letters. Always prioritize anagrams that have the most intersecting letters already filled in.
* **Don't Force Bad Grammar:** The solutions are standard Spanish words. Do not force an impossible consonant cluster (like "KXZ") into the grid just because it uses all the letters.`
  },
  {
    title: "Berlin Hidden Objects",
    seoContent: `![Berlin Hidden Objects](https://www.htmlgames.com/uploaded/game/thumb800/berlinhiddenobjects800450.webp)

Berlin Hidden Objects is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core, all wrapped in a breathtaking virtual tour of Germany's historic capital. Forget convoluted detective storylines or searching for random household items; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within stunning travel photography. You are placed directly into a series of highly detailed, high-definition digital images showcasing the Brandenburg Gate, the Reichstag building, remnants of the Berlin Wall, and bustling German street cafes. Your objective is elegantly simple: locate specific, thematic items expertly blended into the complex urban environments. The atmosphere is deeply relaxing and incredibly focused. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every disguised pretzel and camouflaged street sign is rendered with breathtaking clarity.

## How to Play
* Your primary objective is to find every single item listed (either as text or silhouettes) hidden within the main high-definition scenes of Berlin.
* Use your \`Mouse\` to carefully scan the high-definition image.
* You can often click to zoom in and out of the high-definition image to inspect tiny details on the historical monuments or the cobblestone streets.
* When you spot a required object, click directly on it.
* Successfully locating an object will remove it from your list and award you points.
* Be extremely precise! Randomly spam-clicking around the screen will often result in a heavy time penalty or score deduction.

## Tips and Tricks
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A modern coffee cup might be tinted gray to blend perfectly into the stone of the Brandenburg Gate.
* **Divide the Screen:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the base of the TV Tower) before moving to the next.
* **Check the Extremes (Shadows and Glare):** The developers love hiding dark objects inside the deep black shadows beneath parked cars, or hiding bright objects directly inside the blown-out glare of a streetlamp. Adjust your monitor brightness!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a hidden bear statue, you will accidentally spot the hidden compass.
* **Save Your Hints:** If you are completely stuck, you can click the glowing light bulb icon for a hint, but absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Tägliches Anagramm Kreuzworträtsel",
    seoContent: `![Tägliches Anagramm Kreuzworträtsel](https://www.htmlgames.com/uploaded/game/thumb800/tagliches-anagramm-kreuzwort-800x450.webp)

Tägliches Anagramm Kreuzworträtsel completely revitalizes the traditional crossword puzzle format by substituting trivia-based definitions with a purely linguistic challenge, completely localized for German speakers. Set against a clean, visually uncluttered digital newspaper layout, players are presented with a standard intersecting grid of blank squares. However, the clues are not historical facts, synonyms, or general knowledge questions. Instead, every single clue is a perfect anagram of the required German word (often featuring complex compound nouns). Your objective is intensely focused and relies entirely on vocabulary manipulation and rapid letter unscrambling: you must physically type the correct anagram into the grid. The atmosphere is deeply cerebral and intentionally demanding, requiring players to constantly juggle vowels, umlauts, and long consonant clusters in their head to find valid combinations that perfectly intersect. Offering a fresh puzzle every single day, this is the ultimate brain-training routine for German language enthusiasts.

## How to Play
* The primary objective is to completely fill the crossword grid with valid German words.
* Every clue provided in the "Across" (Waagerecht) and "Down" (Senkrecht) lists is a direct anagram of the answer. You must rearrange all the letters to form the solution.
* Use your \`Mouse\` to click on a specific row or column in the grid to highlight it.
* Type the correct answer using your \`Keyboard\`.
* **The Intersections:** The core crossword mechanic remains intact. If you solve a horizontal word, it provides you with free letters for the intersecting vertical words, drastically narrowing the possible anagram solutions.
* A fresh puzzle is generated every 24 hours.

## Tips and Tricks
* **Look for Common Suffixes First:** German words, especially plurals and verbs, frequently end in "EN", "ER", or "UNG". Mentally separate these letters from the anagram clue. If the remaining letters easily form a root word, you have likely solved it instantly.
* **The "SCH" Digraph:** The letter combination "SCH" is incredibly common in German. If your anagram contains an S, a C, and an H, group them together in your mind immediately as a single unit when trying to unscramble the rest of the word.
* **Target the Short Words:** Do not stare at a 12-letter compound noun anagram. Immediately scan the clues for 3-letter or 4-letter anagrams. They have drastically fewer permutations and provide crucial intersection letters.
* **Write it in a Circle:** If you are stuck on a long anagram, write the scrambled letters in a circle on a piece of paper. This breaks your brain's tendency to read them sequentially.
* **Leverage the Umlauts:** If the anagram contains an Ä, Ö, or Ü, it is a massive hint, as these letters often appear in specific grammatical contexts (like plurals) or specific root words.`
  },
  {
    title: "Pet Link",
    seoContent: `![Pet Link](https://www.htmlgames.com/uploaded/game/thumb800/petlink-800x450.webp)

Pet Link (a delightful variation of the classic Onet or Kyodai genre) injects a massive dose of highly structural, geometric pathfinding into the tile-matching formula, wrapping the complex logic in an incredibly cute, vibrant aesthetic featuring cartoon animals. Stepping entirely away from the 3D, overlapping pyramids of standard Mahjong Solitaire, this game places every single tile flat on a massive, single-layer 2D grid. Your objective is not just to find matching pairs of dogs, cats, and bunnies, but to prove that a clear, unobstructed path can physically be drawn between them using a very specific set of routing rules. The atmosphere is deeply engaging, requiring players to constantly weigh the immediate satisfaction of a simple edge match against the necessity of unblocking the dense center of the board. The visual style is exceptionally clean, ensuring perfect readability even when the board is packed with colorful pets. It is a pure test of spatial planning and visual parsing.

## How to Play
* Your primary objective is to clear the entire flat grid by connecting identical pairs of pet tiles before the strict timer runs out.
* Use your \`Mouse\` to click on a tile, then click on a matching tile to attempt a connection.
* **The Golden Pathfinding Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two tiles using a maximum of three straight lines (which means no more than two 90-degree corners).
* You can connect tiles that are sitting directly next to each other, or you can route the path entirely outside the main grid boundary (the empty space surrounding the puzzle).
* If you successfully clear all tiles, you win.

## Tips and Tricks
* **Clear the Perimeter First:** Tiles sitting on the absolute outer edge of the board are by far the easiest to connect, because their path can route freely through the empty space outside the grid using the two-turn rule. Clear the borders instantly to shrink the playable area.
* **Look for the "U" Shape:** The two-turn rule allows for a perfect "U" shape connection. If two identical cats are on the exact same row, but separated by other tiles, check if there is empty space directly above or below both of them to draw the U through the air.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the grid from the outside toward the dense, congested center.
* **Scan by Color:** Because the cartoon pets are brightly colored (e.g., a bright yellow duck, a brown dog), you can quickly filter the board. If you need a yellow duck, completely ignore half the board that contains dark colors.
* **Don't Tunnel Vision:** If you can't find a path for two specific bunnies, stop looking at them. Scan the entire board for an obvious, free match to keep the timer from running down.`
  },
  {
    title: "Saratoga Solitaire",
    seoContent: `![Saratoga Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/saratogasolitaire800x450.webp)

Saratoga Solitaire is a brilliant, highly strategic variation of traditional Klondike Solitaire that fundamentally alters the classic formula by completely stripping away the terrifying element of uncertainty. Set against a clean, visually minimalist green felt table aesthetic, players are presented with the iconic seven-column cascading tableau. However, the catch is massive: every single card dealt onto the tableau at the beginning of the game is dealt completely face-up. There are no hidden, blind cards to gamble on. Your objective remains the same: you must maneuver the cards to build four complete sequences in the foundation piles, from Ace up to King by suit. The atmosphere shifts from a game of chance and risk management to a game of pure, perfect-information calculation, resembling Chess or Freecell. You can see exactly where every single card is located from the very first move. Saratoga Solitaire is an uncompromising test of logic, cascade math, and long-term tactical sacrifice.

## How to Play
* The primary objective is to move all 52 cards into the four foundation piles at the top right, building upward in suit from Ace to King.
* Cards are dealt into seven tableau columns. **Crucially, every single card in the tableau is face-up and visible.**
* Use your \`Mouse\` to click and drag exposed face-up cards between columns.
* **The Tableau Rule:** You can build cards downward on the tableau in **alternating colors** (e.g., a Red 8 can only be placed on a Black 9).
* Only a King (or a valid sequence starting with a King) can be moved into a completely empty tableau column.
* If you have no valid moves on the board, click the face-down draw pile to reveal a new active card.

## Tips and Tricks
* **Calculate the Whole Chain:** Because you can see every card, you have no excuse for making a bad move. Before you move a Black 5 onto a Red 6, you must visually trace the entire chain. Where is the Red 4? Is it accessible? If moving the Black 5 blocks the Red 4 you desperately need, DO NOT make the move.
* **Empty Columns are for Kings:** Do not aggressively clear a column just to have it empty. An empty column is useless unless you currently have a King available (either on the board or coming up in the draw pile) to drop into it to start a massive new sequence.
* **Don't Auto-Play to the Foundations:** Just because you *can* move a Red 6 to the foundation doesn't mean you *should*. Sometimes keeping it on the tableau is absolutely necessary to hold a Black 5 that you desperately need to anchor a stack.
* **Unearth the Aces Early:** Your entire early game must focus heavily on excavating the four Aces so they can be moved to the foundations. Look exactly where they are located and plan the specific series of moves required to free them.
* **Manage the Draw Pile:** Keep track of the cards in the draw pile. If you need a specific 7, and you know it's in the draw pile, organize your tableau to be ready for it when it appears.`
  },
  {
    title: "Country Labyrinth 1",
    seoContent: `![Country Labyrinth 1](https://www.htmlgames.com/uploaded/game/thumb800/countrylabyrinth1800450.webp)

Country Labyrinth 1 strips the spatial puzzle genre down to its absolute, most geographically engaging and elegantly simple core, delivering a digital adaptation of a classic maze-routing problem wrapped in a highly educational, cartographic aesthetic. Set against a clean, visually minimalist grid suspended over beautifully rendered national maps, players are presented with a complex, twisting labyrinth of solid stone walls. Your objective is intensely focused: you are given a starting point (usually a national flag or a specific city marker) and an ending point (the corresponding geographic outline of the country or a specific landmark). You must physically trace the single correct, unbroken path through the dead-ends and winding corridors to connect the two points. The atmosphere is deeply relaxing and intentionally educational, requiring an intense level of forward-thinking, spatial visualization, and process of elimination to avoid getting trapped. Country Labyrinth 1 is a pure test of geometric routing and patience.

## How to Play
* The primary objective is to draw a continuous, unbroken path from the starting flag to the correct destination on the map.
* Use your \`Mouse\` to click on the starting point.
* Drag the mouse through the open corridors of the labyrinth. A brightly colored line will trace your exact path.
* **The Routing Rule:** You absolutely cannot draw through the solid walls of the labyrinth. You must navigate the twists and turns.
* Release the mouse button when you successfully reach the target destination.
* If you drag the line into a dead end, you must retrace your steps backward to physically erase the line and try a different route.

## Tips and Tricks
* **Work Backwards (The Golden Rule):** The absolute most common mistake in massive labyrinths is starting at the beginning. It is almost always mathematically easier to start at the *destination* and trace the path backward toward the starting flag. The destination often has fewer immediate branching paths to confuse you.
* **The "Right-Hand Rule":** If you are completely lost in a massive, screen-filling maze, use the classic right-hand rule. Mentally place your right hand on the wall of the maze and follow it continuously. You will eventually explore every single corridor and find the exit (though it will not be the fastest route).
* **Scan for Dead Ends Early:** Before you even click the mouse, look at the overall shape of the maze. Identify the massive, obvious dead-end sections (large chunks of the maze that only have one entrance/exit). Mentally block those areas off so you don't waste time tracing lines into them.
* **Look for the "Choke Points":** Are there two massive areas of the maze connected by a single, narrow 1-cell wide hallway? That hallway is a choke point, and the correct path MUST pass through it. Route your line directly to that choke point first.
* **Patience:** There is no timer. Do not draw wild, chaotic lines. Trace the path with your eyes before you commit with the mouse.`
  },
  {
    title: "House of Potions",
    seoContent: `![House of Potions](https://www.htmlgames.com/uploaded/game/thumb800/houseofpotion800450.webp)

House of Potions delivers an incredibly atmospheric, visually rich evolution of the classic tile-swapping puzzle (Match-3), fusing the addictive cascade mechanics with a focused, objective-based structure wrapped in a dark, magical, alchemy-themed aesthetic. Set against a backdrop of a wizard's laboratory filled with bubbling cauldrons and spell books, players are tasked with managing a massive grid filled with brightly colored, glowing orbs and magical reagents. Your objective is not just to rack up a high score, but to physically maneuver specific, powerful potion bottles down to the absolute bottom row of the grid so they fall off the board and can be collected. You do this by swapping adjacent orbs to form lines of three or more, shattering the gems beneath the potion bottles to inch them closer to the bottom. The atmosphere is deeply engaging, accompanied by mystical music. The visual presentation is exceptionally polished, utilizing crisp sprites and satisfying magical particle effects.

## How to Play
* The primary objective is to collect all the scattered potion bottles before the strict timer expires.
* The potion bottles are located at the top of the grid, resting on top of regular colored orbs.
* Use your \`Mouse\` to click on an orb, then click an adjacent one to swap their positions, forming a horizontal or vertical line of three or more identical items.
* When the orbs shatter, the potion bottles resting above them will fall down one row due to gravity.
* You must systematically collapse the columns directly beneath the potions until they touch the absolute bottom row of the board, at which point they are collected.

## Tips and Tricks
* **Focus on the Columns, Not the Board:** Your only real objective is the vertical column directly beneath the potion bottle. Completely ignore massive, satisfying 5-orb combos on the left side of the board if the potion is on the right side. Every move must serve the objective of lowering the bottle.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points of the target column. This triggers cascading orbs dropping from the ceiling, often resulting in free, accidental combos that lower the potion automatically without you having to waste a move.
* **Don't Strand the Potion:** The absolute worst thing you can do is accidentally clear all the orbs in a column *except* the ones directly under the potion, stranding it on a tall, narrow pillar of unmatchable colors. Always ensure you have a planned route down.
* **Utilize Power-Ups Strategically:** Matching four or five orbs creates powerful explosive bombs or line-clearing magic. Do not detonate them immediately. Try to maneuver them directly under the potion bottle to blast a massive hole.
* **Clear Obstacles Early:** Later levels introduce chained, locked, or frozen orbs that cannot be moved. Prioritize shattering these immediately, as they act as impenetrable walls.`
  },
  {
    title: "Hidden Food",
    seoContent: `![Hidden Food](https://www.htmlgames.com/uploaded/game/thumb800/hiddenfood800450.webp)

Hidden Food is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core, all wrapped in a mouth-watering, culinary aesthetic. Forget searching for dusty antiques in a haunted house; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within stunningly detailed, high-definition digital illustrations of chaotic kitchens, sprawling banquets, crowded refrigerators, and messy dining tables. Your objective is elegantly simple: locate specific, thematic food items (like a single slice of pizza, a specific donut, or a tiny wedge of cheese) expertly blended into the environment. The atmosphere is deeply relaxing and incredibly focused. Visually, the game opts for a highly detailed, slightly cartoonish aesthetic—crucial for a game relying on visual trickery—ensuring that every disguised French fry and camouflaged strawberry is rendered perfectly to trick the eye. It is the ultimate brain-training routine for acute observation.

## How to Play
* Your primary objective is to find every single food item listed (usually displayed as silhouettes or small icons) hidden within the main high-definition culinary scene.
* Use your \`Mouse\` to carefully scan the high-definition image.
* When you spot a required food item, click directly on it.
* Successfully locating an object will remove it from your list and award you points.
* Be extremely precise! Randomly spam-clicking around the screen will often result in a heavy time penalty or a temporary score deduction.
* Complete the level before the strict time limit expires.

## Tips and Tricks
* **Look for Shapes, Not Colors:** The game often alters the color or texture of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A bright red apple might be tinted brown to perfectly blend into the wood grain of a cutting board.
* **Divide the Screen:** Do not try to scan the entire massive, chaotic image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the crowded spice rack) before moving to the next area.
* **Check the Extremes (Shadows and Corners):** The developers love hiding dark objects inside the deep black shadows beneath plates, or hiding them directly on the absolute outer rim of the screen where players rarely look.
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a hidden hotdog, you will accidentally spot the hidden cupcake.
* **Step Back:** If you are completely stuck on the final item, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the hidden shape suddenly pop out against the background.`
  },
  {
    title: "Tetris Slider",
    seoContent: `![Tetris Slider](https://www.htmlgames.com/uploaded/game/thumb800/tetrisslider800450.webp)

Tetris Slider executes a brilliant, mind-bending fusion of two of the most popular puzzle formats in history, taking the brutal mathematical line-clearing rules of Tetris and applying them directly to a slow-paced, highly strategic sliding block puzzle (similar to 1010! or Block Puzzle). Set against a clean, visually minimalist grid, players are presented with a board partially filled with brightly colored, Tetris-style geometric shapes (Tetrominoes). However, the blocks do not fall from the sky. Instead, your objective is intensely focused on horizontal manipulation: you must physically click and drag individual blocks left or right within their rows to drop them into gaps. When a solid, unbroken horizontal line of blocks is formed, it vanishes, scoring points and dropping the blocks above it. The atmosphere is deeply calculating and intensely strategic, requiring players to possess a masterful understanding of gravity, cascade math, and extreme bottleneck management. Tetris Slider is an uncompromising test of pure spatial logic.

## How to Play
* The primary objective is to survive as long as possible by clearing horizontal lines before the stack of blocks reaches the absolute top of the screen.
* The blocks do not fall automatically.
* Use your \`Mouse\` to click and drag any block horizontally (left or right) into an empty space.
* If you drag a block over a gap, gravity will pull it straight down until it hits another block or the floor.
* **The Clearing Rule:** When you create a solid horizontal line of blocks with no empty gaps, that line completely vanishes.
* After every move you make (regardless of whether you cleared a line), a new row of chaotic, random blocks will spawn from the bottom of the screen, pushing the entire stack upward.

## Tips and Tricks
* **Prioritize the Clear Over the Setup:** If you have a move that instantly clears a line, take it. Do not try to set up a massive, multi-line 4-row clear like in traditional Tetris. Because a new row spawns *every single time you move*, wasting moves on complex setups will result in the board filling up and crushing you instantly.
* **Keep the Board Flat:** Your absolute highest priority is ensuring the top layer of your stack remains as flat and even as possible. Massive spikes and deep, narrow valleys make it incredibly difficult to maneuver and slide blocks.
* **Drop the Big Blocks First:** If a massive, 4-tile long block is sitting precariously on top of a single tile, drag it so it falls flat onto a solid surface. Large blocks create massive overhangs that make clearing the lines beneath them impossible.
* **Calculate the Cascade:** Before you drag a block into a gap, look at the blocks resting on top of it. When the block falls, everything above it falls too. Will that secondary drop create a new line, or will it create a massive spike that ruins your board?
* **Look at the Next Row Indicator:** The game usually shows you a faint preview of the *next* row that is about to push up from the bottom. Use this information to plan where you need empty space.`
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
