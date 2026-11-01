const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Number Merge",
    seoContent: `![Number Merge](https://www.htmlgames.com/uploaded/game/thumb800/numbermerge800450.webp)

Number Merge strips the wildly popular mathematical tile genre down to its absolute, most highly tactile and satisfying core. Moving away from the chaotic, gravity-based drops or rigid four-way sliding of standard clones, this title grants players complete, unadulterated surgical control. Set against a clean, visually uncluttered digital grid, you are tasked with physically linking identical numbered tiles by drawing a continuous, unbroken path through them. The atmosphere is deeply calculating and immensely relaxing; you are essentially constructing a numerical pipeline that funnels low-value numbers into a massive, concentrated sum. The visual presentation is exceptionally clean, utilizing crisp, contrasting colors for different numerical tiers and satisfying, snappy animations that trigger when a massive chain finally collapses into a single, high-value tile. Number Merge is a brilliant, unpressured puzzle experience that trades rapid reflexes for pure, unadulterated spatial logic and long-term cascade planning.

## How to Play
* The primary objective is to reach a specific numerical goal by merging identical tiles to exponentially increase their value.
* Use your \`Mouse\` to click and hold on a numbered tile, then drag a line through adjacent tiles containing the exact same number.
* You can draw connections horizontally, vertically, and diagonally, allowing for incredibly complex, winding chains.
* Release the \`Left Mouse Button\` to collapse the chain. All the connected tiles will merge into a single tile with a higher value.
* The new, higher-value tile will spawn exactly at the location of the *last* tile you touched before releasing the mouse.

## Tips and Tricks
* **Control the Drop Zone:** Because the newly merged tile appears at the very end of your drawn chain, you have total control over where massive numbers accumulate. Always end your chain in a designated corner to keep your high numbers safely grouped together.
* **Maximize the Chain:** Never settle for connecting just two tiles if a third is available. A longer chain almost always results in a significantly higher-value final tile and clears more clutter from the board.
* **The "Bridge" Technique:** You can often connect two separated clusters of "4"s by linking them through a single "4" sitting in the middle of the board. Look for these crucial bridge tiles before making a move.
* **Work from the Outside In:** Try to clear low-value tiles from the edges of the board first. Keeping the center of the grid open gives you maximum flexibility for drawing complex diagonal lines later in the game.
* **Don't Strand the Big Numbers:** If you create a massive "128" tile right in the dead center of the board, surrounded by "2"s and "4"s, it becomes a permanent obstacle. Always try to pull your high numbers to the edges.`
  },
  {
    title: "Drop",
    seoContent: `![Drop](https://www.htmlgames.com/uploaded/game/thumb800/drop800450.webp)

Drop injects a massive dose of frantic, high-speed arcade action into the endless runner genre, literally turning the concept on its head by delivering a highly addictive, downward-scrolling survival experience. Moving away from slow, methodical platforming, this title is entirely focused on split-second reflexes and rapid spatial pathfinding. You are placed in control of a falling object tasked with plunging endlessly down a treacherous, constantly shifting vertical shaft. The atmosphere is intensely kinetic; gravity is perpetually pushing you downward, forcing you to constantly react to incoming obstacles, moving platforms, and impassable geometry while desperately trying to snag highly valuable point multipliers. The visual presentation is highly polished, utilizing a vibrant, neon-infused geometric aesthetic that pops with color and explosive particle effects upon impact. The sensation of speed is incredibly well-executed, creating a genuine sense of panic as the downward scrolling accelerates the deeper you go. Drop is a pure, unadulterated shot of arcade adrenaline.

## How to Play
* The primary objective is to survive as long as possible while falling down the endless shaft, avoiding all deadly obstacles.
* The screen will constantly scroll downward automatically. If you hit a red platform or a spiked obstacle, you are instantly destroyed.
* Use the \`Left\` and \`Right\` arrow keys (or \`A\` and \`D\`) to steer your object horizontally in mid-air to aim for safe gaps.
* Some variations allow you to click the \`Left Mouse Button\` or press the \`Spacebar\` to rapidly accelerate your fall to smash through specific weakened barriers.
* Collect glowing orbs or stars during your descent to drastically increase your high score.

## Tips and Tricks
* **Look Down, Not Up:** Your eyes should be permanently glued to the absolute bottom edge of the screen. You must anticipate the gaps in the platforms before they reach the middle of the screen, or you won't have time to maneuver.
* **Stay Centered:** Whenever you aren't actively dodging, try to return to the dead center of the shaft. Being trapped on the far left or right wall severely limits your escape options if a solid block appears directly below you.
* **Master the Fast Fall:** If the game features a fast-fall mechanic, use it to quickly bypass complex moving traps, but be careful not to rocket yourself directly into a spike pit you haven't seen yet.
* **Follow the Coins:** Game designers often use trails of collectible coins or orbs to implicitly guide you through the safest possible path. If you don't know where to go, follow the shiny objects.
* **Don't Oversteer:** At high speeds, a tiny tap of the arrow key is enough to move you significantly. Don't hold the key down and slam yourself into the walls.`
  },
  {
    title: "Bubble Dropper",
    seoContent: `![Bubble Dropper](https://www.htmlgames.com/uploaded/game/thumb800/bubbledropper800450.webp)

Bubble Dropper brilliantly reinvents the rigid, upward-firing mechanics of traditional arcade shooters by introducing a massive, freely rotating gravitational wheel. Moving away from the static cannon at the bottom of the screen, this game forces you to actively spin a central receptacle to catch bubbles that are raining down from above. Your objective is intensely focused: rotate the wheel to ensure the falling bubbles land next to identical colors, creating matches and preventing the wheel from overflowing. The atmosphere is deeply kinetic and demands a completely new type of spatial awareness, forcing you to constantly calculate rotational speed and angular gravity. The visual presentation is highly polished, utilizing crisp, brightly colored bubbles that pop against the background, ensuring perfect readability even when the falling speed accelerates to a blinding pace. Bubble Dropper is a pure, uncompromising test of reflex aiming and geometric calculation, offering a deeply hypnotic spin on a beloved genre.

## How to Play
* The primary objective is to prevent the central rotating wheel from overflowing with bubbles.
* Bubbles of various colors will constantly fall from the top of the screen toward the center wheel.
* Use your \`Left\` and \`Right\` arrow keys, or use your \`Mouse\` to drag and spin the central wheel.
* You must rotate the wheel so that the falling bubble lands adjacent to a bubble of the exact same color.
* Connecting three or more bubbles of the identical color will cause them to pop, clearing space on the wheel.
* If the wheel fills up and a bubble touches the absolute outer boundary of the screen, the game is over.

## Tips and Tricks
* **Always Spin Early:** Never wait until the falling bubble is an inch away from the wheel before you start rotating. You must anticipate where you want it to land the second it appears at the top of the screen.
* **Build Stacks, Not Layers:** Try to build deep columns of the same color extending outward from the center, rather than thin layers around the perimeter. A deep column guarantees a massive clear.
* **Check the Next Bubble:** Always keep one eye on the top of the screen to see what color is coming next. Knowing what you have in reserve completely dictates how you should rotate the wheel for the current drop.
* **Don't Panic Spin:** When the wheel gets full, players tend to spin it wildly hoping for accidental matches. This is a guaranteed death sentence. Focus entirely on precise, calculated rotations.
* **Use the Momentum:** The wheel carries physical momentum. If you spin it hard, it will continue rotating slightly after you release the key. Learn to use this momentum to glide the perfect color into position at the last second.`
  },
  {
    title: "Free Aliens",
    seoContent: `![Free Aliens](https://www.htmlgames.com/uploaded/game/thumb800/freealiens800450.webp)

Free Aliens takes the ancient, highly structured mechanics of traditional Chinese Mahjong tile-matching and whisks them away on a quirky, extraterrestrial rescue mission. Moving far beyond the austere, historical aesthetic of bamboo and character tiles, this title infuses the classic layouts with incredibly crisp, high-definition illustrations of adorable, weird, and colorful alien creatures trapped in stasis blocks. The atmosphere is undeniably upbeat and charming, trading intense, cerebral silence for a vibrant, sci-fi puzzle environment that feels genuinely fun. You are tasked with analyzing complex, overlapping tile structures, meticulously searching for exposed alien pairs to beam them up and dismantle the board. The visual presentation is exceptionally polished, utilizing bright, highly saturated color palettes that make identifying matching aliens incredibly intuitive, even when the board is massively congested. Free Aliens is a highly successful thematic reskin, proving that a timeless puzzle formula can be completely refreshed with a strong, cohesive artistic vision.

## How to Play
* Your objective is to completely clear the entire board by matching identical pairs of alien tiles to rescue them.
* Use your \`Left Mouse Button\` to select a "free" alien tile, then click a matching "free" tile to instantly beam both away.
* **The Golden Rule:** A tile is strictly considered "free" only if it can physically slide OUT of the structure without hitting another tile. It must be completely unblocked on at least one of its four sides (top, bottom, left, or right) and have nothing resting on top of it.
* Because the tiles heavily overlap, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden aliens buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, you lose.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **Check All Four Sides:** Unlike traditional Mahjong which only checks the left and right sides, this game requires you to check if the top or bottom is free. This completely changes how you analyze the board.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach green aliens on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a green alien buried deep in the center tower.
* **Unlock Multipliers:** Always prioritize matching a pair if it results in *two* new tiles becoming free, rather than matching a pair that only frees up one.
* **Work from the Outside In:** If you can't find a match in the center, slowly peel away the outer boundary of the structure to expose more free sides for the interior tiles.`
  },
  {
    title: "Donuts",
    seoContent: `![Donuts](https://www.htmlgames.com/uploaded/game/thumb800/donuts800450.webp)

Donuts injects a massive dose of sugary, pastry-filled energy into the highly competitive tile-swapping genre, delivering a visual feast of glazed perfection and intensely satisfying combination mechanics. Stepping away from generic gem-swapping, this title embraces a much more appetizing thematic approach, requiring players to physically align glowing jelly-filled, frosted, and sprinkled donuts. The atmosphere is undeniably charming and upbeat, perfectly capturing the essence of a bustling bakery without sacrificing the deep, strategic complexity that hardcore puzzle fans demand. Every level is a meticulously designed challenge, presenting specific objective quotas (like collecting 30 chocolate donuts or breaking frozen pastry boxes) that must be met within a strict move limit. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition sprites that crackle with sugary energy when linked together. The explosive animations and satisfying audio cues that accompany a massive, board-clearing chain reaction are nothing short of spectacular. It is a pure, unadulterated test of spatial planning and cascade optimization.

## How to Play
* The core mechanic revolves around swapping adjacent donuts to create horizontal or vertical lines of three or more identical pastries.
* Use your \`Mouse\` to click on a donut, then click an adjacent one to swap their positions, or simply click and drag.
* Your objective is to fulfill specific level goals displayed at the top of the screen before you run out of allowed moves.
* Matching exactly four donuts creates a glowing, line-clearing super-donut.
* Matching five donuts in an L or T shape creates a devastating area-of-effect bomb.
* Matching five donuts in a straight row creates a rainbow sprinkle donut that obliterates all pastries of a specific color from the board.

## Tips and Tricks
* **Prioritize the Objective:** It is incredibly easy to get distracted by a massive chain of pink frosted donuts, but if your objective is only chocolate ones, you are wasting a precious move. Focus laser-like on the goal.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading donuts, often resulting in free, accidental combos as the board settles.
* **Combine the Power-Ups:** The most devastating move in the game is swapping two power-ups with each other. Swapping a line-clear with a bomb creates a massive, cross-shaped explosion that clears half the board instantly.
* **Save the Rainbows:** Do not use the five-in-a-row sprinkle donut immediately. Save it until you desperately need to clear a specific color to meet your objective, or wait to combine it with another power-up.
* **Analyze the Chokepoints:** Pay close attention to the shape of the board. Some levels have narrow columns, ice blocks, or chains where donuts can get stuck. Focus on breaking those barriers first.`
  },
  {
    title: "Freaky Freecell",
    seoContent: `![Freaky Freecell](https://www.htmlgames.com/uploaded/game/thumb800/frozenfreecell800450.webp)

Freaky Freecell is a brilliantly complex, highly demanding variant of the classic card-sorting genre that significantly raises the strategic ceiling compared to standard Klondike, and then ruthlessly tightens the noose by removing a crucial lifeline every single level. Unlike standard Freecell where you always have four open reserve slots to temporarily park blocking cards, this game actively punishes success; as you advance to higher levels, you are granted fewer and fewer free cells. The atmosphere is deeply calculating and immensely stressful, requiring players to possess a masterful understanding of card sequencing, cascade math, and long-term tactical sacrifice. The visual presentation is highly polished, utilizing crisp, classic playing card graphics set against a traditional green felt backdrop, ensuring perfect readability even during complex maneuvers. The genius of Freaky Freecell lies entirely in its escalating difficulty curve; a strategy that works perfectly on level one will completely doom you on level four. It is an uncompromising test of logic and patience for veteran card players.

## How to Play
* The primary objective is to move all 52 cards into the four foundation piles at the top right, building upward in suit from Ace to King.
* The main tableau consists of eight columns where cards must be built downward in alternating colors (e.g., a Red 8 can only be placed on a Black 9).
* Use your \`Mouse\` to click and drag cards between columns.
* The "Free Cells" at the top left are temporary parking spots. You can move any single exposed card into an empty free cell to get it out of the way.
* **The Catch:** Every time you beat a level, the next level starts with one less Free Cell available to you, drastically reducing your ability to maneuver.

## Tips and Tricks
* **Protect the Free Cells:** Your free cells are your most valuable resource. Never park a card in a free cell unless you have a concrete, multi-step plan to get it back out onto the tableau or the foundation shortly after.
* **Empty Columns are Gold:** An empty column in the tableau acts like a super-powered free cell. It allows you to move massive sequences of cards at once. Prioritize clearing columns above all else.
* **The Math of Movement:** The maximum number of cards you can drag in a single sequence is determined mathematically by the number of empty free cells and empty tableau columns you have. If your free cells are full, you can only move one card at a time.
* **Dig for Aces:** The game cannot progress until the Aces are in the foundation. Scan the board immediately upon dealing and formulate a plan specifically to unearth the four Aces.
* **Don't Build Evenly:** Unlike other solitaires, it is sometimes better to aggressively build one specific suit to the foundation in Freecell, as it clears cards off the board entirely and opens up more maneuvering space.`
  },
  {
    title: "Wild West Mysteries",
    seoContent: `![Wild West Mysteries](https://www.htmlgames.com/uploaded/game/thumb800/wildwestmysteries800450.webp)

Wild West Mysteries is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and thematic core. Forget convoluted detective storylines or unnecessary mini-games; this title is a pure, unadulterated shot of frontier immersion focused entirely on acute visual observation. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing dusty saloons, abandoned gold mines, and bustling frontier towns, tasked with locating a specific list of cleverly concealed cowboy artifacts. The atmosphere is intoxicatingly rich, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, wooden architecture, and complex geometry. Visually, the game opts for a highly realistic, slightly sepia-toned aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy corner, coiled lasso, and weathered barrel is rendered with breathtaking clarity. The sensation of discovery is incredibly well-executed, making every successfully located item feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of the Wild West scene.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden objects before the strict time limit expires to advance to the next frontier location.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the saloon bar) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A silver horseshoe might be tinted brown to blend into a wooden wall.
* **Check the Shadows:** The developers love hiding dark objects inside the shadows of barrels, underneath stagecoaches, or inside extinguished lanterns. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a sheriff's badge, you will accidentally spot the hidden revolver.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Halloween Pairs",
    seoContent: `![Halloween Pairs](https://www.htmlgames.com/uploaded/game/thumb800/halloweenpairs800480.webp)

Halloween Pairs strips the casual gaming experience down to its absolute, most fundamentally engaging core, delivering a pure, unadulterated test of short-term cognitive retention wrapped in a delightfully spooky aesthetic. Originating from the classic tabletop card game "Concentration," this digital adaptation requires players to memorize the precise locations of various creepy images—ghosts, bats, witches, and skulls—hidden beneath a grid of identical, carved pumpkins. The atmosphere is deeply cerebral and intentionally charming, completely devoid of the chaotic explosions and stressful timers that plague modern mobile games. It is a pure test of your brain's ability to map visual information to a physical location. The visual presentation is highly polished, utilizing a clean, moonlit interface and a massive variety of high-definition, distinct icons, ensuring that every game feels fresh and visually distinct. Halloween Pairs is the ultimate, timeless brain-training routine, perfect for players looking to actively sharpen their cognitive recall while enjoying the holiday spirit.

## How to Play
* The primary objective is to clear the entire board by finding and matching all pairs of identical hidden Halloween images.
* Use your \`Left Mouse Button\` to click on any face-down pumpkin to reveal the spooky image hidden underneath it.
* Click a second face-down pumpkin to reveal it.
* If the two revealed images are an exact match, they will be permanently removed from the board.
* If the two images do not match, they will briefly remain face-up so you can memorize them, before flipping back over.
* The game is successfully completed when every single pair has been found and the board is completely empty.

## Tips and Tricks
* **The "Sweep" Method:** Do not click randomly. On your very first few turns, methodically click the top-left pumpkin, then the one next to it, moving across the rows like you are reading a book. Your goal isn't to find matches early; your goal is to map the board in your head.
* **Create Mental Stories:** If you flip a "Ghost" in the top left, and a "Bat" in the bottom right, create a weird mental image to link them physically (e.g., "The ghost is throwing the bat from the top to the bottom"). This makes retrieval much easier.
* **Don't Guess on the Second Tile:** If you flip a pumpkin and reveal a "Skull," and you *think* you remember seeing another skull, but you aren't sure where, DO NOT click randomly. Only click the second pumpkin if you are 100% certain. Otherwise, flip a completely unknown tile to gather new information.
* **Group by Category:** As you reveal tiles, mentally group them. "Okay, the monsters are mostly on the left side, the candy is on the right."
* **Patience is Key:** The pumpkins flip back over relatively quickly. Do not rush to make your next move. Take a breath, visualize the board, and commit the two failed images to memory before proceeding.`
  },
  {
    title: "Daily Mini Sudoku",
    seoContent: `![Daily Mini Sudoku](https://www.htmlgames.com/uploaded/game/thumb800/daily-mini-sudoku-800x450.webp)

Daily Mini Sudoku delivers an absolute masterclass in minimalist, logic-driven puzzle design, brilliantly adapting the globally beloved numbers game for players who want a rapid, intense mental workout without the hour-long commitment of a massive 9x9 grid. By shrinking the board down to 6x6 or 8x8 formats, the game drastically increases the pacing and frequency of satisfying logical breakthroughs while maintaining the rigorous mathematical purity of the original. The atmosphere is intensely intellectual; there is no narrative, no flashy explosions, and no luck involved. It is a pure test of your ability to deduce spatial rules and execute complex numerical eliminations. The visual presentation is highly appealing in its absolute austerity, utilizing a stark, clean grid that ensures the puzzle mechanics remain perfectly readable and distraction-free on any screen size. The brilliance of Daily Mini Sudoku lies in its commitment to providing brand-new, hand-crafted levels every single day across four difficulty settings, offering the ultimate, bite-sized brain-training routine.

## How to Play
* Your objective is to fill all the empty squares on the grid with numbers, following the strict rules of Sudoku.
* Depending on the board size (e.g., 6x6), you must use the numbers 1 through 6.
* **The Golden Rules:** A specific number can only appear exactly ONCE in every horizontal row, exactly ONCE in every vertical column, and exactly ONCE within every heavily outlined sub-box (e.g., the 3x2 boxes).
* Use your \`Mouse\` to click an empty square, and use your \`Keyboard Number Row\` (or the on-screen pad) to input a digit.
* The puzzle is successfully completed when the entire board is filled correctly with no rule violations.

## Tips and Tricks
* **The "Crosshatch" Method:** Pick a specific number, like "1". Scan the entire board and look at every sub-box that *doesn't* have a "1". Because a "1" cannot repeat in a row or column, visually draw lines from the existing "1"s to eliminate empty squares in the empty boxes.
* **Look for Singletons:** If a horizontal row already has the numbers 1, 2, 4, 5, and 6 filled in, you don't even need to look at the columns; the only remaining empty square MUST be a 3. Always hunt for rows, columns, or boxes that only have one or two missing numbers.
* **Use Pencil Marks:** Most digital Sudoku games allow you to take "notes" by putting tiny numbers in a square. If a square can only possibly be a 2 or a 5, write both down. This heavily aids in complex deductions later.
* **Never Guess:** Sudoku is 100% pure mathematical logic. If you guess a number and you are wrong, you will break the entire puzzle and not realize it until 10 minutes later. Every placement can be proven.
* **Scan the Intersections:** If you are staring at an empty square, look up its column, across its row, and inside its box. Count how many unique numbers you see. If you see 1, 2, 3, 5, and 6... the empty square MUST be 4.`
  },
  {
    title: "Wild Flower Solitaire",
    seoContent: `![Wild Flower Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/wildflowersolitaire800450.webp)

Wild Flower Solitaire is a beautifully designed, highly fluid variant of the classic card-sorting genre that significantly lowers the rigid barriers of standard Klondike to deliver a much faster, more combo-heavy gameplay experience. Moving away from the frustrating strictness of alternating colors, this game embraces a deeply satisfying "build down regardless of suit" mechanic on the main tableau. The atmosphere is immensely relaxing and visually vibrant, trading the sterile green felt for gorgeous, high-definition botanical illustrations and floral card backs. The visual presentation is highly polished, ensuring perfect readability even during complex maneuvers, while the satisfying audio cues of massive card cascades provide a constant dopamine drip. The genius of Wild Flower Solitaire lies in its accessibility; it removes the common roadblocks that leave players stuck with no valid moves in traditional solitaire, resulting in a game that heavily rewards forward momentum, aggressive sequence building, and massive board sweeps.

## How to Play
* The primary objective is to move all 52 cards into the four foundation piles at the top right, building upward in suit from Ace to King.
* The main tableau consists of columns where cards must be built downward in numerical order (e.g., placing an 8 on a 9).
* **The Core Difference:** Unlike Klondike, you can build downward REGARDLESS of suit or color on the tableau (e.g., you can place a Spade 8 on a Spade 9, a Heart 9, or a Diamond 9).
* Use your \`Mouse\` to click and drag cards between columns.
* You can only move an entire stack of cards at once if the sequence is built using the EXACT SAME suit.
* You can use any card from the exposed top row (the reserve) to build on the tableau or the foundations.

## Tips and Tricks
* **Prioritize Same-Suit Sequences:** While the game allows you to build downward with mixed suits (e.g., Heart 9, Spade 8, Club 7), doing so permanently locks that stack, because you can only move multiple cards if they share a suit. Always try to build single-suit sequences (Heart 9, Heart 8, Heart 7) so you can move them later.
* **Empty Columns are Gold:** An empty column in the tableau is your most powerful tool. It is the only place you can legally place a King to start a new, massive sequence. Do everything in your power to clear a column.
* **Examine the Top Row:** The cards sitting in the top reserve row are your lifeline. Constantly scan them to see if they can fill a gap in your tableau sequences or be moved directly to the foundation.
* **Dig for Aces:** The game cannot progress until the Aces are in the foundation. Scan the board immediately upon dealing and formulate a plan specifically to unearth the four Aces.
* **Don't Rush to the Foundations:** Just because you *can* move a Heart 5 to the foundation doesn't mean you *should*. Sometimes keeping it on the tableau is necessary to hold a Heart 4 that you desperately need to move.`
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
