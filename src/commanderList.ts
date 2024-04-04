const allCommanders: string[] = [
  "Kraum, Ludevic's Opus / Tymna the Weaver",
  "Kinnan, Bonder Prodigy",
  "Najeela, the Blade-Blossom",
  "Tivit, Seller of Secrets",
  "Sisay, Weatherlight Captain",
  "Rograkh, Son of Rohgahh / Silas Renn, Seeker Adept",
  "Atraxa, Grand Unifier",
  "Kenrith, the Returned King",
  "Bruse Tarl, Boorish Herder / Thrasios, Triton Hero",
  "Kraum, Ludevic's Opus / Tevesh Szat, Doom of Fools",
  "Dargo, the Shipwrecker / Thrasios, Triton Hero",
  "Yuriko, the Tiger's Shadow",
  "Tayam, Luminous Enigma",
  "Malcolm, Keen-Eyed Navigator / Tymna the Weaver",
  "Malcolm, Keen-Eyed Navigator / Tana, the Bloodsower",
  "Rocco, Cabaretti Caterer",
  "Niv-Mizzet, Parun",
  "Tana, the Bloodsower / Tymna the Weaver",
  "Dihada, Binder of Wills",
  "Ob Nixilis, Captive Kingpin",
  "Thrasios, Triton Hero / Tymna the Weaver",
  "Talion, the Kindly Lord",
  "Jeska, Thrice Reborn / Tymna the Weaver",
  "Magda, Brazen Outlaw",
  "Korvold, Fae-Cursed King",
  "Inalla, Archmage Ritualist",
  "Rograkh, Son of Rohgahh / Thrasios, Triton Hero",
  "Thrasios, Triton Hero / Vial Smasher the Fierce",
  "Krark, the Thumbless / Sakashima of a Thousand Faces",
  "Jhoira, Weatherlight Captain",
  "K'rrik, Son of Yawgmoth",
  "Ikra Shidiqi, the Usurper / Kraum, Ludevic's Opus",
  "Shorikai, Genesis Engine",
  "Malcolm, Keen-Eyed Navigator / Vial Smasher the Fierce",
  "Winota, Joiner of Forces",
  "Bjorna, Nightfall Alchemist / Wernog, Rider's Chaplain",
  "Varragoth, Bloodsky Sire",
  "Rograkh, Son of Rohgahh / Tevesh Szat, Doom of Fools",
  "Breya, Etherium Shaper",
  "Animar, Soul of Elements",
  "Liberator, Urza's Battlethopter",
  "Elsha of the Infinite",
  "Kediss, Emberclaw Familiar / Malcolm, Keen-Eyed Navigator",
  "Slicer, Hired Muscle / Slicer, High-Speed Antagonist",
  "Tevesh Szat, Doom of Fools / Thrasios, Triton Hero",
  "Halana, Kessig Ranger / Tymna the Weaver",
  "Urza, Lord High Artificer",
  "Dargo, the Shipwrecker / Tymna the Weaver",
  "Akiri, Line-Slinger / Thrasios, Triton Hero",
  "Esika, God of the Tree / The Prismatic Bridge",
  "Shalai and Hallar",
  "Jenson Carthalion, Druid Exile",
  "Heliod, the Radiant Dawn / Heliod, the Warped Eclipse",
  "Yeva, Nature's Herald",
  "Haldan, Avid Arcanist / Pako, Arcane Retriever",
  "Zur the Enchanter",
  "Kaalia of the Vast",
  "Narset, Enlightened Exile",
  "Florian, Voldaren Scion",
  "Tasigur, the Golden Fang",
  "Saffi Eriksdotter",
  "The Gitrog Monster",
  "Thada Adel, Acquisitor",
  "Thrasios, Triton Hero / Yoshimaru, Ever Faithful",
  "Teferi, Temporal Archmage",
  "Kess, Dissident Mage",
  "Cormela, Glamour Thief",
  "Kodama of the East Tree / Sakashima of a Thousand Faces",
  "Ghyrson Starn, Kelermorph",
  "Godo, Bandit Warlord",
  "Heliod, Sun-Crowned",
  "Marneus Calgar",
  "Derevi, Empyrial Tactician",
  "Krark, the Thumbless / Thrasios, Triton Hero",
  "Kodama of the East Tree / Tymna the Weaver",
  "Oskar, Rubbish Reclaimer",
  "Jeska, Thrice Reborn / Thrasios, Triton Hero",
  "Krark, the Thumbless / Silas Renn, Seeker Adept",
  "Aesi, Tyrant of Gyre Strait",
  "Daretti, Scrap Savant",
  "Ellivere of the Wild Court",
  "Narset, Enlightened Master",
  "Azami, Lady of Scrolls",
  "Captain Sisay",
  "Armix, Filigree Thrasher / Kraum, Ludevic's Opus",
  "Dargo, the Shipwrecker / Ikra Shidiqi, the Usurper",
  "Toxrill, the Corrosive",
  "Kodama of the East Tree / Tevesh Szat, Doom of Fools",
  "Marath, Will of the Wild",
  "Kroxa, Titan of Death's Hunger",
  "Tatyova, Benthic Druid",
  "Rashmi, Eternities Crafter",
  "Nymris, Oona's Trickster",
  "Solphim, Mayhem Dominus",
  "Kraum, Ludevic's Opus / Reyhan, Last of the Abzan",
  "Minsc, Beloved Ranger",
  "Cazur, Ruthless Stalker / Ukkima, Stalking Shadow",
  "Rograkh, Son of Rohgahh / Tymna the Weaver",
  "Prosper, Tome-Bound",
  "Yisan, the Wanderer Bard",
  "Raffine, Scheming Seer",
  "Rionya, Fire Dancer",
  "Ishai, Ojutai Dragonspeaker / Jeska, Thrice Reborn",
  "Cecily, Haunted Mage / Sophina, Spearsage Deserter",
  "Vadrik, Astral Archmage",
  "Jetmir, Nexus of Revels",
  "Malcolm, Keen-Eyed Navigator / Rograkh, Son of Rohgahh",
  "Sythis, Harvest's Hand",
  "Akiri, Line-Slinger",
  "Rielle, the Everwise",
  "Edric, Spymaster of Trest",
  "Codie, Vociferous Codex",
  "Braids, Arisen Nightmare",
  "Abaddon the Despoiler",
  "Sefris of the Hidden Ways",
  "The First Sliver",
  "Zirda, the Dawnwaker",
  "Jhoira, Ageless Innovator",
  "Etali, Primal Conqueror / Etali, Primal Sickness",
  "Gyruda, Doom of Depths",
  "Kraum, Ludevic's Opus / Thrasios, Triton Hero",
  "Nezahal, Primal Tide",
  "Dina, Soul Steeper",
  "Hurkyl, Master Wizard",
  "Erinis, Gloom Stalker / Street Urchin",
  "Scion of the Ur-Dragon",
  "Moira and Teshar",
  "Sauron, the Dark Lord",
  "Nissa, Resurgent Animist",
  "Zhulodok, Void Gorger",
  "Grand Arbiter Augustin IV",
  "Prossh, Skyraider of Kher",
  "Anhelo, the Painter",
  "Arcum Dagsson",
  "Emry, Lurker of the Loch",
  "Francisco, Fowl Marauder / Thrasios, Triton Hero",
  "Ishai, Ojutai Dragonspeaker / Kediss, Emberclaw Familiar",
  "Miara, Thorn of the Glade / Thrasios, Triton Hero",
  "Kodama of the East Tree / Kraum, Ludevic's Opus",
  "Elmar, Ulvenwald Informant / Wernog, Rider's Chaplain",
  "Atla Palani, Nest Tender",
  "Go-Shintai of Life's Origin",
  "Miirym, Sentinel Wyrm",
  "Baral, Chief of Compliance",
  "Sidar Kondo of Jamuraa / Tymna the Weaver",
  "Jan Jansen, Chaos Crafter",
  "Greymond, Avacyn's Stalwart",
  "Jeska, Thrice Reborn / Kraum, Ludevic's Opus",
  "The Locust God",
  "Momir Vig, Simic Visionary",
  "Xyris, the Writhing Storm",
  "Sheoldred, the Apocalypse",
  "Ardenn, Intrepid Archaeologist / Kraum, Ludevic's Opus",
  "Falthis, Shadowcat Familiar / Jeska, Thrice Reborn",
  "Brallin, Skyshark Rider / Shabraz, the Skyshark",
  "Eruth, Tormented Prophet",
  "Evelyn, the Covetous",
  "Selvala, Heart of the Wilds",
  "Teysa, Orzhov Scion",
  "Blex, Vexing Pest / Search for Blex",
  "Tiamat",
  "Halana, Kessig Ranger / Tevesh Szat, Doom of Fools",
  "Ashaya, Soul of the Wild",
  "Jorn, God of Winter / Kaldring, the Rimestaff",
  "Magus Lucea Kane",
  "Marwyn, the Nurturer",
  "Oswald Fiddlebender",
  "Anje Falkenrath",
  "Vega, the Watcher",
  "Myrel, Shield of Argive",
  "Ardenn, Intrepid Archaeologist / Ishai, Ojutai Dragonspeaker",
  "Noble Heritage / Vhal, Candlekeep Researcher",
  "Breeches, Brazen Plunderer / Malcolm, Keen-Eyed Navigator",
  "Rigo, Streetwise Mentor",
  "Lord Windgrace",
  "Orvar, the All-Form",
  "Satoru Umezawa",
  "Ikra Shidiqi, the Usurper / Tymna the Weaver",
  "Toluz, Clever Conductor",
  "Hapatra, Vizier of Poisons",
  "Loran of the Third Path",
  "Yennett, Cryptic Sovereign",
  "Ivy, Gleeful Spellthief",
  "Minsc & Boo, Timeless Heroes",
  "Old Stickfingers",
  "Koll, the Forgemaster",
  "Urza, Lord Protector",
  "Ramirez DePietro, Pillager",
  "Thalia and The Gitrog Monster",
  "Neera, Wild Mage",
  "Kykar, Wind's Fury",
  "Birgi, God of Storytelling / Harnfel, Horn of Bounty",
  "Rakdos, Lord of Riots",
  "Tadeas, Juniper Ascendant",
  "Sakashima of a Thousand Faces / Tevesh Szat, Doom of Fools",
  "Jaxis, the Troublemaker",
  "Ishai, Ojutai Dragonspeaker / Tevesh Szat, Doom of Fools",
  "Garth One-Eye",
  "Vishgraz, the Doomhive",
  "Yidris, Maelstrom Wielder",
  "Siona, Captain of the Pyleas",
  "Tana, the Bloodsower / Tevesh Szat, Doom of Fools",
  "Mishra, Eminent",
];

