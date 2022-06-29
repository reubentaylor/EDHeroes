import { ClassFeatures } from "./classFeatures.js";
import { preLocalize } from "./utils.js";

// Namespace Configuration Values
export const EH5E = {};

// ASCII Artwork
EH5E.ASCII = `_______________________________
______      ______ _____ _____
|  _  \\___  |  _  \\  ___|  ___|
| | | ( _ ) | | | |___ \\| |__
| | | / _ \\/\\ | | |   \\ \\  __|
| |/ / (_>  < |/ //\\__/ / |___
|___/ \\___/\\/___/ \\____/\\____/
_______________________________`;


/**
 * The set of Ability Scores used within the system.
 * @enum {string}
 */
EH5E.abilities = {
  str: "EH5E.AbilityStr",
  dex: "EH5E.AbilityDex",
  con: "EH5E.AbilityCon",
  int: "EH5E.AbilityInt",
  wis: "EH5E.AbilityWis",
  cha: "EH5E.AbilityCha",
  hon: "EH5E.AbilityHon",
  san: "EH5E.AbilitySan"
};
preLocalize("abilities");

/**
 * Localized abbreviations for Ability Scores.
 * @enum {string}
 */
EH5E.abilityAbbreviations = {
  str: "EH5E.AbilityStrAbbr",
  dex: "EH5E.AbilityDexAbbr",
  con: "EH5E.AbilityConAbbr",
  int: "EH5E.AbilityIntAbbr",
  wis: "EH5E.AbilityWisAbbr",
  cha: "EH5E.AbilityChaAbbr",
  hon: "EH5E.AbilityHonAbbr",
  san: "EH5E.AbilitySanAbbr"
};
preLocalize("abilityAbbreviations");

/* -------------------------------------------- */

/**
 * Character alignment options.
 * @enum {string}
 */
EH5E.alignments = {
  lg: "EH5E.AlignmentLG",
  ng: "EH5E.AlignmentNG",
  cg: "EH5E.AlignmentCG",
  ln: "EH5E.AlignmentLN",
  tn: "EH5E.AlignmentTN",
  cn: "EH5E.AlignmentCN",
  le: "EH5E.AlignmentLE",
  ne: "EH5E.AlignmentNE",
  ce: "EH5E.AlignmentCE"
};
preLocalize("alignments");

/* -------------------------------------------- */

/**
 * An enumeration of item attunement types.
 * @enum {number}
 */
EH5E.attunementTypes = {
  NONE: 0,
  REQUIRED: 1,
  ATTUNED: 2
};

/**
 * An enumeration of item attunement states.
 * @type {{"0": string, "1": string, "2": string}}
 */
EH5E.attunements = {
  0: "EH5E.AttunementNone",
  1: "EH5E.AttunementRequired",
  2: "EH5E.AttunementAttuned"
};
preLocalize("attunements");

/* -------------------------------------------- */

/**
 * General weapon categories.
 * @enum {string}
 */
EH5E.weaponProficiencies = {
  sim: "EH5E.WeaponBasicProficiency",
  mar: "EH5E.WeaponAdvancedProficiency",
  his: "EH5E.WeaponHistoricProficiency",
  mil: "EH5E.WeaponMilitaryProficiency",
  imp: "EH5E.WeaponImprovisedProficiency"
};
preLocalize("weaponProficiencies");

/**
 * A mapping between `EH5E.weaponTypes` and `EH5E.weaponProficiencies` that
 * is used to determine if character has proficiency when adding an item.
 * @enum {(boolean|string)}
 */
EH5E.weaponProficienciesMap = {
  natural: true,
  simpleM: "sim",
  simpleR: "sim",
  advancedM: "mar",
  advancedR: "mar",
  historicM: "his",
  historicR: "his",
  militaryM: "mil",
  militaryR: "mil",
  improvisedM: "imp",
  imporvisedR: "imp"
};

/**
 * The basic weapon types in 5e. This enables specific weapon proficiencies or
 * starting equipment provided by classes and backgrounds.
 * @enum {string}
 */
EH5E.weaponIds = {
  battleaxe: "I0WocDSuNpGJayPb",
  blowgun: "wNWK6yJMHG9ANqQV",
  club: "nfIRTECQIG81CvM4",
  dagger: "0E565kQUBmndJ1a2",
  dart: "3rCO8MTIdPGSW6IJ",
  flail: "UrH3sMdnUDckIHJ6",
  glaive: "rOG1OM2ihgPjOvFW",
  greataxe: "1Lxk6kmoRhG8qQ0u",
  greatclub: "QRCsxkCwWNwswL9o",
  greatsword: "xMkP8BmFzElcsMaR",
  halberd: "DMejWAc8r8YvDPP1",
  handaxe: "eO7Fbv5WBk5zvGOc",
  handcrossbow: "qaSro7kFhxD6INbZ",
  heavycrossbow: "RmP0mYRn2J7K26rX",
  javelin: "DWLMnODrnHn8IbAG",
  lance: "RnuxdHUAIgxccVwj",
  lightcrossbow: "ddWvQRLmnnIS0eLF",
  lighthammer: "XVK6TOL4sGItssAE",
  longbow: "3cymOVja8jXbzrdT",
  longsword: "10ZP2Bu3vnCuYMIB",
  mace: "Ajyq6nGwF7FtLhDQ",
  maul: "DizirD7eqjh8n95A",
  morningstar: "dX8AxCh9o0A9CkT3",
  net: "aEiM49V8vWpWw7rU",
  pike: "tC0kcqZT9HHAO0PD",
  quarterstaff: "g2dWN7PQiMRYWzyk",
  rapier: "Tobce1hexTnDk4sV",
  scimitar: "fbC0Mg1a73wdFbqO",
  shortsword: "osLzOwQdPtrK3rQH",
  sickle: "i4NeNZ30ycwPDHMx",
  spear: "OG4nBBydvmfWYXIk",
  shortbow: "GJv6WkD7D2J6rP6M",
  sling: "3gynWO9sN4OLGMWD",
  trident: "F65ANO66ckP8FDMa",
  warpick: "2YdfjN1PIIrSHZii",
  warhammer: "F0Df164Xv1gWcYt0",
  whip: "QKTyxoO0YDnAsbYe"
};

