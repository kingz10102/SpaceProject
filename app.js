let playerSpaceship = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7
  };
  
class azanAliens {
    constructor(hitPoints, firePower, accuracy) {
        this.hull = hitPoints();
        this.firepower = firePower(); //making a function call withing a constructor 
        this.accuracy = accuracy();
    }
}
  
  // attributes given for player is converted to a function
  // used 
  function hitPoints() {
    let hullRange = [3, 4, 5, 6];
    let hullStrength = hullRange[Math.floor(Math.random() * hullRange.length)];
    return hullStrength;
  }
  function firePower() {
    let firepowerRange = [2, 3, 4];
    let firepowerStrength = firepowerRange[Math.floor(Math.random() * firepowerRange.length)];
    return firepowerStrength;
  }
  function accuracy() {
    let accuracyRange = [0.6, 0.7, 0.8];
    let accuracyStrength = accuracyRange[Math.floor(Math.random() * accuracyRange.length)];
    return accuracyStrength;
  }
  
  
// alien generator this whole loop would provide randomazation to which alien would approach ship to battle
  
  let alienRoulette = [];
  function enemyOrder() {
    for (let counter = 0; counter < 6; counter++) {
      let alien = new Aliens();
      alienArmy.push(alien);
      console.log(alienRoulette);
    }
  }
  console.log(playerSpaceship);
  

  
  function startGame() {
    let name = prompt('What is your name?')
    alert(
      `Welcome to Space Battle: Galaxy Wars. We need your help Captian ${name}. The aliens of the Planet Azan have attacked Earth and we need your help. Defend our home!`
    );
    promptAction();
  }
  startGame();
  
  function boxAction() {
    if (playerSpaceship.hull > 0) {
      let playerCommand = prompt(
        `The enemy is among us. What shall we do you want to do?`);
      if (playerCommand === "attack" || playerCommand === "Attack" || playerCommand === "a" || playerCommand === "A") {
        playerAttack();
      } else if (playerCommand=== "retreat" || playerCommand === "Retreat" || playerCommand === "r" || playerCommand === "R") {
        playerRetreat();
        loseGame();
      } else {
        alert(
          `We need a command captain there is no time for waddling!!!!!`);
        boxAction();
      }
    }
  }
  
  