const topFiftyCommanders: string[] = [
  "Kraum, Ludevic's Opus / Tymna the Weaver",
  "Kinnan, Bonder Prodigy",
  "Najeela, the Blade-Blossom",
  "Tivit, Seller of Secrets",
  "Sisay, Weatherlight Captain",
  "Rograkh, Son of Rohgahh / Silas Renn, Seeker Adept",
  "Atraxa, Grand Unifier",
  "Kenrith, the Returned King",
  "Bruse Tarl, Boorish Herder / Thrasios, Triton Hero",
  "Kraum, Ludevic's Opus / Tevesh Szat, Doom of Fools",
  "Dargo, the Shipwrecker / Thrasios, Triton Hero",
  "Yuriko, the Tiger's Shadow",
  "Tayam, Luminous Enigma",
  "Malcolm, Keen-Eyed Navigator / Tymna the Weaver",
  "Malcolm, Keen-Eyed Navigator / Tana, the Bloodsower",
  "Rocco, Cabaretti Caterer",
  "Niv-Mizzet, Parun",
  "Tana, the Bloodsower / Tymna the Weaver",
  "Dihada, Binder of Wills",
  "Ob Nixilis, Captive Kingpin",
  "Thrasios, Triton Hero / Tymna the Weaver",
  "Talion, the Kindly Lord",
  "Jeska, Thrice Reborn / Tymna the Weaver",
  "Magda, Brazen Outlaw",
  "Korvold, Fae-Cursed King",
  "Inalla, Archmage Ritualist",
  "Rograkh, Son of Rohgahh / Thrasios, Triton Hero",
  "Thrasios, Triton Hero / Vial Smasher the Fierce",
  "Krark, the Thumbless / Sakashima of a Thousand Faces",
  "Jhoira, Weatherlight Captain",
  "K'rrik, Son of Yawgmoth",
  "Ikra Shidiqi, the Usurper / Kraum, Ludevic's Opus",
  "Shorikai, Genesis Engine",
  "Malcolm, Keen-Eyed Navigator / Vial Smasher the Fierce",
  "Winota, Joiner of Forces",
  "Bjorna, Nightfall Alchemist / Wernog, Rider's Chaplain",
  "Varragoth, Bloodsky Sire",
  "Rograkh, Son of Rohgahh / Tevesh Szat, Doom of Fools",
  "Breya, Etherium Shaper",
  "Animar, Soul of Elements",
  "Liberator, Urza's Battlethopter",
  "Elsha of the Infinite",
  "Kediss, Emberclaw Familiar / Malcolm, Keen-Eyed Navigator",
  "Slicer, Hired Muscle / Slicer, High-Speed Antagonist",
  "Tevesh Szat, Doom of Fools / Thrasios, Triton Hero",
  "Halana, Kessig Ranger / Tymna the Weaver",
  "Urza, Lord High Artificer",
  "Dargo, the Shipwrecker / Tymna the Weaver",
  "Akiri, Line-Slinger / Thrasios, Triton Hero",
  "Esika, God of the Tree / The Prismatic Bridge",
  "Shalai and Hallar",
];

