const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

const gamesToUpdate = [
  {
    title: "Zoobies Collapse",
    seoContent: `![Zoobies Collapse](/images/zoobies_collapse_hero.png)

Zoobies Collapse strips the classic matching genre down to its absolute, most addictive core, delivering a colorful, high-speed puzzle experience that is perfectly suited for intense burst-gaming sessions. In an era dominated by overly complex mobile puzzle arenas, this game beautifully resurrects the intimate, highly satisfying nature of simple click-to-collapse mechanics. Set against a vibrant, visually delightful backdrop populated by charming little creatures known as "Zoobies," the game tasks players with rapidly identifying and eliminating clusters of identical characters to clear the board. The atmosphere is purely joyful; there is no narrative fluff, no complex tech trees, and no frustrating microtransactions blocking your progress. It is a pure test of visual acuity, pattern recognition, and predicting the board's cascade. The visual style is highly appealing, utilizing incredibly crisp sprites and snappy animations that ensure the puzzle grid remains perfectly readable even when dozens of Zoobies are shifting and collapsing in chaotic chain reactions. The brilliance of Zoobies Collapse lies entirely in its uncompromising dedication to core puzzle mechanics and a steadily increasing difficulty curve that forces players to think three steps ahead.

## How to Play
* The primary objective is to clear the entire grid by clicking on clusters of two or more identical Zoobies.
* Use your \`Left Mouse Button\` to select and instantly remove valid groups from the board.
* When a group is removed, the remaining Zoobies will collapse downward, altering the board's layout.
* If an entire vertical column is cleared, the remaining columns will slide together to close the gap.
* The level is successfully completed only when every single Zoobie has been cleared from the screen.
* If you run out of valid moves and Zoobies remain, you will have to restart the puzzle.

## Tips and Tricks
* **Work from the Top:** Whenever possible, try to clear groups near the top of the board first. This prevents massive cascades that might destroy potential matches lower down.
* **Calculate the Drop:** Before clicking a group, mentally visualize how the columns above it will fall. This is crucial for setting up massive chain reactions.
* **Save the Singles:** Be extremely careful about leaving a single, isolated Zoobie. Unless you can bring another identical one down to meet it, you will fail the level.
* **Vertical Clears:** Prioritize clearing entire vertical columns early on. This compresses the board horizontally, bringing previously separated Zoobies into contact with one another.
* **Take Your Time:** Unlike timed rush modes, Zoobies Collapse rewards patient, calculated strategy. Do not rush your clicks.`
  },
  {
    title: "Forest Queen",
    seoContent: `![Forest Queen](/images/forest_queen_hero.png)

Forest Queen immerses players in a deeply enchanting, mystical woodland setting, elevating the traditional match-3 formula with a beautifully crafted aesthetic and cleverly integrated objective-based gameplay. Stepping away from the sterile grids of classic puzzle games, Forest Queen places you directly in the heart of an ancient, overgrown forest where every jewel and magical artifact feels inherently connected to the environment. The game masterfully combines relaxing, atmospheric visuals with increasingly demanding puzzle logic. Rather than simply chasing high scores, your goal is to extract specific magical items hidden within the dense grid of sparkling gems. The atmosphere is serene yet deeply engaging, completely devoid of the stressful timers that plague similar titles, allowing you to focus entirely on strategic maneuvering and cascading combinations. The visual presentation is a standout feature, boasting rich, earthy color palettes, intricate jewel designs, and spellbinding particle effects that trigger whenever a massive combo is achieved. Forest Queen is a triumph of atmospheric puzzle design, offering a soothing yet intellectually stimulating journey through its myriad of cleverly constructed levels.

## How to Play
* The core mechanic revolves around swapping adjacent jewels to create horizontal or vertical lines of three or more identical gems.
* Use your \`Mouse\` to click on a jewel, then click an adjacent one to swap their positions, or simply click and drag.
* Your primary objective is to guide specific magical items (like keys or artifacts) down to the very bottom of the grid.
* Magical items fall downward whenever the jewels directly beneath them are successfully matched and destroyed.
* Matching four or more jewels creates powerful special gems that can clear entire rows, columns, or surrounding areas.

## Tips and Tricks
* **Focus on the Bottom:** Prioritize making matches at the lowest possible points on the grid. This triggers the maximum number of cascading jewels, often resulting in free, accidental combos.
* **Vertical Matches are Key:** When trying to drop a magical item, look for vertical matches directly underneath it to drop it three spaces at once.
* **Hoard Special Gems:** If you create a line-clearing special gem, try to save it until a magical item is trapped in a difficult column.
* **Analyze the Chokepoints:** Pay close attention to the shape of the board. Some levels have narrow columns or indented areas where items can get stuck if you aren't careful.
* **Clear the Path:** Don't just focus on the jewels directly under the artifact. Sometimes clearing a massive chunk of the board on the opposite side will shift the entire grid in your favor.`
  }
];

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  let updated = 0;
  for (let g of gamesToUpdate) {
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
