const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const manualData = [
  {
    title: "BBQ Roast",
    seoContent: `![BBQ Roast](https://www.htmlgames.com/uploaded/game/thumb800/bbqroast800450.webp)

BBQ Roast injects a massive dose of mouth-watering, culinary energy into the highly addictive, mathematical puzzle genre, replacing sterile numbers or abstract shapes with beautifully illustrated, sizzling barbecue ingredients. Set against a highly detailed grid resembling a hot iron grill, players are tasked with managing a board filled with brightly colored vegetables, raw meat, and marinades. Instead of swiping the entire board (like 2048) or swapping adjacent tiles, you must physically draw a line to connect three or more identical items. When connected, they "roast" and merge into a single, higher-tier, fully cooked item (e.g., three raw peppers merge into a roasted pepper, which merges into a skewer). The atmosphere is deeply relaxing and immensely satisfying, accompanied by the ambient sound of sizzling meat and crackling fire. The visual presentation is highly polished, utilizing crisp, high-definition sprites that look genuinely delicious. BBQ Roast is a pure, unpressured test of sequence planning and inventory management, requiring you to carefully build massive chains without cluttering your grill.

## How to Play
* The primary objective is to fulfill specific cooking goals (e.g., create 3 fully loaded shish kebabs) before running out of moves or space on the grill.
* Use your \`Mouse\` to click and hold the \`Left Mouse Button\` on a raw ingredient.
* Drag your mouse across adjacent identical ingredients (horizontally, vertically, or diagonally) to draw a connecting line.
* You must connect at least THREE identical items to trigger a merge/roast.
* Release the mouse button to merge the connected items into a single, upgraded, cooked item at the exact location of the *last* item in your chain.
* **The Upgrade Path:** Items follow a strict evolutionary path (e.g., Raw Veggie -> Roasted Veggie -> Meat Skewer -> Gourmet Platter).

## Tips and Tricks
* **Control the Merge Point:** The absolute most critical mechanic in this game is understanding that the new, upgraded item spawns exactly where you *release* your mouse click. Always end your chain in a strategic location (usually an open corner) to avoid trapping the new item behind a wall of basic mushrooms.
* **Build Massive Chains:** While three items are required to merge, connecting five, seven, or ten items simultaneously often yields massive bonus points and sometimes spawns powerful board-clearing spatulas or grill flares. Never settle for three if you can safely connect five.
* **Keep High Tiers Together:** Try to build your highest-tier items (like the massive platters) directly next to each other. If you randomly spawn a platter in the top left corner, and another platter in the bottom right, it will be incredibly difficult to eventually merge them.
* **Clear the Clutter:** If the grill is filling up with low-tier raw onions that you don't need, use a few moves to merge them just to get them out of the way and free up physical space.
* **Plan the Cascade:** Before you execute a merge, look at what the new item will be. Will that new item immediately sit next to two other identical items, allowing for a rapid, secondary combo?`
  },
  {
    title: "Scary Bubbles",
    seoContent: `![Scary Bubbles](https://www.htmlgames.com/uploaded/game/thumb800/scarybubbles800450.webp)

Scary Bubbles delivers the absolute purest, most unadulterated distillation of the legendary arcade formula, completely stripping away the bloated narratives and complex meta-progression that plague modern iterations, and wrapping the core mechanics in a delightfully spooky Halloween aesthetic. This is the genre exactly as it was meant to be played: a massive ceiling of brightly colored spheres (now featuring pumpkins, ghosts, and eyeballs), a single aiming cannon, and an unrelenting pursuit of massive, structure-collapsing chain reactions. The atmosphere is undeniably hypnotic and deeply engaging, relying entirely on the visceral satisfaction of the core geometric shooting mechanic accompanied by eerie, festive music. You are tasked with calculating angles, bouncing shots off the sidewalls, and grouping colors to trigger massive structural collapses before the weight of the bubbles crushes your launcher. The visual presentation is highly polished, utilizing crisp, high-definition sprites that pop with color against the dark background. Scary Bubbles is a pure, uncompromising test of geometric calculation and reflex aiming.

## How to Play
* The primary objective is to clear the entire screen of spooky bubbles before the ceiling physically lowers and crushes your cannon.
* You control a cannon at the bottom of the screen holding a specifically colored bubble.
* Use your \`Mouse\` to aim the trajectory line.
* Click the \`Left Mouse Button\` to fire your bubble.
* When your fired bubble connects with a cluster of two or more bubbles of the EXACT SAME color, the entire connected group will pop and disappear.
* If you shoot and fail to make a match a certain number of times (indicated by grey dots at the bottom), the entire ceiling will shift downward by one row.

## Tips and Tricks
* **Master the Bank Shot:** You cannot always shoot straight. You MUST learn to bounce your bubbles off the left and right walls to ricochet them into tight, otherwise unreachable gaps near the top of the structure.
* **Sever the Root:** Do not just shoot at the lowest hanging bubbles. Look for the "structural joints"—small clusters of bubbles holding up massive, mixed-color chunks below them. If you destroy the joint, the entire massive chunk below it falls instantly, granting huge points.
* **Check Your Next Ammo:** Always keep one eye on the small indicator showing your *next* bubble color. Knowing what you have in reserve completely dictates where you should place your current shot.
* **Don't Build Walls:** If you have an orange pumpkin bubble and no orange clusters are visible, do not just shoot it directly into the middle of the board, blocking other colors. Shoot it off to the extreme left or right edge to keep the center open.
* **Clear High Colors Completely:** If there are only two green eyeball bubbles left on the entire board, prioritize eliminating them immediately. Once a color is entirely gone, the game will stop generating it in your cannon, drastically increasing your odds of getting the colors you actually need.`
  },
  {
    title: "Carrom Pool",
    seoContent: `![Carrom Pool](https://www.htmlgames.com/uploaded/game/thumb800/carrompool800450.webp)

Carrom Pool delivers an incredibly deep, mathematically rich digital adaptation of the legendary South Asian tabletop game, fundamentally altering the standard mechanics of billiards or pool by replacing heavy balls and cues with flat wooden discs (carrom men) and a heavy "striker" disc, all flicked entirely by hand (or mouse). Set against a clean, visually minimalist wooden board with four corner pockets, players are locked in a relentless battle against a highly capable AI opponent. Your objective is intensely focused: you must use your striker to precisely ricochet your assigned discs (black or white) into the pockets before your opponent does the same. However, the game introduces a terrifying, high-risk mechanic: the "Queen" (the red disc). You must pocket the Queen AND immediately pocket one of your own discs on the very next shot (the "cover") to claim her points, otherwise, she is returned to the board. The visual presentation is highly polished, utilizing incredibly realistic friction and collision physics. Carrom Pool is a pure test of geometric calculation and extreme precision.

## How to Play
* The primary objective is to pocket all of your assigned discs (either black or white) before your opponent.
* You shoot by flicking the heavy "Striker" disc from the baselines on your side of the board.
* Use your \`Mouse\` to position the striker along your baseline.
* Click and drag the mouse backward (away from the target) to determine the power and angle of your shot. A trajectory line often helps with the initial aim.
* Release the \`Left Mouse Button\` to flick the striker into the cluster of discs.
* **The Queen Rule:** The red Queen disc is highly valuable. If you pocket the Queen, you MUST pocket one of your own colored discs on your very next shot. If you miss, the Queen is returned to the center of the board.
* You cannot win the game until the Queen has been legally pocketed and covered by someone.

## Tips and Tricks
* **Master the Cut Shot:** Very rarely will you have a straight line from your striker, to your disc, to the pocket. You must learn to hit your disc on the extreme left or right edge (a "cut" shot) to drastically alter its trajectory into a pocket.
* **Use the Rebounds:** The wooden borders of a Carrom board are incredibly bouncy. Do not be afraid to shoot your striker aggressively into a side wall to bounce it completely across the board and hit a disc from behind.
* **Defensive Play is Crucial:** If you do not have a clear shot at one of your own discs, do NOT just smash the cluster randomly. Try to softly tap the striker to push one of your opponent's discs away from a pocket, or push one of your own discs closer to a pocket for your next turn.
* **Don't Chase the Queen Early:** Let your opponent do the hard work of breaking the center cluster and exposing the red Queen. Wait until you have a guaranteed easy shot on one of your own discs (for the cover) before you attempt to pocket the Queen.
* **Watch the Striker:** If you accidentally pocket your own Striker disc (a foul), you will be penalized (usually by having one of your previously pocketed discs returned to the board). Control your power!`
  },
  {
    title: "Draculi",
    seoContent: `![Draculi](https://www.htmlgames.com/uploaded/game/thumb500/draculi500300.webp)

Draculi takes the highly structural, geometric pathfinding mechanics of the classic Onet or Kyodai genre and injects a massive layer of playful spooky energy, wrapping the intense spatial calculations in a charming Halloween aesthetic. Instead of 3D, overlapping pyramids, this game places every single thematic tile (featuring incredibly crisp, high-definition vampires, bats, pumpkins, and potions) flat on a single-layer, 2D grid. Your objective is not just to find matching pairs, but to prove that a clear, unobstructed path can physically be drawn between them. The atmosphere is deeply engaging, accompanied by eerie, festive music, requiring intense spatial calculation as you navigate the dense grid. Because the tiles do not overlap, you must rely entirely on line-of-sight optimization and the ability to visualize invisible, snaking pathways through the maze of remaining tiles. Draculi is a pure, uncompromising test of geometric routing and visual parsing, perfect for quick, brain-training puzzle sessions.

## How to Play
* Your primary objective is to clear the entire flat grid by connecting identical pairs of Halloween tiles before the strict timer runs out.
* Use your \`Mouse\` to click on a tile, then click on a matching tile to attempt a connection.
* **The Golden Pathfinding Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two tiles using a maximum of three straight lines (which means no more than two sharp 90-degree corners).
* You can connect tiles that are sitting directly next to each other, or you can route the path entirely outside the main grid boundary (the empty space surrounding the puzzle).
* If you successfully clear all tiles, you win. If no more valid moves exist, the board will usually automatically reshuffle or penalize you.

## Tips and Tricks
* **Clear the Perimeter First:** Tiles sitting on the absolute outer edge of the board are by far the easiest to connect, because their path can route freely through the empty space outside the grid using the two-turn rule. Clear the borders instantly.
* **Look for the "U" Shape:** The two-turn rule allows for a perfect "U" shape connection. If two identical vampire tiles are on the exact same row, but separated by other tiles, check if there is empty space directly above or below both of them to draw the U through the air.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the grid from the outside toward the dense center.
* **Don't Tunnel Vision:** If you can't find a path for two specific bat tiles, stop looking at them. Scan the entire board for an obvious, free match to keep the timer from running down.
* **Scan for Dead Ends:** If a tile is completely surrounded on all four sides by different tiles, it is fundamentally impossible to match it right now. Ignore it completely until you clear at least one of its neighbors.`
  },
  {
    title: "Mahjong - Butterfly Garden",
    seoContent: `![Mahjong - Butterfly Garden](https://www.htmlgames.com/uploaded/game/thumb800/mahjongbutterflygarden800450.webp)

Mahjong - Butterfly Garden delivers an incredibly robust, deeply engaging package that serves as both a masterclass in classic Chinese tile-matching and a comprehensive tutorial for the genre's many variations. Completely stripping away the sterile, casino-like themes of older adaptations, this title is set against a vibrant, visually stunning botanical garden filled with fluttering insects and blooming flowers. The defining feature of this specific game is its massive 200-level campaign that seamlessly shifts between five distinct Mahjong rulesets (e.g., standard Solitaire, Connect/Onet, Slide, and Ten). The atmosphere is deeply relaxing and incredibly focused, trading the tense ticking clocks of arcade games for a soothing, meditative puzzle environment. The visual presentation is highly functional, utilizing crisp, high-contrast traditional symbols and beautiful floral artwork that ensures perfect readability even when the massive stone structures are heavily congested. It is the ultimate, all-in-one brain-training routine for puzzle enthusiasts.

## How to Play
* The primary objective is to clear all tiles from the board, but the specific *method* of clearing them changes depending on the level's ruleset.
* **Standard Mahjong:** Click two identical "free" tiles (unblocked on top and at least one side) to remove them.
* **Mahjong Connect (Onet):** Click two identical tiles that can be connected by a clear path with no more than two 90-degree turns.
* **Mahjong Slide:** Physically drag tiles in straight lines until they collide with a matching tile.
* **Mahjong Ten:** Match two exposed tiles whose numerical values add up to exactly 10.
* Read the brief instructions at the start of every single level, as the mechanics will shift dramatically.

## Tips and Tricks
* **Adapt to the Ruleset:** Do not try to apply standard Mahjong rules to a Connect level. In standard Mahjong, you prioritize the top of the pyramid. In Connect, you must prioritize the absolute outer perimeter of the flat grid.
* **Dismantle the Towers First (Standard Mode):** When playing the classic ruleset, always focus your absolute highest priority on breaking down the tallest, thickest stacks of tiles in the dead center of the board. Leaving massive vertical columns for the late game is a guaranteed loss.
* **The "Peel" Strategy:** Try to evenly peel layers off the entire structure rather than drilling a deep hole in one specific spot. An even, flat board offers vastly more horizontal matching options and reveals more hidden tiles simultaneously.
* **Don't Rush the Obvious Match:** If you see a pair of easy-to-reach Bamboo tiles on the very outer edge of the board, ignore them! Save them. You might desperately need those outer tiles later to match a Bamboo tile buried deep in the center tower.
* **Use the Undo Button:** If you make a match and it immediately deadlocks the board, use the undo button to reverse it. Always scout the board to see if a specific tile has three visible copies; if it does, match the two that unblock the most hidden tiles.`
  },
  {
    title: "Alien Pyramid Solitaire",
    seoContent: `![Alien Pyramid Solitaire](https://www.htmlgames.com/uploaded/game/thumb800/alien-pyramid-solitaire-800x450.webp)

Alien Pyramid Solitaire completely re-invents the complex, alternating-color mechanics of standard card sorting by stripping it down to a brutally elegant, mathematically pure game of addition, all wrapped in a quirky, vibrant extraterrestrial sci-fi aesthetic. Moving away from the green felt of a casino, this title constructs a massive, overlapping triangular structure using beautifully illustrated playing cards featuring UFOs, little green men, and cosmic anomalies. Your objective is intensely focused: completely dismantle the massive pyramid by pairing exposed cards that mathematically add up to exactly thirteen. The atmosphere is deeply calculating but incredibly thematic, trading intense arcade pressure for a soothing puzzle environment. The visual presentation is exceptionally polished, utilizing crisp, highly legible typography that ensures perfect readability even when the massive card structure is heavily congested. It is a masterclass in taking a simple arithmetic concept and turning it into a highly addictive, atmospheric puzzle experience.

## How to Play
* Your primary objective is to clear all the cards from the massive alien pyramid structure.
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
    title: "Circus Pairs",
    seoContent: `![Circus Pairs](https://www.htmlgames.com/uploaded/game/thumb800/circuspairs800450.webp)

Circus Pairs strips the spatial puzzle genre down to its absolute, most mathematically pure and elegantly simple core, delivering a digital adaptation of the classic "Pelmanism" (or Concentration) memory game, wrapped in a vibrant, high-energy circus aesthetic. Set against a clean, visually uncluttered grid (the "Big Top"), players are presented with a massive board of face-down cards. Your objective is intensely focused and relies entirely on short-term cognitive retention: you must physically flip two cards over at a time, searching for identical pairs of circus performers, animals, and props. The atmosphere is deeply cerebral and intentionally demanding, requiring an intense level of visual mapping. If the cards match, they are removed; if they do not, they are flipped back over, forcing you to memorize their exact spatial location for future moves. Visually, the game opts for a highly colorful, cartoonish aesthetic, ensuring that every clown, lion, and acrobat is rendered with crisp distinction. Circus Pairs is the ultimate, timeless brain-training routine for improving working memory.

## How to Play
* The primary objective is to find and match all identical pairs of cards to clear the entire board.
* The game begins with a grid of face-down cards.
* Use your \`Mouse\` to click on any single card to flip it face-up, revealing the circus image.
* Click a second card to flip it face-up.
* If the two images are exactly identical, the pair is matched and removed from the board.
* If the images do not match, both cards will automatically flip face-down again after a brief pause.
* You must continue this process until every card has been matched.

## Tips and Tricks
* **The Grid System (The Golden Rule):** Do not just click randomly! Mentally assign a coordinate system to the board (e.g., Row 1 Column 2). When you flip a card you don't need, silently repeat its location and image in your head ("Lion is at Top Left").
* **Never Guess Twice:** If you know exactly where the Elephant is located, do NOT flip it first. Flip an unknown card first. If the unknown card is the matching Elephant, you know exactly where the second one is. If the unknown card is a Clown, you haven't wasted a turn flipping two cards you already knew.
* **Group by Color:** If you have trouble remembering the specific characters, try to remember the dominant background color of the card. ("The yellow card is in the bottom corner").
* **Scan Methodically in the Early Game:** In the first few turns, do not try to match anything. Systematically flip the first four cards in a row just to gather information and populate your mental map.
* **Slow Down:** In untimed modes, do not rush. Stare at the two mismatched cards for the entire duration they are face-up to burn their locations into your visual memory.`
  },
  {
    title: "Klaverjassen",
    seoContent: `![Klaverjassen](https://www.htmlgames.com/uploaded/game/thumb800/klaverjassen800450.webp)

Klaverjassen delivers a brilliant, highly competitive digital adaptation of the deeply strategic, quintessential Dutch trick-taking card game, stripping away casual play in favor of a mathematically intense, partnership-based duel. Set against a clean, visually minimalist green felt table, players are locked in a relentless two-on-two battle against highly capable AI opponents. Your objective is intensely focused: you and your partner must win tricks containing valuable point cards to reach a target score before the opposing team. The game relies entirely on a strict, and often counter-intuitive, ranking hierarchy (where the Jack of the trump suit is the highest card, not the Ace). The atmosphere is deeply competitive, requiring masterful communication (through card play) with your AI partner. The visual presentation is highly polished, utilizing crisp traditional playing cards that ensure perfect readability. Klaverjassen is an uncompromising test of card counting, trump management, and aggressive tactical signaling.

## How to Play
* The primary objective is to score points by winning tricks that contain high-value cards, specifically in the chosen Trump suit.
* The game is played with a 32-card deck (7s through Aces only).
* **The Unique Ranking:** In the Trump suit, the Jack is the highest card (20 points), followed by the 9 (14 points), then Ace, 10, K, Q, 8, 7. In non-trump suits, the Ace is highest (11 points).
* You MUST follow suit if led. If you cannot follow suit, you MUST play a trump card (if you have one) to win the trick.
* **The Variants:** You can choose to play "Amsterdams" (you cannot over-trump your partner if they are already winning the trick) or "Rotterdams" (you MUST over-trump, even if your partner is winning).
* You can also choose how Trump is selected: "Normal" (players choose) or "Utrechts" (first player is forced to choose).

## Tips and Tricks
* **Count the Trump:** This is the most critical skill. You must memorize exactly how many trump cards have been played. If you know you hold the highest remaining trump card (the "Boss"), you control the entire board and can safely lead your aces.
* **The "Roem" (Meld) Bonus:** You earn massive bonus points (20, 50, or 100) for playing a sequence of three or four cards of the same suit in a single trick, or a King and Queen of the trump suit ("Stuk"). Always try to organize your hand to bait out these sequences.
* **Feed Your Partner:** If your partner is clearly going to win the trick (e.g., they played the highest trump), do not play a useless 7 or 8. Throw your highest point card (like a 10 or Ace of a non-trump suit) into the trick so your team collects those points.
* **Lead Trump to Disarm:** If your team chose the trump suit and you hold strong cards, immediately lead a trump card on the first turn. This forces the opponents to burn their trump cards early, leaving them defenseless later.
* **Signaling (Seinen):** In the Amsterdams variant, if you discard a low card of a specific suit while you cannot follow the lead suit, you are signaling to your partner that you want them to lead that suit on the next turn.`
  },
  {
    title: "Dark Mahjong Connect",
    seoContent: `![Dark Mahjong Connect](https://www.htmlgames.com/uploaded/game/thumb800/darkmahjongconnect800450.webp)

Dark Mahjong Connect (a highly polished variant of the classic Onet or Kyodai genre) injects a massive dose of highly structural, geometric pathfinding into the tile-matching formula, delivering a visual puzzle that demands intense calculation wrapped in a brooding, minimalist, high-contrast gothic aesthetic. Stepping entirely away from the 3D, overlapping pyramids of standard Mahjong Solitaire, this game places every single tile (featuring glowing, archaic symbols and crisp Chinese characters) flat on a massive, single-layer 2D grid against a pitch-black background. Your objective is not just to find matching pairs, but to prove that a clear, unobstructed path can physically be drawn between them using a very specific set of routing rules. The atmosphere is deeply engaging, requiring players to constantly weigh the immediate satisfaction of a simple edge match against the necessity of unblocking the dense center of the board. The visual style is exceptionally clean, ensuring perfect readability even when the board is packed. It is a pure test of spatial planning and line-of-sight optimization.

## How to Play
* Your primary objective is to clear the entire flat grid by connecting identical pairs of glowing tiles before the strict timer runs out.
* Use your \`Mouse\` to click on a tile, then click on a matching tile to attempt a connection.
* **The Golden Rule:** A connection is only valid if a clear, unobstructed path can be drawn between the two tiles using a maximum of three straight lines (which means no more than two 90-degree corners).
* You can connect tiles that are sitting directly next to each other, or you can route the path entirely outside the main grid boundary (the empty space surrounding the puzzle).
* If you successfully clear all tiles, you win. If no more valid moves exist, the board will usually automatically reshuffle or penalize you.

## Tips and Tricks
* **Clear the Perimeter First:** Tiles sitting on the absolute outer edge of the board are by far the easiest to connect, because their path can route freely through the empty space outside the grid using the two-turn rule. Clear the borders instantly.
* **Look for the "U" Shape:** The two-turn rule allows for a perfect "U" shape connection. If two identical tiles are on the exact same row, but separated by other tiles, check if there is empty space directly above or below both of them to draw the U through the air.
* **Work from the Outside In:** By clearing the perimeter first, you essentially create new, smaller perimeters, allowing you to slowly dismantle the grid from the outside toward the dense center.
* **Don't Tunnel Vision:** If you can't find a path for two specific tiles, stop looking at them. Scan the entire board for an obvious, free match to keep the timer from running down.
* **Use the Hint Button Sparingly:** If you are truly stuck, use the hint button, but be aware that relying on it prevents you from training your brain to see the complex two-turn pathways.`
  },
  {
    title: "Cruise Ship Hidden Objects",
    seoContent: `![Cruise Ship Hidden Objects](https://www.htmlgames.com/uploaded/game/thumb800/cruiseshiphiddenobjects800450.webp)

Cruise Ship Hidden Objects is a masterclass in atmospheric, visually dense puzzle design, stripping the hidden object genre down to its absolute, most captivating and subtly demanding core, all wrapped in a luxurious, sun-drenched nautical aesthetic. Forget convoluted detective storylines or searching for random household items; this title is a pure, unadulterated shot of visual exploration focused entirely on acute observation across massive floating resorts. You are placed directly into a series of stunningly detailed, high-definition digital illustrations showcasing opulent dining halls, chaotic pool decks, elegant casinos, and intricate engine rooms. Your objective is elegantly simple: locate the subtle, thematic items expertly blended into the environment. The atmosphere is deeply relaxing, accompanied by soothing ocean waves and seagulls. Visually, the game opts for a highly realistic aesthetic—crucial for a game relying on visual trickery—ensuring that every shadowy deck chair and disguised cocktail glass is rendered with breathtaking clarity. It is the ultimate brain-training routine for acute observation.

## How to Play
* Your objective is to find every single item listed on the side panel hidden within the main high-definition image of the cruise ship scene.
* Use your \`Mouse\` to carefully scan the high-definition scene and click directly on an object when you spot it.
* Successfully locating an object will cross it off your list and award you points.
* Be extremely precise; randomly clicking around the screen (spam-clicking) will often result in a heavy time penalty or score deduction.
* You must find all the hidden objects before the strict time limit expires to advance to the next deck of the ship.
* Use the Map feature if you are completely lost.

## Tips and Tricks
* **Divide and Conquer:** Do not try to scan the entire massive image at once. Mentally divide the screen into four quadrants and meticulously search one corner (e.g., the base of the swimming pool slide) before moving to the next.
* **Look for Shapes, Not Colors:** The game often alters the color of an object to blend it into the background. Focus on identifying the silhouette and outline of the item instead of its expected color. A modern smartphone might be tinted blue to blend perfectly into the water of the pool.
* **Check the Shadows and Highlights:** The developers love hiding dark objects inside the deep shadows of arched doorways, or hiding bright objects directly inside the glare of a massive chandelier. Adjust your monitor brightness if necessary!
* **Read the Whole List First:** Memorize the list of items before you start searching. Often, while looking for a life preserver, you will accidentally spot the hidden sunglasses.
* **Save Your Hints:** If the game provides a hint button, absolutely refuse to use it until the timer is in the red zone. Relying on hints destroys your ability to train your observational skills.`
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
