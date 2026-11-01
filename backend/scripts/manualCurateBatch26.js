const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Emoji Match 3",
    seoContent: `![Emoji Match 3](https://www.htmlgames.com/uploaded/game/thumb800/emojimatch3800450.webp)

Emoji Match 3 injects a massive dose of modern, internet-culture flair into the highly competitive tile-swapping genre, delivering a visual feast of expressive icons and intensely satisfying combination mechanics. Stepping entirely away from generic, sterile gem-swapping or ancient artifacts, this title embraces a highly relatable, contemporary thematic approach. You are tasked with physically aligning brightly colored smiley faces, crying-laughing icons, angry faces, and heart-eyes. The atmosphere is undeniably upbeat and engaging, perfectly capturing the frantic energy of a rapidly scrolling group chat. Every level is a meticulously designed challenge, presenting specific objective quotas (like collecting 40 sunglasses emojis or breaking frozen ice blocks off the grid) that must be met within a strict move limit. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition vector sprites that crackle with digital energy when linked together. Emoji Match 3 is a pure, unadulterated test of spatial planning and cascade optimization wrapped in a universal, instantly recognizable aesthetic.

## How to Play
* The core mechanic revolves around swapping adjacent emoji tiles to create horizontal or vertical lines of three or more identical faces.
* Use your \`Mouse\` to click on an emoji, then click an adjacent one to swap their positions, or simply click and drag.
* Your objective is to fulfill specific collection goals displayed at the top of the screen before you run out of allowed moves.
* **The Background Objective:** Many levels feature colored background tiles. You MUST make a successful match *on top* of those specific tiles to shatter the background and clear the level.
* Matching exactly four emojis creates a glowing, line-clearing super-emoji.
* Matching five emojis in an L or T shape creates a devastating area-of-effect bomb.
* Matching five emojis in a straight row creates a magical disco ball that obliterates all emojis of a specific type from the board.

## Tips and Tricks
* **Prioritize the Background:** It is incredibly easy to get distracted by a massive chain of smiling faces, but if that match doesn't shatter a colored background tile, you are wasting a precious move. Focus laser-like on the objective.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading emojis dropping from the ceiling, often resulting in free, accidental combos that accidentally shatter background tiles for you.
* **Combine the Power-Ups:** The most devastating move in the game is swapping two power-ups with each other. Swapping a line-clear with a bomb creates a massive, cross-shaped explosion that clears half the board instantly.
* **Attack the Corners Early:** The hardest background tiles to shatter are the ones tucked into the extreme corners or narrow columns of the grid because very few emojis flow through those areas. Dedicate your early game to breaking the corners.
* **Save the Disco Balls:** Do not use the five-in-a-row item immediately. Save it until you desperately need to collect a specific emoji to meet your quota, or wait to combine it with another power-up.`
  },
  {
    title: "Pinball Breakout",
    seoContent: `![Pinball Breakout](https://www.htmlgames.com/uploaded/game/thumb800/pinballbreakout800450.webp)

Pinball Breakout delivers an absolutely brilliant, genre-defying fusion of two legendary arcade staples, seamlessly blending the chaotic, physics-driven rebounding of classic Pinball with the structural demolition mechanics of Arkanoid. Instead of a standard horizontal paddle moving slowly back and forth, you are placed in control of two high-speed pinball flippers anchored at the bottom of the screen. Above you rests a massive, fortified ceiling of brightly colored bricks. Your objective is intensely focused: you must launch a heavy steel ball into the structure, using the flippers to violently smash it upward, calculating ricochets and trajectory angles to shatter every single brick on the board. The atmosphere is deeply kinetic and incredibly stressful; the ball reacts with genuine weight and gravity, accelerating rapidly as it drops. The visual presentation is highly polished, utilizing crisp, neon-infused graphics and spectacular particle effects when bricks explode. Pinball Breakout is a pure, unadulterated shot of arcade adrenaline that demands flawless reflex timing.

## How to Play
* The primary objective is to destroy the entire ceiling of bricks by smashing them with the steel ball.
* The ball will fall toward the bottom of the screen under the influence of gravity.
* Use the \`Left Arrow\` and \`Right Arrow\` keys (or \`A\` and \`D\`) to actuate the left and right pinball flippers.
* You must time your flipper flips perfectly to strike the falling ball and launch it back up into the bricks.
* If the ball falls through the gap between your flippers and off the bottom of the screen, you lose a life.
* Destroying certain bricks will cause power-ups (like multiball, laser cannons, or larger flippers) to drop. Catch them with your flippers to activate them.

## Tips and Tricks
* **Control the Angle (The Flipper Sweet Spot):** The angle the ball leaves your flipper is determined by *where* it makes contact. Hitting the ball near the base (the hinge) sends it mostly straight up. Hitting it on the extreme tip sends it flying off at a sharp, shallow angle toward the opposite wall.
* **Don't Spam the Flippers:** The most common mistake is rapidly mashing both arrow keys in a panic. If your flippers are constantly raised, you create a massive, permanent gap that the ball will easily slip through. Keep your flippers down, and only strike when necessary.
* **Drill Through the Edges:** The absolute most effective strategy in any Breakout game is to focus entirely on destroying a single column on the extreme left or right side of the board. Once you create a "tunnel," fire the ball up through it. It will bounce frantically across the top of the bricks, destroying dozens instantly.
* **Catch the Ball:** If the ball is falling relatively slowly, you can often "catch" it by raising and holding the flipper, letting the ball roll down the flipper to the base before you release and fire it. This allows for precision aiming.
* **Watch the Multiball Chaos:** When you grab a multiball power-up, the screen will flood with projectiles. Do not try to track all of them. Pick one or two balls and focus exclusively on keeping them alive.`
  },
  {
    title: "Archery Training",
    seoContent: `![Archery Training](https://www.htmlgames.com/uploaded/game/thumb800/acherytraining800450.webp)

Archery Training strips the complex, sprawling simulation genre down to its absolute, most tension-fueled and reflex-dependent core, delivering a pure, unadulterated test of spatial calculation, wind compensation, and marksmanship. Moving away from chaotic combat, this title is entirely focused on the silent, methodical art of hitting a distant bullseye. Set against a beautiful, high-definition digital rendering of a sunny outdoor firing range, players are placed in control of a high-tension recurve bow. Your objective is elegantly simple yet brutally difficult in execution: you must pull the bowstring back, calculate the arc of the arrow, adjust for shifting crosswinds, and release at the perfect millisecond to strike the center of the target. The atmosphere is deeply cinematic and incredibly engaging; the game heavily utilizes a simulated "breathing" mechanic that causes your crosshairs to constantly sway, forcing you to fight your own avatar's physical limitations. The visual presentation is highly polished, utilizing realistic physics and crisp graphics. Archery Training is a flawless, bite-sized tactical experience.

## How to Play
* The primary objective is to score maximum points by hitting the bullseye on the target across multiple rounds.
* Use your \`Mouse\` to click and hold the \`Left Mouse Button\`. This will draw the bowstring back and activate your aiming reticle.
* While holding the button, slowly move your \`Mouse\` to aim the crosshairs at the target.
* **The Physics:** The arrow will NOT fly in a perfectly straight line. Gravity will pull it down (requiring you to aim slightly high), and wind will push it horizontally.
* Release the \`Left Mouse Button\` to fire the arrow.
* The closer you hit to the dead center (the yellow ring), the more points you score.

## Tips and Tricks
* **Watch the Wind Gauge:** This is the most critical piece of information on your screen. A strong crosswind blowing to the right means you MUST aim significantly to the left of the bullseye. The arrow will drift during flight.
* **Calculate the Drop:** The further away the target is, the more gravity will affect the arrow. If the target is distant, aim your crosshairs slightly above the bullseye so the arrow arcs downward into the center.
* **Manage the Sway:** Your character cannot hold the bow perfectly still. The crosshairs will constantly sway in a figure-eight pattern. Do not try to fight it violently. Let the crosshair sway naturally, and time your release for the exact millisecond it crosses the center of the target.
* **Don't Hold Too Long:** If you hold the draw string back for too long, your character's arms will fatigue, and the crosshair sway will become incredibly violent and uncontrollable. Draw, aim quickly, and fire.
* **Aim Small, Miss Small:** Do not aim at "the target." Aim at the absolute microscopic center pixel of the yellow bullseye. If you aim for the center and slightly miss, you still get a high score. If you aim for the whole target and slightly miss, you miss completely.`
  },
  {
    title: "Jewels Kyodai",
    seoContent: `![Jewels Kyodai](https://www.htmlgames.com/uploaded/game/thumb800/jewelskyodai800450.webp)

Jewels Kyodai plunges the ancient, highly structured mechanics of traditional Chinese tile-matching into a breathtaking, deeply atmospheric environment of sparkling gemstones and high-society aesthetics. Moving far beyond the sterile, flat green felt of standard solitaire games, this title constructs massive, complex architectural pyramids using beautifully illustrated tiles depicting incredibly crisp, high-definition diamonds, rubies, sapphires, and emeralds. The atmosphere is incredibly relaxing and immersive, trading the tense ticking clocks of arcade games for a soothing, colorful puzzle environment that feels genuinely luxurious. You are tasked with analyzing towering, overlapping tile structures, meticulously searching for exposed pairs to dismantle the board. The visual presentation is exceptionally polished, utilizing bright, highly saturated color palettes and dynamic lighting effects that simulate light refracting through cut glass, making identifying matching jewels incredibly intuitive, even when the board is massively congested. Jewels Kyodai is a highly successful thematic reskin, proving that a timeless puzzle formula can be completely refreshed with a strong, cohesive, and wealthy artistic vision.

## How to Play
* Your objective is to completely clear the entire screen by matching identical pairs of jewel-themed tiles.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles heavily overlap, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden gems buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, you lose.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach ruby tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a ruby tile buried deep in the center tower.
* **Memorize the Cuts:** Because many of the jewels look slightly similar (e.g., two blue gems with different faceting), take a moment to mentally categorize them by their geometric cut (like "the round one" or "the square one").
* **Use the Reshuffle (If Available):** Treat the shuffle button like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably dead.`
  },
  {
    title: "Solitaire Collection",
    seoContent: `![Solitaire Collection](https://www.htmlgames.com/uploaded/game/thumb800/solitairecollection800450.webp)

Solitaire Collection serves as the ultimate, definitive anthology for hardcore fans of card-sorting puzzles, offering an unprecedented variety of rule sets housed within a single, highly polished digital interface. Moving far beyond the standard Klondike game included with every PC, this massive compilation provides players with an incredibly diverse set of challenges, ranging from the brutal, open-information logic of Freecell and Spider, to highly obscure, localized variants that drastically alter how sequences are built. The atmosphere is immensely satisfying and highly customizable, allowing you to seamlessly switch between intensely demanding cascade math and relaxing, luck-driven matching sessions depending on your mood. The visual presentation is exceptionally crisp, featuring high-definition traditional card sets that ensure perfect readability regardless of which complex layout you are currently playing. Solitaire Collection is not just a game; it is a comprehensive library of card-based brain-training exercises, guaranteeing hundreds of hours of meticulously designed perfection.

## How to Play
* The primary objective varies entirely depending on which of the many Solitaire variations you select from the main menu.
* **Klondike/Freecell/Spider:** Use your \`Mouse\` to click and drag cards between columns, building sequences based on alternating colors or matching suits.
* **Pyramid/TriPeaks:** Click exposed cards to match them mathematically (adding to 13) or sequentially (one higher/one lower) to remove them from a static structure.
* Each specific game mode features a built-in "?" or "Help" button. ALWAYS click this before starting a new variation to understand the specific rules of sequence building and removal.

## Tips and Tricks
* **Read the Rules:** Because this is a collection, the rules change drastically between games. Do not assume you know how to play. A valid move in Klondike might be an illegal move in a different variant.
* **Freecell - Protect the Cells:** Your free cells are your most valuable resource. Never park a card in a free cell unless you have a concrete, multi-step plan to get it back out onto the tableau shortly after.
* **Spider - Empty Columns:** An empty column in Spider Solitaire is the most powerful tool in the game. It allows you to temporarily park massive sequences of cards to unearth the face-down cards buried beneath them.
* **Pyramid - Dig Evenly:** Do not drill a deep hole down one specific side of the pyramid. Try to peel cards away evenly across the entire structure to maximize exposed cards.
* **Use the Undo Button:** Many of the harder variations in this collection are mathematically unwinnable if you make a single wrong move. Use the undo button to scout paths before committing.`
  },
  {
    title: "Fantasy - Hidden Stars",
    seoContent: `![Fantasy - Hidden Stars](https://www.htmlgames.com/uploaded/game/thumb800/fantasyhiddenstars800450.webp)

Fantasy - Hidden Stars is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and magical core. Forget convoluted detective storylines or messy rooms; this title is a pure, unadulterated shot of visual immersion focused entirely on acute observation. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing soaring dragons, glowing enchanted forests, mystical castles, and ethereal elves. Your objective is elegantly simple: locate the subtle, five-pointed star shapes expertly blended into the fantasy environment. The atmosphere is intoxicatingly rich and incredibly cozy, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, glowing magic spells, and complex geometry. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy cavern and glowing mushroom is rendered with breathtaking clarity. The sensation of discovery is incredibly well-executed, making every successfully located star feel like a genuine triumph of perception.

## How to Play
* Your objective is to find every single five-pointed star hidden within the main high-definition image of the fantasy scene.
* Use your \`Mouse\` to carefully scan the high-definition scene. The stars are often heavily camouflaged, matching the color and texture of the trees or magic they are hidden on.
* Click directly on a star when you spot it to collect it.
* The counter at the top of the screen displays exactly how many stars are left to find in the current level.
* Be precise! Randomly spam-clicking around the screen will often result in a time penalty or a temporary point deduction.

## Tips and Tricks
* **Look for Geometry, Not Just Color:** The developers are experts at camouflaging the stars. A star hidden on a dragon's wing will be scaled and textured like the wing. Stop looking for bright, contrasting objects and start looking for the strict, geometric outline of a five-pointed star.
* **Divide the Screen:** Do not try to scan the entire massive image at once; it will overwhelm your eyes. Mentally divide the screen into four quadrants and meticulously search one corner before moving to the next.
* **Check the Architecture:** The sharp points of a star are often perfectly hidden within the overlapping branches of an ancient tree, the jagged rocks of a cavern, or the geometric patterns of a castle window.
* **Adjust Your Brightness:** Because this game relies heavily on subtle shading and glowing effects to hide the objects, ensure your monitor brightness is properly calibrated.
* **Step Back:** If you are completely stuck on the final star, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the hidden geometric shape suddenly pop out.`
  },
  {
    title: "Pyramid Solitaire - Ancient Egypt",
    seoContent: `![Pyramid Solitaire - Ancient Egypt](https://www.htmlgames.com/uploaded/game/thumb800/pyramidsolitaireancientegypt800450.webp)

Pyramid Solitaire - Ancient Egypt completely re-invents the complex, alternating-color mechanics of standard card sorting by stripping it down to a brutally elegant, mathematically pure game of addition, all wrapped in a visually stunning, historically immersive aesthetic. Moving away from the green felt of a casino, this title constructs a massive, overlapping triangular structure of cards designed to perfectly mimic the iconic architecture of Giza. Your objective is intensely focused: completely dismantle the Great Pyramid by pairing exposed cards that mathematically add up to exactly thirteen. The atmosphere is deeply calculating but incredibly thematic, trading intense arcade pressure for a soothing, ambient puzzle environment complete with desert winds and ancient iconography. The visual presentation is exceptionally polished, utilizing crisp, custom-themed card art featuring pharaohs and scarabs that ensures perfect readability even when the massive stone structure is heavily congested. It is a masterclass in taking a simple arithmetic concept and turning it into a highly addictive, monumental puzzle experience.

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
    title: "Mahjong 3D Connect",
    seoContent: `![Mahjong 3D Connect](https://www.htmlgames.com/uploaded/game/thumb800/mahjong3dconnect800450.webp)

Mahjong 3D Connect completely shatters the rules of traditional pathfinding puzzles (like Onet or Kyodai) by ripping the 2D grid off the screen and forcing players to navigate a massive, fully rotatable 3D geometric cluster across 40 increasingly complex levels. You are not just looking at a flat image of tiles; you are actively spinning a floating monolith of glowing, high-tech cubes in three-dimensional space. Your objective is to find matching pairs, but the connections must be drawn through the empty space *surrounding* the 3D structure, strictly adhering to the classic "maximum of two 90-degree corners" rule. The atmosphere is deeply calculating and demands an entirely new level of spatial awareness; you must constantly spin the board to verify line of sight. The visual presentation is exceptionally polished, utilizing crisp, futuristic graphics that ensure the puzzle remains perfectly readable even when rotating rapidly. Mahjong 3D Connect is a brilliant, uncompromising evolution of the matching genre that will completely test your spatial reasoning.

## How to Play
* The primary objective is to completely dismantle the floating 3D structure by matching identical cubes before the timer expires.
* Use your \`Mouse\` (or arrow keys) to physical rotate the entire 3D puzzle cluster 360 degrees in any direction.
* Click an exposed cube to select it, then click a matching cube to attempt a connection.
* **The Golden Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two cubes through the empty space outside the cluster, using a maximum of three straight lines (two 90-degree corners).
* If a path cannot be drawn without clipping through another cube in the 3D structure, the match is invalid.

## Tips and Tricks
* **Rotate Constantly:** You cannot solve this puzzle by staring at one side. You must constantly spin the structure after every single move to see if your removal unblocked a new cube on the opposite side of the cluster.
* **Clear the Protruding Corners:** Cubes sticking out of the sharpest corners of the 3D structure are the easiest to connect, because their path can route freely through the massive empty space surrounding the puzzle. Clear the sharp edges instantly.
* **Look for the "U" Shape in 3D:** The two-turn rule allows for a perfect "U" shape connection. If two identical cubes are on the same flat plane, but separated by other cubes, check if there is empty space directly above or below both of them to draw the U through the air.
* **Don't Tunnel Vision:** If you can't find a path for two specific cubes, stop looking at them. Spin the board 180 degrees and look for an obvious, free match on the back to keep the board moving.
* **Understand the Hitboxes:** A line cannot graze the corner of another cube. The path must be entirely clear. If the line turns red, spin the board to see exactly which cube is blocking your route.`
  },
  {
    title: "Water Pouring Puzzle",
    seoContent: `![Water Pouring Puzzle](https://www.htmlgames.com/uploaded/game/thumb800/waterpouringpuzzle800450.webp)

Water Pouring Puzzle fundamentally strips the spatial logic genre down to its absolute, most mathematically pure and elegantly simple core, delivering a digital adaptation of the classic "Die Hard with a Vengeance" jug riddle. Set against a clean, visually minimalist laboratory aesthetic, players are presented with a series of glass beakers of varying, specific capacities (e.g., a 5-liter jug and a 3-liter jug). Your objective is intensely focused and heavily reliant on sequence planning: you must pour water between the jugs, strategically filling and emptying them, until exactly one jug holds a very specific, requested target amount of water (e.g., exactly 4 liters). The atmosphere is deeply calculating and immensely satisfying, relying entirely on your ability to visualize mathematical remainders. The visual presentation is highly functional, utilizing crisp, high-contrast neon water that realistically sloshes to ensure the fluid levels are perfectly readable. Water Pouring Puzzle is a pure, unpressured test of arithmetic logic and logistical foresight.

## How to Play
* The primary objective is to manipulate the water levels until one specific cup holds the exact "goal" amount displayed on the screen.
* You are presented with several cups of different, fixed capacities.
* Use your \`Mouse\` to click on a cup to select it as the "source."
* Click on a second cup to select it as the "destination."
* **The Pouring Rules:** The water will pour from the source cup into the destination cup until either the source cup is completely empty, OR the destination cup is completely full. You cannot stop the pour halfway.
* You often have the option to completely fill a cup from a tap, or completely empty a cup into a drain.

## Tips and Tricks
* **Work with Remainders:** The entire game is based on addition and subtraction. If you fill a 5-liter jug, and pour it into a 3-liter jug until it's full, you are mathematically guaranteed to be left with exactly 2 liters in the large jug (5 - 3 = 2).
* **Don't Be Afraid to Empty:** If a jug has a useless amount of water in it that is blocking your calculations, do not hesitate to dump it entirely down the drain and start fresh.
* **Transfer to Save:** If you successfully isolate 2 liters of water in a large jug, but you need that large jug for your next calculation, transfer the 2 liters into a smaller, unused jug for safekeeping.
* **Think Backwards:** If the goal is 4 liters, ask yourself: "How can I get 4? I can get it if I have 5 liters and pour out 1." Then ask, "How can I isolate exactly 1 liter?" Work the math backward from the goal.
* **Reset Without Penalty:** This is a game of pure logic. If you get confused by the current water levels, hit the restart button immediately. It is often faster to start the sequence over than to try and salvage a messy board.`
  },
  {
    title: "2048 Billiards",
    seoContent: `![2048 Billiards](https://www.htmlgames.com/uploaded/game/thumb800/2048billiards800450.webp)

2048 Billiards brilliantly fuses the mathematical precision of the viral sliding number puzzle with the kinetic, physics-driven rebounding of classic pool. Set against a highly realistic, 3D rendered green felt table, players are tasked with managing a chaotic arrangement of numbered billiard balls. Instead of swiping a grid, you control a cue stick, firing specific numbered balls directly into the pack. When two balls of the EXACT SAME number violently collide, they instantly merge into a single ball of a higher value (e.g., shooting a 4 into a 4 creates an 8). The atmosphere is deeply calculating and incredibly tense; you aren't just trying to calculate sums, you are desperately trying to control the physics engine, calculating ricochets and momentum to prevent the table from overflowing. The visual presentation is exceptionally polished, utilizing crisp, realistic spheres that clack satisfyingly upon impact. 2048 Billiards is a pure, uncompromising test of reflex aiming, spatial logic, and rapid numerical cascade planning.

## How to Play
* The primary objective is to survive as long as possible by merging numbered billiard balls until you reach the target number (usually 2048).
* You control a cue stick (or an aiming arrow) holding a specifically numbered ball.
* Use your \`Mouse\` to aim the trajectory line, utilizing the walls of the table for bank shots.
* Click the \`Left Mouse Button\` to fire your ball with force.
* When your fired ball strikes a ball with the EXACT SAME number, they merge into a single ball with double the value.
* If you miss, your ball simply joins the chaotic pile on the table.
* The game is instantly over if the pile of balls backs up and physically crosses the "foul line" where you are shooting from.

## Tips and Tricks
* **Use the Walls (Bank Shots):** You cannot always shoot straight. You MUST learn to bounce your balls off the left and right cushions to ricochet them into tight, otherwise unreachable gaps to hit buried numbers.
* **Control the Momentum:** Because the balls have physical weight, shooting a ball incredibly hard will cause a violent scramble, often ruining carefully placed numbers. Shoot softly if you only need a simple, delicate merge.
* **Keep the High Numbers Anchored:** Your absolute highest priority is ensuring your largest numbers (64, 128, 256) stay firmly grouped together near the back of the pack. Never shoot a tiny '2' wildly into a massive '256', knocking it out of position.
* **The "Wedge" Shot:** If two identical balls are *almost* touching, firing a heavy ball directly between them can act as a wedge, forcing them apart and shifting the entire pile to create better angles.
* **Look Ahead:** Always pay attention to the indicator showing your *next* ball number. Knowing what you have in reserve completely dictates where you should place your current shot.`
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
