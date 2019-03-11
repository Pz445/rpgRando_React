let character = {
  playbook: '',
  name: '',
  wizardName: null,
  gender: '',
  appearance: [],
  traits: [],
  abilityScores: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
    luck: 0
  },
  abilityMods: {
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
    lck: 0
  },
  hitDie: '',
  hitPoints: 0,
  heritage: '',
  alignment: '',
  alignmentText: '',
  gear: [],
}


(function rollCharacter() {
  character.playbook = getPlaybook();
  character.heritage = getHeritage(character.playbook);
  character.gender = getGender();
  character.name = getName(character.heritage, character.gender);
  if (character.playbook === "Magic-User") {
    character.wizardName = getWizardName();
  } else {
    character.wizardName = null;
  }
  character.appearance = rollAppearance(character.playbook);
  character.alignment = rollAlignment(character.playbook);
  alignmentText(character.alignment);
  character.traits = getTraits(character.alignment);
  character.abilityScores.strength = rando.diceRoller(3, 6);
  character.abilityScores.dexterity = rando.diceRoller(3, 6);
  character.abilityScores.constitution = rando.diceRoller(3, 6);
  character.abilityScores.intelligence = rando.diceRoller(3, 6);
  character.abilityScores.wisdom = rando.diceRoller(3, 6);
  character.abilityScores.charisma = rando.diceRoller(3, 6);
  character.abilityScores.luck = rando.diceRoller(3, 6);
  character.abilityMods.str = determineAbilityMod(character.abilityScores.strength);
  character.abilityMods.dex = determineAbilityMod(character.abilityScores.dexterity);
  character.abilityMods.con = determineAbilityMod(character.abilityScores.constitution);
  character.abilityMods.int = determineAbilityMod(character.abilityScores.intelligence);
  character.abilityMods.wis = determineAbilityMod(character.abilityScores.wisdom);
  character.abilityMods.cha = determineAbilityMod(character.abilityScores.charisma);
  character.abilityMods.lck = determineAbilityMod(character.abilityScores.luck);
  rollHP(character.playbook);
  rollGear(character.playbook);
  console.log(character)
})();

function getPlaybook() {
  let num = rando.diceRoller(1, 12);
  return (num <= 6 ? "Fighter" : num <= 9 ? "Thief" : num <= 11 ? "Cleric" : "Magic-User")
}

function getHeritage(playbook) {
  let num = rando.diceRoller(1, 12);
  if (playbook === "Fighter") {
    return (num <= 7 ? "Human" : num === 8 ? "Halfling" : num <= 11 ? "Dwarf" : "Elf");
  } else if (playbook === "Cleric") {
    return (num <= 7 ? "Human" : num === 8 ? "Halfling" : num <= 11 ? "Dwarf" : "Elf");
  } else if (playbook === "Thief") {
    return (num <= 7 ? "Human" : num <= 10 ? "Halfling" : num === 11 ? "Dwarf" : "Elf");
  } else {
    return (num <= 8 ? "Human" : num === 9 ? "Halfling" : num === 10 ? "Dwarf" : "Elf");
  }
}

function determineAbilityMod(abilityScore) {
  if (abilityScore <= 3) {
    return -3;
  }
  else if (abilityScore <=5) {
    return -2;
  }
  else if (abilityScore <= 8) {
    return -1;
  }
  else if (abilityScore <= 12) {
    return 0;
  }
  else if (abilityScore <= 15) {
    return 1;
  }
  else if (abilityScore <= 17) {
    return 2;
  }
  else {
    return 3;
  }
}

function rollHP(playbook) {
  var HP = 0;
  var modCon = character.abilityMods.con;
  if (playbook === "Cleric") {
    character.hitDie = "d8";
    character.hitPoints = rando.diceRoller(1, 8) + modCon;
  } else if (playbook === "Fighter") {
    character.hitDie = "d10";
    character.hitPoints = rando.diceRoller(1, 10) + modCon;
  } else if (playbook === "Thief") {
    character.hitDie = "d6";
    character.hitPoints = rando.diceRoller(1, 6) + modCon;
  } else if (playbook === "Magic-User") {
    character.hitDie = "d4";
    character.hitPoints = rando.diceRoller(1, 4) + modCon;
  }
  if (character.hitPoints < 1) {
    character.hitPoints = 1;
  }
}

function getGender() {
  let num = Math.random();
  return (num < .5 ? "Male" : "Female");
}

function getName(heritage, gender) {
  if (gender === "Female") {
    if (heritage === "Human") {
      return rando.randoArray(femaleHumanNames);
    } else if (heritage === "Halfling") {
      return rando.randoArray(femaleHalflingNames);
    } else if (heritage === "Dwarf") {
      return rando.randoArray(femaleDwarfNames);
    } else {
      return rando.randoArray(femaleElfNames);
    }
  } else {
      if (heritage === "Human") {
      return rando.randoArray(maleHumanNames);
    } else if (heritage === "Halfling") {
      return rando.randoArray(maleHalflingNames);
    } else if (heritage === "Dwarf") {
      return rando.randoArray(maleDwarfNames);
    } else {
      return rando.randoArray(maleElfNames);
    }
  }
}

function getWizardName() {
  return rando.randoArray(wizName1) + rando.randoArray(wizName2);
}

function rollAlignment(playbook) {
  character.alignment = '';
  var roll = rando.diceRoller(1, 12);
  if (playbook === "Thief") {
    if (roll <= 2) {
      return "Evil";
    }
    else if (roll <= 6) {
      return "Chaotic";
    }
    else if (roll <= 10) {
      return "Neutral";
    }
    else {
      return "Good";
    }
  }
  if (playbook === "Magic-User") {
    if (roll <= 3) {
      return "Evil";
    }
    else if (roll <= 8) {
      return "Chaotic";
    }
    else {
      return "Good";
    }
  }
  if (playbook === "Fighter") {
    if (roll <= 2) {
      return "Evil";
    }
    else if (roll <= 4) {
      return "Chaotic";
    }
    else if (roll <= 8) {
      return "Neutral";
    }
    else if (roll <= 10) {
      return "Lawful"
    }
    else {
      return "Good";
    }
  }
  if (playbook === "Cleric") {
    if (roll <= 3) {
      return "Evil";
    }
    else if (roll <= 5) {
      return "Chaotic";
    }
    else if (roll <= 7) {
      return "Neutral";
    }
    else if (roll <= 9) {
      return "Lawful"
    }
    else {
      return "Good";
    }
  }
}

