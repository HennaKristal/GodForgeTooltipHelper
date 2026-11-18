// Add new effects here. Keys must match the text shown on GodForge.
// The matching is case-insensitive and ignores surrounding whitespace.
// Source: https://www.ravenpyros.com/status-effects

const GodForgeEffects = {
    "ACC Up": {
        type: "buff",
        description: "Increases ACC"
    },
    "ACC Up I": {
        type: "buff",
        description: "Increases ACC 20%"
    },
    "ACC Up II": {
        type: "buff",
        description: "Increases ACC 40%"
    },
    "ACC Up III": {
        type: "buff",
        description: "Increases ACC 60%"
    },
    "Arcane Aegis": {
        type: "buff",
        description: "Reduce Divinity Reductions multiplicatively per stack. Stacks are removed at the end of the hero's turn"
    },
    "Arcane Aegis I": {
        type: "buff",
        description: "Reduce Divinity Reductions by 5% multiplicatively per stack. Stacks are removed at the end of the hero's turn"
    },
    "Arcane Aegis II": {
        type: "buff",
        description: " Reduce Divinity Reductions by 15% multiplicatively per stack. Stacks are removed at the end of the hero's turn"
    },
    "Arcane Aegis III": {
        type: "buff",
        description: "Reduce Divinity Reductions by 25% multiplicatively per stack. Stacks are removed at the end of the hero's turn"
    },
    "ATK Up": {
        type: "buff",
        description: "Raises ATK"
    },
    "ATK Up I": {
        type: "buff",
        description: "Raises ATK by 20%"
    },
    "ATK Up II": {
        type: "buff",
        description: "Raises ATK by 40%"
    },
    "ATK Up III": {
        type: "buff",
        description: "Raises ATK by 60%"
    },
    "Backfire": {
        type: "buff",
        description: "When this hero would gain a non-resisted Debuff, prevent it and apply the debuff to the enemy instead. Each trigger reduces Backfire duration"
    },
    "Barrier": {
        type: "buff",
        description: "Absorbs incoming damage. Barriers can increase when additional Barriers are placed on the hero"
    },
    "Block Debuff": {
        type: "buff",
        description: "Blocks the next incoming Debuff placed on this hero. Duration is reduced when activated"
    },
    "Block Debuffs": {
        type: "buff",
        description: "Blocks the next incoming Debuff placed on this hero. Duration is reduced when activated"
    },
    "Counter": {
        type: "buff",
        description: "When attacked, this hero counter-attacks with their basic ability"
    },
    "DEF Up": {
        type: "buff",
        description: "Raises DEF"
    },
    "DEF Up I": {
        type: "buff",
        description: "Raises DEF by 20%"
    },
    "DEF Up II": {
        type: "buff",
        description: "Raises DEF by 40%"
    },
    "DEF Up III": {
        type: "buff",
        description: "Raises DEF by 60%"
    },
    "FTH Up": {
        type: "buff",
        description: "Raises FTH"
    },
    "FTH Up I": {
        type: "buff",
        description: "Raises FTH by 10%"
    },
    "FTH Up II": {
        type: "buff",
        description: "Raises FTH by 20%"
    },
    "FTH Up III": {
        type: "buff",
        description: "Raises FTH by 30%"
    },
    "Gluttony": {
        type: "buff",
        description: "For every stack, -5% damage received and +5% FTH. Does not expire and cannot be removed by normal buff removal effects."
    },
    "Immortal": {
        type: "buff",
        description: "Prevents a Hero from being defeated, keeping them on 1 HP. Duration is reduced on activation."
    },
    "Immune": {
        type: "buff",
        description: "This hero is immune to all negative effects."
    },
    "Intercept": {
        type: "buff",
        description: "Redirects an attack to the hero that placed Intercept. Duration is reduced when activated."
    },
    "Mend": {
        type: "buff",
        description: "Reduce Bleed Stacks by 2 and Heal 10%HP at the start of the turn"
    },
    "Mirror": {
        type: "buff",
        description: "Mirrors or copies an effect."
    },
    "Phoenix": {
        type: "buff",
        description: "If the hero is defeated, revives them with 50% HP and 50% turn meter. Buff is removed upon activation."
    },
    "Precision": {
        type: "buff",
        description: "Guarantees attacks are Crushing Hits"
    },
    "Protect": {
        type: "buff",
        description: "Transfers portion of the damage this unit would receive to the hero who placed this buff."
    },
    "Protect I": {
        type: "buff",
        description: "Transfers 20% of the damage this unit would receive to the hero who placed this buff."
    },
    "Protect II": {
        type: "buff",
        description: "Transfers 40% of the damage this unit would receive to the hero who placed this buff."
    },
    "Protect III": {
        type: "buff",
        description: "Transfers 60% of the damage this unit would receive to the hero who placed this buff."
    },
    "Radiance I": {
        type: "buff",
        description: "Reduces damage received and reflects the reduced damage back to the attacker."
    },
    "Radiance I": {
        type: "buff",
        description: "Reduces damage received by 10% and reflects the reduced damage back to the attacker."
    },
    "Radiance II": {
        type: "buff",
        description: "Reduces damage received by 20% and reflects the reduced damage back to the attacker."
    },
    "Radiance III": {
        type: "buff",
        description: "Reduces damage received by 30% and reflects the reduced damage back to the attacker."
    },
    "RES Up": {
        type: "buff",
        description: "Raises RES"
    },
    "RES Up I": {
        type: "buff",
        description: "Raises RES by 20%"
    },
    "RES Up II": {
        type: "buff",
        description: "Raises RES by 40%"
    },
    "RES Up III": {
        type: "buff",
        description: "Raises RES by 60%"
    },
    "Retaliate": {
        type: "buff",
        description: "When an enemy attacks this hero, they retaliate with their Basic Ability."
    },
    "Ricochet": {
        type: "buff",
        description: "Attacks a random target, then continues chaining to new targets. Each attack has a lower chance to occur."
    },
    "Sharpen": {
        type: "buff",
        description: "Increase Crushing Hit Chance and Crushing Hit Damage"
    },
    "Sharpen I": {
        type: "buff",
        description: "Increase Crushing Hit Chance and Crushing Hit Damage by 15%"
    },
    "Sharpen II": {
        type: "buff",
        description: "Increase Crushing Hit Chance and Crushing Hit Damage by 30%"
    },
    "Sharpen III": {
        type: "buff",
        description: "Increase Crushing Hit Chance and Crushing Hit Damage by 45%"
    },
    "Shield": {
        type: "buff",
        description: "Absorbs incoming damage equal to the strength of the shield before depleting HP. Shields cannot stack or be increased."
    },
    "SPD Up": {
        type: "buff",
        description: "Raises SPD"
    },
    "SPD Up I": {
        type: "buff",
        description: "Raises SPD by 10%"
    },
    "SPD Up II": {
        type: "buff",
        description: "Raises SPD by 20%"
    },
    "SPD Up III": {
        type: "buff",
        description: "Raises SPD by 30%"
    },
    "Stalwart": {
        type: "buff",
        description: "This hero is immune to Disables. The duration is reduced when an enemy attempts to Disable the hero. Will remove Disables when placed on this Hero."
    },
    "Temporal Aegis": {
        type: "buff",
        description: "Reduce Turn Meter Reductions multiplicatively per stack. Stacks are removed at the end of the hero's turn."
    },
    "Temporal Aegis I": {
        type: "buff",
        description: "Reduce Turn Meter Reductions by 5% multiplicatively per stack. Stacks are removed at the end of the hero's turn."
    },
    "Temporal Aegis II": {
        type: "buff",
        description: "Reduce Turn Meter Reductions by 15% multiplicatively per stack. Stacks are removed at the end of the hero's turn."
    },
    "Temporal Aegis III": {
        type: "buff",
        description: "Reduce Turn Meter Reductions by 25% multiplicatively per stack. Stacks are removed at the end of the hero's turn."
    },
    "Vanish": {
        type: "buff",
        description: "Cannot be directly targeted with attacks."
    },
    "Ward": {
        type: "buff",
        description: "Reduces damage received by 100%. Duration is reduced when triggered by an attack."
    },
    "ACC Down": {
        type: "debuff",
        description: "Lowers ACC"
    },
    "ACC Down I": {
        type: "debuff",
        description: "Lowers ACC by 20%"
    },
    "ACC Down II": {
        type: "debuff",
        description: "Lowers ACC by 40%"
    },
    "ACC Down III": {
        type: "debuff",
        description: "Lowers ACC by 60%"
    },
    "Acid": {
        type: "debuff",
        description: "Disables Armor Sets and Deals 5% Max HP Damage to this hero at the start of the hero's turn. Inflicts double the damage to Shield and Barrier"
    },
    "Aetherburn": {
        type: "debuff",
        description: "Increases Weak Hit Chance and reduces the Divinity of all allied heroes. Does not reduce Boss Divinity."
    },
    "Aetherburn I": {
        type: "debuff",
        description: "Increases Weak Hit Chance by 5% and reduces the Divinity of all allied heroes by 3%. Does not reduce Boss Divinity."
    },
    "Aetherburn II": {
        type: "debuff",
        description: "Increases Weak Hit Chance by 10% and reduces the Divinity of all allied heroes by 6%. Does not reduce Boss Divinity."
    },
    "Aetherburn III": {
        type: "debuff",
        description: "Increases Weak Hit Chance by 15% and reduces the Divinity of all allied heroes by 9%. Does not reduce Boss Divinity."
    },
    "ATK Down": {
        type: "debuff",
        description: "Lowers ATK"
    },
    "ATK Down I": {
        type: "debuff",
        description: "Lowers ATK by 20%"
    },
    "ATK Down II": {
        type: "debuff",
        description: "Lowers ATK by 40%"
    },
    "ATK Down III": {
        type: "debuff",
        description: "Lowers ATK by 60%"
    },
    "Banish": {
        type: "debuff",
        description: "Enemies defeated with this debuff cannot be revived whilst this is on. When a revive occurs, the duration of this debuff is reduced."
    },
    "Blaze": {
        type: "debuff",
        description: "Inflicts portion of MAX HP to each hero on the team. This is doubled for the hero taking the turn."
    },
    "Blaze I": {
        type: "debuff",
        description: "Inflicts 1% MAX HP to each hero on the team. This is doubled for the hero taking the turn."
    },
    "Blaze II": {
        type: "debuff",
        description: "Inflicts 2% MAX HP to each hero on the team. This is doubled for the hero taking the turn."
    },
    "Blaze III": {
        type: "debuff",
        description: "Inflicts 3% MAX HP to each hero on the team. This is doubled for the hero taking the turn."
    },
    "Bleed": {
        type: "debuff",
        description: "Inflicts 1% of MAX HP Damage at the start of the hero's turn. Stacks up to 10 times. Cannot be removed or reduced by abilities."
    },
    "Block Revive": {
        type: "debuff",
        description: "Enemies defeated with this debuff cannot be revived."
    },
    "Blunt": {
        type: "debuff",
        description: "Decreases Crushing Hit Chance and Crushing Hit Damage"
    },
    "Blunt I": {
        type: "debuff",
        description: "Decreases Crushing Hit Chance and Crushing Hit Damage by 15%"
    },
    "Blunt II": {
        type: "debuff",
        description: "Decreases Crushing Hit Chance and Crushing Hit Damage by 30%"
    },
    "Blunt III": {
        type: "debuff",
        description: "Decreases Crushing Hit Chance and Crushing Hit Damage by 45%"
    },
    "Charm": {
        type: "debuff",
        description: "When the hero that placed Charm is attacked, the Charmed Hero will receive the attack instead. Will not activate if this hero attacks the enemy that placed the Charm. Only one Charm can be active on a team at any time."
    },
    "Corrupt": {
        type: "debuff",
        description: "The hero that placed this debuff steals any Buff placed on the enemy. Duration reduced when triggered."
    },
    "Curse": {
        type: "debuff",
        description: "Reduces incoming healing and the strength of Shields and Barrier"
    },
    "Curse I": {
        type: "debuff",
        description: "Reduces incoming healing and the strength of Shields and Barriers by 25%"
    },
    "Curse II": {
        type: "debuff",
        description: "Reduces incoming healing and the strength of Shields and Barriers by 50%"
    },
    "Curse III": {
        type: "debuff",
        description: "Reduces incoming healing and the strength of Shields and Barriers by 75%"
    },
    "Dark Tidings": {
        type: "debuff",
        description: "Each Stack decreases the damage inflicted by 5%. Stacks up to 5 times and can only be removed when this hero casts their Ultimate (when all stacks are removed). At Max Stacks, also decrease SPD and FTH by 10%."
    },
    "DEF Down": {
        type: "debuff",
        description: "Lowers DEF"
    },
    "DEF Down I": {
        type: "debuff",
        description: "Lowers DEF by 20%"
    },
    "DEF Down II": {
        type: "debuff",
        description: "Lowers DEF by 40%"
    },
    "DEF Down III": {
        type: "debuff",
        description: "Lowers DEF by 60%"
    },
    "Drain": {
        type: "debuff",
        description: "This hero receives increased damage and attackers Heal for some of the damage inflicted"
    },
    "Drain I": {
        type: "debuff",
        description: "This hero receives 10% increased damage and attackers Heal for 10% of the damage inflicted"
    },
    "Drain II": {
        type: "debuff",
        description: "This hero receives 20% increased damage and attackers Heal for 20% of the damage inflicted"
    },
    "Drain III": {
        type: "debuff",
        description: "This hero receives 30% increased damage and attackers Heal for 30% of the damage inflicted"
    },
    "FTH Down": {
        type: "debuff",
        description: "Lowers FTH"
    },
    "FTH Down I": {
        type: "debuff",
        description: "Lowers FTH by 10%"
    },
    "FTH Down II": {
        type: "debuff",
        description: "Lowers FTH by 20%"
    },
    "FTH Down III": {
        type: "debuff",
        description: "Lowers FTH by 30%"
    },
    "Hex": {
        type: "debuff",
        description: "Allies receive some of damage inflicted to this hero. The damage is halved for AoE attacks."
    },
    "Hex I": {
        type: "debuff",
        description: "Allies receive 5% of damage inflicted to this hero. The damage is halved for AoE attacks."
    },
    "Hex II": {
        type: "debuff",
        description: "Allies receive 10% of damage inflicted to this hero. The damage is halved for AoE attacks."
    },
    "Hex III": {
        type: "debuff",
        description: "Allies receive 15% of damage inflicted to this hero. The damage is halved for AoE attacks."
    },
    "Lock Core": {
        type: "debuff",
        description: "Prevents the use of the hero's Core Ability"
    },
    "Lock Passive": {
        type: "debuff",
        description: "Prevents the use of the hero's Passive Ability"
    },
    "Lock Ultimate": {
        type: "debuff",
        description: "Prevents the use of the hero's Ultimate Ability"
    },
    "RES Down": {
        type: "debuff",
        description: "Lowers RES"
    },
    "RES Down I": {
        type: "debuff",
        description: "Lowers RES by 20%"
    },
    "RES Down II": {
        type: "debuff",
        description: "Lowers RES by 40%"
    },
    "RES Down III": {
        type: "debuff",
        description: "Lowers RES by 60%"
    },
    "SPD Down": {
        type: "debuff",
        description: "Lowers SPD"
    },
    "SPD Down I": {
        type: "debuff",
        description: "Lowers SPD by 10%"
    },
    "SPD Down II": {
        type: "debuff",
        description: "Lowers SPD by 20%"
    },
    "SPD Down III": {
        type: "debuff",
        description: "Lowers SPD by 30%"
    },
    "Terrify": {
        type: "debuff",
        description: "Increases Divinity Cost by 50%"
    },
    "Vulnerable": {
        type: "debuff",
        description: "Increases damage inflicted by debuffs"
    },
    "Vulnerable I": {
        type: "debuff",
        description: "Increases damage inflicted by debuffs by 20%."
    },
    "Vulnerable II": {
        type: "debuff",
        description: "Increases damage inflicted by debuffs by 40%."
    },
    "Vulnerable III": {
        type: "debuff",
        description: "Increases damage inflicted by debuffs by 60%."
    },
    "Confuse": {
        type: "disable",
        description: "This hero attacks a random ally with its basic ability on its turn, doing 75% reduced damage."
    },
    "Despair": {
        type: "disable",
        description: "Prevents Buffs or Positive Effects being placed. Duration is reduced when receiving a Buff or Effect. Hero misses their next turn."
    },
    "Freeze": {
        type: "disable",
        description: "Incoming Turn Meter Fill effects are reduced by 50%. Hero misses their next turn."
    },
    "Petrify": {
        type: "disable",
        description: "Increase Divinity Effects are Reduced by 50%. Hero misses their next turn."
    },
    "Shade": {
        type: "disable",
        description: "Permanently removes the hero from Ally Team Control. Shades cannot be targeted or take turns and will join the Caster's Basic Attacks. When the Caster is defeated, all Shades are defeated and Shade is removed."
    },
    "Sleep": {
        type: "disable",
        description: "The hero receives 30% increased damage from attacks. Duration is reduced when attacked. Hero misses their next turn."
    },
    "Stun": {
        type: "disable",
        description: "Hero misses their next turn."
    },
    "Taunt": {
        type: "disable",
        description: "Forces this hero to attack the enemy that placed Taunt using their Basic Ability, inflicting 25% reduced damage."
    },
};
