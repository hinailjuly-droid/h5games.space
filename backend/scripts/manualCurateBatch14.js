const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Sudoku Classic",
    seoContent: `![Sudoku Classic](https://www.htmlgames.com/uploaded/game/thumb800/sudokuclassic800450.webp)

Sudoku Classic delivers the absolute purest, most unadulterated distillation of the globally renowned logic puzzle, completely stripping away the bloated, unnecessary mini-games and distracting themes that plague modern iterations. This is the timeless number grid exactly as it was meant to be played: stark, mathematically rigorous, and uncompromisingly demanding. Set against a clean, visually minimalist digital interface that perfectly mimics the stark black-and-white aesthetic of newspaper puzzles, you are tasked with filling a 9x9 grid with single digits. The atmosphere is deeply intellectual and intensely focused; there is no narrative, no flashy explosions, and absolutely no luck involved. It is a pure test of your ability to process numerical constraints, cross-reference intersecting rows, and execute complex logical deductions through the process of elimination. The visual presentation is highly functional, ensuring the grid remains perfectly readable on any screen size. Sudoku Classic is the ultimate brain-training routine for hardcore logic purists who demand a flawless, distraction-free environment.

## How to Play
* Your objective is to fill every empty square on the 9x9 grid with numbers ranging from 1 to 9.
* **The Golden Rules:** A specific number can only appear exactly ONCE in every horizontal row, exactly ONCE in every vertical column, and exactly ONCE within every heavily outlined 3x3 sub-box.
* Use your \`Mouse\` to click an empty square, and use your \`Keyboard Number Row\` (or the on-screen numeric pad) to input a digit.
* To delete a number you have placed, simply click the square and enter that exact same number again, or press \`Backspace\`.
* The puzzle is successfully completed when the entire 81-square board is filled correctly with no rule violations.

## Tips and Tricks
* **The "Crosshatch" Method:** This is the foundational Sudoku technique. Pick a specific number, like "1". Scan the entire board and look at every 3x3 box that *doesn't* have a "1". Because a "1" cannot repeat in a row or column, visually draw lines from the existing "1"s to eliminate empty squares in the empty boxes.
* **Look for Singletons:** If a horizontal row already has the numbers 1, 2, 4, 5, 6, 7, 8, and 9 filled in, you don't even need to look at the columns; the only remaining empty square MUST be a 3. Always hunt for rows, columns, or boxes that only have one missing number.
* **Use Pencil Marks:** Most digital Sudoku games allow you to take "notes" by putting tiny numbers in a square. If a square can only possibly be a 2 or a 5, write both down. This heavily aids in complex deductions later.
* **Never Guess:** Sudoku is 100% pure mathematical logic. If you guess a number and you are wrong, you will break the entire puzzle and not realize it until 10 minutes later. Every placement can be proven.
* **Scan the Intersections:** If you are staring at an empty square, look up its column, across its row, and inside its box. Count how many unique numbers you see. If you see 1, 2, 3, 5, 6, 7, 8, 9... the empty square MUST be 4.`
  },
  {
    title: "Spades Spider Solitaire",
    seoContent: `![Spades Spider Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/spadesspidersolitaire800450.webp)

Spades Spider Solitaire offers the perfect entry point into one of the most notoriously difficult, mathematically punishing card games ever invented, drastically lowering the barrier to entry without sacrificing the core, sequence-building satisfaction. Standard Spider Solitaire uses two decks and four suits, resulting in a win rate of less than 10% for average players. This "Spades Only" variant strips away the suit-matching nightmare, utilizing 104 cards that are entirely of a single suit. The atmosphere is deeply calculating but significantly less stressful; you are essentially building massive, unbroken numerical pipelines without worrying about color clashes. The visual presentation is exceptionally clean, utilizing crisp, oversized card graphics set against a traditional green felt backdrop, ensuring perfect readability even when the ten massive columns become heavily congested. It is a pure, unadulterated test of spatial logic and cascade management, perfect for players who want the sprawling, epic scale of Spider without the brutal, unforgiving difficulty.

## How to Play
* The primary objective is to build complete, descending sequences of cards (from King down to Ace) directly on the main tableau.
* When a perfect King-to-Ace sequence is formed, it is instantly removed from the board entirely. The game is won when all 104 cards have been sequenced and removed.
* Use your \`Mouse\` to click and drag cards between the ten columns.
* You can place a card on top of any other card that is exactly ONE rank higher (e.g., place a 7 on an 8).
* Because all cards are Spades, you can drag *any* correctly stacked sequence of cards together as a single unit.
* If you run out of valid moves, click the stock pile at the top left to deal ten new cards (one onto each column). You cannot deal new cards if any of your ten columns are completely empty.

## Tips and Tricks
* **Empty Columns are Gold:** An empty column in Spider Solitaire is the most powerful tool in the game. It allows you to temporarily park massive sequences of cards to unearth the face-down cards buried beneath them. Do everything in your power to clear a column.
* **Dig Deep:** Your absolute highest priority in the early game is to expose the face-down cards. If you have a choice between making a move that builds a sequence, or making a move that flips a hidden card face-up, ALWAYS flip the hidden card.
* **Build on the High Cards:** Try to anchor your longest sequences on Kings, Queens, and Jacks. A sequence starting on a 4 will quickly run out of room and become a dead end.
* **Don't Deal Too Early:** Dealing ten new cards completely buries all the careful organizing you just did. Never click the draw pile unless you have absolutely, definitively exhausted every single possible move on the board.
* **Consolidate Stacks Before Dealing:** Before you click the draw pile, make sure you have consolidated your cards into the fewest possible stacks. The tidier your board is before a deal, the easier it will be to recover afterward.`
  },
  {
    title: "The Lost Crown",
    seoContent: `![The Lost Crown](https://www.htmlgames.com/uploaded/game/thumb800/thelostcrown800450.webp)

The Lost Crown is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and historically immersive core. Forget convoluted detective storylines or unnecessary mini-games; this title is a pure, unadulterated shot of visual immersion focused entirely on acute observation and spatial awareness. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing the opulent, dust-covered interiors of a massive royal castle, tasked with locating a specific list of cleverly concealed royal artifacts. The atmosphere is intoxicatingly rich, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, velvet tapestries, and complex gothic geometry. Visually, the game opts for a highly realistic, slightly moody aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy corner, coiled rope, and weathered stone brick is rendered with breathtaking clarity. The sensation of discovery is incredibly well-executed, making every successfully located item feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of the castle interior.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden objects before the strict time limit expires to advance to the next wing of the castle.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the base of the throne) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A silver chalice might be tinted red to blend into a velvet curtain.
* **Check the Shadows:** The developers love hiding dark objects inside the shadows of armor suits, underneath heavy oak tables, or inside unlit fireplaces. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a royal seal, you will accidentally spot the hidden sword.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Mystical Forest",
    seoContent: `![Mystical Forest](https://www.htmlgames.com/uploaded/game/thumb800/mysticalforest800450.webp)

Mystical Forest plunges the ancient, highly structured mechanics of traditional Chinese tile-matching into a breathtaking, deeply atmospheric woodland environment. Moving far beyond the sterile, flat green felt of standard solitaire games, this title constructs massive, complex architectural pyramids using beautifully illustrated tiles depicting glowing mushrooms, ancient tree spirits, and ethereal glowing runes. The atmosphere is incredibly relaxing and immersive, trading the tense ticking clocks of arcade games for the soothing, ambient sounds of a deep, enchanted forest. You are tasked with analyzing towering, overlapping tile structures, meticulously searching for exposed pairs to dismantle the board like a digital botanist. The visual presentation is exceptionally polished, utilizing earthy, rich color palettes and dynamic lighting effects that simulate moonlight striking the tiles, ensuring the puzzle remains perfectly readable even when the board is massively congested. Mystical Forest is a highly successful thematic reskin, proving that a timeless puzzle formula can be completely refreshed with a strong, cohesive artistic vision.

## How to Play
* Your objective is to completely clear the entire screen by matching identical pairs of forest-themed tiles.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles heavily overlap, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden tiles buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, you lose.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Memorize the Categories:** Unlike traditional Mahjong, Mystical Forest features groups of tiles (like different types of glowing flora or different colored leaves) that can be matched with each other, even if they aren't identical. Learn these groups instantly.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach mushroom tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a mushroom tile buried deep in the center tower.
* **Use the Reshuffle (If Available):** Treat the shuffle button like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably dead.`
  },
  {
    title: "Tripeaks Castle",
    seoContent: `![Tripeaks Castle](https://www.htmlgames.com/uploaded/game/thumb800/tripeakscastle800450.webp)

Tripeaks Castle strips the beloved solitaire variant down to its absolute, most highly addictive core while wrapping it in a stunning, medieval architectural aesthetic. Moving away from the slow, methodical pacing of standard Klondike, this title embraces a kinetic, combo-driven gameplay loop where speed and sequential planning are heavily rewarded. Set against a beautiful, high-definition digital rendering of a stone fortress, the game presents you with massive, sprawling structures of overlapping cards that physically resemble castle walls and turrets. Your objective is intensely focused: completely dismantle the castle before your draw pile is exhausted. The atmosphere is undeniably engaging, lacking any distracting narrative elements or overly complex rule sets. The visual presentation is highly polished, utilizing crisp, themed card graphics that pop against the stone background, ensuring perfect readability. Tripeaks Castle is a pure, unadulterated test of numerical sequencing and cascade management, offering a deeply satisfying loop that perfectly captures the "just one more round" mentality.

## How to Play
* The primary objective is to clear all the cards from the massive castle structure by moving them to the discard pile at the bottom.
* Use your \`Left Mouse Button\` to click on any fully exposed (uncovered) card on the board.
* You can only remove a card if its value is exactly ONE rank higher or ONE rank lower than the current face-up card in the discard pile.
* The suit of the cards does not matter. An 8 of Hearts can be played on a 7 of Spades or a 9 of Clubs.
* Aces can connect to Kings, and Kings can connect to Aces, allowing sequences to loop continuously.
* If you have no valid moves on the board, click the face-down draw pile to reveal a new starting card.

## Tips and Tricks
* **Prioritize the Peaks:** The cards at the very top of the castle turrets block the most cards underneath them. Always favor a move that uncovers a card higher up in the structure.
* **Scan for the Longest Chain:** Never just click the first valid card you see. If your discard is a 5, and you have a 4 and a 6 on the board, trace both paths mentally to see which one yields the longest continuous chain of removals.
* **Save the Draw Pile:** Your draw pile is your only lifeline. Exhaust absolutely every single possible sequence on the main board before you even think about clicking for a new card.
* **Uncover Face-Down Cards:** If you have multiple options for a move, always choose the card that will uncover a face-down card below it. Information is your most valuable resource.
* **Use the Undo Button:** Most Tripeaks variations feature a single 'Undo' button. Use it strategically! If you pick a path that immediately leads to a dead end, undo it and try the alternate route.`
  },
  {
    title: "Forgotten Relics",
    seoContent: `![Forgotten Relics](https://www.htmlgames.com/uploaded/game/thumb800/forgottenrelics800450.webp)

Forgotten Relics injects a massive dose of Indiana Jones-style archaeological adventure into the highly competitive tile-swapping genre, delivering a visual feast of ancient artifacts and intensely satisfying combination mechanics. Stepping away from generic, brightly colored gem-swapping, this title embraces a much more grounded, historical thematic approach, requiring players to physically align glowing idols, ancient coins, and mystical scarabs. The atmosphere is undeniably engaging, perfectly capturing the essence of a dusty tomb excavation without sacrificing the deep, strategic complexity that hardcore puzzle fans demand. Every level is a meticulously designed challenge, presenting specific objective quotas (like collecting 30 golden masks or breaking petrified stone blocks) that must be met within a strict move limit. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition sprites that crackle with ancient energy when linked together. It is a pure, unadulterated test of spatial planning and cascade optimization.

## How to Play
* The core mechanic revolves around swapping adjacent relics to create horizontal or vertical lines of three or more identical artifacts.
* Use your \`Mouse\` to click on a relic, then click an adjacent one to swap their positions, or simply click and drag.
* Your objective is to fulfill specific level goals displayed at the top of the screen before you run out of allowed moves.
* Matching exactly four relics creates a glowing line-clear explosive.
* Matching five relics in an L or T shape creates a devastating area-of-effect dynamite bundle.
* Matching five relics in a straight row creates a mystical orb that obliterates all artifacts of a specific type from the board.

## Tips and Tricks
* **Prioritize the Objective:** It is incredibly easy to get distracted by a massive chain of silver coins, but if your objective is only golden idols, you are wasting a precious move. Focus laser-like on the goal.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading relics, often resulting in free, accidental combos as the board settles.
* **Combine the Power-Ups:** The most devastating move in the game is swapping two power-ups with each other. Swapping a line-clear with a bomb creates a massive, cross-shaped explosion that clears half the board instantly.
* **Save the Mystical Orbs:** Do not use the five-in-a-row orb immediately. Save it until you desperately need to clear a specific color to meet your objective, or wait to combine it with another power-up.
* **Analyze the Chokepoints:** Pay close attention to the shape of the board. Some levels have narrow columns, stone blocks, or chains where relics can get stuck. Focus on breaking those barriers first.`
  },
  {
    title: "Marble Merge",
    seoContent: `![Marble Merge](https://www.htmlgames.com/uploaded/game/thumb800/marblemerge800450.webp)

Marble Merge fundamentally rewrites the rules of the massively popular sliding number genre (like 2048 or Threes) by introducing a highly kinetic, physics-driven shooting mechanic. Instead of frantically swiping the entire board to force rigid square tiles together, this game places you in control of a rotating cannon, tasked with firing brightly colored, numbered marbles into a dense, chaotic pile. Set against a clean, visually uncluttered arena, your objective is to shoot a marble so that it directly impacts an identical marble, causing them to instantly merge and exponentially increase in value. The atmosphere is deeply calculating and immensely satisfying; you are essentially building a numerical pipeline, managing the physical weight and momentum of the spheres as they bounce and settle. The visual presentation is exceptionally clean, utilizing crisp, contrasting colors for different numerical tiers and a surprisingly robust physics engine that realistically simulates gravity and collision. Marble Merge is a brilliant, unpressured puzzle experience that trades rapid reflexes for pure spatial logic and trajectory calculation.

## How to Play
* The primary objective is to reach a specific numerical goal by merging identical marbles to exponentially increase their value.
* You control a cannon at the bottom or top of the screen holding a specifically numbered marble.
* Use your \`Mouse\` to aim the trajectory line, calculating bounces off the walls.
* Click the \`Left Mouse Button\` to fire the marble into the pile.
* When your fired marble physically touches another marble of the exact same number, they will merge into a single marble with double the value (e.g., shooting a 4 into a 4 creates an 8).
* The physics engine causes the newly merged marble to physically expand, often pushing other marbles around and triggering massive chain-reaction merges.

## Tips and Tricks
* **Control the Anchor Points:** Your absolute highest priority is ensuring your largest numbers stay anchored near the bottom (or back) of the pile. Never shoot a small "2" or "4" directly in front of your massive "512" marble, blocking it forever.
* **Build Sequential Clusters:** Try to keep your numbers organized sequentially. If your biggest marble is a 64, try to build a 32 right next to it, and a 16 next to that. When you finally shoot an 8 into the 8, the physical expansion will trigger a domino effect merging all the way to 128.
* **Master the Wall Bounce:** You cannot always shoot straight. You MUST learn to bounce your marbles off the left and right walls to ricochet them into tight gaps behind the front lines.
* **Use Force:** Sometimes a marble is *almost* touching its identical twin, but a small marble is in the way. Shooting a heavy marble with high velocity can sometimes knock the blocking marble out of the way, forcing the merge.
* **Look Ahead:** Always pay attention to the "Next Marble" indicator. If you know a 16 is coming next, you might deliberately shoot your current 8 into an awkward spot just to prepare a clear line of sight for the 16.`
  },
  {
    title: "Shanghai Mahjong - Double Tiles",
    seoContent: `![Shanghai Mahjong - Double Tiles](https://www.htmlgames.com/uploaded/game/thumb800/shanghaimahjong-doubletiles800450.webp)

Shanghai Mahjong - Double Tiles introduces a wildly addictive, highly structured mechanical twist to the classic Mahjong matching formula, completely changing how you interact with overlapping puzzle layers. Instead of instantly matching and removing pairs on the board, you must physically extract tiles and place them into a limited holding tray at the bottom of the screen. Furthermore, this variant drastically alters the core matching rules: you can clear tiles not only by finding three or four identical matches, but also by assembling sequential, consecutive runs (like a 2, 3, and 4 of Bamboo). The atmosphere is deeply intense and demands meticulous forward planning; the puzzle isn't just about finding matching symbols, it's about managing the incredibly tight inventory space of your tray while calculating mathematical sequences. The visual style is exceptionally clean and readable, utilizing crisp, high-definition traditional tiles. This game is a masterclass in fusing traditional solitaire mapping with modern rummy mechanics and high-stakes inventory management.

## How to Play
* The objective is to completely clear the multi-layered stack of tiles from the main board.
* Use your \`Left Mouse Button\` to click any fully exposed (unblocked) tile on the board to move it down into your holding tray.
* Your holding tray can only hold a limited number of tiles at any given time.
* **The Rules of Removal:** Tiles in your tray are automatically removed if you collect 3 or 4 IDENTICAL tiles, OR if you collect 3 or 4 CONSECUTIVE tiles of the exact same suit (e.g., Character 5, 6, 7).
* The game is immediately over if your tray becomes completely full without forming a valid meld.

## Tips and Tricks
* **Never Blindly Click:** The most common mistake is clicking every free tile you see. Before clicking a tile, you must mentally confirm exactly how you plan to remove it (either by finding identical copies or by building a sequence).
* **Sequences Save Lives:** The ability to clear tiles sequentially (1, 2, 3) is a massive lifeline. If you have a 4 and a 5 of Dots in your tray, and you see a 6 of Dots on the board, grab it instantly to clear the space.
* **Dig Deep:** Sometimes you need a specific tile that is buried under three other tiles. It is acceptable to temporarily fill your tray with those blocking tiles, *provided* that reaching the buried tile instantly triggers a clear in your tray.
* **Peel the Edges:** Tiles on the absolute outer edges of the stack are generally safer to pull, as they rarely block critical pathways in the dense center.
* **Watch the Layers:** Pay close attention to the shadowing on the tiles to understand how many layers deep a specific item is buried before committing your tray space to it.`
  },
  {
    title: "Soccer Pinball",
    seoContent: `![Soccer Pinball](https://www.htmlgames.com/uploaded/game/thumb800/soccerpinball800450.webp)

Soccer Pinball violently propels the classic, tactile joy of the silver ball into the high-energy, stadium-roaring world of professional football. Moving away from standard, static arcade tables, this title embraces a deeply kinetic sports aesthetic, outfitting its massive board with glowing goalposts, defensive bumpers acting as rival players, and sweeping penalty box ramps. The atmosphere is intensely frantic and visually spectacular; you aren't just trying to keep the ball from draining, you are trying to execute precise passing sequences and blast massive, high-velocity shots past the automated goalie to score. The visual presentation is highly polished, utilizing dynamic lighting that flashes in sync with the roaring crowd audio, making every successful goal feel like a championship victory. The physics engine is exceptionally well-tuned, perfectly replicating the weighty momentum and chaotic ricochets of a soccer ball trapped in a physical machine. Soccer Pinball is a pure, unadulterated shot of arcade adrenaline that masterfully bridges the gap between sports and retro mechanics.

## How to Play
* The primary objective is to keep the ball in play while aiming for the opposing goal at the top of the table to score points.
* Press the \`Spacebar\` to pull back the plunger and launch the ball onto the pitch.
* Use the \`Left Arrow\` key to flip the left flipper, and the \`Right Arrow\` key to flip the right flipper.
* Do not let the ball fall down the center drain between your flippers, or you will concede a goal and lose a ball.
* Hit specific sequences of glowing targets (representing passing plays) to activate massive score multipliers or open up clear shots on the goal.

## Tips and Tricks
* **Learn to "Catch":** The biggest mistake beginners make is blindly flipping both flippers the second the ball comes near them. If the ball is moving slowly, just hold the flipper UP to "catch" and trap the ball. This completely stops its momentum and allows you to take a perfectly aimed shot at the goal.
* **Aim for the Ramps:** Hitting the flashing ramps along the sides of the pitch is usually the key to bypassing the defensive bumpers in the center. Practice your timing to consistently hit the sweet spot on your flippers.
* **Nudge the Table:** Real pinball players know that you can physically shove the machine to slightly alter the ball's trajectory (called nudging). If the game supports a nudge button, use it when the ball is heading straight down the side gutters to bounce it back into play.
* **Watch the Goalie:** The automated goalie usually moves in a predictable left-to-right pattern. Do not shoot while he is centered. Trap the ball, wait for him to slide to one side, and blast the ball into the opposite corner.
* **Don't Panic on Rebounds:** If you take a hard shot and it hits the goalpost, the ball will rocket straight back down the center. Keep your eyes locked on the ball, not the flashing lights, to prepare for the fast rebound.`
  },
  {
    title: "Cavern - Hidden Stars",
    seoContent: `![Cavern - Hidden Stars](https://www.htmlgames.com/uploaded/game/thumb800/cavernhiddenstars800450.webp)

Cavern - Hidden Stars is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subterranean core. Forget convoluted detective storylines or messy rooms; this title is a pure, unadulterated shot of visual immersion focused entirely on acute observation. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing the glowing stalactites, deep underground lakes, and jagged rock formations of a massive cavern system. Your objective is elegantly simple: locate the subtle, five-pointed star shapes expertly blended into the environment. The atmosphere is intoxicatingly rich and slightly eerie, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, crystalline textures, and complex geometry. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy corner and glowing mushroom is rendered with breathtaking clarity. The sensation of discovery is incredibly well-executed, making every successfully located star feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single five-pointed star hidden within the main high-definition image of the cavern.
* Use your \`Mouse\` to carefully scan the high-definition scene. The stars are often heavily camouflaged, matching the color and texture of the rocks they are hidden on.
* Click directly on a star when you spot it to collect it.
* The counter at the top of the screen displays exactly how many stars are left to find in the current level.
* Be precise! Randomly spam-clicking around the screen will often result in a time penalty or a temporary point deduction.

## Tips and Tricks
* **Look for Geometry, Not Just Glow:** The developers are experts at camouflaging the stars. A star hidden on a jagged rock wall will be dark grey and textured. Stop looking for bright, glowing objects and start looking for the strict, geometric outline of a five-pointed star.
* **Divide the Screen:** Do not try to scan the entire massive image at once; it will overwhelm your eyes. Mentally divide the screen into four quadrants and meticulously search one corner before moving to the next.
* **Check the Shadows and Highlights:** The sharp points of a star are often perfectly hidden within the shadows of a stalagmite, the highlights of a rippling pool of water, or the overlapping edges of glowing crystals.
* **Adjust Your Brightness:** Because this game relies heavily on subtle shading and contrast to hide the objects in a dark cave, ensure your monitor brightness is turned up so you don't miss stars hidden in pitch-black corners.
* **Step Back:** If you are completely stuck on the final star, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the hidden geometric shape suddenly pop out.`
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
