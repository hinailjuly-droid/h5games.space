const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Wild West Klondike",
    seoContent: `![Wild West Klondike](https://www.htmlgames.com/uploaded/game/thumb800/wildwestklondike800450.webp)

Wild West Klondike strips the world's most famous card-sorting puzzle down to its absolute, foundational mechanics while completely overhauling the visual presentation to transport players into a gritty, sun-baked frontier. Moving entirely away from the sterile green felt and casino aesthetics of standard Windows solitaire, this title sets its sprawling seven-column tableau against a beautiful, high-definition backdrop of dusty saloons, wide-open deserts, and rugged canyon landscapes. The atmosphere is deeply immersive and incredibly relaxing, accompanied by the subtle ambient sounds of a frontier town. The visual presentation is highly polished, utilizing crisp, custom-designed playing cards featuring cowboy hats, revolvers, and sheriff badges, ensuring perfect readability while maintaining a strong, cohesive artistic theme. Wild West Klondike is the ultimate, timeless relaxation tool, offering the deeply satisfying, methodical gameplay loop of classic sequence building wrapped in a highly engaging, thematic package that perfectly captures the "just one more hand" mentality.

## How to Play
* The primary objective is to move all 52 cards into the four foundation piles at the top right, building upward in suit starting from the Ace and ending with the King.
* The main tableau consists of seven columns where cards MUST be built downward in alternating colors (e.g., placing a Red 8 only on a Black 9).
* Use your \`Mouse\` to click and drag cards between the columns.
* You can move entire, correctly stacked sequences of cards together as a single unit to uncover the face-down cards buried beneath them.
* If you run out of valid moves on the main tableau, click the face-down stock pile at the top left to deal a new open card into the waste pile.

## Tips and Tricks
* **Unearth the Hidden Cards:** Your absolute highest priority in the early game is to flip over the face-down cards on the tableau. If you have a choice between making a move that builds a sequence, or making a move that flips a hidden card face-up, ALWAYS flip the hidden card.
* **Empty Columns are for Kings:** An empty column in the tableau is your most powerful tool, but it can ONLY be filled by a King. Do not clear a column unless you actively have a King ready to move into it.
* **Don't Rush to the Foundations:** Just because you *can* move a Black 5 to the foundation doesn't mean you *should*. Sometimes keeping it on the tableau is necessary to hold a Red 4 that you desperately need to move.
* **Build Evenly:** Try to build your four foundation piles at roughly the same pace. If you push the Spades all the way up to Jack while the Hearts are still on 2, you will severely limit your options on the alternating-color tableau.
* **Check the Draw Pile First:** Before making any moves on the tableau, cycle through the first three cards of your draw pile just to mentally note what is available to you. Information is your best weapon.`
  },
  {
    title: "Triple Dimensions - Ice Age",
    seoContent: `![Triple Dimensions - Ice Age](https://www.htmlgames.com/uploaded/game/thumb800/triple-dimensions-ice-age-800x450.webp)

Triple Dimensions - Ice Age fundamentally rewrites the rules of traditional Mahjong Solitaire by shattering the 2D overlapping pyramid structure and plunging players into a massive, fully rotatable 3D puzzle environment. Set against a beautiful, frigid backdrop of glaciers and prehistoric landscapes, the game presents you with a massive, floating geometric cluster of ice cubes, each containing frozen symbols, wooly mammoths, and sabertooth tigers. You are not just looking at a flat image; you must actively use your mouse to physically spin and rotate the entire 3D structure to locate exposed matching cubes. Furthermore, the game utilizes a "Match-3" inventory system rather than instant pairs; you must click three identical cubes to send them to a holding tray before they shatter. The atmosphere is deeply calculating and demands a completely new level of spatial awareness. The visual presentation is highly polished, utilizing crisp 3D rendering that ensures the puzzle remains readable even when spinning. It is a brilliant, uncompromising evolution of the matching genre.

## How to Play
* The primary objective is to completely dismantle the floating 3D structure by matching identical ice cubes in sets of three.
* Use your \`Mouse\` to click and drag the background to physically rotate the entire 3D puzzle cluster 360 degrees.
* Click an exposed ice cube to move it into your holding tray on the right side of the screen.
* A cube is strictly considered "exposed" only if it is not physically blocked on its left AND right sides by other cubes.
* When three identical cubes are placed in your holding tray, they will instantly shatter and disappear, freeing up tray space.
* The game is immediately over if your holding tray fills up completely without forming a match of three.

## Tips and Tricks
* **Rotate Constantly:** You cannot solve this puzzle by staring at one side. You must constantly spin the structure after every single move to see if your removal unblocked a new cube on the opposite side of the cluster.
* **Manage Your Tray Space:** Treat your holding tray like pure gold. Never have more than four "unmatched" singleton cubes sitting in your tray at once. Always leave room to dig for matches.
* **Dig for the Third Piece:** If you have two Wooly Mammoth cubes in your tray, your absolute highest priority is spinning the board and finding the third Mammoth to clear them and free up the space. Do not click random cubes while searching.
* **Peel the Outer Layers:** Cubes on the absolute outer edges of the 3D structure are generally safer to pull, as they rarely block critical pathways in the dense center.
* **Watch the Corners:** The most vulnerable cubes are usually the ones sticking out of the sharp corners of the 3D structure. Target the corners first to quickly reduce the overall volume of the cluster.`
  },
  {
    title: "Match 3 Master",
    seoContent: `![Match 3 Master](https://www.htmlgames.com/uploaded/game/thumb800/match3master800450.webp)

Match 3 Master delivers the absolute purest, most unadulterated distillation of the legendary tile-swapping formula, completely stripping away bloated narratives and complex meta-progression to offer a staggering, unrelenting gauntlet of 1000 meticulously designed levels. This is the genre exactly as it was meant to be played: a massive grid, brightly colored gems, and a relentless pursuit of massive cascading chain reactions. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core swapping mechanic. You are tasked with physically aligning glowing rubies, emeralds, and sapphires to fulfill increasingly difficult objective quotas before a strict timer or move limit expires. The visual presentation is highly polished, utilizing crisp, high-definition sprites that crackle with magical energy when linked together. The explosive animations and satisfying audio cues that accompany a board-clearing combo provide a constant, reliable dopamine drip. Match 3 Master is the ultimate, endless test of spatial planning and reflex execution.

## How to Play
* The core mechanic revolves around swapping adjacent jewels to create horizontal or vertical lines of three or more identical gems.
* Use your \`Mouse\` to click on a jewel, then click an adjacent one to swap their positions, or simply click and drag.
* Swaps are only permitted if they immediately result in a valid match of three or more.
* Matching exactly four jewels creates a glowing, line-clearing explosive gem.
* Matching five jewels in an L or T shape creates a devastating area-of-effect bomb gem.
* Matching five jewels in a straight row creates a hypercube that obliterates all gems of a specific color from the board.

## Tips and Tricks
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading gems dropping from the ceiling, often resulting in massive, free combos as the board settles.
* **Scan for Patterns, Not Just Colors:** Don't just look for three red gems; look for the "V" shape, the "L" shape, or the two-and-one gap. Training your eyes to recognize these specific geometric setups drastically increases your speed.
* **Combine the Power-Ups:** The most devastating move in the entire game is swapping two power-ups with each other. Swapping a line-clear with a bomb creates a massive, cross-shaped explosion that clears half the board instantly.
* **Save the Hypercubes:** Do not use the five-in-a-row hypercube immediately! Save it until you desperately need to clear a specific color to trigger a cascade, or wait to combine it with another power-up for a board-wiping effect.
* **Focus on the Level Goal:** With 1000 levels, the objectives constantly change (e.g., break ice, collect 50 blue gems, drop the star). Ignore massive combos if they don't actively contribute to completing the specific level goal.`
  },
  {
    title: "Memory Flip",
    seoContent: `![Memory Flip](https://www.htmlgames.com/uploaded/game/thumb800/memoryflip800450.webp)

Memory Flip strips the casual gaming experience down to its absolute, most fundamentally engaging core, delivering a pure, unadulterated test of short-term sequential cognitive retention (often compared to the classic physical toy "Simon"). Set against a clean, visually minimalist grid of blank square tiles, the game entirely abandons chaotic explosions and stressful arcade mechanics. Instead, it relies purely on your brain's ability to map visual information to a specific timeline. The game will briefly highlight a specific sequence of tiles in a specific order, and your objective is elegantly simple yet brutally difficult: you must click the exact same tiles in the exact same chronological order to advance to the next, increasingly longer sequence. The atmosphere is deeply cerebral and intentionally demanding. It is a pure test of your brain's ability to hold and recall spatial patterns under pressure. The visual presentation is highly functional, utilizing stark, high-contrast flashing colors to ensure the sequence remains perfectly readable. Memory Flip is the ultimate, timeless brain-training routine for cognitive recall.

## How to Play
* The primary objective is to perfectly replicate the sequence of flashing tiles generated by the computer.
* Watch the grid carefully. The game will briefly illuminate several tiles, one by one, in a specific order.
* Once the sequence is finished, use your \`Left Mouse Button\` to click the tiles in the EXACT same order they were illuminated.
* If you successfully replicate the sequence, you will advance to the next level, where the sequence will become one tile longer.
* If you click the wrong tile, or click them out of order, the game is instantly over.

## Tips and Tricks
* **Don't Look at Individual Tiles:** If you try to remember "Top left, then bottom right, then middle," your brain will fail after 5 tiles. Instead, blur your eyes slightly and watch the *invisible line* the flashes draw across the board. Memorize the geometric shape of the sequence, not the individual coordinates.
* **Use Number Mapping:** If the grid is a 3x3 square, mentally assign them numbers like a telephone keypad (1-9). When the sequence flashes, repeat the numbers in your head: "1, 5, 9, 4." Verbalizing the pattern heavily aids short-term retention.
* **Chunking:** As the sequences get incredibly long (10+ tiles), break them down into smaller "chunks" in your head. Remember the first four as one pattern, the next four as a second pattern.
* **Don't Rush Your Clicks:** There is usually no timer for your input phase. Take a deep breath, mentally replay the sequence in your head one last time, and then execute your clicks methodically.
* **Focus on the End:** The human brain is very good at remembering the beginning of a sequence, but struggles with the middle and end. Pay special attention to the last two or three flashes in the pattern.`
  },
  {
    title: "Downhill",
    seoContent: `![Downhill](https://www.htmlgames.com/uploaded/game/thumb800/downhill800450.webp)

Downhill injects a massive dose of frantic, high-speed arcade action into the endless runner genre, literally turning the concept on its head by delivering a highly addictive, downward-scrolling survival experience set against a beautiful, snow-covered alpine mountain. Moving away from slow, methodical platforming, this title is entirely focused on split-second reflexes and rapid spatial pathfinding. You are placed in control of a skier tasked with plunging endlessly down a treacherous, constantly shifting vertical slope. The atmosphere is intensely kinetic; gravity is perpetually pushing you downward, forcing you to constantly react to incoming pine trees, jagged rocks, and impassable ice walls while desperately trying to weave through slalom gates for highly valuable point multipliers. The visual presentation is highly polished, utilizing a vibrant, crisp aesthetic that pops with color and satisfying snow-spray particle effects upon sharp turns. The sensation of speed is incredibly well-executed, creating a genuine sense of panic as the downward scrolling accelerates the deeper you go. Downhill is a pure shot of winter arcade adrenaline.

## How to Play
* The primary objective is to survive as long as possible while skiing down the endless mountain, avoiding all deadly obstacles.
* The screen will constantly scroll downward automatically, increasing in speed as you progress. If you hit a tree, a rock, or a wall, you are instantly destroyed.
* Use the \`Left\` and \`Right\` arrow keys (or \`A\` and \`D\`) to rapidly carve and steer your skier horizontally across the snow to aim for safe gaps.
* Some variations allow you to click the \`Left Mouse Button\` or press the \`Spacebar\` to rapidly accelerate your fall or jump over specific low obstacles.
* Ski directly between the colored slalom flags to drastically increase your high score multiplier.

## Tips and Tricks
* **Look Down, Not Up:** Your eyes should be permanently glued to the absolute bottom edge of the screen. You must anticipate the gaps in the trees before they reach the middle of the screen, or you won't have time to carve over to them.
* **Stay Centered:** Whenever you aren't actively dodging a massive forest block, try to return your skier to the dead center of the slope. Being trapped on the far left or right wall severely limits your escape options if a solid rock face appears directly below you.
* **Don't Be Greedy:** Slalom flags are great for your score, but if a flag is located right next to a dense patch of trees, ignore it! Survival is always more important than a temporary score multiplier.
* **Master the Carve:** Don't just hold the arrow key down. Learn to "tap" the keys to make micro-adjustments to your trajectory, weaving through incredibly tight gaps between rocks.
* **Follow the Coins:** Game designers often use trails of collectible coins to implicitly guide you through the safest possible path down the mountain. If you don't know where to go, follow the shiny objects.`
  },
  {
    title: "Monkey Connect",
    seoContent: `![Monkey Connect](https://www.htmlgames.com/uploaded/game/thumb800/monkey-connect-800x450.webp)

Monkey Connect (often known as Onet or Kyodai) injects a massive dose of highly structural, geometric pathfinding into the classic Mahjong tile-matching genre, delivering a visual puzzle that demands intense calculation wrapped in a vibrant, tropical jungle aesthetic. Stepping entirely away from the 3D, overlapping pyramids of standard Mahjong Solitaire, this game places every single tile flat on a massive, single-layer 2D grid featuring cute monkeys, bananas, and exotic fruits. Your objective is not just to find matching pairs, but to prove that a clear, unobstructed path can physically be drawn between them using a very specific set of routing rules. The atmosphere is deeply engaging, requiring players to constantly weigh the immediate satisfaction of a simple edge match against the necessity of unblocking the dense center of the board. The visual style is exceptionally polished, utilizing crisp, high-definition tropical iconography that ensures perfect readability. It is a pure test of spatial planning, line-of-sight optimization, and the ability to visualize invisible lines across a chaotic grid.

## How to Play
* Your primary objective is to clear the entire flat grid by connecting identical pairs of tropical tiles before the strict timer runs out.
* Use your \`Mouse\` to click on a tile, then click on a matching tile to attempt a connection.
* **The Golden Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two tiles using a maximum of three straight lines (which means no more than two 90-degree corners).
* You can connect tiles that are sitting directly next to each other, or you can route the path entirely outside the main grid boundary (the empty space surrounding the puzzle).
* If you successfully clear all tiles, you win. If no more valid moves exist on the board, the board will usually automatically reshuffle.

## Tips and Tricks
* **Clear the Perimeter First:** Tiles sitting on the absolute outer edge of the board are by far the easiest to connect, because their path can route freely through the empty space outside the grid using the two-turn rule. Clear the borders instantly.
* **Look for the "U" Shape:** The two-turn rule allows for a perfect "U" shape connection. If two identical tiles are on the exact same row, but separated by other tiles, check if there is empty space directly above or below both of them to draw the U.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the grid from the outside toward the dense center.
* **Don't Tunnel Vision:** If you can't find a path for the two specific Banana tiles you are looking at, stop looking at them. Scan the entire board for an obvious, free match to keep the timer from running down.
* **Use the Hint Button Sparingly:** If you are truly stuck, use the hint button, but be aware that relying on it prevents you from training your brain to see the complex two-turn pathways.`
  },
  {
    title: "Pac Maze",
    seoContent: `![Pac Maze](https://www.htmlgames.com/uploaded/game/thumb800/pacmaze800450.webp)

Pac Maze strips the arcade exploration genre down to its absolute, most tension-fueled and pathfinding-focused core, delivering a pure test of spatial memory and rapid execution heavily inspired by the neon-drenched classics of the 1980s. Moving away from complex combat mechanics, this title places you in control of a fragile, glowing protagonist trapped within a series of massive, claustrophobic labyrinths. Your objective is intensely focused: navigate the winding, neon-lit corridors to collect every single glowing star scattered throughout the grid, which will trigger the exit portal to open. The atmosphere is deeply engaging and highly stressful; the maze is completely saturated with lethal hazards and relentlessly pursuing enemies that demand flawless timing and routing to bypass. The visual presentation is highly polished, utilizing a clean, classic top-down perspective and crisp, high-contrast neon graphics that ensure the dangerous traps are perfectly readable against the dark background. Pac Maze is a pure, unadulterated shot of arcade adrenaline.

## How to Play
* The primary objective is to collect every single star scattered throughout the labyrinth to open the exit portal, and then safely reach it before the timer expires.
* Use your \`Arrow Keys\` (Up, Down, Left, Right) or \`W, A, S, D\` to physically move your character through the maze corridors.
* You must actively avoid touching the walls (in some variations) or colliding with the roaming enemies and spike traps. Touching a hazard usually results in instant death and a level restart.
* Some levels feature specialized power-ups that temporarily grant you invincibility or the ability to freeze the enemies in place.
* Once all the mandatory stars are collected, a massive exit door will swing open somewhere in the maze.

## Tips and Tricks
* **The "Right Hand" Rule:** If you are completely lost in a massive, sprawling maze, place your character's metaphorical "right hand" on the right wall and simply follow it continuously. While it is not the fastest route, following one continuous wall will mathematically guarantee you eventually explore every inch of the maze.
* **Scout the Patrols:** If an enemy is patrolling a corridor, do not just sprint blindly after them. Stop, observe their exact movement pattern and speed, and only move when they are walking away from you.
* **Look Ahead:** Because of the top-down perspective, you can see slightly ahead of your character. Always look two intersections ahead to plan your route and avoid dead ends where enemies can trap you.
* **Grab the Corners First:** When you enter a massive open room filled with stars, clear the absolute outer corners and edges first. Getting trapped in a corner by a moving enemy is a guaranteed death.
* **Don't Panic at the Exit:** The most common way players die is sprinting wildly toward the exit portal once it opens, completely forgetting about the enemy patrolling right in front of it. Stay calm and execute the final steps flawlessly.`
  },
  {
    title: "Japanese Garden - Hidden Secrets",
    seoContent: `![Japanese Garden - Hidden Secrets](https://www.htmlgames.com/uploaded/game/thumb800/japanesegarden-hiddensecrets800450.webp)

Japanese Garden - Hidden Secrets is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and serene core. Forget convoluted detective storylines or messy rooms; this title is a pure, unadulterated shot of visual immersion focused entirely on acute observation and relaxation. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing the meticulously manicured bonsai trees, tranquil koi ponds, and wooden pagodas of a traditional Japanese garden. Your objective is elegantly simple: locate the subtle, culturally themed artifacts expertly blended into the environment. The atmosphere is intoxicatingly rich and incredibly peaceful, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, cherry blossoms, and complex geometry. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy stone lantern and bamboo stalk is rendered with breathtaking clarity. The sensation of discovery makes every successfully located item feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of the Japanese Garden scene.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden objects before the strict time limit expires to advance to the next tranquil location.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the bridge over the koi pond) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A silver teapot might be tinted green to blend into the moss.
* **Check the Shadows:** The developers love hiding dark objects inside the shadows of pagodas, underneath massive boulders, or inside unlit lanterns. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a folding fan, you will accidentally spot the hidden origami crane.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Christmas Tree Solitaire",
    seoContent: `![Christmas Tree Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/christmastreesolitaire800450.webp)

Christmas Tree Solitaire completely re-invents the complex, alternating-color mechanics of standard card sorting by stripping it down to a brutally elegant, mathematically pure game of addition, all wrapped in a visually stunning, cozy holiday aesthetic. Moving away from the green felt of a casino, this title takes the classic rules of "Pyramid Solitaire" and constructs a massive, overlapping triangular structure of cards designed to look exactly like a decorated Christmas tree. Your objective is intensely focused: completely dismantle the tree by pairing exposed cards that mathematically add up to exactly thirteen. The atmosphere is deeply calculating but incredibly festive, trading intense arcade pressure for a soothing, winter-themed puzzle environment. The visual presentation is exceptionally polished, utilizing crisp, custom-themed card art featuring snowmen and Santa Claus that ensures perfect readability even when the tree is heavily congested. Christmas Tree Solitaire is a masterclass in taking a simple arithmetic concept and turning it into a highly addictive, seasonal puzzle experience.

## How to Play
* Your primary objective is to clear all the cards from the massive Christmas tree structure.
* Use your \`Left Mouse Button\` to click on any two fully exposed (unblocked) cards whose numerical values add up to exactly 13.
* **Card Values:** Number cards are worth their face value (e.g., a 7 and a 6 = 13). Jacks are 11 (requires a 2). Queens are 12 (requires an Ace). Kings are exactly 13 and can be clicked individually to instantly remove them.
* A card is strictly considered "exposed" only if there is absolutely no other card resting on top of it.
* If you have no valid pairs of 13 on the tree, click the face-down draw pile at the bottom to reveal a new card to use.

## Tips and Tricks
* **Prioritize the Tree Over the Draw Pile:** If you have a 5 exposed on the tree, and a 5 in your draw pile, and you need to pair an 8 on the board... ALWAYS use the 5 on the tree. You must prioritize dismantling the structure over emptying the draw pile.
* **Dig Evenly:** Do not drill a deep hole down one specific side of the tree. Try to peel cards away evenly across the entire structure. An even, flat tree offers vastly more exposed cards and potential pairings.
* **Save the Kings:** Because Kings equal 13 by themselves, they can be removed instantly. However, if they are not blocking anything important, leave them on the board. They don't hurt you, and occasionally you might accidentally click a King when you meant to click something else.
* **Track Your Cards:** If you desperately need a 4 to clear a 9, take a quick glance at the discard pile. If all four 4s have already been played, you know for a mathematical fact that the tree is dead and you must restart.
* **The "Undo" Button (If Available):** Use it strategically! If you pair a 10 from the draw pile with a 3 on the board, but realize another 3 was blocking a massive stack of hidden cards, undo the move and pair the 10 with the *blocking* 3.`
  },
  {
    title: "Hidden Spots - City",
    seoContent: `![Hidden Spots - City](https://www.htmlgames.com/uploaded/game/thumb800/hiddenspots-city800450.webp)

Hidden Spots - City is a masterclass in atmospheric, visually dense puzzle design, stripping the "spot the difference" genre down to its absolute, most captivating and urban-focused core. Forget convoluted detective storylines; this title is a pure, unadulterated shot of visual immersion focused entirely on acute observation. You are presented with stunningly detailed, high-definition digital photographs showcasing gritty back alleys, bustling neon intersections, and quiet suburban roads. Your task is to meticulously scan the image to locate a specific set of subtle discrepancies or cleverly camouflaged objects deliberately injected by the developers. The atmosphere is intoxicatingly rich, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, urban architecture, and complex geometry. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy corner, brick wall, and scattered newspaper is rendered with breathtaking clarity. The sensation of discovery makes every successfully located spot feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single hidden spot or discrepancy listed on the side panel within the main high-definition photograph of the city.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on the spot when you locate it.
* Successfully locating a spot will usually draw a circle around it and update your counter.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden spots before the strict time limit expires to advance to the next urban location.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the neon sign) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A red apple might be tinted grey to blend into the asphalt.
* **Check the Shadows:** The developers love hiding dark objects inside the shadows of dumpsters, underneath parked cars, or inside unlit windows. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a spray can, you will accidentally spot the hidden wrench.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
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
