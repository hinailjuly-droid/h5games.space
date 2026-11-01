const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "BlackJack Chain",
    seoContent: `![BlackJack Chain](https://www.htmlgames.com/uploaded/game/thumb800/blackjackchain800450.webp)

BlackJack Chain brilliantly re-engineers the tense, arithmetic-driven mechanics of the classic casino card game, completely abandoning the static dealer-versus-player dynamic in favor of a highly fluid, spatially demanding puzzle environment. Set against a visually uncluttered green felt aesthetic, players are presented with a massive, sprawling tableau of face-up playing cards. Your objective is intensely focused and relies entirely on rapid mental calculation: you must drag your mouse to connect adjacent cards on the board, forming a physical chain whose numerical values add up to exactly 21. The atmosphere is deeply cerebral; it is a pure test of localized arithmetic and sequence planning, removing all luck of the draw. The visual presentation is highly functional, utilizing crisp, traditional playing cards that ensure the complex chains are perfectly readable. BlackJack Chain is an uncompromising, highly addictive brain-training exercise for puzzle purists.

## How to Play
* Your primary objective is to clear all cards from the board by grouping them into sums of 21.
* Use your \`Mouse\` to click and hold on a starting card.
* Drag the mouse over horizontally, vertically, or diagonally adjacent cards to form a chain.
* **The Arithmetic Rule:** The total numerical value of all cards in your current chain must add up to exactly 21.
* Face cards (Jacks, Queens, Kings) are worth 10.
* Number cards are worth their face value.
* Aces are incredibly powerful and can be counted as either a 1 or an 11, whichever benefits your chain.
* When your chain equals exactly 21, release the \`Left Mouse Button\` to remove those cards from the board.

## Tips and Tricks
* **Hunt for the Aces:** Aces are your absolute best resource because of their flexibility (1 or 11). If you see a cluster of small cards (2, 3, 4, 1), you can connect them to an Ace to reach 21 (11 + 2 + 3 + 4 + 1). Use them to clean up the garbage.
* **The Two-Card Combo:** The fastest way to clear space is finding the immediate two-card "Blackjacks"—an Ace paired with any 10, Jack, Queen, or King. Clear these instantly whenever you see them to shrink the board.
* **Work from the Inside Out:** It is often much easier to clear the massive, dense cluster in the dead center of the board first. If you clear the perimeter first, you might strand a card in the center with no adjacent neighbors to form a 21.
* **Don't Strand the Low Cards:** Be extremely careful about leaving a single '2' or '3' completely isolated. If a '2' has no neighbors that can sum to 19, it is mathematically deadlocked, and you will lose the level.
* **Calculate Before You Drag:** Do not just blindly draw lines hoping to hit 21. Mentally trace the path and do the math before you click the first card.`
  },
  {
    title: "Farm Flip Mahjongg",
    seoContent: `![Farm Flip Mahjongg](https://www.htmlgames.com/uploaded/game/thumb800/farmflipmahjong800450.webp)

Farm Flip Mahjongg executes a brilliant, mind-bending mechanical twist on the traditional Chinese tile-matching genre, completely stripping away the standard 3D pyramids in favor of a flat, two-sided memory puzzle wrapped in a charming agricultural aesthetic. Set against a clean, visually minimalist board, players are presented with a massive grid of flat tiles featuring farm animals, crops, and tools. However, the catch is revolutionary: every single tile has an image on the FRONT and an entirely different image on the BACK. Your objective is intensely focused: when you pair two matching front images, the tiles do not disappear. Instead, they physically flip over to reveal their hidden backside. You must then find the matching pair for the *new* image. The tile is only removed from the board once both the front AND the back have been successfully matched. The atmosphere is deeply cerebral, forcing your brain to rapidly switch between immediate visual matching and long-term sequence planning.

## How to Play
* Your primary objective is to clear all tiles from the board by matching both sides of every tile.
* Use your \`Left Mouse Button\` to click on a "free" tile to select it.
* Click on a matching "free" tile to pair them.
* **The Flip Mechanic:** When paired, the two tiles will flip over, revealing a new image.
* You must now find the matching pair for the newly revealed image. Once both sides of a tile have been successfully paired, the tile is permanently removed from the board.
* **The Golden Rule of Freedom:** Just like standard Mahjong, a tile is strictly considered "free" (and therefore clickable) ONLY if it is completely unblocked on at least one of its immediate left or right vertical sides.

## Tips and Tricks
* **Work the Edges (The Perimeter Run):** Because the board is flat, the tiles located on the absolute outer edge of the puzzle are the easiest to access. Prioritize matching the outer tiles to slowly shrink the perimeter inward.
* **Beware the Deadlock Flip:** This is the most dangerous aspect of the game. If you match two outer tiles, and they flip to reveal two identical 'Cow' images, but they are now wedged tightly between other tiles, they are deadlocked. You must always calculate if the tile will still be "free" *after* it flips.
* **Prioritize the "Blockers":** Look for tiles that are physically blocking access to a massive cluster of other tiles. Your absolute highest priority is flipping and removing those specific blocker tiles to open up the board.
* **Don't Tunnel Vision:** If you can't find a match for a specific tractor tile, stop looking at it. Scan the entire board for an obvious, free match to keep your momentum going.
* **The Memory Aspect:** Try to mentally note what images are revealed when a tile flips. If a tile flips and reveals a Pig, and you remember seeing a free Pig on the other side of the board five minutes ago, you can clear them instantly.`
  },
  {
    title: "Country Labyrinth 2",
    seoContent: `![Country Labyrinth 2](https://www.htmlgames.com/uploaded/game/thumb800/countrylabyrinth2800450.webp)

Country Labyrinth 2 strips the spatial puzzle genre down to its absolute, most geographically engaging and elegantly simple core, delivering a digital adaptation of a classic maze-routing problem wrapped in an educational, cartographic aesthetic. Set against a clean, visually minimalist grid suspended over a beautifully rendered world map, players are presented with a complex, twisting labyrinth of stone walls. Your objective is intensely focused: you are given a starting point (usually a national flag) and an ending point (the corresponding geographic outline of the country on the map). You must physically trace the single correct, unbroken path through the dead-ends and winding corridors to connect the two points. The atmosphere is deeply relaxing and intentionally educational, requiring an intense level of forward-thinking, spatial visualization, and process of elimination to avoid getting trapped in the sprawling maze. Country Labyrinth 2 is a pure test of geometric routing.

## How to Play
* The primary objective is to draw a continuous path from the starting flag to the correct destination country on the map.
* Use your \`Mouse\` to click on the starting flag.
* Drag the mouse through the open corridors of the labyrinth. A colored line will trace your path.
* **The Routing Rule:** You cannot draw through the solid walls of the labyrinth. You must navigate the twists and turns.
* Release the mouse button when you reach the target destination.
* If you drag the line into a dead end, you must retrace your steps backward to erase the line and try a different route.

## Tips and Tricks
* **Work Backwards (The Golden Rule):** The absolute most common mistake in massive labyrinths is starting at the beginning. It is almost always mathematically easier to start at the *destination* and trace the path backward toward the flag. The destination often has fewer immediate branching paths.
* **The "Right-Hand Rule":** If you are completely lost in a massive, screen-filling maze, use the classic right-hand rule. Mentally place your right hand on the wall of the maze and follow it continuously. You will eventually explore every single corridor and find the exit (though it might not be the fastest route).
* **Scan for Dead Ends Early:** Before you even click the mouse, look at the overall shape of the maze. Identify the massive, obvious dead-end sections (large chunks of the maze that only have one entrance). Mentally block those areas off so you don't waste time tracing lines into them.
* **Look for the "Choke Points":** Are there two massive areas of the maze connected by a single, narrow 1-cell wide hallway? That hallway is a choke point, and the correct path MUST pass through it. Route your line directly to that choke point first.
* **Patience:** There is no timer. Do not draw wild, chaotic lines. Trace the path with your eyes before you commit with the mouse.`
  },
  {
    title: "The Royal Game of Ur",
    seoContent: `![The Royal Game of Ur](https://www.htmlgames.com/uploaded/game/thumb800/TheRoyalgameofUr800450.webp)

The Royal Game of Ur delivers a breathtaking, historically accurate digital adaptation of one of the oldest known board games in human history, dating back to ancient Mesopotamia. Completely abandoning the complexity of modern strategy games, this title strips tabletop competition down to its absolute, most brutal and elegant core: a pure race of probability and ruthless tactical blocking. Set against a stunning visual recreation of the ancient wooden game board, complete with inlaid lapis lazuli and shell aesthetics, players compete against an AI opponent. Your objective is intensely focused: you must roll the tetrahedral dice to dictate your movement, carefully navigating your seven stone pieces down a central, shared "combat" track, and successfully bear them off the board before your opponent does. The atmosphere is deeply calculating and incredibly tense, as the central track forces constant, brutal collisions where pieces are knocked off and sent back to the start. The Royal Game of Ur is a flawless tactical experience.

## How to Play
* The primary objective is to move all seven of your stone pieces completely around your path and off the board before your opponent does.
* On your turn, you will automatically roll four tetrahedral (pyramid-shaped) dice. The number of painted corners facing up dictates how many spaces you can move (0 to 4).
* Use your \`Mouse\` to click on the specific stone you wish to move.
* **The Combat Track:** Both players share the middle row of the board. If you land your piece on a square currently occupied by your opponent's piece, you capture it, instantly sending it back to the absolute beginning.
* **The Rosettes (Safe Squares):** Landing exactly on a square marked with a Rosette (flower) grants you absolute immunity from capture while resting there, AND immediately grants you a free extra turn.

## Tips and Tricks
* **Hoard the Rosettes (The Golden Rule):** The Rosette squares are the absolute most powerful positions on the board. You MUST prioritize landing on them. A piece resting on the central Rosette acts as an impenetrable roadblock for your opponent while keeping your piece completely safe.
* **Don't Clump Your Pieces:** Try to space your pieces out. If you have three pieces clustered together on the dangerous middle track, a single bad dice roll from your opponent could wipe out your entire front line.
* **The "Sniper" Strategy:** Keep one piece held back at the very beginning of the central combat track. Wait for your opponent to move their pieces deeply into the danger zone, then use your sniper piece to aggressively hunt them down and send them back.
* **Calculate the Odds:** You roll four binary dice. This means rolling a '2' is mathematically the most common outcome, while rolling a '0' or a '4' is rare. Plan your movements assuming you will most likely move two spaces on your next turn.
* **Force the Opponent to Move:** If you occupy all the safe Rosettes, your opponent is forced to move their pieces into vulnerable positions on the open track.`
  },
  {
    title: "Four Seasons Mahjong",
    seoContent: `![Four Seasons Mahjong](https://www.htmlgames.com/uploaded/game/thumb800/fourseasonsmahjong800450.webp)

Four Seasons Mahjong delivers an incredibly robust, deeply engaging evolution of the classic Chinese tile-matching genre, completely stripping away the sterile casino aesthetic in favor of a breathtaking, thematic journey through the changing of the year. Set against beautifully illustrated backdrops that shift from the blooming cherry blossoms of Spring to the snow-covered landscapes of Winter, players are presented with massive, overlapping 3D pyramids constructed of crisp, traditional Mahjong tiles. Your objective is elegantly simple yet brutally difficult in execution: you must meticulously dismantle the massive, overlapping structures by finding and matching identical pairs of tiles. The atmosphere is deeply relaxing and incredibly focused, trading the tense ticking clocks of arcade games for a soothing, meditative puzzle environment accompanied by ambient seasonal soundscapes. The visual presentation is highly functional, ensuring the complex traditional iconography remains perfectly readable even when the massive structures are heavily congested. It is a pure test of visual pairing.

## How to Play
* Your primary objective is to clear all tiles from the board by matching them in identical pairs.
* You can select from four different seasonal tile sets and background layouts.
* Use your \`Left Mouse Button\` to click on a "free" (highlighted) tile to select it.
* Click on a matching "free" tile to instantly eliminate both from the board.
* **The Golden Rule of Freedom:** A tile is strictly considered "free" (and therefore clickable) ONLY if it has absolutely no other tile resting on top of it, AND it is completely unblocked on at least one of its immediate left or right vertical sides.
* If a tile is wedged tightly between two other tiles horizontally, it cannot be selected.
* The game is won when the board is completely clear.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your absolute highest priority on breaking down the tallest, thickest stacks of tiles in the dead center of the layout. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board offers vastly more horizontal matching options and reveals more hidden tiles simultaneously.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach Bamboo tiles on the very outer edge of the board, ignore them! Save them. You might desperately need those outer tiles later to match a Bamboo tile buried deep in the center tower.
* **Memorize the Special Tiles:** In traditional Mahjong sets, the "Seasons" tiles and the "Flowers" tiles do not need to be identical to match; any Season can match with any other Season. Understand these exceptions to clear the board faster.
* **Use the Undo Button:** If you make a match and it immediately deadlocks the board, use the undo button to reverse it. Always scout the board to see if a specific tile has three visible copies; if it does, match the two that unblock the most hidden tiles.`
  },
  {
    title: "Illustrations 2",
    seoContent: `![Illustrations 2](https://www.htmlgames.com/uploaded/game/thumb800/illustrations2800450.webp)

Illustrations 2 is a masterclass in atmospheric, visually dense puzzle design, stripping the "spot the difference" genre down to its absolute, most captivating and subtly demanding core. Forget searching for random household items; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within stunningly detailed digital artwork. You are presented with two seemingly identical, high-definition illustrations placed side-by-side. These artworks often feature complex fantasy scenes, intricate machinery, or bustling whimsical towns. Your objective is elegantly simple but brutally difficult: locate the subtle, minute discrepancies between the left and right images. The developers are malicious in their subtlety—they do not simply remove massive objects. Instead, they slightly alter the angle of a shadow, change the color of a single background pixel, or remove a tiny gear from a complex machine. The atmosphere is deeply relaxing yet inherently tense. Illustrations 2 is the ultimate brain-training routine for acute observation.

## How to Play
* Your objective is to find every single difference between the two side-by-side illustrations.
* Use your \`Mouse\` to carefully scan the high-definition images.
* When you spot a discrepancy (e.g., a missing button on a coat), click directly on the altered spot on EITHER image.
* Successfully locating a difference will usually draw a circle around it and update your counter.
* Be extremely precise! Randomly spam-clicking around the screen will often result in a heavy time penalty or score deduction.
* Complete the level before the strict time limit expires.

## Tips and Tricks
* **The "Magic Eye" Technique (The Golden Rule):** If you can cross your eyes slightly, try to overlap the left and right images in the center of your vision (like a stereogram or "Magic Eye" poster). When the images perfectly overlap, the subtle differences will literally shimmer or flash in your vision, making them instantly obvious.
* **Divide the Screen:** Do not try to rapidly dart your eyes back and forth across the entire massive image. Mentally divide the screen into a tight grid. Meticulously compare the absolute top-left corner of both images before moving on.
* **Look for Missing Shadows:** The game often removes the shadow of an object, rather than the object itself. Always double-check the lighting and shadows on the floor and walls.
* **Check the Patterns:** The hardest differences are usually tiny alterations to repeating patterns (e.g., one brick on a massive wall is facing the wrong direction, or one stripe on a shirt is missing).
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Squirrel Bubble Shooter",
    seoContent: `![Squirrel Bubble Shooter](https://www.htmlgames.com/uploaded/game/thumb800/squirrelbubbleshooter800450.webp)

Squirrel Bubble Shooter delivers the absolute purest, most delightfully unadulterated distillation of the legendary arcade formula, completely stripping away the bloated narratives and wrapping the core mechanics in a charming, deeply relaxing woodland aesthetic. This is the genre exactly as it was meant to be played: a massive ceiling of brightly colored, perfectly rendered bubbles, a single aiming cannon controlled by a cheerful squirrel, and an unrelenting pursuit of massive, structure-collapsing chain reactions. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core geometric shooting mechanic accompanied by cheerful, upbeat music. You are tasked with calculating angles, bouncing shots off the sidewalls, and grouping specific colors to trigger massive structural collapses, all with the specific goal of freeing acorns trapped inside the bubbles. The visual presentation is highly polished, utilizing crisp, high-definition sprites. It is a pure test of geometric calculation and reflex aiming.

## How to Play
* The primary objective is to collect all the hidden acorns by clearing the bubbles surrounding them.
* You control a squirrel operating a bubble cannon at the bottom of the screen.
* Use your \`Mouse\` to aim the trajectory line.
* Click the \`Left Mouse Button\` to fire your bubble up into the cluster.
* When your fired bubble connects with a cluster of two or more bubbles of the EXACT SAME color, the entire connected group will pop and disappear.
* Acorns caught within the popping bubbles will fall into your collection basket.
* If you shoot and fail to make a match a certain number of times, the entire ceiling will shift downward, reducing your playable space.

## Tips and Tricks
* **Master the Bank Shot (The Golden Rule):** You cannot always shoot straight. You MUST learn to bounce your bubbles off the left and right walls of the play area to ricochet them into tight, otherwise unreachable gaps near the top of the structure to hit the acorns.
* **Sever the Root:** Do not just shoot at the lowest hanging bubbles. Look for the "structural joints"—small clusters holding up massive, mixed-color chunks below them. If you destroy the joint, the entire massive chunk below it falls instantly, granting huge points.
* **Target the Acorns Early:** Your only real objective is the acorns. If you have a clear shot at an acorn, take it immediately, even if it means missing a satisfying 10-bubble combo on the other side of the board.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* bubble color. Knowing what you have in reserve completely dictates where you should place your current shot to set up the next combo.
* **Clear Colors Completely:** If there are only two red bubbles left on the entire board, prioritize eliminating them. Once a specific color is entirely gone, the game will stop generating it in your cannon.`
  },
  {
    title: "Tower Solitaire",
    seoContent: `![Tower Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/towersolitaire800450.webp)

Tower Solitaire takes the immensely popular, rapid-fire mechanics of sequential matching (often seen in Golf or Tripeaks variants) and applies them to a highly structured, massively overlapping architectural layout. Moving entirely away from the complex alternating-color rules and deep tableau sorting of standard Klondike, this title deals a massive grid of face-up cards into a towering, fortress-like structure. The objective is lightning-fast and sequentially pure: you simply click exposed cards on the tower that are exactly one value higher or lower than your current active card at the bottom of the screen. The atmosphere is deeply relaxing yet inherently fast-paced; there is no complex math, just pure pattern recognition and chain-reaction planning. The visual presentation is highly polished, utilizing crisp, traditional playing cards set against a clean background, ensuring perfect readability even when the massive, multi-tiered stone tower structure is heavily congested. Tower Solitaire is a brilliant test of rapid sequence logic.

## How to Play
* The primary objective is to clear all the cards from the massive, overlapping tower structure on the board.
* You have a single face-up "active" card at the bottom of the screen next to your draw pile.
* Use your \`Left Mouse Button\` to click any fully exposed card on the tower that is exactly ONE value higher or ONE value lower than your active card.
* **Examples:** If your active card is an 8, you can click a 7 or a 9. Suit and color do not matter at all.
* **The Ace Loop:** Kings connect to Aces, and Aces connect to 2s. (e.g., King -> Ace -> 2 -> 3).
* A card is strictly considered "exposed" only if there is absolutely no other card resting on top of it.
* If you have no valid moves on the board, click the face-down draw pile to reveal a new active card.

## Tips and Tricks
* **Plan Your Chains (Look Ahead):** Do not just click the first valid card you see. Look at the board and map out a massive combo chain. If your active card is a 5, and the board has a 6, 7, 8, 7, 6... you can clear all five of those cards in one continuous sweep without drawing.
* **Dismantle the Spire:** The highest points of the tower usually overlap and block the most cards. Try to focus your initial attacks on the center peaks to aggressively peel away the layers and reveal the cards buried deep inside the structure.
* **Uncover the Hidden Cards:** If you have a choice between playing an exposed 7 that doesn't unlock anything, or a different exposed 7 that uncovers two face-down cards beneath it, ALWAYS choose the one that reveals more information.
* **Save Your Draw Cards:** Exhaust absolutely every single possible sequence on the main board before you click the draw pile. Your draw pile is your lifeline; wasting it early is a guaranteed loss.
* **The "Undo" Button (If Available):** Use it strategically! If you break a massive combo by clicking the wrong 9, undo the move and correct your sequence.`
  },
  {
    title: "Unlock The Lock",
    seoContent: `![Unlock The Lock](https://www.htmlgames.com/uploaded/game/thumb800/unlockthelock800450.webp)

Unlock The Lock strips the reflex-arcade genre down to its absolute, most tension-fueled and visually demanding core, delivering a pure, unadulterated test of rapid pattern recognition, rhythmic timing, and split-second manual dexterity. Moving entirely away from complex narratives or deep upgrade trees, this title focuses entirely on a highly stylized, minimalist environment depicting a complex safe or padlock. Your objective is brutally elegant: a colored line (the tumbler) constantly rotates or oscillates around a circular track. You must aggressively focus on a specific, glowing yellow dot (the sweet spot) on the track. You must click exactly when the moving line aligns perfectly with the dot. The atmosphere is deeply kinetic; acceleration is a constant, unrelenting force, and the game rapidly spirals into a chaotic test of hand-eye coordination as the direction and speed of the line change instantly after every successful hit. Unlock The Lock is a flawless tactical rhythm experience.

## How to Play
* The primary objective is to successfully hit the yellow dot enough times to pop the lock open and advance to the next level.
* A moving line (or ball) will travel along a circular track in the center of the screen.
* A glowing yellow dot will appear at a specific location on the track.
* Use your \`Left Mouse Button\` (or tap the screen) EXACTLY when the moving line is on top of the yellow dot.
* **The Twist:** Every single time you successfully hit the dot, the moving line will instantly reverse its direction and usually increase its speed.
* If you click too early, or click too late, the lock resets and you fail the level.

## Tips and Tricks
* **Embrace the Rhythm (Don't Look, Feel):** At high speeds, your eyes cannot process the movement fast enough to react visually. You must internalize the rhythm of the oscillating line. Tap to the beat, like a metronome, rather than relying purely on sight.
* **Anticipate the Reversal:** The absolute hardest part of the game is the instant direction change. Immediately after you click, your brain must instantly flip its tracking direction. Anticipate the bounce before it happens.
* **Don't Anticipate the Spawn:** Do not try to guess where the next yellow dot will appear. Keep your focus soft and centered on the entire circle so you can react to the dot wherever it spawns, rather than staring at one specific quadrant.
* **Take a Break:** This game causes severe tunnel vision and eye fatigue. If you fail a level ten times in a row, physically look away from the screen for 30 seconds to reset your visual tracking.
* **Minimize Input Lag:** If you are using a wireless mouse with heavy input delay, you will struggle immensely. A wired mouse or a direct touch-screen tap is optimal for this game.`
  },
  {
    title: "Spring Grabbers",
    seoContent: `![Spring Grabbers](https://www.htmlgames.com/uploaded/game/thumb800/springgrabbers800x450.webp)

Spring Grabbers executes a brilliant, incredibly satisfying twist on the traditional Mahjong Solitaire formula, completely abandoning the static, heavy stone blocks and standard point-and-click matching in favor of a highly kinetic, physics-based "claw machine" aesthetic. Set against a clean, visually uncluttered springtime backdrop filled with flowers and greenery, players are presented with a board filled with brightly colored, thematic tiles. Your objective is intensely focused and incredibly rewarding: you control a mechanical grabber (or claw). You must meticulously scan the board to find identical pairs of tiles, and then click to deploy the grabbers to physically pull the tiles off the board. The atmosphere is deeply relaxing and visually stunning, trading the tense ticking clocks of arcade games for a soothing, meditative puzzle environment. The visual presentation is highly polished, utilizing crisp sprites and incredibly satisfying mechanical audio cues as the grabbers retract. It is a pure test of visual pairing and sequence planning.

## How to Play
* Your primary objective is to clear all the tiles from the board by grabbing them in identical pairs.
* Use your \`Mouse\` to click on a "free" tile. A mechanical grabber will latch onto it.
* Click on the matching opposite tile. A second grabber will latch onto it, and both tiles will be ripped off the board.
* **The Golden Rule of Freedom:** Just like standard Mahjong, a tile is strictly considered "free" (and therefore grabbable) ONLY if it has absolutely no other tile resting on top of it, AND it is completely unblocked on at least one of its immediate left or right vertical sides.
* If a tile is wedged tightly between two other tiles horizontally, the grabber cannot reach it.
* The game is won when the board is completely clear.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your absolute highest priority on breaking down the tallest, thickest stacks of tiles in the dead center of the layout. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board offers vastly more horizontal grabbing options and reveals more hidden tiles simultaneously.
* **Don't Rush the Obvious Grab:** If you see a pair of easy-to-reach Tulip tiles on the very outer edge of the board, ignore them! Save them. You might desperately need those outer tiles later to match a Tulip buried deep in the center tower.
* **Memorize the Spring Icons:** The intricate floral patterns and bugs can easily blend together. Take a moment at the start of the level to mentally categorize the tiles ("the yellow butterfly", "the blue watering can") to dramatically speed up your visual scanning.
* **Use the Undo Button:** If you make a grab and it immediately deadlocks the board, use the undo button to reverse it. Always scout the board to see if a specific tile has three visible copies; if it does, match the two that unblock the most hidden tiles.`
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
