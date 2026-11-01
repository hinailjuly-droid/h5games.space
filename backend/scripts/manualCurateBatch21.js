const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Barcelona Hidden Objects",
    seoContent: `![Barcelona Hidden Objects](https://www.htmlgames.com/uploaded/game/thumb800/barcelonahiddenobjects800450.webp)

Barcelona Hidden Objects is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and culturally immersive core. Forget convoluted detective storylines or messy rooms; this title is a pure, unadulterated shot of visual tourism focused entirely on acute observation. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing the iconic, sun-drenched architecture of Barcelona, from the towering spires of the Sagrada Familia to the vibrant, mosaicked benches of Park Güell. Your objective is elegantly simple: locate the subtle, thematic items expertly blended into the Spanish environment. The atmosphere is intoxicatingly rich and deeply relaxing, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, Mediterranean colors, and complex Gaudi-inspired geometry. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy cobblestone and wrought-iron balcony is rendered with breathtaking clarity. The sensation of discovery makes every successfully located item feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of the Barcelona scene.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden objects before the strict time limit expires to advance to the next iconic location.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the top of the cathedral) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A Spanish guitar might be tinted stone-grey to blend into a statue.
* **Check the Shadows:** The developers love hiding dark objects inside the shadows of palm trees, underneath cafe tables, or inside unlit alleyways. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a pair of sunglasses, you will accidentally spot the hidden castanets.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Puzzle Drop - Space Adventure",
    seoContent: `![Puzzle Drop - Space Adventure](https://www.htmlgames.com/uploaded/game/thumb800/puzzledropspaceadventure800450.webp)

Puzzle Drop - Space Adventure completely revolutionizes the traditional jigsaw puzzle format, abandoning the slow, methodical edge-sorting of physical cardboard in favor of a highly kinetic, gravity-based arcade challenge. Set against a beautiful, high-definition backdrop of swirling nebulas, alien planets, and deep-space phenomena, the game presents you with a massive, semi-transparent silhouette of the completed image. Above this silhouette, puzzle pieces hang suspended in the air. Your objective is not to slowly piece them together on a table, but to physically grab the falling pieces and drop them directly into their exact coordinate locations on the template before a strict timer expires. The atmosphere is incredibly fast-paced and demands split-second visual processing; you aren't just looking for matching edges, you are looking for the exact macro-position of a crater or a rocket thruster relative to the entire canvas. The visual presentation is highly polished, utilizing crisp, sci-fi imagery that makes aligning the subtle textures of asteroid fields a genuine test of visual acuity. 

## How to Play
* The primary objective is to complete the high-definition space image by dropping all the pieces into their correct locations.
* You are presented with a faint outline (template) of the completed image on the main board.
* The puzzle pieces will appear at the top or sides of the screen.
* Use your \`Mouse\` to click, hold, and drag a puzzle piece over the template.
* Release the \`Left Mouse Button\` to drop the piece. If you drop it in its exact correct location, it will snap into place and lock. If you are wrong, it will usually bounce back or incur a time penalty.
* You must assemble the entire image before the timer runs out.

## Tips and Tricks
* **Look at the Macro Image, Not the Edges:** Because you are dropping pieces onto a template, you do not need to connect pieces to each other initially. Look at the specific detail on the piece (e.g., a bright yellow star) and look for that exact same bright yellow star on the faint background template.
* **Start with the Obvious Details:** If the image features a massive red planet in the center, immediately grab any piece containing red pixels and drop them into the center. Leave the massive, featureless sections of black space for last.
* **Don't Wait for Gravity:** If the pieces slowly drift down from the top of the screen, do not wait for them to reach the middle. Actively reach up with your mouse and snatch them immediately to save precious seconds.
* **Group by Color:** If you have three pieces that are all purely blue nebula gas, drag them all over to the blue section of the template and rapidly test them one by one.
* **Memorize the Template (If Possible):** Some levels briefly flash the completed, fully colored image before fading it into the template. Do not blink during this phase. Memorize exactly where the major objects are located.`
  },
  {
    title: "Pyramid Solitaire - Ancient China",
    seoContent: `![Pyramid Solitaire - Ancient China](https://www.htmlgames.com/uploaded/game/thumb800/pyramidsolitaire-ancientchina800450.webp)

Pyramid Solitaire - Ancient China completely re-invents the complex, alternating-color mechanics of standard card sorting by stripping it down to a brutally elegant, mathematically pure game of addition, all wrapped in a visually stunning, historically immersive Eastern aesthetic. Moving away from the green felt of a casino, this title constructs a massive, overlapping triangular structure of cards designed to perfectly mimic the iconic architecture of a tiered Pagoda. Your objective is intensely focused: completely dismantle the Pagoda by pairing exposed cards that mathematically add up to exactly thirteen. The atmosphere is deeply calculating but incredibly thematic, trading intense arcade pressure for a soothing, ambient puzzle environment complete with traditional stringed instruments and cherry blossoms. The visual presentation is exceptionally polished, utilizing crisp, custom-themed card art featuring emperors, dragons, and Ming vases that ensures perfect readability even when the massive structure is heavily congested. It is a masterclass in taking a simple arithmetic concept and turning it into a highly addictive, culturally rich puzzle experience.

## How to Play
* Your primary objective is to clear all the cards from the massive Pagoda structure.
* Use your \`Left Mouse Button\` to click on any two fully exposed (unblocked) cards whose numerical values add up to exactly 13.
* **Card Values:** Number cards are worth their face value (e.g., a 7 and a 6 = 13). Jacks are 11 (requires a 2). Queens are 12 (requires an Ace). Kings are exactly 13 and can be clicked individually to instantly remove them.
* A card is strictly considered "exposed" only if there is absolutely no other card resting on top of it.
* If you have no valid pairs of 13 on the Pagoda, click the face-down draw pile at the bottom to reveal a new card to use.

## Tips and Tricks
* **Prioritize the Pagoda Over the Draw Pile:** If you have a 5 exposed on the board, and a 5 in your draw pile, and you need to pair an 8... ALWAYS use the 5 on the board. You must prioritize dismantling the structure over emptying the draw pile.
* **Dig Evenly:** Do not drill a deep hole down one specific side of the Pagoda. Try to peel cards away evenly across the entire structure. An even, flat structure offers vastly more exposed cards and potential pairings.
* **Save the Kings:** Because Kings equal 13 by themselves, they can be removed instantly. However, if they are not blocking anything important, leave them on the board. They don't hurt you, and occasionally you might accidentally click a King when you meant to click something else.
* **Track Your Cards:** If you desperately need a 4 to clear a 9, take a quick glance at the discard pile. If all four 4s have already been played, you know for a mathematical fact that the Pagoda is dead and you must restart.
* **The "Undo" Button (If Available):** Use it strategically! If you pair a 10 from the draw pile with a 3 on the board, but realize another 3 was blocking a massive stack of hidden cards, undo the move and pair the 10 with the *blocking* 3.`
  },
  {
    title: "Mahjong Move & Match",
    seoContent: `![Mahjong Move & Match](https://www.htmlgames.com/uploaded/game/thumb800/mahjongmove&match800450.webp)

Mahjong Move & Match fundamentally rewrites the rules of traditional Chinese tile-matching by completely destroying the static, 3D overlapping pyramid structure in favor of a highly kinetic, 2D sliding-block mechanic. Set against a clean, visually uncluttered grid, every single traditional Mahjong tile is laid out completely flat on a single layer. However, you cannot just click any two exposed tiles to match them. You must physically click and drag the tiles, sliding them horizontally or vertically across empty gaps on the board to force them to physically touch an identical tile. The atmosphere is deeply calculating and demands an entirely new level of spatial logic; you are essentially managing a massive game of Sokoban or a slide-puzzle, where moving a Bamboo tile to the left might inadvertently block the only clear path you had to match your Dragon tiles. The visual presentation is highly polished, utilizing crisp, high-definition tiles that ensure perfect readability. Mahjong Move & Match is a brilliant, uncompromising evolution of the matching genre.

## How to Play
* The primary objective is to clear the entire flat grid by matching identical pairs of Mahjong tiles before the timer expires.
* Tiles can only be matched if they are physically sitting directly next to each other (up, down, left, or right).
* Use your \`Mouse\` to click, hold, and drag a tile.
* You can slide a tile in a straight horizontal or vertical line through any contiguous empty space on the grid.
* The tile will stop sliding when it hits another tile or the edge of the board.
* If you slide a tile so that it lands directly adjacent to its identical twin, they will both instantly merge and disappear from the board, freeing up more empty space for sliding.

## Tips and Tricks
* **Work from the Inside Out:** In standard Mahjong, you peel the edges. Here, you must often create massive empty voids in the center of the board first, giving you the runway space needed to slide tiles from the extreme left all the way to the extreme right.
* **Use "Bumper" Tiles:** Because a tile slides until it hits a solid object, you must often use useless tiles as temporary "bumpers" to stop a sliding tile exactly where you want it. Move a tile into position just to act as a wall for your next slide.
* **Don't Create Dead Ends:** Be incredibly careful when sliding tiles into corners or narrow one-tile-wide corridors. If a tile gets stuck behind two other different tiles, it is impossible to extract without clearing the blockers first.
* **Scan the Rows and Columns:** Before making a complex multi-slide maneuver, simply scan the board. If two identical tiles are on the exact same row with only empty space between them, just slide one directly into the other.
* **Think Three Moves Ahead:** Much like chess, you must visualize the board *after* a match is made. Will removing those two tiles create a clear path for the next pair you are eyeing?`
  },
  {
    title: "Aladdin Solitaire",
    seoContent: `![Aladdin Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/aladdinsolitaire800450.webp)

Aladdin Solitaire completely abandons the traditional, complex sequence building of standard Klondike, replacing it with a brilliant, highly visual, and entirely pair-matching mechanic that feels remarkably similar to Mahjong Solitaire, but utilizing a standard deck of playing cards wrapped in a magical Arabian Nights aesthetic. Instead of building descending runs of alternating colors, players are tasked with dismantling a massive, overlapping 2D structure of cards by finding exact, identical pairs. The atmosphere is incredibly fast-paced, highly addictive, and requires a completely different type of spatial strategy; you aren't managing columns, you are managing exposed edges and stacked layers. The visual presentation is exceptionally clean, utilizing crisp, classic playing card graphics set against a beautiful desert backdrop with soaring palaces and magic carpets, ensuring perfect readability even when the massive board becomes heavily congested. Aladdin Solitaire is the ultimate, bite-sized palette cleanser for card game fans, offering a lightning-fast gameplay loop that perfectly captures the "just one more try" mentality.

## How to Play
* The primary objective is to completely clear all the cards from the board.
* Use your \`Left Mouse Button\` to click and select a fully exposed card.
* **The Rules of Removal:** You can ONLY remove cards in exact, identical pairs (e.g., you must match a Red 7 with another Red 7, or a Black Jack with another Black Jack).
* **The Exposure Rule:** Just like Mahjong, a card is strictly considered "exposed" and playable only if there is absolutely no other card resting on top of it. It must be a "top" card.
* If you have no valid matching pairs left on the main structure, click the face-down draw pile to flip over two new cards that you can use to match with the board.
* If you clear every card, you win. If you exhaust the draw pile and have no moves left, you lose.

## Tips and Tricks
* **Prioritize the Stacks:** The cards in this game are layered. Always focus your matching efforts on breaking down the thickest stacks of overlapping cards. If you match two cards that are already on the bottom layer, you haven't uncovered any new information.
* **Use the Draw Pile Sparingly:** Your draw pile is limited. Exhaust absolutely every single possible matching pair on the main board structure *before* you resort to flipping cards from the draw pile.
* **Scan for Blockers:** If a King is covering a massive pile of cards, and you see the matching King available elsewhere on the board, prioritize making that specific match immediately to unlock the cards beneath it.
* **Don't Click Automatically:** If you have an exposed Red 4 on the left side of the board, and an exposed Red 4 on the right side, but you also see a Red 4 sitting on the very top of a massive central stack... DO NOT click the left and right ones. Match one of them with the central stack to uncover the cards below.
* **Memory is Key:** Try to memorize the cards you pass over in the draw pile, as you will likely cycle through the deck again.`
  },
  {
    title: "Mysterious Pirate Jewels 3",
    seoContent: `![Mysterious Pirate Jewels 3](https://www.htmlgames.com/uploaded/game/thumb800/mysteriouspiratejewels3800x450.webp)

Mysterious Pirate Jewels 3 injects a massive dose of high-seas swashbuckling adventure into the highly competitive tile-swapping genre, delivering a visual feast of buried treasure and intensely satisfying combination mechanics across 45 meticulously designed levels. Stepping entirely away from generic, sterile gem-swapping, this title embraces a much more grounded, piratical thematic approach, requiring players to physically align glowing doubloons, cursed rubies, pearls, and ancient compasses. The atmosphere is undeniably engaging, perfectly capturing the essence of a Caribbean treasure hunt without sacrificing the deep, strategic complexity that hardcore puzzle fans demand. The game introduces a fantastic objective-based twist: you aren't just matching gems for points; you must make matches *over* specific colored tiles on the grid to shatter the background and unearth the treasure map. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition sprites that crackle with magical energy when linked together. It is a pure, unadulterated test of spatial planning and cascade optimization.

## How to Play
* The core mechanic revolves around swapping adjacent pirate jewels to create horizontal or vertical lines of three or more identical gems.
* Use your \`Mouse\` to click on a jewel, then click an adjacent one to swap their positions, or simply click and drag.
* Swaps are only permitted if they immediately result in a valid match of three or more.
* **The Primary Objective:** Some squares on the grid have a solid colored background (often stone or wood). You MUST make a successful match of three jewels *on top* of those specific squares to shatter the background. The level is won only when all colored backgrounds are destroyed.
* Matching exactly four jewels creates a glowing, line-clearing explosive. Matching five creates an area-of-effect bomb.

## Tips and Tricks
* **Ignore the High Score, Focus on the Background:** It is incredibly easy to get distracted by a massive chain of red gems sitting in the middle of the board. If that match doesn't shatter a colored background tile, you are wasting a move (and the timer). Focus laser-like on the objective.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading gems dropping from the ceiling, often resulting in massive, free combos that accidentally shatter background tiles for you.
* **Attack the Corners Early:** The hardest background tiles to shatter are the ones tucked into the extreme corners or narrow columns of the grid because very few gems flow through those areas. Dedicate your early game to breaking the corners.
* **Combine the Power-Ups:** The most devastating move in the entire game is swapping two power-ups with each other. Swapping a line-clear with a bomb creates a massive, cross-shaped explosion that shatters a massive amount of background tiles instantly.
* **Don't Tunnel Vision:** It is incredibly easy to spend 30 seconds staring at the top left corner trying to force a match. If you can't see a move instantly, physically force your eyes to scan the opposite side of the board.`
  },
  {
    title: "Balloon Maze",
    seoContent: `![Balloon Maze](https://www.htmlgames.com/uploaded/game/thumb800/balloonmaze800450.webp)

Balloon Maze delivers a brilliant, highly physics-driven evolution of the classic labyrinth genre, completely stripping away the slow, methodical exploration of standard maze games in favor of a kinetic, momentum-based arcade challenge. Set against a clean, visually vibrant grid, players are placed in control of a heavy, rolling sphere trapped inside a complex labyrinth. Your objective is elegantly simple yet brutally difficult in execution: you must rapidly navigate the twisting corridors to physically collide with and pop every single brightly colored balloon scattered throughout the level. The atmosphere is intensely focused; the ball possesses actual weight and momentum, meaning it will slide, bounce off walls, and struggle to stop on a dime, forcing you to constantly calculate friction and trajectory. The visual presentation is highly polished, utilizing crisp, contrasting colors that ensure the maze walls and target balloons are perfectly readable. Balloon Maze is a pure, unadulterated shot of spatial navigation and momentum control.

## How to Play
* The primary objective is to guide the ball through the labyrinth and pop every single balloon before the strict timer expires.
* Use your \`Arrow Keys\` (Up, Down, Left, Right) or \`W, A, S, D\` to exert directional force on the ball.
* The ball has physical momentum. If you hold the Right arrow, the ball will accelerate to the right. When you release the key, the ball will not stop instantly; it will slide until friction or a wall stops it.
* You must actively steer the ball around corners, avoiding dead ends, and crash into the balloons to pop them.
* Once the final balloon is popped, the level is instantly completed.

## Tips and Tricks
* **Use the Walls as Brakes:** Because the ball has heavy momentum, trying to stop perfectly in the middle of a corridor is nearly impossible. If you need to make a sharp 90-degree turn, intentionally slam the ball into the opposite wall to instantly kill its momentum, then immediately press the new direction.
* **Plan Your Route First:** Do not just start rolling wildly. When the level loads, take three seconds to trace a mental path through the maze that connects all the balloons in the most efficient, continuous loop possible. Backtracking wastes massive amounts of time.
* **The "Sweep" Maneuver:** If a long corridor has three balloons in a row, do not stop at each one. Accelerate to maximum speed and sweep through the entire corridor in one massive, unstoppable roll.
* **Don't Oversteer:** At high speeds, holding the arrow key down too long will cause you to overshoot your intended turn and crash into a dead end. Learn to "tap" the keys to make micro-adjustments to your trajectory.
* **Watch for Traps (If Applicable):** Some advanced levels introduce spiked walls or holes. In these levels, you must completely abandon the "slam into the wall" braking technique and rely entirely on delicate counter-steering to slow down safely.`
  },
  {
    title: "Jungle Sniper",
    seoContent: `![Jungle Sniper](https://www.htmlgames.com/uploaded/game/thumb800/junglesniper800450.webp)

Jungle Sniper is an absolute masterclass in atmospheric, tension-fueled marksmanship, abandoning the chaotic, run-and-gun mechanics of standard shooters in favor of the cold, calculated patience of a hidden predator. Set against a breathtaking, high-definition digital rendering of a dense, sun-dappled tropical rainforest, players are tasked with eliminating a specific quota of hostile soldiers hidden deep within the foliage. The atmosphere is deeply cinematic and incredibly stressful; there is no background music, only the ambient sounds of buzzing insects, rustling leaves, and the heavy breathing of your character. You must meticulously scan the complex environment, looking for a flash of movement or the glint of a rifle barrel before the enemy spots you. The visual presentation is exceptionally polished, utilizing a highly realistic aesthetic that makes identifying heavily camouflaged targets a genuine test of visual acuity. Accompanied by the sharp, echoing crack of a high-caliber rifle, Jungle Sniper delivers a flawless, bite-sized tactical experience.

## How to Play
* The primary objective is to locate and eliminate all enemy soldiers hidden in the jungle environment before they spot you or the timer runs out.
* The game starts in a wide, un-zoomed view. Use your \`Mouse\` to scan the environment.
* Click the \`Left Mouse Button\` (or tap) to look through your high-powered sniper scope, heavily magnifying a specific area of the jungle.
* While looking through the scope, slowly move your \`Mouse\` to aim the crosshairs perfectly on the target.
* Release the \`Left Mouse Button\` (or click again, depending on control settings) to fire a single, lethal shot.
* Be precise! Missing a shot will instantly alert the enemies to your position, usually resulting in a rapid failure.

## Tips and Tricks
* **Scan Without the Scope First:** Do not spend the entire game looking through the heavily magnified scope. It severely limits your peripheral vision. Look at the wide view first, searching for unnatural geometric shapes (like the straight line of a gun barrel) or tiny movements in the brush.
* **Look for Contrast:** The soldiers are usually wearing green camo, but their skin, their black boots, or the wood of their rifles will slightly contrast with the bright green leaves of the jungle.
* **Hold Your Breath (If Available):** If the game includes a mechanic to steady your aim (usually by holding the \`Spacebar\` or \`Shift\`), ALWAYS use it right before taking the shot. The natural sway of the scope will cause you to miss a headshot by inches.
* **Prioritize Exposed Targets:** If you see a soldier standing perfectly still in a clearing, and another soldier partially hidden behind a thick tree, shoot the hidden one first. The exposed one is an easy shot you can take later under pressure.
* **Don't Panic on a Miss:** If you miss, the screen might flash red as they return fire. Do not wildly drag the mouse and spam the trigger. Stay calm, re-acquire the target in the scope, and take one clean follow-up shot.`
  },
  {
    title: "Kitty Mahjong",
    seoContent: `![Kitty Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/kittymahjong800450.webp)

Kitty Mahjong plunges the ancient, highly structured mechanics of traditional Chinese tile-matching into a breathtaking, deeply atmospheric wonderland of adorable felines and cozy aesthetics. Moving far beyond the sterile, flat green felt of standard solitaire games, this title constructs massive, complex architectural pyramids using beautifully illustrated tiles depicting incredibly cute kittens, paw prints, bowls of milk, and balls of yarn. The atmosphere is incredibly relaxing and immersive, trading the tense ticking clocks of arcade games for a soothing, colorful puzzle environment that feels genuinely uplifting and stress-free. You are tasked with analyzing towering, overlapping tile structures, meticulously searching for exposed pairs to dismantle the board. The visual presentation is exceptionally polished, utilizing bright, highly saturated color palettes that make identifying matching cats incredibly intuitive, even when the board is massively congested. Kitty Mahjong is a highly successful thematic reskin, proving that a timeless puzzle formula can be completely refreshed with a strong, cohesive, and heartwarming artistic vision.

## How to Play
* Your objective is to completely clear the entire screen by matching identical pairs of cat-themed tiles.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles heavily overlap, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden kittens buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, you lose.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach yarn tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a yarn tile buried deep in the center tower.
* **Memorize the Kittens:** Because many of the cats look slightly similar (e.g., two orange tabbies in slightly different poses), take a moment to mentally categorize them by a specific detail (like "the one with the red collar" or "the sleeping one").
* **Use the Reshuffle (If Available):** Treat the shuffle button like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably dead.`
  },
  {
    title: "Tetris Puzzle",
    seoContent: `![Tetris Puzzle](https://www.htmlgames.com/uploaded/game/thumb800/tetrispuzzle800450.webp)

Tetris Puzzle fundamentally rewrites the rules of the massively popular block-falling puzzle genre, completely stripping away the frantic anxiety and relentless gravity of the arcade original to deliver a highly tactical, completely unpressured test of spatial geometry. Set against a clean, visually uncluttered grid, players are tasked with managing the iconic Tetromino shapes (L-blocks, T-blocks, straight lines). However, instead of frantically trying to steer them as they plummet from the ceiling, this game grants you complete, surgical control. You can take as much time as you want to select a piece, rotate it perfectly, and then click exactly where you want it to drop onto the board. Your objective is to strategically fill horizontal rows to clear them and score points. The atmosphere is deeply calculating and immensely satisfying; you are essentially executing precision architectural planning without a ticking clock. The visual presentation is highly polished, utilizing crisp, neon colors. Tetris Puzzle is a pure test of long-term cascade planning and spatial optimization.

## How to Play
* The primary objective is to survive as long as possible by creating completely solid horizontal lines of blocks.
* A Tetromino shape will appear at the top of the screen (or in a side panel).
* You do NOT need to catch it or steer it as it falls. It waits for you.
* Press the \`Up Arrow\` key, the \`Spacebar\`, or use the \`Right Mouse Button\` to physically rotate the shape until it is oriented exactly how you want it.
* Use your \`Mouse\` to hover over the grid, visualizing exactly where the piece will land.
* Click the \`Left Mouse Button\` to instantly drop the piece straight down into that column.
* When a completely solid horizontal line of 10 blocks is formed, it is instantly destroyed.
* The game is over when the stack of blocks reaches the top of the board.

## Tips and Tricks
* **Keep the Board Flat:** The absolute golden rule of all Tetris variants. Try to avoid building a massive, towering peak on one side of the board and a deep valley on the other. A jagged, uneven board makes it mathematically impossible to place large, horizontal pieces cleanly.
* **The "Well" Strategy:** The most effective way to score massive points is to build a solid, flat structure that is 9 blocks wide, leaving a single, 1-block-wide "well" completely empty on the far left or right edge. Wait patiently for the long, straight "I-block," and drop it directly into the well to clear 4 lines instantly (a "Tetris").
* **Don't Create Overhangs:** Never drop an L-block or a T-block in a way that creates an empty pocket of air beneath it. It is incredibly difficult to clear lines if you have empty gaps buried deep in your structure.
* **Take Your Time:** The lack of gravity is your biggest weapon. Do not rush. Before you click to drop a piece, visualize exactly how the top of your structure will look *after* it lands.
* **Think Ahead:** Pay attention to the "Next Piece" indicator. If you know an awkward Z-block is coming next, you must proactively build a specific shaped gap to accommodate it.`
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
