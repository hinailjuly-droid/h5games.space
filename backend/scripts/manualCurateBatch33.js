const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Easter Merge",
    seoContent: `![Easter Merge](https://www.htmlgames.com/uploaded/game/thumb800/eastermerge800450.webp)

Easter Merge injects a massive dose of vibrant, pastel-colored springtime energy into the highly addictive, mathematical puzzle genre, replacing sterile numbers or abstract shapes with beautifully illustrated, festive iconography. Set against a lush, green grassy grid, players are tasked with managing a board filled with brightly decorated eggs, chocolate bunnies, woven baskets, and fluffy chicks. Instead of swiping the entire board (like 2048) or swapping adjacent tiles, you must physically draw a line to connect three or more identical items. When connected, they merge into a single, higher-tier holiday item (e.g., three basic eggs merge into a patterned egg, which merge into a chocolate bunny). The atmosphere is deeply relaxing and immensely satisfying, accompanied by cheerful, ambient music. The visual presentation is highly polished, utilizing crisp, high-definition sprites that crackle with magical energy when merged. Easter Merge is a pure, unpressured test of sequence planning and inventory management, requiring you to carefully build massive chains without cluttering the board.

## How to Play
* The primary objective is to fulfill specific collection goals (e.g., create 3 Easter Baskets) before running out of moves or space on the grid.
* Use your \`Mouse\` to click and hold the \`Left Mouse Button\` on a festive item.
* Drag your mouse across adjacent identical items (horizontally, vertically, or diagonally) to draw a connecting line.
* You must connect at least THREE identical items to trigger a merge.
* Release the mouse button to merge the connected items into a single, upgraded item at the exact location of the *last* item in your chain.
* **The Upgrade Path:** Items follow a strict evolutionary path (e.g., Egg -> Patterned Egg -> Chocolate Bunny -> Basket).

## Tips and Tricks
* **Control the Merge Point:** The absolute most critical mechanic in this game is understanding that the new, upgraded item spawns exactly where you *release* your mouse click. Always end your chain in a strategic location (usually an open corner) to avoid trapping the new item.
* **Build Massive Chains:** While three items are required to merge, connecting five, seven, or ten items simultaneously often yields massive bonus points and sometimes spawns powerful board-clearing bombs. Never settle for three if you can safely connect five.
* **Keep High Tiers Together:** Try to build your highest-tier items (like Baskets) directly next to each other. If you randomly spawn a Basket in the top left corner, and another Basket in the bottom right, it will be incredibly difficult to eventually merge them.
* **Clear the Clutter:** If the board is filling up with low-tier plain eggs that you don't need, use a few moves to merge them just to get them out of the way and free up physical space on the grid.
* **Plan the Cascade:** Before you execute a merge, look at what the new item will be. Will that new item immediately sit next to two other identical items, allowing for a rapid, secondary combo?`
  },
  {
    title: "Mahjong Blocks - Easter",
    seoContent: `![Mahjong Blocks - Easter](https://www.htmlgames.com/uploaded/game/thumb800/mahjongblockseaster800450.webp)

Mahjong Blocks - Easter fundamentally rewrites the rules of the traditional tile-matching formula (like Mahjong Solitaire) by stripping away the massive 3D, overlapping pyramids in favor of a brutally restrictive, gravity-driven 2D block puzzle, all wrapped in a charming pastel aesthetic. Set against a clean, visually minimalist springtime background, players are presented with a massive, flat wall of tightly packed square blocks featuring beautifully illustrated eggs, bunnies, and flowers. Your objective is elegantly simple yet intensely difficult in execution: you must completely clear the board by finding and matching identical pairs of blocks. However, the game introduces a massive structural caveat: you can ONLY select blocks that are touching the empty space at the absolute top of the board (or the side edges). As you remove blocks, gravity pulls the remaining blocks down, constantly shifting the entire architectural layout of the puzzle. The visual presentation is highly functional, utilizing crisp, high-contrast symbols to ensure perfect readability. It is an uncompromising test of sequence planning and cascade logic.

## How to Play
* Your primary objective is to clear all the Easter blocks from the board by matching them in identical pairs.
* Use your \`Left Mouse Button\` to click on a "free" block to select it.
* Click on a matching "free" block to instantly eliminate both from the board.
* **The Freedom Rule:** A block is strictly considered "free" (and therefore clickable) ONLY if it has absolutely no other block resting directly on top of it, OR if it is completely unblocked on at least one of its immediate left or right vertical sides.
* Blocks completely buried in the center of the wall cannot be clicked.
* **Gravity:** When you remove a block, any blocks resting above it will instantly fall straight down to fill the empty space.

## Tips and Tricks
* **Work the Top Edges:** Because gravity is your main obstacle, always prioritize clearing blocks from the absolute highest points on the wall. Peeling away the top layer exposes the maximum number of new blocks underneath.
* **Calculate the Drop:** This is the most crucial skill. Before you click a pair, look directly above those blocks. If you remove them, what blocks will fall down? Will their new positions create a brilliant combo, or will they permanently block a move you desperately needed?
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach bunny blocks on the side edge, ignore them! Save them. You might desperately need one of those bunnies later to match a block that falls from the top.
* **Keep the Wall Level:** Try to peel the blocks away evenly across the entire width of the board. Drilling a deep, narrow hole down one column will create jagged, unmanageable spikes that restrict your horizontal matching options.
* **Scan for Deadlocks:** If you only have two egg blocks left, and one is buried under a massive pillar, the board is deadlocked. You must constantly monitor the "inventory" of remaining pairs on the board.`
  },
  {
    title: "Aladdin and the Magic Lamp",
    seoContent: `![Aladdin and the Magic Lamp](https://www.htmlgames.com/uploaded/game/thumb800/aladdinandthemagiclamp800450.webp)

Aladdin and the Magic Lamp delivers a brilliant, highly atmospheric evolution of the classic tile-swapping puzzle (Match-3), fusing the addictive cascade mechanics with a focused, objective-based narrative wrapped in a stunning Arabian Nights aesthetic. Set against a backdrop of a luxurious desert palace, players are tasked with managing a grid filled with brightly colored, glowing jewels, scimitars, turbans, and magic carpets. Your objective is not just to rack up a high score, but to physically maneuver specific, broken pieces of the legendary Magic Lamp down to the absolute bottom row of the grid so they fall off the board and can be collected. You do this by swapping adjacent items to form lines of three or more, shattering the gems beneath the artifact pieces to inch them closer to the bottom. The atmosphere is deeply engaging, accompanied by sweeping, cinematic Middle Eastern music. The visual presentation is exceptionally polished, utilizing crisp sprites and satisfying, magical particle effects. It is a pure test of cascade planning and vertical tunnel creation.

## How to Play
* The primary objective is to collect all the scattered pieces of the Magic Lamp before the timer expires.
* The artifact pieces are located at the top of the grid, resting on top of regular jewels.
* Use your \`Mouse\` to click on a jewel, then click an adjacent one to swap their positions, forming a horizontal or vertical line of three or more identical items.
* When the jewels shatter, the artifacts resting above them will fall down one row.
* You must systematically collapse the columns directly beneath the artifacts until they touch the absolute bottom row of the board, at which point they are collected.
* Collect all pieces to complete the level.

## Tips and Tricks
* **Focus on the Columns, Not the Board:** Your only real objective is the vertical column directly beneath the artifact piece. Completely ignore massive, satisfying 5-gem combos on the left side of the board if the artifact is on the right side. Every move must serve the objective.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points of the target column. This triggers cascading jewels dropping from the ceiling, often resulting in free, accidental combos that lower the artifact automatically.
* **Don't Strand the Artifact:** The absolute worst thing you can do is accidentally clear all the jewels in a column *except* the ones directly under the artifact, stranding it on a tall, narrow pillar of unmatchable colors. Always ensure you have a planned route.
* **Utilize Power-Ups Strategically:** Matching four or five jewels creates powerful bombs or line-clearing rockets. Do not detonate them immediately. Try to maneuver them directly under the artifact, or in the same row/column, to blast a massive hole.
* **Clear Obstacles Early:** Later levels introduce chained or frozen jewels that cannot be moved. Prioritize shattering these immediately, as they act as impenetrable walls that will block your artifact from falling.`
  },
  {
    title: "Tri Towers Solitaire",
    seoContent: `![Tri Towers Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/tritowerssolitaire800450.webp)

Tri Towers Solitaire (also commonly known as Tri-Peaks) takes the immensely popular, rapid-fire mechanics of sequential matching and applies them to a highly structured, massively overlapping architectural layout. Moving entirely away from the complex alternating-color rules and deep tableau sorting of standard Klondike, this title sets its cards in three distinct, overlapping pyramid structures. The objective is lightning-fast and sequentially pure: you simply click exposed cards on the peaks that are exactly one value higher or lower than your current active card at the bottom of the screen. The atmosphere is deeply relaxing yet inherently fast-paced; there is no complex math, just pure pattern recognition and chain-reaction planning. The visual presentation is highly polished, utilizing crisp, traditional playing cards set against a soothing background that ensures perfect readability even when the massive, three-peaked structure is heavily congested. It is the ultimate, timeless relaxation tool for card players who prefer rapid sequencing over slow, methodical tableau building.

## How to Play
* The primary objective is to clear all the cards from the three massive, overlapping peaks on the board.
* You have a single face-up "active" card at the bottom of the screen next to your draw pile.
* Use your \`Left Mouse Button\` to click any fully exposed card on the peaks that is exactly ONE value higher or ONE value lower than your active card.
* **Examples:** If your active card is an 8, you can click a 7 or a 9. Suit and color do not matter at all.
* **The Ace Loop:** Kings connect to Aces, and Aces connect to 2s. (e.g., King -> Ace -> 2 -> 3).
* A card is strictly considered "exposed" only if there is absolutely no other card resting on top of it.
* If you have no valid moves on the board, click the face-down draw pile to reveal a new active card.

## Tips and Tricks
* **Plan Your Chains (Look Ahead):** Do not just click the first valid card you see. Look at the board and map out a massive combo chain. If your active card is a 5, and the board has a 6, 7, 8, 7, 6... you can clear all five of those cards in one continuous sweep without drawing.
* **Dig Evenly:** Try to dismantle the three peaks at roughly the same pace. If you completely destroy the left tower while the right tower is still untouched, you severely limit your options later in the game when you need specific numbers.
* **Uncover the Hidden Cards:** If you have a choice between playing an exposed 7 that doesn't unlock anything, or a different exposed 7 that uncovers two face-down cards beneath it, ALWAYS choose the one that reveals more information.
* **Save Your Draw Cards:** Exhaust absolutely every single possible sequence on the main board before you click the draw pile. Your draw pile is your lifeline; wasting it early is a guaranteed loss.
* **The "Undo" Button (If Available):** Use it strategically! If you break a massive combo by clicking the wrong 9, undo the move and correct your sequence.`
  },
  {
    title: "Galaxy Shooter",
    seoContent: `![Galaxy Shooter](https://www.htmlgames.com/uploaded/game/thumb800/galaxyshooter800450.webp)

Galaxy Shooter delivers the absolute purest, most unadulterated distillation of the legendary vertical-scrolling arcade "shmup" (shoot 'em up) formula, completely stripping away the bloated RPG mechanics and convoluted narratives of modern iterations to present the genre exactly as it was meant to be played. Set against a breathtaking, high-definition, scrolling backdrop of nebulas, asteroid fields, and distant stars, players pilot a nimble, heavily armed fighter spacecraft. Your objective is intensely focused and brutally unforgiving: you must survive an endless onslaught of alien armadas, massive capital ships, and screen-filling bullet-hell patterns while actively defending Earth. The atmosphere is deeply kinetic and visually overwhelming; the screen is perpetually filled with neon lasers, plasma bursts, and spectacular chain-reaction explosions. The visual presentation is highly polished, utilizing crisp, detailed ship sprites and fluid animations that ensure hitboxes remain readable amidst the chaos. Galaxy Shooter is a pure, uncompromising test of reflex dodging, pattern recognition, and rapid-fire aggression.

## How to Play
* The primary objective is to survive the waves of alien ships and destroy the massive bosses at the end of each sector.
* The screen continuously scrolls upward automatically.
* Use your \`Mouse\` (or finger on touchscreens) to drag your spaceship smoothly around the screen.
* The ship fires its primary weapons automatically and continuously as long as you are holding the mouse button/touching the screen.
* You must physically dodge incoming enemy ships, asteroids, and thousands of glowing projectiles.
* Destroying enemies will occasionally drop glowing power-ups (weapon upgrades, shields, screen-clearing bombs). Move your ship over them to collect them.

## Tips and Tricks
* **Focus on Your Ship, Not the Enemies:** This is the golden rule of bullet-hell shooters. Do not stare at the top of the screen where the enemies are. Keep your eyes firmly locked on the space immediately surrounding your own ship (the hitbox). Only look up in brief glances to track major threats.
* **Master the Micro-Dodge:** When the screen fills with bullets, do not panic and sweep your mouse wildly across the screen. Make tiny, precise, pixel-perfect movements to thread the needle between projectiles.
* **Stay Near the Bottom (Usually):** Hovering near the bottom of the screen gives you the absolute maximum amount of reaction time to see incoming bullets and enemy dive-bombing patterns.
* **Hoard the Bombs:** If you collect a screen-clearing bomb (usually triggered by double-tapping or a separate button), do NOT use it offensively to kill a few small ships. Save it exclusively as a panic button for when you are physically trapped in a corner with unavoidable bullets.
* **Prioritize the Power-Ups:** Your starting weapon is incredibly weak. Risking a hit to grab a weapon upgrade early in the level is almost always worth it, as a fully upgraded spread-shot can clear the screen before enemies even have a chance to fire.`
  },
  {
    title: "Hunting Jack - At Home",
    seoContent: `![Hunting Jack - At Home](https://www.htmlgames.com/uploaded/game/thumb800/huntingjackathome800450.webp)

Hunting Jack - At Home is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and adorable core. Forget convoluted detective storylines or messy urban apartments; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within the chaotic, highly detailed environment of a suburban family home. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing messy living rooms, cluttered garages, overgrown backyards, and cozy bedrooms. Your objective is elegantly simple: locate Jack (and his dog friends) expertly blended into the environment. The atmosphere is deeply relaxing and incredibly nostalgic, demanding complete concentration as you scan incredibly intricate scenes filled with visual noise, scattered toys, and complex architectural geometry. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy couch cushion and patterned rug is rendered with breathtaking clarity.

## How to Play
* Your objective is to find every single dog hidden within the main high-definition image of the house scene.
* Use your \`Mouse\` to carefully scan the high-definition scene. The dogs are often heavily camouflaged, matching the color and texture of the furniture or shadows they are hiding in.
* Click directly on a dog when you spot it to collect it.
* The counter at the top of the screen displays exactly how many dogs are left to find in the current level.
* Be precise! Randomly spam-clicking around the screen will often result in a time penalty or a temporary point deduction.

## Tips and Tricks
* **Look for Geometry, Not Just Color:** The developers are experts at camouflaging the dogs. A brown dog hidden on a brown leather couch will be perfectly color-matched. Stop looking for contrasting colors and start looking for the strict, geometric outline of a dog's ear, a snout, or a tail.
* **Divide the Screen:** Do not try to scan the entire massive image at once; it will overwhelm your eyes. Mentally divide the screen into four quadrants and meticulously search one corner (like the bookshelf) before moving to the next.
* **Check the Shadows and Highlights:** The hardest dogs to find are the dark-furred ones hiding in the deep black shadows under the bed, or the white dogs hiding in the blown-out glare of a bright window. Adjust your monitor brightness!
* **Step Back:** If you are completely stuck on the final dog, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the hidden shape suddenly pop out.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Classic Gin Rummy",
    seoContent: `![Classic Gin Rummy](https://www.htmlgames.com/uploaded/game/thumb800/classicginrummy800450.webp)

Classic Gin Rummy delivers the absolute purest, most fundamentally rigid distillation of the legendary two-player card game, completely stripping away modern gimmicks to present a brutally calculating, perfect-information duel. Set against a clean, visually minimalist green felt table aesthetic, players are locked in a relentless battle of wits against a highly capable digital AI opponent. Your objective is elegantly simple yet incredibly unforgiving: you must draw and discard cards to systematically organize your 10-card hand into valid "melds" (sets of three or four cards of the same rank, or runs of three or more cards in the same suit). The atmosphere is deeply cerebral; it is a pure test of memory, probability calculation, and aggressive risk management as you try to read your opponent's discards. The visual presentation is highly polished, utilizing crisp, realistic playing cards that ensure perfect readability. Classic Gin Rummy is the ultimate brain-training routine for mathematical puzzle purists who love high-stakes card mechanics.

## How to Play
* The primary objective is to form your entire hand into valid melds (Sets or Runs) before your opponent does.
* **Sets:** 3 or 4 cards of the EXACT SAME rank (e.g., three 7s).
* **Runs:** 3 or more cards in sequential order of the EXACT SAME suit (e.g., 4, 5, 6 of Hearts).
* On your turn, use your \`Mouse\` to draw ONE card, either from the face-down stockpile or the face-up discard pile.
* You must then discard ONE card from your hand face-up onto the discard pile.
* **Knocking:** If the point value of your "deadwood" (cards in your hand that are NOT part of a meld) is 10 or less, you can choose to "Knock" and end the round. Face cards are worth 10, Aces are 1.
* **Gin:** If all 10 cards in your hand are in melds (0 deadwood), you have "Gin" and score massive bonus points.

## Tips and Tricks
* **Watch the Discards Closely:** This is the most critical skill in Rummy. If your opponent picks up your discarded 9 of Spades, you immediately know they are building a set of 9s or a Spade run. Do not discard any more 9s, the 8 of Spades, or the 10 of Spades!
* **Discard High Values Early:** Because the game ends when someone knocks, you do not want to be caught holding un-melded Face cards (worth 10 points each). If a King doesn't immediately fit into a meld in the first few turns, throw it away.
* **Hold Onto Versatile Cards:** A 7 of Hearts is vastly more valuable than a King, because the 7 can connect to the 5, 6, 8, 9 of Hearts, AND the other 7s. Keep cards that have multiple potential ways to form a meld.
* **Don't Be Afraid to Knock Early:** If you draw a lucky hand and have 8 points of deadwood on turn three, Knock immediately. Do not get greedy holding out for Gin, as it gives your opponent time to build their own hand.
* **The "Bait" Discard:** If you hold two 8s and the 7 of Clubs, discard the 7 of Clubs. Your opponent might mistakenly believe you are not collecting 8s and discard the 8 of Clubs, handing you your meld.`
  },
  {
    title: "Classic Bubble Shooter",
    seoContent: `![Classic Bubble Shooter](https://www.htmlgames.com/uploaded/game/thumb800/classic-bubble-shooter-800x450.webp)

Classic Bubble Shooter delivers the absolute purest, most unadulterated distillation of the legendary arcade formula, completely stripping away the bloated narratives, unnecessary power-ups, and complex meta-progression that plague modern iterations of the genre. This is the game exactly as it was meant to be played: a massive ceiling of brightly colored spheres, a single aiming cannon, and an unrelenting pursuit of massive, structure-collapsing chain reactions. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core geometric shooting mechanic. You are tasked with calculating angles, bouncing shots off the sidewalls, and grouping colors to trigger massive structural collapses before the weight of the bubbles crushes your launcher. The visual presentation is highly polished, utilizing crisp, high-definition sprites that pop with color against the simple background. The explosive animations and satisfying audio cues that accompany a board-clearing combo are nothing short of spectacular. Classic Bubble Shooter is a pure, uncompromising test of geometric calculation and reflex aiming.

## How to Play
* The primary objective is to clear the entire screen of bubbles before the ceiling physically lowers and crushes your cannon.
* You control a cannon at the bottom of the screen holding a specifically colored bubble.
* Use your \`Mouse\` to aim the trajectory line.
* Click the \`Left Mouse Button\` to fire your bubble.
* When your fired bubble connects with a cluster of two or more bubbles of the EXACT SAME color, the entire connected group will pop and disappear.
* If you shoot and fail to make a match a certain number of times (indicated by grey dots at the bottom), the entire ceiling will shift downward by one row.

## Tips and Tricks
* **Master the Bank Shot:** You cannot always shoot straight. You MUST learn to bounce your bubbles off the left and right walls to ricochet them into tight, otherwise unreachable gaps near the top of the structure.
* **Sever the Root:** Do not just shoot at the lowest hanging bubbles. Look for the "structural joints"—small clusters of bubbles holding up massive, mixed-color chunks below them. If you destroy the joint, the entire massive chunk below it falls instantly, granting huge points.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* bubble color. Knowing what you have in reserve completely dictates where you should place your current shot.
* **Don't Build Walls:** If you have a red bubble and no red clusters are visible, do not just shoot it directly into the middle of the board, blocking other colors. Shoot it off to the extreme left or right edge to keep the center open.
* **Clear High Colors Completely:** If there are only two yellow bubbles left on the entire board, prioritize eliminating them immediately. Once a color is entirely gone, the game will stop generating it in your cannon, drastically increasing your odds of getting the colors you actually need.`
  },
  {
    title: "1001 Arabian Nights",
    seoContent: `![1001 Arabian Nights](https://www.htmlgames.com/uploaded/game/thumb800/1001-arabian-nights-800450.webp)

1001 Arabian Nights delivers a brilliant, highly atmospheric evolution of the classic tile-swapping puzzle (Match-3), fusing the addictive cascade mechanics with a focused, objective-based narrative wrapped in a stunning, cinematic Middle Eastern aesthetic. Set against a backdrop of luxurious desert palaces, starry nights, and glowing magic, players are tasked with managing a grid filled with brightly colored jewels, scimitars, turbans, and magical artifacts. Your objective is not just to rack up a high score, but to physically maneuver specific, broken pieces of legendary items (like keys or magical lamps) down to the absolute bottom row of the grid so they fall off the board and can be collected. You do this by swapping adjacent items to form lines of three or more, shattering the gems beneath the artifact pieces to inch them closer to the bottom. The atmosphere is deeply engaging, accompanied by sweeping, evocative music. The visual presentation is exceptionally polished, utilizing crisp sprites and satisfying, magical particle effects.

## How to Play
* The primary objective is to collect all the scattered pieces of the magical artifact before the hourglass timer expires.
* The artifact pieces are located at the top of the grid, resting on top of regular jewels.
* Use your \`Mouse\` to click on a jewel, then click an adjacent one to swap their positions, forming a horizontal or vertical line of three or more identical items.
* When the jewels shatter, the artifacts resting above them will fall down one row.
* You must systematically collapse the columns directly beneath the artifacts until they touch the absolute bottom row of the board, at which point they are collected.
* Collect all pieces to complete the level and read the next chapter of the story.

## Tips and Tricks
* **Focus on the Columns, Not the Board:** Your only real objective is the vertical column directly beneath the artifact piece. Completely ignore massive, satisfying 5-gem combos on the left side of the board if the artifact is on the right side. Every move must serve the objective.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points of the target column. This triggers cascading jewels dropping from the ceiling, often resulting in free, accidental combos that lower the artifact automatically.
* **Don't Strand the Artifact:** The absolute worst thing you can do is accidentally clear all the jewels in a column *except* the ones directly under the artifact, stranding it on a tall, narrow pillar of unmatchable colors. Always ensure you have a planned route.
* **Utilize Power-Ups Strategically:** Matching four or five jewels creates powerful bombs or line-clearing magic. Do not detonate them immediately. Try to maneuver them directly under the artifact, or in the same row/column, to blast a massive hole.
* **Clear Obstacles Early:** Later levels introduce chained or frozen jewels that cannot be moved. Prioritize shattering these immediately, as they act as impenetrable walls that will block your artifact from falling.`
  },
  {
    title: "Dream Pet Connect",
    seoContent: `![Dream Pet Connect](https://www.htmlgames.com/uploaded/game/thumb800/dreampetconnect800450.webp)

Dream Pet Connect (a highly polished variant of the classic Onet or Kyodai genre) injects a massive dose of highly structural, geometric pathfinding into the tile-matching formula, delivering a visual puzzle that demands intense calculation wrapped in an overwhelmingly adorable, pastel-colored animal aesthetic. Stepping entirely away from the 3D, overlapping pyramids of standard Mahjong Solitaire, this game places every single tile flat on a massive, single-layer 2D grid featuring cute kittens, puppies, bunnies, and pandas. Your objective is not just to find matching pairs, but to prove that a clear, unobstructed path can physically be drawn between them using a very specific set of routing rules. The atmosphere is deeply engaging, requiring players to constantly weigh the immediate satisfaction of a simple edge match against the necessity of unblocking the dense center of the board. The visual style is exceptionally clean, ensuring perfect readability even when the board is packed. It is a pure test of spatial planning, line-of-sight optimization, and the ability to visualize invisible paths.

## How to Play
* Your primary objective is to clear the entire flat grid by connecting identical pairs of animal tiles before the strict timer runs out.
* Use your \`Mouse\` to click on an animal, then click on a matching animal to attempt a connection.
* **The Golden Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two tiles using a maximum of three straight lines (which means no more than two 90-degree corners).
* You can connect tiles that are sitting directly next to each other, or you can route the path entirely outside the main grid boundary (the empty space surrounding the puzzle).
* If you successfully clear all tiles, you win. If no more valid moves exist, the board will usually automatically reshuffle or penalize you.

## Tips and Tricks
* **Clear the Perimeter First:** Tiles sitting on the absolute outer edge of the board are by far the easiest to connect, because their path can route freely through the empty space outside the grid using the two-turn rule. Clear the borders instantly.
* **Look for the "U" Shape:** The two-turn rule allows for a perfect "U" shape connection. If two identical puppies are on the exact same row, but separated by other animals, check if there is empty space directly above or below both of them to draw the U through the air.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the grid from the outside toward the dense center.
* **Don't Tunnel Vision:** If you can't find a path for two specific bunnies, stop looking at them. Scan the entire board for an obvious, free match to keep the timer from running down.
* **Use the Hint Button Sparingly:** If you are truly stuck, use the hint button, but be aware that relying on it prevents you from training your brain to see the complex two-turn pathways.`
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
