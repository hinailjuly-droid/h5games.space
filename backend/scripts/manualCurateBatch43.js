const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "DropTris",
    seoContent: `![DropTris](https://www.htmlgames.com/uploaded/game/thumb800/droptris800450.webp)

DropTris delivers the absolute purest, most unadulterated distillation of the legendary, gravity-driven block-falling arcade formula, completely stripping away the bloated power-ups and convoluted meta-progression of modern iterations to present the puzzle mechanics exactly as they were intended. Set against a clean, visually minimalist grid (the "Matrix"), players are tasked with managing a relentless downpour of complex geometric shapes (Tetrominoes). As the brightly colored blocks descend from the ceiling, you must actively steer and rotate them, dropping them into the accumulating stack below. Your objective is elegantly simple yet brutally difficult in execution: you must perfectly interlock the pieces to form solid, unbroken horizontal lines across the entire width of the grid. The atmosphere is deeply kinetic and incredibly stressful, relying entirely on the visceral satisfaction of spatial logic and rapid reflex timing. DropTris is a pure, uncompromising test of cascade planning and bottleneck management under extreme pressure.

## How to Play
* The primary objective is to survive as long as possible by clearing horizontal lines before the stack of blocks reaches the top of the screen.
* Geometric shapes will fall from the top of the screen one at a time.
* Use the \`Left Arrow\` and \`Right Arrow\` keys to steer the falling block horizontally across the columns.
* Use the \`Up Arrow\` key to instantly rotate the falling block 90 degrees.
* Use the \`Down Arrow\` key to accelerate the block's fall speed (Soft Drop).
* Press the \`Spacebar\` to instantly slam the block straight to the bottom of the stack (Hard Drop).
* When you create a solid horizontal line of blocks with no empty gaps, that line vanishes.

## Tips and Tricks
* **Keep the Board Flat:** Your absolute highest priority is ensuring the top layer of your stack remains as flat and even as possible. Massive spikes and deep, narrow valleys make it incredibly difficult to maneuver and rotate falling blocks later in the game.
* **Build for the "Tetris" (Line Piece):** The most efficient way to score massive points is to intentionally leave exactly one single vertical column completely empty on the far left or right edge of the board. Build a solid 4-line high wall next to it, and wait for the long, straight piece (the "I" block) to drop in and clear four lines simultaneously.
* **Don't Depend on the Line Piece:** While building for a 4-line clear is great, do not stubbornly hold out for a straight piece if your board is dangerously high. Sometimes you must "burn" lines by clearing them one or two at a time with jagged pieces just to lower the stack and survive.
* **Use the Hard Drop Strategically:** Do not let pieces float down slowly in the early levels. The faster you hard-drop (\`Spacebar\`) pieces, the more time you have to analyze the board state before the *next* piece spawns.
* **Watch the "Next Piece" Indicator:** Knowing exactly what shape is falling next completely dictates where you should rotate and place your current piece. Never place a piece without checking the preview window.`
  },
  {
    title: "Hunting Jack - In The City",
    seoContent: `![Hunting Jack - In The City](https://www.htmlgames.com/uploaded/game/thumb800/huntingjackinthecity800450.webp)

Hunting Jack - In The City is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core, all wrapped in a charming, bustling urban aesthetic. Forget convoluted detective storylines or searching for random household items; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within stunningly detailed illustrations of busy cityscapes. You are placed directly into a series of high-definition digital images showcasing crowded crosswalks, messy alleyways, sprawling parks, and chaotic traffic jams. Your objective is elegantly simple: locate "Jack" (and other specific dogs) expertly blended into the environment. The atmosphere is deeply engaging, accompanied by the ambient sounds of the city. Visually, the game opts for a highly detailed, "Where's Waldo" style aesthetic—crucial for a game relying on visual trickery—ensuring that every disguised tail and camouflaged paw is rendered perfectly. It is the ultimate brain-training routine for acute observation.

## How to Play
* Your objective is to find every single hidden dog camouflaged within the main high-definition cityscape illustration.
* Use your \`Mouse\` to carefully scan the high-definition image.
* When you spot the specific dog you are looking for, click directly on it.
* Successfully locating a dog will highlight it and update your counter or move you to the next target.
* Be extremely precise! Randomly spam-clicking around the screen will often result in a heavy time penalty or score deduction.
* Complete the level before the strict time limit expires.

## Tips and Tricks
* **Divide the Screen:** Do not try to scan the entire massive, chaotic image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the crowd waiting at the bus stop) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of the dog to blend it into the background. Focus on identifying the silhouette, the pointy ears, or the curve of the tail instead of its expected fur color.
* **Check the Extremes (Shadows and Windows):** The developers love hiding dogs inside the deep black shadows beneath parked cars, or having them peek out of the tiny, second-story windows of apartment buildings. Scan the architecture carefully.
* **Step Back:** If you are completely stuck on the final dog, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the hidden shape suddenly pop out against the chaotic background.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
  },
  {
    title: "Medieval Castle Hidden Letters",
    seoContent: `![Medieval Castle Hidden Letters](https://www.htmlgames.com/uploaded/game/thumb800/medievalcastlehiddenletters800x450.webp)

Medieval Castle Hidden Letters is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core, all wrapped in a brooding, historical aesthetic. Forget searching for random household items; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation within stunning digital paintings of ancient strongholds. You are placed directly into a series of high-definition images showcasing dusty armories, echoing grand halls, overgrown courtyards, and dimly lit dungeons. Your objective is elegantly simple: locate the subtle, minute alphabetical letters (A through Z) expertly blended into the environment. These are not massive text blocks, but tiny visual anomalies—faint outlines perfectly camouflaged into the cracks of the stone, the grain of the wood, or the ironwork of a chandelier. The atmosphere is deeply relaxing, accompanied by ambient medieval music. It is the ultimate brain-training routine for acute observation.

## How to Play
* Your objective is to find every single letter of the alphabet hidden within the main high-definition castle photograph/painting.
* Use your \`Mouse\` to carefully scan the high-definition image.
* When you spot the faint outline of a specific letter, click directly on it.
* Successfully locating a letter will remove it from the alphabet list at the bottom of the screen.
* Be precise! Randomly spam-clicking around the screen will often result in a time penalty or a temporary point deduction.
* Find all 26 letters before the timer runs out to advance to the next room of the castle.

## Tips and Tricks
* **Scan Methodically:** Do not just stare at the whole screen randomly. Mentally divide the image into a tight grid. Meticulously scan the top-left quadrant of the image, analyzing every single crack in the ancient pillar or shadow behind a shield, before moving to the top-right.
* **Look for Broken Patterns:** The letter outlines often disrupt the natural, organic flow of the image. Look for areas on a rough stone wall where the texture suddenly seems to form an unnaturally perfect 'S' curve or the sharp angle of an 'A'.
* **Check the Extremes (Shadows and Glare):** The developers love hiding dark letters inside the deep black shadows beneath tables, or hiding white letters directly inside the blown-out, pure white glare of a torch flame. Adjust your monitor brightness!
* **Step Back:** If you are completely stuck on the final letter, physically lean back from your monitor or blur your eyes slightly. Sometimes looking at the macro-composition of the image makes the hidden geometry suddenly pop out.
* **Don't Search Alphabetically:** Do not waste time looking specifically for the letter 'A' just because it is first. Scan the entire image for *any* letter, and click them as you find them.`
  },
  {
    title: "Bunny Solitaire",
    seoContent: `![Bunny Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/bunnysolitaire800450.webp)

Bunny Solitaire takes the immensely popular, rapid-fire mechanics of sequential matching (often seen in Golf Solitaire variants) and applies them to a highly structured, massively overlapping architectural layout, all wrapped in a charming, brightly colored Easter aesthetic. Moving entirely away from the complex alternating-color rules and deep tableau sorting of standard Klondike, this title deals a massive grid of face-up cards into three distinct "peaks" (or bunny ears). The objective is lightning-fast and sequentially pure: you simply click exposed cards on the peaks that are exactly one value higher or lower than your current active card at the bottom of the screen. The atmosphere is deeply relaxing yet inherently fast-paced; there is no complex math, just pure pattern recognition and chain-reaction planning accompanied by cheerful holiday music. The visual presentation is highly polished, utilizing crisp playing cards decorated with painted eggs and springtime flowers, ensuring perfect readability even when the massive structure is congested.

## How to Play
* The primary objective is to clear all the cards from the overlapping peaks on the board.
* You have a single face-up "active" card at the bottom of the screen next to your draw pile.
* Use your \`Left Mouse Button\` to click any fully exposed card on the peaks that is exactly ONE value higher or ONE value lower than your active card.
* **Examples:** If your active card is an 8, you can click a 7 or a 9. Suit and color do not matter at all.
* **The Ace Loop:** Kings connect to Aces, and Aces connect to 2s. (e.g., King -> Ace -> 2 -> 3).
* A card is strictly considered "exposed" only if there is absolutely no other card resting on top of it.
* If you have no valid moves on the board, click the face-down draw pile to reveal a new active card.

## Tips and Tricks
* **Plan Your Chains (Look Ahead):** Do not just click the first valid card you see. Look at the board and map out a massive combo chain. If your active card is a 5, and the board has a 6, 7, 8, 7, 6... you can clear all five of those cards in one continuous sweep without drawing.
* **Dig Evenly:** Try to dismantle the structure at roughly the same pace across the board. If you completely destroy the left side while the right side is still untouched, you severely limit your options later in the game when you need specific numbers.
* **Uncover the Hidden Cards:** If you have a choice between playing an exposed 7 that doesn't unlock anything, or a different exposed 7 that uncovers two face-down cards beneath it, ALWAYS choose the one that reveals more information.
* **Save Your Draw Cards:** Exhaust absolutely every single possible sequence on the main board before you click the draw pile. Your draw pile is your lifeline; wasting it early is a guaranteed loss.
* **The "Undo" Button (If Available):** Use it strategically! If you break a massive combo by clicking the wrong 9, undo the move and correct your sequence.`
  },
  {
    title: "Balloon Pop",
    seoContent: `![Balloon Pop](https://www.htmlgames.com/uploaded/game/thumb800/balloonPop800450.webp)

Balloon Pop injects a massive dose of cheerful, high-energy aesthetic into the highly competitive tile-collapsing genre (often called "Blast" or "Collapse" games), delivering a visual feast of bursting colors and intensely satisfying combination mechanics. Stepping entirely away from generic gem-swapping, this title places you in a vibrant sky filled with tightly packed, brightly colored balloons. Your objective is intensely focused: you must rapidly scan the board and click on massive, pre-existing clusters of identically colored balloons to instantly pop them. When destroyed, the entire column collapses under gravity (or floats upwards, depending on the specific physics engine), shifting the board state and creating new clusters. The atmosphere is deeply engaging and frantic, requiring players to constantly weigh the immediate satisfaction of a small pop against the necessity of building a massive combo. The visual presentation is highly polished, utilizing crisp sprites and satisfying pop audio cues. Balloon Pop is a pure test of cascade optimization.

## How to Play
* The core mechanic revolves around clicking clusters of identical balloons to remove them from the board.
* Use your \`Mouse\` to click on any group of TWO OR MORE identically colored balloons that are touching horizontally or vertically.
* When clicked, the entire cluster pops instantly, and gravity causes the remaining balloons to shift and fill the empty space.
* **The Primary Objective:** Completely clear the board, or collect specific target items (like hidden gifts), before running out of valid moves or time.
* The game requires you to plan your collapses so that you don't strand single, unmatchable balloons.

## Tips and Tricks
* **Work from the Bottom:** Always prioritize clicking clusters at the lowest possible points on the grid. This triggers the maximum amount of gravity shifting, often causing balloons higher up to naturally fall into massive, pre-aligned super-clusters without you having to waste a move.
* **Don't Isolate Single Balloons:** The absolute worst thing you can do is accidentally clear all the balloons surrounding a specific red one, stranding it with no identical neighbors. If too many balloons become isolated, the board will deadlock.
* **Build Massive Clusters (Patience is Key):** While clicking a group of two balloons is safe, it yields a terrible score. The true strategy is to click the smaller groups *around* a specific color to manually build a massive, screen-spanning cluster of 15 or 20 identical balloons before detonating it for maximum points.
* **Calculate the Slide:** Remember that emptying a vertical column causes the board to slide together horizontally. Before you clear a column, look to see if sliding the left and right halves together will create a massive new match or completely ruin your setup.
* **Target the Gifts Early:** If the level objective is to collect gifts hidden behind the balloons, prioritize clearing the paths directly to those gifts before trying to maximize your score.`
  },
  {
    title: "Nonogram",
    seoContent: `![Nonogram](https://www.htmlgames.com/uploaded/game/thumb800/nonogram800450.webp)

Nonogram (also known as Hanjie, Picross, or Griddlers) strips the spatial puzzle genre down to its absolute, most mathematically pure and elegantly simple core, delivering a digital adaptation of the notoriously difficult Japanese picture-logic puzzle. Set against a clean, visually minimalist blank grid, players are presented with a series of numerical clues placed on the outside of every row and column. Your objective is intensely focused and brutally unforgiving: you must use pure logical deduction to determine which cells in the grid should be physically filled in (painted) and which should be left blank, eventually revealing a hidden pixel-art picture. The atmosphere is deeply cerebral and intentionally demanding, requiring an intense level of forward-thinking, cross-referencing, and process of elimination. You cannot guess; every single move must be mathematically provable based on the intersecting numbers. The visual presentation is highly functional, utilizing high-contrast grids to ensure the complex numerical constraints remain perfectly readable. It is the ultimate brain-training routine for hardcore logic fans.

## How to Play
* The primary objective is to fill in the correct squares on the grid to reveal a hidden picture, using only the numerical clues provided.
* The numbers outside a row or column tell you the length of the unbroken lines of filled squares in that specific row/column.
* **Example:** If a row has the clue "3 2", it means there is a block of exactly 3 filled squares, followed by at least one empty space, followed by a block of exactly 2 filled squares.
* Use your \`Left Mouse Button\` to click and fill in a square you know must be painted.
* Use your \`Right Mouse Button\` (or an alternate toggle) to place an "X" in a square you mathematically know MUST be empty.
* Cross-reference the horizontal rows and vertical columns to deduce the exact locations.

## Tips and Tricks
* **Start with the Overlaps (The Golden Rule):** The absolute most critical strategy is finding the forced overlaps. If you have a 10x10 grid, and a row clue says "8", count 8 spaces from the left, then count 8 spaces from the right. The 6 spaces in the dead center OVERLAP. Those 6 spaces MUST be filled, regardless of where the line actually starts.
* **Find the "Full" Lines First:** Always scan the entire board for clues that equal the exact width/height of the grid (e.g., a clue of "10" on a 10x10 board). Fill that entire line immediately. This provides massive structural anchors for the intersecting lines.
* **X Marks the Spot (Crucial):** Marking squares as definitively empty ("X") is equally as important as filling squares. If a row clue is "2", and you have found those 2 squares, you MUST immediately place X's in all remaining squares in that row. This instantly solves intersections for the vertical columns.
* **The "Edge" Strategy:** Look at the extreme outer edges (Row 1 and the last Row). If you place a block on the edge, you instantly know where the intersecting vertical lines must start, allowing you to rapidly fill the perimeter.
* **Never Guess:** If you guess, you will ruin the puzzle 10 steps later. Only mark a square if you can logically prove it.`
  },
  {
    title: "Triple Connect",
    seoContent: `![Triple Connect](https://www.htmlgames.com/uploaded/game/thumb800/tripleconnect800450.webp)

Triple Connect takes the highly structural, geometric pathfinding mechanics of the classic Onet or Kyodai genre and injects a massive layer of complexity by increasing the required match count from two to three. Instead of 3D, overlapping pyramids, this game places every single thematic tile flat on a massive, single-layer 2D grid. Your objective is intensely focused: you must meticulously scan the board to find three identical tiles, but you must also prove that a clear, unobstructed path can physically be drawn connecting all three of them. The atmosphere is deeply engaging, requiring players to constantly weigh the immediate satisfaction of a simple edge match against the necessity of unblocking the dense center of the board. The visual presentation is exceptionally clean, ensuring perfect readability even when the massive board is packed with complex icons. Triple Connect is a pure, uncompromising test of spatial planning, line-of-sight optimization, and short-term visual memory.

## How to Play
* Your primary objective is to clear the entire flat grid by connecting identical groups of THREE tiles before the strict timer runs out.
* Use your \`Mouse\` to click on a tile, then click on two matching tiles to attempt a connection.
* **The Golden Pathfinding Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the tiles using a maximum of three straight lines (which means no more than two 90-degree corners) *between any two tiles in the sequence*.
* You can route the path entirely outside the main grid boundary (the empty space surrounding the puzzle).
* If you successfully clear all tiles, you win. If no more valid moves exist, the board will usually automatically reshuffle.

## Tips and Tricks
* **Clear the Perimeter First:** Tiles sitting on the absolute outer edge of the board are by far the easiest to connect, because their path can route freely through the empty space outside the grid using the two-turn rule. Clear the borders instantly to shrink the board.
* **The Memory Game:** Because you need three tiles, finding the first two is easy; finding the third is the challenge. When you spot a pair, do not click them immediately. Leave them unselected and scan the board until you find the third, then rapidly click all three.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the dense, congested center of the board.
* **Look for the "U" Shape:** The two-turn rule allows for a perfect "U" shape connection. If tiles are on the exact same row, but separated, check if there is empty space directly above or below them to draw the U through the air.
* **Don't Tunnel Vision:** If you can't find a path for three specific tiles, stop looking at them. Scan the entire board for an obvious, free match to keep the timer from running down.`
  },
  {
    title: "Alhambra Solitaire",
    seoContent: `![Alhambra Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/alhambrasolitaire800450.webp)

Alhambra Solitaire fundamentally rewrites the rules of the traditional Solitaire genre by completely abandoning the familiar mechanics of tableau sorting (building descending sequences on the main board) in favor of an incredibly restrictive, pure foundation-building puzzle using a double deck of cards. Set against a clean, visually uncluttered green felt aesthetic, players are presented with a massive reserve of cards, but essentially zero working space. Your objective is intensely focused and heavily reliant on extreme bottleneck management: you must move all 104 cards into eight foundation piles. However, the game is split: four foundations must be built upward (Ace to King), and four must be built downward (King to Ace). The terrifying twist? You CANNOT move cards between the tableau columns at all. You can only move cards directly from the tableau or the waste pile to the foundations. The atmosphere is deeply cerebral and immensely satisfying; you are managing a massive game of localized arithmetic while simultaneously preventing the board from clogging up.

## How to Play
* The primary objective is to move all 104 cards into the eight foundation piles at the top of the screen.
* The 4 left foundations must be built UP in suit (Ace up to King).
* The 4 right foundations must be built DOWN in suit (King down to Ace).
* You are dealt a reserve tableau of face-up cards.
* Use your \`Mouse\` to click and drag exposed cards directly to the foundations.
* **The Strict Rule:** You CANNOT move cards from one tableau pile to another tableau pile to organize them.
* If you have no valid moves to the foundations, click the draw pile to flip a new active card into the waste pile. You can play from the waste pile to the foundations.
* You usually only get two or three passes through the draw deck.

## Tips and Tricks
* **Protect the Waste Pile:** Your waste pile is your only real lifeline. Do not aggressively play cards from the waste pile to the foundations if you can play the exact same card from the tableau. Always prioritize clearing the tableau to expose the buried cards beneath.
* **Analyze the Split Foundations:** Because you are building one side Up and one side Down, the foundations will eventually "meet" in the middle (usually around the 7s or 8s). You can often move a card from the UP foundation directly to the DOWN foundation (or vice versa) if you desperately need to access the card beneath it.
* **Memorize the Deadlocks:** If you need a 5 of Spades for the UP foundation, and it is buried at the very bottom of a tableau pile beneath a King of Hearts, that 5 is deadlocked until you can clear the entire pile above it.
* **Don't Rush the Foundations:** Sometimes, you must intentionally delay playing a card to the foundation. If you need a specific card to unblock a massive tableau pile, hold off on building the foundation until you secure that specific route.
* **Count Your Passes:** Be acutely aware of how many times you can click through the draw deck. If you are on your final pass, every single move must be perfect.`
  },
  {
    title: "Blind Freecell",
    seoContent: `![Blind Freecell](https://www.htmlgames.com/uploaded/game/thumb800/blindfreecell800450.webp)

Blind Freecell takes the absolute gold standard of perfect-information puzzle games and aggressively injects a massive element of terrifying uncertainty, fundamentally altering the legendary Freecell formula. Set against a clean, visually minimalist green felt table aesthetic, players are presented with the standard eight sprawling tableau columns and four empty "Free Cells." However, in a brutal twist that completely shatters standard strategy, the bottom half of every single tableau column is dealt face-down. Your objective remains the same: you must maneuver the cards to build four complete sequences in the foundation piles, from Ace up to King by suit. But the atmosphere shifts from purely calculating to intensely risky, requiring players to possess a masterful understanding of cascade math while simultaneously gambling on uncovering the specific cards they need hidden in the dark. It is an uncompromising test of logic where the safety of perfect information has been stripped away.

## How to Play
* The primary objective is to move all 52 cards into the four foundation piles at the top right, building upward in suit from Ace to King.
* Cards are dealt into eight tableau columns, but many cards are face-down (blind).
* Use your \`Mouse\` to click and drag exposed face-up cards between columns.
* **The Tableau Rule:** You can build cards downward on the tableau in **alternating colors** (e.g., a Red 8 can only be placed on a Black 9).
* Moving a face-up card off a face-down card will automatically reveal the hidden card.
* **The Free Cells:** You have four open slots at the top left. You can temporarily park any single card into an empty free cell to get it out of the way.
* You can move entire valid sequences of alternating-color cards, BUT the number of cards you can move at once is strictly limited by the number of empty free cells and empty tableau columns you currently have.

## Tips and Tricks
* **Prioritize the Reveal:** In standard Freecell, you protect your free cells at all costs. In Blind Freecell, you MUST be willing to temporarily clog a free cell if it means uncovering a face-down card. Information is the most valuable resource in this variant.
* **Empty Columns are Pure Gold:** An empty tableau column is infinitely more valuable than a free cell, as it mathematically doubles the number of cards you can move in a single stack, AND it gives you a safe place to dump Kings you uncover blindly. Prioritize clearing the shorter columns first.
* **Unearth the Aces Early:** Your entire early game must focus heavily on excavating the four Aces so they can be moved to the foundations. Dig aggressively into the columns that have the most face-down cards to find them.
* **The "Undo" Button is Mandatory:** If you make a risky move to uncover a face-down card, and it turns out to be a useless card that deadlocks your board, you must immediately undo the move and try a different column.
* **Don't Auto-Play to the Foundations:** Just because you *can* move a Black 5 to the foundation doesn't mean you *should*. Sometimes keeping it on the tableau is absolutely necessary to hold a Red 4 you might uncover blindly.`
  },
  {
    title: "Easter Puzzle",
    seoContent: `![Easter Puzzle](https://www.htmlgames.com/uploaded/game/thumb800/easterpuzzle800450.webp)

Easter Puzzle strips the spatial logic genre down to its absolute, most mathematically pure and elegantly simple core, delivering a digital adaptation of the notoriously difficult "Lights Out" mechanical puzzle, all wrapped in a vibrant, brightly colored springtime aesthetic. Set against a clean, visually minimalist grid (usually 5x5), players are presented with a board filled with brightly painted Easter eggs (or squares). Some eggs are "up" (active) and some are "down" (inactive). Your objective is intensely focused and brutally unforgiving: you must physically click the eggs to toggle their state until every single egg on the board is pushed "down." However, the constraints are severe: clicking any egg automatically toggles the state of that egg AND the four eggs immediately adjacent to it (North, South, East, West). The atmosphere is deeply cerebral and intentionally demanding, requiring an intense level of forward-thinking and matrix mathematics. Easter Puzzle is the ultimate brain-training routine for hardcore logic puzzle fans.

## How to Play
* The primary objective is to turn off (push down) every single egg on the grid simultaneously.
* The board starts with a specific, randomized pattern of active and inactive eggs.
* Use your \`Mouse\` to click directly on any egg.
* **The Toggle Rule:** Clicking an egg changes its state (from Up to Down, or Down to Up). Crucially, it ALSO changes the state of the eggs directly above, below, left, and right of the clicked egg.
* You must find the exact sequence of clicks required to solve the entire grid.
* The game is won when the entire board is pushed down and uniform.

## Tips and Tricks
* **The "Chase the Lights" Strategy (The Golden Rule):** This is the single most reliable way to solve these puzzles. Start at the top row (Row 1). If an egg is active in Row 1, click the egg *directly beneath it* in Row 2. This turns off the egg in Row 1. Continue this process, chasing the active eggs down the board, row by row.
* **Solving the Bottom Row:** When you "chase the lights" all the way to the bottom row, you will be left with a specific pattern of active eggs in the final row. You must memorize (or look up) the specific "fix" for that bottom-row pattern, which involves clicking specific eggs in the *top* row, and then chasing the lights down again.
* **Order Does Not Matter:** In this specific mathematical puzzle, clicking egg A then egg B results in the exact same board state as clicking egg B then egg A. Do not worry about the sequence, only about *which* eggs need to be clicked.
* **Never Click Twice:** Clicking the exact same egg twice simply reverses the action and wastes time. Every egg in the perfect solution only needs to be clicked a maximum of one time.
* **Work the Corners Early:** The corners only affect three eggs instead of five. Sometimes clicking the four corners early on can drastically simplify a chaotic starting board.`
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