function alignmentText(alignment) {
  switch (alignment) {
    case "Evil":
      character.alignmentText = "Inflict physical or emotional harm on others for personal gain";
      break;
    case "Chaotic":
      character.alignmentText = "Sow dischord, or destroy a symbol of order";
      break;
    case "Neutral":
      character.alignmentText = "Refuse to take a side when given the opportunity";
      break;
    case "Lawful":
      character.alignmentText = "Maintain order in the face of forces that would undo it";
      break;
    case "Good":
      character.alignmentText = "Help those in need at your own expense";
      break;
    default:
      console.log("error in function");
      break;
  }
}

function getTraits(alignment) {
  let traits = [];
  if (alignment === "Evil") {
    for (let i = 1; i <= 3; i++) {
      traits.push(getVice());
    }
  } else if (alignment === "Chaotic") {
    traits.push(getVirtue());
    for (let i = 1; i <= 2; i++) {
      traits.push(getVice());
    }
  } else if (alignment === "Neutral") {
      traits.push(getVirtue());
      traits.push(getVice());
  } else if (alignment === "Law") {
      traits.push(getVice());
      for (let i = 1; i <= 2; i++) {
        traits.push(getVirtue());
      }
  } else {
      for (let i = 1; i <=3; i++) {
        traits.push(getVirtue());
      }
  }

  if (checkForDuplicates(traits)) {
    getTraits(alignment);
  } else {
    return traits;
  }
}

function getVirtue() {
  return rando.randoArray(virtueList);
}

function getVice() {
  return rando.randoArray(viceList);
}

function rollAppearance(playbook) {
  if (playbook === "Fighter") {
    character.appearance = rollFighterAppearance();
  }
  if (playbook === "Thief") {
    character.appearance = rollThiefAppearance();
  }
  if (playbook === "Cleric") {
    character.appearance = rollClericAppearance();
  }
  if (playbook === "Magic-User") {
    character.appearance = rollMagicUserAppearance();
  }
}

function rollFighterAppearance () {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(randomFighterAppearance());
  }
  while (arr[0] === arr[1] || arr[1] === arr[2] || arr[0] === arr[2]) {
    arr[0] = randomFighterAppearance();
    arr[2] = randomFighterAppearance();
  }
  return arr;
}

function randomFighterAppearance () {
  var dHundred = rando.diceRoller(1, 100);
  switch (dHundred) {
    case 1:
    case 2:
      return "Big Feet";
      break;
    case 3:
    case 4:
      return "Big Mouth";
      break;
    case 5:
    case 6:
      return "Big Mustache";
      break;
    case 7:
    case 8:
      return "Notable Nose";
      break;
    case 9:
    case 10:
      return "Braided Hair";
      break;
    case 11:
    case 12:
      return "Chiseled";
      break;
    case 13:
    case 14:
      return "Clear-eyed";
      break;
    case 15:
    case 16:
      return "Cleft Chin";
      break;
    case 17:
    case 18:
      return "Broken Nose";
      break;
    case 19:
    case 20:
      return "Crooked Teeth";
      break;
    case 21:
    case 22:
      return "Curly Hair";
      break;
    case 23:
    case 24:
      return "Dark Skin";
      break;
    case 25:
    case 26:
      return "Deep Voice";
      break;
    case 27:
    case 28:
      return "Dirty";
      break;
    case 29:
    case 30:
      return "Earrings";
      break;
    case 31:
    case 32:
      return "Gap Teeth";
      break;
    case 33:
    case 34:
      return "Goatee";
      break;
    case 35:
    case 36:
      return "Headband";
      break;
    case 37:
    case 38:
      return "High Cheekbones";
      break;
    case 39:
    case 40:
      return "Hirsute";
      break;
    case 41:
    case 42:
      return "Lantern Jaw";
      break;
    case 43:
    case 44:
      return "Large Ears";
      break;
    case 45:
    case 46:
      return "Large Hands";
      break;
    case 47:
    case 48:
      return "Large Head";
      break;
    case 49:
    case 50:
      return "Long-legged";
      break;
    case 51:
    case 52:
      return "Matted Hair";
      break;
    case 53:
    case 54:
      return "Missing Eye";
      break;
    case 55:
    case 56:
      return "Missing Ear";
      break;
    case 57:
    case 58:
      return "Missing Finger";
      break;
    case 59:
    case 60:
      return "Missing Teeth";
      break;
    case 61:
    case 62:
      return "Notable Boots";
      break;
    case 63:
    case 64:
      return "Notable Helmet";
      break;
    case 65:
    case 66:
      return "Perfect Posture";
      break;
    case 67:
    case 68:
      return "Pockmarked";
      break;
    case 69:
    case 70:
      return "Raspy Voice";
      break;
    case 71:
    case 72:
      return "Rosy Cheeks";
      break;
    case 73:
    case 74:
      return "Sandals";
      break;
    case 75:
    case 76:
      return "Scarred";
      break;
    case 77:
    case 78:
      return "Tattoos";
      break;;
    case 79:
    case 80:
      return "Shaved Head";
      break;
    case 81:
    case 82:
      return "Smelly";
      break;
    case 83:
    case 84:
      return "Smiling";
      break;
    case 85:
    case 86:
      return "Squint";
      break;
    case 87:
    case 88:
      return "Steely Gaze";
      break;
    case 89:
    case 90:
      return "Stubble";
      break;
    case 91:
    case 92:
      return "Tattoos";
      break;
    case 93:
    case 94:
      return "Unsmiling";
      break;
    case 95:
    case 96:
      return "Well-scrubbed";
      break;
    case 97:
    case 98:
      return "Youthful";
      break;
    case 99:
    case 100:
      randomThiefAppearance();
      break;

  }
}

function rollThiefAppearance () {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(randomThiefAppearance());
  }
  while (arr[0] === arr[1] || arr[1] === arr[2] || arr[0] === arr[2]) {
    arr[0] = randomThiefAppearance();
    arr[2] = randomThiefAppearance();
  }
  return arr;
}

