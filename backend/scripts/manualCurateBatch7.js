const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Frozen Bubbles",
    seoContent: `![Frozen Bubbles](https://www.htmlgames.com/uploaded/game/thumb800/frozenbubbles800450.webp)

Frozen Bubbles violently plunges the classic arcade shooter genre into a beautifully harsh, sub-zero environment, completely reinventing the aesthetic and physical feel of traditional bubble popping. Moving far beyond the generic, colorful spheres of standard clones, this title encases its puzzle grid in a thick layer of digital ice. The atmosphere is undeniably chilling and crisp, replacing upbeat arcade music with the satisfying, ASMR-like sound of shattering glass and cracking ice whenever a massive cluster is destroyed. You are tasked with aiming a frost-covered cannon, desperately trying to clear a descending glacier of trapped bubbles before it reaches the bottom of the screen. The visual presentation is highly polished, utilizing high-definition textures that give the bubbles a genuinely crystalline, frozen appearance. The particle effects are spectacular, turning every successful match into a satisfying burst of frost and snow. Frozen Bubbles is a masterclass in thematic reskinning, proving that a timeless puzzle formula can be completely reinvigorated with a strong, cohesive artistic vision and immersive audio design.

## How to Play
* The primary objective is to clear the entire icy ceiling of frozen bubbles by firing your own colored spheres into matching clusters.
* Use your \`Mouse\` to aim the directional ice cannon at the bottom of the screen.
* Click the \`Left Mouse Button\` to fire your current colored bubble into the frozen mass above.
* When your fired bubble connects with a cluster of two or more bubbles of the exact same color, the ice will shatter and they will disappear.
* Any bubbles that were exclusively hanging onto the shattered cluster will become disconnected and drop off the screen for massive bonus points.
* If you fail to make a match after several shots, the entire glacier will shift downward. If it touches the bottom, you lose.

## Tips and Tricks
* **Master the Wall Bounce:** As the glacier descends, straight shots become impossible. You MUST learn to bounce your bubbles off the frozen left and right walls to ricochet them into tight gaps behind the front lines.
* **Always Sever the Root:** Never aim for the lowest hanging bubbles if you can avoid it. Aim higher up the ice structure to destroy the "root" attachment points, causing everything below them to shatter instantly.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* bubble color. Knowing what you have in reserve completely dictates where you should place your current shot.
* **Build Intentional Bridges:** Sometimes you have a color you don't need. Deliberately fire it out of the way to the far edges of the board to build a bridge, keeping the center clear for critical shots.
* **Don't Panic Fire:** When the glacier gets low, players tend to spam the fire button. This is a guaranteed death sentence. Take an extra half-second to align your trajectory; precision is more important than speed.`
  },
  {
    title: "Travel Mahjong",
    seoContent: `![Travel Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/travelmahjong800450.webp)

Travel Mahjong takes the ancient, methodical traditions of the classic Chinese tile-matching game and injects it with a massive dose of globetrotting wanderlust. Moving away from static, single-background solitaire games, this ambitious title offers an astounding 100 uniquely designed puzzle layouts, each conceptually tied to a different famous location around the world. The atmosphere is deeply relaxing yet endlessly varied; one level might feature a dense, towering pyramid inspired by the Eiffel Tower, while the next presents a sprawling, flat layout mimicking the Great Wall of China. The visual presentation is highly polished, utilizing crisp, traditional Mahjong iconography juxtaposed against beautiful, high-definition photographic backgrounds of global landmarks. This constant shifting of background art and puzzle architecture prevents the game from ever feeling repetitive. Travel Mahjong is the ultimate, uncompromising test of spatial awareness and long-term cascade planning, offering a staggering amount of content for hardcore puzzle enthusiasts.

## How to Play
* Your objective is to completely clear the board by matching identical pairs of traditional Mahjong tiles.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to eliminate both from the structure.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its left or right vertical sides.
* Because the layouts vary wildly in shape, you must constantly adapt your strategy to the specific architecture of the current level.
* You win the level only when the entire screen is cleared. If you run out of valid, accessible matches, you fail and must restart the location.

## Tips and Tricks
* **Analyze the Architecture First:** Before making a single click, look at the overall shape of the 3D structure. Identify the highest peaks and the thickest clusters. These are your primary targets.
* **Delayed Gratification:** If you see an easy match on the outer, single-layer edges of the board, ignore it. Save those edge pieces! You will desperately need them later to match a tile that is deeply buried in the center tower.
* **Unlock Multipliers:** Always prioritize matching a pair if it results in *two* new tiles becoming free, rather than matching a pair that only frees up one.
* **Memorize the Seasons:** The seasonal tiles (Spring, Summer, Autumn, Winter) and the flower tiles can be matched with *any* other tile in their specific set. Do not waste time looking for identical copies.
* **Use the Reshuffle (If Available):** Many variations offer a limited "shuffle" mechanic. Treat this like an absolute last resort. Never use it just because you are bored of looking; only use it when the board is verifiably dead.`
  },
  {
    title: "Daily Path",
    seoContent: `![Daily Path](https://www.htmlgames.com/uploaded/game/thumb800/daily-path-800x450.webp)

Daily Path delivers an absolute masterclass in minimalist, logic-driven puzzle design, stripping away all unnecessary arcade mechanics to deliver a pure, deeply cerebral daily challenge. Originating from the brilliant minds of Japanese puzzle creators (often known as Hidato or Number Snake), the game requires players to draw a single, unbroken numerical path through a grid, connecting numbers sequentially from 1 to the highest given number. The atmosphere is intensely intellectual; there is no narrative, no flashy explosions, and no luck involved. It is a pure test of your ability to deduce spatial rules and execute complex geometric logic. The visual presentation is highly appealing in its absolute austerity, utilizing a stark, clean grid that ensures the puzzle mechanics remain perfectly readable and distraction-free. The brilliance of Daily Path lies entirely in its uncompromising dedication to core logic rules and its commitment to providing brand-new, hand-crafted levels every single day. It is the ultimate brain-training routine for hardcore logic purists.

## How to Play
* The primary objective is to fill every single empty square on the grid with a number, creating a continuous sequential path from 1 to the highest number.
* Consecutive numbers (e.g., 4 and 5) MUST connect to each other horizontally, vertically, or diagonally.
* Use your \`Mouse\` to click on an empty square, and use your \`Keyboard Number Row\` to input the correct digit.
* You cannot skip numbers, and the path cannot cross over itself or branch off.
* The puzzle is successfully completed only when every square is filled and the sequential path is unbroken.

## Tips and Tricks
* **Connect the Givens First:** Scan the board for numbers that are already filled in and are numerically close to each other (like a 12 and a 14). There is often only one physical square between them where the 13 can logically fit.
* **Watch the Corners:** A square tucked deep into a corner or surrounded by filled numbers often only has one or two possible entry/exit points. Use these choke points to determine the path.
* **Work Backwards:** Do not force yourself to start at 1. If the highest number is 36, and 34 is nearby, trace the path backwards (36, 35, 34) to establish a massive anchor point on the board.
* **The "Reach" Rule:** If you are at 10, and 15 is five squares away physically, the path MUST take a direct route. If it meanders, it will run out of numbers before reaching 15.
* **Never Guess:** If you are guessing, you are playing the puzzle wrong. Every single number placement can be definitively proven through spatial elimination. If you are stuck, re-evaluate the choke points.`
  },
  {
    title: "Picture Nonogram",
    seoContent: `![Picture Nonogram](https://www.htmlgames.com/uploaded/game/thumb800/picturenonogram800450.webp)

Picture Nonogram (also known as Picross or Griddlers) is a legendary, mathematically rigorous logic puzzle that beautifully bridges the gap between raw data calculation and pixel art creation. Moving far beyond the simple number placement of Sudoku, this game demands that players decipher complex numerical clues located on the edges of a blank grid to systematically fill in specific squares, ultimately revealing a hidden picture. The atmosphere is deeply focused and immensely satisfying; every single square you fill feels like a tiny, hard-won victory of deduction. The visual presentation is clean and highly functional, ensuring the tiny numbers on the grid edges are perfectly legible. The true brilliance of Picture Nonogram lies in the final reveal—the sudden moment when hours of strict numerical logic suddenly snap into focus to form a recognizable, charming piece of pixel art. It is a pure, uncompromising test of deductive reasoning and spatial overlap.

## How to Play
* Your objective is to color in the correct squares on the grid to reveal the hidden pixel art image.
* Look at the numbers at the top of each column and the left of each row. These numbers dictate the continuous "blocks" of colored squares in that specific line.
* For example, a clue of "4 1" means there is a block of exactly four colored squares, followed by at least one empty (white) square, followed by exactly one colored square.
* Use your \`Left Mouse Button\` to color a square black.
* Use your \`Right Mouse Button\` (or secondary click) to mark a square with an "X". This is crucial for marking squares you definitively know must be empty.

## Tips and Tricks
* **Start with the Big Numbers:** If you have a 10x10 grid and a row clue is "10", you can instantly color the entire row! Always hunt for clues that fill the maximum space first.
* **The Overlap Method:** If a row in a 10x10 grid has a clue of "8", you know for a fact that the middle 6 squares MUST be colored, regardless of whether the block starts on the far left or the far right. Fill in the overlap!
* **Mark Your Empties:** Placing "X" marks in squares that *cannot* be colored is just as important as coloring the correct squares. An "X" physically limits where blocks can go.
* **Push from the Edges:** If a column starts with a block of "3", and you color the absolute top square of that column, you immediately know the two squares below it must also be colored.
* **Never Guess:** Nonograms are pure logic. If you guess and are wrong, you will destroy the entire puzzle structure hours later. If you are stuck, re-calculate your overlaps.`
  },
  {
    title: "Tetrix 3D",
    seoContent: `![Tetrix 3D](https://www.htmlgames.com/uploaded/game/thumb800/tetrix-3d-800x450.webp)

Tetrix 3D violently propels the most legendary, iconic block-falling puzzle formula in gaming history into a breathtaking, fully realized three-dimensional cylindrical playing field. Moving far beyond the flat, static limitations of a 2D well, this game forces you to constantly rotate a massive, floating column, hunting for hidden gaps and structural weak points along the Z-axis to drop your tetrominoes. The atmosphere is incredibly dynamic and kinetically satisfying, demanding a completely new level of spatial geometry and rapid spatial rotation in your mind. The visual presentation is exceptional, utilizing high-definition 3D rendering, dynamic lighting that reflects off the glossy blocks, and incredibly smooth, physics-based rotation mechanics. The satisfying "thud" of a block locking into place is amplified as you spin the massive structure to see the results of your drop. Tetrix 3D is a masterclass in taking a perfect, timeless formula and elevating it with a singular, brilliant perspective shift that fundamentally changes how you interact with the board.

## How to Play
* The primary objective is to survive as long as possible by dropping descending blocks (tetrominoes) to form completely solid horizontal rings around the 3D cylinder.
* The blocks will fall automatically from the top of the screen.
* Use the \`Left\` and \`Right\` arrow keys (or \`A\` and \`D\`) to physically rotate the entire massive 3D column to position the falling block.
* Use the \`Up\` arrow to rotate the falling block itself.
* Use the \`Down\` arrow to accelerate the drop speed of the block.
* When a completely solid horizontal ring of blocks is formed around the entire cylinder, it will flash and disappear, lowering the stack and granting points.
* If the stack of blocks reaches the very top of the cylinder, the game is over.

## Tips and Tricks
* **Always Spin First:** Never hard-drop a block without doing a full 360-degree rotation of the column first. The perfect, massive gap you need might be hiding right on the other side.
* **Don't Build Towers:** In 2D Tetris, you can build a tall structure on one side and leave a deep well on the other. In 3D, building unevenly is a death sentence. Keep the entire ring structure as flat and level as possible.
* **Memorize the Shapes:** You must know exactly what an L-block or a T-block looks like from every conceivable 3D angle. Train your brain to mentally rotate the shapes before you hit the rotate key.
* **The "Hold" Function (If Available):** If the game allows you to hold a piece, save the long, straight I-blocks for emergencies when you desperately need to clear a deep, narrow hole.
* **Patience over Speed:** When the drop speed increases, players panic and hard-drop blocks randomly. Focus entirely on finding a safe landing zone, even if it doesn't clear a line, to keep the structure manageable.`
  },
  {
    title: "City Sniper",
    seoContent: `![City Sniper](https://www.htmlgames.com/uploaded/game/thumb800/citysniper800450.webp)

City Sniper strips the bloated, over-complicated first-person shooter genre down to its absolute, most tension-fueled and precision-based core. Moving away from frantic run-and-gun mechanics, this title places you in a static, highly elevated vantage point overlooking a sprawling, highly detailed urban environment. Your objective is chillingly focused: identify specific, moving targets hidden within the dense civilian crowds and eliminate them with absolute, pinpoint accuracy. The atmosphere is intensely focused and incredibly stressful, relying heavily on patience, breath control, and meticulous observation. The visual presentation is highly realistic, utilizing high-definition architectural textures and dynamic lighting that can obscure targets in deep shadows. The mechanics of the sniper scope are exceptionally well-executed, forcing players to manage crosshair sway and bullet drop. City Sniper is a pure, unadulterated test of visual acuity and split-second trigger discipline, offering a deeply satisfying, methodical arcade experience.

## How to Play
* Your primary objective is to locate and eliminate the specific targets listed in your mission briefing before time runs out or they escape.
* Use your \`Mouse\` to pan your view across the wide urban landscape.
* Click and hold the \`Right Mouse Button\` (or press \`Spacebar\`) to bring up your high-powered sniper scope and zoom in.
* While zoomed in, use the \`Mouse\` to carefully align your crosshairs over the target.
* Click the \`Left Mouse Button\` to fire your weapon.
* Hitting civilians or missing your target entirely will often result in an immediate mission failure or a severe point penalty.

## Tips and Tricks
* **Memorize the Briefing:** Never skip the mission text. You must know exactly what your target is wearing (e.g., "red hat, carrying a briefcase"). Shooting the wrong person is game over.
* **Scan Before Zooming:** Do not spend the entire game looking through the highly restrictive sniper scope. Use your wide, un-zoomed view to scan the entire city block to locate the general area of the target first.
* **Account for Sway:** Your crosshairs will naturally sway as your character breathes. Do not fight the sway; learn its rhythm and pull the trigger exactly when the crosshair sweeps back over the target.
* **Lead Your Target:** If the target is walking, do not aim directly at them. Aim slightly ahead of them in their path of travel so they walk into the bullet.
* **Check the Windows:** Targets aren't always on the street level. Thoroughly scan balconies, rooftops, and open apartment windows.`
  },
  {
    title: "Hunting Jack - At the Train Station",
    seoContent: `![Hunting Jack - At the Train Station](https://www.htmlgames.com/uploaded/game/thumb800/huntingjackatthetrainstation800450.webp)

Hunting Jack - At the Train Station is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and lighthearted core. Forget convoluted detective storylines or unnecessary mini-games; this title is a pure, unadulterated shot of visual immersion focused entirely on finding a specific, mischievous dog (Jack) and his canine friends hidden within a bustling, chaotic transit hub. You are placed directly into a stunningly detailed, high-definition digital illustration showcasing the massive architecture, crowded platforms, and vibrant luggage of a busy train station. The atmosphere is joyous and chaotic, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise. Visually, the game opts for a highly charming, almost "Where's Waldo" aesthetic, ensuring that every shadowy corner, bench, and suitcase is rendered with breathtaking clarity. The sensation of discovery is incredibly well-executed, making every successfully located dog feel like a genuine triumph of perception.

## How to Play
* Your objective is to find Jack the dog, along with all the other hidden items or animals listed on the side panel, hidden within the main image.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will result in a heavy point penalty.
* You must find all the hidden objects before the strict time limit expires to advance to the next location in the station.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the dog's ears or tail instead of its expected fur color.
* **Check the Shadows:** The developers love hiding dark objects inside the shadows of buildings or underneath benches. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a bone, you will accidentally spot the hidden dog.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Bus Puzzle",
    seoContent: `![Bus Puzzle](https://www.htmlgames.com/uploaded/game/thumb800/buspuzzle800450.webp)

Bus Puzzle delivers a brilliant, highly structured mechanical twist to the classic sliding-block puzzle formula, injecting it with vibrant colors and a surprisingly complex logistical objective. Moving away from abstract wooden blocks, this game places you in the role of a frantic transit dispatcher. You are presented with a grid completely choked with brightly colored buses, and a group of waiting passengers whose colors match specific buses. Your objective is to maneuver the massive, unwieldy vehicles through the gridlock to bring the correct colored bus to the boarding station at the exact right time. The atmosphere is deeply intense and demands meticulous forward planning; you are essentially managing a massive, interconnected traffic jam where every single move affects the positioning of three other vehicles. The visual style is exceptionally clean and readable, utilizing crisp, 3D-rendered buses that pop against the minimalist grid. Bus Puzzle is a masterclass in spatial reasoning, proving that a simple concept can become brain-meltingly difficult when constrained by tight geometry.

## How to Play
* The objective is to clear the waiting passengers by bringing a bus of their exact matching color to the designated boarding station.
* Use your \`Mouse\` to click and drag the buses along the grid.
* Buses can only move forward or backward along their physical orientation (horizontal buses can only move left/right; vertical buses can only move up/down).
* You must slide the obstructing buses out of the way to clear a path for the required colored bus to reach the station.
* The level is successfully completed when all waiting passengers have boarded their corresponding colored buses and left the screen.

## Tips and Tricks
* **Work Backwards:** Look at the passenger queue. If the first passenger is red, identify the red bus. Now, look at every single bus blocking the red bus's path to the station, and figure out where *they* need to go.
* **Don't Trap Yourself:** It is incredibly easy to move a blue bus out of the way, only to realize you just permanently trapped the green bus you need next. Always think two moves ahead.
* **Use the "Garage" Space:** If there is a massive, empty section of the grid, use it as a temporary dumping ground. Shove useless buses into the empty space to clear the main intersections.
* **Order of Operations:** The passengers MUST board in the exact order they are standing in line. Do not waste time moving the yellow bus to the station if the yellow passenger is third in line.
* **Reset Aggressively:** If you have moved 20 buses and the board is a complete chaotic mess, hit the restart button. It is often faster to start with a clean slate than to try and untangle a completely gridlocked board.`
  },
  {
    title: "Rotate Puzzle - Winter Fun",
    seoContent: `![Rotate Puzzle - Winter Fun](https://www.htmlgames.com/uploaded/game/thumb800/rotatepuzzle-winterfun800450.webp)

Rotate Puzzle - Winter Fun takes the traditional jigsaw puzzle format and shatters it, replacing the tedious sorting of scattered pieces with a highly structured, intensely satisfying rotational mechanic. Set against a charming, festive backdrop of snowmen, icy landscapes, and holiday cheer, the game presents you with an image that has been sliced into a rigid grid of square tiles. However, the tiles are already in their correct physical locations—they are just spun wildly out of alignment. Your objective is not to move the pieces, but to click and rotate them 90 degrees at a time until the seamless winter photograph is perfectly restored. The atmosphere is incredibly relaxing yet highly engaging, completely devoid of the frustrating "where does this piece go" feeling of normal jigsaws. The visual presentation is highly polished, utilizing crisp, high-definition winter photography that makes aligning the subtle textures of snow and ice a genuine test of visual acuity. Rotate Puzzle is a brilliant, streamlined evolution of a classic pastime.

## How to Play
* Your objective is to restore the scrambled image to its original, perfect state.
* The image is divided into a grid of square tiles. The tiles cannot be moved from their current position on the grid.
* Use your \`Left Mouse Button\` to click on any tile to rotate it exactly 90 degrees clockwise.
* Continue clicking a tile until its visual lines, colors, and textures perfectly align with the tiles immediately adjacent to it.
* The level is successfully completed when every single tile has been rotated to its correct, original orientation, revealing the full winter scene.

## Tips and Tricks
* **Start with the Borders:** Just like a traditional jigsaw, the absolute easiest pieces to solve are the edges. A tile with a straight, flat border line can only face outward. Align all the border pieces first to frame the puzzle.
* **Look for Distinct Lines:** Hunt for tiles that feature sharp, contrasting elements, like a dark tree branch against white snow, or the straight edge of a house roof. These lines must connect seamlessly to the adjacent tiles.
* **Check the Corners:** The four corner tiles are a massive freebie. They have two flat edges, meaning there is only one mathematically possible orientation for them to sit in the corner.
* **Use the Faces:** If the image features a snowman, a reindeer, or a person, start rotating the tiles containing their eyes or nose. Human brains are highly evolved to recognize facial symmetry, making these easy to align.
* **Don't Over-Rotate:** Click methodically. If you spam-click a tile, you might accidentally spin it right past its correct orientation, forcing you to click it three more times.`
  },
  {
    title: "Texas Hold'em Poker",
    seoContent: `![Texas Hold'em Poker](https://www.htmlgames.com/uploaded/game/thumb800/texashold'empoker800450.webp)

Texas Hold'em Poker flawlessly translates the most famous, high-stakes casino card game in the world into a sleek, highly accessible digital format. Stripping away the intimidation of a live casino, this HTML5 adaptation delivers a pure, tension-fueled test of probability, risk management, and aggressive tactical bluffing against a table of relentless computer opponents. Set against a beautiful, high-definition green felt table, you are tasked with managing your virtual bankroll, reading the betting patterns of the AI, and calculating complex pot odds on the fly. The atmosphere is intensely cerebral; there are no flashy power-ups or arcade mechanics. It is a pure test of your ability to play the player, not just the cards. The visual style is exceptionally polished, utilizing crisp card graphics, smooth chip-stacking animations, and a clean UI that perfectly tracks the pot size and blinds. The brilliance of this Texas Hold'em adaptation lies in its perfect fusion of brutal, unpredictable luck (the flop) and uncompromising strategic depth, forcing players to constantly adapt their game plan on the fly.

## How to Play
* The primary objective is to win chips by holding the best five-card poker hand at showdown, or by betting aggressively to force all other players to fold.
* You are dealt two private cards (hole cards). Five community cards will be dealt face-up in the center of the table over three rounds (The Flop, The Turn, The River).
* Use your \`Mouse\` to select your action during your turn: \`Fold\` (surrender your cards), \`Call\` (match the current bet), or \`Raise\` (increase the bet).
* You must combine your two private cards with any three of the five community cards to make the strongest possible poker hand (e.g., Pair, Flush, Straight).
* The player with the highest-ranking hand at the end of the final betting round wins the entire pot.

## Tips and Tricks
* **Play Tight, Play Aggressive:** Do not play every hand you are dealt. The most common mistake beginners make is limping into pots with terrible cards (like a 7 and a 2). Only play strong starting hands (high pairs, high suited connectors) and bet them aggressively.
* **Position is Everything:** If you are the last person to act in a betting round, you have a massive mathematical advantage because you have seen what everyone else has done. Play more hands in "late position" and fold more in "early position".
* **Don't Chase the Flush:** If you have four hearts after the Turn, and a massive bet is placed in front of you, the mathematical odds of the River card being a heart are only about 19%. If the bet is too high, fold. Do not chase improbable cards.
* **Read the Board, Not Just Your Hand:** You might have a pair of Aces in your hand, but if the community cards are 7, 8, 9, 10 of Spades, your Aces are completely worthless because someone almost certainly has a straight or a flush.
* **Learn to Fold:** The ability to throw away a "good" hand when you know you are beaten is the single most important skill in poker. Ego will bankrupt you.`
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
