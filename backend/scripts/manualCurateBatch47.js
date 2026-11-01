const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Daily Code Words",
    seoContent: `![Daily Code Words](https://www.htmlgames.com/uploaded/game/thumb800/daily-codewords-800x450.webp)

Daily Code Words completely reconstructs the traditional crossword puzzle genre by brutally stripping away all trivia-based clues and definitions, replacing them with a highly logical, cryptogram-style mathematical substitution cipher. Set against a clean, visually minimalist grid that visually resembles a standard crossword, players are presented with a massive grid of blank squares. However, the catch is brilliant: every single white square contains a specific number ranging from 1 to 26. Each number represents exactly one letter of the English alphabet. Your objective is intensely focused and relies entirely on deductive logic and vocabulary pattern recognition: you must decode the numerical cipher to fill the entire grid with valid English words. The game usually provides a starting hint (e.g., "14 = E"). From there, you must use your knowledge of common prefixes, suffixes, and letter frequencies to crack the rest of the code. Offering a fresh, algorithmically generated set of puzzles every day, this is the ultimate brain-training routine for cryptography fans.

## How to Play
* The primary objective is to fill the entire crossword grid with valid English words by decoding the numerical cipher.
* The grid is filled with numbers (1-26). Every identical number represents the exact same letter throughout the entire puzzle.
* Use your \`Mouse\` to click on a square in the grid.
* Type a letter using your \`Keyboard\` to assign that letter to the selected number.
* When you assign a letter (e.g., mapping 'T' to the number '8'), the game will automatically fill in 'T' in every single square marked '8' across the board.
* **The Deduction Rule:** Use your knowledge of English word structure. If you have a 3-letter word that ends in 'E', and the first number is used frequently throughout the puzzle, it might be 'T' (THE) or 'S' (SHE).

## Tips and Tricks
* **Leverage the Vowels First (The Golden Rule):** The letters E, A, O, I, and U are the most common letters in the English language. Look at the numbers that appear most frequently on the board. One of them is almost certainly 'E'. If a number appears by itself as a single-letter word, it is mathematically guaranteed to be 'A' or 'I'.
* **Hunt for Suffixes:** Look at the ends of long words. A very common 3-number pattern at the end of a word is often I-N-G or I-O-N. If you suspect a 3-letter sequence is ING, assign those letters and see if it makes sense in the intersecting words.
* **Double Letters:** Look for identical numbers sitting next to each other (e.g., a word containing '4-4'). The most common double consonants are L, S, T, and P. The most common double vowels are E and O.
* **The "Q" Rule:** If you discover the letter 'Q', immediately find the number following it and assign it 'U'. This is one of the few absolute guarantees in English cryptography.
* **Use Process of Elimination:** The game usually displays the alphabet at the bottom of the screen, crossing off letters you have already used. If you need a vowel and 'E' and 'A' are already assigned, your options are drastically narrowed.`
  },
  {
    title: "Tiles of Egypt",
    seoContent: `![Tiles of Egypt](https://www.htmlgames.com/uploaded/game/thumb800/tilesofegypt800450.webp)

Tiles of Egypt completely revolutionizes the massively popular "Mahjong Solitaire" formula by abandoning the traditional pairing mechanic and replacing it with a highly addictive, inventory-based "Match-3" collection system wrapped in a breathtaking, deeply historical Ancient Egyptian aesthetic. Instead of simply clicking two exposed tiles to clear them, you are presented with a massive, overlapping 3D pyramid constructed of crisp stone tiles featuring hieroglyphics, Anubis jackals, scarab beetles, and the Eye of Horus. Your objective is intensely focused: you must click tiles to move them down into a stone holding tray located at the bottom of the screen. When exactly three IDENTICAL thematic tiles are placed in the tray, they instantly merge and disappear. The atmosphere is deeply calculating and immensely satisfying, perfectly simulating the tactical tension of inventory management while accompanied by ambient, mysterious desert music. The visual presentation is exceptionally polished, ensuring the complex, overlapping layers remain perfectly readable. Tiles of Egypt is a brilliant test of sequence planning.

## How to Play
* The primary objective is to completely dismantle the overlapping structure by moving all tiles into your holding tray in groups of three.
* Use your \`Left Mouse Button\` to click any fully exposed tile on the main board to instantly drop it into your holding tray at the bottom.
* A tile is strictly considered "exposed" if absolutely no other tile is resting directly on top of it.
* Your holding tray can only hold a maximum of SEVEN tiles at any given time.
* **The Rules of Removal:** When exactly three IDENTICAL tiles are sitting anywhere in your holding tray, they will automatically merge and be removed, freeing up crucial space.
* The game is immediately over if your tray reaches its 7-tile limit without triggering a match.

## Tips and Tricks
* **Manage Your Tray Space (The Golden Rule):** Treat your holding tray like pure gold. Never have more than four "unmatched" singleton tiles sitting in your tray at once. Always leave two or three empty slots so you have the flexibility to dig through the pile for the matches you actually need.
* **Dig for the Third Piece:** If you have two Scarab tiles in your tray, your absolute highest priority is finding the third Scarab tile to clear them. It is acceptable to temporarily fill your tray with blocking items, *provided* that reaching the buried Scarab instantly triggers a clear and frees the space again.
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles in the center of the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of options.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal options and reveals more hidden tiles simultaneously.
* **Don't Panic Click:** The timer is secondary to survival. Clicking randomly to reveal tiles will instantly fill your tray and end the game.`
  },
  {
    title: "Haunted House Hidden Objects",
    seoContent: `![Haunted House Hidden Objects](https://www.htmlgames.com/uploaded/game/thumb800/hauntedhousehiddenobjects800450.webp)

Haunted House Hidden Objects is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core, all wrapped in a brooding, perfectly executed horror aesthetic. Forget sterile modern detective storylines; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within stunningly detailed, high-definition digital illustrations of decrepit mansions, overgrown graveyards, dusty attics, and cobwebbed libraries. Your objective is elegantly simple: locate specific, thematic items expertly blended into the macabre environments. The atmosphere is deeply immersive and intentionally tense, accompanied by the ambient sounds of creaking floorboards, distant thunder, and howling wind. Visually, the game opts for a highly realistic, shadows-heavy aesthetic—crucial for a game relying on visual trickery—ensuring that every disguised candlestick and camouflaged skull is rendered with breathtaking clarity. It is the ultimate brain-training routine for acute observation under pressure.

## How to Play
* Your primary objective is to find every single item listed (either as text or silhouettes) hidden within the main high-definition scenes of the haunted house.
* Use your \`Mouse\` to carefully scan the high-definition image.
* When you spot a required object, click directly on it.
* Successfully locating an object will remove it from your list and award you points.
* Be extremely precise! Randomly spam-clicking around the screen will often result in a heavy time penalty, a score deduction, or sometimes a sudden jump scare.
* Complete the level before the strict time limit expires.

## Tips and Tricks
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A modern flashlight might be tinted dark brown to blend perfectly into the wooden leg of an antique chair.
* **Divide the Screen:** Do not try to scan the entire massive, chaotic image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the dusty bookshelf on the left) before moving to the next.
* **Check the Extremes (Shadows and Glare):** The developers love hiding dark objects inside the deep black shadows beneath staircases, or hiding bright objects directly inside the blown-out glare of a lightning flash in the window. Adjust your monitor brightness!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a hidden key, you will accidentally spot the hidden pocket watch.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Dagelijks Codewoord",
    seoContent: `![Dagelijks Codewoord](https://www.htmlgames.com/uploaded/game/thumb800/dagelijkscodewoord-800x450.webp)

Dagelijks Codewoord completely reconstructs the traditional crossword puzzle genre by brutally stripping away all trivia-based clues and definitions, replacing them with a highly logical, cryptogram-style mathematical substitution cipher, completely localized for Dutch speakers. Set against a clean, visually minimalist grid that visually resembles a standard crossword, players are presented with a massive grid of blank squares. However, the catch is brilliant: every single white square contains a specific number. Each number represents exactly one letter of the Dutch alphabet. Your objective is intensely focused and relies entirely on deductive logic and Dutch vocabulary pattern recognition: you must decode the numerical cipher to fill the entire grid with valid Dutch words. The game usually provides a starting hint (e.g., "14 = E"). From there, you must use your knowledge of common Dutch prefixes, suffixes, and letter frequencies to crack the rest of the code. Offering a fresh set of puzzles every day, this is the ultimate logic routine.

## How to Play
* The primary objective is to fill the entire crossword grid with valid Dutch words by decoding the numerical cipher.
* The grid is filled with numbers. Every identical number represents the exact same letter throughout the entire puzzle.
* Use your \`Mouse\` to click on a square in the grid.
* Type a letter using your \`Keyboard\` to assign that letter to the selected number.
* When you assign a letter, the game will automatically fill in that letter in every single square sharing that number across the board.
* **The Deduction Rule:** Use your knowledge of Dutch word structure. If you have a word ending in 'E' and the next letter is the most common number, it might be an 'N' (EN).

## Tips and Tricks
* **Leverage the 'E' First (The Golden Rule):** The letter 'E' is overwhelmingly the most common letter in the Dutch language, followed closely by 'N'. Look at the numbers that appear most frequently on the board, particularly at the ends of words. The most frequent number is almost certainly 'E'.
* **Hunt for the "EN" Suffix:** Plural nouns and verbs in Dutch almost universally end in "EN". If you see a two-number pattern repeating frequently at the ends of longer words, try assigning 'E' and 'N' to them.
* **Double Letters:** Dutch uses double vowels (AA, EE, OO, UU) and double consonants heavily to dictate pronunciation. Look for identical numbers sitting next to each other.
* **The "IJ" Digraph:** While sometimes treated as a single letter in Dutch crosswords, if it is split, look for the 'I' and 'J' combination.
* **Use Process of Elimination:** The game usually displays the alphabet at the bottom of the screen, crossing off letters you have already used. If you need a vowel and 'E' and 'A' are already assigned, your options are drastically narrowed to O, I, U, or IJ.`
  },
  {
    title: "Palabra de Código Del Dia",
    seoContent: `![Palabra de Código Del Dia](https://www.htmlgames.com/uploaded/game/thumb800/palabra-codigo-dia-800x450.webp)

Palabra de Código Del Dia completely reconstructs the traditional crossword puzzle genre by brutally stripping away all trivia-based clues and definitions, replacing them with a highly logical, cryptogram-style mathematical substitution cipher, completely localized for Spanish speakers. Set against a clean, visually minimalist grid that visually resembles a standard crossword, players are presented with a massive grid of blank squares. However, the catch is brilliant: every single white square contains a specific number. Each number represents exactly one letter of the Spanish alphabet. Your objective is intensely focused and relies entirely on deductive logic and Spanish vocabulary pattern recognition: you must decode the numerical cipher to fill the entire grid with valid Spanish words. The game usually provides a starting hint (e.g., "14 = A"). From there, you must use your knowledge of common Spanish prefixes, suffixes, and letter frequencies to crack the rest of the code. Offering a fresh set of puzzles every day, this is the ultimate logic routine.

## How to Play
* The primary objective is to fill the entire crossword grid with valid Spanish words by decoding the numerical cipher.
* The grid is filled with numbers. Every identical number represents the exact same letter throughout the entire puzzle.
* Use your \`Mouse\` to click on a square in the grid.
* Type a letter using your \`Keyboard\` to assign that letter to the selected number.
* When you assign a letter, the game will automatically fill in that letter in every single square sharing that number across the board.
* **The Deduction Rule:** Use your knowledge of Spanish word structure. If you have a short word ending in a vowel, and the first letter is a common consonant, you can start deducing prefixes.

## Tips and Tricks
* **Leverage the Vowels First (The Golden Rule):** The letters A, E, and O are overwhelmingly the most common letters in the Spanish language. Look at the numbers that appear most frequently on the board, particularly at the ends of words. The most frequent numbers are almost certainly these vowels.
* **Hunt for the "OS" and "AS" Suffixes:** Plural nouns and adjectives in Spanish universally end in "OS" or "AS". If you see a two-number pattern repeating frequently at the ends of longer words, try assigning 'O' and 'S' or 'A' and 'S' to them.
* **The "QUE" Rule:** If you discover the letter 'Q', immediately find the number following it and assign it 'U', and the number after that is almost always 'E' or 'I'. This is one of the few absolute guarantees in Spanish cryptography.
* **Double Consonants:** Spanish has very few double consonants compared to English (mostly LL, RR, CC). If you see double numbers, test these specific letters.
* **Use Process of Elimination:** The game displays the alphabet at the bottom of the screen. If you need a vowel and A and E are assigned, focus on O, I, and U.`
  },
  {
    title: "Ice Blocks",
    seoContent: `![Ice Blocks](https://www.htmlgames.com/uploaded/game/thumb800/iceblock800450.webp)

Ice Blocks delivers the absolute purest, most delightfully unadulterated distillation of the legendary "Bubble Shooter" arcade formula, completely stripping away the bloated narratives and wrapping the core mechanics in a crisp, deeply satisfying arctic aesthetic. This is the genre exactly as it was meant to be played: a massive ceiling of brightly colored, perfectly rendered frozen geometric blocks, a single aiming cannon at the bottom, and an unrelenting pursuit of massive, structure-collapsing chain reactions. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core geometric shooting mechanic accompanied by the satisfying sound of shattering ice. You are tasked with calculating angles, bouncing shots off the sidewalls, and grouping specific colors to trigger massive structural collapses before the weight of the glacier crushes your launcher. The visual presentation is highly polished, utilizing crisp, high-definition sprites that crackle with frozen energy. Ice Blocks is a pure test of geometric calculation.

## How to Play
* The primary objective is to clear the entire screen of ice blocks before the ceiling physically lowers and crushes your cannon.
* You control a cannon at the bottom of the screen holding a specific colored ice block.
* Use your \`Mouse\` to aim the trajectory line.
* Click the \`Left Mouse Button\` to fire your ice block up into the frozen cluster.
* When your fired block connects with a cluster of two or more blocks of the EXACT SAME color, the entire connected group will shatter and disappear.
* If you shoot and fail to make a match a certain number of times, the entire ceiling will shift downward by one row, reducing your playable space.

## Tips and Tricks
* **Master the Bank Shot (The Golden Rule):** You cannot always shoot straight. You MUST learn to bounce your ice blocks off the left and right walls of the play area to ricochet them into tight, otherwise unreachable gaps near the top of the structure.
* **Sever the Root:** Do not just shoot at the lowest hanging blocks. Look for the "structural joints"—small clusters of identical blocks holding up massive, mixed-color chunks below them. If you destroy the joint, the entire massive chunk below it falls instantly, granting huge points.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* block color. Knowing what you have in reserve completely dictates where you should place your current shot to set up the next combo.
* **Don't Build Walls:** If you have a red block and no red clusters are visible, do not just shoot it directly into the middle of the board, blocking other colors. Shoot it off to the extreme left or right edge to keep the center channels open.
* **Clear Colors Completely:** If there are only two blue blocks left on the entire board, prioritize eliminating them immediately. Once a specific color is entirely gone, the game will stop generating it in your cannon.`
  },
  {
    title: "Hidden Spots - Jewelry",
    seoContent: `![Hidden Spots - Jewelry](https://www.htmlgames.com/uploaded/game/thumb800/hiddenspots-jewelry800450.webp)

Hidden Spots - Jewelry is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core, all wrapped in a breathtaking, high-fashion aesthetic. Forget convoluted detective storylines or searching for random household items; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within stunning macro-photography of priceless gems, ornate necklaces, diamond rings, and glittering gold chains. Your objective is elegantly simple: you are not looking for specific objects, but rather specific "spots" or tiny cropped segments of the main image displayed at the bottom of the screen. You must meticulously scan the massive, highly reflective photograph to find the exact location of that tiny detail. The atmosphere is deeply relaxing and incredibly focused. Visually, the game utilizes hyper-realistic, high-definition photography, meaning every facet of a diamond and reflection of light is a potential clue.

## How to Play
* Your primary objective is to locate specific, tiny cropped segments (spots) hidden within the main high-definition photograph of the jewelry.
* The spots you need to find are displayed in a queue at the bottom or side of the screen.
* Use your \`Mouse\` to carefully scan the high-definition image.
* When you find the exact location in the main image that matches the small cropped spot, click directly on it.
* Successfully locating a spot will remove it from your list and award you points.
* Be extremely precise! Randomly spam-clicking around the screen will often result in a heavy time penalty or score deduction.

## Tips and Tricks
* **Look for Unique Reflections:** Do not try to memorize the entire cropped spot. Jewelry photography is dominated by lighting. Identify one highly unique reflection or color gradient within the spot (e.g., a very specific jagged edge of a green emerald overlapping a gold chain). Scan the main image strictly for that one specific intersection of colors.
* **Divide the Screen:** Do not try to scan the entire massive, glittering image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the clasp of the necklace) before moving to the next.
* **Check the Edges:** The developers love placing the cropped spots on the absolute extreme borders of the main image, or blurring them slightly by hiding them in the depth-of-field background of the macro photography.
* **Step Back:** If you are completely stuck on a spot, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the micro-detail suddenly pop into context.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone.`
  },
  {
    title: "Tangrams",
    seoContent: `![Tangrams](https://www.htmlgames.com/uploaded/game/thumb800/tangrams800450.webp)

Tangrams strips the spatial logic puzzle genre down to its absolute, most mathematically pure and elegantly simple core, delivering a flawless digital adaptation of the ancient Chinese dissection puzzle. Set against a clean, visually minimalist grid, players are presented with a specific silhouette (the target shape) and exactly seven flat, brightly colored geometric pieces (tans): five triangles of various sizes, one square, and one parallelogram. Your objective is intensely focused and brutally unforgiving: you must physically drag, rotate, and mirror these seven pieces to perfectly recreate the target silhouette without any pieces overlapping, and you must use absolutely all seven pieces. The atmosphere is deeply cerebral and intentionally demanding, requiring an intense level of forward-thinking, geometric routing, and spatial visualization. The visual presentation is highly functional, utilizing crisp, contrasting colors to ensure the complex geometry remains perfectly readable. Tangrams is the ultimate brain-training routine for spatial reasoning.

## How to Play
* The primary objective is to fill the given target silhouette perfectly using all seven geometric pieces.
* Use your \`Mouse\` to click and hold a colored piece to drag it around the board.
* **Rotation:** Click or tap a piece (without dragging) to rotate it incrementally.
* **Mirroring:** Double-click (or use a specific UI button) on the parallelogram to flip/mirror it horizontally. (The other shapes are symmetrical and do not need mirroring).
* Place the pieces into the silhouette. The pieces absolutely CANNOT overlap each other.
* The puzzle is solved when the silhouette is completely filled and no pieces remain outside.

## Tips and Tricks
* **Place the Large Triangles First (The Golden Rule):** The two massive triangles are the hardest pieces to fit because their sheer size severely limits their valid placements. Always identify where these two pieces must go first. They usually form the bulky core of the shape (like the body of an animal or the roof of a house).
* **Look for Right Angles:** Five of the seven pieces are right-angled triangles, and one is a square. Look at the target silhouette and identify the sharp 90-degree corners. Those corners MUST be filled by the points of the triangles or the square.
* **The Parallelogram is the Key:** The parallelogram is the only piece that is not symmetrical. It is almost always the trickiest piece to place because it often requires mirroring to fit specific diagonal slopes on the silhouette.
* **Break Down the Silhouette:** Do not look at the shape as a "Swan." Look at the neck of the swan and ask yourself, "What combination of my pieces can make a long, thin rectangle with a slanted top?" (Usually a square and a small triangle).
* **Reset if Stuck:** If you have five pieces jammed together and the last two don't fit, pull everything out and start over. It is faster to execute a fresh mental plan than to tweak a fundamentally flawed arrangement.`
  },
  {
    title: "Color Circle",
    seoContent: `![Color Circle](https://www.htmlgames.com/uploaded/game/thumb800/colorcircle800450.webp)

Color Circle strips the reflex-arcade genre down to its absolute, most tension-fueled and visually demanding core, delivering a pure, unadulterated test of rapid pattern recognition, rhythmic timing, and split-second manual dexterity. Moving entirely away from complex narratives or deep upgrade trees, this title focuses entirely on a highly stylized, minimalist environment depicting a massive, segmented wheel comprised of brightly colored slices. Your objective is brutally elegant: a spinning pointer (or a ball) constantly rotates around the outside of the wheel. The center of the wheel will flash a specific target color (e.g., Red). You must aggressively focus on the pointer and click EXACTLY when the pointer is hovering over the Red segment of the wheel. The atmosphere is deeply kinetic; acceleration is a constant, unrelenting force, and the game rapidly spirals into a chaotic test of hand-eye coordination as the direction, speed, and target colors change instantly. Color Circle is a flawless tactical rhythm experience.

## How to Play
* The primary objective is to successfully stop the pointer on the correct colored segment to score points and advance to the next rotation.
* A massive, multi-colored circle sits in the center of the screen.
* A pointer (or arrow) orbits the outside of the circle continuously.
* The center of the circle (or a UI text prompt) will display the target color you must hit.
* Use your \`Left Mouse Button\` (or tap the screen) EXACTLY when the moving pointer is on top of the correct colored segment.
* **The Twist:** Every single time you successfully hit the target, the pointer will often instantly reverse its direction, increase its speed, and a new target color will be assigned.
* Clicking on the wrong color results in an instant game over.

## Tips and Tricks
* **Embrace the Rhythm (Don't Look, Feel):** At high speeds, your eyes cannot process the movement fast enough to react visually. You must internalize the rhythm of the spinning pointer. Tap to the beat, like a metronome, rather than relying purely on sight.
* **Anticipate the Reversal:** The absolute hardest part of the game is the instant direction change. Immediately after you click, your brain must instantly flip its tracking direction. Anticipate the bounce before it happens.
* **Track the Target, Not the Pointer:** Do not follow the fast-moving pointer with your eyes. Keep your eyes locked dead on the specific colored segment you need to hit, and wait for the pointer to enter your field of vision. This drastically reduces eye strain.
* **Minimize Input Lag:** If you are using a wireless mouse with heavy input delay, you will struggle immensely. A wired mouse or a direct touch-screen tap is optimal for this game.
* **Take a Break:** This game causes severe tunnel vision. If you fail a level ten times in a row, physically look away from the screen for 30 seconds to reset your visual tracking.`
  },
  {
    title: "Tägliches Codewort",
    seoContent: `![Tägliches Codewort](https://www.htmlgames.com/uploaded/game/thumb800/tagliches-codewort-800x450.webp)

Tägliches Codewort completely reconstructs the traditional crossword puzzle genre by brutally stripping away all trivia-based clues and definitions, replacing them with a highly logical, cryptogram-style mathematical substitution cipher, completely localized for German speakers. Set against a clean, visually minimalist grid that visually resembles a standard crossword, players are presented with a massive grid of blank squares. However, the catch is brilliant: every single white square contains a specific number. Each number represents exactly one letter of the German alphabet (often including umlauts like Ä, Ö, Ü). Your objective is intensely focused and relies entirely on deductive logic and German vocabulary pattern recognition: you must decode the numerical cipher to fill the entire grid with valid German words. The game usually provides a starting hint (e.g., "14 = E"). From there, you must use your knowledge of common German prefixes, suffixes, and letter frequencies to crack the code. Offering fresh puzzles daily, this is the ultimate logic routine.

## How to Play
* The primary objective is to fill the entire crossword grid with valid German words by decoding the numerical cipher.
* The grid is filled with numbers. Every identical number represents the exact same letter throughout the entire puzzle.
* Use your \`Mouse\` to click on a square in the grid.
* Type a letter using your \`Keyboard\` to assign that letter to the selected number.
* When you assign a letter, the game will automatically fill in that letter in every single square sharing that number across the board.
* **The Deduction Rule:** Use your knowledge of German word structure. If you have a long word ending in a two-number pattern, it is highly likely to be the common "EN" or "ER" suffix.

## Tips and Tricks
* **Leverage the 'E' First (The Golden Rule):** The letter 'E' is overwhelmingly the most common letter in the German language, followed closely by 'N'. Look at the numbers that appear most frequently on the board, particularly at the ends of words. The most frequent number is almost certainly 'E'.
* **Hunt for the "EN" and "ER" Suffixes:** Plural nouns and verbs in German almost universally end in "EN" or "ER". If you see a two-number pattern repeating frequently at the ends of longer words, try assigning 'E' and 'N' or 'E' and 'R' to them.
* **The "SCH" Digraph:** German uses the three-letter combination "SCH" incredibly frequently. If you see a three-number sequence at the beginning of several words, test S-C-H.
* **Double Consonants and Vowels:** German uses double consonants (LL, MM, NN, TT) heavily. If you see double numbers, test these specific letters.
* **Use Process of Elimination:** The game usually displays the alphabet at the bottom of the screen. If you need a vowel and 'E' and 'A' are already assigned, your options are drastically narrowed to O, I, U, or the Umlauts.`
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