function randomThiefAppearance () {
  var dHundred = rando.diceRoller(1, 100);
  switch (dHundred) {
    case 1:
    case 2:
      return "Broken Nose";
      break;
    case 3:
    case 4:
      return "Chin Whiskers";
      break;
    case 5:
    case 6:
      return "Clean-shaven";
      break;
    case 7:
    case 8:
      return "Clear-eyed";
      break;
    case 9:
    case 10:
      return "Crooked Teeth";
      break;
    case 11:
    case 12:
      return "Curly Hair";
      break;
    case 13:
    case 14:
      return "Dark Skin";
      break;
    case 15:
    case 16:
      return "Deep Voice";
      break;
    case 17:
    case 18:
      return "Disfigured";
      break;
    case 19:
    case 20:
      return "Disheveled";
      break;
    case 21:
    case 22:
      return "Gap Teeth";
      break;
    case 23:
    case 24:
      return "Gaunt";
      break;
    case 25:
    case 26:
      return "Goatee";
      break;
    case 27:
    case 28:
      return "Hirsute";
      break;
    case 29:
    case 30:
      return "Hooded";
      break;
    case 31:
    case 32:
      return "Limp";
      break;
    case 33:
    case 34:
      return "Little Mouth";
      break;
    case 35:
    case 36:
      return "Long Fingers";
      break;
    case 37:
    case 38:
      return "Matted Hair";
      break;
    case 39:
    case 40:
      return "Missing Eye";
      break;
    case 41:
    case 42:
      return "Missing Finger";
      break;
    case 43:
    case 44:
      return "Missing Teeth";
      break;
    case 45:
    case 46:
      return "Narrowed Eyes";
      break;
    case 47:
    case 48:
      return "Notable Footwear";
      break;
    case 49:
    case 50:
      return "Notable Gloves";
      break;
    case 51:
    case 52:
      return "Notable Cap or Hat";
      break;
    case 53:
    case 54:
      return "Notable Nose";
      break;
    case 55:
    case 56:
      return "Overbite";
      break;
    case 57:
    case 58:
      return "Pale Skin";
      break;
    case 59:
    case 60:
      return "Pencil-thin Mustache";
      break;
    case 61:
    case 62:
      return "Perfect Posture";
      break;
    case 63:
    case 64:
      return "Pockmarked";
      break;
    case 65:
    case 66:
      return "Pointy Chin";
      break;
    case 67:
    case 68:
      return "Poor Posture";
      break;
    case 69:
    case 70:
      return "Raspy Voice";
      break;
    case 71:
    case 72:
      return "Ratty Clothes";
      break;
    case 73:
    case 74:
      return "Red-rimmed Eyes";
      break;
    case 75:
    case 76:
      return "Scarred";
      break;
    case 77:
    case 78:
      return "Shifty Eyes";
      break;;
    case 79:
    case 80:
      return "Small Hands";
      break;
    case 81:
    case 82:
      return "Smelly";
      break;
    case 83:
    case 84:
      return "Squint";
      break;
    case 85:
    case 86:
      return "Stubble";
      break;
    case 87:
    case 88:
      return "Tattoos";
      break;
    case 89:
    case 90:
      return "Unsmiling";
      break;
    case 91:
    case 92:
      return "Unwashed";
      break;
    case 93:
    case 94:
      return "Well-groomed";
      break;
    case 95:
    case 96:
      return "Whispery Voice";
      break;
    case 97:
    case 98:
      return "Widow\'s Peak";
      break;
    case 99:
    case 100:
      randomMagicUserAppearance();
      break;
  }
}

function rollClericAppearance () {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(randomClericAppearance());
  }
  while (arr[0] === arr[1] || arr[1] === arr[2] || arr[0] === arr[2]) {
    arr[0] = randomClericAppearance();
    arr[2] = randomClericAppearance();
  }
  return arr;
}

function randomClericAppearance () {
  var dHundred = rando.diceRoller(1, 100);
  switch (dHundred) {
    case 1:
    case 2:
      return "Big Feet";
      break;
    case 3:
    case 4:
      return "Blazing eyes";
      break;
    case 5:
    case 6:
      return "Bushy Eyebrows";
      break;
    case 7:
    case 8:
      return "Circlet";
      break;
    case 9:
    case 10:
      return "Clean-shaven";
      break;
    case 11:
    case 12:
      return "Clear-eyed";
      break;
    case 13:
    case 14:
      return "Cleft Chin";
      break;
    case 15:
    case 16:
      return "Crooked Teeth";
      break;
    case 17:
    case 18:
      return "Curly Hair";
      break;
    case 19:
    case 20:
      return "Dandruff";
      break;
    case 21:
    case 22:
      return "Dark Skin";
      break;
    case 23:
    case 24:
      return "Dirty";
      break;
    case 25:
    case 26:
      return "Earrings";
      break;
    case 27:
    case 28:
      return "Gaunt";
      break;
    case 29:
    case 30:
      return "Goatee";
      break;
    case 31:
    case 32:
      return "Gray Hair";
      break;
    case 33:
    case 34:
      return "Headband";
      break;
    case 35:
    case 36:
      return "Heavyset";
      break;
    case 37:
    case 38:
      return "High Forehead";
      break;
    case 39:
    case 40:
      return "Hirsute";
      break;
    case 41:
    case 42:
      return "Hooded";
      break;
    case 43:
    case 44:
      return "Large Hands";
      break;
    case 45:
    case 46:
      return "Long Beard";
      break;
    case 47:
    case 48:
      return "Missing Teeth";
      break;
    case 49:
    case 50:
      return "Miter";
      break;
    case 51:
    case 52:
      return "Notable Helmet";
      break;
    case 53:
    case 54:
      return "Notable Nose";
      break;
    case 55:
    case 56:
      return "Notable Garb";
      break;
    case 57:
    case 58:
      return "Pale Skin";
      break;
    case 59:
    case 60:
      return "Perfect Posture";
      break;
    case 61:
    case 62:
      return "Perfumed";
      break;
    case 63:
    case 64:
      return "Piercing Gaze";
      break;
    case 65:
    case 66:
      return "Pockmarked";
      break;
    case 67:
    case 68:
      return "Rosy Cheeks";
      break;
    case 69:
    case 70:
      return "Scarred";
      break;
    case 71:
    case 72:
      return "Shaved Head";
      break;
    case 73:
    case 74:
      return "Shining Eyes";
      break;
    case 75:
    case 76:
      return "Smelly";
      break;
    case 77:
    case 78:
      return "Smiling";
      break;;
    case 79:
    case 80:
      return "Square Chin";
      break;
    case 81:
    case 82:
      return "Square Shoulders";
      break;
    case 83:
    case 84:
      return "Strange Marks";
      break;
    case 85:
    case 86:
      return "Stubble";
      break;
    case 87:
    case 88:
      return "Tattoos";
      break;
    case 89:
    case 90:
      return "Thundering Voice";
      break;
    case 91:
    case 92:
      return "Tonsure";
      break;
    case 93:
    case 94:
      return "Unwashed";
      break;
    case 95:
    case 96:
      return "Warty";
      break;
    case 97:
    case 98:
      return "Well-scrubbed";
      break;
    case 99:
    case 100:
      randomFighterAppearance();
      break;
  }
}

