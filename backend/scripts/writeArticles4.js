const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const Game = require('../src/models/Game');

const articles = [
  {
    title: 'Monsters Attack Impostor Squad',
    seoContent: `
*Monsters Attack Impostor Squad* takes the wildly popular character designs of the social deduction mega-hit and aggressively repurposes them into an absolute bloodbath of a survival shooter. Instead of sneaking around a spaceship completing mundane electrical tasks and arguing in cafeteria meetings, this game hands you an arsenal of heavy weaponry and tasks you with holding the line against endless, horrifying waves of mutated, aggressive impostors. The game successfully pivots the franchise's inherently tense, paranoid atmosphere into a pure, adrenaline-fueled action experience. Set in a dimly lit, claustrophobic industrial complex, the game utilizes a top-down, isometric perspective that provides excellent tactical visibility while still maintaining a feeling of being constantly surrounded. The enemy designs are a highlight, taking the iconic, simple spacesuit shapes and warping them with grotesque tentacles, glowing eyes, and massive teeth. The action is relentless. From the second the round starts, you are swarmed by enemies pouring out of vents, dropping from the ceiling, and rushing down every available hallway. It is a game that heavily prioritizes crowd control, spatial awareness, and resource management over stealth or deception. 

## How to Play
The game operates as a classic twin-stick shooter, adapted perfectly for the keyboard and mouse setup. You use the WASD keys to move your heavily armed crewmate around the arena, while the mouse cursor dictates the direction you are aiming. The Left Mouse Button fires your equipped weapon continuously. 

The core objective is wave survival. You start with a basic pistol, which is highly accurate but suffers from low damage and a small magazine. As you mow down the waves of monstrous impostors, they drop coins and occasional temporary power-ups (like speed boosts or invulnerability shields). Between waves, a shop menu appears, allowing you to spend your hard-earned coins to purchase significantly more powerful weapons—ranging from spread-fire shotguns and rapid-fire assault rifles to devastating rocket launchers and laser cannons. You must constantly balance spending coins on immediate firepower versus saving up for top-tier weapons later in the game. The enemies become faster, more heavily armored, and spawn in massively increased numbers with each passing wave. Letting yourself get backed into a corner is a guaranteed game over. 

## Our tips
Surviving the later, chaotic waves of this mutant onslaught requires strict discipline and constant movement. 

1. **The Kite Strategy:** You should almost never be running directly toward the enemy spawn points. The most effective strategy in twin-stick shooters is "kiting." Run backward in large circles around the perimeter of the map while firing continuously over your shoulder into the chasing mob. This clusters the enemies tightly together, maximizing the efficiency of weapons that feature spread or area-of-effect damage.

2. **Prioritize the Runners:** The standard, slow-moving monsters are easy to avoid, but later waves introduce "runner" variants that sprint significantly faster than your base movement speed. The absolute second you see a runner spawn, stop shooting the main horde and focus all your fire on the runner until it drops. If a runner manages to close the distance and engage you in melee, the slower horde will immediately catch up and surround you.

3. **Corner Trap Avoidance:** The map is filled with small alcoves and dead ends. Never, under any circumstances, back yourself into a corner to make a final stand. The sheer volume of enemies will overwhelm your DPS (Damage Per Second) output, and you will be crushed against the wall. Always maintain an exit route.

4. **Weapon Synergy:** When purchasing weapons from the shop, try to carry two weapons that serve different tactical purposes. A shotgun is incredible for blasting a hole through a mob if you get surrounded, but it is useless for taking out ranged enemies. Pair a high-spread weapon with a high-accuracy, long-range rifle to ensure you are prepared for any spawn pattern.

5. **Don't Hoard Power-ups:** If a temporary invulnerability or rapid-fire power-up drops during the first 10 seconds of a wave, do not wait until you are almost dead to pick it up. Use it immediately to instantly wipe out the current spawn wave, allowing you to focus entirely on positioning for the next wave without any stragglers harassing you.
`
  },
  {
    title: 'Evil Granny Must Die Ch1',
    seoContent: `
*Evil Granny Must Die Ch1* is a tense, darkly comedic, and highly engaging twist on the popular stealth-horror genre. It leans heavily into the viral trend of escaping a terrifying, heavily armed elderly antagonist inside a dilapidated, labyrinthine house. However, this game boldly subverts the core expectation of the genre: instead of being a helpless victim forced to constantly hide in closets and under beds, you are actively hunting the hunter. The atmosphere is an excellent blend of genuine tension and B-movie absurdity. The house is massive, poorly lit, and filled with creaking floorboards, locked doors, and elaborate traps. The titular Evil Granny patrols the hallways relentlessly, armed to the teeth and sporting surprisingly sharp AI that reacts realistically to sound and line-of-sight. The brilliance of the game lies in the power fantasy transition. You begin the game weak, utilizing stealth to avoid detection while you scour the environment for scattered weapon parts, ammunition, and keys. But as you slowly assemble an arsenal, the dynamic shifts from a terrifying game of hide-and-seek to a highly tactical, room-to-room clearing operation. It is a deeply satisfying revenge simulator wrapped in a spooky, atmospheric package.

## How to Play
The game utilizes a standard first-person control scheme. You navigate the eerie house using the WASD keys, utilizing the Shift key to sprint (which drains a stamina bar and creates massive amounts of noise) and the Ctrl key to crouch (which makes you completely silent and harder to spot). The mouse handles aiming and camera movement. 

The primary objective of Chapter 1 is to locate the required components to assemble a high-powered weapon and then use it to eliminate Evil Granny once and for all. You interact with the environment using the 'E' or 'F' keys, opening drawers, searching cabinets, and collecting crucial items. The inventory system is crucial; you can only carry a limited number of items, forcing you to constantly evaluate what is essential for survival versus what is needed for the final weapon assembly. 

Stealth is absolutely mandatory in the early game. If Evil Granny spots you before you are armed, a terrifying chase sequence begins. She is surprisingly fast and will easily catch you if you deplete your stamina. You must break line of sight and hide in designated safe zones until she loses interest and resumes her patrol. Once you successfully assemble your weapon, the gameplay instantly pivots into a tense, tactical shooter where you must bait her into a favorable engagement.

## Our tips
Transitioning from prey to predator in a haunted house requires a very methodical approach.

1. **Memorize the Floor Plan:** Getting lost while being chased is a death sentence. Spend the early game carefully mapping out the house in your head. You must instantly know the fastest route to the nearest closet or hiding spot from any room in the house. Note which doors are locked and which hallways are dead ends.

2. **Sound is a Weapon:** Evil Granny's AI is heavily dependent on audio cues. You can use this to your advantage. If a crucial item is located in a room she is currently guarding, walk to the opposite side of the house, knock over a vase or sprint loudly to create a sound profile, then immediately crouch and sneak back to the room she just vacated to investigate the noise.

3. **Close Doors Behind You:** An open door is a massive visual cue for the AI that someone has been in that area recently. Always close doors behind you as you search rooms. This dramatically reduces the chances of her suddenly bursting into a room while you are vulnerable and searching a drawer.

4. **The Staircase Ambush:** Once you have finally assembled your weapon, do not just run around looking for her. Find a highly defensible position, preferably the top of a long, straight staircase. Fire a single shot into the wall to alert her to your presence, then aim down your sights at the bottom of the stairs. This forces her into a fatal funnel where she has zero cover.

5. **Stamina Management:** Never let your stamina bar drop below 25% while exploring. If she suddenly rounds a corner and surprises you, you absolutely must have enough stamina in reserve to sprint away and break line of sight. Walking is always safer than sprinting unless you are actively engaged in a chase.
`
  },
  {
    title: 'Evil Granny: City Terror',
    seoContent: `
*Evil Granny: City Terror* takes the terrifying, localized horror of the original "Granny" games and absurdly, brilliantly scales it up to an entire apocalyptic urban environment. The claustrophobic horror of escaping a single, creaky house is entirely abandoned in favor of a massive, open-world city currently under siege by a heavily armed, giant, and seemingly unstoppable elderly antagonist. The game is an absolute sandbox of destruction, blending the mechanics of a third-person survival shooter with the chaotic, physics-based mayhem of titles like *Goat Simulator* or *GTA*. The atmosphere is pure, unadulterated B-movie schlock. The city is massive, filled with terrified blocky pedestrians, exploding vehicles, and destructible environments. Evil Granny herself is an absolute menace, capable of throwing cars, leaping massive distances, and absorbing an unbelievable amount of firepower. You play as a heavily armed survivor tasked with bringing an end to her reign of terror. It is a game that completely ignores logic and realism in favor of explosive set pieces, ridiculous ragdoll physics, and constant, high-octane action.

## How to Play
The game uses standard third-person shooter mechanics. WASD controls your character's movement through the devastated city, while the mouse aims your weapon and controls the camera. The Left Mouse Button fires, and you will often have access to a small arsenal of high-powered weaponry, ranging from assault rifles to RPGs, switchable via the number keys or mouse wheel.

Your primary objective is clearly displayed on your HUD: reduce Evil Granny's massive boss health bar to zero. However, this is significantly easier said than done. She constantly stalks the city, actively hunting the player and destroying anything in her path. The city itself is filled with ammunition crates and health packs that you must constantly scavenge in order to stay in the fight. Furthermore, the military or police forces present in the city are completely indiscriminate; they will shoot at Granny, but they will also shoot at you if you cross into their line of fire. Managing your ammunition, utilizing the urban environment for cover, and constantly staying on the move are critical to surviving this apocalyptic showdown.

## Our tips
Taking down a skyscraper-sized, heavily armed senior citizen requires heavy ordinance and environmental awareness. 

1. **Rooftop Warfare:** Fighting Evil Granny on the street level is essentially suicide. She has massive area-of-effect attacks that can instantly crush you if you are on the ground. Immediately seek out the tallest building you can find and climb to the roof. From here, you can rain down rockets and sniper fire with relative impunity, forcing her to rely on easily dodged ranged attacks.

2. **The RPG Hit-and-Run:** Your standard assault rifle is practically useless against her massive health pool; it is only good for dealing with the random military NPCs. Save every single rocket and grenade for Granny. Fire a rocket, immediately turn and sprint to break line of sight before she retaliates, reload in cover, and repeat. Do not try to trade damage with her.

3. **Explosive Environments:** The city is littered with highly volatile gas stations, propane tanks, and abandoned cars. Do not just shoot Granny directly. Wait until she aggressively charges past a gas station, then shoot the gas pumps. The resulting environmental explosion does vastly more damage than your standard weapons and often stuns her momentarily.

4. **Kite Her Into the Military:** If you are running low on health and ammunition, stop shooting and start running toward any military blockades or police cruisers you see on the map. Kite Granny directly into their line of fire. While the NPCs do very little damage individually, a dozen of them firing simultaneously can significantly chip away at her health bar while distracting her from you.

5. **Never Stop Strafing:** Her ranged attacks (which often involve throwing massive boulders or exploding cars at you) have a significant travel time. If you are constantly strafing (moving left and right) rather than standing still or running in a straight line, her AI will struggle to predict your trajectory, and you can easily dodge the vast majority of her projectiles.
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
