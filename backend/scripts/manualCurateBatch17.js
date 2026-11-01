const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Christmas Match 3",
    seoContent: `![Christmas Match 3](https://www.htmlgames.com/uploaded/game/thumb800/christmasmatch3800450.webp)

Christmas Match 3 injects a massive dose of holiday cheer into the highly competitive tile-swapping genre, delivering a visual feast of festive decorations and intensely satisfying combination mechanics. Stepping away from generic gem-swapping, this title embraces a much more seasonal thematic approach, requiring players to physically align glowing ornaments, candy canes, gingerbread men, and wrapped presents. The atmosphere is undeniably charming and upbeat, perfectly capturing the essence of a winter wonderland without sacrificing the deep, strategic complexity that hardcore puzzle fans demand. Every level is a meticulously designed challenge, presenting specific objective quotas (like collecting 30 silver bells or breaking frozen ice blocks) that must be met within a strict move limit. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition sprites that crackle with magical, snowy energy when linked together. The explosive animations and satisfying sleigh-bell audio cues that accompany a massive, board-clearing chain reaction are nothing short of spectacular. It is a pure, unadulterated test of spatial planning and cascade optimization wrapped in holiday spirit.

## How to Play
* The core mechanic revolves around swapping adjacent holiday items to create horizontal or vertical lines of three or more identical objects.
* Use your \`Mouse\` to click on an ornament, then click an adjacent one to swap their positions, or simply click and drag.
* Your objective is to fulfill specific level goals displayed at the top of the screen before you run out of allowed moves.
* Matching exactly four items creates a glowing, line-clearing super-ornament.
* Matching five items in an L or T shape creates a devastating area-of-effect explosive present.
* Matching five items in a straight row creates a magical snow globe that obliterates all items of a specific type from the board.

## Tips and Tricks
* **Prioritize the Objective:** It is incredibly easy to get distracted by a massive chain of green trees, but if your objective is only red stockings, you are wasting a precious move. Focus laser-like on the goal.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading items dropping from the ceiling, often resulting in free, accidental combos as the board settles.
* **Combine the Power-Ups:** The most devastating move in the game is swapping two power-ups with each other. Swapping a line-clear with a bomb creates a massive, cross-shaped explosion that clears half the board instantly.
* **Save the Snow Globes:** Do not use the five-in-a-row globe immediately. Save it until you desperately need to clear a specific item to meet your objective, or wait to combine it with another power-up.
* **Analyze the Ice:** Pay close attention to the shape of the board. Some levels have frozen squares where items cannot be moved. Focus on making matches adjacent to the ice to break those barriers first.`
  },
  {
    title: "Christmas Buster",
    seoContent: `![Christmas Buster](https://www.htmlgames.com/uploaded/game/thumb800/christmasbuster800450.webp)

Christmas Buster delivers the absolute purest, most unadulterated distillation of the legendary arcade-shooter formula, completely replacing the standard, sterile geometric spheres with a vibrant, charming aesthetic of glowing holiday baubles and winter colors. This is the genre exactly as it was meant to be played, but softened with a delightful thematic twist: a massive ceiling of brightly colored Christmas ornaments, a single aiming cannon, and an unrelenting pursuit of massive, structure-collapsing chain reactions. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core shooting mechanic. You are tasked with calculating angles, bouncing shots off the sidewalls, and grouping colors to trigger massive structural collapses, all while snow gently falls in the background. The visual presentation is highly polished, utilizing crisp, high-definition sprites that pop with festive colors. The explosive animations and satisfying audio cues that accompany a board-clearing combo are nothing short of spectacular, providing a constant dopamine drip perfectly suited for the holiday season.

## How to Play
* The primary objective is to clear the entire screen of ornaments before the ceiling physically lowers and crushes your cannon.
* You control a cannon at the bottom of the screen holding a specifically colored Christmas bauble.
* Use your \`Mouse\` to aim the trajectory line.
* Click the \`Left Mouse Button\` to fire your ornament.
* When your fired bauble connects with a cluster of two or more ornaments of the EXACT SAME color, the entire connected group will pop and disappear.
* If you shoot and fail to make a match a certain number of times (indicated by grey dots at the bottom), the entire ceiling will shift downward by one row.

## Tips and Tricks
* **Master the Bank Shot:** You cannot always shoot straight. You MUST learn to bounce your ornaments off the left and right walls to ricochet them into tight, otherwise unreachable gaps near the top of the structure.
* **Sever the Root:** Do not just shoot at the lowest hanging baubles. Look for the "structural joints"—small clusters holding up massive, mixed-color chunks below them. If you destroy the joint, the entire massive chunk below it falls instantly, granting huge points.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* ornament color. Knowing what you have in reserve completely dictates where you should place your current shot.
* **Don't Build Walls:** If you have a red ornament and no red clusters are visible, do not just shoot it directly into the middle of the board, blocking other colors. Shoot it off to the extreme left or right edge to keep the center open.
* **Clear High Colors Completely:** If there are only two silver bells left on the entire board, prioritize eliminating them immediately. Once a color is entirely gone, the game will stop generating it in your cannon, drastically increasing your odds of getting the colors you actually need.`
  },
  {
    title: "Car Park Sort",
    seoContent: `![Car Park Sort](https://www.htmlgames.com/uploaded/game/thumb800/carparksort800450.webp)

Car Park Sort strips the highly saturated liquid-sorting puzzle genre down to a delightfully chaotic, automotive-themed core, replacing test tubes of colored water with bustling, grid-locked parking lots filled with brightly colored sedans. Set against a clean, visually vibrant isometric grid, players are tasked with managing a massive logistics nightmare. You must physically move cars between distinct parking rows, strategically shuffling them around until every single row contains exactly one specific color of vehicle. The atmosphere is deeply calculating and intensely satisfying; you are essentially managing a massive game of musical chairs with heavy machinery. The visual presentation is exceptionally polished, utilizing crisp, brightly colored 3D car models that drive smoothly between the parking lanes with satisfying mechanical audio cues. The brilliance of Car Park Sort lies entirely in its demanding spatial logic; moving a blue car to uncover a red car might inadvertently block the only lane where a green car can park. It is a pure test of sequence planning and bottleneck management.

## How to Play
* The primary objective is to sort the chaotic parking lot so that every individual parking row contains ONLY cars of the exact same color.
* Use your \`Mouse\` to click the front-most car in any parking row to select it.
* Click an empty parking space, or the back of a line in another row, to drive the car to that location.
* **The Golden Rules:** You can ONLY move a car into an entirely empty row, OR directly behind a car of the EXACT same color.
* You cannot park a red car directly behind a blue car.
* The level is successfully completed when all cars are perfectly sorted into color-coded rows.

## Tips and Tricks
* **Empty Rows are Gold:** An entirely empty parking row is your most powerful tool. It is the only place you can legally dump a blocking car of a random color to unearth the cars trapped behind it. Do everything in your power to clear a row quickly.
* **Work Backwards:** Look at the cars trapped at the very back of the deepest rows. If you see three blue cars buried deep, you know you need to establish a dedicated "blue lane" somewhere else to extract them.
* **Don't Bury the Singletons:** If you park a Yellow car in front of a Red car, you have essentially permanently trapped that Red car until you can find another place to move the Yellow car. Always try to build homogeneous stacks.
* **Use the "Undo" Button (If Available):** This game heavily punishes impulsive moves. If you make a move that immediately locks the lot, undo it and try the alternate path.
* **Consolidate Early:** If you have two red cars in lane A, and two red cars in lane B, combine them into lane C immediately. Consolidation frees up crucial maneuvering space.`
  },
  {
    title: "Viking Tiles",
    seoContent: `![Viking Tiles](https://www.htmlgames.com/uploaded/game/thumb800/vikingtiles800450.webp)

Viking Tiles plunges the ancient, highly structured mechanics of traditional Chinese tile-matching into a breathtaking, deeply atmospheric Nordic environment. Moving far beyond the sterile, flat green felt of standard solitaire games, this title constructs massive, complex architectural pyramids using beautifully illustrated tiles depicting runic symbols, battle axes, longships, and horned helmets. The atmosphere is incredibly robust and immersive, trading the tense ticking clocks of arcade games for the soothing, ambient sounds of a frigid, windswept fjord. You are tasked with analyzing towering, overlapping tile structures, meticulously searching for exposed pairs to dismantle the board like a digital tactician preparing for a raid. The visual presentation is exceptionally polished, utilizing earthy, icy color palettes and dynamic lighting effects that simulate winter sun striking weathered wood and steel, ensuring the puzzle remains perfectly readable even when the board is massively congested. Viking Tiles is a highly successful thematic reskin, proving that a timeless puzzle formula can be completely refreshed with a strong, cohesive artistic vision.

## How to Play
* Your objective is to completely clear the entire screen by matching identical pairs of Viking-themed tiles.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles heavily overlap, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden tiles buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, you lose.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Memorize the Runes:** The runic alphabet can be tricky to distinguish at a quick glance. Take a moment to mentally categorize them by shape (e.g., "the arrow one," "the X one") rather than trying to remember their actual names.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach shield tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a shield tile buried deep in the center tower.
* **Use the Reshuffle (If Available):** Treat the shuffle button like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably dead.`
  },
  {
    title: "Game of 15",
    seoContent: `![Game of 15](https://www.htmlgames.com/uploaded/game/thumb800/gameof15800450.webp)

Game of 15 delivers the absolute purest, most unadulterated distillation of the legendary physical sliding puzzle, completely stripping away modern arcade bloat to focus entirely on classic, mechanical spatial logic. Invented in the 19th century, this timeless challenge presents players with a strict 4x4 grid containing 15 numbered square tiles and exactly one empty space. Your objective is elegantly simple yet brutally difficult in execution: you must physically slide the tiles into the empty space, rearranging the chaotic, scrambled board until the numbers read in perfect sequential order from 1 to 15, left to right, top to bottom. The atmosphere is intensely intellectual and deeply focused; there is no narrative, no luck, and no way to cheat the system. It is a pure test of your ability to visualize complex, multi-step rotations and execute algorithmic sequences of movement. The visual presentation is highly functional, utilizing a clean, classic wood or plastic aesthetic that ensures perfect readability. Game of 15 is the ultimate brain-training routine for hardcore puzzle purists.

## How to Play
* The primary objective is to arrange the numbered tiles in perfect numerical order (1-4 on the top row, 5-8 on the second, 9-12 on the third, 13-15 on the bottom, with the empty space in the bottom right corner).
* The tiles can only move by sliding into the single empty space on the grid.
* Use your \`Mouse\` to click on a tile that is directly adjacent (up, down, left, or right) to the empty space to slide it over.
* Alternatively, many versions allow you to use the \`Arrow Keys\` to physically push the tiles around the board.
* You cannot lift tiles off the board; you must mathematically shuffle them through the grid.

## Tips and Tricks
* **Solve Row by Row:** Do not try to solve the entire board at once. Your first and only goal is to get the 1, 2, 3, and 4 into the top row. Once the top row is solved, DO NOT touch it again.
* **The "Train" Technique:** The hardest part of solving a row is getting the final two numbers in place without scrambling the first two. To place the 3 and 4, you often have to line them up vertically (the 3 above the 4) on the right side, and then rotate them into the horizontal slots like a train on a track.
* **Protect the Solved Rows:** Once you solve the top row, treat it as a solid brick wall. Reduce your playing area to a 3x4 grid to solve the second row. Then reduce it to a 2x4 grid.
* **The Final Two Rows:** The bottom two rows (9-15) cannot be solved horizontally. You must solve them vertically, focusing on getting the 9 and 13 locked into the left column first, then the 10 and 14, etc.
* **Algorithm Memorization:** The 15 puzzle relies heavily on repeating specific circular shuffling patterns (algorithms). Pay attention to how a 2x2 rotation of tiles moves a specific piece across the board without disrupting the surrounding pieces.`
  },
  {
    title: "Pantagruel Double Klondike",
    seoContent: `![Pantagruel Double Klondike](https://www.htmlgames.com/uploaded/game/thumb800/pantagrueldoubleklondike800450.webp)

Pantagruel Double Klondike takes the beloved, foundational mechanics of classic solitaire and violently escalates the complexity by doubling the deck, fundamentally altering the scale and duration of the entire experience. Instead of the standard, manageable seven columns, this monumental card game forces players to navigate a massive, sprawling tableau constructed from 104 individual cards. The atmosphere is deeply calculating and demands an extreme level of long-term strategic foresight; what appears to be a simple, obvious maneuver in the early game can easily trigger a catastrophic deadlock an hour later. The visual presentation is highly polished, utilizing crisp, classic playing card graphics set against a traditional green felt backdrop, ensuring perfect readability even when the massive board becomes heavily congested with cascading sequences. Pantagruel Double Klondike is not for the faint of heart; it is an uncompromising, hardcore test of sequence building, suit management, and cascade math, perfect for veteran players who find standard solitaire variants too brief or simplistic.

## How to Play
* The primary objective is to move all 104 cards into the eight foundation piles at the top right, building upward in suit from Ace to King.
* The massive main tableau consists of nine columns where cards must be built downward in alternating colors (e.g., a Red 8 can only be placed on a Black 9).
* Use your \`Mouse\` to click and drag cards between columns. You can move entire sequences of correctly stacked cards.
* Use the stock pile at the top left to draw new open cards when you run out of valid moves on the main board. Depending on the ruleset, it may draw one or three cards at a time.

## Tips and Tricks
* **Attack the Deep End:** Your absolute highest priority in the early game is to unearth the face-down cards buried at the very bottom of the longest columns on the right side of the tableau. Ignore the short columns on the left initially.
* **Empty Columns are Critical:** Because you are playing with two full decks, you will need to move massive sequences of 10 or 15 cards at once. Do everything in your power to clear a column completely, as it acts as a crucial staging ground for Kings.
* **Don't Rush to the Foundations:** Just because you *can* move a Black 5 to the foundation doesn't mean you *should*. Sometimes keeping it on the tableau is necessary to hold a Red 4 that you desperately need for a massive sequence.
* **Build Evenly:** Try to build your eight foundation piles at roughly the same pace. If you push the Spades all the way up to Jack while the Hearts are still on 2, you will severely limit your options on the alternating-color tableau.
* **Manage the Duplicates:** With two decks, you have two identical cards for every rank and suit. If you have a choice of moving a Red 8 onto a Black 9, and there are TWO Black 9s available, look closely to see which 9 is covering the most face-down cards and move the 8 there.`
  },
  {
    title: "Winter - Hidden Stars",
    seoContent: `![Winter - Hidden Stars](https://www.htmlgames.com/uploaded/game/thumb800/winterhiddenstars800450.webp)

Winter - Hidden Stars is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and seasonally focused core. Forget convoluted detective storylines or messy rooms; this title is a pure, unadulterated shot of visual immersion focused entirely on acute observation. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing snow-covered villages, frozen lakes, and towering pine forests. Your objective is elegantly simple: locate the subtle, five-pointed star shapes expertly blended into the winter environment. The atmosphere is intoxicatingly rich and incredibly cozy, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, falling snowflakes, and complex geometry. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy snowbank and glowing lamppost is rendered with breathtaking clarity. The sensation of discovery is incredibly well-executed, making every successfully located star feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single five-pointed star hidden within the main high-definition image of the winter scene.
* Use your \`Mouse\` to carefully scan the high-definition scene. The stars are often heavily camouflaged, matching the color and texture of the snow or trees they are hidden on.
* Click directly on a star when you spot it to collect it.
* The counter at the top of the screen displays exactly how many stars are left to find in the current level.
* Be precise! Randomly spam-clicking around the screen will often result in a time penalty or a temporary point deduction.

## Tips and Tricks
* **Look for Geometry, Not Just Color:** The developers are experts at camouflaging the stars. A star hidden on a snowbank will be pure white and textured like snow. Stop looking for bright, contrasting objects and start looking for the strict, geometric outline of a five-pointed star.
* **Divide the Screen:** Do not try to scan the entire massive image at once; it will overwhelm your eyes. Mentally divide the screen into four quadrants and meticulously search one corner before moving to the next.
* **Check the Architecture:** The sharp points of a star are often perfectly hidden within the overlapping branches of a pine tree, the jagged icicles hanging from a roof, or the geometric patterns of a window frame.
* **Adjust Your Brightness:** Because this game relies heavily on subtle shading and white-on-white contrast to hide the objects in the snow, ensure your monitor brightness is turned up.
* **Step Back:** If you are completely stuck on the final star, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the hidden geometric shape suddenly pop out.`
  },
  {
    title: "Frozen Freecell",
    seoContent: `![Frozen Freecell](https://www.htmlgames.com/uploaded/game/thumb800/frozenfreecell800450.webp)

Frozen Freecell is a brilliantly complex, highly demanding variant of the classic card-sorting genre that significantly raises the strategic ceiling compared to standard Klondike, and then ruthlessly tightens the noose by wrapping the entire experience in a beautiful, icy aesthetic. While standard Freecell allows you to see the entire board, this game actively punishes success with an escalating difficulty curve; as you advance to higher levels, the game often reduces the number of available free cells, drastically limiting your ability to park blocking cards. The atmosphere is deeply calculating and immensely stressful, requiring players to possess a masterful understanding of card sequencing, cascade math, and long-term tactical sacrifice. The visual presentation is highly polished, utilizing crisp, classic playing card graphics set against a beautiful winter backdrop, ensuring perfect readability even during complex maneuvers. The genius of Frozen Freecell lies entirely in its uncompromising ruleset; a strategy that works perfectly on level one will completely doom you later on. It is an uncompromising test of logic for veteran card players.

## How to Play
* The primary objective is to move all 52 cards into the four foundation piles at the top right, building upward in suit from Ace to King.
* The main tableau consists of eight columns where cards must be built downward in alternating colors (e.g., a Red 8 can only be placed on a Black 9).
* Use your \`Mouse\` to click and drag cards between columns.
* The "Free Cells" at the top left are temporary parking spots. You can move any single exposed card into an empty free cell to get it out of the way.
* **The Catch:** Depending on the level, you may have fewer than the standard four free cells available, drastically reducing your ability to maneuver large stacks.

## Tips and Tricks
* **Protect the Free Cells:** Your free cells are your most valuable resource. Never park a card in a free cell unless you have a concrete, multi-step plan to get it back out onto the tableau or the foundation shortly after.
* **Empty Columns are Gold:** An empty column in the tableau acts like a super-powered free cell. It allows you to move massive sequences of cards at once. Prioritize clearing columns above all else.
* **The Math of Movement:** The maximum number of cards you can drag in a single sequence is determined mathematically by the number of empty free cells and empty tableau columns you have. If your free cells are full, you can only move one card at a time.
* **Dig for Aces:** The game cannot progress until the Aces are in the foundation. Scan the board immediately upon dealing and formulate a plan specifically to unearth the four Aces.
* **Don't Build Evenly:** Unlike other solitaires, it is sometimes better to aggressively build one specific suit to the foundation in Freecell, as it clears cards off the board entirely and opens up more maneuvering space.`
  },
  {
    title: "Pyramid Mahjong",
    seoContent: `![Pyramid Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/pyramidmahjong800450.webp)

Pyramid Mahjong plunges the ancient, highly structured mechanics of traditional Chinese tile-matching into a breathtaking, deeply atmospheric geometric environment that deliberately mimics the iconic structures of ancient Egypt. Moving far beyond the randomized, sprawling layouts of standard solitaire games, this title constructs a massive, perfectly symmetrical, singular 3D pyramid. The atmosphere is incredibly focused and immersive, trading the tense ticking clocks of arcade games for the soothing, calculated satisfaction of dismantling a monolithic structure from the peak downward. You are tasked with analyzing the towering, overlapping layers, meticulously searching for exposed pairs to slowly shave the pyramid flat. The visual presentation is exceptionally polished, utilizing earthy, rich color palettes and crisp traditional Mahjong iconography, ensuring the puzzle remains perfectly readable even when the base of the pyramid is massively congested. Pyramid Mahjong is a highly successful structural variation, proving that a timeless puzzle formula can be completely refreshed with a strong, cohesive, and perfectly symmetrical architectural vision.

## How to Play
* Your objective is to completely clear the entire screen by matching identical pairs of traditional Mahjong tiles.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles form a perfect pyramid, matching tiles on the top layers is absolutely critical to reveal and unlock the exponentially larger layers buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, you lose.

## Tips and Tricks
* **Dismantle from the Peak:** In a pyramid layout, the single tile at the very top is blocking four tiles below it. Always prioritize removing the highest possible tiles on the board before matching tiles on the lower, wider base.
* **The "Peel" Strategy:** Try to evenly peel the outer layers off the entire structure rather than drilling a deep hole down one specific side. An even, flat board gives you vastly more horizontal matching options.
* **Memorize the Seasons:** The seasonal tiles (Spring, Summer, Autumn, Winter) and the flower tiles can be matched with *any* other tile in their specific set. Do not waste time looking for identical copies.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach bamboo tiles on the very bottom layer of the pyramid, ignore them! Save them. You might desperately need them later to match a bamboo tile buried deep in the center of the structure.
* **Use the Reshuffle (If Available):** Treat the shuffle button like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably dead.`
  },
  {
    title: "Ancient Wonders Jigsaw",
    seoContent: `![Ancient Wonders Jigsaw](https://www.htmlgames.com/uploaded/game/thumb800/ancientwondersjigsaw800450.webp)

Ancient Wonders Jigsaw delivers the absolute purest, most unadulterated distillation of the legendary physical tabletop pastime, seamlessly transitioning the tactile joy of sorting interlocking cardboard pieces into a highly polished digital environment. Moving entirely away from modern, chaotic arcade mechanics, this title embraces a deeply relaxing, methodical gameplay loop focused entirely on spatial recognition and aesthetic reconstruction. Set against a clean, visually uncluttered workspace, players are presented with stunning, high-definition photographs of humanity's greatest historical monuments—the Colosseum, the Pyramids, the Great Wall—shattered into dozens or hundreds of pieces. The atmosphere is immensely satisfying; there are no ticking clocks or score multipliers. It is just you and a beautiful image slowly coming together piece by piece. The visual presentation is highly functional, utilizing realistic edge textures and a satisfying "snap" mechanic that perfectly replicates the feeling of finding the right fit. Ancient Wonders Jigsaw is the ultimate, timeless relaxation tool for puzzle purists.

## How to Play
* The primary objective is to reassemble the scattered pieces to form the complete, high-definition photograph of the ancient wonder.
* The puzzle pieces are scattered around the main solving area or held in a side tray.
* Use your \`Mouse\` to click, hold, and drag a puzzle piece.
* Release the \`Left Mouse Button\` to drop the piece. If you drop it near its correct corresponding piece (or its exact physical location on the board), it will automatically snap into place and lock.
* You can often change the difficulty of the puzzle in the main menu, altering the total number of pieces from a quick 25-piece puzzle to a massive, sprawling 100-piece challenge.

## Tips and Tricks
* **Sort the Edges First:** This is the golden rule of all jigsaw puzzles, physical or digital. Immediately sort through the pile and separate every single piece that has a flat, straight edge. Assemble the entire rectangular frame of the puzzle before touching the center pieces.
* **Group by Color and Texture:** Don't just pick up a random piece and drag it around the board hoping it snaps. Look at a piece of bright blue sky, and find all the other pieces of bright blue sky. Build the puzzle in isolated "chunks" based on color, then link the chunks together.
* **Look at the Reference Image:** If the game provides a button to view the completed photograph, use it constantly! Use the reference image to identify exactly where a specific piece of stone or a tiny window is located on the building.
* **Check the Knobs and Holes:** In areas of uniform color (like a massive blue sky), you must rely entirely on the geometric shape of the interlocking tabs (knobs) and blanks (holes) on the pieces to find the correct fit.
* **Clear Your Workspace:** Keep your unsorted pieces pushed to the extreme edges of the screen so the center of the board remains clear for active assembly.`
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