/* -------------------------------------------- */

/**
 * The categories into which Tool items can be grouped.
 *
 * @enum {string}
 */
EH5E.toolTypes = {
  art: "EH5E.ToolArtisans",
  game: "EH5E.ToolGamingSet",
  music: "EH5E.ToolMusicalInstrument"
};
preLocalize("toolTypes", { sort: true });

/**
 * The categories of tool proficiencies that a character can gain.
 *
 * @enum {string}
 */
EH5E.toolProficiencies = {
  ...EH5E.toolTypes,
  vehicle: "EH5E.ToolVehicle"
};
preLocalize("toolProficiencies", { sort: true });

/**
 * The basic tool types in 5e. This enables specific tool proficiencies or
 * starting equipment provided by classes and backgrounds.
 * @enum {string}
 */
EH5E.toolIds = {
  alchemist: "SztwZhbhZeCqyAes",
  bagpipes: "yxHi57T5mmVt0oDr",
  brewer: "Y9S75go1hLMXUD48",
  calligrapher: "jhjo20QoiD5exf09",
  card: "YwlHI3BVJapz4a3E",
  carpenter: "8NS6MSOdXtUqD7Ib",
  cartographer: "fC0lFK8P4RuhpfaU",
  chess: "23y8FvWKf9YLcnBL",
  cobbler: "hM84pZnpCqKfi8XH",
  cook: "Gflnp29aEv5Lc1ZM",
  dice: "iBuTM09KD9IoM5L8",
  disg: "IBhDAr7WkhWPYLVn",
  drum: "69Dpr25pf4BjkHKb",
  dulcimer: "NtdDkjmpdIMiX7I2",
  flute: "eJOrPcAz9EcquyRQ",
  forg: "cG3m4YlHfbQlLEOx",
  glassblower: "rTbVrNcwApnuTz5E",
  herb: "i89okN7GFTWHsvPy",
  horn: "aa9KuBy4dst7WIW9",
  jeweler: "YfBwELTgPFHmQdHh",
  leatherworker: "PUMfwyVUbtyxgYbD",
  lute: "qBydtUUIkv520DT7",
  lyre: "EwG1EtmbgR3bM68U",
  mason: "skUih6tBvcBbORzA",
  navg: "YHCmjsiXxZ9UdUhU",
  painter: "ccm5xlWhx74d6lsK",
  panflute: "G5m5gYIx9VAUWC3J",
  pois: "il2GNi8C0DvGLL9P",
  potter: "hJS8yEVkqgJjwfWa",
  shawm: "G3cqbejJpfB91VhP",
  smith: "KndVe2insuctjIaj",
  thief: "woWZ1sO5IUVGzo58",
  tinker: "0d08g1i5WXnNrCNA",
  viol: "baoe3U5BfMMMxhCU",
  weaver: "ap9prThUB2y9lDyj",
  woodcarver: "xKErqkLo4ASYr5EP"
};

/* -------------------------------------------- */

/**
 * The various lengths of time over which effects can occur.
 * @enum {string}
 */
EH5E.timePeriods = {
  inst: "EH5E.TimeInst",
  turn: "EH5E.TimeTurn",
  round: "EH5E.TimeRound",
  minute: "EH5E.TimeMinute",
  hour: "EH5E.TimeHour",
  day: "EH5E.TimeDay",
  month: "EH5E.TimeMonth",
  year: "EH5E.TimeYear",
  perm: "EH5E.TimePerm",
  spec: "EH5E.Special"
};
preLocalize("timePeriods");

/* -------------------------------------------- */

/**
 * Various ways in which an item or ability can be activated.
 * @enum {string}
 */
EH5E.abilityActivationTypes = {
  none: "EH5E.None",
  action: "EH5E.Action",
  bonus: "EH5E.BonusAction",
  reaction: "EH5E.Reaction",
  minute: EH5E.timePeriods.minute,
  hour: EH5E.timePeriods.hour,
  day: EH5E.timePeriods.day,
  special: EH5E.timePeriods.spec,
  legendary: "EH5E.LegendaryActionLabel",
  lair: "EH5E.LairActionLabel",
  crew: "EH5E.VehicleCrewAction"
};
preLocalize("abilityActivationTypes", { sort: true });

/* -------------------------------------------- */