function rollMagicUserAppearance () {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(randomMagicUserAppearance());
  }
  while (arr[0] === arr[1] || arr[1] === arr[2] || arr[0] === arr[2]) {
    arr[0] = randomMagicUserAppearance();
    arr[2] = randomMagicUserAppearance();
  }
  return arr;
}

function randomMagicUserAppearance () {
  var dHundred = rando.diceRoller(1, 100);
  switch (dHundred) {
    case 1:
    case 2:
      return "Acid Scars";
      break;
    case 3:
    case 4:
      return "Aged";
      break;
    case 5:
    case 6:
      return "Bald";
      break;
    case 7:
    case 8:
      return "Black Teeth";
      break;
    case 9:
    case 10:
      return "Booming Voice";
      break;
    case 11:
    case 12:
      return "Burn Scars";
      break;
    case 13:
    case 14:
      return "Bushy Eyebrows";
      break;
    case 15:
    case 16:
      return "Chin Whiskers";
      break;
    case 17:
    case 18:
      return "Crooked Teeth";
      break;
    case 19:
    case 20:
      return "Curly Hair";
      break;
    case 21:
    case 22:
      return "Dark Skin";
      break;
    case 23:
    case 24:
      return "Disfigured";
      break;
    case 25:
    case 26:
      return "Forked Tongue";
      break;
    case 27:
    case 28:
      return "Gaunt";
      break;
    case 29:
    case 30:
      return "Glowing Eyes";
      break;
    case 31:
    case 32:
      return "Gnarled Hands";
      break;
    case 33:
    case 34:
      return "Goatee";
      break;
    case 35:
    case 36:
      return "Gray Hair";
      break;
    case 37:
    case 38:
      return "Haggard";
      break;
    case 39:
    case 40:
      return "Hairless";
      break;
    case 41:
    case 42:
      return "Headband";
      break;
    case 43:
    case 44:
      return "High Cheekbones";
      break;
    case 45:
    case 46:
      return "High Forehead";
      break;
    case 47:
    case 48:
      return "Hooded";
      break;
    case 49:
    case 50:
      return "Limp";
      break;
    case 51:
    case 52:
      return "Long Beard";
      break;
    case 53:
    case 54:
      return "Long Fingernails";
      break;
    case 55:
    case 56:
      return "Long Hair";
      break;
    case 57:
    case 58:
      return "Mismatched Eyes";
      break;
    case 59:
    case 60:
      return "Missing Teeth";
      break;
    case 61:
    case 62:
      return "No Eyebrows";
      break;
    case 63:
    case 64:
      return "Notable Nose";
      break;
    case 65:
    case 66:
      return "Notable Robes";
      break;
    case 67:
    case 68:
      return "Oily Skin";
      break;
    case 69:
    case 70:
      return "Pale Skin";
      break;
    case 71:
    case 72:
      return "Pockmarked";
      break;
    case 73:
    case 74:
      return "Pointy Hat";
      break;
    case 75:
    case 76:
      return "Poor Posture";
      break;
    case 77:
    case 78:
      return "Raspy Voice";
      break;;
    case 79:
    case 80:
      return "Scarred";
      break;
    case 81:
    case 82:
      return "Skeletal Hands";
      break;
    case 83:
    case 84:
      return "Skullcap";
      break;
    case 85:
    case 86:
      return "Smelly";
      break;
    case 87:
    case 88:
      return "Strange Marks";
      break;
    case 89:
    case 90:
      return "Sunken Eyes";
      break;
    case 91:
    case 92:
      return "Tattoos";
      break;
    case 93:
    case 94:
      return "Unwashed";
      break;
    case 95:
    case 96:
      return "Warty";
      break;
    case 97:
    case 98:
      return "White Hair";
      break;
    case 99:
    case 100:
      return "Widow\'s Peak";
      break;
  }
}

function getSpell() {
  var roll = rollDice(10, 1);
  switch(roll) {
    case 1:
      return getElement() + " " + getForm();
    case 2:
      return getAdj() + " " + getForm();
    case 3:
      return getAdj() + " " + getElement();
    case 4:
      return getForm() + " of " + getElement();
    case 5:
      return getForm() + " of the " + getAdj() + " " + getForm();
    case 6:
      return getForm() + " of " + getAdj() + " " + getElement();
    case 7:
      return getWizardName() + "\'s " + getAdj() + " " + getForm();
    case 8:
      return getWizardName() + "\'s " + getAdj() + " " + getElement();
    case 9:
      return getWizardName() + "\'s " + getForm() + " of " + getElement();
    case 10:
      return getWizardName() + "\'s " + getElement() + " " + getForm();
  }
}

function getForm() {
  return rando.randoArray(form);
};

function getElement() {
  return rando.randoArray(element);
};

function getAdj() {
  return rando.randoArray(adjective);
};

function checkForDuplicates(arr) {
  var sorted = arr.slice().sort();
  for (var i = 0; i < arr.length - 1; i++) {
    if (sorted[i] === sorted[i+1]) {
      return true;
    } else {
      return false;
    }
  }
}

function rollGear(playbook) {
  if (playbook === "Cleric") {
    rollClericGear();
  }
  else if (playbook === "Fighter") {
    rollFighterGear();
  }
  else if (playbook === "Magic-User") {
    rollMagicUserGear();
  }
  else if (playbook === "Thief") {
    rollThiefGear();
  }
}

