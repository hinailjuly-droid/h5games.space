const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Granada Solitaire",
    seoContent: `![Granada Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/granadasolitaire800450.webp)

Granada Solitaire breathes new life into the traditional card-sorting puzzle genre by introducing a complex, multi-foundation layout that drastically elevates the strategic ceiling. Moving away from the simple four-suit foundations of standard Klondike, Granada Solitaire challenges players with an intricate dual-system: four foundations that build upward in suit, and four entirely separate foundations that build downward. This seemingly simple twist fundamentally alters how you approach the tableau, requiring intense forethought and a deep understanding of card sequencing. Set against a beautifully minimalist, distraction-free backdrop, the game allows players to focus entirely on the cerebral challenge at hand. The visual presentation is crisp and elegant, utilizing high-resolution card face assets that are easily readable even when stacked deep in the tableau. The animations are snappy and responsive, ensuring that the physical act of dragging and dropping cards feels incredibly fluid and satisfying. Granada Solitaire is a pure, unadulterated test of logic and patience, perfect for veteran card players looking for a more demanding variation of a timeless classic.

## How to Play
* The primary objective is to move every single card from the tableau into the eight foundations at the top of the screen.
* Use your \`Mouse\` to click and drag cards.
* The four left foundations must be built upwards in ascending order, strictly following the same suit (e.g., Hearts A to K).
* The four right foundations must be built downwards in descending order, strictly following the same suit (e.g., Spades K to A).
* You can move cards from the central tableau either into the foundations, or down to the open holding cells at the bottom of the screen.
* Click the main draw pile to deal four new open cards into the holding cells.

## Tips and Tricks
* **Protect the Extremes:** Aces and Kings are the lifeblood of this game. Because you have foundations building both up and down, freeing up Aces and Kings should be your absolute top priority.
* **The Middle Ground:** Cards like 6s, 7s, and 8s are incredibly dangerous. Be very careful where you place them in the tableau, as they can easily block both ascending and descending sequences.
* **Utilize the Holding Cells:** The bottom open cards are essentially free storage. Use them strategically to unearth buried cards in the main tableau, but do not fill them up completely unless absolutely necessary.
* **Scan Before Dealing:** Before clicking the draw pile for new cards, exhaust every single possible move on the board. A dealt card might cover something you desperately needed.
* **Play the Reverse:** Remember that you can move cards from an ascending foundation into a descending one if it helps free up a stuck sequence on the board.`
  },
  {
    title: "Tri Puzzle",
    seoContent: `![Tri Puzzle](https://www.htmlgames.com/uploaded/game/thumb800/tripuzzle800450.webp)

Tri Puzzle distills the geometric puzzle genre down to its absolute, most captivating core, offering a serene yet deeply intellectually stimulating experience. In an era dominated by hyper-kinetic action games and convoluted upgrade trees, this game beautifully resurrects the intimate, highly satisfying nature of pure spatial reasoning. You are presented with a series of complex, abstract silhouettes and a collection of distinctly shaped, colorful triangular puzzle pieces. The objective is elegantly simple: fit the pieces together to perfectly fill the silhouette. However, the execution requires meticulous planning and a sharp eye for geometry. The atmosphere is purely cerebral, completely devoid of stressful timers, punishing fail states, or distracting microtransactions. It is a pure test of your ability to mentally rotate shapes and visualize negative space. The visual style is highly appealing in its minimalist approach, utilizing incredibly crisp, vibrant vector graphics that ensure the puzzle pieces pop against the dark, calming background. The brilliance of Tri Puzzle lies entirely in its uncompromising dedication to core spatial puzzle mechanics and a steadily increasing difficulty curve that forces players to think outside the traditional grid.

## How to Play
* The goal of every level is to completely fill the empty geometric shape located in the center of the screen.
* Use your \`Left Mouse Button\` to click and drag the available colorful puzzle pieces from the bottom tray into the central shape.
* The pieces cannot be rotated; you must find their exact required placement based on their default orientation.
* A level is successfully completed only when every single piece has been placed and no empty space remains in the silhouette.
* If a piece does not fit, simply drag it back to the tray to remove it from the board.

## Tips and Tricks
* **Start with the Corners:** The most acute, sharpest angles of the silhouette are usually the easiest to fill because only a few specific pieces will physically fit into them. Always anchor your puzzle from the sharpest points inward.
* **Identify the Oddballs:** Look for pieces that have extremely unusual shapes, like long straight lines or strange jagged edges. These often have only one possible valid location on the board.
* **Work the Perimeter:** Similar to a traditional jigsaw puzzle, try to establish the outer edges of the silhouette first before attempting to fill in the dense center.
* **Process of Elimination:** If you have three pieces left and one clearly doesn't fit in the remaining hole, you know you have made a mistake earlier in the puzzle. Pull pieces out and try a different configuration.
* **Don't Force It:** If you are stuck, take all the pieces out and start completely over. Your brain often gets "locked" into seeing a wrong solution, and a clean slate is the only way to reset your perspective.`
  },
  {
    title: "Mahjong Connect Merge",
    seoContent: `![Mahjong Connect Merge](https://www.htmlgames.com/uploaded/game/thumb800/mahjongconnectmerge800450.webp)

Mahjong Connect Merge brilliantly fuses the ancient tile-matching traditions of Mahjong with the highly addictive, exponential number-crunching mechanics of modern merge games (like 2048), creating an entirely new and ferociously engaging puzzle hybrid. Stepping away from the standard "clear the board" objective, this title demands a much more calculating approach. You are not just removing tiles; you are actively forging them into higher values, desperately trying to manage the board space before the grid becomes hopelessly congested. The atmosphere is intense and incredibly cerebral, requiring players to constantly weigh the immediate satisfaction of a simple match against the long-term necessity of building massive numerical values. The visual presentation is a standout, blending classic, beautifully detailed Mahjong aesthetics with incredibly smooth, modern digital UI elements. The numbers on the tiles are crisp and highly readable, and the satisfying visual "pop" when two tiles merge provides a constant, rewarding feedback loop. Mahjong Connect Merge is a masterclass in genre-blending, offering a deeply strategic, endlessly replayable puzzle experience.

## How to Play
* Your primary objective is to connect identical numbered tiles to merge them into a single tile of a higher value (e.g., connecting two "2" tiles creates a "4" tile).
* Use your \`Mouse\` to click on a tile, then click on a matching tile to attempt a connection.
* A connection is only valid if a clear, unobstructed path can be drawn between the two tiles using no more than two 90-degree turns.
* When tiles merge, the new, higher-value tile will appear at the location of the *second* tile you clicked.
* The game ends when the board is completely full and no more valid connecting paths can be drawn.

## Tips and Tricks
* **Control the Merge Point:** The location of the newly merged tile is critical. Always click the tile that is in a *worse* position first, and click the tile in the *better* (more central or open) position second.
* **Clear the Edges Early:** Tiles on the absolute perimeter of the board are easiest to connect because the path can travel outside the grid. Use this to clear space immediately.
* **Don't Ignore Low Numbers:** It is easy to get hyper-focused on merging your massive "512" or "1024" tiles, but leaving scattered "2"s and "4"s around the board is the fastest way to block your connection paths.
* **Plan Two Steps Ahead:** Before making a merge, look at what the resulting tile will be. Ask yourself: "Will this new tile have a partner available, or will it just sit there blocking my path?"
* **Keep the Center Open:** A cluttered center board restricts almost all cross-board connection paths. Try to keep the middle columns as clear as possible.`
  },
  {
    title: "Diamond Mahjong",
    seoContent: `![Diamond Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/diamondmahjong800450.webp)

Diamond Mahjong elevates the ancient Chinese tile game by infusing it with a breathtaking, high-end jewelry aesthetic and a relentless focus on multi-layered, vertical puzzle architecture. Moving far beyond simple flat grids, this title constructs massive, towering pyramids of shimmering diamond tiles that you must meticulously deconstruct. The atmosphere is both relaxing and incredibly focused, trading intense time limits for a pure, unadulterated test of spatial awareness and deep cascade planning. You are tasked with analyzing complex, three-dimensional tile layouts, hunting for identical gem cuts and colors hidden deep within the structure. The visual style is exceptionally polished, utilizing high-definition, sparkling gem graphics that catch the virtual light, ensuring the puzzle remains visually stunning even as it becomes overwhelmingly complex. The shadows and depth-of-field effects clearly indicate which tiles are "free" and which are blocked, making the strategic planning phase highly intuitive. Diamond Mahjong is a luxurious, cerebral take on a timeless classic.

## How to Play
* Your objective is to completely clear the entire board by matching identical pairs of diamond tiles.
* Use your \`Left Mouse Button\` to select a free tile, then click a matching free tile to instantly eliminate both from the puzzle.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it has no adjacent tiles touching its immediate left or right sides.
* The game heavily relies on vertical stacking; matching tiles on the top layers will reveal and unlock the hidden tiles buried beneath them.
* If you clear the board, you win. If you run out of valid, accessible matches, the game is over.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed fail state.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even board gives you vastly more matching options.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach blue diamonds on the very edge of the board, ignore them! Save them. You might desperately need them later to match a blue diamond buried deep in the center tower.
* **Use the Reshuffle (If Available):** Many variations offer a limited "shuffle" mechanic. Treat this like an absolute last resort. Never use it just because you are bored of looking; only use it when the board is verifiably dead.
* **Memorize the Cuts:** Don't just look for colors. A square red ruby and a round red garnet are different tiles. Train your eyes to instantly recognize the geometric cuts of the gems.`
  },
  {
    title: "Daily Masyu",
    seoContent: `![Daily Masyu](https://www.htmlgames.com/uploaded/game/thumb800/daily-masyu-800x450.webp)

Daily Masyu is an absolute masterclass in minimalist, logic-driven puzzle design, stripping away all unnecessary arcade mechanics to deliver a pure, deeply cerebral daily challenge. Originating from the brilliant minds of Japanese puzzle creators (similar to Sudoku), Masyu requires players to draw a single, unbroken, non-intersecting loop through a grid populated by specific black and white indicator pearls. The atmosphere is intensely intellectual; there is no narrative, no flashy explosions, and no luck involved. It is a pure test of your ability to deduce spatial rules and execute complex geometric logic. The visual presentation is highly appealing in its absolute austerity, utilizing a stark black-and-white grid that ensures the puzzle mechanics remain perfectly readable and distraction-free. The brilliance of Daily Masyu lies entirely in its uncompromising dedication to core logic rules and its commitment to providing three brand-new, hand-crafted levels every single day. It is the ultimate brain-training routine for hardcore puzzle purists.

## How to Play
* The primary objective is to draw one single, continuous loop that passes through all the black and white dots on the grid.
* Use your \`Mouse\` to click and drag between the grid squares to draw your path.
* The loop cannot cross over itself, branch off, or terminate.
* **White Dot Rule:** The loop MUST pass straight through a white dot without turning, but it MUST turn 90 degrees in at least one of the grid squares immediately adjacent to the white dot.
* **Black Dot Rule:** The loop MUST turn exactly 90 degrees directly upon the black dot, but it MUST travel straight for at least two squares in both directions leaving the black dot.

## Tips and Tricks
* **Start at the Edges:** A black dot sitting on the very edge of the board only has one valid way it can turn. Always start solving your Masyu puzzles by fulfilling the requirements of the edge and corner dots first.
* **The Adjacent Black Dots:** If two black dots are directly next to each other, the loop must push away from them in opposite directions. This immediately gives you massive sections of the path for free.
* **The "Straight Through" White Dots:** If three white dots are in a row, the loop cannot pass through all of them horizontally (because it must turn after passing through one). It must pass through them vertically.
* **Avoid Closed Loops:** Constantly trace your path with your eyes to ensure you aren't accidentally closing a small loop that doesn't contain all the dots. The puzzle requires ONE single massive loop.
* **Use the "X" Markers:** If the game allows you to mark lines with an "X" (indicating the loop cannot go there), use them aggressively. Knowing where the line *cannot* go is just as important as knowing where it *must* go.`
  },
  {
    title: "Pyramid Solitaire - Ancient Aztec",
    seoContent: `![Pyramid Solitaire - Ancient Aztec](https://www.htmlgames.com/uploaded/game/thumb800/pyramidsolitaireancientaztec800450.webp)

Pyramid Solitaire - Ancient Aztec injects the classic math-based card sorting game with a massive dose of historical intrigue and breathtaking Mesoamerican aesthetic design. Moving far beyond the sterile green felt of standard casino games, this title transports you deep into the heart of a lush, overgrown jungle, where the cards themselves are etched with intricate Aztec iconography and ancient gold. The atmosphere is mysterious and engaging, trading standard playing cards for thematic artifacts that you must meticulously pair together to dismantle a towering, stepped pyramid structure. The core gameplay loop requires intense calculation and a sharp memory, as you constantly scan the board for specific numerical combinations. The visual presentation is exceptionally polished, utilizing high-definition stone textures, dramatic lighting, and satisfying crumbling animations that trigger whenever you successfully dismantle a section of the pyramid. It is a pure, unadulterated test of basic arithmetic and deep strategic planning, wrapped in an incredibly compelling historical theme.

## How to Play
* The objective is to completely dismantle the massive pyramid of cards by removing them in pairs that add up to exactly 13.
* Use your \`Left Mouse Button\` to click and select two fully exposed (uncovered) cards to remove them.
* Card values are as follows: Aces are 1, Jacks are 11, Queens are 12, and Kings are exactly 13 (Kings can be removed by clicking on them alone, without a pair).
* You can pair cards from the pyramid structure with other cards in the pyramid, or with the single open card in the draw pile at the bottom.
* If you have no valid moves on the pyramid, click the draw pile to reveal a new card.

## Tips and Tricks
* **Always Remove Kings Instantly:** Because Kings are worth exactly 13 by themselves, they require no pairings. The absolute second a King becomes uncovered on the pyramid, click it and get it out of your way.
* **Prioritize the Pyramid Over the Deck:** If you have a 6 in the pyramid, and you can pair it with a 7 in the pyramid OR a 7 in the draw deck, ALWAYS choose the 7 in the pyramid. Your goal is to clear the structure, not the deck.
* **Memorize the Pairs:** Do not waste time doing math in your head. Memorize the core pairs instantly: Q+A, J+2, 10+3, 9+4, 8+5, 7+6.
* **Scan Before Dealing:** Before you click the draw pile for a new card, exhaust every single possible pairing on the pyramid. A dealt card might cover something you desperately needed.
* **Dig Evenly:** Try to dismantle the pyramid evenly. Drilling a deep hole down one side while leaving the other side intact severely limits your available options in the late game.`
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
    title: "Anti Pac Man",
    seoContent: `![Anti Pac Man](/images/anti_pacman_thumbnail.png)

Anti Pac Man violently inverts the most legendary arcade dynamic in gaming history, placing you not in the shoes of the iconic yellow dot-muncher, but in command of the relentless, ghostly hunters tracking him down. This brilliant mechanical twist completely revitalizes the classic maze-chase formula, transforming a game of panicked survival into a deeply strategic, tension-fueled exercise in trapping and predictive pathing. You are tasked with coordinating the movements of the ghosts, utilizing complex gesture recognition and precise timing to box in the rogue AI Pac-Man before he consumes the entire grid. The atmosphere is intensely competitive, demanding sharp spatial awareness and the ability to manage multiple moving pieces simultaneously. Visually, the game masterfully retains the beloved, neon-drenched retro aesthetic of the original arcade cabinets, while infusing it with smooth, modern HTML5 animations and highly responsive controls. Anti Pac Man is a masterclass in asymmetrical design, proving that sometimes the most thrilling gaming experience is found by switching sides and becoming the villain.

## How to Play
* The primary objective is to successfully catch and destroy the rogue Pac-Man character before he eats all the dots on the board.
* You do not control Pac-Man; you control the movement of the four ghosts navigating the maze.
* Use your \`Mouse\` to draw quick gestures, or use the \`Arrow Keys\` to direct the ghosts toward intersections and chokepoints.
* You must anticipate Pac-Man's pathing AI. He will generally try to avoid you and head toward the thickest clusters of remaining dots.
* If Pac-Man successfully consumes a large Power Pellet, your ghosts will turn blue and become vulnerable. You must run away until the timer expires!

## Tips and Tricks
* **The Pincer Movement:** Never send all your ghosts chasing directly behind Pac-Man. He is faster than they are. Send two ghosts behind him, and send the other two ghosts around the opposite side of the maze to cut him off at an intersection.
* **Guard the Power Pellets:** Identify where the large flashing Power Pellets are located and position a ghost nearby to aggressively defend them. If Pac-Man can't get the pellets, he can't fight back.
* **Use the Tunnels:** The warp tunnels on the left and right sides of the screen are your best friends. Use them to instantly teleport a ghost from one side of the map to the other to spring a surprise trap.
* **Don't Bunch Up:** If all four of your ghosts are stacked in the same corridor, you are effectively only playing with one ghost. Spread them out to cover maximum territory.
* **Learn the AI:** Pac-Man's AI is predictable. If he is trapped between two ghosts, he will always take the closest available turn. Use this predictability to force him into dead ends.`
  },
  {
    title: "Backgammon",
    seoContent: `![Backgammon](https://www.htmlgames.com/uploaded/game/thumb500/backgammon500.webp)

Backgammon flawlessly translates one of the oldest and most strategically profound board games in human history into a sleek, highly accessible digital format. Stripping away the cumbersome physical setup, this HTML5 adaptation delivers a pure, tension-fueled test of probability, risk management, and aggressive tactical blocking. Set against a beautiful, high-definition digital wood-grain board, the game pits you against a relentless computer AI in a race to bear off all your checkers. The atmosphere is intensely cerebral, demanding that you constantly calculate the statistical odds of dice rolls while simultaneously building defensive fortresses to trap your opponent. The visual style is exceptionally polished, utilizing crisp, contrasting checker colors and incredibly smooth, satisfying movement animations that replicate the tactile joy of sliding physical pieces across a board. The brilliance of Backgammon lies in its perfect fusion of brutal, unpredictable luck (the dice) and uncompromising strategic depth, forcing players to constantly adapt their game plan on the fly.

## How to Play
* The primary objective is to move all 15 of your checkers around the board and into your home board, and then "bear them off" (remove them) completely.
* Use your \`Left Mouse Button\` to click the dice on the left side of the screen to roll.
* Click on one of your checkers, and then click on a valid highlighted point to move it the distance shown on the dice.
* You can move two different checkers (one for each die), or move one checker twice (combining the total of both dice).
* If you roll doubles (e.g., two 4s), you get to move that number four times instead of two!
* You cannot move a checker to a point currently occupied by two or more of your opponent's checkers (a "block").
* If you land on a point occupied by exactly one opponent checker (a "blot"), you "hit" them, sending their checker to the middle bar to start over.

## Tips and Tricks
* **The Opening Block:** Your very first priority should be establishing blocks (two or more of your checkers on a single point) in your own home board. This makes it incredibly difficult for your opponent to escape if you hit them.
* **Hit Aggressively Early:** In the early game, if you have the chance to hit a solitary opponent checker, do it. Sending them to the bar destroys their momentum and forces them to waste dice rolls re-entering.
* **Don't Leave Blots:** Avoid leaving single, unprotected checkers on the board unless absolutely mathematically necessary. They are massive targets for your opponent.
* **The Run:** If you manage to get all your checkers past your opponent's checkers, stop hitting and blocking. Immediately transition into a full-speed race to bear off your pieces.
* **Calculate the Odds:** A standard pair of dice has 36 possible outcomes. The most common roll is a 7. Always position your vulnerable checkers at least 7 spaces away from your opponent's attacking pieces.`
  },
  {
    title: "Witch World",
    seoContent: `![Witch World](https://www.htmlgames.com/uploaded/game/thumb800/witchworld800450.webp)

Witch World injects a massive dose of spellbinding, magical energy into the highly competitive tile-matching genre, delivering a visual feast of arcane symbols and intensely satisfying combination mechanics. Stepping away from generic gem-swapping, this title embraces a much more thematic, Halloween-inspired approach, requiring players to physically align glowing potions, spellbooks, and enchanted pumpkins. The atmosphere is undeniably charming and slightly spooky, perfectly capturing the essence of a magical cauldron without sacrificing the deep, strategic complexity that hardcore puzzle fans demand. Every level is a meticulously designed challenge, presenting specific objective quotas (like collecting 30 green potions or dropping magical keys) that must be met within a strict move limit. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition sprites that crackle with magical particle effects when linked together. The explosive animations and satisfying audio cues that accompany a massive, board-clearing chain reaction are nothing short of spectacular. It is a pure, unadulterated test of spatial planning and magical cascade optimization.

## How to Play
* The core mechanic revolves around swapping adjacent magical items to create horizontal or vertical lines of three or more identical symbols.
* Use your \`Mouse\` to click on an item, then click an adjacent one to swap their positions, or simply click and drag.
* Your objective is to fulfill specific level goals displayed at the top of the screen before you run out of allowed moves.
* Matching exactly four items creates a glowing line-clear explosive.
* Matching five items in an L or T shape creates a devastating area-of-effect bomb.
* Matching five items in a straight row creates a rainbow potion that obliterates all items of a specific color from the board.

## Tips and Tricks
* **Prioritize the Objective:** It is incredibly easy to get distracted by a massive chain of yellow stars, but if your objective is only green potions, you are wasting a precious move. Focus laser-like on the goal.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading items, often resulting in free, accidental combos as the board settles.
* **Combine the Power-Ups:** The most devastating move in the game is swapping two power-ups with each other. Swapping a line-clear with a bomb creates a massive, cross-shaped explosion that clears half the board instantly.
* **Save the Rainbows:** Do not use the five-in-a-row rainbow potion immediately. Save it until you desperately need to clear a specific color to meet your objective, or wait to combine it with another power-up.
* **Analyze the Chokepoints:** Pay close attention to the shape of the board. Some levels have narrow columns, ice blocks, or chains where items can get stuck. Focus on breaking those barriers first.`
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