/**
 * Different things that an ability can consume upon use.
 * @enum {string}
 */
EH5E.abilityConsumptionTypes = {
  ammo: "EH5E.ConsumeAmmunition",
  attribute: "EH5E.ConsumeAttribute",
  hitDice: "EH5E.ConsumeHitDice",
  material: "EH5E.ConsumeMaterial",
  charges: "EH5E.ConsumeCharges"
};
preLocalize("abilityConsumptionTypes", { sort: true });

/* -------------------------------------------- */

/**
 * Creature sizes.
 * @enum {string}
 */
EH5E.actorSizes = {
  tiny: "EH5E.SizeTiny",
  sm: "EH5E.SizeSmall",
  med: "EH5E.SizeMedium",
  lg: "EH5E.SizeLarge",
  huge: "EH5E.SizeHuge",
  grg: "EH5E.SizeGargantuan"
};
preLocalize("actorSizes");

/**
 * Default token image size for the values of `EH5E.actorSizes`.
 * @enum {number}
 */
EH5E.tokenSizes = {
  tiny: 0.5,
  sm: 1,
  med: 1,
  lg: 2,
  huge: 3,
  grg: 4
};

/**
 * Colors used to visualize temporary and temporary maximum HP in token health bars.
 * @enum {number}
 */
EH5E.tokenHPColors = {
  damage: 0xFF0000,
  healing: 0x00FF00,
  temp: 0x66CCFF,
  tempmax: 0x440066,
  negmax: 0x550000
};

/* -------------------------------------------- */

/**
 * Default types of creatures.
 * *Note: Not pre-localized to allow for easy fetching of pluralized forms.*
 * @enum {string}
 */
EH5E.creatureTypes = {
  aberration: "EH5E.CreatureAberration",
  beast: "EH5E.CreatureBeast",
  celestial: "EH5E.CreatureCelestial",
  construct: "EH5E.CreatureConstruct",
  dragon: "EH5E.CreatureDragon",
  elemental: "EH5E.CreatureElemental",
  fey: "EH5E.CreatureFey",
  fiend: "EH5E.CreatureFiend",
  giant: "EH5E.CreatureGiant",
  humanoid: "EH5E.CreatureHumanoid",
  monstrosity: "EH5E.CreatureMonstrosity",
  ooze: "EH5E.CreatureOoze",
  plant: "EH5E.CreaturePlant",
  undead: "EH5E.CreatureUndead"
};

/* -------------------------------------------- */

/**
 * Classification types for item action types.
 * @enum {string}
 */
EH5E.itemActionTypes = {
  mwak: "EH5E.ActionMWAK",
  rwak: "EH5E.ActionRWAK",
  msak: "EH5E.ActionMSAK",
  rsak: "EH5E.ActionRSAK",
  save: "EH5E.ActionSave",
  heal: "EH5E.ActionHeal",
  abil: "EH5E.ActionAbil",
  util: "EH5E.ActionUtil",
  other: "EH5E.ActionOther"
};
preLocalize("itemActionTypes");

/* -------------------------------------------- */

/**
 * Different ways in which item capacity can be limited.
 * @enum {string}
 */
EH5E.itemCapacityTypes = {
  items: "EH5E.ItemContainerCapacityItems",
  weight: "EH5E.ItemContainerCapacityWeight"
};
preLocalize("itemCapacityTypes", { sort: true });

/* -------------------------------------------- */

/**
 * List of various item rarities.
 * @enum {string}
 */
EH5E.itemRarity = {
  common: "EH5E.ItemRarityCommon",
  uncommon: "EH5E.ItemRarityUncommon",
  rare: "EH5E.ItemRarityRare",
  veryRare: "EH5E.ItemRarityVeryRare",
  legendary: "EH5E.ItemRarityLegendary",
  artifact: "EH5E.ItemRarityArtifact"
};
preLocalize("itemRarity");

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability.
 * @enum {string}
 */
EH5E.limitedUsePeriods = {
  sr: "EH5E.ShortRest",
  lr: "EH5E.LongRest",
  day: "EH5E.Day",
  charges: "EH5E.Charges"
};
preLocalize("limitedUsePeriods");

/* -------------------------------------------- */

/**
 * Specific equipment types that modify base AC.
 * @enum {string}
 */
EH5E.armorTypes = {
  light: "EH5E.EquipmentLight",
  medium: "EH5E.EquipmentMedium",
  heavy: "EH5E.EquipmentHeavy",
  natural: "EH5E.EquipmentNatural",
  shield: "EH5E.EquipmentShield"
};
preLocalize("armorTypes");

/* -------------------------------------------- */

/**
 * Equipment types that aren't armor.
 * @enum {string}
 */
EH5E.miscEquipmentTypes = {
  clothing: "EH5E.EquipmentClothing",
  trinket: "EH5E.EquipmentTrinket",
  vehicle: "EH5E.EquipmentVehicle"
};
preLocalize("miscEquipmentTypes", { sort: true });

/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can be worn by the character.
 * @enum {string}
 */
EH5E.equipmentTypes = {
  ...EH5E.miscEquipmentTypes,
  ...EH5E.armorTypes
};
preLocalize("equipmentTypes", { sort: true });

/* -------------------------------------------- */

