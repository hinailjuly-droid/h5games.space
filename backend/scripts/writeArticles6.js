const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const Game = require('../src/models/Game');

const articles = [
  {
    title: 'Noob Mommy Escape Parkour',
    seoContent: `
*Noob Mommy Escape Parkour* successfully merges two of the most enduringly popular genres in the browser gaming space: the blocky, voxel-based obstacle courses of *Minecraft* parkour maps, and the tension-filled chase sequences of mascot horror. The game drops you into a surreal, brightly colored sky-world composed of floating blocks, treacherous jumps, and death-defying drops. However, this isn't just a leisurely test of your platforming skills. You are being relentlessly pursued by "Mommy Long Legs," a terrifying, lanky antagonist ripped straight from the popular horror zeitgeist. The atmosphere is an excellent, chaotic blend of bright, cheerful aesthetics and genuine panic. The voxel graphics keep the performance high and the visual language clear—you always know exactly where a platform begins and ends—while the audio design constantly reminds you that death is sprinting up behind you. It is a game that requires absolute precision under extreme pressure. One missed jump, one slight hesitation, or one poorly timed sprint, and you will either plummet into the void or be caught by your pursuer. It perfectly captures the frenetic energy of speedrunning, forcing players to memorize layouts and execute perfect runs to survive.

## How to Play
The control scheme is the standard first-person PC layout, which is deeply ingrained in anyone who has played a voxel game. You use the WASD keys to move, the Spacebar to jump, and the mouse to look around. 

Your sole objective is to reach the brightly colored portal at the end of each level. The levels are linear obstacle courses composed of various blocks floating in the sky. Some blocks are standard stone, while others might act as trampolines (bouncing you high into the air), ice (causing you to slide out of control), or dissolving sand (breaking away the second you step on them). The difficulty curve is immediately punishing. Because you are being chased, you cannot stop to carefully analyze a jump. You must rely on instinct, momentum, and rapid mouse flicking to navigate the course. If you fall into the void or the monster catches you, you are instantly teleported back to the beginning of the level to try again. The game is entirely about muscle memory and shaving fractions of a second off your route.

## Our tips
Surviving this high-speed nightmare requires flawless execution and an understanding of voxel platforming physics.

1. **Never Look Back:** The most common mistake players make is turning around to see how close the monster is. This is a fatal error. The monster's speed is a constant; looking at it will not slow it down, but it *will* ruin your momentum and cause you to miss the next jump. Trust your ears to gauge the distance and keep your eyes locked on the next platform.

2. **The "Edge" Jump:** To clear the widest gaps in the game, you cannot jump from the middle of a block. You must sprint and hit the Spacebar at the absolute last possible millisecond, right as your character's toes are slipping off the edge of the voxel. This maximizes your forward trajectory. 

3. **Air Strafe Adjustment:** While in mid-air, you still have a small amount of control over your character's horizontal movement. If you realize you have jumped slightly too far to the left, do not panic. Gently tap the 'D' key (Right) and smoothly track your mouse to the right to subtly curve your jump mid-flight and stick the landing.

4. **Sprint Discipline:** While you might want to sprint (usually Shift or Double-W) the entire time, some sections require delicate platforming over tiny, 1x1 blocks. Sprinting over these blocks often leads to over-jumping. Learn exactly when to release the sprint key for a split second to perform a controlled, short hop.

5. **Anticipate the Special Blocks:** Pay close attention to the color and texture of the blocks ahead of you. If you see a slime block or a trampoline block, you must pre-adjust your mouse angle *before* you land on it, so you are already aiming at the next platform when you are inevitably launched into the air.
`
  },
  {
    title: 'Egypt Runes',
    seoContent: `
*Egypt Runes* offers a deeply satisfying, visually rich dive into the classic "Match-3" puzzle genre, but elevates the experience far beyond the standard casual fare with its stunning, historically inspired aesthetic and unexpectedly deep combo mechanics. Set against the golden sands, towering pyramids, and mysterious hieroglyphs of ancient Egypt, the game tasks you with clearing a grid of intricately designed stone runes. The atmosphere is remarkably relaxing, trading the flashing neon lights of modern mobile puzzle games for a more subdued, ambient experience complete with a hypnotic, desert-inspired soundtrack. However, the relaxing exterior hides a fiercely challenging puzzle engine. This is not a game where you can just blindly swipe at the screen and expect to win. Each level presents a unique grid shape, often featuring indestructible obstacles, locked runes, and highly restrictive turn limits. The game demands spatial awareness, pattern recognition, and long-term planning. The visual feedback is exceptionally polished; matching a massive chain of runes triggers cascading explosions, crumbling stone effects, and brilliant flashes of light that make every successful move feel weighty and rewarding.

## How to Play
The core mechanic of *Egypt Runes* is universally understood: you interact with a grid of colored tiles (the runes) by swapping the positions of two adjacent tiles using your mouse or touchscreen. 

Your objective is to swap the tiles so that a line of three or more identical runes is formed, either horizontally or vertically. When a match is made, those runes explode, awarding points and causing the runes above them to fall down and fill the empty space (often triggering secondary chain reactions, or "cascades"). The game is level-based, and each level has a specific goal displayed on the HUD. You might need to reach a certain score, clear a specific number of red runes, or break special "stone slabs" located underneath certain tiles. Crucially, you only have a limited number of moves to achieve this goal. Matching four or more runes simultaneously creates powerful "Special Runes" that can clear entire rows, columns, or areas of the board in a single massive explosion, which is absolutely mandatory for completing the later, more difficult levels.

## Our tips
To conquer the ancient puzzles and prevent yourself from running out of moves, you must transition from reactive matching to proactive planning.

1. **Always Work from the Bottom:** This is the golden rule of Match-3 games. If you make a match at the top of the board, only those three tiles move. If you make a match at the absolute bottom of the board, the entire column of tiles above it shifts down. This massive shift significantly increases the statistical probability of accidentally triggering free, automatic cascade matches.

2. **The "T" and "L" Shapes:** Matching three in a row is basic; you should actively be looking for intersecting matches. Matching 5 runes in a "T" or "L" shape usually creates a highly powerful "Bomb Rune" that will destroy a massive 3x3 radius when activated. Always scan the board for these shapes before settling for a standard match of three.

3. **Save Your Specials for the Goal:** Do not detonate a powerful row-clearing Special Rune just because it is available. Look at your level objective. If you need to break a stone slab in the bottom left corner, leave the Special Rune untouched until you can strategically maneuver it into a position where its explosion will actually hit the required target.

4. **Combine Special Runes:** If you manage to create two Special Runes adjacent to each other, you can swap them with each other instead of a normal rune. This triggers a massive, board-clearing super-explosion. Combining a "Row Clear" rune with a "Bomb" rune will often clear over half the board in a single move. This is the ultimate strategy for beating difficult levels.

5. **Take Your Time:** *Egypt Runes* is rarely timed by the clock; it is limited by moves. There is no penalty for staring at the board for five minutes. Before you make a swap, trace the resulting drop in your head. Ask yourself: "What will happen to the tiles above this match when it disappears?"
`
  },
  {
    title: 'Poppy Playtime Survival',
    seoContent: `
*Poppy Playtime Survival* is a masterfully executed, browser-based distillation of the tense, atmospheric horror that made the original franchise a global phenomenon. It strips away the complex, multi-hour narrative and focuses entirely on the most terrifying aspect of the series: the agonizing, heart-pounding realization that you are trapped in a dark, labyrinthine toy factory with a massive, grinning predator. The game excels in its environmental design and audio engineering. The factory feels genuinely abandoned, featuring flickering lights, overturned toy displays, and long, ominous shadows stretching across the cold tile floors. The tension is built not through cheap jumpscares, but through the overwhelming silence, broken only by your own footsteps and the distant, heavy thud of Huggy Wuggy patrolling the corridors. The game forces you into a state of constant vulnerability. You have no weapons, no means of fighting back, and highly limited stamina. It is a pure game of cat-and-mouse, demanding a slow, methodical approach to exploration and an instantaneous, panicked reaction when things inevitably go wrong. It is a brilliant example of how much fear can be generated using limited graphics and a robust, aggressive AI.

## How to Play
The game utilizes a standard first-person control scheme, designed to immerse you directly in the horror. You use the WASD keys to navigate the sprawling factory, the mouse to control your field of vision, and the Shift key to sprint. 

The core objective is to survive and ultimately escape the facility. To do this, you must explore the environment and locate a series of specific, required items (often keys, batteries, or access cards) that will unlock the final exit door. These items are scattered randomly throughout the map, forcing you to explore every dark corner and dead-end hallway. The primary obstacle is, of course, the monster. Huggy Wuggy actively patrols the map. If he spots you, a high-speed chase initiates. You must immediately turn and run, using your limited stamina (which depletes quickly and recharges slowly) to break his line of sight. You can hide inside specific lockers or behind large objects until he loses your scent and resumes his patrol. The gameplay loop is a constant cycle of slow, creeping exploration followed by terrifying bursts of high-speed evasion. 

## Our tips
Surviving the toy factory requires nerves of steel and a highly tactical approach to movement. 

1. **Walk, Don't Run:** Sprinting is the loudest action you can take in the game, and the monster's AI will instantly lock onto your location if you sprint near him. You should only use the Shift key when you have been spotted and are actively engaged in a chase. For general exploration, you must force yourself to walk slowly and quietly.

2. **The "Peek" Mechanic:** Before you enter a long hallway or a large, open room, do not just walk through the door. Approach the doorframe, stop, and gently use your mouse to peek around the corner. Huggy Wuggy is massive and bright blue; he is easy to spot from a distance if you are looking carefully.

3. **Stamina is Life:** Never allow your stamina bar to fully deplete unless it is a matter of life and death. If you run out of stamina completely, you will be unable to sprint again for several seconds, leaving you completely defenseless. During a chase, run in short bursts, trying to break line of sight as quickly as possible rather than just running in a straight line.

4. **Map the Hiding Spots:** The absolute first thing you must do when entering a new sector of the factory is identify where the safe zones are. Locate the lockers and the vents. If you grab a key and immediately hear the chase music start, you must already know exactly which corner to turn to find safety without having to think about it.

5. **Listen to the Music:** The audio design is your most valuable tool. The ambient music will often subtly change or introduce a low, pulsing bass note when the monster is in the immediate vicinity, even if you can't see him. If the audio cues change, stop moving, crouch, and listen closely for his footsteps to determine his direction.
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
