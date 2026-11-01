const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const Game = require('../src/models/Game');

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  
  const seoContent = `![Traffic Racer](/images/traffic_racer_hero.png)

Traffic Racer is a masterclass in tension-fueled, high-speed arcade driving, stripping the racing genre down to the absolute thrill of weaving through dense, unpredictable highway traffic. Forget complex gear shifting, tuning menus, or convoluted career modes; this game is a pure, unadulterated shot of adrenaline focused entirely on reflexes and split-second spatial judgment. You are placed behind the wheel of a high-performance vehicle on an endless, sprawling highway, tasked with pushing your speed to the absolute limit while dodging a relentless stream of civilian vehicles. The atmosphere is intoxicatingly intense, demanding complete concentration as the speed steadily ramps up to breakneck velocities. Visually, Traffic Racer opts for a clean, highly readable aesthetic—crucial for a game moving at this speed—ensuring that every incoming truck, sedan, and bus is immediately distinguishable against the scrolling asphalt. The sensation of speed is incredibly well-executed, utilizing smooth frame rates and aggressive camera positioning to make every near-miss feel genuinely heart-stopping.

## How to Play
* Your objective is to drive as far as absolutely possible without colliding with any other vehicles on the highway.
* Use the \`Left\` and \`Right\` arrow keys (or \`A\` and \`D\`) to violently swerve between the designated highway lanes.
* Press the \`Up\` arrow or \`W\` to accelerate and increase your score multiplier, though this drastically increases the danger.
* Press the \`Down\` arrow or \`S\` to apply the brakes, allowing you to slip behind cars when boxed in.
* A single collision with another vehicle will instantly end your run, forcing a total restart.

## Tips and Tricks
* **The Brake is Your Best Friend:** Novice players hold the accelerator constantly. Expert players know that a split-second tap of the \`Down\` key is often the only way to survive a three-car roadblock.
* **Look Ahead, Not at Your Car:** Do not stare at your own vehicle. Keep your eyes focused on the top third of the screen to anticipate traffic formations before they reach you.
* **The "Near Miss" Bonus:** Passing extremely close to civilian cars at high speeds grants massive bonus points. Risk it only when you have a clear exit path.
* **Avoid the Edges:** Driving in the far left or far right lanes severely limits your escape options. Stick to the center lanes whenever possible so you can dodge in either direction.
* **Watch for Brake Lights:** Civilian cars will occasionally slow down or change lanes. Watch for their red brake lights and react immediately to avoid rear-ending them.`;

  const updated = await Game.findOneAndUpdate(
    { title: "Traffic Racer" },
    {
      $set: {
        curated: true,
        seoContent: seoContent
      },
      $unset: { editorRating: 1 }
    },
    { new: true }
  );
  
  if (updated) {
    console.log('Successfully curated: ' + updated.title);
  } else {
    console.log('Failed to find game.');
  }
  
  process.exit(0);
}
run();
