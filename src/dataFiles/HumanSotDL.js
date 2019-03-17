import rando from "../rando"

const human = {
  character: {
    strength: 0,
    agility: 0,
    intellect: 0,
    will: 0,
    perception: 0,
    defense: 0,
    health: 0,
    healingRate: 0,
    size: 1,
    speed: 10,
    power: 0,
    languages: ["Common"],
    languagesRead: [],
    professions: [],
    gear: [],
    ancestors: '',
    familyCircumstance: '',
    childhoodMod: 0,
    familyProfession: false,
    familyProfessionText: '',
    parentStatus: '',
    parents: {
      father: false,
      fatherDeath: '',
      mother: false,
      motherDeath: '',
    },
    numberOfSiblings: 0,
    siblings: [],
  },
  getAncestry(num) {
    if (num === 3) {
        return `Your ancestors were villains of the worst sort, and their actions left a stain on your family’s reputation. Most people know your family to be villains.`
    } else if (num <= 5) {
        return `Your family includes several disreputable characters whose deeds have sullied your family’s reputation throughout the province or city in which you live.`
    } else if (num <= 8) {
        return `At least one recent ancestor was a criminal or did something shameful that’s known in your community.`
    } else if (num <= 12) {
        return `Your ancestors were ordinary and unexceptional people.`
    } else if (num <= 15) {
        return `At least one recent ancestor is known for some great deed, discovery, or achievement.`
    } else if (num <= 17) {
        return `Your family is well known throughout the province or city in which you live for great deeds and accomplishments.`
    } else {
        return `Your ancestors include one of the greatest people to have lived, ensuring your family name is enshrined in the annals of history.`
    }
  },
  getFamilyCircumstance(num) {
    if (num === 3) {
      human.character.childhoodMod += -6;
      return `You were orphaned and have no memory of your family.`
    } else if (num <= 5) {
      human.character.childhoodMod += -3;
      return `You were born to a destitute family.`
    } else if (num <= 8) {
      human.character.childhoodMod += -1;
      return `You were born to a poor family.`
    } else if (num <= 12) {
      return `Your family was getting by.`
    } else if (num <= 15) {
      human.character.childhoodMod += 1;
      return `You were born to a comfortable family.`
    } else if (num <= 17) {
      human.character.childhoodMod += 3;
      return `You were born to a wealthy family.`
    } else {
      human.character.childhoodMod += 6;
      return `You were born to a rich family. You might come from a noble family, a crime family, a religious leader, or a powerful user of magic.`
    }
  },
  getParentStatus(num) {
    if (num <= 4) {
      return `Your parents are dead. Unless you were an orphan, a relative or friend of the family raised you.`
    } else if (num <= 8) {
      human.character.parents.mother = true;
      return `Your father is dead.`
    } else if (num <=12) {
      human.character.parents.mother = true;
      human.character.parents.father = true;
      return `Your parents are alive`
    } else if (num <= 16) {
      human.character.parents.father = true;
      return `Your mother is dead.`
    } else {
      human.character.parents.mother = "unknown";
      human.character.parents.father = "unknown";
      return `You do not know the fate of your parents. You might have been kidnapped and raised by your captors, ran away from home, or your parents might have disappeared.`
    }
  },
  getAmountOfSiblings(num) {
    if (num <= 4) {
      return 0;
    } else if (num <= 8) {
      return 1;
    } else if (num <= 12) {
      return rando.diceRoller(1, 3) + 1;
    } else if (num <= 16) {
      return rando.diceRoller(1, 6) + 2;
    } else {
      return rando.diceRoller(2, 6);
    }
  },
  addSiblings(totalSiblings) {
    for (let i = 0; i < totalSiblings; i++) {
      let roll = rando.diceRoller(1, 6);
      let sibling = {
        gender: '',
        age: '',
        fate: '',
        death: null,
      };
      sibling.gender = roll < 4 ?  `female` : `male`;
      roll = rando.diceRoller(4, 6);
      sibling.age = roll < 5 ? `twin/triplet` : roll <= 14 ? `older` : `younger`;
      sibling.fate = human.getFate(rando.diceRoller(3, 6));
      if (sibling.fate === `dead`) {
        sibling.death = human.getDeath(rando.diceRoller(3, 6));
      }
      human.character.siblings.push(sibling);
    }
  },
  getFate(num) {
    if (num === 3 ) {
      return `insane`;
    } else if (num <= 5) {
      return `unknown`;
    } else if (num <= 8) {
      return `dead`;
    } else if (num <= 12) {
      return `alive`;
    } else if (num <= 15) {
      return `alive but disgraced`;
    } else if (num <= 17) {
      return `alive and well-regarded`;
    } else {
      return `alive and famous`;
    }
  },
  getDeath(num) {
    if (num === 3 ) {
      return `Murder`;
    } else if (num <= 5) {
      return `Accident, unrelated to profession`;
    } else if (num <= 8) {
      return `Disease or famine`;
    } else if (num <= 12) {
      return `Natural causes`;
    } else if (num <= 15) {
      return `War`;
    } else {
      return `Accident related to profession`;
    }
  },
  rollCharacter() {
    human.character.ancestors = human.getAncestry(rando.diceRoller(3, 6));
    human.character.familyCircumstance = human.getFamilyCircumstance(rando.diceRoller(3,6));
    human.character.parentStatus = human.getParentStatus(rando.diceRoller(3, 6));
    if (!human.character.parents.father) {
      human.character.parents.fatherDeath = human.getDeath(rando.diceRoller(3, 6));
    } else if (!human.character.parents.mother) {
      human.character.parents.motherDeath = human.getDeath(rando.diceRoller(3, 6));
    }
    human.character.numberOfSiblings = human.getAmountOfSiblings(rando.diceRoller(1, 20));
    if (human.character.numberOfSiblings) {
      human.addSiblings(human.character.numberOfSiblings);
    }
    console.log(human.character);
  }
}
