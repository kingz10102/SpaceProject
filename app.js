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
function aliensOrder() {
  let aliensRange = [3, 4, 5, 6, 7, 8];
  let numberAliens = aliensRange[Math.floor(Math.random() * aliensRange.length)];
  return numberAliens;
}
  

let alienShips = [];
  function createAzan() {
    for (let counter = 0; counter < 6; counter++) {
      let alien = new Aliens();
      alienShips.push(alien);
      console.log(alienShips);
    }
  }
  createAzan(alienOrder());
  console.log(playerSpaceship);
  
  function startGame() {
    let name = prompt('What is your name?')
    alert(
      `Welcome to Space Battle: Galaxy Wars. We need your help Captian ${name}. The aliens of the Planet Azan have attacked Earth and we need your help. Defend our home!`
    );
    boxAction();
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
  ///
  function playerAttack() {
    if (Math.random() < playerSpaceship.accuracy) {
      alienShips[0].hull -= playerSpaceship.firepower;
      if (alienShips[0].hull <= 0) {
        alienShips.shift();
        if (alienShips.length >= 1) {
          alertContinue();
          boxAction();
        } else if (alienShips.length <= 0) {
          alertWin();
        }
      } else if (alienShips.length !== 1) {
        alienAttack();
      }
    } else {
      alertMissed();
      alienAttack();
    }
  }
// function for alien attack (move) on player and its calls using if statements (conditionals)
  function alienAttack() {
    if (Math.random() < accuracy()) {
      playerSpaceship.hull -= alienShips[0].firepower;
      if (playerSpaceship.hull <= 0) {
        alertDefeat();
        alertLose();
      } else if (playerSpaceship.hull > 0) {
        alertSurvived();
        alertPlayerStatus();
        playerAttack();
      }
    } else {
      alertAvoid()
      alertStatus();
      playerAttack();
    }
  }
  
  
  