function rollClericGear() {
  character.gear = [];
  var coin = rando.diceRoller(2, 6) + character.abilityMods.lck;
  var weaponRoll = rando.diceRoller(1, 6);
  var otherRoll = rando.diceRoller(1, 6);
  var weapon = "";
  var otherGear = ""
  switch (weaponRoll) {
    case 1:
    case 2:
      weapon = "Staff (1d4, close, 2-handed, 1wt)";
      break;
    case 3:
    case 4:
      weapon = "Mace (1d6, close, forceful, 1wt)";
      break;
    case 5:
    case 6:
      weapon = "Warhammer (1d6, close, 1 pierce, 1wt)";
      break;
    }
  switch (otherRoll) {
    case 1:
    case 2:
      otherGear = "Shield (+1 armor, 2wt)";
      break;
    case 3:
    case 4:
      otherGear = "Leather Armor (1 armor, 2wt)";
      break;
    case 5:
    case 6:
      otherGear = "Chainmail (2 armor, 3 wt)";
      break;
    }
  character.gear = [
    "Your holy symbol (0wt)",
    "Rations (5 uses, 1wt)",
    coin + " silver pieces",
    weapon,
    otherGear
  ]
}

function rollFighterGear() {
  character.gear = [];
  var coin = rando.diceRoller(1, 10) + character.abilityMods.lck;
  var weaponRoll = rando.diceRoller(1, 6);
  var otherRoll = rando.diceRoller(1, 6);
  var otherRollAgain = rando.diceRoller(1, 6);
  var weapon = "";
  var otherGear = ""
  var otherGearAgain = "";
  switch (weaponRoll) {
    case 1:
      weapon = "Leather armor (1 armor, 1wt)";
      break;
    case 2:
    case 3:
    case 4:
    case 5:
      weapon = "Chainmail (2 armor, 3wt)";
      break;
    case 6:
      weapon = "Scale mail (3 armor, awkward, 4wt)";
      break;
    }
  switch (otherRoll) {
    case 1:
      otherGear = "Healing potion (heal 1d8 HP, 0wt)";
      break;
    case 2:
      otherGear = "Shield (+1 armor, 2wt)";
      break;
    case 3:
      otherGear = "Poultices & herbs (2 uses mm, slow, 1wt)"
      break;
    case 4:
      otherGear = "Antitoxin (cures poison, 0wt)";
      break;
    case 5:
      otherGear = "Rations (5 uses, 1wt)"
      break;
    case 6:
      otherGear = "Adventuring gear (5 uses, 2wt)";
      break;
    }
    switch (otherRollAgain) {
      case 1:
        otherGearAgain = "Healing potion (heal 1d8 HP, 0wt)";
        break;
      case 2:
        otherGearAgain = "Shield (+1 armor, 2wt)";
        break;
      case 3:
        otherGearAgain = "Poultices & herbs (2 uses mm, slow, 1wt)"
        break;
      case 4:
        otherGearAgain = "Antitoxin (cures poison, 0wt)";
        break;
      case 5:
        otherGearAgain = "Rations (5 uses, 1wt)"
        break;
      case 6:
        otherGearAgain = "Adventuring gear (5 uses, 2wt)";
        break;
      }
  character.gear = [
    "Your favored weapon",
    "Rations (5 uses, 1wt)",
    coin + " silver pieces",
    weapon,
    otherGear,
    otherGearAgain
  ]
}

function rollThiefGear() {
  character.gear = [];
  var coin = rando.diceRoller(2, 10) + character.abilityMods.lck;
  var weaponRoll = rando.diceRoller(1, 6);
  var otherRoll = rando.diceRoller(1, 6);
  var weapon = "";
  var otherGear = ""
  switch (weaponRoll) {
    case 1:
    case 2:
      weapon = "Knife (1d4, precise, hand, 0 wt)";
      break;
    case 3:
    case 4:
      weapon = "Dagger (1d4, 1 pierce, precise, hand, 0 wt)";
      break;
    case 5:
    case 6:
      weapon = "Shortsword (1d6, close, 1 wt)";
      break;
    }
  switch (otherRoll) {
    case 1:
    case 2:
      otherGear = "3 throwing knives (1d4, hand, close, reach, near, precise, 0 wt)";
      break;
    case 3:
    case 4:
      otherGear = "Sling (1d4, near, far, 0 wt) and sling pouch (3 ammo, 1 wt)";
      break;
    case 5:
    case 6:
      weapon = "Shortbow (1d6, near, far, 2-handed, 1 wt) and quiver (3 ammo, 1 wt)";
      break;
    }
  character.gear = [
    "Leather armor (1 armor, 1 wt)",
    "Rations (5 uses, 1wt)",
    coin + " silver pieces",
    weapon,
    otherGear
  ]
}

function rollMagicUserGear() {
  character.gear = [];
  var coin = rando.diceRoller(2, 6) + character.abilityMods.lck;
  var weaponRoll = rando.diceRoller(1, 6);
  var otherRoll = rando.diceRoller(1, 6);
  var weapon = "";
  var otherGear = ""
  switch (weaponRoll) {
    case 1:
    case 2:
      weapon = "Magic wand (+1 power, 0 wt)";
      break;
    case 3:
    case 4:
    case 5:
      weapon = "Magic staff (1d4, close, 2-handed, +1 power, 1 wt)";
      break;
    case 6:
      weapon = "Arcane orb (+2 power, 1 wt)";
      break;
    }
  switch (otherRoll) {
    case 1:
    case 2:
      otherGear = "Bag of books (5 uses, 2 wt)";
      break;
    case 3:
      otherGear = "Dagger (1d4, 1 pierce, precise, hand, 0 wt)";
      break;
    case 4:
      otherGear = "Healing potion (heal 1d8 HP, 0 weight)";
      break;
    case 5:
    case 6:
      otherGear = "Spell components (+1 power, 3 uses, 0 wt)";
      break;
    }
  character.gear = [
    "Your spellbook (1 wt)",
    "Rations (5 uses, 1 wt)",
    coin + " silver pieces",
    weapon,
    otherGear
  ]
}



let virtueList = [
  "Ambitious",
  "Benevolent",
  "Bold",
  "Brave",
  "Charitable",
  "Chaste",
  "Cautious",
  "Compassionate",
  "Confident",
  "Considerate",
  "Cooperative",
  "Courteous",
  "Creative",
  "Curious",
  "Daring",
  "Defiant",
  "Dependable",
  "Determined",
  "Disciplined",
  "Enthusiastic",
  "Fair",
  "Focused",
  "Forgiving",
  "Friendly",
  "Frugal",
  "Funny",
  "Generous",
  "Gregarious",
  "Helpful",
  "Honest",
  "Honorable",
  "Hopeful",
  "Humble",
  "Idealistic",
  "Just",
  "Kind",
  "Loving",
  "Loyal",
  "Merciful",
  "Orderly",
  "Patient",
  "Persistent",
  "Pious",
  "Resourceful",
  "Respectful",
  "Responsible",
  "Selfless",
  "Steadfast",
  "Tactful",
  "Tolerant"
]

