//This javascript file is for randomizer functions

export const rando = {
  //Dice Roller
  diceRoller: (numberOfDice, numberOfSides) => {
    let total = 0;
    for (let i = 1; i <= numberOfDice; i++) {
      total += Math.floor(Math.random() * numberOfSides) + 1;
    }
    console.log(total)
    return total;
  },

  //Random Array Item
  randoArray: (arr) => {
    return arr[rando.diceRoller(1, arr.length - 1)]
  }

};
