const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Klootzakken",
    seoContent: `![Klootzakken](https://www.htmlgames.com/uploaded/game/thumb800/klootzakken800450.webp)

Klootzakken delivers a brilliant, highly competitive digital adaptation of the notoriously aggressive Dutch shedding card game (closely related to President or Scum), stripping away complex board mechanics in favor of a brutally calculating, perfect-information duel of social hierarchy and card management. Set against a clean, visually minimalist green felt table, players are locked in a relentless four-player battle against highly capable AI opponents. Your objective is intensely focused: you must be the absolute first player to empty your hand of all cards. However, the game relies entirely on a strict ranking hierarchy (where the 3 is the highest card in the deck, and the 4 is often the lowest). The atmosphere is deeply competitive; the winner of the round becomes the "President" (or equivalent) for the next round, earning massive advantages, while the loser becomes the titular "Klootzak" and must surrender their best cards. The visual presentation is crisp, utilizing high-definition traditional playing cards that ensure perfect readability. Klootzakken is a pure test of tempo control, baiting opponents, and aggressive card shedding.

## How to Play
* The primary objective is to be the first player to discard every single card in your hand.
* The rank of cards is highly unique: **3 is the highest**, followed by 2, A, K, Q, J, 10, 9, 8, 7, 6, 5, 4 (lowest).
* The first player leads by playing a single card, a pair, a three-of-a-kind, or a four-of-a-kind into the center.
* Use your \`Mouse\` to click the cards in your hand, then click the "Play" button.
* The next player MUST play the exact same number of cards (e.g., a pair), but the value MUST be strictly higher than the previous play.
* If you cannot beat the previous play, or choose not to, you must "Pass".
* If all other players pass, the last person to play a card wins the trick and gets to lead the next hand.

## Tips and Tricks
* **Control the Lead:** The absolute most powerful position in this game is winning a trick and getting to lead the next one. This allows you to dump your lowest, most useless cards (like single 4s or 5s) safely. Always try to secure the lead.
* **Don't Waste Your 3s Early:** The 3s and 2s are your absolute best defensive weapons. Do not burn them to win a trick early in the round unless it guarantees you can immediately dump a massive hand of garbage cards. Save them to regain control in the late game.
* **Break Up Pairs Strategically:** If someone leads a single King, and you hold a pair of Aces, you must make a brutal tactical decision. Breaking your pair to play one Ace might win the trick, but it leaves you with a single, vulnerable Ace later.
* **The "Pass" Strategy:** You do not *have* to play just because you can. If someone plays a 9, and you hold a 10 and a 3, passing on the 10 might be mathematically smarter to force another player to burn their high cards.
* **Pay Attention to the Ranks:** If you are the "President" in the next round, you receive the two best cards from the "Klootzak," making it incredibly easy to stay in power. Fight desperately to avoid finishing last.`
  },
  {
    title: "President",
    seoContent: `![President](https://www.htmlgames.com/uploaded/game/thumb800/president800450.webp)

President delivers an incredibly deep, mathematically rich digital adaptation of the universally recognized shedding card game (also known as Scum or Capitalism), stripping away complex board mechanics in favor of a brutally calculating duel of social hierarchy and card management. Set against a clean, visually minimalist green felt table, players are locked in a relentless four-player battle against highly capable AI opponents. Your objective is intensely focused: you must be the absolute first player to empty your hand of all cards. However, the game relies entirely on a strict ranking hierarchy (where the 2 is often the highest card). The atmosphere is deeply competitive; the winner of the round ascends to the rank of "President" for the next round, earning massive strategic advantages, while the last-place loser becomes the "Scum" and must surrender their absolute best cards to the President. The visual presentation is crisp, utilizing high-definition traditional playing cards that ensure perfect readability. President is a pure test of tempo control, baiting opponents, and aggressive card shedding.

## How to Play
* The primary objective is to be the first player to discard every single card in your hand.
* The typical rank of cards from highest to lowest is: 2, A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3 (lowest).
* The first player leads by playing a single card, a pair, a three-of-a-kind, or a four-of-a-kind into the center.
* Use your \`Mouse\` to click the cards in your hand, then click the "Play" button.
* The next player MUST play the exact same number of cards (e.g., a pair), but the value MUST be strictly higher than the previous play.
* If you cannot beat the previous play, or choose not to, you must click "Pass".
* If all other players pass, the last person to play a card wins the trick and gets to lead the next hand.

## Tips and Tricks
* **Control the Lead:** The absolute most powerful position in this game is winning a trick and getting to lead the next one. This allows you to dump your lowest, most useless cards (like single 3s or 4s) safely. Always try to secure the lead.
* **Don't Waste Your 2s Early:** The 2s are your absolute best defensive weapons (often acting as trick-clearers). Do not burn them to win a trick early in the round unless it guarantees you can immediately dump a massive hand of garbage cards.
* **Break Up Pairs Strategically:** If someone leads a single King, and you hold a pair of Aces, you must make a brutal tactical decision. Breaking your pair to play one Ace might win the trick, but it leaves you with a single, vulnerable Ace later.
* **The "Pass" Strategy:** You do not *have* to play just because you can. If someone plays a 9, and you hold a 10 and an Ace, passing on the 10 might be mathematically smarter to force another player to burn their high cards.
* **The Social Tax:** The President receives the two highest cards from the Scum, and passes their two worst cards back. This makes the rich richer. You must fight desperately to avoid finishing last.`
  },
  {
    title: "River Solitaire",
    seoContent: `![River Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/river-solitaire-800x450.webp)

River Solitaire is a brilliant, highly complex variation of the classic Klondike formula that fundamentally alters the strategic ceiling by introducing a massive, unyielding row of face-up cards (the "River") right in the center of the board. Set against a clean, visually uncluttered green felt aesthetic, players are tasked with the familiar goal of moving all 52 cards into four foundation piles. However, the initial deal creates a sprawling tableau, and the cards residing in the "River" are essentially locked in place until they can be specifically moved directly to the tableau columns or the foundations. They cannot be built upon. The atmosphere is deeply calculating and immensely satisfying, requiring players to possess a masterful understanding of card sequencing, cascade math, and extreme bottleneck management. The visual presentation is exceptionally crisp, featuring high-definition traditional playing cards that ensure perfect readability even when the massive columns are fully extended. River Solitaire is an uncompromising test of logic for veteran card players who demand total control.

## How to Play
* The primary objective is to move all 52 cards into the four foundation piles at the top right, building upward in suit from Ace to King.
* The main tableau consists of columns where cards must be built downward in **alternating colors** (e.g., a Red 8 can only be placed on a Black 9).
* Use your \`Mouse\` to click and drag cards between columns.
* **The River Rule:** A row of cards is dealt horizontally across the middle of the board. You CANNOT place any cards onto these River cards. You can only take cards FROM the River and place them onto valid spots in the main tableau or the foundations.
* Only a King (or a valid sequence starting with a King) can be moved into a completely empty tableau column.
* Use the draw pile at the top left to deal new cards when you run out of valid moves.

## Tips and Tricks
* **Drain the River Early:** Your absolute highest priority is removing the cards trapped in the River. Because you cannot build on them, they are essentially dead weight blocking your view. If you can move a River card onto the tableau, do it immediately.
* **Empty Columns are Crucial:** An empty column is the most powerful tool in the game, as it is the only place you can drop a King to start a fresh, clean sequence. Prioritize clearing the shorter columns first to create these spaces.
* **Don't Rush to the Foundations:** Just because you *can* move a Black 5 to the foundation doesn't mean you *should*. Sometimes keeping it on the tableau is necessary to hold a Red 4 that you desperately need to anchor a massive stack.
* **Calculate the Cascade:** Before moving a massive stack, look at the card it leaves behind. Does moving this stack unblock a 4 that you desperately need for another column? Never move a card blindly.
* **Save Your Draw Cards:** Exhaust absolutely every single possible sequence and River reveal on the main board before you click the draw pile. Your draw pile is your lifeline; wasting it early is a guaranteed loss.`
  },
  {
    title: "Medieval Merge",
    seoContent: `![Medieval Merge](https://www.htmlgames.com/uploaded/game/thumb800/medievalmerge800450.webp)

Medieval Merge injects a massive dose of epic, historical fantasy into the highly addictive, mathematical puzzle genre, replacing sterile numbers or abstract shapes with beautifully illustrated, knightly iconography. Set against a highly detailed, cobblestone grid within a castle courtyard, players are tasked with managing a board filled with brightly colored wooden shields, iron swords, heavy armor, and golden crowns. Instead of swiping the entire board (like 2048) or swapping adjacent tiles, you must physically draw a line to connect three or more identical items. When connected, they merge into a single, higher-tier medieval item (e.g., three basic shields merge into an iron helmet). The atmosphere is deeply engaging and immensely satisfying, accompanied by sweeping, cinematic orchestral music. The visual presentation is highly polished, utilizing crisp, high-definition sprites that crackle with magical energy when merged. Medieval Merge is a pure, unpressured test of sequence planning and inventory management, requiring you to carefully build massive chains without cluttering your armory.

## How to Play
* The primary objective is to fulfill specific collection goals (e.g., create 3 Golden Crowns) before running out of moves or space on the grid.
* Use your \`Mouse\` to click and hold the \`Left Mouse Button\` on a medieval item.
* Drag your mouse across adjacent identical items (horizontally, vertically, or diagonally) to draw a connecting line.
* You must connect at least THREE identical items to trigger a merge.
* Release the mouse button to merge the connected items into a single, upgraded item at the exact location of the *last* item in your chain.
* **The Upgrade Path:** Items follow a strict evolutionary path (e.g., Shield -> Sword -> Helmet -> Armor -> Crown).

## Tips and Tricks
* **Control the Merge Point:** The absolute most critical mechanic in this game is understanding that the new, upgraded item spawns exactly where you *release* your mouse click. Always end your chain in a strategic location (usually an open corner) to avoid trapping the new item behind a wall of basic shields.
* **Build Massive Chains:** While three items are required to merge, connecting five, seven, or ten items simultaneously often yields massive bonus points and sometimes spawns powerful board-clearing bombs or catapults. Never settle for three if you can safely connect five.
* **Keep High Tiers Together:** Try to build your highest-tier items (like Crowns or Armor) directly next to each other. If you randomly spawn a Crown in the top left corner, and another Crown in the bottom right, it will be incredibly difficult to eventually merge them.
* **Clear the Clutter:** If the board is filling up with low-tier wooden shields that you don't need, use a few moves to merge them just to get them out of the way and free up physical space on the grid.
* **Plan the Cascade:** Before you execute a merge, look at what the new item will be. Will that new item immediately sit next to two other identical items, allowing for a rapid, secondary combo?`
  },
  {
    title: "Zoo Mahjong",
    seoContent: `![Zoo Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/zoomahjong800450.webp)

Zoo Mahjong completely revolutionizes the massively popular "Mahjong Solitaire" formula by abandoning the traditional pairing mechanic and replacing it with a highly addictive, inventory-based "Match-3" collection system wrapped in a vibrant, overwhelmingly adorable animal aesthetic. Instead of simply clicking two exposed tiles to clear them, you are presented with a massive, overlapping 3D pyramid of tiles featuring various beautifully illustrated zoo animals (lions, pandas, elephants, monkeys). Your objective is intensely focused: you must click tiles to move them down into a wooden holding tray located at the bottom of the screen. When exactly three IDENTICAL animal tiles are placed in the tray, they instantly merge and disappear. The atmosphere is deeply calculating and immensely satisfying, perfectly simulating the tactical tension of inventory management. The visual presentation is exceptionally polished, utilizing crisp, high-definition graphics that ensure the complex, overlapping layers remain perfectly readable. Zoo Mahjong is a brilliant test of sequence planning and bottleneck management, as a full tray means instant defeat.

## How to Play
* The primary objective is to completely dismantle the overlapping structure by moving all tiles into your holding tray in groups of three.
* Use your \`Left Mouse Button\` to click any fully exposed tile on the main board to instantly drop it into your holding tray at the bottom.
* A tile is strictly considered "exposed" if absolutely no other tile is resting directly on top of it.
* Your holding tray can only hold a maximum of SEVEN tiles at any given time.
* **The Rules of Removal:** When exactly three IDENTICAL animal tiles are sitting anywhere in your holding tray, they will automatically merge and be removed, freeing up crucial space.
* The game is immediately over if your tray reaches its 7-tile limit without triggering a match.

## Tips and Tricks
* **Manage Your Tray Space (The Golden Rule):** Treat your holding tray like pure gold. Never have more than four "unmatched" singleton animals sitting in your tray at once. Always leave two or three empty slots so you have the flexibility to dig through the pile for the matches you actually need.
* **Dig for the Third Piece:** If you have two Panda tiles in your tray, your absolute highest priority is finding the third Panda tile to clear them. It is acceptable to temporarily fill your tray with blocking items, *provided* that reaching the buried Panda instantly triggers a clear and frees the space again.
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles. Leaving massive vertical columns for the late game is a guaranteed way to run out of options.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal options and reveals more hidden tiles simultaneously.
* **Use the "Undo" (If Available):** This game is mathematically unforgiving. If you click an Elephant tile and realize it completely blocks your tray without clearing anything, undo the move instantly.`
  },
  {
    title: "10 to 20",
    seoContent: `![10 to 20](https://www.htmlgames.com/uploaded/game/thumb800/10to20800450.webp)

10 to 20 fundamentally rewrites the rules of the traditional numerical sliding puzzle (like the viral hit 2048) by completely abandoning the chaotic, full-board swiping mechanic in favor of a brutally calculating, precision-based drag-and-drop system. Set against a clean, visually minimalist grid, players are presented with a board filled with brightly colored, numbered tiles (usually starting around 10). Your objective is intensely focused and heavily reliant on sequence planning: you must physically drag one specific number directly onto an adjacent, identical number. When they merge, they do not double (like 10 + 10 = 20); instead, they simply increment by exactly one value (10 + 10 = 11). Your ultimate goal is to navigate this incredibly slow, incremental mathematical climb to reach the elusive tile "20". The atmosphere is deeply cerebral and immensely satisfying; you are essentially managing a massive game of localized arithmetic while simultaneously preventing the board from clogging up with unmatchable numbers. The visual presentation is highly functional, utilizing stark typography.

## How to Play
* The primary objective is to strategically merge numbers to eventually create a tile with the value of "20".
* Use your \`Mouse\` to click and hold the \`Left Mouse Button\` on any numbered tile.
* Drag that tile directly onto an adjacent (horizontally or vertically touching) tile of the EXACT SAME number.
* **The Incremental Merge Rule:** When you merge two identical numbers (e.g., a 12 and a 12), they disappear and a single new tile is created with a value ONE HIGHER than the originals (it becomes a 13).
* The new upgraded tile will spawn in the location where you *released* your mouse click.
* As you play, new random, lower-value tiles will spawn on the board, constantly threatening to trap your high numbers.

## Tips and Tricks
* **Control the Corners:** Your absolute most critical strategy is designating one specific corner of the grid (usually bottom-right or bottom-left) as the permanent home for your single highest-value tile. Never, ever move your highest tile out of that corner. Build everything else toward it.
* **Build the "Snake":** To effectively feed your highest tile, you must arrange the board in a descending numerical "snake" pattern leading away from the corner. (e.g., The corner is 15, the tile next to it is 14, the next is 13). This allows for massive, rapid chain reactions.
* **Don't Strand the High Numbers:** If you accidentally create a 14 in the top-left corner, and your main 15 is in the bottom-right corner, you are in serious trouble. Those two numbers will likely never meet because the physical distance is too great to bridge with smaller tiles.
* **Calculate the Spawn:** When you merge two tiles, one empty space is created, and usually, a new low-level tile immediately spawns. Always assume the new tile will spawn in the worst possible location. Try to leave your empty space on the outer edges.
* **Work Backwards:** If you need to make a 14, you need two 13s. Look at your board and figure out exactly how to build the second 13 without destroying your existing setup.`
  },
  {
    title: "SteamJong",
    seoContent: `![SteamJong](https://www.htmlgames.com/uploaded/game/thumb800/steamjong-800x450.webp)

SteamJong plunges the ancient, highly structured mechanics of traditional Chinese tile-matching into a breathtaking, deeply atmospheric environment of clanking gears, brass pipes, and Victorian industrial machinery. Moving far beyond the sterile, flat green felt of standard solitaire games, this title constructs massive, complex architectural pyramids using beautifully illustrated tiles depicting incredibly crisp, high-definition steampunk iconography—pocket watches, goggles, copper gears, airships, and pressure gauges. The atmosphere is incredibly immersive and slightly tense, trading the meditative bamboo themes for a puzzle environment that feels like you are defusing a complex, steam-powered mechanism. You are tasked with analyzing towering, overlapping tile structures, meticulously searching for exposed pairs to dismantle the board. The visual presentation is exceptionally polished, utilizing a rich, metallic color palette of bronze, gold, and steel that makes identifying matching items incredibly intuitive, even when the board is massively congested. SteamJong is a highly successful thematic reskin of a timeless formula.

## How to Play
* Your objective is to completely clear the entire screen by matching identical pairs of steampunk-themed tiles.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting directly on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles heavily overlap, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden gears buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, you lose.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles in the dead center of the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options and reveals more hidden tiles simultaneously.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach brass gear tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a gear tile buried deep in the center tower.
* **Memorize the Metals:** Because many of the steampunk items are metallic, they can blend together at a quick glance. Take a moment to mentally categorize them by their color tone (like "the bright copper one" or "the dark iron one") to speed up your scanning.
* **Use the Reshuffle (If Available):** Treat the shuffle button like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably deadlocked.`
  },
  {
    title: "Skip Cards",
    seoContent: `![Skip Cards](https://www.htmlgames.com/uploaded/game/thumb800/skipcards800450.webp)

Skip Cards delivers an incredibly addictive, fast-paced digital adaptation of the universally loved sequence-building card game (heavily inspired by Skip-Bo and Spite and Malice), completely stripping away complex trick-taking mechanics in favor of a brutally calculating race to empty your stockpile. Set against a clean, visually minimalist green felt table, players are locked in a relentless battle against a highly capable AI opponent. Your objective is intensely focused: you have a massive, face-down personal stockpile of cards. You must systematically draw from your hand and move cards into four communal building piles in the center of the board, playing them in strict ascending numerical order (from 1 up to 12). The atmosphere is deeply cerebral; it is a pure test of cascade math, inventory management, and aggressive blocking, as you actively try to deny your opponent the specific numbers they need to advance. The visual presentation is highly polished, utilizing crisp, distinct typography that ensures perfect readability. Skip Cards is the ultimate sequence puzzle.

## How to Play
* The primary objective is to be the absolute first player to empty your personal "Stockpile" (the large pile of cards usually on the left).
* **The Building Piles:** There are four communal building piles in the center. Cards MUST be played onto these piles in strict ascending order, starting with a 1 and ending with a 12. Once a 12 is placed, that pile is cleared and a new 1 can be started.
* On your turn, use your \`Mouse\` to play cards from your Hand, your four Discard piles, or the top card of your Stockpile into the center.
* **The Skip Card:** The "Skip" card is a Wildcard. It can be played as ANY number in the sequence.
* At the end of your turn, you MUST discard one card from your hand into one of your four personal discard piles.

## Tips and Tricks
* **The Stockpile is Everything:** Your hand and your discard piles do not matter for winning; they are only tools. Every single move you make should be analyzed by asking: "Does this action help me play the top card of my Stockpile?"
* **Hoard the Skip Cards:** The wildcards are the most powerful weapons in the game. Do not waste them to just clear your hand. Save them exclusively to unblock your Stockpile when you are stuck on a specific number, or to complete a 12-sequence to clear the board.
* **Organize Your Discards:** Do not just throw cards randomly into your four discard piles. Organize them sequentially (e.g., put a 7 on top of an 8, on top of a 9) so you can peel them off in order when you need them. Never bury a useful 3 under a useless 11.
* **Block Your Opponent:** Pay very close attention to the top card of your opponent's Stockpile. If they need a 5 to win the game, and the center piles are currently at 4, DO NOT play a 4. Intentionally stall the board to deny them the move.
* **Don't Be Afraid to Pass:** Sometimes the best move is playing nothing, discarding a useless card, and drawing a fresh hand of five cards on your next turn to hunt for the numbers you actually need.`
  },
  {
    title: "Animal Tetris",
    seoContent: `![Animal Tetris](https://www.htmlgames.com/uploaded/game/thumb800/animaltetris800480.webp)

Animal Tetris delivers the absolute purest, most unadulterated distillation of the legendary, gravity-driven block-falling arcade formula, completely stripping away the abstract, sterile geometric shapes of the Soviet original in favor of a vibrant, overwhelmingly adorable cast of highly stylized animal characters. Set against a clean, visually minimalist grid (the "Matrix"), players are tasked with managing a relentless downpour of complex shapes (Tetrominoes), but every single block comprising those shapes is a brightly colored, high-definition sprite of a cat, dog, panda, or frog. As the animal pieces descend from the ceiling, you must actively steer and rotate them, dropping them into the accumulating stack. Your objective is elegantly simple yet brutally difficult in execution: you must perfectly interlock the animals to form solid, unbroken horizontal lines across the entire width of the grid. The atmosphere is deeply kinetic and incredibly stressful, contrasting beautifully with the cute aesthetic. Animal Tetris is a pure, uncompromising test of reflex timing and rapid spatial cascade planning.

## How to Play
* The primary objective is to survive as long as possible by clearing horizontal lines before the stack of animal blocks reaches the top of the screen.
* Tetrominoes (made of 4 animal blocks) will fall from the top of the screen one at a time.
* Use the \`Left Arrow\` and \`Right Arrow\` keys to steer the falling block horizontally across the columns.
* Use the \`Up Arrow\` key to instantly rotate the falling block 90 degrees.
* Use the \`Down Arrow\` key to accelerate the block's fall speed (Soft Drop).
* Press the \`Spacebar\` to instantly slam the block straight to the bottom of the stack (Hard Drop).
* When you create a solid horizontal line of 10 animal blocks with no empty gaps, that line vanishes.

## Tips and Tricks
* **Keep the Board Flat:** Your absolute highest priority is ensuring the top layer of your stack remains as flat and even as possible. Massive spikes and deep, narrow valleys make it incredibly difficult to maneuver and rotate falling blocks later in the game.
* **Build for the "Tetris" (Line Piece):** The most efficient way to score massive points is to intentionally leave exactly one single vertical column completely empty on the far left or right edge of the board. Build a solid 4-line high wall next to it, and wait for the long, straight piece (the "I" block) to drop in and clear four lines simultaneously.
* **Don't Depend on the Line Piece:** While building for a 4-line clear is great, do not stubbornly hold out for a straight piece if your board is dangerously high. Sometimes you must "burn" lines by clearing them one or two at a time with jagged pieces just to lower the stack and survive.
* **Use the Hard Drop Strategically:** Do not let pieces float down slowly in the early levels. The faster you hard-drop (\`Spacebar\`) pieces, the more time you have to analyze the board state before the *next* piece spawns.
* **Watch the "Next Piece" Indicator:** Knowing exactly what shape is falling next completely dictates where you should rotate and place your current piece. Never place a piece without checking the preview window.`
  },
  {
    title: "Pyramid of Love",
    seoContent: `![Pyramid of Love](https://www.htmlgames.com/uploaded/game/thumb800/pyramidoflove800450.webp)

Pyramid of Love completely re-invents the complex, alternating-color mechanics of standard card sorting by stripping it down to a brutally elegant, mathematically pure game of addition, all wrapped in a visually stunning, incredibly romantic Valentine's Day aesthetic. Moving away from the green felt of a casino, this title constructs a massive, overlapping triangular structure of custom-designed playing cards featuring hearts, roses, and Cupids. Your objective is intensely focused: completely dismantle the massive pyramid by pairing exposed cards that mathematically add up to exactly thirteen. The atmosphere is deeply calculating but incredibly thematic, trading intense arcade pressure for a soothing, ambient puzzle environment complete with soft music and warm colors. The visual presentation is exceptionally polished, utilizing crisp, highly legible typography that ensures perfect readability even when the massive card structure is heavily congested. It is a masterclass in taking a simple arithmetic concept and turning it into a highly addictive, atmospheric puzzle experience.

## How to Play
* Your primary objective is to clear all the cards from the massive pyramid structure.
* Use your \`Left Mouse Button\` to click on any two fully exposed (unblocked) cards whose numerical values add up to exactly 13.
* **Card Values:** Number cards are worth their face value (e.g., a 7 and a 6 = 13). Jacks are 11 (requires a 2). Queens are 12 (requires an Ace). Kings are exactly 13 and can be clicked individually to instantly remove them.
* A card is strictly considered "exposed" only if there is absolutely no other card resting on top of it.
* If you have no valid pairs of 13 on the pyramid, click the face-down draw pile at the bottom to reveal a new card to use.

## Tips and Tricks
* **Prioritize the Pyramid Over the Draw Pile:** If you have a 5 exposed on the pyramid, and a 5 in your draw pile, and you need to pair an 8 on the board... ALWAYS use the 5 on the pyramid. You must prioritize dismantling the structure over emptying the draw pile.
* **Dig Evenly:** Do not drill a deep hole down one specific side of the pyramid. Try to peel cards away evenly across the entire structure. An even, flat pyramid offers vastly more exposed cards and potential pairings.
* **Save the Kings:** Because Kings equal 13 by themselves, they can be removed instantly. However, if they are not blocking anything important, leave them on the board. They don't hurt you, and occasionally you might accidentally click a King when you meant to click something else.
* **Track Your Cards:** If you desperately need a 4 to clear a 9, take a quick glance at the discard pile. If all four 4s have already been played, you know for a mathematical fact that the pyramid is dead and you must restart.
* **The "Undo" Button (If Available):** Use it strategically! If you pair a 10 from the draw pile with a 3 on the board, but realize another 3 was blocking a massive stack of hidden cards, undo the move and pair the 10 with the *blocking* 3.`
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
