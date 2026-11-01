const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const Game = require('../src/models/Game');

const articles = [
  {
    title: 'Paddle',
    seoContent: `
## Introduction & Overview
*Paddle* is a definitive love letter to the absolute origins of arcade video gaming, boiling down the interactive experience to its purest, most fundamentally addictive core. While the modern gaming landscape is absolutely saturated with massive open-world titles, endless service games, and hyper-realistic graphics, *Paddle* strips all of that away to remind us why we fell in love with digital entertainment in the first place. This game is a modern reimagining of the classic ball-and-paddle mechanics that birthed the entire industry in the 1970s. However, it isn't just a simple nostalgic cash-grab; it introduces modern physics, a significantly tighter control scheme, and an atmosphere that feels simultaneously retro and incredibly sleek. 

The premise is universally understood: you control a horizontal paddle at the bottom of the screen, and your sole objective is to intercept a bouncing ball before it plummets into the abyss below. As you successfully deflect the ball, it careens towards the top of the screen, bouncing off walls and shattering intricate formations of blocks or bricks. The atmosphere is tense, fast-paced, and deeply hypnotic. Every sound effect—from the sharp 'ping' of the ball hitting the paddle to the satisfying crunch of a block breaking—is meticulously designed to keep you in a state of flow. It’s the kind of game that you intend to play for five minutes, only to look up and realize two hours have vanished.

## Core Mechanics & How to Play
The mechanics of *Paddle* are exquisitely simple to grasp but notoriously difficult to truly master. Your primary input revolves around horizontal movement. Using either your mouse (for ultra-precise, fluid 1:1 movement) or the keyboard arrow keys (for a more rigid, classic feel), you slide the paddle left and right across the bottom boundary. 

The ball begins its descent, and physics take over. The angle at which the ball ricochets off your paddle is entirely dependent on where the ball strikes it. Hitting the ball dead-center will typically result in a straightforward, vertical bounce. However, if you strike the ball with the outer edges of the paddle, you will impart a sharp, extreme angle, sending the ball flying horizontally across the screen. This is the core skill of the game: controlling the trajectory of the ball rather than just blindly reacting to it.

As you progress through the levels, the formations of blocks become increasingly complex. Some blocks require multiple hits to shatter, some are completely indestructible (acting as permanent obstacles that bounce the ball back at dangerous angles), and some contain power-ups. When broken, these power-ups drop slowly towards the bottom of the screen. Catching them with your paddle can grant you massive advantages—such as a widened paddle, a slower ball, or a multi-ball split that floods the screen with chaotic action. Conversely, catching a negative power-down might shrink your paddle to a microscopic size or dramatically increase the ball's velocity, testing your reflexes to their absolute limits.

## Advanced Tips & Master Strategies
To truly dominate *Paddle* and achieve those elusive high scores, you must move beyond simple reaction and start predicting the physics engine. Here are our top master strategies:

1. **The Edge Strike Technique:** Do not just keep the paddle directly under the ball. If a cluster of blocks is on the far right side of the screen, you need to hit the ball with the far left edge of your paddle. This creates a shallow, sharp angle that will lodge the ball between the blocks and the ceiling, allowing it to bounce rapidly and clear out a dozen blocks in seconds without you having to do anything.

2. **Power-Up Triage:** When a power-up drops, your instinct will be to catch it. Resist this urge if the ball is currently in a dangerous position. Losing a life to catch a "Laser" power-up is never a mathematically sound trade. Furthermore, if you currently have a great power-up (like the sticky paddle), actively dodge other power-ups that might overwrite it. 

3. **Mouse Over Keyboard:** If you are playing on a PC, you must use the mouse. The keyboard has a fixed travel speed. The mouse allows for instantaneous, twitch-reaction movements from one side of the screen to the other, which becomes absolutely mandatory in the later levels when the ball is moving at supersonic speeds.

4. **The Sticky Paddle Save:** If you are lucky enough to grab the sticky paddle power-up (which catches the ball instead of bouncing it), use it as a breather. Don't immediately fire the ball back. Take a deep breath, analyze the remaining block formation, line up the perfect angle, and fire. 

5. **Tunneling:** Your primary objective at the start of any level should be to create a vertical "tunnel" through the bricks on either the far left or far right side. Once a tunnel is open, shoot the ball up through it. The ball will bounce endlessly along the ceiling, destroying the bricks from the top down. This is the safest and fastest way to clear a level.

## Our Review & Verdict
*Paddle* is an absolute triumph of minimalist game design. It completely understands that true replayability doesn't come from a bloated cinematic storyline, but from a tight, responsive gameplay loop that rewards skill and punishes hesitation. The difficulty curve is impeccably balanced. The first few levels lull you into a false sense of security with a slow-moving ball and basic block layouts. By level 15, the game turns into a blistering test of hand-eye coordination that will leave your heart pounding.

This game is tailor-made for arcade purists, high-score chasers, and anyone who appreciates a mechanically perfect experience. The standout feature here isn't necessarily a new gimmick, but the flawless execution of physics and momentum. When you perfectly angle a shot, slip the ball through a one-pixel gap, and watch it decimate the top row of bricks while you sit back and watch, it delivers a dopamine hit that very few modern games can replicate. 
`
  },
  {
    title: 'My Huggy Wuggy Nightmare',
    seoContent: `
## Introduction & Overview
*My Huggy Wuggy Nightmare* is a pulse-pounding, survival-horror browser game that taps directly into the modern phenomenon of mascot horror. Drawing heavy, unapologetic inspiration from the viral success of the *Poppy Playtime* universe, this game drops players into a claustrophobic, dimly lit, and terrifyingly abandoned toy factory. The atmosphere is immediately oppressive. The cheerful, brightly colored walls of the factory stand in stark, chilling contrast to the heavy shadows, flickering fluorescent lights, and the ever-present, echoing sounds of something massive stalking you through the corridors. 

You play as an unnamed protagonist trapped within this labyrinth. You are not a super-soldier; you are vulnerable, unarmed, and severely outmatched. Your only true weapon is your wits, your ability to run, and your capacity to solve environmental puzzles under extreme duress. The titular antagonist, Huggy Wuggy—a towering, blue, furry monstrosity with unnervingly long limbs and a maw full of razor-sharp teeth—is constantly on the hunt. The game brilliant uses audio cues to build tension: you will hear his thumping footsteps and manic breathing long before you see him emerge from the darkness. It is a brilliant distillation of the horror genre into a bite-sized, accessible browser format.

## Core Mechanics & How to Play
The gameplay loop of *My Huggy Wuggy Nightmare* is a tense balancing act between exploration, puzzle-solving, and frantic evasion. The game operates in a first-person perspective, utilizing the standard WASD keyboard controls for movement and the mouse to look around your environment. Your primary objective is to escape the factory by finding a series of specific items—often keys, fuses, or access cards—scattered randomly throughout the sprawling map.

The factory is designed like a maze. Dead ends, looping corridors, and locked doors force you to continuously backtrack and memorize the layout. As you explore, you can interact with certain objects by pressing 'E', which might open a door, pull a lever, or collect a crucial quest item. However, you can never get too comfortable. The monster AI is surprisingly relentless. Huggy Wuggy roams the halls dynamically; he isn't just following a set path. If he spots you, the chase begins. 

During a chase, your only option is to run. You have a limited stamina bar (usually managed by holding 'Shift'), meaning you cannot sprint indefinitely. You must use the environment to your advantage, breaking line of sight, ducking around corners, and hiding inside designated lockers or vents until the creature loses interest and stalks away. Managing your stamina while navigating a maze in the pitch black is the core mechanical challenge of the game.

## Advanced Tips & Master Strategies
Surviving the nightmare requires more than just holding down the sprint key. If you want to make it out alive, you need to employ advanced stealth and routing strategies:

1. **Sound is Everything:** Play this game with headphones. The spatial audio engine is critical. You can hear which direction the monster is coming from based on his footsteps. If the footsteps are getting louder and faster, he has spotted you. If they are slow and rhythmic, he is searching. Never run unless you have to; sprinting makes a massive amount of noise that will draw him directly to your location.

2. **Map the Safe Zones:** The very first thing you should do when entering a new sector of the factory is identify where the lockers and vents are. Always keep a mental note of your nearest safe zone. When the chase music triggers, you should instantly know exactly which corner to turn to find a hiding spot. 

3. **Stamina Discipline:** Never let your stamina bar completely deplete. If you run out of breath completely, you will be forced into a slow walking animation for several seconds while it recharges, which is an immediate death sentence if you are being chased. Run in short bursts, letting it recharge while you walk through clear corridors.

4. **Baiting the AI:** The monster relies heavily on line of sight. If you need to access a room that Huggy Wuggy is currently guarding, you can sprint down a different hallway to make noise, wait for him to investigate the sound, and then quickly sneak behind him into the room he just vacated. 

5. **Corner Peeking:** Never sprint blindly around a blind corner. Approach intersections slowly and use your mouse to peek around the edge of the wall before committing your body to the hallway. Huggy Wuggy's massive blue frame is easy to spot if you are looking carefully.

## Our Review & Verdict
*My Huggy Wuggy Nightmare* successfully delivers a surprisingly potent dose of adrenaline for a free browser game. It manages to capture the essence of what makes modern indie horror so engaging: the overwhelming feeling of powerlessness. The graphics, while constrained by browser technology, use lighting and shadow incredibly effectively to hide low-resolution textures and create genuine dread. 

The difficulty curve is brutal. There are no checkpoints; if you are caught, you start from the beginning. This roguelike element adds massive stakes to every single playthrough. While the AI can occasionally be a bit buggy—sometimes getting stuck on geometry or spotting you through walls—it mostly works as an incredibly intimidating pursuer. This game is highly recommended for fans of horror, streamers looking for jumpscares, and anyone who enjoys a high-stress game of hide-and-seek. The standout mechanic is undeniably the audio design, which completely elevates the experience from a simple maze game into a genuine nightmare.
`
  },
  {
    title: 'Moto Maniac 2',
    seoContent: `
## Introduction & Overview
*Moto Maniac 2* revs its engine and blasts onto the scene as a quintessential physics-based dirt bike platformer. It proudly carries the torch of classic games like *Trials* and *Excitebike*, demanding absolute precision, flawless throttle control, and a deep understanding of digital gravity. Set against the backdrop of a nighttime, neon-drenched industrial construction site, the game tasks you with navigating a fragile motocross bike across a series of increasingly absurd and perilous obstacle courses. 

The atmosphere is undeniably cool. The dark backgrounds are punctuated by glowing scaffolding, flaming barrels, and precarious wooden ramps suspended hundreds of feet in the air. The core objective is simple: get your rider from the starting line to the finish line without crashing. However, in *Moto Maniac 2*, "crashing" doesn't just mean hitting a wall. If your rider's head touches the ground, if you flip backwards, or if you fall into the abyss, it's an instant reset. It is a game of millimeters and milliseconds, designed to test the absolute limits of your patience and your keyboard wizardry. 

## Core Mechanics & How to Play
The controls in *Moto Maniac 2* are universally standard for the genre but wildly sensitive. You use the 'Up' arrow to accelerate, 'Down' to brake/reverse, and 'Left' and 'Right' to shift the rider's weight backward and forward. This weight-shifting mechanic is the beating heart of the game. 

The physics engine is entirely physics-driven, meaning your bike will react realistically (and often violently) to every bump, jump, and landing. When you accelerate up a steep ramp, the front wheel will naturally lift off the ground due to torque. If you don't actively press the 'Right' arrow to lean the rider forward and counter that torque, you will flip backward and snap your neck. Conversely, when landing from a massive jump, leaning too far forward will cause you to go over the handlebars.

The levels are meticulously designed obstacle courses filled with seesaws, swinging platforms, exploding barrels, and gaps that seem physically impossible to clear. You must manage your speed perfectly. Sometimes, blasting the throttle is the only way to clear a gap; other times, creeping forward at a snail's pace is required to navigate a delicate balance beam. The game is highly trial-and-error based, expecting you to fail dozens of times on a single obstacle as you slowly learn the exact combination of speed and weight distribution required to conquer it.

## Advanced Tips & Master Strategies
If you want to conquer the later, seemingly impossible levels of *Moto Maniac 2*, you must evolve from a casual rider into a physics master. Here are our top strategies:

1. **The Bunny Hop:** You aren't just limited to driving off ramps. By quickly leaning back to compress the rear suspension, and then violently leaning forward while simultaneously hitting the throttle, you can force the bike to "hop" into the air from a standstill. This advanced technique is absolutely mandatory for clearing small gaps without a run-up or climbing up steep, staggered ledges.

2. **Feathering the Throttle:** The 'Up' arrow is not an on/off switch. Do not hold it down constantly. Learn to "feather" or tap the throttle rapidly. This maintains a steady, slow speed that is crucial for crossing seesaws or balancing on narrow pipes without sliding off the edge. 

3. **Landing on the Back Tire:** Whenever you are coming down from a significant jump, you should almost always aim to have your back tire touch the ground a fraction of a second before the front tire. This allows the rear suspension to absorb the massive kinetic impact, preventing the bike from bouncing violently out of control upon landing.

4. **Braking in Mid-Air:** Believe it or not, hitting the brakes while in mid-air will actually stop the rotational momentum of your tires, which physically alters the pitch of your bike in the air. If you are rotating forward too quickly over a jump, tapping the brake can level you out and save your life. 

5. **Embrace Failure:** You will crash. A lot. Do not get frustrated. Treat every death as a learning experience. Did you approach that ramp too fast? Did you lean back too late? Analyze your mistakes, instantly hit the restart button, and adjust your timing by a fraction of a second.

## Our Review & Verdict
*Moto Maniac 2* is a masterclass in challenging physics platforming. It walks a razor-thin line between being incredibly frustrating and immensely rewarding, usually landing firmly on the latter. The physics engine is beautifully tuned—it feels heavy, realistic, and consistent. When you fail, you know exactly why you failed; it never feels like the game cheated you, it just demands perfection.

The graphics are sharp, and the level design is delightfully sadistic. The game is perfectly suited for players who love high-skill-ceiling challenges and speedrunning. The standout mechanic isn't just the driving, but the nuance of the weight distribution. Navigating a complex series of jumps perfectly, maintaining momentum without ever letting the front wheel slam down too hard, feels like performing a mechanical ballet. It's an addictive, tough-as-nails experience that proves browser games can offer just as much depth as console titles.
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
          },
          $unset: { editorRating: 1 } // Remove editor rating from DB just in case
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