/**
 * The various types of vehicles in which characters can be proficient.
 * @enum {string}
 */
EH5E.vehicleTypes = {
  air: "EH5E.VehicleTypeAir",
  land: "EH5E.VehicleTypeLand",
  water: "EH5E.VehicleTypeWater"
};
preLocalize("vehicleTypes", { sort: true });

/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have.
 * @type {object}
 */
EH5E.armorProficiencies = {
  lgt: EH5E.equipmentTypes.light,
  med: EH5E.equipmentTypes.medium,
  hvy: EH5E.equipmentTypes.heavy,
  shl: "EH5E.EquipmentShieldProficiency"
};
preLocalize("armorProficiencies");

/**
 * A mapping between `EH5E.equipmentTypes` and `EH5E.armorProficiencies` that
 * is used to determine if character has proficiency when adding an item.
 * @enum {(boolean|string)}
 */
EH5E.armorProficienciesMap = {
  natural: true,
  clothing: true,
  light: "lgt",
  medium: "med",
  heavy: "hvy",
  shield: "shl"
};

/**
 * The basic armor types in 5e. This enables specific armor proficiencies,
 * automated AC calculation in NPCs, and starting equipment.
 * @enum {string}
 */
EH5E.armorIds = {
  breastplate: "SK2HATQ4abKUlV8i",
  chainmail: "rLMflzmxpe8JGTOA",
  chainshirt: "p2zChy24ZJdVqMSH",
  halfplate: "vsgmACFYINloIdPm",
  hide: "n1V07puo0RQxPGuF",
  leather: "WwdpHLXGX5r8uZu5",
  padded: "GtKV1b5uqFQqpEni",
  plate: "OjkIqlW2UpgFcjZa",
  ringmail: "nsXZejlmgalj4he9",
  scalemail: "XmnlF5fgIO3tg6TG",
  splint: "cKpJmsJmU8YaiuqG",
  studded: "TIV3B1vbrVHIhQAm"
};

/**
 * The basic shield in 5e.
 * @enum {string}
 */
EH5E.shieldIds = {
  shield: "sSs3hSzkKBMNBgTs"
};

/**
 * Common armor class calculations.
 * @enum {{ label: string, [formula]: string }}
 */
EH5E.armorClasses = {
  flat: {
    label: "EH5E.ArmorClassFlat",
    formula: "@attributes.ac.flat"
  },
  natural: {
    label: "EH5E.ArmorClassNatural",
    formula: "@attributes.ac.flat"
  },
  default: {
    label: "EH5E.ArmorClassEquipment",
    formula: "@attributes.ac.armor + @attributes.ac.dex"
  },
  mage: {
    label: "EH5E.ArmorClassMage",
    formula: "13 + @abilities.dex.mod"
  },
  draconic: {
    label: "EH5E.ArmorClassDraconic",
    formula: "13 + @abilities.dex.mod"
  },
  unarmoredMonk: {
    label: "EH5E.ArmorClassUnarmoredMonk",
    formula: "10 + @abilities.dex.mod + @abilities.wis.mod"
  },
  unarmoredBarb: {
    label: "EH5E.ArmorClassUnarmoredBarbarian",
    formula: "10 + @abilities.dex.mod + @abilities.con.mod"
  },
  custom: {
    label: "EH5E.ArmorClassCustom"
  }
};
preLocalize("armorClasses", { key: "label" });

/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system.
 * @enum {string}
 */
EH5E.consumableTypes = {
  ammo: "EH5E.ConsumableAmmunition",
  potion: "EH5E.ConsumablePotion",
  poison: "EH5E.ConsumablePoison",
  food: "EH5E.ConsumableFood",
  scroll: "EH5E.ConsumableScroll",
  wand: "EH5E.ConsumableWand",
  rod: "EH5E.ConsumableRod",
  trinket: "EH5E.ConsumableTrinket"
};
preLocalize("consumableTypes", { sort: true });

/* -------------------------------------------- */

/**
 * The valid currency denominations with localized labels, abbreviations, and conversions.
 * @enum {{
 *   label: string,
 *   abbreviation: string,
 *   [conversion]: {into: string, each: number}
 * }}
 */
EH5E.currencies = {
  pp: {
    label: "EH5E.CurrencyPP",
    abbreviation: "EH5E.CurrencyAbbrPP"
  },
  gp: {
    label: "EH5E.CurrencyGP",
    abbreviation: "EH5E.CurrencyAbbrGP",
    conversion: {into: "pp", each: 10}
  },
  ep: {
    label: "EH5E.CurrencyEP",
    abbreviation: "EH5E.CurrencyAbbrEP",
    conversion: {into: "gp", each: 2}
  },
  sp: {
    label: "EH5E.CurrencySP",
    abbreviation: "EH5E.CurrencyAbbrSP",
    conversion: {into: "ep", each: 5}
  },
  cp: {
    label: "EH5E.CurrencyCP",
    abbreviation: "EH5E.CurrencyAbbrCP",
    conversion: {into: "sp", each: 10}
  }
};
preLocalize("currencies", { keys: ["label", "abbreviation"] });

/* -------------------------------------------- */

/**
 * Types of damage the can be caused by abilities.
 * @enum {string}
 */