let viceList = [
  "Addict",
  "Aggressive",
  "Alcoholic",
  "Antagonistic",
  "Arrogant",
  "Boastful",
  "Cheater",
  "Covetous",
  "Cowardly",
  "Cruel",
  "Decadent",
  "Deceitful",
  "Disloyal",
  "Doubtful",
  "Egotistical",
  "Envious",
  "Gluttonous",
  "Greedy",
  "Hasty",
  "Hedonist",
  "Impatient",
  "Inflexible",
  "Irritable",
  "Lazy",
  "Lewd",
  "Liar",
  "Lustful",
  "Mad",
  "Malicious",
  "Manipulative",
  "Merciless",
  "Moody",
  "Murderous",
  "Obsessive",
  "Petulant",
  "Prejudiced",
  "Reckless",
  "Resentful",
  "Rude",
  "Ruthless",
  "Self-pitying",
  "Selfish",
  "Snobbish",
  "Stingy",
  "Stubborn",
  "Vain",
  "Vengeful",
  "Wasteful",
  "Wrathful",
  "Zealous"
]

let form = [
  "Armor",
  "Arrow",
  "Aura",
  "Bane",
  "Beast",
  "Blade",
  "Blast",
  "Blessing",
  "Blob",
  "Blood",
  "Bolt",
  "Bond",
  "Boon",
  "Brain",
  "Burst",
  "Call",
  "Charm",
  "Circle",
  "Claw",
  "Cloak",
  "Cone",
  "Crown",
  "Cube",
  "Cup",
  "Curse",
  "Dagger",
  "Dart",
  "Demon",
  "Disturbance",
  "Door",
  "Eye",
  "Eyes",
  "Face",
  "Fang",
  "Feast",
  "Finger",
  "Fissure",
  "Fist",
  "Gate",
  "Gaze",
  "Glamer",
  "Globe",
  "Golem",
  "Guard",
  "Guide",
  "Guise",
  "Halo",
  "Hammer",
  "Hand",
  "Heart",
  "Helm",
  "Horn",
  "Lock",
  "Mantle",
  "Mark",
  "Memory",
  "Mind",
  "Mouth",
  "Noose",
  "Oath",
  "Oracle",
  "Pattern",
  "Pet",
  "Pillar",
  "Pocket",
  "Portal",
  "Pyramid",
  "Ray",
  "Rune",
  "Scream",
  "Seal",
  "Sentinel",
  "Servant",
  "Shaft",
  "Shield",
  "Sigil",
  "Sign",
  "Song",
  "Spear",
  "Spell",
  "Sphere",
  "Spray",
  "Staff",
  "Storm",
  "Strike",
  "Sword",
  "Tendril",
  "Tongue",
  "Tooth",
  "Trap",
  "Veil",
  "Voice",
  "Wall",
  "Ward",
  "Wave",
  "Weapon",
  "Weave",
  "Whisper",
  "Wings",
  "Word"
];

let element = [
  "Acid",
  "Aether",
  "Air",
  "Anger",
  "Ash",
  "Avarice",
  "Balance",
  "Blight",
  "Blood",
  "Bone",
  "Bones",
  "Brimstone",
  "Clay",
  "Cloud",
  "Copper",
  "Cosmos",
  "Dark",
  "Death",
  "Deceit",
  "Despair",
  "Despair",
  "Dimension",
  "Doom",
  "Dust",
  "Earth",
  "Ember",
  "Energy",
  "Envy",
  "Fear",
  "Fire",
  "Fog",
  "Force",
  "Fury",
  "Glory",
  "Gluttony",
  "Gold",
  "Greed",
  "Hate",
  "Hatred",
  "Health",
  "Heat",
  "History",
  "Hope",
  "Ice",
  "Iron",
  "Justice",
  "Knowledge",
  "Lead",
  "Lies",
  "Life",
  "Light",
  "Lightning",
  "Lore",
  "Love",
  "Lust",
  "Metal",
  "Might",
  "Mist",
  "Moon",
  "Mud",
  "Nature",
  "Oil",
  "Pain",
  "Perception",
  "Plane",
  "Plant",
  "Poison",
  "Quicksilver",
  "Revulsion",
  "Rot",
  "Salt",
  "Shadow",
  "Sight",
  "Silver",
  "Smoke",
  "Soil",
  "Soul",
  "Souls",
  "Sound",
  "Spirit",
  "Stars",
  "Steam",
  "Steel",
  "Stone",
  "Storm",
  "Sun",
  "Terror",
  "Time",
  "Treasure",
  "Truth",
  "Vanity",
  "Venom",
  "Vigor",
  "Void",
  "Water",
  "Will",
  "Wind",
  "Wisdom",
  "Wood",
  "Youth"
];

let adjective = [
  "All-Knowing",
  "All-Seeing",
  "Arcane",
  "Befuddling",
  "Binding",
  "Black",
  "Blazing",
  "Blinding",
  "Bloody",
  "Bright",
  "Cacophonous",
  "Cerulean",
  "Concealing",
  "Confusing",
  "Consuming",
  "Crimson",
  "Damnable",
  "Dark",
  "Deflecting",
  "Delicate",
  "Demonic",
  "Devastating",
  "Devilish",
  "Diminishing",
  "Draining",
  "Eldritch",
  "Empowering",
  "Enlightening",
  "Ensorcelling",
  "Entangling",
  "Enveloping",
  "Erratic",
  "Evil",
  "Excruciating",
  "Expanding",
  "Extra-Planar",
  "Fearsome",
  "Flaming",
  "Floating",
  "Freezing",
  "Glittering",
  "Gyrating",
  "Helpful",
  "Hindering",
  "Icy",
  "Illusory",
  "Incredible",
  "Inescapable",
  "Ingenious",
  "Instant",
  "Invigorating",
  "Invisible",
  "Invulnerable",
  "Liberating",
  "Maddening",
  "Magnificent",
  "Many-Colored",
  "Mighty",
  "Most Excellent",
  "Omnipotent",
  "Oozing",
  "Penultimate",
  "Pestilential",
  "Piercing",
  "Poisonous",
  "Prismatic",
  "Raging",
  "Rejuvenating",
  "Restorative",
  "Screaming",
  "Sensitive",
  "Shimmering",
  "Shining",
  "Silent",
  "Sleeping",
  "Slow",
  "Smoking",
  "Sorcerer\’s",
  "Strange",
  "Stupefying",
  "Terrible",
  "Thirsty",
  "Thundering",
  "Trans-Dimensional",
  "Transmuting",
  "Ultimate",
  "Uncontrollable",
  "Unseen",
  "Unstoppable",
  "Untiring",
  "Vengeful",
  "Vexing",
  "Violent",
  "Violet",
  "Viridian",
  "Voracious",
  "Weakening",
  "White",
  "Wondrous",
  "Yellow"
];

