const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Sushi Master - Match3",
    seoContent: `![Sushi Master - Match3](https://www.htmlgames.com/uploaded/game/thumb800/sushimaster800450.webp)

Sushi Master - Match3 injects a massive dose of culinary chaos into the highly competitive tile-swapping genre, delivering a visual feast of delicious Japanese cuisine and intensely satisfying combination mechanics. Stepping entirely away from generic, brightly colored gem-swapping, this title embraces a mouth-watering thematic approach, requiring players to physically align glowing salmon nigiri, complex maki rolls, fresh shrimp, and dollops of wasabi. The atmosphere is undeniably engaging, perfectly capturing the frantic, high-pressure environment of a bustling Tokyo sushi kitchen. Every level is a meticulously designed dinner rush, presenting specific objective quotas (like fulfilling an order of 30 tuna rolls or breaking frozen ice blocks off the ingredients) that must be met within a strict move limit. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition sprites that crackle with culinary energy when linked together. It is a pure, unadulterated test of spatial planning, cascade optimization, and appetite management.

## How to Play
* The core mechanic revolves around swapping adjacent sushi pieces to create horizontal or vertical lines of three or more identical rolls.
* Use your \`Mouse\` to click on a piece of sushi, then click an adjacent one to swap their positions, or simply click and drag.
* Your objective is to fulfill specific customer orders displayed at the top of the screen before you run out of allowed moves.
* Matching exactly four sushi pieces creates a glowing, line-clearing chef's knife that slices across the board.
* Matching five sushi pieces in an L or T shape creates a devastating area-of-effect dynamite roll.
* Matching five sushi pieces in a straight row creates a mystical golden soy sauce bottle that obliterates all sushi of a specific type from the board.

## Tips and Tricks
* **Prioritize the Order:** It is incredibly easy to get distracted by a massive chain of shrimp nigiri, but if your customer only ordered cucumber rolls, you are wasting a precious move. Focus laser-like on the objective.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the conveyor belt grid. This triggers the maximum number of cascading ingredients dropping from the ceiling, often resulting in free, accidental combos as the board settles.
* **Combine the Power-Ups:** The most devastating move in the game is swapping two power-ups with each other. Swapping a line-clear knife with a dynamite bomb creates a massive, cross-shaped explosion that clears half the kitchen instantly.
* **Save the Soy Sauce:** Do not use the five-in-a-row bottle immediately. Save it until you desperately need to clear a specific ingredient to meet an order, or wait to combine it with another power-up.
* **Analyze the Chokepoints:** Pay close attention to the shape of the board. Some levels have narrow columns or frozen ingredients where sushi can get stuck. Focus on breaking those barriers first.`
  },
  {
    title: "Goblin Run",
    seoContent: `![Goblin Run](https://www.htmlgames.com/uploaded/game/thumb800/goblinrun800450.webp)

Goblin Run strips the endless runner genre down to its absolute, most viscerally satisfying core, delivering a pure, unadulterated test of split-second reflex timing and rhythmic platforming. Moving entirely away from complex combat mechanics or bloated inventory systems, this title embraces a chaotic, high-speed sprint across a dangerous, side-scrolling fantasy landscape. You are placed in control of a surprisingly agile, gold-hungry goblin tasked with running as far as possible through a haunted forest filled with bottomless pits, spiked traps, and crumbling bridges. The atmosphere is deeply kinetic; gravity is a constant threat, and the screen is perpetually pushing you forward, forcing you to constantly react to incoming hazards with pixel-perfect precision. The visual presentation is highly polished, utilizing a vibrant, cartoonish aesthetic that ensures the dangerous traps are perfectly readable against the background, even when the running speed reaches blistering, panic-inducing levels. Goblin Run is a pure shot of arcade adrenaline that perfectly captures the "just one more try" mentality.

## How to Play
* The primary objective is to survive as long as possible and run as far as you can, racking up a massive high score.
* Your goblin runs forward automatically; you have absolutely no control over his horizontal speed.
* Click the \`Left Mouse Button\` or press the \`Spacebar\` to make the goblin jump into the air.
* **The Double Jump:** While in mid-air, click or press the button a second time to execute a crucial double-jump, granting you extra height and distance to clear massive chasms.
* You must actively jump over spiked pits, rolling logs, and enemy creatures. Touching any hazard results in instant death.
* Collect the glowing gold coins scattered throughout the level to increase your score multiplier.

## Tips and Tricks
* **Look at the Right Edge:** Your eyes should never be focused on the goblin himself. Your eyes should be permanently glued to the absolute far right edge of the screen. You must anticipate the incoming traps before they reach the middle of the screen to properly time your jump.
* **Save the Double Jump:** Do not impulsively double-jump over a tiny obstacle. If you use your double-jump too early, you have no way to correct your trajectory if a massive spike pit suddenly appears below your landing zone. Always keep it in reserve for emergencies.
* **Follow the Coins:** Game designers often use arcs of collectible coins to implicitly guide you through the absolute safest, mathematically perfect jump trajectory. If you don't know when to jump, follow the gold.
* **Rhythm is Key:** The obstacles are often placed in rhythmic patterns (e.g., jump, jump, double-jump, pause). Try to feel the underlying beat of the level rather than just reacting randomly.
* **Short Hops:** Sometimes a massive, floating jump will cause you to hit a hazard hanging from the ceiling. Learn how long to hold the button to execute a controlled, short hop to quickly clear low ground traps.`
  },
  {
    title: "Hidden Spots - Trains",
    seoContent: `![Hidden Spots - Trains](https://www.htmlgames.com/uploaded/game/thumb800/hiddenspots-train800450.webp)

Hidden Spots - Trains is a masterclass in atmospheric, visually dense puzzle design, stripping the "spot the difference" genre down to its absolute, most captivating and locomotive-focused core. Forget convoluted detective storylines; this title is a pure, unadulterated shot of visual immersion focused entirely on acute observation of magnificent industrial machinery. You are presented with stunningly detailed, high-definition digital photographs showcasing massive steam engines, sleek modern bullet trains, and bustling, smoke-filled railyards. Your task is to meticulously scan the image to locate a specific set of subtle discrepancies or cleverly camouflaged objects deliberately injected by the developers. The atmosphere is intoxicatingly rich, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, complex ironwork, and overlapping train cars. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy wheel spoke, rivet, and puff of steam is rendered with breathtaking clarity. The sensation of discovery makes every successfully located spot feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single hidden spot or discrepancy listed on the side panel within the main high-definition photograph of the train scene.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on the spot when you locate it.
* Successfully locating a spot will usually draw a circle around it and update your counter.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden spots before the strict time limit expires to advance to the next locomotive.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the front cowcatcher of the train) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A wrench might be tinted black to blend into the coal car.
* **Check the Machinery:** The developers love hiding dark objects inside the complex, overlapping shadows of the train's wheels, gears, and suspension systems. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a pocket watch, you will accidentally spot the hidden lantern.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Pyramid Solitaire - Great Pyramid",
    seoContent: `![Pyramid Solitaire - Great Pyramid](https://www.htmlgames.com/uploaded/game/thumb800/pyramidsolitaire-greatpyramid800450.webp)

Pyramid Solitaire - Great Pyramid completely re-invents the complex, alternating-color mechanics of standard card sorting by stripping it down to a brutally elegant, mathematically pure game of addition, all wrapped in a visually stunning, historically immersive Egyptian aesthetic. Moving away from the green felt of a casino, this title constructs a massive, overlapping triangular structure of cards designed to perfectly mimic the iconic architecture of Giza. Your objective is intensely focused: completely dismantle the Great Pyramid by pairing exposed cards that mathematically add up to exactly thirteen. The atmosphere is deeply calculating but incredibly thematic, trading intense arcade pressure for a soothing, ambient puzzle environment complete with desert winds and ancient iconography. The visual presentation is exceptionally polished, utilizing crisp, custom-themed card art featuring pharaohs and scarabs that ensures perfect readability even when the massive stone structure is heavily congested. It is a masterclass in taking a simple arithmetic concept and turning it into a highly addictive, monumental puzzle experience.

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
  },
  {
    title: "Triple Cars",
    seoContent: `![Triple Cars](https://www.htmlgames.com/uploaded/game/thumb800/triplecars800450.webp)

Triple Cars fundamentally rewrites the rules of the massively popular Mahjong tile-matching genre by abandoning the rigid, stacked 2D layouts in favor of a chaotic, physics-driven pile of adorable, brightly colored vehicles. Instead of meticulously peeling layers off a static pyramid, this game places you in control of a sprawling parking lot disaster. You are tasked with clicking individual cars from the massive, jumbled pile, transferring them to a limited holding tray at the bottom of the screen. The objective is to gather exactly three identical cars in the tray to merge and remove them. The atmosphere is deeply calculating and immensely satisfying; you are essentially managing a constant influx of mismatched inventory, desperately trying to unearth the third green sedan buried at the bottom of the pile before your tray overflows. The visual presentation is exceptionally clean, utilizing crisp, contrasting colors for different vehicle types and snappy animations. Triple Cars is a brilliant puzzle experience that trades rapid reflexes for pure, unadulterated spatial logic and long-term inventory management.

## How to Play
* The primary objective is to completely clear the entire messy pile of cars from the screen.
* Use your \`Left Mouse Button\` to click any fully exposed (unblocked) car in the pile to move it down into your holding tray.
* Your holding tray can only hold a very limited number of cars (usually 7) at any given time.
* **The Rules of Removal:** When exactly three IDENTICAL cars (same color, same model) are placed anywhere in your holding tray, they will instantly merge and be removed, freeing up crucial space.
* The game is immediately over if your tray becomes completely full without forming a valid match of three.

## Tips and Tricks
* **Never Blindly Click:** The absolute most common mistake is clicking every free car you see just because it's on top. Before clicking a car, you must mentally confirm that you know where the other two identical cars are located.
* **Manage Your Tray Space:** Treat your holding tray like pure gold. Never have more than four "unmatched" singleton cars sitting in your tray at once. Always leave two or three empty slots to dig through the pile for the matches you actually need.
* **Dig for the Third Piece:** If you have two yellow taxis in your tray, your absolute highest priority is finding the third yellow taxi to clear them. It is acceptable to temporarily fill your tray with blocking cars, *provided* that reaching the buried taxi instantly triggers a clear.
* **Peel the Edges:** Cars on the absolute outer edges of the pile are generally safer to pull, as they rarely block critical pathways in the dense center.
* **Watch the Shadows:** Pay close attention to the visual layering of the pile to understand exactly which car is resting on top of another. Clicking a car thinking it is free, only to realize its bumper is pinned, can ruin a run.`
  },
  {
    title: "Cube Block",
    seoContent: `![Cube Block](https://www.htmlgames.com/uploaded/game/thumb800/cubeblock800450.webp)

Cube Block delivers a brilliant, highly kinetic evolution of the classic block-falling puzzle genre (like Tetris), stripping away the frantic anxiety of descending pieces and replacing it with a physically grounded, trajectory-based shooting mechanic. Set against a beautiful, high-definition digital rendering of a neon grid, players are tasked with managing a massive wall of geometric blocks that slowly descends from the ceiling. Instead of rotating falling pieces, you control a cannon at the bottom of the screen that fires perfectly shaped blocks straight up into the air. Your objective is to shoot your blocks directly into the empty gaps in the descending wall, strategically filling horizontal rows to clear them before the wall crushes you. The atmosphere is deeply calculating and immensely satisfying; you are essentially executing precision architectural repairs while under fire. The visual presentation is highly polished, utilizing crisp, neon-infused laser lines that pop against the dark background. Cube Block is a pure test of rapid spatial optimization and reflex aiming.

## How to Play
* The primary objective is to survive as long as possible by creating completely solid horizontal lines of blocks to destroy the descending wall.
* You control a cannon at the bottom of the screen holding a specifically shaped block (e.g., a 1x1 square, a 2x1 rectangle).
* Use your \`Mouse\` to move the cannon horizontally along the bottom track, aiming directly at the empty gaps in the wall above.
* Click the \`Left Mouse Button\` to fire the block straight up. It will travel until it hits the ceiling or another block, locking instantly into place.
* When a completely solid horizontal line of 10 blocks is formed, that entire line is instantly destroyed, pushing the wall back up.
* If any part of the wall touches the bottom of the screen, the game is over.

## Tips and Tricks
* **Prioritize the Deepest Gaps:** Do not just blindly fire blocks at the lowest hanging sections of the wall. Identify the deepest, most dangerous "holes" in the structure and specifically wait for the right shaped block to fill them.
* **Don't Build Stalactites:** If you shoot a massive 3x1 horizontal block directly into the middle of the board without clearing a line, you have just created a massive hazard hanging down that makes it incredibly difficult to shoot blocks past it into the upper rows. Keep the bottom edge of the wall as flat as possible.
* **Wait for the Right Piece:** If the wall is high up and you don't have the piece you need, do not panic fire. You can often safely shoot useless pieces to the extreme left or right edges where they won't block the center, effectively cycling your inventory until you get the piece you need.
* **Calculate the Cascade:** Try to set up structures where firing a single block instantly clears two or three lines simultaneously for massive combo multipliers and breathing room.
* **Master the Ricochet (If Available):** Some variations allow you to bounce blocks off the side walls. Use this to snake pieces into tight "L" shaped corridors that are impossible to hit from directly below.`
  },
  {
    title: "1010 Halloween",
    seoContent: `![1010 Halloween](https://www.htmlgames.com/uploaded/game/thumb800/1010halloween800450.webp)

1010 Halloween takes the phenomenally addictive, no-gravity block placement mechanics of the classic 1010 genre and wraps it in a delightfully spooky, highly polished autumnal aesthetic. Moving entirely away from the frantic anxiety of descending Tetris pieces, this title offers a pure, unpressured test of spatial geometry and long-term cascade planning. Set against a dark, atmospheric backdrop filled with cobwebs and glowing jack-o'-lanterns, players are tasked with dragging irregular, rigid shapes constructed of glowing gems (skulls, pumpkins, bats) onto a massive 10x10 grid. The atmosphere is deeply relaxing; there is no timer, no gravity, and no rapidly escalating difficulty curve. It is just you, the grid, and a constant pursuit of perfect geometric alignment. The visual presentation is incredibly satisfying, featuring crisp, high-definition Halloween sprites and excellent particle effects when lines are shattered. 1010 Halloween is a masterclass in deceptive simplicity, providing an endlessly replayable puzzle loop that perfectly balances soothing mechanics with brutal, slow-motion checkmates.

## How to Play
* The primary objective is to survive as long as possible by dragging gem-block shapes onto the 10x10 grid to form completely solid horizontal or vertical lines.
* You are presented with three randomly generated shapes at the bottom of the screen.
* Use your \`Mouse\` to click, hold, and drag a shape onto any valid, empty space on the grid.
* Unlike Tetris, you CANNOT rotate the shapes. You must place them exactly as they appear.
* When a completely solid horizontal or vertical line of 10 blocks is formed, that entire line is instantly destroyed, freeing up crucial board space.
* You must place all three shapes on the board before three new ones are generated.
* The game is instantly over if you cannot physically fit any of your remaining shapes onto the grid.

## Tips and Tricks
* **Prioritize the Perimeter:** Do not start building a massive clump of blocks in the dead center of the grid. Try to build along the extreme outer edges (the frame) of the 10x10 board to leave the massive center area open for large, unwieldy shapes.
* **Never Trap Empty Spaces:** The absolute most common cause of death is accidentally placing a block that covers the entrance to an empty 1x1 hole. If you trap a 1x1 hole, you can NEVER fill that line, permanently losing 10% of your board space.
* **Clear Multiple Lines:** Try to set up structures where placing a single massive block (like a 3x3 square or a long line) instantly clears two, three, or even four lines simultaneously for massive combo multipliers.
* **Keep Your Options Open:** Before placing your first block of the set of three, analyze all of them. Always place the largest, most difficult shape first, because if you place the small ones first, you might accidentally block the only spot where the big one could fit.
* **Beware the 3x3 Square:** This is the most dangerous piece in the game. Always ensure you have a completely empty 3x3 patch on your board at all times, just in case the game decides to spawn one.`
  },
  {
    title: "Delicious Duos",
    seoContent: `![Delicious Duos](https://www.htmlgames.com/uploaded/game/thumb800/deliciousduos800450.webp)

Delicious Duos (a highly polished variant of the classic Onet or Kyodai genre) injects a massive dose of highly structural, geometric pathfinding into the tile-matching formula, delivering a visual puzzle that demands intense calculation wrapped in a mouth-watering culinary aesthetic. Stepping entirely away from the 3D, overlapping pyramids of standard Mahjong Solitaire, this game places every single tile flat on a massive, single-layer 2D grid featuring cute hamburgers, sushi, donuts, and pizzas. Your objective is not just to find matching pairs, but to prove that a clear, unobstructed path can physically be drawn between them using a very specific set of routing rules. The atmosphere is deeply engaging, requiring players to constantly weigh the immediate satisfaction of a simple edge match against the necessity of unblocking the dense center of the board. The visual style is exceptionally clean, utilizing crisp, high-definition food iconography that ensures perfect readability. It is a pure test of spatial planning, line-of-sight optimization, and the ability to visualize invisible lines across a chaotic grid.

## How to Play
* Your primary objective is to clear the entire flat grid by connecting identical pairs of food tiles before the strict timer runs out.
* Use your \`Mouse\` to click on a tile, then click on a matching tile to attempt a connection.
* **The Golden Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two tiles using a maximum of three straight lines (which means no more than two 90-degree corners).
* You can connect tiles that are sitting directly next to each other, or you can route the path entirely outside the main grid boundary (the empty space surrounding the puzzle).
* If you successfully clear all tiles, you win. If no more valid moves exist on the board, the board will usually automatically reshuffle.

## Tips and Tricks
* **Clear the Perimeter First:** Tiles sitting on the absolute outer edge of the board are by far the easiest to connect, because their path can route freely through the empty space outside the grid using the two-turn rule. Clear the borders instantly.
* **Look for the "U" Shape:** The two-turn rule allows for a perfect "U" shape connection. If two identical tiles are on the exact same row, but separated by other tiles, check if there is empty space directly above or below both of them to draw the U.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the grid from the outside toward the dense center.
* **Don't Tunnel Vision:** If you can't find a path for the two specific Donut tiles you are looking at, stop looking at them. Scan the entire board for an obvious, free match to keep the timer from running down.
* **Use the Hint Button Sparingly:** If you are truly stuck, use the hint button, but be aware that relying on it prevents you from training your brain to see the complex two-turn pathways.`
  },
  {
    title: "Magic Lamp Mahjong",
    seoContent: `![Magic Lamp Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/magiclampmahjong800450.webp)

Magic Lamp Mahjong plunges the ancient, highly structured mechanics of traditional Chinese tile-matching into a breathtaking, deeply atmospheric Arabian Nights environment. Moving far beyond the sterile, flat green felt of standard solitaire games, this title constructs 50 massive, complex architectural pyramids using beautifully illustrated tiles depicting golden lamps, scimitars, magic carpets, and ornate geometric patterns. The atmosphere is incredibly relaxing and immersive, trading the tense ticking clocks of arcade games for the soothing, ambient sounds of a desert bazaar at twilight. You are tasked with analyzing towering, overlapping tile structures, meticulously searching for exposed pairs to dismantle the board like a digital treasure hunter. The visual presentation is exceptionally polished, utilizing rich purples, golds, and deep blues with dynamic lighting effects that simulate candlelight, ensuring the puzzle remains perfectly readable even when the board is massively congested. Magic Lamp Mahjong is a highly successful thematic reskin, proving that a timeless puzzle formula can be completely refreshed with a massive volume of content and a strong, cohesive artistic vision.

## How to Play
* Your objective is to completely clear the entire screen by matching identical pairs of Arabian-themed tiles across 50 distinct layouts.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles heavily overlap in massive 3D structures, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden tiles buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, you lose.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Memorize the Categories:** Like traditional Mahjong, this version features groups of tiles (like different types of carpets or jewels) that can be matched with each other, even if they aren't identical. Learn these groups instantly.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach scimitar tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a scimitar tile buried deep in the center tower.
* **Use the Reshuffle (If Available):** Treat the shuffle button like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably dead.`
  },
  {
    title: "Reach 7",
    seoContent: `![Reach 7](https://www.htmlgames.com/uploaded/game/thumb800/reach7800450.webp)

Reach 7 fundamentally rewrites the rules of the massively popular sliding number genre (like 2048 or Threes) by abandoning the frantic, four-way swiping mechanic in favor of a vastly more complex, surgical placement system on a hexagonal grid. Instead of sliding the entire board, this game grants players complete, unadulterated control over where new numbers are placed. You are tasked with dragging specific numbered tiles onto a tight honeycomb board. When three or more identical numbered tiles touch, they instantly merge into a single tile of a higher value (e.g., three "2"s merge into a "3"). Your ultimate objective is elegantly simple yet brutally difficult: merge numbers high enough to create a "7". The atmosphere is deeply calculating and immensely satisfying; you are essentially building a numerical pipeline, managing a constant influx of low-value tiles to construct massive, concentrated sums. The visual presentation is exceptionally clean, utilizing crisp, contrasting colors for different numerical tiers. Reach 7 is a brilliant puzzle experience that trades rapid reflexes for pure spatial logic and long-term cascade planning.

## How to Play
* The primary objective is to survive as long as possible by merging identical tiles until you successfully create a tile with the number "7".
* You are presented with numbered tiles at the bottom of the screen.
* Use your \`Mouse\` to click, drag, and drop a tile onto any empty space on the main honeycomb grid.
* When three or more identical numbered tiles touch each other on the grid, they will instantly merge into a single tile with a value exactly ONE higher (e.g., three "4"s merge into one "5").
* The new, higher-value tile will spawn exactly at the location of the *last* tile you placed to trigger the merge.
* The game is instantly over if the grid completely fills up and you cannot place any more tiles.

## Tips and Tricks
* **Control the Drop Zone:** Because the newly merged tile appears exactly where you dropped the final triggering piece, you have total control over where massive numbers accumulate. Always try to pull your high numbers toward the outer edges of the honeycomb where they won't block the center.
* **The Domino Effect:** Do not just focus on merging three tiles. Try to set up structures where merging three 2s creates a 3, which then instantly touches two other 3s already on the board, creating a massive, automated chain reaction up to a 4.
* **Keep the Center Clear:** The hexagonal grid fills up incredibly fast. If you place random, isolated numbers directly in the dead center of the board, you will destroy your ability to route matching numbers to each other later. Build from the outside in.
* **Group by Value:** Try to keep your low numbers on one side of the board, and your high numbers (4s, 5s, 6s) safely quarantined on the other side so they don't get buried.
* **Don't Be Afraid of the Bomb:** Often, creating a "7" will cause it to explode, clearing a massive area of the board and resetting the difficulty loop. Push aggressively for the 7 to save yourself.`
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
