const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "Daily 2 Queens",
    seoContent: `![Daily 2 Queens](https://www.htmlgames.com/uploaded/game/thumb800/daily-2-queens-800x450.webp)

Daily 2 Queens delivers an absolute masterclass in minimalist, logic-driven puzzle design, taking the legendary "Eight Queens" chess problem and elevating it into a brutal, highly structured daily challenge. Set against a clean, visually austere grid divided into irregular, color-coded geometric regions, players are tasked with placing exact pairs of queens on the board while strictly adhering to a punishing set of spatial constraints. The atmosphere is deeply intellectual; there is no narrative, no flashy explosions, and absolutely no luck involved. It is a pure test of your ability to process intersecting rules and execute complex logical deductions through the process of elimination. The visual presentation is highly appealing in its absolute starkness, ensuring the puzzle mechanics remain perfectly readable. Daily 2 Queens is the ultimate, uncompromising brain-training routine for hardcore logic purists who demand rigorous, error-free gameplay.

## How to Play
* Your objective is to place exactly two Queens in every single row, exactly two Queens in every single column, and exactly two Queens within every distinct color-coded region on the board.
* **The Golden Rule (The Touch Rule):** A Queen CANNOT touch another Queen horizontally, vertically, OR diagonally. They must be completely isolated from each other.
* Use your \`Left Mouse Button\` to click an empty square to place a Queen.
* Click an empty square with your \`Right Mouse Button\` (or click the 'X' tool) to place a marker indicating that a Queen mathematically CANNOT be placed in that square.
* The puzzle is solved when all Queens are placed correctly with no rule violations.

## Tips and Tricks
* **Mark Your X's Religiously:** This is the most important technique in the game. If you place a Queen, IMMEDIATELY place X's on all 8 surrounding squares (the touching rule), and place X's along that Queen's entire horizontal row and vertical column.
* **Scan Small Regions First:** Look for color-coded regions that only consist of two or three squares. Because every region MUST contain exactly two Queens, a tiny region leaves you with almost no options, making it incredibly easy to solve immediately.
* **The "L-Shape" Trap:** The no-diagonal-touching rule is brutal. If you place a Queen, the squares sitting in an "L" shape directly next to her diagonal corners are often the only safe spaces left in the adjacent rows. Use this geometry to your advantage.
* **Count Your Placements:** If a massive, sprawling blue region snakes across the board, and you know four of its squares are already blocked by X's from other regions, the remaining open squares might perfectly equal the two Queens you need.
* **Never Guess:** This is a 100% pure math and logic puzzle. If you guess a placement and you are wrong, you will break the board. Every single Queen placement can be proven.`
  },
  {
    title: "Jewels of the Medici",
    seoContent: `![Jewels of the Medici](https://www.htmlgames.com/uploaded/game/thumb800/jewelsofthemedici800450.webp)

Jewels of the Medici plunges the highly competitive tile-swapping genre into the opulent, cutthroat world of the Italian Renaissance, delivering a visual feast of historical artifacts and intensely satisfying combination mechanics. Stepping away from generic, brightly colored gem-swapping, this title embraces a much more grounded, historical thematic approach, requiring players to physically align glowing rubies, ornate signet rings, and ancient Roman coins. The atmosphere is undeniably engaging, perfectly capturing the essence of Florence's most powerful banking family without sacrificing the deep, strategic complexity that hardcore puzzle fans demand. Every level is a meticulously designed challenge, presenting specific objective quotas that must be met within a strict move limit. The visual style is exceptionally polished, utilizing incredibly crisp, high-definition sprites that crackle with aristocratic energy when linked together. It is a pure, unadulterated test of spatial planning and cascade optimization.

## How to Play
* The core mechanic revolves around swapping adjacent jewels to create horizontal or vertical lines of three or more identical artifacts.
* Use your \`Mouse\` to click on a jewel, then click an adjacent one to swap their positions, or simply click and drag.
* Your objective is to fulfill specific level goals (like breaking stone blocks or dropping keys to the bottom of the board) before you run out of allowed moves.
* Matching exactly four jewels creates a glowing line-clear explosive.
* Matching five jewels in an L or T shape creates a devastating area-of-effect dynamite bundle.
* Matching five jewels in a straight row creates a mystical orb that obliterates all artifacts of a specific type from the board.

## Tips and Tricks
* **Prioritize the Objective:** It is incredibly easy to get distracted by a massive chain of silver coins, but if your objective is only golden rings, you are wasting a precious move. Focus laser-like on the goal.
* **Work from the Bottom:** Always prioritize matches at the lowest possible points on the grid. This triggers the maximum number of cascading jewels, often resulting in free, accidental combos as the board settles.
* **Combine the Power-Ups:** The most devastating move in the game is swapping two power-ups with each other. Swapping a line-clear with a bomb creates a massive, cross-shaped explosion that clears half the board instantly.
* **Save the Mystical Orbs:** Do not use the five-in-a-row orb immediately. Save it until you desperately need to clear a specific color to meet your objective, or wait to combine it with another power-up.
* **Analyze the Chokepoints:** Pay close attention to the shape of the board. Some levels have narrow columns, stone blocks, or chains where jewels can get stuck. Focus on breaking those barriers first.`
  },
  {
    title: "BubbleShooter",
    seoContent: `![BubbleShooter](https://www.htmlgames.com/uploaded/game/thumb800/bubble_shooter800450.webp)

BubbleShooter delivers the absolute purest, most unadulterated distillation of the legendary arcade-puzzle formula, completely stripping away the bloated narratives, unnecessary mini-games, and complex meta-progression that plague modern iterations of the genre. This is the genre exactly as it was meant to be played: a massive ceiling of brightly colored spheres, a single aiming cannon, and an unrelenting pursuit of massive, structure-collapsing chain reactions. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core shooting mechanic. You are tasked with calculating angles, bouncing shots off the sidewalls, and grouping colors to trigger massive structural collapses. The visual presentation is highly polished, utilizing crisp, high-definition sprites that pop with color against the simple background. The explosive animations and satisfying audio cues that accompany a board-clearing combo are nothing short of spectacular, providing a constant dopamine drip. BubbleShooter is a pure, uncompromising test of geometric calculation and reflex aiming.

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
    title: "Bottle Shooter",
    seoContent: `![Bottle Shooter](https://www.htmlgames.com/uploaded/game/thumb800/bottleshooter800450.webp)

Bottle Shooter is an absolute masterclass in stripped-down, visceral arcade marksmanship, abandoning complex military simulations in favor of the pure, unadulterated joy of plinking targets in a dusty saloon environment. Forget wind resistance calculations or bullet drop; this title is a high-speed, adrenaline-fueled test of pure reflex aiming and rapid target acquisition. Set against a beautiful, high-definition wooden barroom backdrop, players are tasked with shattering an endless array of glass bottles that pop up across the screen before the strict timer expires. The atmosphere is intensely kinetic and deeply satisfying, relying entirely on the tactile feedback of the shooting mechanic. The visual presentation is exceptionally polished, featuring incredibly satisfying, physics-driven glass shattering effects that spray shards across the screen upon a direct hit. Accompanied by the sharp, percussive crack of a revolver, Bottle Shooter delivers a flawless, bite-sized arcade experience that perfectly captures the "just one more round" mentality.

## How to Play
* The primary objective is to shoot and shatter as many glass bottles as possible before the timer runs out.
* Use your \`Mouse\` to move the crosshair targeting reticule across the screen.
* Click the \`Left Mouse Button\` to fire your weapon.
* **Reloading is Crucial:** Your revolver only holds six bullets. Once empty, you cannot fire. You MUST manually reload by clicking directly on the spinning cylinder icon (usually located in the bottom corner of the screen) or by pressing the \`Spacebar\` (if supported).
* Hitting consecutive bottles without missing builds a massive combo multiplier, drastically increasing your final score.
* Hitting a red explosive bottle will instantly shatter all other bottles currently on the screen.

## Tips and Tricks
* **Rhythm Over Panic:** The most common mistake is spam-clicking wildly when three bottles appear. You only have six bullets. Develop a smooth rhythm: aim, click, aim, click. Missing a shot breaks your combo multiplier, which destroys your high score.
* **Always Reload Early:** Do not wait until you hear the dreaded "click" of an empty chamber. If the screen is briefly clear and you only have two bullets left in the cylinder, reload instantly to ensure you are fully prepared for the next massive wave of bottles.
* **Aim for the Base:** The hitboxes on the bottles can sometimes be tricky near the thin neck. Always aim your crosshair directly at the fat, center mass or the heavy base of the bottle to guarantee a hit.
* **Prioritize the Falling Targets:** Some targets will pop up and stay stationary, while others will pop up and immediately begin falling downward. Always shoot the moving/falling targets first before they disappear off the bottom of the screen.
* **Save the Explosives:** If a red explosive bottle appears alongside three normal bottles, do not shoot the red one immediately. Shoot the three normal bottles to build your combo, and shoot the red one at the very last second before it disappears.`
  },
  {
    title: "Mahjongg Pyramids",
    seoContent: `![Mahjongg Pyramids](https://www.htmlgames.com/uploaded/game/thumb800/mahjonggpyramids800450.webp)

Mahjongg Pyramids plunges the ancient, highly structured mechanics of traditional Chinese tile-matching into a breathtaking, deeply atmospheric Egyptian environment. Moving far beyond the sterile, flat green felt of standard solitaire games, this title constructs massive, complex architectural structures using beautifully illustrated tiles depicting pharaohs, scarabs, Ankhs, and hieroglyphics. The atmosphere is incredibly relaxing and immersive, trading the tense ticking clocks of arcade games for the soothing, ambient sounds of a desert excavation. You are tasked with analyzing towering, overlapping tile structures, meticulously searching for exposed pairs to dismantle the board like a digital archaeologist. The visual presentation is exceptionally polished, utilizing earthy, rich color palettes and dynamic lighting effects that simulate sunlight striking ancient stone, ensuring the puzzle remains perfectly readable even when the board is massively congested. Mahjongg Pyramids is a highly successful thematic reskin, proving that a timeless puzzle formula can be completely refreshed with a strong, cohesive artistic vision.

## How to Play
* Your objective is to completely clear the entire screen by matching identical pairs of Egyptian-themed tiles.
* Use your \`Left Mouse Button\` to select a "free" tile, then click a matching "free" tile to instantly eliminate both from the board.
* A tile is strictly considered "free" only if there is no other tile resting on top of it, and it is completely unblocked on at least one of its immediate left or right vertical sides.
* Because the tiles heavily overlap, matching tiles on the top layers is absolutely critical to reveal and unlock the hidden tiles buried beneath them.
* If you clear every tile from the screen, you win. If you run out of valid, accessible matches, you lose.

## Tips and Tricks
* **Dismantle the Towers First:** Always focus your initial efforts on breaking down the highest, thickest stacks of tiles on the board. Leaving massive vertical columns for the late game is a guaranteed way to run out of moves.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board gives you vastly more horizontal matching options.
* **Memorize the Categories:** Unlike traditional Mahjong, this version features groups of tiles (like different types of gods or different colored vases) that can be matched with each other, even if they aren't identical. Learn these groups instantly.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach scarab tiles on the very outer edge of the board, ignore them! Save them. You might desperately need them later to match a scarab tile buried deep in the center tower.
* **Use the Reshuffle (If Available):** Treat the shuffle button like an absolute last resort. Never use it just because you are having trouble finding a match; only use it when the board is verifiably dead.`
  },
  {
    title: "Gem Challenge",
    seoContent: `![Gem Challenge](https://www.htmlgames.com/uploaded/game/thumb800/gemchallenge800450.webp)

Gem Challenge strips the arcade puzzle genre down to its absolute, most viscerally satisfying core, delivering a pure, unadulterated test of rapid pattern recognition and split-second hand-eye coordination. Moving entirely away from the slow, methodical swiping of Match-3 games or the complex geometry of falling block puzzles, this title embraces a chaotic, "Whack-A-Mole" style clicking mechanic that rewards raw speed above all else. Set against a vibrant, brightly colored grid, you are presented with a massive wall of tightly packed, glowing seashells, starfish, and gems. Your objective is intensely focused: a specific target shell is displayed in the corner of the screen, and you must rapidly locate and click every identical shell on the main grid before a brutal timer expires. The atmosphere is deeply kinetic and immensely stressful, perfectly capturing the arcade joy of high-speed sorting. The visual presentation is highly polished, utilizing crisp, geometric textures that pop instantly, ensuring your eyes can dart across the board without hesitation. Gem Challenge is a pure shot of adrenaline.

## How to Play
* The primary objective is to click as many correct target items as possible before the timer runs out.
* Look at the small indicator box in the top right corner of the screen. This box displays your current "Target" item (e.g., a blue seashell).
* Rapidly scan the main grid. Use your \`Left Mouse Button\` to click on EVERY single item on the grid that perfectly matches the target.
* The target item will frequently change without warning, forcing you to instantly recalibrate your eyes to look for a new shape and color.
* Clicking the correct item awards points and often slightly extends your timer.
* Clicking the WRONG item (a misclick) will usually result in a severe time penalty or a points deduction.

## Tips and Tricks
* **Don't Look at the Mouse:** Your eyes should never be looking at your cursor. Your eyes should be scanning the grid two steps ahead of where your hand is currently clicking. Rely entirely on your peripheral vision to guide the mouse.
* **Shape Over Color:** When the target changes, human brains naturally try to identify the color first. However, the game frequently floods the board with five different items that are all the exact same shade of blue. Train your brain to identify the physical silhouette (the jagged edge of the star, the smooth curve of the pearl) rather than just the color.
* **The "Typewriter" Scan:** Do not scan the board randomly. When a new target appears, scan the board like you are reading a book—left to right, top to bottom. This ensures you never miss an isolated item tucked into a corner.
* **Stop Clicking During Transitions:** When the target icon changes, your brain takes a millisecond to register the new shape. During this millisecond, you are highly likely to accidentally click the *old* target out of muscle memory. Force your hand to pause when the icon shifts.
* **Zone Out:** The most successful players of rapid-click games enter a state of "flow" where they stop actively thinking about the shapes and let their subconscious pattern recognition take over. Relax your eyes and trust your reflexes.`
  },
  {
    title: "Love Bubbles",
    seoContent: `![Love Bubbles](https://www.htmlgames.com/uploaded/game/thumb800/lovebubbles800450.webp)

Love Bubbles delivers the absolute purest, most unadulterated distillation of the legendary arcade-shooter formula, completely replacing the standard, sterile geometric spheres with a vibrant, charming aesthetic of glowing hearts and romantic hues. This is the genre exactly as it was meant to be played, but softened with a delightful thematic twist: a massive ceiling of brightly colored hearts, a single aiming cannon, and an unrelenting pursuit of massive, structure-collapsing chain reactions. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core shooting mechanic. You are tasked with calculating angles, bouncing shots off the sidewalls, and grouping colors to trigger massive structural collapses. The visual presentation is highly polished, utilizing crisp, high-definition sprites that pop with pinks and reds against the simple background. The explosive animations and satisfying audio cues that accompany a board-clearing combo are nothing short of spectacular, providing a constant dopamine drip. Love Bubbles is a pure, uncompromising test of geometric calculation and reflex aiming wrapped in a sweet package.

## How to Play
* The primary objective is to clear the entire screen of heart bubbles before the ceiling physically lowers and crushes your cannon.
* You control a cannon at the bottom of the screen holding a specifically colored heart.
* Use your \`Mouse\` to aim the trajectory line.
* Click the \`Left Mouse Button\` to fire your heart bubble.
* When your fired heart connects with a cluster of two or more hearts of the EXACT SAME color, the entire connected group will pop and disappear.
* If you shoot and fail to make a match a certain number of times (indicated by grey dots at the bottom), the entire ceiling will shift downward by one row.

## Tips and Tricks
* **Master the Bank Shot:** You cannot always shoot straight. You MUST learn to bounce your hearts off the left and right walls to ricochet them into tight, otherwise unreachable gaps near the top of the structure.
* **Sever the Root:** Do not just shoot at the lowest hanging hearts. Look for the "structural joints"—small clusters of hearts holding up massive, mixed-color chunks below them. If you destroy the joint, the entire massive chunk below it falls instantly, granting huge points.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* heart color. Knowing what you have in reserve completely dictates where you should place your current shot.
* **Don't Build Walls:** If you have a red heart and no red clusters are visible, do not just shoot it directly into the middle of the board, blocking other colors. Shoot it off to the extreme left or right edge to keep the center open.
* **Clear High Colors Completely:** If there are only two yellow hearts left on the entire board, prioritize eliminating them immediately. Once a color is entirely gone, the game will stop generating it in your cannon, drastically increasing your odds of getting the colors you actually need.`
  },
  {
    title: "Achilles Solitaire",
    seoContent: `![Achilles Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/achillessolitaire800450.webp)

Achilles Solitaire completely abandons the traditional, vertical-column sequence building of standard Klondike, replacing it with a brilliant, highly visual, and entirely pair-matching mechanic that feels remarkably similar to Mahjong Solitaire, but utilizing a standard deck of playing cards. Instead of building descending runs of alternating colors, players are tasked with dismantling a massive, overlapping 2D structure of cards by finding mathematically linked pairs. The atmosphere is incredibly fast-paced, highly addictive, and requires a completely different type of spatial strategy; you aren't managing columns, you are managing exposed edges. The visual presentation is exceptionally clean, utilizing crisp, classic playing card graphics set against a traditional green felt backdrop, ensuring perfect readability even when the massive board becomes heavily congested. Achilles Solitaire is the ultimate, bite-sized palette cleanser for card game fans, offering a lightning-fast gameplay loop that perfectly captures the "just one more try" mentality while remaining brutally difficult to master.

## How to Play
* The primary objective is to completely clear all the cards from the board.
* Use your \`Left Mouse Button\` to click and select a fully exposed card.
* **The Rules of Removal:** You can only remove cards in pairs. The pair must EITHER be exactly identical in value (e.g., matching a 7 with a 7, regardless of suit), OR the pair must be exactly one rank apart in value (e.g., matching a 7 with an 8, or a 7 with a 6).
* **The Exposure Rule:** Just like Mahjong, a card is strictly considered "exposed" and playable only if there is absolutely no other card resting on top of it. It must be a "top" card.
* Aces connect to Kings, allowing the sequences to loop.
* If you clear every card, you win. If you have no valid matching pairs left on the board, you lose.

## Tips and Tricks
* **Prioritize the Stacks:** The cards in this game are layered. Always focus your matching efforts on breaking down the thickest stacks of overlapping cards. If you match two cards that are already on the bottom layer, you haven't uncovered any new information.
* **Save the Identical Pairs:** If you have a 7 and an 8 exposed, and you also have two 5s exposed... ALWAYS match the 7 and 8 first. Because identical pairs (like two 5s) are a guaranteed, unbreakable match, you should save them as a "get out of jail free" card for when you are stuck.
* **Scan for Blockers:** If a King is covering a massive pile of cards, and you see a Queen or an Ace available elsewhere on the board, prioritize using them to remove that King immediately.
* **Don't Rush:** It is incredibly tempting to just spam-click pairs as fast as you see them. Take three seconds to analyze the board. If you have a 6, and you see a 5 and a 7 on the board, trace both paths mentally to see which removal uncovers the most cards underneath.
* **Track the Ranks:** If you need a 10 to clear a 9, but you remember that you have already matched all four 10s and all four 8s earlier in the game, that 9 is now permanently dead. You must restart.`
  },
  {
    title: "Hexa Merge",
    seoContent: `![Hexa Merge](https://www.htmlgames.com/uploaded/game/thumb800/hexamerge800450.webp)

Hexa Merge fundamentally rewrites the rules of the massively popular sliding number genre (like 2048 or Threes) by abandoning the rigid 4-way square grid in favor of a vastly more complex, six-sided honeycomb structure. Instead of frantically swiping the entire board to force numbers together, this game grants players complete, unadulterated surgical control. You are tasked with dragging irregular, connected clumps of hexagonal numbered tiles onto a honeycomb board, physically rotating them to slot them perfectly into place. When three or more identical tiles touch on the honeycomb, they instantly merge into a single tile of a higher value. The atmosphere is deeply calculating and immensely satisfying; you are essentially building a numerical pipeline, managing a constant influx of low-value tiles to construct massive, concentrated sums. The visual presentation is exceptionally clean, utilizing crisp, contrasting colors for different numerical tiers and satisfying, snappy animations. Hexa Merge is a brilliant puzzle experience that trades rapid reflexes for pure, unadulterated spatial logic and long-term cascade planning.

## How to Play
* The primary objective is to survive as long as possible and reach the highest possible numbers by merging identical tiles.
* You are presented with connected clumps of hexagonal tiles at the bottom of the screen (often containing one or two numbers).
* Click on the clump at the bottom to physically rotate it, aligning the numbers exactly how you want them.
* Use your \`Mouse\` to drag the clump onto the main honeycomb grid and drop it into an empty space.
* When three or more identical numbered tiles touch each other on the grid, they will instantly merge into a single tile with a higher value (e.g., three "4"s merge into one "8").
* The new, higher-value tile will spawn exactly at the location of the *last* tile you placed to trigger the merge.
* The game is instantly over if you cannot physically fit the new piece onto the grid.

## Tips and Tricks
* **Control the Drop Zone:** Because the newly merged tile appears exactly where you dropped the final triggering piece, you have total control over where massive numbers accumulate. Always try to pull your high numbers toward the outer edges of the honeycomb where they won't block the center.
* **The Domino Effect:** Do not just focus on merging three tiles. Try to set up structures where merging three 4s creates an 8, which then instantly touches two other 8s already on the board, creating a massive, automated chain reaction.
* **Keep the Center Clear:** The hexagonal grid fills up incredibly fast. If you place random, isolated numbers directly in the dead center of the board, you will destroy your ability to place large, unwieldy two-piece clumps later. Build from the outside in.
* **Rotate Before You Drag:** Always click the piece at the bottom of the screen multiple times to see all of its rotational options before you drag it to the board. The difference between a horizontal piece and a vertical piece is life or death.
* **Group by Color/Value:** The visual design of the game naturally groups numbers by color. Try to keep your cool colors (low numbers) on one side of the board, and your hot colors (high numbers) on the other.`
  },
  {
    title: "Connect the Bubbles",
    seoContent: `![Connect the Bubbles](https://www.htmlgames.com/uploaded/game/thumb800/connect-the-bubbles-800x450.webp)

Connect the Bubbles strips the wildly popular dot-connecting genre down to its absolute, most highly tactile and satisfying core. Moving away from the chaotic, gravity-based drops or rigid four-way sliding of standard clones, this title grants players complete, unadulterated surgical control over massive chain reactions. Set against a clean, visually uncluttered digital grid, you are tasked with physically linking brightly colored bubbles by drawing a continuous, unbroken path through them. The atmosphere is deeply calculating and immensely relaxing; you are essentially constructing a winding, colorful pipeline that weaves around obstacles to clear massive sections of the board in a single stroke. The visual presentation is exceptionally clean, utilizing crisp, contrasting colors and satisfying, snappy animations that trigger when a massive chain finally collapses. Connect the Bubbles is a brilliant, unpressured puzzle experience that trades rapid reflexes for pure, unadulterated spatial logic and long-term cascade planning, perfect for players looking for a methodical, dopamine-heavy loop.

## How to Play
* The primary objective is to fulfill specific level goals (like clearing 30 red bubbles or breaking ice blocks) before you run out of allowed moves.
* Use your \`Mouse\` to click and hold on a colored bubble, then drag a line through adjacent bubbles of the EXACT SAME color.
* You can draw connections horizontally, vertically, and diagonally, allowing for incredibly complex, winding chains that snake across the entire board.
* Release the \`Left Mouse Button\` to collapse the chain. All the connected bubbles will instantly pop and vanish.
* Gravity will pull the remaining bubbles down, and new bubbles will fall from the top of the screen to fill the gaps.

## Tips and Tricks
* **Maximize the Chain:** Never settle for connecting just three bubbles if a fourth or fifth is available. A longer chain almost always results in a significantly higher score, clears more clutter from the board, and often spawns a powerful bomb.
* **Prioritize the Objective:** It is incredibly easy to get distracted by a massive chain of 15 blue bubbles, but if your objective is only yellow bubbles, you are wasting a precious move. Focus laser-like on the goal.
* **Work from the Bottom:** Always prioritize drawing chains at the lowest possible points on the grid. This triggers the maximum number of cascading bubbles dropping from the ceiling, often resulting in free, accidental clusters forming as the board settles.
* **The "Bridge" Technique:** You can often connect two separated clusters of red bubbles by linking them through a single red bubble sitting diagonally between them. Look for these crucial bridge bubbles before making a move.
* **Square is King:** If you manage to draw a completely closed loop (a square or circle) of the same color, it acts as a massive bomb, instantly destroying EVERY SINGLE bubble of that color currently on the board.`
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
