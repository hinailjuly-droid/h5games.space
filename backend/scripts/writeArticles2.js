const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const Game = require('../src/models/Game');

const articles = [
  {
    title: 'Slope Extra',
    seoContent: `
*Slope Extra* is an adrenaline-fueled, physics-based endless runner that strips away all unnecessary complexities and leaves you with nothing but pure, unadulterated speed and reflexes. In a world where browser games often try to cram in too many mechanics, this title stands out by doing exactly one thing perfectly: making you control a ball rolling down an infinitely expanding, procedurally generated neon slope. The aesthetic is heavily inspired by minimalist cyberpunk and synthwave cultures, featuring stark, glowing green lines against a pitch-black abyss, accompanied by an electronic soundtrack that perfectly matches the frenetic pace. Unlike typical endless runners where you jump over static obstacles, *Slope Extra* demands absolute precision as the very ground beneath you twists, banks, drops, and narrows unpredictably. The physics engine is incredibly unforgiving but flawlessly consistent; momentum is your greatest ally and your most lethal enemy. Every micro-adjustment you make to the ball's trajectory determines whether you will smoothly glide around a treacherous corner or shatter into a million glowing pixels against an incoming wall. It is the ultimate test of hand-eye coordination, offering a hypnotic experience that is exceptionally easy to understand but almost impossibly difficult to truly master.

## How to Play
The mechanics of *Slope Extra* are devastatingly simple. You only need to use two keys: the Left Arrow and the Right Arrow (or 'A' and 'D' on some configurations). Your objective is to steer the rolling neon ball down the track for as long as possible without falling off the edge or smashing into the red block obstacles that litter the path. 

The ball automatically accelerates as you progress, meaning the longer you survive, the faster and more chaotic the gameplay becomes. Gravity is a constant force pulling you down, but the slope itself is a volatile entity. It will suddenly drop out from under you, forcing you to free-fall onto lower platforms. It will bank sharply, requiring you to steer "uphill" just to fight the centrifugal force pulling you towards the edge. The red obstacles are instant-death elements; colliding with even the very corner of one will instantly shatter your ball and end your run. Your score is entirely dependent on the distance you travel, usually tracked by the number of jumps or platforms you successfully navigate.

## Our tips
To survive the breakneck speeds of *Slope Extra* and secure a spot on the high-score leaderboard, you need more than just fast reflexes; you need foresight and momentum control.

1. **Center is Safe, Center is Deadly:** While staying in the absolute center of the track prevents you from falling off the edges, it is also exactly where the game likes to spawn the red instant-death blocks. You must learn to comfortably ride the extreme outer edges of the track and only cross the center when necessary.

2. **Micro-Taps Over Long Presses:** Never hold down the directional keys. At high speeds, holding a key for a fraction of a second too long will send you violently careening off the track. Use rapid, incredibly light micro-taps to constantly adjust your trajectory. You are nudging the ball, not driving it.

3. **Predict the Drop:** When you launch off a ramp and enter a free-fall, the game will usually show you the upcoming track below. While in mid-air, you can and must adjust your horizontal positioning. Do not wait until you land to steer; you must be perfectly aligned with the landing platform *before* you make contact.

4. **Embrace the Bank:** When the track banks into a steep curve, gravity will naturally pull you towards the lower edge. Do not fight it completely. Instead, use the bank to your advantage. Steer slightly "up" the curve to counteract the gravity, effectively using the sloped wall as a bumper to stabilize your trajectory.

5. **Look Three Steps Ahead:** Do not stare at the ball. If you are looking at your ball, you are reacting too late. Keep your eyes focused firmly on the horizon line where the track is generating. Your peripheral vision will handle the immediate obstacles, allowing your brain to process and plan for the twists and red blocks coming in the next two seconds.
`
  },
  {
    title: 'Minicraft: Imposter War',
    seoContent: `
*Minicraft: Imposter War* represents a fascinating, highly chaotic intersection of two of the most dominant gaming trends of the last decade: the blocky, voxel-based aesthetic of *Minecraft* and the paranoid, team-based survival mechanics of *Among Us*. This browser title throws players into a vibrant, destructible arena where the primary objective is survival, deception, and frantic combat. Rather than focusing on slow, methodical building, this game leverages the voxel engine for pure destruction. The map is a battleground, filled with towering structures, hidden tunnels, and environmental hazards that can be destroyed or utilized for tactical advantages. The atmosphere is tense but cartoonish, characterized by the iconic, instantly recognizable character models wielding bizarre, blocky weapons. It’s an adrenaline-fueled battle royale experience that requires players to be constantly on the move, constantly suspicious of their surroundings, and ready to engage in combat at a moment's notice. The charm of the game lies in its unpredictability; one moment you might be quietly mining resources to upgrade your arsenal, and the next you are caught in a massive firefight between multiple imposters using explosive creepers and diamond swords.

## How to Play
The core gameplay of *Minicraft: Imposter War* blends standard first-person shooter mechanics with basic environmental interaction. You navigate the arena using the standard WASD keys and use the mouse to aim and look around. The Left Mouse Button is your primary attack, whether you are swinging a melee weapon or firing a ranged weapon. 

Your objective varies slightly depending on the specific game mode you enter, but the primary goal is generally to be the last player standing or to eliminate the designated targets. You start the match with basic equipment, but by exploring the map and eliminating other players, you can acquire significant upgrades. The environment itself is fully interactive. Depending on the server rules, you can often break blocks to create new pathways, build temporary barricades to block incoming fire, or strategically destroy the ground beneath an opponent's feet to drop them into hazards. Managing your health, keeping track of your ammunition (if applicable), and utilizing the verticality of the map by jumping and climbing are critical components of surviving the war.

## Our tips
Surviving in a blocky arena full of heavily armed imposters is no easy feat. To consistently secure victories, you need to combine fast reflexes with situational awareness.

1. **Height is Might:** In voxel-based combat, the player with the high ground holds a massive statistical advantage. It is significantly easier to aim down at opponents and land crucial headshots while making your own hitbox much harder to hit. Always seek out towers, hills, or build your own high ground using blocks.

2. **The Element of Surprise:** Do not just run mindlessly into open fields. Use the destructible environment to your advantage. If you know an enemy is hiding in a building, do not use the front door. Break through the wall behind them or dig a tunnel underneath them to launch a devastating surprise attack.

3. **Master the Strafe Jump:** Static targets are dead targets. During a firefight, never stand perfectly still. Practice strafing (moving left and right) while simultaneously jumping. This makes your movement pattern incredibly erratic and difficult for opponents to track with ranged weapons.

4. **Resource Management:** If the game mode features resource gathering, do not ignore it. The difference between a basic wooden weapon and an upgraded diamond weapon is monumental. Spend the early game quietly gathering upgrades before engaging in heavy combat. 

5. **Listen Closely:** Audio cues are just as important as visual ones. Voxel games usually have distinct sound effects for different materials breaking or footsteps on different surfaces. Pay attention to the direction of these sounds to track enemy movements before you even see them.
`
  },
  {
    title: 'Floppy Paper',
    seoContent: `
*Floppy Paper* is a deceptively simple, incredibly charming, and unapologetically punishing physics-based browser game that instantly evokes the notorious difficulty of the *Flappy Bird* era. However, it replaces the frustrating avian protagonist with a delicate, intricately folded paper airplane, adding a completely new layer of physics and momentum to the classic formula. The aesthetic is beautifully minimalist, often utilizing soft, pastel backgrounds and crisp, geometric obstacles that look as though they were sketched onto a notebook page. The premise asks you to guide this fragile paper construct through an endless gauntlet of towering pillars, narrow gaps, and fluctuating air currents. What sets *Floppy Paper* apart from its spiritual predecessors is the floaty, drifting nature of the physics engine. A paper airplane doesn't just drop like a stone; it glides, dips, and swoops, requiring a completely different rhythmic approach from the player. The game creates an incredible sense of tension, as the seemingly relaxing visuals are sharply contrasted by the brutal, one-hit-kill mechanics. It is the perfect embodiment of the "just one more try" philosophy, hooking players with its accessibility while endlessly testing their patience and precision.

## How to Play
The mechanics are as simple as it gets: you require exactly one input to play the entire game. Clicking the Left Mouse Button, pressing the Spacebar, or tapping the screen (if on a mobile device) will cause your paper airplane to flap its metaphorical wings, propelling it upwards. 

Gravity is constantly pulling the plane downwards. Your objective is to find the perfect rhythm of clicks to keep the plane suspended in the middle of the screen as it automatically moves forward. The core challenge comes from the endless series of vertical pipes or obstacles that appear on the right side of the screen. You must navigate the plane through the gaps between these obstacles. Touching any part of an obstacle, the ceiling, or the floor results in an immediate crash and a game over. Your score is simply the number of gaps you successfully fly through.

## Our tips
Mastering the delicate glide of *Floppy Paper* is an exercise in Zen-like focus and rhythmic perfection.

1. **Find the Glide:** Unlike heavier characters in similar games, the paper airplane has a distinct glide path. When you click, it shoots up quickly, but when you let go, it hovers for a split second before dropping. You must learn to utilize this hover. Don't panic-click; allow the plane to naturally glide through wide gaps to save yourself from overcorrecting.

2. **The "Pre-Flap":** Because the upward momentum takes a fraction of a second to fully kick in, you must anticipate your moves. If you wait until you are perfectly aligned with a gap to click, you will likely clip the bottom edge of the pipe. You must initiate your click slightly *before* you need the upward lift.

3. **Ignore the Score:** Looking at the score counter in the top corner is the fastest way to crash. It induces panic and breaks your rhythm. Focus your eyes entirely on the exact center of the upcoming gap and let your peripheral vision handle the rest. 

4. **Establish a Baseline Rhythm:** For long stretches of evenly spaced obstacles, establish a consistent clicking rhythm. Treat it like a metronome in your head (e.g., *click-pause-pause-click*). Consistency is much safer than erratic, reactive clicking.

5. **Rest Your Hand:** This sounds silly, but these games cause intense physical tension in your hand and wrist. If you grip the mouse too tightly, your clicks become rigid and poorly timed. Keep your hand completely relaxed, using only the absolute minimum amount of force necessary to trigger the mouse button.
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
