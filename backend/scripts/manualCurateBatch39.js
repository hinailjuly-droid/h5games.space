const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Palabra de Lógico Del Dia",
    seoContent: `![Palabra de Lógico Del Dia](https://www.htmlgames.com/uploaded/game/thumb800/palabradelogicodeldia800450.webp)

Palabra de Lógico Del Dia strips the crossword puzzle genre down to its absolute, most mathematically pure and elegantly simple core, delivering a digital adaptation of the classic "Kriss-Kross" or word-fit puzzle, completely localized for Spanish speakers. Moving entirely away from trivia-based clues or obscure vocabulary knowledge, this title is a pure test of spatial logic and character counting. Players are presented with a blank crossword grid featuring a few scattered hint letters, and a massive bank of Spanish words categorized strictly by their letter length (e.g., 3-letter words, 4-letter words). Your objective is intensely focused: you must physically drag and drop the words from the bank into the empty slots on the grid, ensuring that every single intersection mathematically aligns. The atmosphere is deeply cerebral and intentionally demanding, requiring an intense level of forward-thinking and process of elimination, offering a fresh, completely new puzzle every single day. The visual presentation is highly functional, utilizing crisp, high-contrast typography.

## How to Play
* The primary objective is to successfully place every single word from the bank into the crossword grid so that all intersections are valid.
* You DO NOT type the letters. You use your \`Mouse\` to interact with the grid.
* Look at the provided word bank, where words are grouped by length (e.g., all 5-letter Spanish words).
* Click on an empty starting cell on the main grid, and then select whether you want to fill the horizontal (Across) or vertical (Down) slot.
* Click the specific word from the bank that you want to insert into that slot.
* **The Intersections:** The core challenge is ensuring the words cross perfectly. If you place "GATO" horizontally, and the vertical word crossing the 'T' is 3 letters long, that vertical word MUST have a 'T' as its second letter.
* A fresh puzzle is generated every 24 hours.

## Tips and Tricks
* **Count the Lengths First:** The absolute most critical strategy is finding the unique lengths. If the grid only has ONE slot for a 9-letter word, and your bank only has ONE 9-letter word, place it immediately. This provides massive structural anchors for the rest of the puzzle.
* **Work from the Intersections:** Do not just place a word randomly because it fits a slot. Look for slots that have a pre-filled hint letter. If a 5-letter slot has an 'A' at the end, immediately scan your 5-letter word bank for words ending in 'A'.
* **Beware the Vowel Trap:** Spanish words rely heavily on vowels at intersections. If you place a word that puts an obscure consonant (like 'X' or 'Z') at a crossing point, immediately verify that you actually have a word in your bank that can cross it.
* **Process of Elimination:** If you have three 4-letter words left, and only one of them starts with an 'S', and the grid requires an 'S' at a specific intersection, the placement is mathematically forced. Lock it in.
* **Restarting is Okay:** If you reach the end of the puzzle and the last two words physically do not fit, you made an error early on. It is often faster to completely clear the board and restart rather than untangling a massive web of incorrect intersections.`
  },
  {
    title: "Dagelijkse Paspuzzel",
    seoContent: `![Dagelijkse Paspuzzel](https://www.htmlgames.com/uploaded/game/thumb800/dagelijkse-paspuzzel-800450.webp)

Dagelijkse Paspuzzel strips the crossword puzzle genre down to its absolute, most mathematically pure and elegantly simple core, delivering a digital adaptation of the classic "Kriss-Kross" or word-fit puzzle, completely localized for Dutch speakers. Moving entirely away from trivia-based clues, obscure vocabulary knowledge, or cryptic hints, this title is a pure test of spatial logic and character counting. Players are presented with a blank crossword grid featuring a few scattered hint letters, and a massive bank of Dutch words categorized strictly by their letter length. Your objective is intensely focused: you must physically select words from the bank and insert them into the empty slots on the grid, ensuring that every single intersection perfectly aligns. The atmosphere is deeply cerebral and intentionally demanding, requiring an intense level of forward-thinking and process of elimination, offering a fresh puzzle every single day. The visual presentation is highly functional, utilizing crisp, high-contrast typography that ensures the complex letter pathways remain perfectly readable.

## How to Play
* The primary objective is to successfully place every single Dutch word from the bank into the crossword grid so that all intersections are valid.
* You DO NOT type the letters. You use your \`Mouse\` to interact with the grid.
* Look at the provided word bank, where words are grouped by length (e.g., all 6-letter Dutch words).
* Click on an empty starting cell on the main grid, and then select whether you want to fill the horizontal or vertical slot.
* Click the specific word from the bank that you want to insert into that slot.
* **The Intersections:** The core challenge is ensuring the words cross perfectly. If you place "HONDEN" horizontally, and the vertical word crossing the 'D' is 4 letters long, that vertical word MUST have a 'D' as its second letter.

## Tips and Tricks
* **Hunt the Unique Lengths:** Your absolute first move should be scanning the grid for slots that have a unique length. If the grid only has ONE slot for an 11-letter word, place the only 11-letter word immediately. This creates a massive foundation for the rest of the puzzle.
* **Leverage the Hint Letters:** Do not ignore the pre-filled letters scattered on the board. If a 5-letter slot has a 'K' in the middle, filter your 5-letter word bank exclusively for words with a central 'K'.
* **The Consonant Check:** Dutch words often feature complex consonant clusters. If you place a word that puts a rare letter (like 'Q', 'X', or 'Y') at an intersection, immediately verify that you have a corresponding word that can cross it. If you don't, your placement is wrong.
* **Process of Elimination:** Cross-referencing is everything. If you have two 4-letter words left ("KAAS" and "BOOM"), and the grid requires a word ending in 'S', the choice is mathematically forced.
* **Don't Guess Blindly:** If you place a word without checking the intersecting slots, you will inevitably deadlock the board. Always verify at least one intersection before committing to a placement.`
  },
  {
    title: "Soldier Attack 3",
    seoContent: `![Soldier Attack 3](https://www.htmlgames.com/uploaded/game/thumb800/soldierattack3800450.webp)

Soldier Attack 3 strips the sprawling, complex physics-shooter genre down to its absolute, most tension-fueled and reflex-dependent core, delivering a pure, unadulterated test of spatial calculation, ricochet physics, and trajectory management. Moving entirely away from chaotic run-and-gun combat or complex inventories, this title is entirely focused on the silent, methodical art of the perfect, physics-defying shot. Set against a clean, visually minimalist 2D landscape, players are placed in control of a stationary soldier armed with a high-powered weapon. Your objective is elegantly simple yet brutally difficult in execution: you must calculate the parabolic arc of gravity and the bounce angles of the environment to shoot a limited number of bullets at hidden alien enemies. The atmosphere is deeply engaging; there is no timer, only the pressure of limited ammunition and the devastating consequences of a miss. The visual presentation is highly polished, utilizing realistic physics and crisp, cartoonish graphics.

## How to Play
* The primary objective is to eliminate every single alien on the screen using the absolute minimum number of shots.
* Use your \`Mouse\` to aim the soldier's weapon. A crosshair or dotted trajectory line will often appear, showing the initial path of the bullet.
* Click the \`Left Mouse Button\` to fire a shot.
* **The Ricochet Mechanic:** Your bullets do not just fly straight; they bounce wildly off metal walls, floors, and ceilings. You must use these ricochets to hit aliens hiding behind impenetrable barriers or tucked into tight corners.
* **The Constraints:** You only have a set number of bullets per level (indicated by the UI). Running out of ammo before killing all aliens results in an instant failure.

## Tips and Tricks
* **Think Like a Pool Player:** This game is essentially billiards with guns. You must constantly calculate the angle of incidence (the angle the bullet hits the wall) to predict the angle of reflection. A shallow hit results in a shallow bounce; a sharp hit results in a sharp bounce.
* **Use the Environment:** Look for hanging explosive barrels, precariously balanced heavy crates, or swinging platforms. Often, the most efficient way to kill three aliens is not to shoot them directly, but to shoot the chain holding a massive boulder above their heads.
* **Conserve Ammo (The Efficiency Goal):** Just because you have five bullets doesn't mean you should use them all. The game heavily rewards you (with stars or higher scores) for killing multiple enemies with a single, perfectly calculated ricochet shot.
* **Beware the Self-Hit:** Because bullets bounce multiple times, it is entirely possible to shoot a wall and have the bullet ricochet directly back into your own soldier's face, instantly failing the level. Always trace the full path mentally before firing.
* **Patience is Key:** You are not on a timer. Do not rapid-fire arrows. Take a deep breath, analyze the distance, calculate the arc, and take the shot only when you are perfectly confident.`
  },
  {
    title: "Tägliches Lückenkreuzwort",
    seoContent: `![Tägliches Lückenkreuzwort](https://www.htmlgames.com/uploaded/game/thumb800/taegliches-luecken-kreuzwort-800450.webp)

Tägliches Lückenkreuzwort strips the crossword puzzle genre down to its absolute, most mathematically pure and elegantly simple core, delivering a digital adaptation of the classic "Kriss-Kross" or word-fit puzzle, completely localized for German speakers. Moving entirely away from trivia-based clues, obscure vocabulary knowledge, or cryptic hints, this title is a pure test of spatial logic and character counting. Players are presented with a blank crossword grid featuring a few scattered hint letters, and a massive bank of German words (often featuring complex compound words) categorized strictly by their letter length. Your objective is intensely focused: you must physically select words from the bank and insert them into the empty slots on the grid, ensuring that every single intersection mathematically aligns. The atmosphere is deeply cerebral and intentionally demanding, requiring an intense level of forward-thinking and process of elimination, offering a fresh puzzle every single day.

## How to Play
* The primary objective is to successfully place every single German word from the bank into the crossword grid so that all intersections are valid.
* You DO NOT type the letters. You use your \`Mouse\` to interact with the grid.
* Look at the provided word bank, where words are grouped by length (e.g., all 8-letter German words).
* Click on an empty starting cell on the main grid, and then select whether you want to fill the horizontal or vertical slot.
* Click the specific word from the bank that you want to insert into that slot.
* **The Intersections:** The core challenge is ensuring the words cross perfectly. If you place "AUTOBAHN" horizontally, and the vertical word crossing the 'B' is 5 letters long, that vertical word MUST have a 'B' in that exact position.

## Tips and Tricks
* **Hunt the Unique Lengths First:** Your absolute first move should be scanning the grid for slots that have a unique length. If the grid only has ONE slot for a massive 12-letter German compound word, place it immediately. This creates a massive structural anchor for the rest of the puzzle.
* **Leverage the Umlauts:** German words feature specific characters (Ä, Ö, Ü). If you place a word that puts an Umlaut at an intersection, immediately verify that you have a corresponding word in your bank that can legally cross it. If you don't, your placement is wrong.
* **Work from the Intersections:** Do not just place a word randomly because it fits a slot. Look for slots that have a pre-filled hint letter. If a 6-letter slot has an 'E' at the end, immediately scan your 6-letter word bank for words ending in 'E'.
* **Process of Elimination:** Cross-referencing is everything. If you have two 5-letter words left, and the grid requires a word ending in 'T', the choice is mathematically forced. Lock it in.
* **Restarting is Okay:** If you reach the end of the puzzle and the last two words physically do not fit, you made an error early on. It is often faster to completely clear the board and restart.`
  },
  {
    title: "All Fives Domino",
    seoContent: `![All Fives Domino](https://www.htmlgames.com/uploaded/game/thumb800/allfivesdomino800450.webp)

All Fives Domino delivers an incredibly deep, mathematically rich variation of the legendary tabletop game, fundamentally altering the standard "Block" or "Draw" mechanics by introducing a highly aggressive, active-scoring system (also known as Muggins or Sniff). Set against a clean, visually minimalist wooden table aesthetic, players are locked in a relentless battle against AI opponents. While the basic placement rule remains the same—you must connect matching pips (dots) to the open ends of the chain—your objective is entirely different. You are not just trying to empty your hand. You are actively trying to manipulate the board state so that the sum total of all the pips on the exposed, open ends of the domino chain is exactly a multiple of five (5, 10, 15, 20). If you achieve this, you instantly score those points. The atmosphere is deeply cerebral; it is a pure test of rapid mental arithmetic, probability calculation, and strategic sacrifice. The visual presentation is highly polished, ensuring the pips are perfectly readable.

## How to Play
* The primary objective is to score points by making the open ends of the domino layout add up to a multiple of 5.
* On your turn, use your \`Mouse\` to click and drag a tile from your hand.
* You must connect it to one of the open ends of the domino chain on the table. The numbers MUST match (e.g., a 4 must connect to a 4).
* **The Scoring Rule:** After you place a tile, add up all the pips on the extreme outer ends of the entire chain. If the total is 5, 10, 15, or 20, you instantly score that amount of points.
* (e.g., If one end is a 6, and the other end is a 4, the total is 10. You score 10 points).
* Doubles are usually played crosswise (a spinner). The very first double played is the "Spinner," and tiles can be played off all four sides of it, creating four open ends to count!

## Tips and Tricks
* **Do the Math Before You Move:** Never place a tile without calculating the resulting total. If the current board total is 8, and you play a tile that covers a 3 and exposes a 5, the new total will be 10 (8 - 3 + 5). You score!
* **Control the Board Total:** If the board total is currently 4, your opponent cannot score 5 on their next turn unless they play a tile that has a blank on one end and a 1 on the other. Aggressively steer the board total away from multiples of five when you finish your turn to block your opponent.
* **The "Zero" Play:** The blank (zero) tiles are incredibly powerful. If the board total is currently 15 (a scoring state), and you play a tile that connects a 6 to a Blank, you remove 6 points from the total and add 0, ruining the scoring state for your opponent.
* **Hoard the 5s:** Tiles that inherently total a multiple of 5 (like the 5-0, 5-5, or 6-4) are extremely valuable for maintaining a scoring state or triggering a massive combo.
* **Manage the Spinner:** The first double played (the spinner) opens up the board to four branches. Be extremely careful when playing off the sides of the spinner, as you are adding a third (or fourth) number to the total math calculation.`
  },
  {
    title: "Neon Arkanoid",
    seoContent: `![Neon Arkanoid](https://www.htmlgames.com/uploaded/game/thumb800/neonarkanoid800450.webp)

Neon Arkanoid delivers an absolutely brilliant, high-speed evolution of the legendary block-breaking arcade staple, fundamentally elevating the structural demolition mechanics by wrapping them in a chaotic, physics-driven, brilliantly glowing cyberpunk aesthetic. Set against a stark, high-contrast dark grid, you control a paddle at the bottom of the screen. Above you rests a massive, fortified ceiling of brightly colored neon blocks. Your objective is intensely focused: launch a glowing ball and aggressively steer your paddle to intercept the ricochets, relentlessly chipping away at the neon structure until every single block is shattered. The atmosphere is deeply kinetic and visually overwhelming; the screen fills with glowing light trails, particle explosions, and high-energy electronic music as collisions occur. Neon Arkanoid is a pure shot of arcade adrenaline that demands flawless aiming, geometric calculation, and hyper-fast reflexes to manage the chaotic drops and power-ups.

## How to Play
* The primary objective is to destroy every single neon block on the screen to advance to the next level.
* You control a horizontal paddle at the bottom of the screen.
* Use your \`Mouse\` (moving it left and right) to smoothly steer the paddle.
* Click the \`Left Mouse Button\` to launch the ball at the start of the level.
* You must physically intercept the ball with your paddle as it bounces back down. If the ball falls past your paddle and off the bottom of the screen, you lose a life.
* Destroying certain blocks will cause glowing power-ups (or power-downs) to slowly fall toward you. Catch them with your paddle to activate them.

## Tips and Tricks
* **The Horizontal Tunnel (The Golden Strategy):** Your absolute highest priority is finding a tiny gap between the blocks and the side wall, or drilling a narrow hole straight through the center. If you can bounce the ball *above* the main structure, it will trap itself, bouncing frantically between the ceiling and the top of the blocks, destroying dozens of blocks instantly without any effort from you.
* **Control the Angle:** The ball does not just bounce randomly off your paddle. If the ball hits the dead center of your paddle, it bounces straight up. If it hits the extreme left or right edges of your paddle, it will bounce off at a very sharp, aggressive horizontal angle. Use this to aim at specific remaining blocks.
* **Avoid the "Shrink" Power-Down:** Not all falling items are good. Learn to instantly recognize the icon for the "paddle shrink" power-down and avoid it at all costs. A tiny paddle drastically reduces your margin for error.
* **Hoard the Multi-Ball:** The most powerful item in the game splits your single ball into three or more balls. When this happens, do not panic and try to track all of them. Focus your eyes heavily on the lowest ball to ensure you don't lose your last life.
* **Don't Stare at the Blocks:** Keep your eyes locked on the space immediately above your paddle. The ball moves too fast in later levels to track its entire path.`
  },
  {
    title: "Mahjong Collapse",
    seoContent: `![Mahjong Collapse](https://www.htmlgames.com/uploaded/game/thumb800/mahjongcollapse800450.webp)

Mahjong Collapse injects a massive dose of traditional Chinese aesthetics into the highly competitive tile-collapsing genre (often called "Blast" or "Collapse" games), delivering a visual feast of ancient iconography and intensely satisfying combination mechanics. Stepping entirely away from the slow, methodical pairing of Mahjong Solitaire, this title places you in a high-speed arcade environment. You are presented with a massive, flat 2D grid completely filled with tightly packed Mahjong tiles (Bamboos, Characters, Circles). Your objective is intensely focused: you must rapidly scan the board and click on massive, pre-existing clusters of identical Mahjong tiles to instantly shatter them. When destroyed, the entire column collapses under gravity, shifting the board state and creating new clusters. The atmosphere is deeply engaging and frantic. Mahjong Collapse is a pure, unadulterated test of spatial planning, cascade optimization, and rapid visual pattern recognition.

## How to Play
* The core mechanic revolves around clicking clusters of identical Mahjong tiles to remove them from the board.
* Use your \`Mouse\` to click on any group of TWO OR MORE identically suited tiles that are touching horizontally or vertically.
* When clicked, the entire cluster shatters instantly, and gravity causes the tiles above them to fall straight down.
* **The Primary Objective:** Completely clear the board, or reach a specific target score, before running out of valid moves.
* If a column is completely emptied, the remaining columns will usually slide toward the center (or to one side) to fill the gap.
* The game requires you to plan your collapses so that you don't strand single, unmatchable tiles.

## Tips and Tricks
* **Work from the Bottom:** Always prioritize clicking clusters at the lowest possible points on the grid. This triggers the maximum amount of gravity shifting, often causing tiles higher up to naturally fall into massive, pre-aligned super-clusters without you having to waste a move.
* **Don't Isolate Single Tiles:** The absolute worst thing you can do is accidentally clear all the tiles surrounding a specific Character tile, stranding it with no identical neighbors. If too many tiles become isolated, the board will deadlock, resulting in a game over.
* **Build Massive Clusters (Patience is Key):** While clicking a group of two tiles is safe, it yields a terrible score. The true strategy is to click the smaller groups *around* a specific suit to manually build a massive, screen-spanning cluster of 15 or 20 identical Mahjong tiles before detonating it for maximum points.
* **Calculate the Horizontal Slide:** Remember that emptying a vertical column causes the board to slide together horizontally. Before you clear a column, look to see if sliding the left and right halves together will create a massive new match or completely ruin your setup.
* **Look for the "U" Shape Trap:** If you have a cluster of identical tiles shaped like a "U", clicking it might isolate the tile sitting inside the U. Always visualize the resulting drop.`
  },
  {
    title: "House of Cards",
    seoContent: `![House of Cards](https://www.htmlgames.com/uploaded/game/thumb800/houseofcards800450.webp)

House of Cards fundamentally rewrites the rules of the traditional Solitaire genre by completely abandoning the familiar mechanics of foundation building and tableau sorting in favor of a highly complex, architectural puzzle based entirely on structural mathematics. Set against a clean, visually uncluttered green felt aesthetic, players are presented with a deck of cards and a completely empty workspace. Your objective is intensely focused and heavily reliant on sequence planning: you must physically drag cards from the deck to construct a multi-tiered pyramid (a house of cards). The challenge lies in the strict engineering rules: to build a higher floor, the foundation "walls" beneath it must be mathematically sound. A wall consists of two cards leaning against each other. They MUST be a pair of the same value or the same suit. The atmosphere is deeply cerebral and immensely satisfying; you are essentially managing a massive game of localized arithmetic while simultaneously preventing your structure from collapsing under its own weight. The visual presentation is highly functional, utilizing crisp, high-contrast traditional playing cards.

## How to Play
* The primary objective is to build the highest, most structurally sound house of cards possible before running out of valid moves.
* Use your \`Mouse\` to click and drag cards from the draw pile onto the empty felt.
* **Building Walls:** You must construct walls by pairing two cards. These two cards MUST match in either VALUE (e.g., two 8s) or SUIT (e.g., two Hearts).
* **Building Roofs:** Once two adjacent walls are constructed, you can place a "Roof" horizontally across them. A roof can be ANY card; there are no restrictions on roof cards.
* **Building the Next Floor:** Once you have a valid roof, you can begin building the next set of walls on top of it.
* **The Weight Limit:** The total numerical value of the walls on a higher floor CANNOT exceed the total numerical value of the walls supporting them directly beneath. Face cards have specific high values (J=11, Q=12, K=13).

## Tips and Tricks
* **Build a Massive Foundation:** Do not try to build vertically too quickly. The wider your ground floor is, the more options you have for building the second floor. A narrow base will restrict your options and force a game over quickly.
* **Save the High Values for the Bottom:** Because higher floors cannot outweigh the floors beneath them, you MUST use your highest value pairs (like Kings, Queens, and 10s) as the structural foundation on the very bottom row. If you put a pair of 2s on the bottom row, you can never build above them.
* **Use Low Cards for Roofs:** Roofs have no restrictions and do not count toward the weight limit. Therefore, you should always use your lowest, most useless cards (like Aces, 2s, and 3s that don't match anything) as the horizontal roofs.
* **The Magic 20/21:** The game notes that walls with a total value of 20 or 21 have special capabilities (usually acting as unbreakable supports that ignore weight limits). Memorize the combinations that create these numbers (e.g., a King + 7, or two 10s) and prioritize building them.
* **Don't Waste Pairs:** If you draw two 8s, DO NOT use one of them as a roof. Pairs are incredibly hard to come by, and you absolutely need them to construct valid walls.`
  },
  {
    title: "Forest Queen 2",
    seoContent: `![Forest Queen 2](https://www.htmlgames.com/uploaded/game/thumb800/forest-queen2-800450.webp)

Forest Queen 2 delivers a brilliant, highly atmospheric evolution of the classic tile-swapping puzzle (Match-3), fusing the addictive cascade mechanics with a focused, objective-based narrative wrapped in a stunning, magical woodland aesthetic. Set against a backdrop of ancient, glowing trees, starry nights, and deep green foliage, players are tasked with managing a grid filled with brightly colored, glowing jewels, leaves, and mystical runes. Your objective is not just to rack up a high score, but to physically maneuver specific magical artifacts (like glowing amulets or potion bottles) down to the absolute bottom row of the grid so they fall off the board and can be collected by the Forest Queen. You do this by swapping adjacent items to form lines of three or more, shattering the gems beneath the artifact pieces to inch them closer to the bottom. The atmosphere is deeply engaging, accompanied by sweeping, ethereal forest music. The visual presentation is exceptionally polished, utilizing crisp sprites and satisfying, magical particle effects.

## How to Play
* The primary objective is to collect all the scattered magical artifacts before the timer expires.
* The artifacts are located at the top of the grid, resting on top of regular jewels.
* Use your \`Mouse\` to click on a jewel, then click an adjacent one to swap their positions, forming a horizontal or vertical line of three or more identical items.
* When the jewels shatter, the artifacts resting above them will fall down one row.
* You must systematically collapse the columns directly beneath the artifacts until they touch the absolute bottom row of the board, at which point they are collected.
* Collect all pieces to complete the level.

## Tips and Tricks
* **Focus on the Columns, Not the Board:** Your only real objective is the vertical column directly beneath the artifact piece. Completely ignore massive, satisfying 5-gem combos on the left side of the board if the artifact is on the right side. Every move must serve the objective.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points of the target column. This triggers cascading jewels dropping from the ceiling, often resulting in free, accidental combos that lower the artifact automatically.
* **Don't Strand the Artifact:** The absolute worst thing you can do is accidentally clear all the jewels in a column *except* the ones directly under the artifact, stranding it on a tall, narrow pillar of unmatchable colors. Always ensure you have a planned route.
* **Utilize Power-Ups Strategically:** Matching four or five jewels creates powerful bombs or line-clearing magic. Do not detonate them immediately. Try to maneuver them directly under the artifact, or in the same row/column, to blast a massive hole.
* **Clear Obstacles Early:** Later levels introduce chained, locked, or frozen jewels that cannot be moved. Prioritize shattering these immediately, as they act as impenetrable walls that will block your artifact from falling.`
  },
  {
    title: "Freecell",
    seoContent: `![Freecell](https://www.htmlgames.com/uploaded/game/thumb800/free-cell-800450.webp)

Freecell is the absolute gold standard of perfect-information puzzle games, delivering an incredibly deep, mathematically rich variation of Solitaire that fundamentally alters the genre by removing all luck of the draw after the initial deal. Set against a clean, visually minimalist green felt table aesthetic, players are presented with all 52 cards dealt entirely face-up into eight sprawling tableau columns. There is no hidden draw pile. Your objective is elegantly simple yet incredibly unforgiving: you must maneuver the cards to build four complete sequences in the foundation piles, from Ace up to King by suit. The atmosphere is deeply calculating and intensely strategic, requiring players to possess a masterful understanding of card sequencing, cascade math, and long-term tactical sacrifice. The defining feature is the four "Free Cells" at the top left—temporary holding slots that you must meticulously manage to juggle massive stacks of alternating-color cards without permanently blocking your access to the crucial lower layers. Freecell is an uncompromising test of logic where nearly every single game is mathematically solvable if played perfectly.

## How to Play
* The primary objective is to move all 52 cards into the four foundation piles at the top right, building upward in suit from Ace to King.
* All 52 cards are dealt face-up into the main tableau columns at the start of the game.
* Use your \`Mouse\` to click and drag cards between columns.
* **The Tableau Rule:** You can build cards downward on the tableau in **alternating colors** (e.g., a Red 8 can only be placed on a Black 9).
* **The Free Cells:** You have four open slots at the top left of the screen. You can temporarily park any single card into an empty free cell to get it out of the way.
* You can move entire valid sequences of alternating-color cards between tableau columns, BUT the number of cards you can move at once is strictly limited by the mathematical formula: (1 + number of empty free cells) * (2 ^ number of empty tableau columns).

## Tips and Tricks
* **Protect the Free Cells:** Your four free cells are your absolute most valuable resource. Never park a card in a free cell unless you have a concrete, immediate, multi-step plan to get it back out onto the tableau shortly after. A clogged free cell is a death sentence.
* **Empty Columns are Pure Gold:** An empty tableau column is infinitely more valuable than a free cell, as it mathematically doubles the number of cards you can move in a single stack. Prioritize clearing the shorter columns first to create these spaces.
* **Unearth the Aces Early:** Your entire early game must focus heavily on excavating the four Aces so they can be moved to the foundations. The game cannot progress without them. Look deep into the columns to find where they are buried.
* **Calculate the Cascade:** Before moving a massive stack, look at the card it leaves behind. Does moving this stack unblock a 4 that you desperately need for another column? Never move a card blindly.
* **Don't Auto-Play to the Foundations:** Just because you *can* move a Black 5 to the foundation doesn't mean you *should*. Sometimes keeping it on the tableau is absolutely necessary to hold a Red 4 that you desperately need to anchor a massive stack.`
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
