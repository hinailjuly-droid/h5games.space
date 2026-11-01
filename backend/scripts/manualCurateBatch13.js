const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Wood Block Puzzle",
    seoContent: `![Wood Block Puzzle](https://www.htmlgames.com/uploaded/game/thumb800/woodblockpuzzle800450.webp)

Wood Block Puzzle delivers an incredibly satisfying, highly tactile evolution of the classic block-fitting genre, replacing the frenetic anxiety of descending Tetris pieces with a pure, unpressured test of spatial geometry. Set against a beautiful, high-definition digital rendering of a polished wooden game board, players are tasked with dragging irregular, rigid wooden shapes onto a 10x10 grid. The atmosphere is deeply relaxing and intentionally meditative; there is no timer, no gravity, and no rapidly escalating difficulty curve. It is just you, the grid, and a constant pursuit of perfect geometric alignment. The visual presentation is highly polished, utilizing realistic wood-grain textures and incredibly satisfying, percussive "clacking" audio cues whenever a block is slotted perfectly into place. The brilliance of Wood Block Puzzle lies in its deceptive simplicity; a single poorly placed piece in the early game can slowly choke out your remaining board space, leading to an inevitable, slow-motion checkmate. It is a pure test of long-term planning and spatial optimization.

## How to Play
* The primary objective is to survive as long as possible by dragging wooden blocks onto the 10x10 grid to form completely solid horizontal or vertical lines.
* You are presented with three randomly generated wooden shapes at the bottom of the screen.
* Use your \`Mouse\` to click, hold, and drag a shape onto any valid, empty space on the grid.
* Unlike Tetris, you CANNOT rotate the shapes. You must place them exactly as they appear.
* When a completely solid horizontal or vertical line of 10 blocks is formed, that entire line is instantly destroyed, freeing up crucial board space and granting points.
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
    title: "Pyramid Solitaire - Ancient Rome",
    seoContent: `![Pyramid Solitaire - Ancient Rome](https://www.htmlgames.com/uploaded/game/thumb800/pyramidsolitaire-ancientrome800450.webp)

Pyramid Solitaire - Ancient Rome strips the complex, alternating-color mechanics of standard card sorting down to a brutally elegant, mathematically pure game of addition, all wrapped in a visually stunning historical aesthetic. Moving away from the green felt of a casino, this title constructs a massive, overlapping triangular structure of cards against a backdrop of marble pillars and Roman coliseums. Your objective is intensely focused: completely dismantle the pyramid by pairing exposed cards that mathematically add up to exactly thirteen. The atmosphere is deeply calculating and incredibly fast-paced; there is no dragging entire sequences of cards, only quick, decisive clicks. The visual presentation is exceptionally polished, utilizing crisp, themed card art featuring emperors and gladiators that ensures perfect readability even when the pyramid is heavily congested. Pyramid Solitaire is a masterclass in taking a simple arithmetic concept and turning it into a highly addictive, reflex-testing puzzle experience that perfectly bridges the gap between math and traditional solitaire.

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
    title: "Desert Oasis - Hidden Secrets",
    seoContent: `![Desert Oasis - Hidden Secrets](https://www.htmlgames.com/uploaded/game/thumb800/desertoasis-hiddensecrets800450.webp)

Desert Oasis - Hidden Secrets is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and historically immersive core. Forget convoluted detective storylines; this title is a pure, unadulterated shot of visual immersion focused entirely on acute observation and spatial awareness. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing sun-drenched Egyptian ruins, lush palm groves, and bustling desert bazaars, tasked with locating a specific list of cleverly concealed artifacts. The atmosphere is intoxicatingly rich, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, blowing sand, and complex geometry. Visually, the game opts for a highly realistic, slightly sun-bleached aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy corner, coiled rope, and weathered sandstone brick is rendered with breathtaking clarity. The sensation of discovery is incredibly well-executed, making every successfully located item feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of the desert scene.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden objects before the strict time limit expires to advance to the next archaeological location.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the base of the Sphinx) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A silver chalice might be tinted orange to blend into the sand.
* **Check the Shadows:** The developers love hiding dark objects inside the shadows of tents, underneath merchant carts, or inside unlit tombs. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a scarab beetle, you will accidentally spot the hidden compass.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Daily Guess",
    seoContent: `![Daily Guess](https://www.htmlgames.com/uploaded/game/thumb800/daily-guess-800x450.webp)

Daily Guess delivers an absolute masterclass in minimalist, trivia-driven puzzle design, brilliantly adapting the classic word-deduction format (popularized by Wordle) into a sleek, highly accessible daily challenge. Stripping away the chaotic timers and complex UI of standard quiz games, this title relies entirely on your vocabulary and logical elimination skills. You are presented with a completely empty grid of squares. Your objective is elegantly simple yet brutally difficult: you must correctly deduce the hidden five-letter word in exactly six attempts using a color-coded feedback system. The atmosphere is intensely intellectual; there is no narrative and no luck involved after your first guess. It is a pure test of your brain's ability to extrapolate a massive amount of linguistic information from tiny visual clues. The visual presentation is highly appealing in its absolute austerity, ensuring the puzzle mechanics remain perfectly readable. It is the ultimate, bite-sized brain-training routine for language enthusiasts.

## How to Play
* The primary objective is to guess the hidden five-letter word in six tries or less.
* Use your \`Keyboard\` to type a valid five-letter English word into the grid, then press \`Enter\` to submit your guess.
* The game will instantly color-code the letters in your guess to provide feedback.
* **Green:** The letter is in the hidden word and is currently in the EXACT CORRECT position.
* **Yellow/Orange:** The letter is in the hidden word, but it is currently in the WRONG position.
* **Grey:** The letter is NOT in the hidden word at all.
* Use this color-coded logic to carefully construct your next guess, narrowing down the possibilities until you find the exact word.

## Tips and Tricks
* **The Perfect Opening Word:** Your very first guess dictates the entire flow of the game. You MUST use a word that contains at least three vowels and common consonants. Excellent opening words include "AUDIO", "STARE", "ROAST", or "ARISE".
* **Don't Re-use Grey Letters:** If the game tells you that the letter "P" is grey (not in the word), absolutely NEVER guess another word containing a "P". You are completely wasting a precious guess.
* **Move the Yellows:** If you guess a word and the "E" is yellow in the second slot, your next guess MUST include an "E", but it MUST NOT be in the second slot. Test it in the third or fifth slot to pin down its exact location.
* **Watch Out for Double Letters:** The game will not explicitly tell you if a word has double letters (like the two O's in "BLOOD"). If you have a green "O", it is entirely possible the word contains a second "O" elsewhere.
* **Burn a Turn (If Desperate):** If you are on guess 4, and you know the word is "_ATCH", it could be BATCH, CATCH, HATCH, MATCH, PATCH, or WATCH. Instead of guessing randomly and dying, guess a completely unrelated word like "CHUMP" just to test if the C, H, M, or P are in the final answer.`
  },
  {
    title: "Neon Factory",
    seoContent: `![Neon Factory](https://www.htmlgames.com/uploaded/game/thumb800/neonfactory800450.webp)

Neon Factory injects a massive dose of frantic, high-speed logistical planning into the classic pipe-connection puzzle genre. Moving away from the slow, methodical pace of a plumber fixing leaks, this title places you in control of a massive, hyper-kinetic cyberpunk manufacturing plant. Your objective is intensely focused: rapidly rotate a chaotic jumble of glowing, geometric conduits to build an unbroken energy pipeline from the power source to the extraction point before the system completely overloads. The atmosphere is deeply kinetic and demands a completely new type of spatial awareness, forcing you to constantly calculate rotational geometry under extreme pressure. The visual presentation is highly polished, utilizing crisp, neon-infused laser lines that pop against the dark, industrial background, ensuring perfect readability even when the grid accelerates to a blinding speed. Neon Factory is a pure, uncompromising test of reflex pathfinding and geometric calculation, offering a deeply hypnotic spin on a beloved genre.

## How to Play
* The primary objective is to connect the glowing energy source (the start node) to the designated receiver (the end node) by creating an unbroken path of conduits.
* The grid is filled with various straight, curved, and cross-shaped pipe pieces that are currently disconnected.
* Use your \`Left Mouse Button\` to click on any pipe piece to instantly rotate it 90 degrees clockwise.
* You must rapidly spin the pieces to align their open ends, forging a continuous, glowing pathway across the board.
* The level is successfully completed the exact millisecond the energy reaches the receiver. You must complete the connection before the strict time limit expires.

## Tips and Tricks
* **Work Backwards from the Exit:** Do not just start wildly clicking pieces near the start node. The most effective strategy is to look at the receiver (the end node) and build the pipe backward toward the center of the board. The receiver often only has one or two logical entry points.
* **Ignore the Dead Ends:** The grid will be flooded with dozens of useless, decoy pipe pieces designed to distract you. Trace a direct, mental path from A to B with your eyes, and only rotate the pieces that fall on that specific route. Ignore everything else.
* **Lock the Corners:** Curved pieces (L-shapes) are the absolute most important pieces on the board because they dictate the primary direction of the flow. Identify the corners of your intended path and lock them into position first.
* **Use the Cross Pieces Carefully:** Cross-shaped pieces can carry two separate energy streams that pass *through* each other without mixing. However, they can also act as a simple straight line. Don't overcomplicate them if you just need to go straight.
* **Spam Click (In Emergencies):** If the timer is flashing red and you are one piece away from finishing, don't think about the geometry; just spam-click the final piece as fast as possible until it accidentally aligns.`
  },
  {
    title: "Solitaire Reverse",
    seoContent: `![Solitaire Reverse](https://www.htmlgames.com/uploaded/game/thumb800/solitairereverse800450.webp)

Solitaire Reverse fundamentally breaks the deeply ingrained psychological rules of classic Klondike, taking the universally recognized card-sorting mechanics and flipping them entirely upside down. Instead of the standard gameplay loop where you start with a massive, messy tableau and slowly build organized foundation piles upward from Ace to King, this title forces you to execute the exact opposite sequence. You begin with the foundations perfectly completed, and you must deliberately dismantle them, pulling cards backward onto a chaotic tableau while building sequences *upward* in alternating colors. The atmosphere is deeply calculating and incredibly disorienting; years of solitaire muscle memory will actively fight against your every move. The visual presentation is highly polished, utilizing crisp, classic playing card graphics set against a traditional green felt backdrop, ensuring perfect readability even when your brain is struggling with the reversed logic. Solitaire Reverse is a brilliant, uncompromising test of cognitive flexibility and sequence planning.

## How to Play
* The primary objective is to move all 52 cards from the four completed foundation piles down onto the main tableau.
* **The Reversed Tableau Rules:** Unlike normal Klondike, you must build sequences on the tableau UPWARD in numerical order (e.g., placing a Red 9 on a Black 8), alternating colors.
* Use your \`Mouse\` to click and drag cards from the foundations down to the columns.
* The stock pile acts completely differently; you can draw cards from the tableau and place them into the discard pile if they match specific rules.
* You win the game when the foundations are entirely empty and the tableau is perfectly organized according to the reversed ruleset.

## Tips and Tricks
* **Fight Your Instincts:** The hardest part of this game is stopping yourself from building downward. You will constantly try to put a 7 on an 8. You MUST actively chant "build up, build up" in your head. You are placing an 8 on a 7.
* **Unpack the Foundations Evenly:** Do not pull all the Spades off the foundation while leaving the Hearts untouched. Pulling cards evenly across all four suits gives you the maximum number of alternating-color options on the tableau.
* **Empty Columns are Still Gold:** Just like normal solitaire, an empty column on the tableau is your most powerful tool. It allows you to start a brand new sequence from the bottom up.
* **Plan the Alternating Colors:** If you pull a Black 4 off the foundation, you MUST ensure you have a Red 3 already on the tableau to place it on, or a blank column. If you don't, you will lock the board.
* **Take It Slow:** Your brain will want to play this at the lightning speed of normal Klondike. Do not do that. Treat every single move like a chess match, verifying the reverse-logic before releasing the mouse button.`
  },
  {
    title: "Bounce Ball 2",
    seoContent: `![Bounce Ball 2](https://www.htmlgames.com/uploaded/game/thumb800/bounceball2800450.webp)

Bounce Ball 2 delivers a brilliant, highly physics-driven evolution of the classic arcade platformer, stripping away complex combat and inventory systems to focus entirely on momentum, trajectory, and pixel-perfect jumping. Set against a clean, visually vibrant geometric world, you are placed in control of a perpetually bouncing red sphere. Your objective is elegantly simple yet brutally difficult in execution: navigate the constantly shifting, trap-filled obstacle courses to reach the exit portal. The atmosphere is intensely kinetic; you cannot simply stop and stand still. The ball is always bouncing, forcing you to constantly react to incoming spikes, moving platforms, and impassable walls while desperately trying to snag highly valuable keys. The visual presentation is highly polished, utilizing crisp, high-contrast colors that ensure the dangerous traps are perfectly readable against the background. The physics engine is exceptionally well-tuned, making the weighty momentum and predictable arc of the ball feel incredibly satisfying. Bounce Ball 2 is a pure, unadulterated shot of arcade platforming perfection.

## How to Play
* The primary objective is to guide the bouncing ball through the obstacle course and safely into the exit portal at the end of the level.
* The ball bounces vertically automatically and perpetually; you cannot stop it from bouncing.
* Use the \`Left\` and \`Right\` arrow keys (or \`A\` and \`D\`) to steer the ball horizontally in mid-air.
* You must actively steer the ball over deadly spike pits, across moving platforms, and under crushing ceilings.
* Touching any spike or hazard results in instant death and a level restart.
* Some levels require you to collect specific gold keys hidden in the map to unlock the doors blocking the exit portal.

## Tips and Tricks
* **Master the Short Hop:** You don't always want maximum height. By gently tapping the directional keys against a low ceiling or a wall, you can intentionally stunt the ball's bounce, keeping it low to the ground to slide under dangerous traps.
* **Follow the Coins:** Game designers often use trails of collectible coins or rings to implicitly guide you through the absolute safest, mathematically perfect trajectory. If you don't know the jump arc, follow the shiny objects.
* **Observe Before Moving:** The ball bounces in place perfectly safely. If you encounter a complex section of moving platforms, do not immediately rush forward. Bounce in place for five seconds and memorize the exact timing loop of the traps.
* **Use the Momentum:** If you hold the directional key while falling, you gain massive horizontal momentum for your next bounce. Use this to clear incredibly wide spike pits that a standard jump cannot reach.
* **Don't Oversteer:** At high speeds, a tiny tap of the arrow key is enough to move you significantly. Don't hold the key down and slam yourself into the spikes.`
  },
  {
    title: "Terra Mahjong",
    seoContent: `![Terra Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/terramahjong800450.webp)

Terra Mahjong plunges the ancient, highly structured mechanics of traditional Chinese tile-matching into a breathtaking, deeply atmospheric geological environment. Moving far beyond the sterile, flat green felt of standard solitaire games, this title constructs massive, complex architectural pyramids using beautifully illustrated tiles depicting rare gemstones, ancient fossils, and glowing crystalline structures. The atmosphere is incredibly relaxing and immersive, trading the tense ticking clocks of arcade games for the soothing, ambient sounds of deep earth excavation. You are tasked with analyzing towering, overlapping tile structures, meticulously searching for exposed pairs to dismantle the board like a digital archaeologist. The visual presentation is exceptionally polished, utilizing earthy, rich color palettes and dynamic lighting effects that simulate sunlight striking raw minerals, ensuring the puzzle remains perfectly readable even when the board is massively congested. Terra Mahjong is a highly successful thematic reskin, proving that a timeless puzzle formula can be completely refreshed with a strong, cohesive artistic vision.

## How to Play
* Your objective is to completely clear the entire screen by matching identical pairs of earth-themed tiles.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles heavily overlap, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden tiles buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, you lose.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Memorize the Categories:** Unlike traditional Mahjong, Terra features groups of tiles (like different types of raw quartz or different types of fossils) that can be matched with each other, even if they aren't identical. Learn these groups instantly.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach ruby tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a ruby tile buried deep in the center tower.
* **Use the Reshuffle (If Available):** Treat the shuffle button like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably dead.`
  },
  {
    title: "Cube Buster",
    seoContent: `![Cube Buster](https://www.htmlgames.com/uploaded/game/thumb800/cubebuster800450.webp)

Cube Buster strips the highly saturated block-breaking genre down to its absolute, most viscerally satisfying core, delivering a pure, unadulterated test of spatial cascade optimization. Moving away from the slow, methodical swiping of Match-3 games, this title embraces a chaotic, tap-to-destroy mechanic that rewards speed and massive chain reactions. Set against a clean, visually vibrant grid, you are presented with a massive wall of tightly packed, brightly colored cubes. Your objective is intensely focused: locate clusters of identically colored cubes and tap them to instantly obliterate them, causing the entire structure above to collapse downward under gravity. The atmosphere is deeply kinetic and immensely satisfying, perfectly capturing the arcade joy of demolition. The visual presentation is highly polished, utilizing crisp, geometric textures and spectacular, screen-shaking particle effects whenever a massive cluster is destroyed. Cube Buster is a pure test of rapid pattern recognition, forcing you to calculate how the board will settle after every single explosive tap.

## How to Play
* The primary objective is to clear the entire grid of colored cubes before you run out of valid moves.
* Use your \`Left Mouse Button\` to click on any connected cluster of two or more identical, same-colored cubes.
* The entire clicked cluster will instantly explode and vanish from the board.
* Gravity will immediately pull the remaining cubes directly above the explosion straight down to fill the empty space.
* If an entire vertical column is cleared, the remaining columns will usually slide horizontally to the center to close the gap.
* The level is won when the board is completely clear. The game is lost if you are left with isolated, single cubes of different colors that cannot be matched.

## Tips and Tricks
* **Work from the Top Down (Usually):** Unlike Match-3 games where you want to work from the bottom to cause random cascades, in Cube Buster, clicking a massive cluster at the bottom of the screen will violently scramble the entire board above it, often ruining carefully planned clusters. Try to peel the board from the top down to maintain control.
* **Build Massive Clusters:** Do not click a group of three red cubes if there is a way to safely merge them into a group of ten red cubes by destroying a few blue cubes separating them. Massive clusters yield exponentially higher scores.
* **Watch the Singletons:** Your absolute biggest threat is ending up with a single, isolated yellow cube on the far left side of the board. Always try to keep colors grouped together. If you see a singleton, prioritize moving other blocks to rescue it.
* **Calculate the Slide:** When you clear an entire column, the board slides together. Use this mechanic intentionally to force a cluster of green blocks on the left to merge with a cluster of green blocks on the right.
* **Don't Panic Click:** There is usually no timer. Take a deep breath, analyze the board, and predict exactly where every block will fall *before* you click.`
  },
  {
    title: "Memory Mahjong",
    seoContent: `![Memory Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/memorymahjong800450.webp)

Memory Mahjong brilliantly fuses the highly structured, geometric unblocking mechanics of traditional Chinese tile-matching with the brutal cognitive demands of a classic "Concentration" memory game. Moving entirely away from the relaxing, open-information gameplay of standard Mahjong Solitaire, this title forces you to navigate complex, overlapping 3D pyramids where every single tile is placed face-down. The atmosphere is deeply calculating and immensely challenging; the puzzle isn't just about finding a free tile on the outer edge, it's about remembering exactly which symbol you exposed under that tile three minutes ago. The visual presentation is exceptionally clean, utilizing crisp, high-definition tiles featuring vibrant icons that pop against the dark wood background when briefly flipped. The genius of Memory Mahjong lies in its combination of spatial strategy and short-term retention, creating an experience that is vastly more demanding and intellectually stimulating than standard matching games.

## How to Play
* The objective is to completely clear the multi-layered 3D structure of tiles from the main board.
* All tiles begin face-down, hiding their symbols.
* Use your \`Left Mouse Button\` to click any fully exposed (unblocked) face-down tile to flip it over and reveal its symbol.
* Click a second exposed, face-down tile to reveal it.
* **The Golden Rule:** A tile is strictly considered "exposed" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* If the two revealed symbols perfectly match, both tiles are permanently removed from the board, unlocking the tiles underneath them.
* If they do not match, they will briefly remain face-up before flipping back over, forcing you to memorize their locations.

## Tips and Tricks
* **The "Sweep" Method:** Do not click randomly. On your very first few turns, methodically click the absolute top-most tiles, then move down layer by layer. Your initial goal isn't to find matches; your goal is to map the top layer in your head.
* **Create Mental Stories:** If you flip a "Dragon" on the left peak, and a "Flower" on the right peak, create a weird mental image to link them physically (e.g., "The dragon is eating the flower across the valley"). This makes retrieval much easier.
* **Don't Guess on the Second Tile:** If you flip a tile and reveal a "Bamboo," and you *think* you remember seeing another bamboo, but you aren't sure where, DO NOT click randomly. Only click the second tile if you are 100% certain. Otherwise, flip a completely unknown tile to gather new information.
* **Prioritize the Peaks:** Always focus your matching efforts on breaking down the highest, thickest stacks of tiles on the board to reveal the massive amount of hidden tiles underneath.
* **Patience is Key:** The tiles flip back over relatively quickly. Do not rush to make your next move. Take a breath, visualize the board, and commit the two failed images to memory before proceeding.`
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
