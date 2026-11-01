const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Block Domino",
    seoContent: `![Block Domino](https://www.htmlgames.com/uploaded/game/thumb800/blockdomino800450.webp)

Block Domino delivers the absolute purest, most fundamentally rigid distillation of the legendary tabletop game, completely stripping away the luck-driven "boneyard" drawing mechanics to present a brutally calculating, perfect-information duel. Set against a clean, visually minimalist wooden table aesthetic, players are locked in a relentless, one-on-one battle against a digital opponent. In this specific "Block" variation, players receive their initial hand of tiles, and there is no draw pile. Your objective is elegantly simple yet incredibly unforgiving: you must play all your tiles onto the main chain by matching the pips (dots), actively working to block your opponent's ability to play. If a player cannot make a valid move, they simply pass their turn. The atmosphere is deeply cerebral; it is a pure test of memory, probability calculation, and aggressive territorial control. The visual presentation is highly polished, utilizing crisp, realistic ivory-colored tiles with high-contrast black pips that ensure perfect readability. Block Domino is the ultimate brain-training routine for mathematical puzzle purists.

## How to Play
* The primary objective is to be the first player to play all the domino tiles from your hand onto the table, or to have the fewest pips remaining when the game deadlocks (blocks).
* Each player is dealt a set number of tiles (usually 7). There is NO draw pile in the "Block" variation.
* The player with the highest "double" (e.g., double 6) usually plays first, placing it in the center of the board.
* On your turn, use your \`Mouse\` to click and drag a tile from your hand.
* You must connect it to one of the open ends of the domino chain on the table. The numbers (pips) on the connecting ends MUST match (e.g., a 4 must connect to a 4).
* If you absolutely cannot make a valid move, your turn is automatically skipped (passed) to your opponent.
* The round ends when one player empties their hand, or neither player can move (the game is "blocked").

## Tips and Tricks
* **Count the Board:** There are exactly 28 tiles in a standard domino set, meaning there are exactly 7 tiles of every number (e.g., seven tiles have a 4 on them). If you see six 4s on the board, and you hold the seventh, you possess absolute control over any chain ending in a 4.
* **Control the Ends:** Your absolute highest priority is forcing both open ends of the chain to display numbers that you hold in your hand, while simultaneously denying numbers your opponent might need.
* **Play Your Heavy Doubles Early:** Double tiles (like 6-6 or 5-5) give you the least amount of strategic flexibility because they only match one specific number. Furthermore, if the game blocks, the winner is determined by who has the *lowest* total value in their hand. Dump your high-value tiles as quickly as possible.
* **Identify Opponent Weaknesses:** If your opponent is forced to pass a turn when the open ends are a 3 and a 5, you now know for a mathematical fact they do not hold a 3 or a 5. Aggressively steer the board to keep the ends locked on 3s and 5s.
* **The "Block" Strategy:** Sometimes winning isn't about playing all your tiles; it's about intentionally locking the board. If you have very few pips in your hand (e.g., a 1-0 and a 1-1), intentionally block the game so neither player can move, ensuring you win the point count.`
  },
  {
    title: "Woggle",
    seoContent: `![Woggle](https://www.htmlgames.com/uploaded/game/thumb800/woggle800450.webp)

Woggle is a brilliant, high-speed digital adaptation of the iconic physical word-search game (Boggle), stripping away the rattling plastic dice in favor of a clean, visually minimalist, and relentlessly timed intellectual puzzle. Set against a stark, high-contrast grid filled with random letters, players are tasked with rapidly scanning the chaotic jumble to identify hidden words. Your objective is intensely focused: you must physically draw continuous paths connecting adjacent letters (horizontally, vertically, or diagonally) to spell out valid English words before the strict timer expires. The atmosphere is deeply calculating and incredibly stressful; the game demands an extreme level of vocabulary recall, pattern recognition, and rapid visual parsing. The visual presentation is highly functional, utilizing crisp, large typography that ensures the letters remain perfectly readable even when you are frantically scanning the board in a panic. Woggle is a pure, uncompromising test of lexical agility and speed-reading.

## How to Play
* The primary objective is to find and spell as many valid words as possible on the grid before the timer runs out.
* Use your \`Mouse\` to click and hold the \`Left Mouse Button\` on the first letter of a word you have found.
* Drag your mouse across adjacent letters (up, down, left, right, or diagonal) to spell the word.
* **The Golden Rule:** You CANNOT use the exact same letter tile twice within a single word.
* Release the mouse button to submit the word. If it is valid (usually 3 letters or more), you receive points based on its length.
* In some specific variations, you are tasked with finding one specific, designated "Target Word" hidden on the board to clear the level.

## Tips and Tricks
* **Hunt for the Common Prefixes and Suffixes:** Do not just look for random words. Specifically scan the board for common clusters like "S-T", "T-H", "E-R", "I-N-G", or "E-D". If you find an "E-D", look at every single letter connected to it to see if it forms a past-tense verb.
* **Pluralize Everything:** This is the most critical strategy in any word grid game. If you find the word "CAT", immediately check if there is an "S" touching the T to spell "CATS". You just doubled your score from a single root word.
* **The "Wrap-Around" Search:** A valid word does not have to be a straight line. It can snake and twist back around itself. Always check if a word can turn a sharp corner to pick up extra letters.
* **Focus on the High-Value Tiles:** If the board contains difficult letters like "Q", "X", or "Z", try to build a word around them, as they usually yield significantly higher points. (Remember that Q is almost always followed by U).
* **Don't Ignore the Short Words:** While long words score more, frantically hunting for a 7-letter word while the clock ticks down is dangerous. Rapidly firing off ten 3-letter words (like "CAT", "BAT", "RAT") is often a much more reliable scoring strategy.`
  },
  {
    title: "Triple Tiles",
    seoContent: `![Triple Tiles](https://www.htmlgames.com/uploaded/game/thumb800/tripletiles800450.webp)

Triple Tiles completely revolutionizes the massively popular "Mahjong Solitaire" formula by abandoning the traditional pairing mechanic and replacing it with a highly addictive, inventory-based "Match-3" collection system. Instead of simply clicking two exposed tiles to clear them, you are presented with a massive, overlapping 3D pyramid of tiles featuring various everyday objects, fruits, or symbols. Your objective is intensely focused: you must click tiles to move them down into a holding tray located at the bottom of the screen. When exactly three IDENTICAL tiles are placed in the tray, they instantly merge and disappear. The atmosphere is deeply calculating and immensely satisfying, perfectly simulating the tactical tension of inventory management. The visual presentation is exceptionally polished, utilizing crisp, high-definition graphics that ensure the complex, overlapping layers remain perfectly readable. Triple Tiles is a brilliant, uncompromising test of sequence planning and bottleneck management, as a full tray means instant defeat.

## How to Play
* The primary objective is to completely dismantle the overlapping structure by moving all tiles into your holding tray in groups of three.
* Use your \`Left Mouse Button\` to click any fully exposed tile on the main board to instantly drop it into your holding tray at the bottom.
* A tile is strictly considered "exposed" if absolutely no other tile is resting on top of it.
* Your holding tray can only hold a maximum of SEVEN tiles at any given time.
* **The Rules of Removal:** When exactly three IDENTICAL tiles are sitting anywhere in your holding tray, they will automatically merge and be removed, freeing up crucial space.
* The game is immediately over if your tray reaches its 7-tile limit without triggering a match.

## Tips and Tricks
* **Manage Your Tray Space (The Golden Rule):** Treat your holding tray like pure gold. Never have more than four "unmatched" singleton items sitting in your tray at once. Always leave two or three empty slots so you have the flexibility to dig through the pile for the matches you actually need.
* **Dig for the Third Piece:** If you have two apple tiles in your tray, your absolute highest priority is finding the third apple tile to clear them. It is acceptable to temporarily fill your tray with blocking items, *provided* that reaching the buried apple instantly triggers a clear and frees the space again.
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles. Leaving massive vertical columns for the late game is a guaranteed way to run out of options.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal options and reveals more hidden tiles simultaneously.
* **Use the "Undo" (If Available):** This game is mathematically unforgiving. If you click a tile and realize it completely blocks your tray, undo the move instantly.`
  },
  {
    title: "Jolly Jong Birds",
    seoContent: `![Jolly Jong Birds](https://www.htmlgames.com/uploaded/game/thumb800/jollyjongbirds800450.webp)

Jolly Jong Birds plunges the ancient, highly structured mechanics of traditional Chinese tile-matching into a breathtaking, deeply atmospheric avian environment. Moving far beyond the sterile, flat green felt and abstract bamboo symbols of standard solitaire games, this title constructs massive, complex architectural pyramids using beautifully illustrated tiles depicting incredibly crisp, high-definition species of birds—from colorful parrots and toucans to majestic eagles and delicate songbirds. The atmosphere is incredibly relaxing and immersive, trading the tense ticking clocks of arcade games for a soothing puzzle environment accompanied by ambient forest sounds and chirps. You are tasked with analyzing towering, overlapping tile structures, meticulously searching for exposed pairs to dismantle the board. The visual presentation is exceptionally polished, utilizing bright, highly saturated color palettes that make identifying matching birds incredibly intuitive, even when the board is massively congested. Jolly Jong Birds is a highly successful thematic reskin, proving that a timeless puzzle formula can be completely refreshed with a strong, cohesive, and beautiful artistic vision.

## How to Play
* Your objective is to completely clear the entire screen by matching identical pairs of bird-themed tiles.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles heavily overlap, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden birds buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, you lose.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach parrot tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a parrot tile buried deep in the center tower.
* **Memorize the Colors:** Because some birds might look similar at a quick glance, take a moment to mentally categorize them by their dominant color (like "the bright red one" or "the blue and yellow one") to speed up your scanning.
* **Use the Reshuffle (If Available):** Treat the shuffle button like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably dead.`
  },
  {
    title: "Chenonceau Hidden Objects",
    seoContent: `![Chenonceau Hidden Objects](https://www.htmlgames.com/uploaded/game/thumb800/chenonceauhiddenobjects800450.webp)

Chenonceau Hidden Objects is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and historically immersive core. Forget convoluted detective storylines; this title is a pure, unadulterated shot of visual tourism focused entirely on acute observation. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing the breathtaking Château de Chenonceau in France. From the grand, sunlit galleries spanning the river Cher to the opulent, antique-filled bedrooms and meticulously manicured Renaissance gardens, your objective is elegantly simple: locate the subtle, thematic items expertly blended into the 16th-century environment. The atmosphere is intoxicatingly rich and deeply relaxing, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, tapestries, and complex architectural geometry. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy candelabra and polished marble floor is rendered with breathtaking clarity.

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of the Château scene.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden objects before the strict time limit expires to advance to the next historical room.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the elaborate fireplace) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A modern key might be tinted gold to blend perfectly into the frame of a Renaissance painting.
* **Check the Shadows and Highlights:** The developers love hiding dark objects inside the deep shadows beneath antique beds, or hiding bright objects directly inside the glare of a massive stained-glass window. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a crown, you will accidentally spot the hidden pocket watch.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Find the Keys",
    seoContent: `![Find the Keys](https://www.htmlgames.com/uploaded/game/thumb800/findthekeys800450.webp)

Find the Keys strips the labyrinth exploration genre down to its absolute, most viscerally satisfying core, delivering a pure, unadulterated test of spatial navigation and route memorization. Moving entirely away from complex combat mechanics, inventories, or sprawling narratives, this title embraces a highly stylized, top-down grid aesthetic. You are placed in control of a simple avatar trapped inside a sprawling, complex maze. Your objective is intensely focused: explore the winding corridors, locate all the hidden keys scattered throughout the map, and navigate to the exit door before the timer expires. The atmosphere is deeply calculating and increasingly tense; the mazes often feature dead ends, looping corridors, and sometimes shifting walls or pursuing hazards that force you to constantly adapt your route. The visual presentation is highly functional, utilizing a clean, high-contrast style that ensures the pathways and critical items are perfectly readable. Find the Keys is a pure shot of retro arcade adrenaline that demands flawless spatial awareness.

## How to Play
* The primary objective is to collect every single key hidden in the maze and reach the exit door.
* Use the \`Up\`, \`Down\`, \`Left\`, and \`Right\` Arrow keys (or \`W, A, S, D\`) to navigate your avatar through the corridors.
* You must physically walk over a key to collect it.
* The exit door will remain firmly locked until the "Keys Remaining" counter reaches zero.
* You must complete this task before the strict time limit (if applicable) runs out.
* Some levels may include hazards (like spikes or patrolling enemies) that will instantly kill you upon contact.

## Tips and Tricks
* **The "Right-Hand Rule":** This is the ultimate mathematical secret to solving any simple maze. When you start, place your imaginary "right hand" on the wall to your right. Follow that wall continuously, never taking your hand off it, turning exactly when the wall turns. This algorithm guarantees you will explore every single dead end and eventually find the exit (provided the maze doesn't have disconnected floating walls in the center).
* **Memorize the Intersections:** When you reach a massive 4-way intersection, make a mental note of it. If you choose the north path and it leads to a dead end, you must remember exactly how to navigate backward to that specific intersection to try the south path.
* **Don't Retrace if Unnecessary:** If you find a key at the end of a long corridor, and you know for a fact there is nothing else down that path, mentally "cross off" that entire section of the maze. Do not wander back down it later.
* **Scan the Horizon:** While moving, always look as far down the corridor as the camera allows. Anticipate dead ends before you waste time walking all the way down them.
* **Prioritize the Keys, Not the Exit:** Finding the exit door early does you absolutely no good if you don't have the keys. If you see the exit, ignore it and continue exploring the rest of the map.`
  },
  {
    title: "Three Blind Mice",
    seoContent: `![Three Blind Mice](https://www.htmlgames.com/uploaded/game/thumb800/threeblindmice800450.webp)

Three Blind Mice is an incredibly deep, mathematically rich variation of standard Solitaire that fundamentally alters the classic tableau structure, offering a brutal, perfect-information puzzle wrapped in a highly polished aesthetic. Unlike Klondike, all 52 cards are dealt face-up immediately, but they are arranged into a staggering ten columns. Your objective is elegantly simple yet incredibly unforgiving: you must maneuver the cards to build four complete sequences (from King down to Ace) directly on the tableau. The atmosphere is deeply calculating and intensely strategic, requiring players to possess a masterful understanding of card sequencing, cascade math, and long-term tactical sacrifice. The visual presentation is crisp, utilizing high-definition traditional playing cards that ensure perfect readability even when the massive ten-column layout is heavily congested. Three Blind Mice is not a game of luck; it is an uncompromising test of logic for veteran card players who demand total control over the board state.

## How to Play
* The primary objective is to build four complete suits within the tableau, in descending order from King down to Ace (e.g., K, Q, J, 10... 2, A of Spades).
* All 52 cards are dealt face-up into ten columns at the start of the game.
* Use your \`Mouse\` to click and drag cards between columns.
* **The Movement Rule:** You can move a single card, OR any group of cards (regardless of whether they are in sequential order), as long as the bottom-most card of the moving group is exactly ONE value lower and of the SAME SUIT as the destination card.
* (e.g., You can move a massive junk pile of cards, provided the bottom card of that pile is the 5 of Hearts, and you drop it onto the 6 of Hearts).
* Only a King (or a group starting with a King) can be moved into an empty column.

## Tips and Tricks
* **Empty Columns are Pure Gold:** Because you can move un-sequenced junk piles, an empty column is the most powerful tool in the game. It allows you to temporarily park massive stacks of blocking cards to unearth the crucial cards buried at the top of the columns. Prioritize clearing columns above all else.
* **Unearth the Kings Early:** If a King is buried beneath five other cards, that column can never be fully completed. Your early game must focus heavily on excavating the Kings so they can be moved into empty columns to start fresh, clean sequences.
* **Build in Suit:** While the rules might occasionally allow you to move a group onto a different suit in some variants, you MUST focus entirely on building perfectly matched suits. A mixed-suit column is a temporary parking lot; a matched-suit column is progress toward victory.
* **Calculate the Cascade:** Before moving a massive stack, look at the card it leaves behind. Does moving this stack unblock a 4 that you desperately need for another column? Never move a card blindly.
* **Use the Undo Button:** This game is mathematically unforgiving. A strategy that works perfectly on move one will completely doom you on move ten. Use the undo button to scout paths before committing.`
  },
  {
    title: "Spooky Dimensions",
    seoContent: `![Spooky Dimensions](https://www.htmlgames.com/uploaded/game/thumb800/spooky-dimensions-800x450.webp)

Spooky Dimensions completely shatters the rules of traditional pathfinding puzzles (like Mahjong Solitaire) by ripping the 2D grid off the screen and forcing players to navigate a massive, fully rotatable 3D geometric cluster wrapped in an eerie, highly atmospheric Halloween aesthetic. You are not just looking at a flat image of tiles; you are actively spinning a floating monolith of glowing, high-tech cubes featuring jack-o'-lanterns, grinning skulls, witches, and bats in three-dimensional space. Your objective is to find matching pairs, but the connections rely on 3D spatial awareness rather than simple top-down unblocking. The atmosphere is deeply calculating and demands an entirely new level of spatial awareness; you must constantly spin the board to verify which blocks are truly "free" on their sides. The visual presentation is exceptionally polished, utilizing crisp, spooky graphics and moody, purple-hued lighting that ensures the puzzle remains perfectly readable even when rotating rapidly. Spooky Dimensions is a brilliant, uncompromising evolution of the matching genre for the Halloween season.

## How to Play
* The primary objective is to completely dismantle the floating 3D haunted structure by matching identical cubes before the timer expires.
* Use your \`Mouse\` (or arrow keys) to physically rotate the entire 3D puzzle cluster 360 degrees in any direction.
* Click an exposed cube to select it, then click a matching cube to instantly eliminate both.
* **The 3D Golden Rule:** A cube is strictly considered "free" and clickable ONLY if it has at least TWO of its adjacent sides completely exposed to empty air. (Top and bottom usually do not count; focus on the four vertical sides).
* If a cube is wedged tightly between other blocks on three sides, it cannot be selected.

## Tips and Tricks
* **Rotate Constantly:** You cannot solve this puzzle by staring at one side. You must constantly spin the structure after every single move to see if your removal unblocked a new cube on the opposite side of the cluster.
* **Clear the Protruding Corners:** Cubes sticking out of the sharpest corners of the 3D structure are the easiest to connect, because they naturally have three or four sides exposed to empty air. Clear the sharp edges instantly.
* **Work from the Outside In:** Do not try to drill a hole into the dead center of the 3D cluster. You must peel the structure like an onion, removing the outermost layer of cubes entirely before moving inward.
* **Don't Tunnel Vision:** If you can't find a match for a specific skull cube, stop looking at it. Spin the board 180 degrees and look for an obvious, free match on the back to keep the timer from running down.
* **Use the Reshuffle (If Available):** If the board is massive and you are completely lost, use the shuffle button to scramble the remaining cubes. It often reveals obvious matches that were previously hidden inside the structure.`
  },
  {
    title: "Halloween Card Connect",
    seoContent: `![Halloween Card Connect](https://www.htmlgames.com/uploaded/game/thumb800/halloweencardconnect800450.webp)

Halloween Card Connect (a highly polished variant of the classic Onet or Kyodai genre) injects a massive dose of highly structural, geometric pathfinding into the tile-matching formula, delivering a visual puzzle that demands intense calculation wrapped in an overwhelmingly vibrant, spooky Halloween aesthetic. Stepping entirely away from the 3D, overlapping pyramids of standard Mahjong Solitaire, this game places every single card flat on a massive, single-layer 2D grid featuring vampires, ghosts, candy corn, and glowing pumpkins. Your objective is not just to find matching pairs, but to prove that a clear, unobstructed path can physically be drawn between them using a very specific set of routing rules. The atmosphere is deeply engaging, requiring players to constantly weigh the immediate satisfaction of a simple edge match against the necessity of unblocking the dense center of the board. The visual style is exceptionally clean, ensuring perfect readability even when the haunted board is packed. It is a pure test of spatial planning and the ability to visualize invisible lines across a chaotic grid.

## How to Play
* Your primary objective is to clear the entire flat grid by connecting identical pairs of Halloween cards before the strict timer runs out.
* Use your \`Mouse\` to click on a card, then click on a matching card to attempt a connection.
* **The Golden Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two cards using a maximum of three straight lines (which means no more than two 90-degree corners).
* You can connect cards that are sitting directly next to each other, or you can route the path entirely outside the main grid boundary (the empty space surrounding the puzzle).
* If you successfully clear all cards, you win. If no more valid moves exist, the board will usually automatically reshuffle.

## Tips and Tricks
* **Clear the Perimeter First:** Cards sitting on the absolute outer edge of the board are by far the easiest to connect, because their path can route freely through the empty space outside the grid using the two-turn rule. Clear the borders instantly.
* **Look for the "U" Shape:** The two-turn rule allows for a perfect "U" shape connection. If two identical ghosts are on the exact same row, but separated by other cards, check if there is empty space directly above or below both of them to draw the U.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the grid from the outside toward the dense center.
* **Don't Tunnel Vision:** If you can't find a path for two specific vampires, stop looking at them. Scan the entire board for an obvious, free match to keep the timer from running down.
* **Use the Hint Button Sparingly:** If you are truly stuck, use the hint button, but be aware that relying on it prevents you from training your brain to see the complex two-turn pathways.`
  },
  {
    title: "Jewel Blitz",
    seoContent: `![Jewel Blitz](https://www.htmlgames.com/uploaded/game/thumb800/jewelblitz800450.webp)

Jewel Blitz injects a massive dose of adrenaline into the highly competitive tile-swapping genre, abandoning the slow, methodical planning of standard puzzle games in favor of a frantic, time-attack "Blitz" format. Set against a highly polished, neon-infused grid, you are tasked with physically aligning brightly colored, hyper-realistic gemstones—diamonds, rubies, sapphires, and emeralds. The atmosphere is undeniably intense and incredibly fast-paced; there are no move limits to carefully calculate. Instead, you are fighting a merciless 60-second ticking clock. Every match you make extends your time slightly or scores massive points, forcing a state of pure "flow" where pattern recognition happens entirely on instinct. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition sprites that crackle with kinetic energy, screen-shaking explosions, and flashy particle effects when massive combos are triggered. Jewel Blitz is a pure, unadulterated test of rapid visual parsing, twitch reflexes, and cascade optimization under extreme pressure.

## How to Play
* The core mechanic revolves around rapidly swapping adjacent jewels to create horizontal or vertical lines of three or more identical gems.
* Use your \`Mouse\` to click on a jewel, then click an adjacent one to swap their positions, or simply click and drag as fast as humanly possible.
* **The Blitz Rule:** You are not limited by moves. You are fighting a strict 60-second timer. The objective is to score the absolute highest number of points possible before the clock hits zero.
* Matching exactly four jewels creates a glowing, line-clearing explosive gem.
* Matching five jewels in an L or T shape creates a devastating area-of-effect bomb.
* Matching five jewels in a straight row creates a hyper-cube that obliterates all jewels of a specific color from the board.
* **Time Gems:** Specifically look for glowing jewels with a clock icon. Matching these adds precious seconds back onto your main timer.

## Tips and Tricks
* **Never Stop Moving:** This is a game of speed, not perfection. Do not stare at the board looking for the "best" move. The moment you see a valid match of three, execute it instantly, and immediately begin scanning a different part of the board while the first gems are exploding.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading jewels dropping from the ceiling, resulting in massive, free combo points that require zero effort on your part.
* **Target the Time Gems:** Your absolute highest priority is extending the game. If a Time Gem appears, drop everything and formulate a plan to match it immediately.
* **Combine the Power-Ups:** Swapping a line-clear gem with a bomb creates a massive, cross-shaped explosion that clears half the board instantly, scoring massive points and triggering huge cascades.
* **Play with Both Hands (If Applicable):** If playing on a touch screen or a device that supports multi-touch, train yourself to scan the left side of the board with your left hand and the right side with your right hand simultaneously.`
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
