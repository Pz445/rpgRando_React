//This javascript file is for randomizer functions

const rando = {
  //Dice Roller
  diceRoller: (numberOfDice, numberOfSides) => {
    let total = 0;
    for (let i = 0; i < numberOfDice; i++) {
      total += Math.floor(Math.random() * numberOfSides) + 1;
    }
    return total;
  },

  //Random Array Item
  randoArray: (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
  },

  checkForDuplicates: (arr) => {
    var sorted = arr.slice().sort();
    for (var i = 0; i < arr.length - 1; i++) {
      if (sorted[i] === sorted[i+1]) {
        return true;
      } else {
        return false;
      }
    }
  }

};

export default rando;
