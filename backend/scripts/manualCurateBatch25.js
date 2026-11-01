const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "3D Sort",
    seoContent: `![3D Sort](https://www.htmlgames.com/uploaded/game/thumb800/3d-sort-800x450.webp)

3D Sort completely revolutionizes the massively popular "Triple Match" puzzle genre by shattering the standard flat, 2D layers and plunging players into a beautifully rendered, physics-driven 3D environment. Instead of clicking static tiles off a pyramid, you are presented with a chaotic, jumbled pile of highly realistic 3D objects—toys, fruit, tools, and everyday household items—dumped unceremoniously onto a virtual floor. Your objective is intensely focused: you must rummage through the massive pile, identify three identical objects, and tap them to move them into your limited holding tray, where they will merge and disappear. The atmosphere is deeply calculating and immensely satisfying, perfectly simulating the tactile joy of sorting through a messy drawer. The visual presentation is exceptionally polished, utilizing crisp 3D models with highly realistic collision physics; objects will roll, bounce, and realistically obscure each other, forcing you to actively click and drag items out of the way to find buried matches. 3D Sort is a brilliant, uncompromising test of spatial logic and inventory management.

## How to Play
* The primary objective is to completely clear the entire messy pile of 3D objects before the strict timer expires.
* Use your \`Left Mouse Button\` to tap any fully exposed 3D object in the pile to move it down into your holding tray.
* You can also click, hold, and drag items around the pile to physically dig through it and unearth buried objects.
* Your holding tray can only hold a very limited number of objects (usually 7) at any given time.
* **The Rules of Removal:** When exactly three IDENTICAL objects (e.g., three yellow rubber ducks) are placed anywhere in your holding tray, they will instantly merge and be removed, freeing up crucial space.
* The game is immediately over if your tray becomes completely full without forming a valid match of three.

## Tips and Tricks
* **Never Blindly Click:** The absolute most common mistake is clicking every free object you see just because it's on top. Before clicking a watermelon, you must mentally confirm that you know where the other two watermelons are located in the pile.
* **Manage Your Tray Space:** Treat your holding tray like pure gold. Never have more than four "unmatched" singleton items sitting in your tray at once. Always leave two or three empty slots to dig through the pile for the matches you actually need.
* **Dig for the Third Piece:** If you have two toy cars in your tray, your absolute highest priority is finding the third toy car to clear them. It is acceptable to temporarily fill your tray with blocking items, *provided* that reaching the buried car instantly triggers a clear.
* **Use the Physics:** Don't just rely on tapping. If a massive group of objects is clumped together, grab a heavy item and literally throw it into the pile to scramble it and reveal what is underneath.
* **Focus on the Bulky Items:** Massive items (like a giant teddy bear or a large umbrella) block exponentially more lines of sight than tiny items like keys or coins. Prioritize matching the huge, obstructive items first to open up the pile.`
  },
  {
    title: "Queen of Egypt - Cleopatra's Jewels",
    seoContent: `![Queen of Egypt - Cleopatra's Jewels](https://www.htmlgames.com/uploaded/game/thumb800/queenofegyptcleopatrasjewels800450.webp)

Queen of Egypt - Cleopatra's Jewels injects a massive dose of historical grandeur into the highly competitive tile-swapping genre, delivering a visual feast of ancient riches and intensely satisfying combination mechanics. Stepping entirely away from generic gem-swapping, this title embraces a deeply thematic approach, requiring players to physically align glowing scarabs, ancient Ankhs, golden pyramids, and the Eye of Horus. The atmosphere is undeniably engaging, perfectly capturing the mystery of the pharaohs without sacrificing the deep, strategic complexity that hardcore puzzle fans demand. Every level is a meticulously designed challenge set against stunning Egyptian murals, presenting specific objective quotas (like collecting 40 rubies or dropping a golden artifact to the bottom of the board) that must be met within a strict move limit. The visual style is exceptionally polished, utilizing crisp, high-definition sprites that crackle with magical energy when linked together. It is a pure, unadulterated test of spatial planning, cascade optimization, and historical looting.

## How to Play
* The core mechanic revolves around swapping adjacent Egyptian jewels to create horizontal or vertical lines of three or more identical objects.
* Use your \`Mouse\` to click on a jewel, then click an adjacent one to swap their positions, or simply click and drag.
* Swaps are only permitted if they immediately result in a valid match of three or more.
* Your objective is to fulfill specific collection goals displayed at the top of the screen before you run out of allowed moves.
* Matching exactly four jewels creates a glowing, line-clearing explosive artifact.
* Matching five jewels in an L or T shape creates a devastating area-of-effect bomb.
* Matching five jewels in a straight row creates a mystical sun orb that obliterates all jewels of a specific type from the board.

## Tips and Tricks
* **Prioritize the Objective:** It is incredibly easy to get distracted by a massive chain of green scarabs, but if your objective is to collect blue ankhs, you are wasting a precious move. Focus laser-like on the goal.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading jewels dropping from the ceiling, often resulting in massive, free combos as the board settles.
* **Combine the Power-Ups:** The most devastating move in the entire game is swapping two power-ups with each other. Swapping a line-clear with a bomb creates a massive, cross-shaped explosion that clears half the board instantly.
* **Focus on the Artifacts:** If a level requires you to drop a massive golden artifact to the bottom of the board, do not waste time making matches above it. Every single move should be dedicated to clearing the jewels directly beneath the artifact.
* **Analyze the Sand Blocks:** Pay close attention to the shape of the board. Some levels have unmovable sand blocks. Focus on making matches adjacent to the sand to break those barriers early and open up the board.`
  },
  {
    title: "The Brain Train",
    seoContent: `![The Brain Train](https://www.htmlgames.com/uploaded/game/thumb800/thebraintrain800480.webp)

The Brain Train fundamentally rewrites the rules of the legendary sliding-block logic puzzle (often known globally as Rush Hour), replacing the gridlocked asphalt of a city street with a chaotic, brilliantly colored railroad yard. Set against a clean, top-down isometric grid, players are presented with a massive locomotive traffic jam. Your objective is intensely focused and heavily reliant on sequential planning: you must manually slide massive cargo trains, flatbeds, and passenger cars horizontally or vertically along their specific tracks to clear a direct, unobstructed path for your designated main train to exit the yard. To increase the complexity, the game also incorporates a matching element: pushing three identical train cars together will instantly remove them from the board. The atmosphere is deeply calculating and immensely satisfying, demanding an extreme level of forward-thinking; you aren't just moving pieces randomly, you are executing complex logistical maneuvers where sacrificing a car to a match is often the only way to clear a path. The visual presentation is crisp and functional. The Brain Train is a pure, unpressured test of spatial reasoning.

## How to Play
* The primary objective is to clear a path so your designated primary train can slide through the exit.
* The board is filled with blocking train cars of various lengths.
* Use your \`Mouse\` to click, hold, and drag a train car.
* **The Golden Rule:** Trains can ONLY slide forward or backward along their designated tracks. A horizontal train can only slide left or right. A vertical train can only slide up or down. You CANNOT rotate the trains.
* **The Match-3 Mechanic:** If you slide a train car so that it physically connects with two other IDENTICAL train cars, forming a group of 3 or more, they will instantly vanish from the board, freeing up massive amounts of track space.

## Tips and Tricks
* **Work Backwards from the Exit:** Do not just start wildly sliding trains around the left side of the screen. Look at the exit on the right. What is the *immediate* train blocking the exit? Where does that specific train need to slide? Focus entirely on clearing that one specific blocker first.
* **Utilize the Matches:** Unlike standard sliding block puzzles where pieces remain forever, this game lets you destroy pieces. Look for opportunities to slide identical cars together specifically to remove them from the board entirely, instantly clearing a massive roadblock.
* **The "Shuffle" Maneuver:** Often, a long vertical train blocking the exit cannot be moved down because a horizontal car is in the way. You must move the horizontal car left, slide the vertical one down, move your main train forward, slide the vertical one back up, and move the horizontal one back right just to gain one inch.
* **Don't Trap the Emptiness:** Empty track is your most valuable resource. Do not slide a massive cargo train into a corner unless you mathematically know you won't need that empty space to maneuver a different train later.
* **Use the "Undo" Button (If Available):** This game heavily punishes impulsive moves. If you make a slide that immediately locks the board, undo it and try the alternate path.`
  },
  {
    title: "Fill the Maze",
    seoContent: `![Fill the Maze](https://www.htmlgames.com/uploaded/game/thumb800/fillthemaze800450.webp)

Fill the Maze (often known as Roller Splat or Amaze) delivers a brilliant, highly physics-driven evolution of the classic labyrinth genre, completely stripping away the slow, methodical exploration of standard maze games in favor of a kinetic, momentum-based logic puzzle. Set against a clean, visually minimalist grid, players are placed in control of a heavy, paint-covered sphere trapped inside a winding labyrinth. Your objective is elegantly simple yet brutally difficult in execution: you must rapidly navigate the corridors, leaving a trail of brightly colored paint, until every single empty square of the maze is completely filled with color. The atmosphere is intensely focused; the ball possesses actual weight and momentum. When you push it, it will not stop until it violently hits a wall. You cannot stop mid-corridor. The visual presentation is highly polished, utilizing crisp, contrasting neon colors that ensure the painted paths are perfectly readable against the dark background. Fill the Maze is a pure, unadulterated shot of spatial navigation and route optimization.

## How to Play
* The primary objective is to paint every single square of the maze by rolling the ball over it.
* Use your \`Arrow Keys\` (Up, Down, Left, Right) or \`W, A, S, D\` to exert directional force on the ball. You can also click and drag your \`Mouse\` in a specific direction.
* **The Slide Rule:** Once the ball starts moving, it CANNOT be stopped manually. It will slide continuously in that direction until it physically slams into a wall or a dead end.
* You must carefully calculate your swipes, using the walls as brakes to turn corners and fill every single corridor.
* The level is instantly completed when 100% of the maze is painted.

## Tips and Tricks
* **Work from the Outside In:** Do not just start rolling wildly in the center. Look for the long, unbroken corridors on the absolute outer edges of the maze. Paint the perimeter first to establish your anchor points.
* **Watch the Dead Ends:** The hardest parts of the maze to paint are the tiny, 1x1 dead ends. If you miss a dead end and move past it, it is often incredibly difficult (or impossible) to maneuver the ball back into that exact spot without retracing your entire route. Hit the dead ends immediately when you pass them.
* **Think in Straight Lines:** Because you cannot stop mid-corridor, you must learn to view the maze not as individual squares, but as a series of intersecting, unbreakable straight lines.
* **Don't Trap Yourself:** Before you swipe, visualize where the ball will stop. Will stopping there give you access to a new corridor, or will it force you to swipe back exactly where you came from, achieving nothing?
* **There is No Penalty for Retracing:** Do not panic if you roll over a spot you already painted. It doesn't undo the paint. Sometimes, the only way to reach a specific corner is to slide back over a massive area you already completed.`
  },
  {
    title: "Montana Solitaire",
    seoContent: `![Montana Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/montanasolitaire800450.webp)

Montana Solitaire (often known as Gaps or Spaces) fundamentally rewrites the rules of the massively popular card-sorting genre by completely abandoning the complex, overlapping tableau columns of Klondike in favor of a flat, highly tactical grid-based logic puzzle. Set against a clean, visually uncluttered green felt aesthetic, all 52 cards of a standard deck (minus the 2s) are dealt face-up into four massive horizontal rows, creating four distinct "gaps" or empty spaces. Your objective is elegantly simple yet brutally difficult in execution: you must physically slide cards into the empty gaps to reconstruct the four suits in perfect sequential order, from 3 to King, across the four rows. The atmosphere is deeply calculating and immensely satisfying; you are essentially managing a massive game of musical chairs with playing cards. The visual presentation is highly polished, utilizing crisp, custom-designed playing cards that ensure perfect readability. Montana Solitaire is a pure, unpressured test of sequence planning and bottleneck management.

## How to Play
* The primary objective is to arrange all four suits in perfect numerical order (2 to King) across the four horizontal rows.
* At the start of the game, the four 2s are usually automatically moved to the far left of each row, leaving four empty "gaps" scattered throughout the grid.
* Use your \`Mouse\` to click a card and move it into an empty gap.
* **The Golden Rule:** You can ONLY move a card into an empty gap if it is the EXACT SAME SUIT and EXACTLY ONE VALUE HIGHER than the card sitting immediately to the left of the gap.
* (e.g., If the card to the left of the gap is the 6 of Hearts, you can ONLY move the 7 of Hearts into that gap).
* If a gap is directly to the right of a King, that gap is "dead" and cannot be filled by anything, because nothing is higher than a King.
* If you get stuck, you usually have three "reshuffles" that will randomly scramble all cards that are not yet correctly sequenced.

## Tips and Tricks
* **Work Backwards from the Gaps:** Do not look at the cards; look at the empty spaces. If you have a gap next to a 5 of Spades, find the 6 of Spades immediately. This is the only valid move for that space.
* **Beware the Dead Gaps:** The absolute most common way to lose this game is to create gaps directly to the right of Kings. If all four gaps end up trapped behind Kings, the board is deadlocked and you must reshuffle.
* **Prioritize the Left Side:** Your ultimate goal is to build long, unbroken chains starting from the 2s on the far left. Focus heavily on placing the 3s, 4s, and 5s early. A correctly placed card on the far right of the board is useless if the chain is broken in the middle.
* **Calculate the Cascade:** Moving the 7 of Hearts into a gap will naturally create a NEW gap where the 7 of Hearts used to be. Before you move the 7, look at what card is to the left of its *original* position. Are you creating a useful gap or a dead gap?
* **Use Reshuffles Sparingly:** Never use a reshuffle unless the board is mathematically deadlocked (all gaps behind Kings). Exhaust absolutely every possible move first.`
  },
  {
    title: "Mystery House",
    seoContent: `![Mystery House](https://www.htmlgames.com/uploaded/game/thumb800/mysteryhouse800450.webp)

Mystery House is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly spooky core. Forget convoluted detective storylines or generic urban environments; this title is a pure, unadulterated shot of visual immersion focused entirely on acute observation within the shadowy, dust-covered rooms of an abandoned Victorian mansion. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing grand libraries, cobwebbed attics, forgotten dining rooms, and eerie basements. Your objective is elegantly simple: locate the subtle, thematic items expertly blended into the dilapidated environment. The atmosphere is intoxicatingly rich and slightly tense, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, antique furniture, and complex Victorian architecture. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy grandfather clock and cracked mirror is rendered with breathtaking clarity. 

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of the haunted mansion room.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* The game also features interspersed logic-based mini-games (like repairing torn photographs or solving lock combinations) to break up the hidden object pacing.
* You must find all the hidden objects before the strict time limit expires to advance deeper into the house.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the dusty bookshelf) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A modern key might be tinted rust-brown to blend into a rotting floorboard.
* **Check the Shadows:** The developers love hiding dark objects inside the deep shadows of the fireplace, underneath grand pianos, or inside unlit cabinets. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a candelabra, you will accidentally spot the hidden pocket watch.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Pyramid Tripeaks",
    seoContent: `![Pyramid Tripeaks](https://www.htmlgames.com/uploaded/game/thumb800/pyramidtripeaks800450.webp)

Pyramid Tripeaks brilliantly fuses the mathematical precision of Pyramid Solitaire with the rapid-fire, sequential cascading mechanics of standard Tri-Peaks, all wrapped in a visually stunning, historically immersive Ancient Egyptian aesthetic. Moving entirely away from the sterile casino aesthetics of standard Klondike, this title sets its massive, multi-tiered card structures against beautiful, high-definition illustrations of the Sphinx, the Nile, and soaring desert monuments. The objective abandons complex alternating-color rules in favor of a lightning-fast, sequential matching system: you simply click exposed cards that are exactly one value higher or lower than your current active card. The atmosphere is deeply relaxing yet inherently fast-paced, accompanied by ambient desert winds. The visual presentation is highly polished, utilizing crisp, custom-designed playing cards featuring pharaohs and scarabs that ensure perfect readability even when the massive structural peaks are heavily congested. It is the ultimate, timeless relaxation tool for card players who prefer rapid sequencing over slow, methodical tableau building.

## How to Play
* The primary objective is to clear all the cards from the massive overlapping peaks on the board.
* You have a single face-up "active" card at the bottom of the screen next to your draw pile.
* Use your \`Left Mouse Button\` to click any fully exposed card on the peaks that is exactly ONE value higher or ONE value lower than your active card.
* **Examples:** If your active card is an 8, you can click a 7 or a 9. Suit and color do not matter at all.
* **The Ace Loop:** Kings connect to Aces, and Aces connect to 2s. (e.g., King -> Ace -> 2 -> 3).
* A card is strictly considered "exposed" only if there is absolutely no other card resting on top of it.
* If you have no valid moves on the board, click the face-down draw pile to reveal a new active card.

## Tips and Tricks
* **Plan Your Chains:** Do not just click the first valid card you see. Look at the board and map out a massive combo chain. If your active card is a 5, and the board has a 6, 7, 8, 7, 6... you can clear all five of those cards in one continuous sweep without drawing.
* **Dig Evenly:** Try to dismantle the multiple peaks at roughly the same pace. If you completely destroy the left peak while the right peak is still untouched, you severely limit your options later in the game.
* **Uncover the Hidden Cards:** If you have a choice between playing an exposed 7 that doesn't unlock anything, or a different exposed 7 that uncovers two face-down cards beneath it, ALWAYS choose the one that reveals more information.
* **Save Your Draw Cards:** Exhaust absolutely every single possible sequence on the main board before you click the draw pile. Your draw pile is your lifeline; wasting it early is a guaranteed loss.
* **The "Undo" Button (If Available):** Use it strategically! If you break a massive combo by clicking the wrong 9, undo the move and correct your sequence.`
  },
  {
    title: "Flower World 2",
    seoContent: `![Flower World 2](https://www.htmlgames.com/uploaded/game/thumb800/flowerworld2-800x450.webp)

Flower World 2 injects a massive dose of vibrant, springtime energy into the highly competitive tile-swapping genre, delivering a visual feast of blooming gardens and intensely satisfying combination mechanics. Stepping entirely away from generic, sterile gem-swapping, this title embraces a lush, botanical thematic approach, requiring players to physically align brightly colored daisies, roses, tulips, and sunflowers. The atmosphere is undeniably relaxing, perfectly capturing the peaceful essence of tending a garden without sacrificing the deep, strategic complexity that hardcore puzzle fans demand. Every level is a meticulously designed challenge, presenting specific objective quotas (like collecting 40 red roses or breaking frozen ice blocks off the petals) that must be met within a strict move limit. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition sprites that crackle with magical, floral energy when linked together. It is a pure, unadulterated test of spatial planning, cascade optimization, and high-speed gardening.

## How to Play
* The core mechanic revolves around swapping adjacent flowers to create horizontal or vertical lines of three or more identical blooms.
* Use your \`Mouse\` to click on a flower, then click an adjacent one to swap their positions, or simply click and drag.
* Your objective is to fulfill specific collection goals displayed at the top of the screen before you run out of allowed moves.
* Matching exactly four flowers creates a glowing, line-clearing super-bloom that obliterates an entire row or column.
* Matching five flowers in an L or T shape creates a devastating area-of-effect flower bomb.
* Matching five flowers in a straight row creates a magical rainbow watering can that instantly collects all flowers of a specific color from the board.

## Tips and Tricks
* **Prioritize the Quota:** It is incredibly easy to get distracted by a massive chain of yellow sunflowers, but if your objective only requires blue daisies, you are wasting a precious move. Focus laser-like on the goal.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading flowers dropping from the ceiling, often resulting in free, accidental combos as the garden settles.
* **Combine the Power-Ups:** The most devastating move in the game is swapping two power-ups with each other. Swapping a line-clear with a flower bomb creates a massive, cross-shaped explosion that clears half the garden instantly.
* **Save the Watering Cans:** Do not use the five-in-a-row rainbow item immediately. Save it until you desperately need to collect a specific color to meet your quota, or wait to combine it with another power-up for a board-wiping effect.
* **Analyze the Dirt Barriers:** Pay close attention to the shape of the board. Some levels have unmovable dirt or ice blocks. Focus on making matches adjacent to the dirt to break those barriers early and open up the board.`
  },
  {
    title: "Dream Pet Solitaire",
    seoContent: `![Dream Pet Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/dreampetsolitaire800450.webp)

Dream Pet Solitaire (a highly polished variant of the classic Onet or Kyodai genre) injects a massive dose of highly structural, geometric pathfinding into the tile-matching formula, delivering a visual puzzle that demands intense calculation wrapped in an overwhelmingly adorable, pastel-colored animal aesthetic. Stepping entirely away from the 3D, overlapping pyramids of standard Mahjong Solitaire, this game places every single tile flat on a massive, single-layer 2D grid featuring cute kittens, puppies, bunnies, and hamsters. Your objective is not just to find matching pairs, but to prove that a clear, unobstructed path can physically be drawn between them using a very specific set of routing rules. The atmosphere is deeply engaging, requiring players to constantly weigh the immediate satisfaction of a simple edge match against the necessity of unblocking the dense center of the board. The visual style is exceptionally clean, ensuring perfect readability even when the board is packed. It is a pure test of spatial planning, line-of-sight optimization, and the ability to visualize invisible lines across a chaotic grid.

## How to Play
* Your primary objective is to clear the entire flat grid by connecting identical pairs of pet tiles before the strict timer runs out.
* Use your \`Mouse\` to click on a pet, then click on a matching pet to attempt a connection.
* **The Golden Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two pets using a maximum of three straight lines (which means no more than two 90-degree corners).
* You can connect pets that are sitting directly next to each other, or you can route the path entirely outside the main grid boundary (the empty space surrounding the puzzle).
* If you successfully clear all pets, you win. If no more valid moves exist, the board will usually automatically reshuffle.

## Tips and Tricks
* **Clear the Perimeter First:** Pets sitting on the absolute outer edge of the board are by far the easiest to connect, because their path can route freely through the empty space outside the grid using the two-turn rule. Clear the borders instantly.
* **Look for the "U" Shape:** The two-turn rule allows for a perfect "U" shape connection. If two identical puppies are on the exact same row, but separated by other animals, check if there is empty space directly above or below both of them to draw the U.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the grid from the outside toward the dense center.
* **Don't Tunnel Vision:** If you can't find a path for two specific kittens, stop looking at them. Scan the entire board for an obvious, free match to keep the timer from running down.
* **Use the Hint Button Sparingly:** If you are truly stuck, use the hint button, but be aware that relying on it prevents you from training your brain to see the complex two-turn pathways.`
  },
  {
    title: "Extreme Billiards",
    seoContent: `![Extreme Billiards](https://www.htmlgames.com/uploaded/game/thumb800/extremebiliards800450.webp)

Extreme Billiards fundamentally rewrites the rules of the legendary arcade-shooter (Zuma/Luxor) genre, completely replacing the standard, sterile aesthetic of ancient Aztec stones or magical gems with the gritty, high-contrast visual language of a smoky pool hall. Set against a beautiful, high-definition rendering of green felt, players are tasked with managing a massive, serpentine chain of brightly colored billiard balls that slowly rolls along a winding track toward a designated pocket (the hole). You control a rotating cue stick in the center of the board. Your objective is to fire specific billiard balls directly into the moving chain, strategically grouping colors to trigger massive chain reactions before the balls reach the pocket. The atmosphere is deeply calculating and immensely satisfying, relying entirely on the visceral physics of pool balls violently striking each other. The visual presentation is highly polished, utilizing crisp, realistic 3D spheres that clack satisfyingly upon impact. Extreme Billiards is a pure test of geometric calculation, reflex aiming, and lead-tracking.

## How to Play
* The primary objective is to destroy the entire moving chain of billiard balls before it reaches the pocket at the end of the track.
* You control a cue stick (cannon) in the center of the screen holding a specifically colored billiard ball.
* Use your \`Mouse\` to rotate the cue stick and aim.
* Click the \`Left Mouse Button\` to fire your ball directly into the moving chain.
* When your fired ball connects with a cluster of two or more balls of the EXACT SAME color (e.g., three red 3-balls), that segment of the chain will pop and disappear.
* If you sever the chain in the middle, the front half will temporarily stop moving, allowing the back half to violently slam into it, often causing secondary combo explosions.

## Tips and Tricks
* **Lead Your Shots:** The chain is constantly moving. You cannot shoot directly at a red ball; you must shoot at where the red ball *will be* in half a second. Master the art of leading your target.
* **Look for the Magnet Effect:** If you destroy a yellow section in the middle of the chain, and the balls on either side of the newly created gap are both blue, they will act like magnets, flying backward to slam into each other and create a free combo. Look for these setups!
* **Shoot Through the Gaps:** As the track winds around itself, you will often need to shoot your ball through a tiny gap in the front of the chain to hit a crucial cluster on the back half of the track. Accuracy is paramount.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* ball color (or right-click to swap balls). Knowing what you have in reserve completely dictates where you should place your current shot.
* **Don't Panic at the Pocket:** If the balls are inches away from the pocket, do not wildly spam the trigger. Stay calm, identify the absolute front-most ball, and make one clean, precise shot to push the chain backward.`
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
