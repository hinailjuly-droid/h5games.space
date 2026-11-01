const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    _id: "69df0eadf3d0d4b2b3cbbfa6",
    title: "Tripeaks Mania",
    seoContent: `![Tripeaks Mania](https://www.htmlgames.com/uploaded/game/thumb800/tripeaksmania800450.webp)

Tripeaks Mania strips the beloved solitaire variant down to its absolute, most highly addictive core, delivering a lightning-fast, card-clearing arcade experience. Moving away from the slow, methodical pacing of standard Klondike, this title embraces a kinetic, combo-driven gameplay loop where speed and sequential planning are heavily rewarded. Set against a clean, visually uncluttered green felt backdrop, the game presents you with the iconic three-peak pyramid structure of overlapping cards. Your objective is intensely focused: clear the entire board before your draw pile is completely exhausted. The atmosphere is undeniably engaging, lacking any distracting narrative elements or overly complex rule sets. The visual presentation is highly polished, utilizing crisp, oversized card graphics that are easily readable even when played on smaller mobile screens. The satisfying audio cues and snappy animations that trigger when you hit a massive sequence run provide a constant, deeply rewarding feedback loop. Tripeaks Mania is a pure, unadulterated test of numerical sequencing and cascade management.

## How to Play
* The primary objective is to clear all the cards from the three peaks by moving them to the discard pile at the bottom.
* Use your \`Left Mouse Button\` to click on any fully exposed (uncovered) card on the board.
* You can only remove a card if its value is exactly ONE rank higher or ONE rank lower than the current face-up card in the discard pile.
* The suit of the cards does not matter. An 8 of Hearts can be played on a 7 of Spades or a 9 of Clubs.
* Aces can connect to Kings, and Kings can connect to Aces, allowing sequences to loop.
* If you have no valid moves on the board, click the face-down draw pile to reveal a new starting card.

## Tips and Tricks
* **Prioritize the Peaks:** The cards at the very top of the three pyramids block the most cards underneath them. Always favor a move that uncovers a card higher up in the structure.
* **Scan for the Longest Chain:** Never just click the first valid card you see. If your discard is a 5, and you have a 4 and a 6 on the board, trace both paths mentally to see which one yields the longest continuous chain of removals.
* **Save the Draw Pile:** Your draw pile is your only lifeline. Exhaust absolutely every single possible sequence on the main board before you even think about clicking for a new card.
* **Uncover Face-Down Cards:** If you have multiple options for a move, always choose the card that will uncover a face-down card below it. Information is your most valuable resource.
* **Use the Undo Button:** Most Tripeaks variations feature a single 'Undo' button. Use it strategically! If you pick a path that immediately leads to a dead end, undo it and try the alternate route.`
  },
  {
    _id: "69df0eadf3d0d4b2b3cbbfa7",
    title: "Ocean Treasure",
    seoContent: `![Ocean Treasure](https://www.htmlgames.com/uploaded/game/thumb800/oceantreasure800450.webp)

Ocean Treasure plunges players into a vibrant, highly immersive aquatic puzzle environment, completely reinventing standard match-3 mechanics with a unique, physics-based row-shifting system. Rather than simply swapping two adjacent jewels, this game requires you to physically click and drag entire horizontal rows or vertical columns, fundamentally altering how you approach the board. Set against a beautifully illustrated backdrop of coral reefs and deep-sea ruins, you are tasked with aligning glowing pearls, ancient coins, and mystical shells to clear specific quotas. The atmosphere is incredibly relaxing yet deceptively complex; the act of shifting entire rows means a single move can completely rearrange the entire board, requiring immense foresight. The visual presentation is a standout feature, boasting rich, highly detailed nautical graphics and smooth, fluid animations that mimic the resistance of moving objects underwater. Ocean Treasure is a masterclass in taking a deeply familiar genre and twisting the core mechanic just enough to make it feel entirely brand new and ferociously addictive.

## How to Play
* The core objective is to align three or more identical ocean treasures to remove them from the board and collect points.
* Instead of swapping individual tiles, use your \`Mouse\` to click and \`Drag\` an entire row left or right, or an entire column up or down.
* As you drag a row off the edge of the screen, the items will wrap around and appear on the opposite side.
* Your goal is to collect the required number of specific items (like 20 starfish or 15 pearls) before your limited number of moves runs out.
* Matching four or more items creates powerful, board-clearing power-ups.

## Tips and Tricks
* **Think in Wraparounds:** The ability to push an item off the left side of the screen and have it appear on the right side is your most powerful tool. Use this to instantly connect items that appear to be on opposite sides of the board.
* **Watch the Intersections:** When you move a horizontal row, you are simultaneously altering every single vertical column it intersects. Always check if moving a row will accidentally destroy a match you were setting up elsewhere.
* **Build from the Bottom:** Like all gravity-based puzzle games, clearing items near the bottom of the board maximizes the cascading effect as new items fall from the top, often resulting in free combos.
* **Target the Objective:** It is easy to get distracted by a massive match of crabs, but if your level objective only requires coins, you are wasting a precious move. Focus purely on the required items.
* **Save the Power-Ups:** When you create a line-clearing bomb, try not to use it immediately unless it directly hits your objective items. Save it for when you are stuck in a dead-end board state.`
  },
  {
    _id: "69df0eadf3d0d4b2b3cbbfa2",
    title: "Endless Bubble Shooter",
    seoContent: `![Endless Bubble Shooter](https://www.htmlgames.com/uploaded/game/thumb800/endlessbubbleshooter800450.webp)

Endless Bubble Shooter strips the legendary arcade puzzle genre down to its absolute, most pure and unrelenting core, delivering a raw, survival-based test of trajectory calculation and nerve. Moving away from the structured, level-by-level progression of standard clones, this title plunges you into a single, infinitely descending ceiling of colorful orbs that never stops advancing. There is no final victory screen here; there is only the pursuit of the absolute highest score before the inevitable crush. The atmosphere is fiercely competitive and incredibly tense, demanding unbroken concentration as the descent speed steadily increases over time. The visual presentation is highly polished in its minimalism, utilizing incredibly crisp, brightly colored spheres that pop sharply against a dark background, ensuring perfect readability even when panic sets in. The satisfying audio feedback of a massive, structural collapse provides a constant dopamine drip. Endless Bubble Shooter is the ultimate, uncompromising test of spatial geometry and rapid-fire decision making.

## How to Play
* Your primary objective is to survive as long as possible by preventing the descending wall of bubbles from touching the red line at the bottom of the screen.
* Use your \`Mouse\` to aim the directional targeting cannon at the bottom center.
* Click the \`Left Mouse Button\` to fire your current colored bubble into the mass above.
* Connect your fired bubble with a cluster of two or more bubbles of the identical color to pop them.
* Any bubbles hanging exclusively from the popped cluster will become detached and fall, granting massive bonus points.

## Tips and Tricks
* **Master the Wall Bounce:** As the board fills up, straight shots become impossible. You MUST learn to bounce your bubbles off the left and right walls to ricochet them into tight gaps behind the front lines.
* **Always Sever the Root:** Never aim for the lowest hanging bubbles if you can avoid it. Aim higher up the structure to destroy the "root" attachment points, causing everything below them to collapse instantly.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* bubble color. Knowing what you have in reserve completely dictates where you should place your current shot.
* **Build Intentional Bridges:** Sometimes you have a color you don't need. Deliberately fire it out of the way to the far edges of the board to build a bridge, keeping the center clear for critical shots.
* **Don't Panic Fire:** When the ceiling gets low, players tend to spam the fire button. This is a guaranteed death sentence. Take an extra half-second to align your trajectory; precision is more important than speed.`
  },
  {
    _id: "69df0eadf3d0d4b2b3cbbfa5",
    title: "Tile Stack",
    seoContent: `![Tile Stack](https://www.htmlgames.com/uploaded/game/thumb800/tilestack800450.webp)

Tile Stack introduces a wildly addictive, highly structured mechanical twist to the classic Mahjong matching formula, completely changing how you interact with overlapping puzzle layers. Instead of instantly matching and removing pairs on the board, you must physically extract tiles and place them into a limited, seven-slot holding tray at the bottom of the screen. The atmosphere is deeply intense and demands meticulous forward planning; the puzzle isn't just about finding matching symbols, it's about managing the incredibly tight inventory space of your tray. If your tray fills up before a match of three is completed, it's an instant game over. The visual style is exceptionally clean and readable, utilizing crisp, high-definition tiles featuring vibrant icons that are easy to distinguish even when stacked several layers deep. The genius of Tile Stack lies in its fusion of traditional solitaire mapping with modern, high-stakes inventory management, creating an experience that is far more demanding than standard matching games.

## How to Play
* The objective is to completely clear the multi-layered stack of tiles from the main board.
* Use your \`Left Mouse Button\` to click any fully exposed (unblocked) tile on the board to move it down into your holding tray.
* Your holding tray can only hold a maximum of seven tiles at any given time.
* When three identical tiles are gathered in your tray, they will instantly merge and be removed, freeing up three crucial inventory slots.
* The game is immediately over if your seven-slot tray becomes completely full without forming a match of three.

## Tips and Tricks
* **Never Blindly Click:** The most common mistake is clicking every free tile you see. Before clicking a tile, you must mentally confirm where the other two identical tiles are located in the stack.
* **Manage Your Tray Space:** Treat your seven tray slots like pure gold. Never have more than four "unmatched" singleton tiles sitting in your tray at once. Always leave room to dig for matches.
* **Dig Deep:** Sometimes you need a specific tile that is buried under three other tiles. It is acceptable to temporarily fill your tray with those blocking tiles, *provided* that reaching the buried tile instantly triggers a match-three clear.
* **Peel the Edges:** Tiles on the absolute outer edges of the stack are generally safer to pull, as they rarely block critical pathways in the dense center.
* **Watch the Layers:** Pay close attention to the shadowing on the tiles to understand how many layers deep a specific item is buried before committing your tray space to it.`
  },
  {
    _id: "69df0eadf3d0d4b2b3cbbfa3",
    title: "Love Hidden Hearts",
    seoContent: `![Love Hidden Hearts](https://www.htmlgames.com/uploaded/game/thumb800/lovehiddenhearts800450.webp)

Love Hidden Hearts strips the hidden object genre down to its absolute, most captivating and visually acute core, delivering a pure test of observational skill and pattern recognition. Moving away from cluttered, messy rooms filled with random junk, this title focuses entirely on a highly specific, thematic objective: locating subtly blended heart shapes hidden within beautifully illustrated, romantic vistas. The atmosphere is intentionally relaxing and serene, trading stressful countdown timers for a soothing, unpressured puzzle environment. You are presented with a series of high-definition, intricately detailed scenes—from moonlit Parisian streets to cozy, fire-lit cabins—and tasked with meticulously scanning every inch for the concealed icons. The visual presentation is the absolute star of the show, utilizing masterful digital painting techniques to hide the hearts inside architectural curves, natural foliage, and clever lighting tricks. Love Hidden Hearts is a triumph of atmospheric puzzle design, offering a genuinely calming, visually stunning experience that perfectly trains your eye for detail.

## How to Play
* Your primary objective is to locate all the hidden heart symbols concealed within the large illustration on your screen.
* Carefully scan the image. The hearts are often blended into the background, matching the color and texture of the objects they are hidden on.
* Use your \`Mouse\` to click directly on a heart when you spot it to collect it.
* The counter at the top of the screen displays exactly how many hearts are left to find in the current level.
* Be precise! Randomly spam-clicking around the screen will often result in a time penalty or a temporary point deduction.

## Tips and Tricks
* **Look for Shapes, Not Colors:** The developers are experts at camouflaging the hearts. A heart hidden on a brick wall will be brick-red and textured. Stop looking for pink icons and start looking for the geometric outline of a heart.
* **Divide the Screen:** Do not try to scan the entire massive image at once; it will overwhelm your eyes. Mentally divide the screen into four quadrants and meticulously search one corner before moving to the next.
* **Check the Shadows and Highlights:** The curves of a heart are often perfectly hidden within the shadows of a draped curtain, the highlights of a glass window, or the overlapping leaves of a tree.
* **Adjust Your Brightness:** Because this game relies heavily on subtle shading and contrast to hide the objects, ensure your monitor brightness is turned up so you don't miss hearts hidden in dark corners.
* **Step Back:** If you are completely stuck on the final heart, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the hidden shape suddenly pop out.`
  },
  {
    _id: "69df0eadf3d0d4b2b3cbbfa1",
    title: "Kakuro Master",
    seoContent: `![Kakuro Master](https://www.htmlgames.com/uploaded/game/thumb800/kakuromaster800450.webp)

Kakuro Master delivers an absolute masterclass in hardcore, number-based logic puzzles, brilliantly translating the beloved Japanese "cross-sums" format into a sleek, highly accessible digital experience. Often described as the mathematically rigorous cousin of Sudoku, Kakuro demands a significantly higher level of arithmetic calculation and deduction. Set against a clean, visually minimalist grid that mimics classic newspaper layouts, the game tasks players with filling empty squares with digits from 1 to 9 so that the sum of each continuous block matches the specific clue provided at its edge. The atmosphere is fiercely intellectual; there is no guessing, no luck, and no narrative fluff. It is a pure, uncompromising test of your ability to process numerical permutations and eliminate impossibilities. The visual style is exceptionally polished in its austerity, utilizing crisp, highly readable typography and intuitive selection controls that ensure the complex grid never feels cluttered. Kakuro Master is the ultimate brain-training challenge for logic purists who crave deep, sustained concentration.

## How to Play
* Your objective is to fill all the empty white squares on the grid with single digits ranging from \`1\` to \`9\`.
* The diagonal numbers in the black squares are your clues. The number on the top right of a diagonal dictates the sum of the horizontal block to its right. The number on the bottom left dictates the sum of the vertical block below it.
* **The Golden Rule:** You CANNOT repeat the same digit within a single continuous sum block (e.g., to make a sum of 4 in two squares, you must use 1 and 3; you cannot use 2 and 2).
* Use your \`Mouse\` to click a square, then select a number from the on-screen keypad (or use your \`Keyboard Number Row\`).
* The puzzle is successfully completed when all white squares are filled and all vertical and horizontal sums are perfectly correct.

## Tips and Tricks
* **Memorize the Unique Sums:** This is the absolute key to Kakuro. A sum of 3 in two squares MUST be 1+2. A sum of 4 in two squares MUST be 1+3. A sum of 17 in two squares MUST be 8+9. Learn these unique combinations instantly.
* **Look for Intersections:** If a horizontal row must sum to 4 (using 1 and 3), and it intersects a vertical column that must sum to 17 (using 8 and 9), the intersection is impossible! This means you made a mistake elsewhere. Use intersections to eliminate possibilities.
* **Start with the Extremes:** Always begin your puzzle by hunting for the lowest possible sums (3, 4) and the highest possible sums (16, 17, 23, 24). They have the fewest possible numerical combinations.
* **Use the "Pencil" Marks:** Most digital Kakuro interfaces allow you to leave small "notes" or multiple tiny numbers in a single square. Use this constantly to mark down the two or three possible options for a tricky cell.
* **Never Guess:** If you are guessing, you are playing Kakuro wrong. Every single move can be definitively proven through mathematical elimination. If you are stuck, re-evaluate your unique sums.`
  },
  {
    _id: "69df0eadf3d0d4b2b3cbbf9f",
    title: "Gold Mine",
    seoContent: `![Gold Mine](https://www.htmlgames.com/uploaded/game/thumb800/goldmine800450.webp)

Gold Mine injects a massive dose of frantic, high-speed arcade action into the classic digging genre, delivering a highly addictive, downward-scrolling survival experience. Moving away from slow, methodical resource management, this title is entirely focused on split-second reflexes and rapid pathfinding. You are placed in control of a rugged, pixel-art miner tasked with plunging endlessly down a treacherous, constantly scrolling vertical shaft. The atmosphere is intensely kinetic; the screen is perpetually pushing you downward, forcing you to constantly react to incoming obstacles, dynamite, and impassable bedrock while desperately trying to snag highly valuable gold nuggets. The visual presentation is highly polished, utilizing a vibrant, retro-inspired 16-bit aesthetic that pops with color and explosive particle effects. The sensation of speed is incredibly well-executed, creating a genuine sense of panic as the downward scrolling accelerates the deeper you go. Gold Mine is a pure, unadulterated shot of arcade adrenaline that perfectly captures the "just one more run" mentality.

## How to Play
* The primary objective is to survive as long as possible while falling down the mine shaft and collecting as much gold as you can.
* The screen will constantly scroll downward automatically. If you get caught at the very top of the screen by the scrolling ceiling, you are crushed and the game is over.
* Use the \`Left\` and \`Right\` arrow keys (or \`A\` and \`D\`) to steer your miner horizontally in mid-air to aim for gaps and avoid obstacles.
* Collect gold nuggets and sparkling gems to drastically increase your high score.
* Avoid hitting solid stone blocks, explosive TNT crates, and dangerous underground creatures, as they will slow your descent or instantly kill you.

## Tips and Tricks
* **Look Down, Not Up:** Your eyes should be permanently glued to the absolute bottom edge of the screen. You must anticipate the gaps in the bedrock before they reach the middle of the screen, or you won't have time to maneuver.
* **Stay Centered:** Whenever you aren't actively dodging or grabbing gold, try to return to the dead center of the shaft. Being trapped on the far left or right wall severely limits your escape options if a solid block appears directly below you.
* **Prioritize Survival Over Greed:** A massive cluster of gold is often placed directly above a TNT crate or a dead-end pit as a trap. If getting the gold puts you in a highly dangerous position, let it go and focus on finding the safe downward path.
* **Use the Pickaxe (If Available):** Some variations allow you to break blocks. Use this ONLY as a last-second panic button when you are completely trapped. Breaking blocks halts your downward momentum.
* **Memorize the Patterns:** The mine shaft is randomly generated, but it uses specific recognizable "chunks" or patterns of obstacles. Learn to recognize these formations instantly so you know exactly how to weave through them.`
  },
  {
    _id: "69ddf8d9c5d714654717ae41",
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
    _id: "69df0eadf3d0d4b2b3cbbfa0",
    title: "Sound Tiles",
    seoContent: `![Sound Tiles](https://www.htmlgames.com/uploaded/game/thumb800/soundtiles800450.webp)

Sound Tiles introduces a brilliantly innovative, multi-sensory twist to the classic tile-matching genre, completely reinventing how players interact with the puzzle board. Moving far beyond purely visual pattern recognition, this game demands that you utilize your auditory memory just as heavily as your eyes. Set against a clean, modern digital interface, you are tasked with clearing a board of tiles not by matching identical pictures, but by matching a specific visual image to its exact corresponding sound effect. The atmosphere is deeply immersive and highly unique, requiring intense concentration and a quality pair of headphones. The visual presentation is intentionally minimalist to ensure the focus remains on the audio cues, utilizing crisp, recognizable icons that perfectly represent their real-world counterparts. Sound Tiles is an absolute triumph of sensory puzzle design, offering an experience that is both highly educational for cognitive association and ferociously addictive for fans of memory games.

## How to Play
* The primary objective is to clear the entire board by successfully matching all pairs of visual and audio tiles.
* Use your \`Left Mouse Button\` to click on an "Audio Tile" (usually marked with a speaker icon). This will play a specific sound effect (e.g., a dog barking, a car engine).
* Immediately after hearing the sound, click on the "Visual Tile" (e.g., the picture of the dog) that you believe perfectly matches that sound.
* If the sound and the image are a correct pair, both tiles will be permanently removed from the board.
* If they do not match, the tiles remain, and you must rely on your short-term memory to remember where that specific sound is located for future matches.

## Tips and Tricks
* **Use Headphones:** This is absolutely mandatory. Playing this game on terrible laptop speakers or in a noisy room will make distinguishing subtle sound effects (like a specific bird call vs. another bird call) nearly impossible.
* **The "Sweep" Strategy:** Do not click randomly. Methodically click every single audio tile in the top row first, just to listen to them and memorize their locations, without trying to match them to pictures yet.
* **Group by Category:** As you listen to the sounds, mentally group them. "Okay, the top left is animals, the bottom right is vehicles." This makes retrieving the memory much faster when you finally spot the corresponding picture.
* **Process of Elimination:** If you hear a generic "whoosh" sound and you aren't sure what it is, look at the remaining pictures. If the only pictures left are a cat, a bell, and the wind, it has to be the wind.
* **Don't Rush:** There is usually no stressful countdown timer. Take your time, close your eyes if you have to, and focus entirely on isolating the specific audio signature before clicking a picture.`
  },
  {
    _id: "69df0eadf3d0d4b2b3cbbfa4",
    title: "Love Mahjong",
    seoContent: `![Love Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/lovemahjong800450.webp)

Love Mahjong takes the ancient, highly structured mechanics of Chinese tile-matching and wraps them in a delightfully charming, romantic aesthetic that is perfectly suited for a relaxing, low-stress gaming session. Moving away from the austere, traditional bamboo and character tiles, this title infuses the classic pyramid layouts with vibrant, high-definition icons of roses, cupid's arrows, chocolates, and intertwined hearts. The atmosphere is undeniably sweet and surprisingly calming, trading intense countdown timers for a pure, unadulterated focus on spatial unblocking and cascade planning. You are tasked with analyzing complex, overlapping tile structures, meticulously searching for exposed romantic pairs to dismantle the board. The visual presentation is exceptionally polished, utilizing soft, pastel color palettes and beautifully detailed illustrations that ensure the puzzle remains perfectly readable even when the board is massively congested. Love Mahjong is a highly successful thematic reskin, proving that a timeless puzzle formula can be completely refreshed with a strong, cohesive artistic vision.

## How to Play
* Your objective is to completely clear the entire board by matching identical pairs of romantic-themed tiles.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles overlap, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden tiles buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, you lose.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach rose tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a rose tile buried deep in the center tower.
* **Unlock Multipliers:** Always prioritize matching a pair if it results in *two* new tiles becoming free, rather than matching a pair that only frees up one.
* **Use the Reshuffle (If Available):** Many versions offer a limited "shuffle" button. Treat this like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably dead.`
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
      console.log('Failed to find ID for: ' + g.title);
    }
  }
  console.log('Total updated: ' + updated);
  process.exit(0);
}
run();