let wizName1 = [
  "A",
  "Ab",
  "Aga",
  "Alha",
  "Appol",
  "Apu",
  "Arne",
  "Asmo",
  "Baha",
  "Bal",
  "Barba",
  "Bol",
  "By",
  "Can",
  "Cinni",
  "Cir",
  "Cyn",
  "Cyto",
  "Dar",
  "Darg",
  "De",
  "Des",
  "Dra",
  "Dul",
  "Elez",
  "Ely",
  "Ez",
  "Fal",
  "Faral",
  "Flo",
  "Fol",
  "Gaili",
  "Garg",
  "Gast",
  "Gil",
  "Gy",
  "Haz",
  "Heca",
  "Her",
  "Hog",
  "Hur",
  "I",
  "Ik",
  "Ilde",
  "In",
  "Jas",
  "Jir",
  "Ju",
  "Krak",
  "Kul",
  "Laf",
  "Long",
  "Ma",
  "Mer",
  "Mercu",
  "Mor",
  "Mune",
  "Munno",
  "Murz",
  "Naf",
  "O",
  "Osh",
  "Pande",
  "Pander",
  "Par",
  "Per",
  "Quel",
  "Ra",
  "Ragga",
  "Rhi",
  "Satan",
  "Satur",
  "Semi",
  "Sera",
  "She",
  "Shrue",
  "Sloo",
  "Sol",
  "T\’",
  "Tcha",
  "Tol",
  "Tub",
  "Tur",
  "U",
  "Vag",
  "Val",
  "Vance",
  "Ver",
  "Vish",
  "Wa",
  "Win",
  "Xa",
  "Yu",
  "Za",
  "Zal",
  "Zan",
  "Zili",
  "Zim",
  "Zuur",
  "Zza"
];

let wizName2 = [
  "ak",
  "alto",
  "ana",
  "anti",
  "aris",
  "ark",
  "asta",
  "balia",
  "bus",
  "by",
  "cas",
  "ce",
  "derol",
  "deus",
  "din",
  "dok",
  "dor",
  "dred",
  "driar",
  "dula",
  "dun",
  "dustin",
  "er",
  "fant",
  "fia",
  "fonse",
  "gad",
  "gax",
  "glana",
  "goria",
  "goth",
  "heer",
  "houlik",
  "ia",
  "iala",
  "iana",
  "ingar",
  "ista",
  "jan",
  "jobulon",
  "kan",
  "kang",
  "konn",
  "lah",
  "leius",
  "leo",
  "leou",
  "lin",
  "lonia",
  "lonius",
  "loo",
  "lume",
  "ma",
  "mas",
  "mast",
  "mia",
  "miel",
  "motto",
  "moulian",
  "mut",
  "nak",
  "nia",
  "nish",
  "nob",
  "o",
  "ol",
  "ool",
  "pa",
  "pheus",
  "phim",
  "por",
  "quint",
  "ramis",
  "rezzin",
  "ro",
  "rrak",
  "ry",
  "sira",
  "sta",
  "te",
  "teria",
  "thakk",
  "thalon",
  "tine",
  "toomb",
  "torr",
  "troya",
  "tur",
  "tuva",
  "u",
  "valva",
  "vance",
  "vilk",
  "wink",
  "xa",
  "yop",
  "zant",
  "zark",
  "zirian",
  "zred"
];

let maleHumanNames = [
  "Athelan",
  "Aldred",
  "Alger",
  "Archard",
  "Astyrian",
  "Bowden",
  "Brogan",
  "Caden",
  "Cerdic",
  "Devan",
  "Druce",
  "Dugal",
  "Edlyn",
  "Ebis",
  "Esward",
  "Firman",
  "Framar",
  "Fugol",
  "Garret",
  "Gidwin",
  "Gord",
  "Govannon",
  "Greme",
  "Grindan",
  "Halwen",
  "Holt",
  "Iden",
  "Irbend",
  "Kendrik",
  "Leor",
  "Lufian",
  "Nyle",
  "Odel",
  "Ord",
  "Orleg",
  "Radan",
  "Reged",
  "Rowe",
  "Scrydan",
  "Seaver",
  "Shepard",
  "Snell",
  "Stedman",
  "Swift",
  "Teon",
  "Tobrec",
  "Tredan",
  "Ware",
  "Warian",
  "Wulf",
];

let femaleHumanNames = [
  "Acca",
  "Alodia",
  "Andessa",
  "Anlis",
  "Ara",
  "Ardith",
  "Berroc",
  "Bernia",
  "Bodica",
  "Brigantia",
  "Brimlid",
  "Caro",
  "Cwen",
  "Darel",
  "Dawn",
  "Diera",
  "Dotor",
  "Eda",
  "Elene",
  "Elga",
  "Elswyth",
  "Elva",
  "Elvina",
  "Erlina",
  "Esma",
  "Faradan",
  "Freya",
  "Garmang",
  "Gloris",
  "Harmilla",
  "Hunnar",
  "Juliana",
  "Kandara",
  "Laralan",
  "Lorn",
  "Maida",
  "Megdas",
  "Mercia",
  "Mora",
  "Ogethas",
  "Ossia",
  "Pallas",
  "Rathet",
  "Sibley",
  "Sunnivar",
  "Tate",
  "Udela",
  "Viradeca",
  "Wilona",
  "Zora",
];

