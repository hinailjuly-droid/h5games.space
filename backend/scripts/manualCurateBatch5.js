const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Picture Words",
    seoContent: `![Picture Words](https://www.htmlgames.com/uploaded/game/thumb800/picturewords800450.webp)

Picture Words strips the educational vocabulary genre down to its absolute, most captivating core, delivering a pure, highly visual test of language recognition and spelling proficiency. In an era dominated by over-complicated educational tools, this game beautifully resurrects the intimate, satisfying nature of classic flashcard learning, supercharged with modern digital mechanics. Set against a clean, visually minimalist backdrop, the game presents you with a single, high-definition image and a scrambled jumble of alphabetical tiles. The objective is elegant yet demanding: visually identify the object, and then physically connect the scattered letters in the correct sequence to spell its English name. The atmosphere is purely focused; there are no distracting timers or punishing fail states, allowing players to learn at their own pace. The visual style is highly appealing, utilizing incredibly crisp photography and snappy, satisfying letter-linking animations. Picture Words is an absolute triumph of accessible educational design, providing an endlessly replayable tool for vocabulary building that is as highly addictive as it is academically beneficial.

## How to Play
* The primary objective is to correctly spell the English word that describes the large image displayed in the center of the screen.
* Examine the scrambled letter tiles scattered around the bottom of the play area.
* Use your \`Mouse\` to click and drag a continuous line from the first letter of the word, through the subsequent letters, until the word is complete.
* Release the \`Left Mouse Button\` when you have connected all the necessary letters in the exact correct order.
* If your spelling is correct, the letters will lock in, and you will advance to the next challenging image.

## Tips and Tricks
* **Count the Blanks:** Before you even start looking at the scrambled letters, look at the blank spaces provided for the answer. Knowing the exact length of the target word instantly eliminates dozens of incorrect guesses.
* **Identify the Suffixes:** If you see an "I", "N", and "G" in the jumble, and the picture shows an action (like running), it is highly probable the word ends in "-ING". 
* **Find the Vowels First:** The English language relies heavily on vowels. Locate the "A, E, I, O, U" tiles first to mentally construct the phonetic structure of the word.
* **Think Laterally:** If the picture shows a dog, and the letters for "D-O-G" aren't there, think of synonyms or specific breeds (e.g., "HOUND", "PUPPY", "PET").
* **Trace the Path:** Because you have to draw a continuous line, the last letter of the word MUST be physically adjacent to the second-to-last letter in the jumble.`
  },
  {
    title: "Huge Mahjong",
    seoContent: `![Huge Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/hugemahjong800450.webp)

Huge Mahjong takes the ancient, methodical traditions of the classic Chinese tile-matching game and violently scales them up to an unprecedented, almost intimidating level of complexity. Moving far beyond the standard, manageable 144-tile layouts of traditional solitaire games, this title constructs impossibly massive, sprawling architectural formations that completely fill your screen and demand an extreme level of focus. The atmosphere is deeply cerebral and surprisingly intense; you are no longer just solving a puzzle, you are undertaking a massive excavation project, meticulously dismantling multi-layered pyramids of beautifully illustrated tiles. The visual presentation is a standout, boasting high-definition, traditional Mahjong iconography that manages to remain incredibly crisp and readable even when the board is choked with hundreds of tiles. The sheer scale of the puzzle forces you to adopt entirely new strategic approaches, as blindly matching the first pair you see will almost certainly result in a dead-end hours later. Huge Mahjong is the ultimate, uncompromising test of spatial awareness and long-term cascade planning.

## How to Play
* Your objective is to completely clear the massive board by matching identical pairs of traditional Mahjong tiles.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to eliminate both from the structure.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its left or right vertical sides.
* Because the level is so massive, matching tiles on the top layers is absolutely critical to reveal and unlock the hundreds of hidden tiles buried beneath them.
* You win only when the entire screen is cleared. If you run out of valid, accessible matches, you fail.

## Tips and Tricks
* **The High Ground:** On a board this massive, the highest peaks of the tile structure are your absolute first priority. Leaving tall, thick stacks for the late game guarantees failure.
* **Delayed Gratification:** If you see an easy match on the outer edges of the board, ignore it. Save those edge pieces! You will desperately need them later to match a tile that is deeply buried in the center.
* **Unlock Multipliers:** Always prioritize matching a pair if it results in *two* new tiles becoming free, rather than matching a pair that only frees up one.
* **Memorize the Seasons:** The seasonal tiles (Spring, Summer, Autumn, Winter) and the flower tiles can be matched with *any* other tile in their specific set. Do not waste time looking for identical copies.
* **Scan Methodically:** Do not let your eyes dart randomly around the massive board. Scan methodically from top to bottom, left to right, to ensure you don't miss obscure pairings.`
  },
  {
    title: "Imagen Palabra",
    seoContent: `![Imagen Palabra](https://www.htmlgames.com/uploaded/game/thumb800/imagen-palabra-800x450.webp)

Imagen Palabra delivers a brilliantly intuitive, highly visual approach to Spanish language learning, stripping away the boredom of traditional textbooks and replacing it with an addictive, tactile puzzle experience. Set against a vibrant, culturally resonant backdrop, the game presents players with striking, high-definition photography alongside a scrambled grid of alphabetical tiles. The core objective is deeply engaging: you must visually identify the object in the image and physically connect the scattered letters to spell its exact Spanish translation. The atmosphere is relaxed yet intellectually stimulating, completely devoid of punishing timers, allowing players to genuinely absorb the vocabulary at their own pace. The visual style is exceptionally polished, utilizing crisp typography and satisfying, glowing animations that reinforce positive learning when a word is correctly spelled. Imagen Palabra is not just a game; it is a meticulously crafted educational tool that uses the mechanics of line-drawing puzzles to burn Spanish vocabulary into your long-term memory.

## How to Play
* The primary objective is to correctly spell the Spanish word that accurately describes the large image displayed on your screen.
* Carefully examine the scrambled letter tiles scattered around the bottom play area.
* Use your \`Mouse\` to click and drag a continuous, unbroken line from the first letter of the Spanish word through the subsequent letters until the spelling is complete.
* Release the \`Left Mouse Button\` when you have connected all the necessary letters in the exact correct sequence.
* Successfully spelling the word locks the letters in place and immediately advances you to the next vocabulary challenge.

## Tips and Tricks
* **Count the Character Spaces:** Before analyzing the letters, look at the blank spaces provided for the answer. Knowing the exact length of the target Spanish word instantly eliminates incorrect phonetic guesses.
* **Identify Spanish Suffixes:** Familiarize yourself with common Spanish word endings. If you see an "O" or an "A" tile, it is highly likely it belongs at the very end of the word to denote gender.
* **Look for Double Letters:** Unlike English, Spanish has specific rules for double letters (like "LL" or "RR"). If you see two "L" tiles, keep an eye out for words that require that specific phonetic sound.
* **Trace the Connecting Path:** Because you must draw a continuous line, the last letter of the word MUST be physically adjacent to the second-to-last letter in the jumbled grid. Use this spatial limitation to your advantage.
* **Use Process of Elimination:** If you don't know the word, start connecting the most logical prefixes and suffixes. Often, the remaining letters in the grid will reveal the root word to you.`
  },
  {
    title: "Plaatjes Woorden",
    seoContent: `![Plaatjes Woorden](https://www.htmlgames.com/uploaded/game/thumb800/plaatjes-woorden-800x450.webp)

Plaatjes Woorden offers a visually stunning, highly engaging entry point into Dutch vocabulary building, completely reinventing the classic flashcard system for the modern digital era. By merging language education with the wildly popular mechanics of line-drawing puzzles, this game creates a learning environment that feels genuinely rewarding rather than purely academic. The player is presented with a crisp, high-definition photograph and a chaotic jumble of alphabetical tiles. The task is straightforward but demands linguistic precision: identify the object and connect the letters to perfectly spell its Dutch name. The atmosphere is intentionally calming and focused, stripping away any stressful countdown timers to ensure players have the time to properly process and memorize the new vocabulary. The visual presentation is clean and highly readable, utilizing sharp fonts and satisfying audio cues that trigger upon successful completion of a word. Plaatjes Woorden is an absolute triumph of "edutainment," proving that learning a new language can be an intensely addictive puzzle experience.

## How to Play
* Your goal is to correctly spell the Dutch word that corresponds to the large, high-definition image shown on the screen.
* Look at the scrambled letter tiles provided at the bottom of the interface.
* Use your \`Mouse\` to click on the first letter of the word, and drag a continuous line through the adjacent letters to spell it out.
* You can connect letters horizontally, vertically, and diagonally, but the line cannot be broken.
* Release the \`Left Mouse Button\` once the entire Dutch word is highlighted. If correct, you will progress to the next puzzle.

## Tips and Tricks
* **Master Dutch Vowel Combinations:** The Dutch language relies heavily on double vowels (like "AA", "EE", "OO", "UU") and diphthongs (like "IE", "EI", "IJ", "OE"). Scan the board for these specific combinations first.
* **Count the Blanks First:** Always look at the empty spaces before looking at the letters. Knowing you need a 5-letter word completely changes how you approach a grid of 9 letters.
* **Identify the Diminutives:** Dutch uses diminutives extensively (words ending in "-je", "-tje", "-pje"). If you see a "J" and an "E" tile, the word might be a smaller version of the object shown.
* **Work Backwards:** If you are stuck, try to identify what the very last letter of the word must be. Since you have to draw a continuous line, finding the end point can help you reverse-engineer the path.
* **Think Contextually:** If the picture is a tree, but the letters for "boom" aren't there, think of related terms like branch, leaf, or forest in Dutch.`
  },
  {
    title: "Imagen Palavra",
    seoContent: `![Imagen Palavra](https://www.htmlgames.com/uploaded/game/thumb800/imagen-palavra-800x450.webp)

Imagen Palavra brilliantly fuses the addictive mechanics of modern line-connection puzzles with the rigorous demands of Portuguese vocabulary acquisition, creating an educational tool that feels entirely like a premium gaming experience. Moving away from the rote memorization of traditional language apps, this title forces players to actively engage with the spelling and structure of Portuguese words in a highly tactile way. You are confronted with a vibrant, high-quality photograph and a grid of scrambled letters. Your mission is to visually decipher the image and physically trace a path through the letters to construct the correct Portuguese translation. The atmosphere is deeply engaging yet completely unpressured, lacking any stressful fail states, which encourages pure, uninterrupted learning. The visual style is crisp and modern, featuring snappy animations and clear typography that ensures the letters are always perfectly legible. Imagen Palavra is a masterclass in disguised learning, utilizing the dopamine hit of solving a puzzle to permanently cement new vocabulary into your brain.

## How to Play
* The core objective is to spell the correct Portuguese word that describes the image displayed in the center of your screen.
* Analyze the grid of scrambled letter tiles located below the image.
* Use your \`Mouse\` to click and hold on the first letter of the word, then drag your cursor through adjacent letters to spell the word in sequence.
* The connecting line can move in any direction (up, down, left, right, or diagonal) as long as the tiles are touching.
* Release the \`Left Mouse Button\` when the spelling is complete to submit your answer and move to the next level.

## Tips and Tricks
* **Focus on Nasal Vowels:** Portuguese makes heavy use of nasal sounds often indicated by an "M" or "N" at the end of a syllable, or a tilde (~). If you see an "M" tile, it's highly likely it belongs at the end of the word.
* **Check the Word Length:** Always count the number of blank spaces provided. If you think the picture is a "Cachorro" (8 letters) but there are only 3 blanks, you need to look for "Cão".
* **Identify the Suffixes:** Look for common Portuguese word endings like "-ção" or "-dade". Finding these tiles grouped together gives you a massive advantage in mapping the line.
* **Map the End Point:** Because the line must be continuous, the final letter of the word must physically touch the second-to-last letter. Use this geometric constraint to eliminate impossible paths.
* **Don't Rush:** There is no timer. Take a moment to mentally sound out the word before you start dragging your mouse to avoid confusing the pathing engine.`
  },
  {
    title: "Big Tripeaks",
    seoContent: `![Big Tripeaks](https://www.htmlgames.com/uploaded/game/thumb800/bigtripeaks800450.webp)

Big Tripeaks takes the beloved, fast-paced mechanics of classic Tripeaks solitaire and injects them with a massive dose of scale and complexity, delivering a card-sorting experience that is truly epic in its proportions. Moving far beyond the standard three-pyramid layout, this game constructs sprawling, multi-layered card formations that completely dominate the screen and require an extreme level of strategic foresight to dismantle. The atmosphere is intensely focused, replacing the casual nature of standard solitaire with a deep, calculating puzzle environment. You are tasked with clearing hundreds of overlapping cards by meticulously matching them in ascending or descending numerical sequences. The visual presentation is highly polished, utilizing incredibly crisp, high-definition card assets that ensure readability even when the board is massively congested. The snappy animations and satisfying audio feedback provide a constant stream of dopamine as you trigger massive, board-clearing chain reactions. Big Tripeaks is the ultimate, uncompromising test of sequential logic and long-term cascade planning for hardcore card game enthusiasts.

## How to Play
* Your objective is to completely clear the massive formation of cards on the board by moving them to the discard pile at the bottom.
* Use your \`Left Mouse Button\` to click on any exposed (uncovered) card on the board that is exactly ONE value higher or ONE value lower than the current face-up card in the discard pile.
* The suit of the cards does absolutely not matter; only the numerical value is relevant (e.g., you can put a 5 of Hearts on a 6 of Spades).
* Aces can be played on Kings, and Kings can be played on Aces, allowing the sequence to loop continuously.
* If you have no valid moves on the board, click the face-down draw pile to reveal a new card to play off of.

## Tips and Tricks
* **Prioritize the Peaks:** The cards at the very top of the massive peaks are blocking the most cards underneath them. Always favor a move that uncovers a card higher up in the structure.
* **Plan the Chain Reaction:** Never click the first valid card you see. If the discard pile is a 7, and you have an 8 and a 6 on the board, trace the sequence mentally. Does clicking the 8 allow you to play a 9 and a 10? Does clicking the 6 allow you to play a 5? Choose the longest possible chain.
* **Save the Draw Pile:** Your draw pile is your lifeline. Exhaust absolutely every single possible sequence on the main board before you even think about clicking for a new card.
* **Uncover New Options:** If you have two 5s on the board and the discard is a 6, choose the 5 that uncovers a new, face-down card rather than the 5 that uncovers nothing.
* **The "Undo" Button (If Available):** If the game features an undo button, use it aggressively to peek under cards. If a sequence leads to a dead end, undo it and try the alternate path.`
  },
  {
    title: "Spider Match 3",
    seoContent: `![Spider Match 3](https://www.htmlgames.com/uploaded/game/thumb800/spidermatch3800450.webp)

Spider Match 3 violently shatters the traditional grid-based limitations of the match-3 genre, plunging players into a visually striking, geometrically complex puzzle environment spun entirely out of spider webs. Moving far beyond the sterile squares of standard gem-swapping games, this title forces you to navigate a circular, interconnected web structure where matches occur along concentric rings and intersecting silk threads. The atmosphere is slightly eerie but incredibly captivating, trading standard shiny jewels for glowing, arcane gems trapped within the arachnid's domain. The core gameplay loop requires a completely different type of spatial reasoning, as you must constantly calculate how shifting a gem along a curved web line will affect the cascading elements dropping from the center of the web. The visual presentation is exceptionally polished, utilizing high-definition web textures, dynamic lighting, and satisfying, explosive particle effects that trigger whenever a massive combo is achieved. Spider Match 3 is a masterclass in mechanical innovation, proving that changing the shape of the board completely reinvents the game.

## How to Play
* The core mechanic revolves around swapping adjacent gems to create lines of three or more identical jewels.
* Because the board is a spider web, you can swap gems along the circular rings, or along the straight threads radiating from the center.
* Use your \`Mouse\` to click on a gem, then click an adjacent one to swap their positions, or simply click and drag.
* Your primary objective is to fulfill specific level goals (like clearing all the dark web patches) before you run out of moves.
* Matching four or more gems creates powerful explosive special gems that can clear entire sections of the web instantly.

## Tips and Tricks
* **Master the Circular Shift:** The biggest hurdle in this game is re-training your brain to see matches along a curve. Constantly scan the concentric rings of the web, not just the straight lines.
* **Work from the Outside In:** Because new gems fall outward from the center of the web, making matches on the outermost rings triggers the maximum number of cascading gems, heavily increasing your chances of free combos.
* **Target the Chokepoints:** Pay close attention to areas where the web intersects heavily. Clearing gems in these central nodes often shifts massive sections of the board at once.
* **Combine Power-Ups:** The most devastating move in the game is swapping two explosive gems with each other. This creates a massive radial explosion that clears nearly the entire web.
* **Focus on the Objective:** It is incredibly easy to get distracted by setting up a massive 5-gem match, but if your goal is only to clear specific dark patches, you must focus laser-like on those areas.`
  },
  {
    title: "Tic Tac Toe",
    seoContent: `![Tic Tac Toe](https://www.htmlgames.com/uploaded/game/thumb800/tictactoe800450.webp)

Tic Tac Toe strips the competitive puzzle genre down to its absolute, most ancient and legendary core, delivering a raw, tension-fueled test of predictive logic and spatial manipulation. In an era dominated by hyper-complex multiplayer arenas, this game beautifully resurrects the intimate, highly strategic nature of the classic pen-and-paper grid. Set against a clean, visually minimalist digital interface, the game tasks you with outsmarting a relentless AI (or a human opponent) in a brutal best-of-three rounds format. The atmosphere is purely intellectual; there are no power-ups, no hidden mechanics, and no luck involved. It is a pure test of your ability to read your opponent's intentions and set up inescapable geometric traps. The visual style is highly appealing in its simplicity, utilizing incredibly crisp, neon-infused X and O symbols that ensure the grid remains perfectly readable and aesthetically pleasing. The brilliance of Tic Tac Toe lies entirely in its uncompromising dedication to core puzzle mechanics and the timeless pursuit of the "perfect" unbeatable strategy.

## How to Play
* The primary objective is to be the first player to place three of your designated symbols (either X or O) in a continuous straight line.
* Use your \`Mouse\` to click on any empty square within the 3x3 grid to claim it.
* The line of three symbols can be formed horizontally across a row, vertically down a column, or diagonally from corner to corner.
* Players strictly alternate turns. You cannot place two symbols in a row.
* If all nine squares are filled and neither player has achieved a line of three, the round ends in a draw (a "Cat's Game").

## Tips and Tricks
* **Take the Center:** If you are moving first, your absolute best opening move is the dead center square. It gives you the maximum number of potential winning lines (four) and severely restricts your opponent's options.
* **The Corner Trap:** If you secure the center, try to place your next symbol in a corner. This often allows you to set up a "fork" (a scenario where you have two different winning moves on the next turn, making it impossible for the opponent to block both).
* **Block the Fork:** If your opponent plays first and takes a corner, DO NOT take another corner. Take the center. If they take the opposite corner next, you must take an edge piece (not a corner) to force them to block you, preventing their fork.
* **Play the Edges Defensively:** The edge squares (top middle, left middle, etc.) are the weakest positions on the board. Only play them if you are forced to block an opponent's imminent win.
* **Never Lose:** Mathematically, if both players play perfectly, every single game of Tic Tac Toe will end in a draw. Focus on playing flawlessly defensive first, and offensive second.`
  },
  {
    title: "Bubble Shooter 3D",
    seoContent: `![Bubble Shooter 3D](https://www.htmlgames.com/uploaded/game/thumb800/bubbleshooter3D-800x450.webp)

Bubble Shooter 3D violently propels the legendary arcade matching genre into the modern era, replacing flat, 2D grids with a breathtaking, fully realized three-dimensional cylindrical playing field. Moving far beyond the static limitations of classic bubble shooters, this game forces you to constantly rotate a massive, floating column of colorful spheres, hunting for hidden matches and structural weak points along the Z-axis. The atmosphere is incredibly dynamic and kinetically satisfying, demanding a completely new level of spatial geometry and bank-shot calculation. The visual presentation is exceptional, utilizing high-definition 3D rendering, dynamic lighting that reflects off the glossy bubbles, and incredibly smooth, physics-based rotation mechanics. The satisfying "pop" of a massive chain reaction is amplified as detached bubbles physically fall away into the abyss below. Bubble Shooter 3D is a masterclass in taking a perfect, timeless formula and elevating it with a singular, brilliant perspective shift that fundamentally changes how you interact with the board.

## How to Play
* The primary objective is to clear the entire 3D cylinder of bubbles by firing your own colored spheres into matching clusters.
* Use your \`Mouse\` or the \`Left\` and \`Right\` arrow keys to physically rotate the entire massive bubble column to see all sides of the puzzle.
* Aim your cannon and click the \`Left Mouse Button\` (or press \`Up\`) to fire a bubble into the structure.
* When your fired bubble connects with a cluster of two or more bubbles of the exact same color, they will all pop and disappear.
* Any bubbles that were exclusively hanging onto the popped cluster will become disconnected and drop into the void for massive bonus points.
* If the descending column of bubbles crosses the red warning line at the bottom, you lose.

## Tips and Tricks
* **Always Spin First:** Never fire your current bubble without doing a full 360-degree rotation of the column first. The perfect, massive cluster you need might be hiding right on the other side.
* **Sever the Root:** The 3D structure means bubbles hang off each other in complex ways. Do not aim for the bottom bubbles. Aim higher up to destroy the "root" attachment points, causing massive chunks of the structure to collapse instantly.
* **Check Your Ammo:** Always keep one eye on the "Next Bubble" indicator at the bottom. Knowing what color is coming next completely dictates where you should fire your current bubble and how you should rotate the board.
* **Build Support Structures:** If you have a color you don't need, spin the board to a blank side and fire it out of the way so it doesn't block your central line of sight.
* **Master the Bank Shot:** You can bounce your bubbles off the invisible walls to slip them into impossible, tight spaces behind the front lines. Use the trajectory line to perfect your aim.`
  },
  {
    title: "Bilder Wörter",
    seoContent: `![Bilder Wörter](https://www.htmlgames.com/uploaded/game/thumb800/bilder-woerter-800x450.webp)

Bilder Wörter offers a visually stunning, highly engaging entry point into German vocabulary building, completely reinventing the classic flashcard system for the modern digital era. By merging language education with the wildly popular mechanics of line-drawing puzzles, this game creates a learning environment that feels genuinely rewarding rather than purely academic. The player is presented with a crisp, high-definition photograph and a chaotic jumble of alphabetical tiles. The task is straightforward but demands linguistic precision: identify the object and connect the letters to perfectly spell its German name. The atmosphere is intentionally calming and focused, stripping away any stressful countdown timers to ensure players have the time to properly process and memorize the new vocabulary. The visual presentation is clean and highly readable, utilizing sharp fonts and satisfying audio cues that trigger upon successful completion of a word. Bilder Wörter is an absolute triumph of "edutainment," proving that learning a new language can be an intensely addictive puzzle experience.

## How to Play
* Your goal is to correctly spell the German word that corresponds to the large, high-definition image shown on the screen.
* Look at the scrambled letter tiles provided at the bottom of the interface.
* Use your \`Mouse\` to click on the first letter of the word, and drag a continuous line through the adjacent letters to spell it out.
* You can connect letters horizontally, vertically, and diagonally, but the line cannot be broken.
* Release the \`Left Mouse Button\` once the entire German word is highlighted. If correct, you will progress to the next puzzle.

## Tips and Tricks
* **Master German Consonant Clusters:** The German language frequently combines consonants in specific ways (e.g., "SCH", "CH", "SP", "ST"). Scan the board for these specific combinations first to quickly assemble large chunks of the word.
* **Count the Blanks First:** Always look at the empty spaces before looking at the letters. Knowing you need a 7-letter word completely changes how you approach a grid of 12 letters.
* **Look for Suffixes:** German nouns often end in specific suffixes like "-ung", "-heit", or "-keit". Finding these tiles grouped together gives you a massive advantage in mapping the end of the line.
* **Work Backwards:** If you are stuck, try to identify what the very last letter of the word must be. Since you have to draw a continuous line, finding the end point can help you reverse-engineer the path.
* **Capitalization Doesn't Matter:** Remember that while all German nouns are capitalized in writing, this puzzle treats all letters equally. Focus entirely on the spelling sequence.`
  }
];

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  let updated = 0;
  for (let g of manualData) {
    const res = await Game.findOneAndUpdate(
      { title: g.title },
      {
        $set: {
          curated: true,
          seoContent: g.seoContent
        },
        $unset: { editorRating: 1 }
      }
    );
    if (res) {
      console.log('Successfully updated: ' + g.title);
      updated++;
    }
  }
  console.log('Total updated: ' + updated);
  process.exit(0);
}
run();