EH5E.damageTypes = {
  acid: "EH5E.DamageAcid",
  bludgeoning: "EH5E.DamageBludgeoning",
  ballistic: "EH5E.DamageBallistic",
  fire: "EH5E.DamageFire",
  electrical: "EH5E.DamageElectrical",
  piercing: "EH5E.DamagePiercing",
  poison: "EH5E.DamagePoison",
  slashing: "EH5E.DamageSlashing",
  explosive: "EH5E.DamageExplosive"
};
preLocalize("damageTypes", { sort: true });

/**
 * Types of damage to which an actor can possess resistance, immunity, or vulnerability.
 * @enum {string}
 */
EH5E.damageResistanceTypes = {
  ...EH5E.damageTypes,
  physical: "EH5E.DamagePhysical"
};
preLocalize("damageResistanceTypes", { sort: true });

/* -------------------------------------------- */

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @enum {string}
 */
EH5E.movementTypes = {
  burrow: "EH5E.MovementBurrow",
  climb: "EH5E.MovementClimb",
  fly: "EH5E.MovementFly",
  swim: "EH5E.MovementSwim",
  walk: "EH5E.MovementWalk"
};
preLocalize("movementTypes", { sort: true });

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @enum {string}
 */
EH5E.movementUnits = {
  ft: "EH5E.DistFt",
  mi: "EH5E.DistMi",
  m: "EH5E.DistM",
  km: "EH5E.DistKm"
};
preLocalize("movementUnits");

/**
 * The valid units of measure for the range of an action or effect.
 * This object automatically includes the movement units from `EH5E.movementUnits`.
 * @enum {string}
 */
EH5E.distanceUnits = {
  none: "EH5E.None",
  self: "EH5E.DistSelf",
  touch: "EH5E.DistTouch",
  spec: "EH5E.Special",
  any: "EH5E.DistAny",
  ...EH5E.movementUnits
};
preLocalize("distanceUnits");

/* -------------------------------------------- */

/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules.
 * @enum {{ imperial: number, metric: number }}
 */
EH5E.encumbrance = {
  currencyPerWeight: {
    imperial: 50,
    metric: 110
  },
  strMultiplier: {
    imperial: 15,
    metric: 6.8
  },
  vehicleWeightMultiplier: {
    imperial: 2000, // 2000 lbs in an imperial ton
    metric: 1000 // 1000 kg in a metric ton
  }
};

/* -------------------------------------------- */

/**
 * The types of single or area targets which can be applied to abilities.
 * @enum {string}
 */
EH5E.targetTypes = {
  none: "EH5E.None",
  self: "EH5E.TargetSelf",
  creature: "EH5E.TargetCreature",
  ally: "EH5E.TargetAlly",
  enemy: "EH5E.TargetEnemy",
  object: "EH5E.TargetObject",
  space: "EH5E.TargetSpace",
  radius: "EH5E.TargetRadius",
  sphere: "EH5E.TargetSphere",
  cylinder: "EH5E.TargetCylinder",
  cone: "EH5E.TargetCone",
  square: "EH5E.TargetSquare",
  cube: "EH5E.TargetCube",
  line: "EH5E.TargetLine",
  wall: "EH5E.TargetWall"
};
preLocalize("targetTypes", { sort: true });

/* -------------------------------------------- */

/**
 * Mapping between `EH5E.targetTypes` and `MeasuredTemplate` shape types to define
 * which templates are produced by which area of effect target type.
 * @enum {string}
 */
EH5E.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray"
};

/* -------------------------------------------- */

/**
 * Different types of healing that can be applied using abilities.
 * @enum {string}
 */
EH5E.healingTypes = {
  healing: "EH5E.Healing",
  temphp: "EH5E.HealingTemp"
};
preLocalize("healingTypes");

/* -------------------------------------------- */

/**
 * Denominations of hit dice which can apply to classes.
 * @type {string[]}
 */
EH5E.hitDieTypes = ["d6", "d8", "d10", "d12"];

/* -------------------------------------------- */

/**
 * The set of possible sensory perception types which an Actor may have.
 * @enum {string}
 */
EH5E.senses = {
  blindsight: "EH5E.SenseBlindsight",
  darkvision: "EH5E.SenseDarkvision",
  tremorsense: "EH5E.SenseTremorsense",
  truesight: "EH5E.SenseTruesight"
};
preLocalize("senses", { sort: true });

/* -------------------------------------------- */

/**
 * The set of skill which can be trained.
 * @enum {string}
 */
EH5E.skills = {
  acr: "EH5E.SkillAcr",
  art: "EH5E.SkillArt",
  ath: "EH5E.SkillAth",
  com: "EH5E.SkillCom",
  dec: "EH5E.SkillDec",
  drv: "EH5E.SkillDrv",
  end: "EH5E.SkillEnd",
  ins: "EH5E.SkillIns",
  itm: "EH5E.SkillItm",
  inv: "EH5E.SkillInv",
  mec: "EH5E.SkillMec",
  med: "EH5E.SkillMed",
  nat: "EH5E.SkillNat",
  prc: "EH5E.SkillPrc",
  prf: "EH5E.SkillPrf",
  per: "EH5E.SkillPer",
  sec: "EH5E.SkillSec",
  slt: "EH5E.SkillSlt",
  soc: "EH5E.SkillSoc",
  ste: "EH5E.SkillSte",
  sws: "EH5E.SkillSws",
  sur: "EH5E.SkillSur"
};
preLocalize("skills", { sort: true });