let maleHalflingNames = [
  "Adaman",
  "Adelard",
  "Adred",
  "Agilward" ,
  "Arnest",
  "Balbas",
  "Barton",
  "Bell",
  "Banco",
  "Bowman",
  "Cal",
  "Emmet",
  "Erling",
  "Fastman",
  "Foda",
  "Freebern",
  "Frid",
  "Gerd",
  "Hadred",
  "Hagar",
  "Halbert",
  "Hamfast",
  "Hildred",
  "Huge",
  "Isen",
  "Jaco",
  "Jungo",
  "Helm",
  "Konner",
  "Lambert",
  "Leon",
  "Linus",
  "Marko",
  "Matti",
  "Mekel",
  "Melchior" ,
  "Lesser",
  "Nenko",
  "Nob",
  "Olo",
  "Ortwin",
  "Otto",
  "Paladin",
  "Pasco",
  "Quintus",
  "Sifro",
  "Ted",
  "Tolman",
  "Wilber",
  "Wiseman",
];

let femaleHalflingNames = [
  "Adelle",
  "Agilward" ,
  "Alfreda" ,
  "Amalinde",
  "Balba",
  "Bella",
  "Beryl",
  "Bess",
  "Camelia",
  "Cordelia" ,
  "Daisy",
  "Demona",
  "Drogga",
  "Elanor",
  "Ella",
  "Elsbeth",
  "Elsina",
  "Emerly",
  "Foda",
  "Gilda",
  "Gilly",
  "Hanna",
  "Hilda",
  "Hildred" ,
  "Janna",
  "Jilly",
  "Kat",
  "Klare",
  "Lily",
  "Lobelia",
  "Lorna",
  "Lucie",
  "Magda",
  "Marga",
  "Mari",
  "Marigold",
  "Marka" ,
  "Marlyn",
  "Mina",
  "Noba",
  "Olga" ,
  "Ottillia" ,
  "Pansy",
  "Pervinca" ,
  "Poppy",
  "Rose",
  "Rowan",
  "Salina",
  "Tella",
  "Ulrica",
];

let maleDwarfNames = [
  "Bagan",
  "Banar",
  "Belir",
  "Besil",
  "Boran",
  "Darin",
  "Dirin",
  "Doibur",
  "Doigan",
  "Fagan",
  "Fignus",
  "Firin",
  "Gesil",
  "Glagan",
  "Glasil",
  "Glenus",
  "Goirin",
  "Gosil",
  "Hanar",
  "Heran",
  "Hoibur",
  "Hoili",
  "Hoinar",
  "Holir",
  "Homli",
  "Kimli",
  "Koisin",
  "Lasin",
  "Legan",
  "Loilir",
  "Mirin",
  "Moli",
  "Nasil",
  "Nefur",
  "Neli",
  "Nignar",
  "Noifur",
  "Ramli",
  "Regnar",
  "Safur",
  "Sali",
  "Saran",
  "Segnar",
  "Serin",
  "Simli",
  "Tasil",
  "Teli",
  "Tisin",
  "Toilin",
  "Toinus",
];

let femaleDwarfNames = [
  "Berin",
  "Bibura",
  "Bisil",
  "Dagna",
  "Delinia",
  "Deris",
  "Dira",
  "Disia",
  "Dorinda",
  "Faran",
  "Fasina",
  "Fignis",
  "Foifur",
  "Foimli",
  "Gerda",
  "Gestis",
  "Ginus",
  "Glegna",
  "Glelia",
  "Glelis",
  "Glemlia",
  "Gloigas",
  "Gloigna",
  "Glonara",
  "Hegna",
  "Hignara",
  "Hoimlis",
  "Kana",
  "Kemlir",
  "Keri",
  "Keris",
  "Kilina",
  "Kolina",
  "Korana",
  "Lifur",
  "Loilis",
  "Loilina",
  "Mamli",
  "Milina",
  "Moibur",
  "Moli",
  "Noris",
  "Nosi",
  "Rana",
  "Ribura",
  "Sasilia",
  "Soirina",
  "Soran",
  "Toigna",
  "Tomlis",
];

let maleElfNames = [
  "Amánd",
  "Amioril",
  "Analad",
  "Anin",
  "Anumir",
  "Calithrambor",
  "Calóng",
  "Calór",
  "Cebrin",
  "Cóldor",
  "Corfindil",
  "Delithran",
  "Elithranduil",
  "Elverion",
  "Eowóril",
  "Galithrar",
  "Gelith",
  "Gladriendil",
  "Glamir",
  "Glarang",
  "Glil-Gang",
  "Glundil",
  "Gorfilas",
  "Góriand",
  "Hal",
  "Harang",
  "Isil-Galith",
  "Isilith",
  "Isónd",
  "Isorfildur",
  "Legaraldur",
  "Lómebrildur",
  "Mil-Gan",
  "Náldur",
  "Nelith",
  "Niol",
  "Porfindel",
  "Ráldur",
  "Silmandil",
  "Tand",
  "Taralad",
  "Tararion",
  "Tendil",
  "Téril",
  "Tildur",
  "Tiniomir",
  "Unálad",
  "Unebrin",
  "Unéndil",
  "Uriong",
];

let femaleElfNames = [
  "Amidë",
  "Anadriedia",
  "Anarania",
  "Anebriwien",
  "Anilmadith",
  "Beliniel",
  "Calararith",
  "Cebridith",
  "Celénia",
  "Celil-Gathiel",
  "Cidien",
  "Eäróndra",
  "Eärorfindra",
  "Eláthien",
  "Eláviel",
  "Eleniel",
  "Elorfindra",
  "Elváwien",
  "Eoweclya",
  "Eowodia",
  "Fórith",
  "Gilmadith",
  "Gladrieclya",
  "Glélindë",
  "Gorfinia",
  "Hadrieviel",
  "Haniel",
  "Hebriclya",
  "Legithralia",
  "Lómithrania",
  "Meclya",
  "Mélith",
  "Módien",
  "Paclya",
  "Paradien",
  "Pedith",
  "Pil-Gandra",
  "Pirith",
  "Porficlya",
  "Sithralindë",
  "Thrédith",
  "Thrilmadith",
  "Thrithien",
  "Throrfindra",
  "Tilmaclya",
  "Tilmawen",
  "Tinilmania",
  "Uradriethiel",
  "Urithrarith",
  "Urorfiviel",
];
