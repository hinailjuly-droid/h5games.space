const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const Game = require('../src/models/Game');

const articles = [
  {
    title: 'FPS Shooting Survival Sim',
    seoContent: `
*FPS Shooting Survival Sim* thrusts players into an unforgiving, hyper-realistic combat scenario where every bullet counts and every corner hides a potential threat. At a time when browser-based shooters are often dismissed as simplistic or visually dated, this title ambitiously attempts to capture the intense, tactical atmosphere of modern military simulators right inside a web page. You are dropped into a sprawling, desolate urban environment characterized by crumbling concrete, rusted vehicles, and an eerie, oppressive silence punctuated only by the crack of distant gunfire. The atmosphere is undeniably gritty. This isn't a brightly colored arena shooter; it's a desperate fight for survival where resource management, precise aiming, and acute situational awareness are absolutely paramount. The game strips away the safety nets of regenerating health and endless ammunition, demanding that players treat every engagement with the utmost caution. Whether you are holding down a fortified position against waves of enemies or cautiously sweeping a multi-story building for supplies, the tension is palpable. The visual fidelity, utilizing advanced WebGL rendering, brings a surprising level of detail to the weapon models, environmental textures, and dynamic lighting, proving that browser gaming is fully capable of delivering a hardcore, immersive shooter experience.

## How to Play
The control scheme for *FPS Shooting Survival Sim* relies on the universal standard for PC shooters, making it instantly familiar to genre veterans. You use the WASD keys to navigate the environment, while the mouse dictates your aim and camera perspective. The Left Mouse Button fires your equipped weapon, and the Right Mouse Button allows you to aim down the sights (ADS) for significantly increased accuracy—a mandatory mechanic for engaging targets at medium to long range. 

Your HUD (Heads Up Display) is minimalist but crucial. It displays your current health pool, remaining ammunition, and equipped gear. Unlike casual shooters, reloading (the 'R' key) must be done tactically; dropping a half-empty magazine might mean losing those bullets entirely depending on the server settings. You can switch between primary and secondary weapons using the number keys (1, 2) and utilize medical supplies or grenades if you have scavenged them. The core gameplay loop revolves around navigating the hostile map, identifying enemy threats before they spot you, and engaging in short, lethal firefights. Movement speed and stance matter greatly; walking is quieter than sprinting (Shift), and crouching (Ctrl or C) not only reduces your visible profile but also significantly stabilizes your weapon sway.

## Our tips
Surviving in this brutal simulation requires a massive shift in mindset if you are used to fast-paced, arcade-style shooters. Patience is your greatest weapon.

1. **Slice the Pie:** When approaching a doorway or clearing a corner, never walk straight in. Slowly strafe in a semi-circle around the edge of the doorway, keeping your crosshair aimed at the newly revealed space. This technique, known as "slicing the pie," allows you to expose only a tiny fraction of your body while systematically checking every angle of the room.

2. **Aim Down Sights (ADS) Discipline:** Firing from the hip is almost entirely useless beyond point-blank range due to the game's realistic bullet spread mechanics. Always aim down your sights before firing. However, your movement speed is drastically reduced while ADS, so do not walk around the entire map aiming; only raise your weapon when you expect an immediate threat.

3. **Short, Controlled Bursts:** If you are using a fully automatic weapon, do not hold down the trigger. The recoil simulation will send your crosshair flying into the sky within three bullets. Fire in short, two-to-three-round bursts to maintain maximum accuracy and conserve your highly limited ammunition supply.

4. **Listen to the Environment:** Sound design is a critical tactical element. The crunch of gravel, the squeak of a floorboard, or the distinct metallic click of a weapon reloading can give away an enemy's position before you even see them. Use headphones and constantly listen for audio cues. If you hear footsteps, stop moving immediately and hold an angle.

5. **Resource Scavenging:** Every building is a potential goldmine or a death trap. You must continually search for ammunition, armor plates, and medical kits. Prioritize finding a reliable secondary weapon early on; switching to a pistol is always faster than reloading an empty rifle in the middle of a desperate firefight.
`
  },
  {
    title: 'Advanced Blocky Gangster Warfare',
    seoContent: `
*Advanced Blocky Gangster Warfare* is a glorious, chaotic collision of urban crime sandbox gameplay and charming, voxel-based aesthetics. It takes the sprawling, open-ended structure popularized by the legendary *Grand Theft Auto* series and translates it into a colorful, blocky universe that feels both nostalgic and refreshingly unhinged. The game drops you into a massive, procedurally generated cityscape teeming with blocky pedestrians, grid-like skyscrapers, and aggressively angular vehicles. The atmosphere manages to be simultaneously violent and comical. You are essentially a heavily armed Lego character running amok in a digital metropolis. The juxtaposition of serious criminal undertakings—like intense turf wars, high-speed police chases, and elaborate bank heists—with the inherently silly visual style creates a unique and highly engaging tone. It doesn't take itself too seriously, allowing players to fully embrace the sandbox nature of the world. Whether you are methodically completing missions to build your criminal empire or just launching a rocket launcher at a swarm of pixelated police cruisers to see what happens, the game encourages absolute freedom and emergent, explosive gameplay.

## How to Play
Navigating the chaotic streets of *Advanced Blocky Gangster Warfare* utilizes a standard third-person action control scheme. You control your blocky protagonist using the WASD keys and use the mouse to aim your weapons or steer vehicles. The Left Mouse Button fires, while the Right Mouse Button often provides a slight zoom or alternative fire mode depending on the weapon equipped.

The world is entirely your playground. You can approach pedestrians and press 'E' or 'F' to interact, or more commonly, "acquire" their vehicles. Driving mechanics are arcade-heavy, prioritizing high-speed drifts and massive jumps over realistic simulation. As you explore, you will find weapon caches, health pickups, and mission markers indicated on your minimap. Engaging in illegal activities will naturally raise your "Wanted Level," a star-based system that dictates the intensity of the police response. At one star, a single patrol car might chase you; at five stars, you will be dodging SWAT teams, helicopters, and heavily armored blocky tanks. You can reduce your wanted level by breaking line of sight, hiding in alleyways, or utilizing the massive verticality of the voxel city by climbing buildings. 

## Our tips
Building a criminal empire in a world made of blocks requires a specific brand of chaotic strategy. Here is how you dominate the streets.

1. **Height Advantage:** The voxel nature of the city means almost everything is climbable or has a flat surface. When a massive police shootout inevitably erupts, do not fight on street level. Use stairs, fire escapes, or even just jump on top of parked cars to reach the rooftops. From a high vantage point, you have a massive tactical advantage and can easily pick off targets or destroy pursuing vehicles with explosives.

2. **The Vehicle Shield:** Vehicles in this game are not just for transportation; they are mobile armor. In a heavy firefight, park a large truck horizontally between you and your enemies. Use it as hard cover. Just be mindful of the vehicle's damage state—if it starts smoking heavily, run away immediately before the blocky explosion takes you out.

3. **Always Keep Moving:** Standing still is a death sentence, especially when facing multiple opponents with automatic weapons. You must constantly strafe, jump, and weave through the environment. The enemy AI struggles to track highly erratic movement, allowing you to close the distance or escape to cover.

4. **Strategic Wanted Levels:** Sometimes, raising your wanted level is actually beneficial. Heavy police units often carry the best, most advanced weapons in the game. If you are well-armed and hold a strong defensive position (like a dead-end alleyway), you can intentionally provoke the police, eliminate the heavy units, and steal their high-tier weaponry to permanently add to your arsenal.

5. **Master the Drift:** The driving physics are very slippery. To take sharp corners at high speeds without smashing into a blocky building, you need to initiate a drift. Briefly tap the handbrake (usually Spacebar) right as you turn the wheel. This will kick the back end of the car out, allowing you to slide through the corner while maintaining your forward momentum.
`
  },
  {
    title: 'Medieval Battle 2P',
    seoContent: `
*Medieval Battle 2P* strips the complex, sprawling strategy genre down to its absolute, most brutal core, delivering a raw, head-to-head tactical combat experience that is perfectly suited for intense local multiplayer sessions. In an era dominated by massive online battle arenas, this game beautifully resurrects the intimate, highly competitive nature of sharing a single keyboard with a friend. Set against a gritty, visually minimalist backdrop of ancient battlefields, the game tasks two commanders with building, managing, and deploying armies of pixelated warriors to destroy the opposing castle. The atmosphere is purely competitive; there is no narrative fluff, no complex tech trees, and no microtransactions. It is a pure test of strategic timing, resource management, and predicting your opponent's moves. The visual style is retro-inspired, utilizing simple sprites and clear animations that ensure the battlefield remains readable even when dozens of units are clashing in chaotic melees. The brilliance of *Medieval Battle 2P* lies in its accessibility—anyone can understand the premise within seconds, but mastering the intricate rock-paper-scissors unit balancing requires deep strategic thinking and lightning-fast reflexes.

## How to Play
The game is specifically designed for two players operating on the same physical keyboard, making it a fantastic party game or quick competitive distraction. The screen is split into two halves, with Player 1's castle on the left and Player 2's castle on the right. 

Both players constantly generate a primary resource, usually represented by gold or mana, over time. Your objective is to spend this resource to spawn units from your castle. Player 1 typically uses specific keys on the left side of the keyboard (like WASD or 1234) to spawn different unit types, while Player 2 utilizes keys on the right side (like the Arrow keys or Numpad). 

Once a unit is spawned, it automatically marches forward towards the enemy castle, engaging any hostile units it encounters along the way. You have no direct control over the units once they are on the battlefield. Therefore, the entire game revolves around *what* you spawn and *when* you spawn it. The units typically follow a classic counter system: infantry defeats cavalry (with polearms), cavalry destroys archers (by closing the distance quickly), and archers decimate infantry (from afar). The game ends when one player's castle health is reduced to zero. 

## Our tips
Victory in *Medieval Battle 2P* is rarely achieved by simply spamming the most expensive units. It requires a nuanced understanding of tempo and unit counters.

1. **The Rock-Paper-Scissors Mastery:** You must memorize the unit counters instantly. If your opponent spawns a wave of slow, heavily armored knights, do not send your own knights to meet them. Wait until they cross the midpoint, then spawn a massive wave of cheap archers behind a small frontline of defensive spearmen. Let the archers chip away the heavy armor from a safe distance.

2. **Hold Your Economy:** A common beginner mistake is spending gold the exact second it becomes available, resulting in a constant trickle of single, weak units marching to their death. It is almost always better to save your gold until you hit the resource cap, and then spawn a massive, synergistic wave all at once. A coordinated attack of infantry supported by archers is vastly more effective than sending them one by one.

3. **Read the Opponent's Build:** Since you are sharing a screen, you can see exactly how much gold your opponent is saving and what they are likely preparing to do. If they are aggressively saving, they are preparing for a massive push. You must respond by building a defensive counter-force, rather than wasting your gold on a weak offensive push that will easily be crushed.

4. **The Counter-Push:** The most devastating moments in the game occur right after a massive clash in the center of the map. If your wave successfully defeats the enemy wave and survives, they will continue marching toward the enemy castle. The opponent is now low on resources and defenseless. This is the exact moment you must press your advantage and spawn *more* aggressive units to support your surviving wave and secure the win.

5. **Bait and Switch:** You can force your opponent to waste their gold. Spawn a single, highly visible heavy unit. Your opponent will likely panic and spend all their gold spawning the specific counter to that unit. Once they commit their resources, immediately spawn the counter to *their* counter to completely wipe their army off the field.
`
  },
  {
    title: 'Hill Dash Car - Hill Climbing Racing Game',
    seoContent: `
*Hill Dash Car - Hill Climbing Racing Game* is a masterclass in physics-based driving frustration and triumph, heavily inspired by the legendary mobile classics of the genre but refined for a smooth, high-fidelity browser experience. This is not a racing game about top speed or drifting through neon-lit cityscapes; it is a game entirely about conquering gravity, managing delicate momentum, and battling absurdly treacherous, undulating terrain. The game drops you into the driver's seat of a flimsy, highly unstable vehicle and tasks you with navigating endless, procedurally generated 2D hills, mountains, and valleys. The atmosphere is lighthearted and cartoonish, a deliberate contrast to the often brutal and unforgiving physics engine that governs every movement of your car. The core challenge lies in the fact that your vehicle is incredibly prone to flipping over. Every steep incline threatens to tip you backward, while every sharp descent threatens to send you tumbling over the handlebars. It requires a surgical level of precision with the throttle and brakes. The addictive nature of *Hill Dash Car* comes from its upgrade system. You are expected to fail repeatedly, using the coins gathered during those failed runs to upgrade your engine, suspension, and tires, inching slightly further up the impossible mountain with every single attempt.

## How to Play
The controls in *Hill Dash Car* are minimalist, consisting of exactly two inputs. If you are playing on a keyboard, the Right Arrow (or 'D') applies the gas, accelerating your vehicle forward. The Left Arrow (or 'A') applies the brakes and shifts the vehicle into reverse.

The true gameplay, however, is all about weight distribution in mid-air. When your vehicle launches off a steep hill and goes airborne, the gas and brake keys suddenly change their function. Pressing the gas in mid-air will cause the nose of your car to pitch upward (rotating backward). Pressing the brake will cause the nose to pitch downward (rotating forward). You must use these mid-air controls to perfectly align your vehicle parallel with the landing slope. If you land too hard on your front or back bumper, you will instantly flip, resulting in a game over. Additionally, you must manage your fuel gauge. Fuel depletes constantly, and you must reach red fuel canisters scattered along the track before you run out. Balancing speed to reach the next fuel canister with cautious driving to avoid flipping is the central tension of the entire game.

## Our tips
Conquering the endless mountains requires a deep understanding of physics and a heavy emphasis on strategic upgrading. 

1. **Feather the Throttle:** The absolute worst thing you can do is hold the gas pedal down continuously. When climbing a steep hill, if you apply full throttle, the torque will instantly lift your front wheels off the ground and flip you backward. You must "feather" or rapidly tap the gas to maintain momentum without triggering a wheelie.

2. **The Art of the Landing:** Landing flat is good, but landing perfectly parallel to the downhill slope is better. When you launch off a peak, quickly analyze the angle of the terrain you are about to land on. Tap the gas or brake in mid-air to match that exact angle. A perfect, smooth landing preserves massive amounts of forward momentum, saving crucial fuel.

3. **Suspension is King:** When you start accumulating coins, the temptation is always to upgrade your Engine for more speed. Resist this. Your first priority should be upgrading your Suspension and Tires. A powerful engine is completely useless if your car is constantly bouncing out of control and flipping over. Good suspension absorbs the massive impacts of the terrain, keeping your tires glued to the ground where they can actually generate traction.

4. **Strategic Airtime:** While catching massive air looks incredibly cool, it is terrible for your fuel efficiency. When your tires are off the ground, you are not accelerating, but you are still burning fuel. Try to drive as "heavy" as possible, letting off the gas right before the crest of a hill so that you roll over the top rather than launching into the sky.

5. **The Reverse Climb:** If you are stuck at the absolute bottom of a steep, U-shaped valley and don't have enough momentum to climb out, do not just hold the gas and spin your tires. Let the car roll completely backward up the opposite side of the valley to build a run-up, then slam the gas to slingshot yourself forward up the hill.
`
  }
];

async function run() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    for (const art of articles) {
      await Game.findOneAndUpdate(
        { title: art.title },
        {
          $set: {
            curated: true,
            seoContent: art.seoContent
          }
        }
      );
      console.log('Successfully wrote massive article for:', art.title);
    }
    
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
run();