/* -------------------------------------------- */

/**
 * Various different ways a spell can be prepared.
 */
EH5E.spellPreparationModes = {
  prepared: "EH5E.SpellPrepPrepared",
  pact: "EH5E.PactMagic",
  always: "EH5E.SpellPrepAlways",
  atwill: "EH5E.SpellPrepAtWill",
  innate: "EH5E.SpellPrepInnate"
};
preLocalize("spellPreparationModes");

/**
 * Subset of `EH5E.spellPreparationModes` that consume spell slots.
 * @type {boolean[]}
 */
EH5E.spellUpcastModes = ["always", "pact", "prepared"];

/**
 * Ways in which a class can contribute to spellcasting levels.
 * @enum {string}
 */
EH5E.spellProgression = {
  none: "EH5E.SpellNone",
  full: "EH5E.SpellProgFull",
  half: "EH5E.SpellProgHalf",
  third: "EH5E.SpellProgThird",
  pact: "EH5E.SpellProgPact",
  artificer: "EH5E.SpellProgArt"
};
preLocalize("spellProgression");

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed.
 * @enum {string}
 */
EH5E.spellScalingModes = {
  none: "EH5E.SpellNone",
  cantrip: "EH5E.SpellCantrip",
  level: "EH5E.SpellLevel"
};
preLocalize("spellScalingModes", { sort: true });

/* -------------------------------------------- */

/**
 * The set of types which a weapon item can take.
 * @enum {string}
 */
EH5E.weaponTypes = {
  simpleM: "EH5E.WeaponBasicM",
  simpleR: "EH5E.WeaponBasicR",
  advancedM: "EH5E.WeaponAdvancedM",
  advancedR: "EH5E.WeaponAdvancedR",
  militaryM: "EH5E.WeaponMilitaryM",
  militaryR: "EH5E.WeaponMilitaryR",
  natural: "EH5E.WeaponNatural",
  improv: "EH5E.WeaponImprov",
  siege: "EH5E.WeaponSiege"
};
preLocalize("weaponTypes");

/* -------------------------------------------- */

/**
 * The set of weapon property flags which can exist on a weapon.
 * @enum {string}
 */
EH5E.weaponProperties = {
  ada: "EH5E.WeaponPropertiesAda",
  amm: "EH5E.WeaponPropertiesAmm",
  fin: "EH5E.WeaponPropertiesFin",
  fir: "EH5E.WeaponPropertiesFir",
  foc: "EH5E.WeaponPropertiesFoc",
  hvy: "EH5E.WeaponPropertiesHvy",
  lgt: "EH5E.WeaponPropertiesLgt",
  lod: "EH5E.WeaponPropertiesLod",
  mgc: "EH5E.WeaponPropertiesMgc",
  rch: "EH5E.WeaponPropertiesRch",
  rel: "EH5E.WeaponPropertiesRel",
  ret: "EH5E.WeaponPropertiesRet",
  sil: "EH5E.WeaponPropertiesSil",
  spc: "EH5E.WeaponPropertiesSpc",
  thr: "EH5E.WeaponPropertiesThr",
  two: "EH5E.WeaponPropertiesTwo",
  ver: "EH5E.WeaponPropertiesVer"
};
preLocalize("weaponProperties", { sort: true });

/**
 * Types of components that can be required when casting a spell.
 * @enum {object}
 */
EH5E.spellComponents = {
  vocal: {
    label: "EH5E.ComponentVerbal",
    abbr: "EH5E.ComponentVerbalAbbr"
  },
  somatic: {
    label: "EH5E.ComponentSomatic",
    abbr: "EH5E.ComponentSomaticAbbr"
  },
  material: {
    label: "EH5E.ComponentMaterial",
    abbr: "EH5E.ComponentMaterialAbbr"
  }
};
preLocalize("spellComponents", {keys: ["label", "abbr"]});

/**
 * Supplementary rules keywords that inform a spell's use.
 * @enum {object}
 */
EH5E.spellTags = {
  concentration: {
    label: "EH5E.Concentration",
    abbr: "EH5E.ConcentrationAbbr"
  },
  ritual: {
    label: "EH5E.Ritual",
    abbr: "EH5E.RitualAbbr"
  }
};
preLocalize("spellTags", {keys: ["label", "abbr"]});

/**
 * Schools to which a spell can belong.
 * @enum {string}
 */
EH5E.spellSchools = {
  abj: "EH5E.SchoolAbj",
  con: "EH5E.SchoolCon",
  div: "EH5E.SchoolDiv",
  enc: "EH5E.SchoolEnc",
  evo: "EH5E.SchoolEvo",
  ill: "EH5E.SchoolIll",
  nec: "EH5E.SchoolNec",
  trs: "EH5E.SchoolTrs"
};
preLocalize("spellSchools", { sort: true });

/**
 * Valid spell levels.
 * @enum {string}
 */