const defaultDecklist = [
  "An Offer You Can't Refuse",
  "Ancient Tomb",
  "Arcane Signet",
  "Barkchannel Pathway",
  "Basalt Monolith",
  "Birds of Paradise",
  "Bloom Tender",
  "Boseiju, Who Endures",
  "Breeding Pool",
  "Cephalid Coliseum",
  "Chord of Calling",
  "Chrome Mox",
  "City of Brass",
  "Colossal Skyturtle",
  "Command Tower",
  "Consecrated Sphinx",
  "Cyclonic Rift",
  "Delay",
  "Delighted Halfling",
  "Dosan the Falling Leaf",
  "Elvish Mystic",
  "Endurance",
  "Fellwar Stone",
  "Fierce Guardianship",
  "Finale of Devastation",
  "Flesh Duplicate",
  "Flooded Strand",
  "Flusterstorm",
  "Force of Negation",
  "Force of Vigor",
  "Force of Will",
  "Forest",
  "Fyndhorn Elves",
  "Gaea's Cradle",
  "Gemstone Caverns",
  "Gilded Drake",
  "Glen Elendra Archmage",
  "Green Sun's Zenith",
  "Grim Monolith",
  "Hullbreaker Horror",
  "Invasion of Ikoria",
  "Island",
  "Jin-Gitaxias, Core Augur",
  "Llanowar Elves",
  "Lotus Petal",
  "Mana Confluence",
  "Mana Crypt",
  "Mana Drain",
  "Mana Vault",
  "Manglehorn",
  "Mental Misstep",
  "Minamo, School at Water's Edge",
  "Mindbreak Trap",
  "Mirage Mirror",
  "Miscast",
  "Misty Rainforest",
  "Moonsilver Key",
  "Mox Amber",
  "Mox Diamond",
  "Mox Opal",
  "Mystic Remora",
  "Nezahal, Primal Tide",
  "Nyxbloom Ancient",
  "Otawara, Soaring City",
  "Pact of Negation",
  "Phyrexian Metamorph",
  "Polluted Delta",
  "Rejuvenating Springs",
  "Resculpt",
  "Rhystic Study",
  "Scalding Tarn",
  "Sea Gate Restoration",
  "Seedborn Muse",
  "Simic Signet",
  "Sol Ring",
  "Spell Snare",
  "Spellskite",
  "Springleaf Drum",
  "Swan Song",
  "Sylvan Library",
  "Talisman of Curiosity",
  "Tezzeret the Seeker",
  "The One Ring",
  "Thorn Mammoth",
  "Thrasios, Triton Hero",
  "Tidespout Tyrant",
  "Transmute Artifact",
  "Treasure Vault",
  "Trinisphere",
  "Trophy Mage",
  "Tropical Island",
  "Turntimber Symbiosis",
  "Void Winnower",
  "Wandering Archaic",
  "Waterlogged Grove",
  "Windswept Heath",
  "Wooded Foothills",
  "Worldly Tutor",
  "Yavimaya Coast",
];

export { allCommanders, topFiftyCommanders, defaultDecklist };
