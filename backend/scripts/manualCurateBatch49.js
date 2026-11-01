const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Mah Jong Connect I",
    seoContent: `![Mah Jong Connect I](https://www.htmlgames.com/uploaded/game/thumb800/mahjongconnect1800450.webp)

Mah Jong Connect I (the legendary progenitor of the Onet and Kyodai genres) injects a massive dose of highly structural, geometric pathfinding into the ancient tile-matching formula, delivering a visual puzzle that demands intense calculation. Stepping entirely away from the 3D, overlapping pyramids of standard Mahjong Solitaire, this game places every single tile flat on a massive, single-layer 2D grid. Your objective is not just to find matching pairs of traditional Chinese symbols, characters, and bamboo sticks, but to physically prove that a clear, unobstructed path can be drawn between them using a very specific set of routing rules. The atmosphere is deeply engaging, requiring players to constantly weigh the immediate satisfaction of a simple edge match against the necessity of unblocking the dense center of the board. The visual style is exceptionally clean, ensuring perfect readability even when the massive board is completely congested. It is a pure, uncompromising test of spatial planning and visual parsing.

## How to Play
* Your primary objective is to clear the entire flat grid by connecting identical pairs of traditional Mahjong tiles before the strict timer runs out.
* Use your \`Mouse\` to click on a tile, then click on a matching tile to attempt a connection.
* **The Golden Pathfinding Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two tiles using a maximum of three straight lines (which means no more than two 90-degree corners).
* You can connect tiles that are sitting directly next to each other, or you can route the path entirely outside the main grid boundary (the empty space surrounding the puzzle).
* If you successfully clear all tiles, you win. If you run out of moves, the board will shuffle.

## Tips and Tricks
* **Clear the Perimeter First:** Tiles sitting on the absolute outer edge of the board are by far the easiest to connect, because their path can route freely through the empty space outside the grid using the two-turn rule. Clear the borders instantly to shrink the playable area.
* **Look for the "U" Shape:** The two-turn rule allows for a perfect "U" shape connection. If two identical tiles are on the exact same row, but separated by other tiles, check if there is empty space directly above or below both of them to draw the U through the air.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the grid from the outside toward the dense center.
* **Memorize the Symbols:** Traditional Mahjong tiles have very specific, intricate symbols (Characters, Bamboo, Dots). Do not just look at them generally; memorize their specific details (e.g., "The red character with the slash") to dramatically speed up your scanning.
* **Don't Tunnel Vision:** If you can't find a path for two specific Bamboo tiles, stop looking at them. Scan the entire board for an obvious, free match to keep the timer from running down.`
  },
  {
    title: "Letter Scramble",
    seoContent: `![Letter Scramble](https://www.htmlgames.com/uploaded/game/thumb800/letterscramble800450.webp)

Letter Scramble strips the word-puzzle genre down to its absolute, most tension-fueled and linguistically demanding core, delivering a pure, unadulterated test of rapid vocabulary recall and anagram deciphering. Moving entirely away from the slow, methodical pace of crosswords, this title places you in a high-speed pressure cooker. Set against a clean, visually minimalist backdrop, you are presented with a jumbled pool of random letters (usually 6 or 7). Your objective is brutally elegant: you must rapidly form as many valid English words as possible using only the provided letters before the strict timer expires. The atmosphere is deeply kinetic; the ticking clock is a constant, unrelenting force, forcing your brain to rapidly manipulate letter combinations, searching for common prefixes, suffixes, and hidden root words. Letter Scramble is the ultimate brain-training routine for speed-spellers and anagram enthusiasts.

## How to Play
* The primary objective is to score as many points as possible by forming valid English words from the scrambled pool of letters before time runs out.
* The game presents a set of scrambled letters at the bottom of the screen.
* Use your \`Keyboard\` to rapidly type the words you see. Press \`Enter\` to submit the word.
* Alternatively, use your \`Mouse\` to click the letter tiles in the correct order, then click the 'Submit' button.
* Longer words score exponentially more points than short words.
* Finding the "Bingo" word (the single word that uses absolutely every single letter provided) usually grants a massive bonus or advances you to the next level instantly.

## Tips and Tricks
* **Find the Core Suffixes First (The Golden Rule):** Immediately scan the letter pool for common endings like "-ED", "-ING", "-ER", or an "-S" for plurals. Mentally separate those letters. If you have "T R E S D E", pull out the "ED". You are left with "T R E S". Now you only have to find words using four letters, and you can automatically add "-ED" to them to double your score.
* **Spam the 3-Letter Words:** Do not sit there for 30 seconds staring blankly trying to find the 7-letter Bingo word. Rapidly type out every single 3-letter word you can see (CAT, ACT, TAR, RAT, ART) to build a point buffer and keep your momentum going.
* **Look for Consonant Clusters:** English relies heavily on specific clusters like "CH", "SH", "TH", and "ST". If you have those letters, pair them together in your mind immediately.
* **The Anagram Shuffle:** If you are completely stuck, use the 'Shuffle' or 'Scramble' button. Physically rearranging the letters on the screen breaks your brain's current locked pattern and almost always reveals a word you couldn't see before.
* **Don't Forget the Vowels:** If you have an 'A' and an 'E', try alternating them with consonants to find simple C-V-C words (Consonant-Vowel-Consonant).`
  },
  {
    title: "Spades",
    seoContent: `![Spades](https://www.htmlgames.com/uploaded/game/thumb800/spades800450.webp)

Spades delivers a flawless, highly strategic digital adaptation of the legendary trick-taking card game, stripping away the need for a physical deck and replacing it with a clean, visually minimalist virtual felt table. In this specific iteration, you are paired with an AI partner, playing against two AI opponents in a classic 2-vs-2 partnership. Your objective is intensely focused on complex risk calculation and partnership synergy: before any cards are played, you must analyze your dealt hand and "bid" on exactly how many tricks (rounds) you believe you can win. The twist that defines the game is the trump suit: Spades are ALWAYS the highest suit. Even a lowly 2 of Spades will beat the Ace of Hearts. The atmosphere is deeply cerebral, requiring players to possess a masterful understanding of probability, card counting, and deductive logic based on the bids of the other players. Spades is an uncompromising test of tactical foresight.

## How to Play
* The primary objective is for your team to reach 500 points before the opposing team.
* The game is played with a standard 52-card deck. Spades are the permanent trump suit.
* **The Bidding Phase:** Look at your 13 cards. Estimate how many tricks you can win. Click the corresponding number to place your bid. Your team's total bid is your bid plus your partner's bid.
* **The Play Phase:** The player to the left of the dealer leads. You MUST follow suit if you have a card of that suit.
* If you cannot follow suit, you may play a Spade (which wins the trick) or slough a card of a different suit (which loses).
* Use your \`Mouse\` to click the card you wish to play.
* **Scoring:** You must win exactly the number of tricks you bid (or slightly more) to score positive points. Failing to meet your bid (getting "set") results in a massive negative penalty.

## Tips and Tricks
* **Count Your Winners (The Golden Rule of Bidding):** Aces and Kings of non-Spade suits are usually guaranteed winners *if* that suit is led early. Any Spade from a 10 up to the Ace is usually a winner. Do not overbid; it is better to bid conservatively and take a few extra tricks (bags) than to get set and lose 100 points.
* **The "Nil" Bid:** Bidding exactly Zero (Nil) is a massive gamble. If you successfully take zero tricks, you win a massive bonus (usually 100 points). Only bid Nil if you have absolutely no high Spades, no high cards in other suits, and a very "long" suit you can safely throw away.
* **Protect Your Partner's Nil:** If your partner bids Nil, your entire strategy changes. You must actively try to win *every single trick* that your partner is forced to play a high card on, to prevent them from taking the trick and failing their Nil bid.
* **Draw Out the Spades:** If you hold the Ace, King, and Queen of Spades, lead with them immediately. This forces the opponents to play their lower Spades, entirely stripping them of their trump cards and leaving your high Hearts and Clubs safe.
* **Watch the Bags:** Taking more tricks than you bid gives you "bags" (e.g., bidding 4 and taking 5 gives you 1 bag). Accumulating 10 bags results in a massive 100-point penalty. Do not blindly take tricks you don't need.`
  },
  {
    title: "Triple Coins",
    seoContent: `![Triple Coins](https://www.htmlgames.com/uploaded/game/thumb800/triplecoins800x450.webp)

Triple Coins completely revolutionizes the traditional Match-3 formula by abandoning the standard static grid and replacing it with a highly kinetic, physics-driven rotational puzzle wrapped in a bright, numismatic aesthetic. Instead of swapping adjacent tiles, you are presented with a confined play area filled with brightly colored coins (bronze, silver, gold, gems). Your objective is intensely focused on spatial manipulation and gravity management: you must physically rotate the entire play area (or the device/screen) by 90-degree increments. When you rotate the board, gravity shifts, and every single coin tumbles and falls to the new "bottom." When three or more identical coins collide and settle next to each other, they merge into a single, higher-value coin. The ultimate goal is to fuse enough coins to create the ultimate artifact before the screen becomes completely clogged with low-value currency. Triple Coins is a brilliant test of cascade prediction and rotational logic.

## How to Play
* The primary objective is to merge coins to reach the highest possible value before the board fills up.
* The board is filled with coins of various values.
* Use the \`Left Arrow\` and \`Right Arrow\` keys (or on-screen UI buttons) to rotate the entire play area 90 degrees clockwise or counter-clockwise.
* When rotated, gravity immediately pulls all coins down to the new floor.
* **The Merge Mechanic:** When three or more identical coins touch (horizontally or vertically) after settling, they merge into a single coin of the next tier up (e.g., three Bronze coins merge into one Silver coin).
* New, low-value coins periodically drop into the play area to increase the pressure.

## Tips and Tricks
* **Calculate the Tumble (The Golden Rule):** Never rotate the board blindly. Before you press the arrow key, mentally trace the path of the specific coins you want to merge. If you rotate left, will those two silver coins fall together, or will a bronze coin wedge itself between them? You must predict the physical settling of the physics engine.
* **Build in the Corners:** The corners of the play area are your safest holding zones. Try to maneuver your highest-value coins into a specific corner and keep them there. This prevents them from tumbling wildly around the board and getting separated by low-value garbage.
* **The "Drop-Merge" Combo:** The most powerful move is rotating the board so that a massive cluster of bronze merges, which then allows the silver coins resting on top of them to fall perfectly into alignment and merge in a secondary cascade.
* **Don't Panic Rotate:** If the board is getting full, do not just spam the rotate buttons hoping for accidental matches. This usually just scrambles the board further. Take a breath, find two identical high-value coins, and calculate the exact rotation needed to bring them together.
* **Keep the Center Clear:** A clogged center makes moving coins from one side of the board to the other impossible. Try to merge coins near the outer walls.`
  },
  {
    title: "Dark Mahjong Solitaire",
    seoContent: `![Dark Mahjong Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/darkmahjongsolitaire800450.webp)

Dark Mahjong Solitaire executes a brilliant, incredibly satisfying twist on the traditional Chinese tile-matching formula, completely abandoning the brightly lit, airy aesthetic in favor of a brooding, high-contrast, visually striking environment. Set against a pitch-black void, players are presented with massive, overlapping 3D pyramids constructed of tiles. However, these are not standard tiles; the faces of the tiles are jet black, with the traditional iconography (bamboo, characters, dragons) glowing in vibrant neon colors (cyan, magenta, lime green). Your objective is intensely focused: you must meticulously dismantle the structure by finding and pairing identical glowing tiles. The atmosphere is deeply relaxing and visually stunning, trading the tense ticking clocks of arcade games for a soothing, meditative puzzle environment that is significantly easier on the eyes during long play sessions. It is a pure test of visual pairing and sequence planning, enhanced by the high-contrast art style.

## How to Play
* Your primary objective is to clear all the glowing tiles from the board by matching them in identical pairs.
* Use your \`Left Mouse Button\` to click on a "free" (highlighted) tile to select it.
* Click on a matching "free" tile to instantly eliminate both from the board.
* **The Golden Rule of Freedom:** Just like standard Mahjong, a tile is strictly considered "free" (and therefore clickable) ONLY if it has absolutely no other tile resting on top of it, AND it is completely unblocked on at least one of its immediate left or right vertical sides.
* If a tile is wedged tightly between two other tiles horizontally, it cannot be selected.
* The game is won when the board is completely clear.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your absolute highest priority on breaking down the tallest, thickest stacks of tiles in the dead center of the layout. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board offers vastly more horizontal matching options and reveals more hidden tiles simultaneously.
* **Scan by Color First:** The massive advantage of the "Dark" aesthetic is the glowing neon colors. Instead of looking for a specific complex character, you can instantly filter the board by searching only for "the bright magenta tiles." This drastically speeds up your visual processing.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach tiles on the very outer edge of the board, ignore them! Save them. You might desperately need those outer tiles later to match a tile buried deep in the center tower.
* **Use the Undo Button:** If you make a match and it immediately deadlocks the board, use the undo button to reverse it. Always scout the board to see if a specific tile has three visible copies; if it does, match the two that unblock the most hidden tiles.`
  },
  {
    title: "Illustrations 1",
    seoContent: `![Illustrations 1](https://www.htmlgames.com/uploaded/game/thumb800/illustrations1800450.webp)

Illustrations 1 is a masterclass in atmospheric, visually dense puzzle design, stripping the "spot the difference" genre down to its absolute, most captivating and subtly demanding core. Forget searching for random household items; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within stunningly detailed digital artwork. You are presented with two seemingly identical, high-definition illustrations placed side-by-side. These artworks often feature complex fantasy scenes, intricate machinery, or bustling whimsical towns. Your objective is elegantly simple but brutally difficult: locate the subtle, minute discrepancies between the left and right images. The developers are malicious in their subtlety—they do not simply remove massive objects. Instead, they slightly alter the angle of a shadow, change the color of a single background pixel, or remove a tiny gear from a complex machine. The atmosphere is deeply relaxing yet inherently tense. Illustrations 1 is the ultimate brain-training routine for acute observation.

## How to Play
* Your objective is to find every single difference between the two side-by-side illustrations.
* Use your \`Mouse\` to carefully scan the high-definition images.
* When you spot a discrepancy (e.g., a missing button on a coat), click directly on the altered spot on EITHER image.
* Successfully locating a difference will usually draw a circle around it and update your counter.
* Be extremely precise! Randomly spam-clicking around the screen will often result in a heavy time penalty or score deduction.
* Complete the level before the strict time limit expires.

## Tips and Tricks
* **The "Magic Eye" Technique (The Golden Rule):** If you can cross your eyes slightly, try to overlap the left and right images in the center of your vision (like a stereogram or "Magic Eye" poster). When the images perfectly overlap, the subtle differences will literally shimmer or flash in your vision, making them instantly obvious.
* **Divide the Screen:** Do not try to rapidly dart your eyes back and forth across the entire massive image. Mentally divide the screen into a tight grid. Meticulously compare the absolute top-left corner of both images before moving on.
* **Look for Missing Shadows:** The game often removes the shadow of an object, rather than the object itself. Always double-check the lighting and shadows on the floor and walls.
* **Check the Patterns:** The hardest differences are usually tiny alterations to repeating patterns (e.g., one brick on a massive wall is facing the wrong direction, or one stripe on a shirt is missing).
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Neon Dots",
    seoContent: `![Neon Dots](https://www.htmlgames.com/uploaded/game/thumb800/neondots800450.webp)

Neon Dots strips the spatial routing genre down to its absolute, most mathematically pure core, injecting a massive layer of sequential complexity into a vibrant, high-contrast aesthetic. Set against a clean, visually minimalist black void, players are presented with a series of numbered, glowing neon dots scattered seemingly at random across the screen. Your objective is intensely focused and brutally unforgiving: you must draw a continuous, glowing stream of light to connect every single dot in strict numerical ascending order (1, 2, 3, 4...). However, the constraints are severe: the connecting path you draw absolutely CANNOT cross over itself at any point. The atmosphere is deeply cerebral; it is a pure test of geometric routing and topological logic, requiring you to constantly look three numbers ahead to ensure you aren't trapping yourself in a corner of the screen. Neon Dots is a flawless brain-training exercise in spatial planning.

## How to Play
* The primary objective is to connect all numbered dots in ascending order without crossing your own path.
* Use your \`Mouse\` to click and hold on Dot #1.
* Drag the mouse to Dot #2, drawing a glowing line. Continue dragging to 3, 4, 5, etc.
* **The Strict Routing Rule:** The line you are drawing CANNOT intersect or cross over any part of the line you have already drawn.
* If you trap yourself in a corner and cannot reach the next number without crossing a line, you must release the mouse, which usually resets the entire puzzle.
* Connect the final number to complete the level.

## Tips and Tricks
* **Look Ahead (The Golden Rule):** The absolute most common mistake is drawing a straight, direct line from 4 to 5, only to realize that dot 6 is trapped behind that line. Before you connect two dots, physically locate the *next two* dots in the sequence. Always route your line so that the exit path remains open.
* **Hug the Perimeter:** Whenever possible, try to route your connections around the absolute outer edge of the cluster of dots. Hiding your lines on the perimeter leaves the massive center area completely open for complex, crisscrossing routing later in the sequence.
* **The "U-Turn" Strategy:** Often, the only way to reach a dot safely is to draw a massive, exaggerated "U" shape around three other dots. Do not be afraid to draw incredibly long, convoluted lines if it keeps the center of the board unblocked.
* **Identify the Bottlenecks:** Look at the board and find the narrowest gaps between dots. Mentally calculate if a line *must* pass through that gap later in the sequence. If it does, do not accidentally block it early on.
* **Trace with Your Eyes First:** Never just click and start dragging. Trace the entire 1-to-20 sequence with your eyes to spot the topological traps before you commit.`
  },
  {
    title: "Daily Anagram Crossword",
    seoContent: `![Daily Anagram Crossword](https://www.htmlgames.com/uploaded/game/thumb800/daily-anagram-crossword-800x450.webp)

Daily Anagram Crossword completely revitalizes the traditional crossword puzzle format by substituting trivia-based definitions with a purely linguistic challenge. Set against a clean, visually uncluttered digital newspaper layout, players are presented with a standard intersecting grid of blank squares. However, the clues are not historical facts or synonyms. Instead, every single clue is a perfect anagram of the required English word (e.g., if the answer is "EARTH", the clue might be "HEART"). Your objective is intensely focused and relies entirely on vocabulary manipulation and rapid letter unscrambling: you must physically type the correct anagram into the grid. The atmosphere is deeply cerebral and intentionally demanding, requiring players to constantly juggle letters in their head to find valid combinations that also perfectly intersect with the other words on the board. Offering a fresh, algorithmically generated puzzle every day, this is the ultimate brain-training routine for English language enthusiasts.

## How to Play
* The primary objective is to completely fill the crossword grid with valid English words.
* Every clue provided in the "Across" and "Down" lists is a direct anagram of the answer. You must rearrange all the letters in the clue to form the solution.
* Use your \`Mouse\` to click on a specific row or column in the grid to highlight it.
* Type the correct answer using your \`Keyboard\`.
* **The Intersections:** The core of the crossword mechanic remains. If you solve an "Across" word, it provides you with free letters for the intersecting "Down" words, drastically narrowing the possible anagram solutions.
* A fresh puzzle is generated every 24 hours.

## Tips and Tricks
* **Target the Short Words First:** Do not stare at an 8-letter anagram for five minutes. Immediately scan the clues for 3-letter or 4-letter anagrams. They have drastically fewer permutations and can usually be solved instantly, providing crucial intersection letters for the longer words.
* **Look for Common Prefixes/Suffixes:** If you have an anagram that contains the letters E, R, T, I, O, N, look for common English endings like "-TION" or "-ER". Mentally remove those letters from the anagram and see what is left.
* **Write it in a Circle:** If you are stuck on a long anagram, grab a physical piece of paper and write the scrambled letters in a circle, rather than a straight line. This breaks your brain's tendency to read them sequentially and makes finding hidden words much easier.
* **Use the Grid:** If a 6-letter anagram has two letters already filled in by intersecting words (e.g., _ A _ _ E _), you don't even need to unscramble the whole thing; you just need to find a word that fits that specific physical structure.
* **Don't Guess:** The intersections must be mathematically perfect. Do not force a word that "mostly" fits if it ruins a crossing word.`
  },
  {
    title: "Number Maze",
    seoContent: `![Number Maze](https://www.htmlgames.com/uploaded/game/thumb800/numbermaze800450.webp)

Number Maze strips the spatial routing genre down to its absolute, most mathematically pure core, injecting a massive layer of sequential complexity into a clean, minimalist puzzle aesthetic. Set against a visually uncluttered grid, players are presented with a series of numbered dots scattered across the board. Your objective is intensely focused and brutally unforgiving: you must draw a continuous stream of light to connect every single dot in strict numerical ascending order (0, 1, 2, 3...). However, the constraints are severe: you must physically pass through EVERY SINGLE EMPTY CELL on the grid, and your connecting path absolutely CANNOT cross over itself at any point. The atmosphere is deeply cerebral; it is a pure test of geometric routing, topological logic, and space filling, requiring you to constantly look three numbers ahead to ensure you aren't trapping yourself in a corner. Number Maze is a flawless brain-training exercise in spatial planning.

## How to Play
* The primary objective is to connect all numbered dots in ascending order AND fill every single empty space on the grid without crossing your own path.
* Use your \`Mouse\` to click and hold on Dot #0.
* Drag the mouse through the empty grid cells to Dot #1, drawing a colored line. Continue dragging to 2, 3, etc.
* **The Strict Routing Rule:** The line you are drawing CANNOT intersect or cross over any part of the line you have already drawn.
* **The Fill Rule:** To complete the level, absolutely 100% of the grid squares must be filled with your path.
* If you trap yourself in a corner and cannot reach the next number, you must retrace your steps or reset.

## Tips and Tricks
* **Beware the "Shortest Path" Trap (The Golden Rule):** Because you MUST fill every single empty square on the board, the most direct, straight line from 1 to 2 is almost always wrong. You must intentionally draw long, snaking, convoluted paths that snake through the empty corners before connecting to the next number.
* **Fill the Dead Ends Immediately:** If you see a 3x3 block of empty space in the corner of the grid, route your line into that corner and snake back and forth to fill it completely *before* moving on to the next number. If you bypass it, you can never go back without crossing your line.
* **Look Ahead:** Before you connect two dots, physically locate the *next* dot in the sequence. Always route your line so that the exit path to the next number remains open.
* **Hug the Perimeter:** Whenever possible, try to route your connections around the absolute outer edge of the grid. Hiding your lines on the perimeter leaves the center area open for complex routing.
* **Trace with Your Eyes First:** Never just click and start dragging. Trace the entire sequence with your eyes to spot the topological traps before you commit.`
  },
  {
    title: "Avoider",
    seoContent: `![Avoider](https://www.htmlgames.com/uploaded/game/thumb800/avoider800x450.webp)

Avoider strips the reflex-platformer genre down to its absolute, most tension-fueled and visually demanding core, delivering a pure, unadulterated test of rapid trajectory prediction, rhythmic timing, and split-second manual dexterity. Moving entirely away from complex narratives or deep exploration, this title focuses entirely on a highly stylized, minimalist vertical environment. Your objective is brutally elegant: you control a simple geometric avatar (usually a cube or ball) located near the bottom of the screen. An endless, unrelenting barrage of horizontal platforms, laser beams, or spikes falls from the ceiling (or scrolls upward). You must aggressively focus on the incoming obstacles and tap precisely to jump *over* or maneuver *around* them to survive as long as possible. The atmosphere is deeply kinetic; acceleration is a constant, unrelenting force, and the game rapidly spirals into a chaotic test of hand-eye coordination. Avoider is a flawless tactical survival experience.

## How to Play
* The primary objective is to survive as long as possible by dodging the incoming horizontal platforms and obstacles.
* You control a character that is constantly bouncing, or one that requires manual jumping.
* Use your \`Spacebar\` or \`Left Mouse Button\` (or tap the screen) to jump.
* Use the \`Left Arrow\` and \`Right Arrow\` keys to maneuver your character horizontally in mid-air.
* **The Fatal Error:** If your character physically touches a spike, a laser, or gets crushed by a moving platform, you instantly fail the level.
* The game speed and obstacle density will continuously accelerate the longer you survive.

## Tips and Tricks
* **Focus on the Gap, Not the Obstacle:** The absolute most common mistake is staring directly at the incoming spikes. Your brain naturally steers toward what you are looking at. You must train your eyes to lock onto the *empty spaces* between the platforms. Stare at the safety, not the danger.
* **Control Your Jump Height:** In many versions of this game, tapping lightly results in a short hop, while holding the spacebar results in a massive leap. You must master the micro-hop to navigate tightly packed, low-ceiling corridors where a full jump will kill you.
* **Stay Centered:** Do not hug the absolute left or right walls of the screen unless forced to. Staying directly in the center of the screen gives you the maximum amount of reaction time to move left or right when a new obstacle appears.
* **Embrace the Rhythm:** At high speeds, you stop seeing individual platforms and start seeing a rhythm. Trust your peripheral vision and your muscle memory. Tap to the beat of the obstacles.
* **Anticipate the Spawn:** Always keep your peripheral vision locked on the very top edge of the screen to identify the next threat a fraction of a second before it becomes a problem.`
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