EH5E.spellLevels = {
  0: "EH5E.SpellLevel0",
  1: "EH5E.SpellLevel1",
  2: "EH5E.SpellLevel2",
  3: "EH5E.SpellLevel3",
  4: "EH5E.SpellLevel4",
  5: "EH5E.SpellLevel5",
  6: "EH5E.SpellLevel6",
  7: "EH5E.SpellLevel7",
  8: "EH5E.SpellLevel8",
  9: "EH5E.SpellLevel9"
};
preLocalize("spellLevels");

/**
 * Spell scroll item ID within the `EH5E.sourcePacks` compendium for each level.
 * @enum {string}
 */
EH5E.spellScrollIds = {
  0: "rQ6sO7HDWzqMhSI3",
  1: "9GSfMg0VOA2b4uFN",
  2: "XdDp6CKh9qEvPTuS",
  3: "hqVKZie7x9w3Kqds",
  4: "DM7hzgL836ZyUFB1",
  5: "wa1VF8TXHmkrrR35",
  6: "tI3rWx4bxefNCexS",
  7: "mtyw4NS1s7j2EJaD",
  8: "aOrinPg7yuDZEuWr",
  9: "O4YbkJkLlnsgUszZ"
};

/**
 * Compendium packs used for localized items.
 * @enum {string}
 */
EH5E.sourcePacks = {
  ITEMS: "eh5e.items"
};

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the spell slot progression for a full spell-caster.
 * @type {number[][]}
 */
EH5E.SPELL_SLOT_TABLE = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

/* -------------------------------------------- */

/**
 * Settings to configure how actors are merged when polymorphing is applied.
 * @enum {string}
 */
EH5E.polymorphSettings = {
  keepPhysical: "EH5E.PolymorphKeepPhysical",
  keepMental: "EH5E.PolymorphKeepMental",
  keepSaves: "EH5E.PolymorphKeepSaves",
  keepSkills: "EH5E.PolymorphKeepSkills",
  mergeSaves: "EH5E.PolymorphMergeSaves",
  mergeSkills: "EH5E.PolymorphMergeSkills",
  keepClass: "EH5E.PolymorphKeepClass",
  keepFeats: "EH5E.PolymorphKeepFeats",
  keepSpells: "EH5E.PolymorphKeepSpells",
  keepItems: "EH5E.PolymorphKeepItems",
  keepBio: "EH5E.PolymorphKeepBio",
  keepVision: "EH5E.PolymorphKeepVision"
};
preLocalize("polymorphSettings", { sort: true });

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels.
 * The key for each level represents its proficiency multiplier.
 * @enum {string}
 */
EH5E.proficiencyLevels = {
  0: "EH5E.NotProficient",
  1: "EH5E.Proficient",
  0.5: "EH5E.HalfProficient",
  2: "EH5E.Expertise"
};
preLocalize("proficiencyLevels");

/* -------------------------------------------- */

/**
 * The amount of cover provided by an object. In cases where multiple pieces
 * of cover are in play, we take the highest value.
 * @enum {string}
 */
EH5E.cover = {
  0: "EH5E.None",
  .5: "EH5E.CoverHalf",
  .75: "EH5E.CoverThreeQuarters",
  1: "EH5E.CoverTotal"
};
preLocalize("cover");

/* -------------------------------------------- */

/**
 * A selection of actor attributes that can be tracked on token resource bars.
 * @type {string[]}
 */
EH5E.trackableAttributes = [
  "attributes.ac.value", "attributes.init.value", "attributes.movement", "attributes.senses", "attributes.spelldc",
  "attributes.spellLevel", "details.cr", "details.spellLevel", "details.xp.value", "skills.*.passive",
  "abilities.*.value"
];

/* -------------------------------------------- */

/**
 * A selection of actor and item attributes that are valid targets for item resource consumption.
 * @type {string[]}
 */
EH5E.consumableResources = [
  "item.quantity", "item.weight", "item.duration.value", "currency", "details.xp.value", "abilities.*.value",
  "attributes.senses", "attributes.movement", "attributes.ac.flat", "item.armor.value", "item.target", "item.range",
  "item.save.dc"
];

/* -------------------------------------------- */

/**
 * Conditions that can effect an actor.
 * @enum {string}
 */
EH5E.conditionTypes = {
  blinded: "EH5E.ConBlinded",
  charmed: "EH5E.ConCharmed",
  deafened: "EH5E.ConDeafened",
  diseased: "EH5E.ConDiseased",
  exhaustion: "EH5E.ConExhaustion",
  frightened: "EH5E.ConFrightened",
  grappled: "EH5E.ConGrappled",
  incapacitated: "EH5E.ConIncapacitated",
  invisible: "EH5E.ConInvisible",
  paralyzed: "EH5E.ConParalyzed",
  petrified: "EH5E.ConPetrified",
  poisoned: "EH5E.ConPoisoned",
  prone: "EH5E.ConProne",
  restrained: "EH5E.ConRestrained",
  stunned: "EH5E.ConStunned",
  unconscious: "EH5E.ConUnconscious"
};
preLocalize("conditionTypes", { sort: true });

/**
 * Languages a character can learn.
 * @enum {string}
 */
