const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Apartment Match",
    seoContent: `![Apartment Match](https://www.htmlgames.com/uploaded/game/thumb800/apartmentmatch800450.webp)

Apartment Match introduces a delightfully quirky and highly original spin on the classic stacking puzzle genre, demanding a unique blend of spatial awareness and rapid strategic planning. In a refreshing departure from standard gem-swapping or block-falling mechanics, this game puts you in the role of an eccentric city planner tasked with stacking entire apartment blocks to create massive, sky-high combos. The aesthetic is incredibly charming, trading traditional abstract shapes for detailed, miniaturized residential buildings, each boasting its own distinct architectural style and vibrant color scheme. The core gameplay loop is utterly hypnotic; it requires you to not only match similar buildings but to manage the physical verticality of your sprawling cityscape before it topples over or breaches the skyline limit. It is a pure, unadulterated test of vertical puzzle management, completely free from convoluted upgrade systems or unnecessary narrative bloat. The visual style is crisp and modern, with incredibly smooth drop animations and satisfying visual cues that make every successful clear feel like a monumental architectural achievement.

## How to Play
* The game drops various types of apartment blocks from the top of the screen, which you must stack intelligently.
* Use the \`Left\` and \`Right\` arrows (or \`A\` and \`D\`) to move the falling apartments horizontally across the skyline.
* Press the \`Down\` arrow or \`S\` to accelerate the drop speed of the current apartment block.
* When three identical apartment blocks are stacked directly on top of each other, they will instantly match and disappear.
* The game ends if your stacked buildings reach the red warning line at the absolute top of the screen.

## Tips and Tricks
* **Keep it Level:** Avoid creating massive, single towering skyscrapers. A flat, evenly distributed skyline gives you vastly more options for placing unexpected pieces.
* **Plan for the Cascade:** If you have two red apartments on top of a blue one, and you drop a third red apartment, the red stack will clear, dropping anything above it onto the blue. Use this to create chain reactions!
* **Memorize the Queue:** Always keep your eyes glued to the "Next Piece" indicator. Knowing what apartment is coming next dictates where you should place the current one.
* **Don't Panic Drop:** While the \`Down\` key is useful for speeding up gameplay, using it recklessly will inevitably lead to misplacements. Only hard-drop when you are 100% certain of the placement.
* **Color Grouping:** Try to designate specific columns for specific colors early in the game to prevent a chaotic, unmanageable board state.`
  },
  {
    title: "Happy Farm",
    seoContent: `![Happy Farm](https://www.htmlgames.com/uploaded/game/thumb800/happyfarm800480.webp)

Happy Farm delivers a massive, 150-level deep dive into the beloved tile-matching genre, wrapping incredibly tight puzzle mechanics in a delightfully wholesome agricultural aesthetic. Stepping away from the hyper-competitive nature of modern arcade games, Happy Farm invites players to a sun-drenched, beautifully illustrated virtual countryside where strategic thinking is rewarded over rapid-fire reflexes. The game boasts an impressive volume of content, with each level introducing subtle new layouts and constraints that force you to constantly adapt your matching strategies. The atmosphere is undeniably relaxing, driven by charming artwork of farm animals, vibrant crops, and rustic tools, completely devoid of stressful timers or punishing fail states. It is a pure, unadulterated test of spatial planning and cascade prediction. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition tiles that pop off the screen, ensuring that the puzzle grid remains perfectly readable even during the most complex, screen-clearing combos. Happy Farm is a triumph of accessible yet deeply engaging puzzle design.

## How to Play
* The goal is to clear the board by matching blocks of two or more identical farm-themed tiles.
* Simply use your \`Mouse\` to click on any valid cluster of adjacent, matching tiles to instantly harvest them.
* Earning points fills up your star meter at the top of the screen. You must earn at least one star to progress.
* The level ends when you either run out of possible matches, or successfully clear the required amount of tiles.
* Larger clusters of matched tiles yield exponentially higher scores and generate powerful board-clearing power-ups.

## Tips and Tricks
* **Hunt for the Massive Clusters:** Do not immediately click small groups of two or three. Scan the board to see if clearing a small group will drop other identical tiles together to form a massive, 10+ tile cluster.
* **Work from the Bottom:** Always prioritize matches at the bottom of the grid. This maximizes the number of tiles that shift downward, heavily increasing your chances of triggering accidental, free combos.
* **Save the Power-Ups:** When you generate a bomb or a line-clear power-up, do not use it immediately. Save them for the end of the level to clear out isolated, unmatchable tiles.
* **Calculate the Shift:** Before clicking a group in the middle of the board, take a second to visualize how the columns above it will fall.
* **Aim for Three Stars:** While one star lets you progress, aiming for three stars forces you to play optimally, completely changing how you approach the board.`
  },
  {
    title: "Chaos Mahjong",
    seoContent: `![Chaos Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/chaosmahjong800450.webp)

Chaos Mahjong violently shatters the slow, methodical traditions of the ancient Chinese tile game, injecting it with an unprecedented level of kinetic energy and drag-and-drop urgency. In a brilliant departure from the standard "click and click" matching systems, this game introduces a highly tactile, intensely satisfying physics-based drag mechanic that completely revitalizes the genre. You are no longer just observing the board; you are physically interacting with it, ripping tiles from their stacks and slamming them together to forge matches. The atmosphere is surprisingly intense for a solitaire game, demanding sharp visual memory and rapid mouse movements as you dismantle complex, multi-layered pyramids of beautifully illustrated tiles. The visual presentation is a standout, boasting high-definition, traditional Mahjong iconography juxtaposed against incredibly smooth, modern drag-and-drop animations. The board feels alive, and the satisfying "clack" of two tiles colliding provides a constant stream of dopamine. Chaos Mahjong is a masterclass in modernizing a classic, proving that even the oldest formulas can be completely reinvigorated with a single, brilliant mechanical twist.

## How to Play
* Your primary objective is to completely dismantle the towering puzzle structure by matching identical pairs of tiles.
* Unlike traditional Mahjong, you must physically click, hold, and \`Drag\` a free tile across the screen.
* Drop the dragged tile directly on top of an identical free tile to instantly eliminate both from the board.
* A tile is only considered "free" and playable if it has no other tiles resting on top of it, and is unblocked on at least one side (left or right).
* You must clear the entire board before you run out of valid, accessible matches.

## Tips and Tricks
* **Prioritize the Peaks:** Always focus your efforts on dismantling the highest, thickest stacks of tiles first. Leaving massive towers for the end game is a guaranteed way to run out of moves.
* **Unlocking is Key:** Don't just match the first pair you see. Look for pairs that, when removed, will free up two or three new, critically important tiles hidden beneath them.
* **Scan the Edges:** The outermost edges of the puzzle structure usually contain the highest number of "free" tiles. Use them strategically to dig into the center.
* **Memorize the Symbols:** Take a moment to familiarize yourself with the more complex Chinese characters and seasonal tiles so you don't waste time scanning for matches.
* **Use the Drag Mechanic to Peak:** You can pick up a tile and drag it out of the way just to see what the board looks like underneath it, before snapping it back to its original position.`
  },
  {
    title: "Connect 3 - Easter",
    seoContent: `![Connect 3 - Easter](https://www.htmlgames.com/uploaded/game/thumb800/connect3-easter800450.webp)

Connect 3 - Easter injects a massive dose of vibrant, springtime energy into the highly competitive line-drawing puzzle genre, delivering a visual feast of pastel colors and intensely satisfying combination mechanics. Stepping away from the rigid grid-swapping of traditional match-3 games, this title embraces a much more fluid, tactile approach, requiring players to physically draw winding paths through dense clusters of beautifully decorated Easter eggs. The atmosphere is undeniably joyful and celebratory, perfectly capturing the essence of the holiday without sacrificing the deep, strategic complexity that hardcore puzzle fans demand. Every level is a meticulously designed challenge, presenting specific objective quotas that must be met within a strict move limit. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition egg sprites that crackle with magical energy when linked together. The particle effects and satisfying audio cues that accompany a massive, 15-egg chain reaction are nothing short of spectacular. It is a pure, unadulterated test of spatial planning and line optimization.

## How to Play
* Your objective is to fulfill specific level goals (e.g., collect 20 blue eggs) before you completely run out of moves.
* Use your \`Mouse\` to click on an egg, then drag a line through adjacent, identically colored eggs to link them together.
* You can link eggs horizontally, vertically, and most importantly, diagonally, allowing for massive, winding chains.
* Release the mouse button to collect all linked eggs, causing the grid to collapse and new eggs to fall from the top.
* Linking massive chains of eggs will spawn powerful, row-clearing explosive eggs on the board.

## Tips and Tricks
* **Always Look for the Longest Path:** Never settle for a simple three-egg link if a five-egg link is available. Take your time, trace the path with your eyes, and maximize every single move.
* **Master the Diagonal:** The ability to link diagonally is your most powerful tool. It allows you to weave through seemingly blocked sections of the board to connect massive clusters.
* **Focus on the Objective:** It is incredibly easy to get distracted by a massive chain of yellow eggs, but if your objective is only blue eggs, you are wasting a precious move.
* **Build Bombs Strategically:** Try to end your massive chains near clusters of objective eggs. The explosive power-up will spawn exactly where you release your mouse button.
* **Clear the Bottom First:** Just like all gravity-based puzzle games, clearing eggs at the bottom of the screen maximizes the cascading effect, often resulting in free matches.`
  },
  {
    title: "Hangman",
    seoContent: `![Hangman](https://www.htmlgames.com/uploaded/game/thumb500/hangman500.webp)

Hangman strips the vocabulary puzzle genre down to its absolute, most brutal core, delivering a raw, tension-fueled test of linguistic knowledge and deductive reasoning. In an era dominated by flashy, over-complicated word games, this title beautifully resurrects the intimate, highly competitive nature of the classic pen-and-paper classroom staple. Set against a clean, visually minimalist chalkboard backdrop, the game tasks you with deciphering complex English words before a morbid stick figure meets its grim fate. The atmosphere is purely intellectual; there is no narrative fluff, no complex power-ups, and no microtransactions. It is a pure test of your vocabulary, spelling proficiency, and ability to recognize common phonetic patterns. The visual style is highly appealing in its simplicity, utilizing incredibly crisp typography and snappy animations that ensure the letter selection grid remains perfectly readable. The brilliance of Hangman lies entirely in its uncompromising dedication to core puzzle mechanics and a steadily increasing difficulty curve that forces players to carefully weigh the statistical probability of every single keystroke.

## How to Play
* The primary objective is to guess the hidden English word by selecting letters one at a time.
* Use your \`Mouse\` to click on letters from the on-screen alphabet grid, or type directly using your keyboard (\`A\`-\`Z\`).
* Every time you guess a correct letter, it will be revealed in its proper position within the hidden word.
* Every time you guess an incorrect letter, a new body part is added to the hanging stick figure.
* If you successfully guess the word before the stick figure is completely drawn, you win. If the drawing is finished, you lose.

## Tips and Tricks
* **Start with the Vowels:** Always begin your game by guessing \`A\`, \`E\`, \`I\`, \`O\`, or \`U\`. Nearly every word in the English language contains at least one vowel, giving you an immediate structural foothold.
* **Hunt for Common Consonants:** After securing the vowels, target statistically dominant consonants like \`T\`, \`S\`, \`R\`, \`N\`, and \`L\`.
* **Analyze Suffixes:** If you reveal an \`I\` followed by a blank and a \`G\`, it is highly probable the word ends in \`I\`, \`N\`, \`G\`. Guess the \`N\` immediately.
* **Look for Double Letters:** Certain blanks often indicate double consonants (like "LL" or "SS"). If you guess an \`S\` and it appears twice in a row, you've gained massive insight.
* **Pace Yourself:** There is no time limit. Do not blindly click letters. Stop, look at the blanks, and mentally run through possible dictionary words.`
  },
  {
    title: "Istanbul Hidden Objects",
    seoContent: `![Istanbul Hidden Objects](https://www.htmlgames.com/uploaded/game/thumb800/istanbulhiddenobjects800450.webp)

Istanbul Hidden Objects is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating core. Forget convoluted detective storylines or unnecessary mini-games; this title is a pure, unadulterated shot of cultural immersion focused entirely on acute visual observation and spatial awareness. You are placed directly into a series of stunningly detailed, high-definition photographs showcasing the bustling markets, ancient architecture, and vibrant streets of Istanbul, tasked with locating a specific list of cleverly concealed artifacts. The atmosphere is intoxicatingly rich, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, colorful textiles, and complex geometry. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy corner, market stall, and mosaic tile is rendered with breathtaking clarity. The sensation of discovery is incredibly well-executed, making every successfully located item feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main image.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will result in a heavy point penalty.
* You must find all the hidden objects before the strict time limit expires to advance to the next location in Istanbul.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire image at once. Mentally divide the screen into four quadrants and meticulously search one corner before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color.
* **Check the Shadows:** The developers love hiding dark objects inside the shadows of buildings or underneath market stalls. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a teapot, you will accidentally spot the hidden cat.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Bubble Shooter",
    seoContent: `![Bubble Shooter](https://www.htmlgames.com/uploaded/game/thumb800/bubbleshooter-800.webp)

Bubble Shooter strips the arcade puzzle genre down to its absolute, most legendary core, delivering a raw, geometry-fueled tactical experience that is perfectly suited for intense, endless gaming sessions. In an era dominated by bloated, microtransaction-heavy mobile clones, this game beautifully resurrects the intimate, highly competitive nature of pure trajectory calculation and cluster management. Set against a clean, visually minimalist backdrop, the game tasks you with aiming and firing colored orbs to dismantle a massive, descending ceiling of bubbles before it crushes you. The atmosphere is purely competitive; there is no narrative fluff, no complex tech trees, and no distractions. It is a pure test of spatial geometry, bank-shot calculations, and predicting the board's cascade. The visual style is highly appealing, utilizing incredibly crisp sprites and snappy animations that ensure the puzzle grid remains perfectly readable even when dozens of bubbles are shifting and popping in chaotic chain reactions. The brilliance of Bubble Shooter lies entirely in its uncompromising dedication to core puzzle mechanics and a steadily increasing pressure curve.

## How to Play
* The primary objective is to clear the entire ceiling of bubbles by firing your own bubbles into matching clusters.
* Use your \`Mouse\` to aim the directional cannon, and click the \`Left Mouse Button\` to fire a bubble.
* When your fired bubble connects with a cluster of two or more bubbles of the exact same color, they will all pop and disappear.
* Any bubbles that were exclusively hanging onto the popped cluster will become disconnected and drop off the screen for massive bonus points.
* If you fail to make a match after several shots, the entire ceiling will shift downward. If the bubbles touch the bottom of the screen, you lose.

## Tips and Tricks
* **Master the Wall Bounce:** Do not just aim straight up. Learn to bounce bubbles off the left and right walls to slip them into impossible, tight spaces behind the front lines.
* **Sever the Root:** Never aim for the bottom-most bubbles if you can avoid it. Always aim higher up to destroy the "root" bubbles, causing everything hanging below them to collapse instantly.
* **Check Your Ammo:** Always keep one eye on the "Next Bubble" indicator at the bottom. Knowing what color is coming next completely dictates where you should fire your current bubble.
* **Build Support Structures:** Sometimes you have a color you don't need. Fire it off to the far sides of the board where it won't block your central line of sight.
* **Patience is Key:** The worst thing you can do is fire wildly. Take an extra two seconds to properly align your trajectory line before committing to a shot.`
  }
];

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  let updated = 0;
  for (let g of manualData) {
    const res = await Game.findOneAndUpdate(
      { title: g.title },
      {
        $set: {
          curated: true,
          seoContent: g.seoContent
        },
        $unset: { editorRating: 1 }
      }
    );
    if (res) {
      console.log('Successfully updated: ' + g.title);
      updated++;
    }
  }
  console.log('Total updated: ' + updated);
  process.exit(0);
}
run();