EH5E.languages = {
  common: "EH5E.LanguagesCommon",
  aarakocra: "EH5E.LanguagesAarakocra",
  abyssal: "EH5E.LanguagesAbyssal",
  aquan: "EH5E.LanguagesAquan",
  auran: "EH5E.LanguagesAuran",
  celestial: "EH5E.LanguagesCelestial",
  deep: "EH5E.LanguagesDeepSpeech",
  draconic: "EH5E.LanguagesDraconic",
  druidic: "EH5E.LanguagesDruidic",
  dwarvish: "EH5E.LanguagesDwarvish",
  elvish: "EH5E.LanguagesElvish",
  giant: "EH5E.LanguagesGiant",
  gith: "EH5E.LanguagesGith",
  gnomish: "EH5E.LanguagesGnomish",
  goblin: "EH5E.LanguagesGoblin",
  gnoll: "EH5E.LanguagesGnoll",
  halfling: "EH5E.LanguagesHalfling",
  ignan: "EH5E.LanguagesIgnan",
  infernal: "EH5E.LanguagesInfernal",
  orc: "EH5E.LanguagesOrc",
  primordial: "EH5E.LanguagesPrimordial",
  sylvan: "EH5E.LanguagesSylvan",
  terran: "EH5E.LanguagesTerran",
  cant: "EH5E.LanguagesThievesCant",
  undercommon: "EH5E.LanguagesUndercommon"
};
preLocalize("languages", { sort: true });

/**
 * Maximum allowed character level.
 * @type {number}
 */
EH5E.maxLevel = 20;

/**
 * XP required to achieve each character level.
 * @type {number[]}
 */
EH5E.CHARACTER_EXP_LEVELS = [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000
];

/**
 * XP granted for each challenge rating.
 * @type {number[]}
 */
EH5E.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

/**
 * Character features automatically granted by classes & subclasses at certain levels.
 * @type {object}
 * @deprecated since 1.6.0, targeted for removal in 1.8
 */
EH5E.classFeatures = ClassFeatures;

/**
 * Special character flags.
 * @enum {{
 *   name: string,
 *   hint: string,
 *   [abilities]: string[],
 *   [choices]: object<string, string>,
 *   [skills]: string[],
 *   section: string,
 *   type: any,
 *   placeholder: any
 * }}
 */
EH5E.characterFlags = {
  diamondSoul: {
    name: "EH5E.FlagsDiamondSoul",
    hint: "EH5E.FlagsDiamondSoulHint",
    section: "EH5E.Feats",
    type: Boolean
  },
  elvenAccuracy: {
    name: "EH5E.FlagsElvenAccuracy",
    hint: "EH5E.FlagsElvenAccuracyHint",
    section: "EH5E.RacialTraits",
    type: Boolean
  },
  halflingLucky: {
    name: "EH5E.FlagsHalflingLucky",
    hint: "EH5E.FlagsHalflingLuckyHint",
    section: "EH5E.RacialTraits",
    type: Boolean
  },
  initiativeAdv: {
    name: "EH5E.FlagsInitiativeAdv",
    hint: "EH5E.FlagsInitiativeAdvHint",
    section: "EH5E.Feats",
    type: Boolean
  },
  initiativeAlert: {
    name: "EH5E.FlagsAlert",
    hint: "EH5E.FlagsAlertHint",
    section: "EH5E.Feats",
    type: Boolean
  },
  jackOfAllTrades: {
    name: "EH5E.FlagsJOAT",
    hint: "EH5E.FlagsJOATHint",
    section: "EH5E.Feats",
    type: Boolean
  },
  observantFeat: {
    name: "EH5E.FlagsObservant",
    hint: "EH5E.FlagsObservantHint",
    skills: ["prc", "inv"],
    section: "EH5E.Feats",
    type: Boolean
  },
  powerfulBuild: {
    name: "EH5E.FlagsPowerfulBuild",
    hint: "EH5E.FlagsPowerfulBuildHint",
    section: "EH5E.RacialTraits",
    type: Boolean
  },
  reliableTalent: {
    name: "EH5E.FlagsReliableTalent",
    hint: "EH5E.FlagsReliableTalentHint",
    section: "EH5E.Feats",
    type: Boolean
  },
  remarkableAthlete: {
    name: "EH5E.FlagsRemarkableAthlete",
    hint: "EH5E.FlagsRemarkableAthleteHint",
    abilities: ["str", "dex", "con"],
    section: "EH5E.Feats",
    type: Boolean
  },
  weaponCriticalThreshold: {
    name: "EH5E.FlagsWeaponCritThreshold",
    hint: "EH5E.FlagsWeaponCritThresholdHint",
    section: "EH5E.Feats",
    type: Number,
    placeholder: 20
  },
  spellCriticalThreshold: {
    name: "EH5E.FlagsSpellCritThreshold",
    hint: "EH5E.FlagsSpellCritThresholdHint",
    section: "EH5E.Feats",
    type: Number,
    placeholder: 20
  },
  meleeCriticalDamageDice: {
    name: "EH5E.FlagsMeleeCriticalDice",
    hint: "EH5E.FlagsMeleeCriticalDiceHint",
    section: "EH5E.Feats",
    type: Number,
    placeholder: 0
  }
};
preLocalize("characterFlags", { keys: ["name", "hint", "section"] });

/**
 * Flags allowed on actors. Any flags not in the list may be deleted during a migration.
 * @type {string[]}
 */
EH5E.allowedActorFlags = ["isPolymorphed", "originalActor"].concat(Object.keys(EH5E.characterFlags));
