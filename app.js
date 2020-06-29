// declaring player stats with variable object 

const playerSpaceship = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7
  };
  
class azanAliens {
    constructor(hitPoints, firePower, accuracy) {
        this.hull = hitPoints();
        this.firepower = firePower(); //making a function call within a constructor 
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
  createAzan(aliensOrder());
  console.log(playerSpaceship);
  
  function welcomeFunction(){
    let name = prompt('What is your name?')
      if (person != null){
        document.getElementById("demo").innerHTML = `Welcome to Space Battle: Galaxy Wars. We need your help Captian ${name}. The aliens of the Planet Azan have attacked Earth and we need your help. Defend our home!`;

      }
function startGame() {
    
    // alert(`Welcome to Space Battle: Galaxy Wars. We need your help Captian ${name}. The aliens of the Planet Azan have attacked Earth and we need your help. Defend our home!`);
    promptAction();
  }
  startGame();
  
  function promptAction() {
    if (playerSpaceship.hull > 0) {
      let playerCommand = prompt(`The enemy is among us. What shall we do you want to do?`);
      if (playerCommand === "attack" || playerCommand === "Attack" || playerCommand === "a" || playerCommand === "A") 
      // return playerCommand
      // alert(playerCommand);
      playerAttack();
    }else if (playerCommand === "retreat" || playerCommand === "Retreat" || playerCommand === "r" || playerCommand === "R") {
      // return playerCommand
      alert(playerCommand);
        playerRetreat();
        loseGame();
      } else {
        alert(`There is no time for games captian ${name}. GET IT TOGETHER!!! WE NEED A VALID COMMAND!!`)
      return playerCommand
        promptAction();
    }
  }
}
function playerAttack() {
  if (Math.random() < playerSpaceship.accuracy) {
    alienShips[0].hull -= playerSpaceship.firepower;
  }else if (alienShips[0].hull <= 0) {
      alienShips.shift(); // removes first alien from array
      console.log(alienShips)
  } else if (alienShips.length >= 1) {
        sayContinue();
        boxAction();
  } else if (alienShips.length <= 0) {
        alertWin();
  } else if (alienShips.length !== 1) {
      alienAttack();
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
    } else {
    alertAvoid()
    alertStatus();
    playerAttack();
  }
}

//////
    function alertContinue() {
      alert(`Nice Job!!! One step,to saving Earth. There are: ${alienShips.length} Azan alien ships left`);
    }
    function alertSurvived() {
      alert(`The powers of the force  were definifitly behind us. How in the world did We survive that. ${alienShips[0].firepower} points taken away`);
    }
    function alertDefeat() {
      alert(`RIP Captiain ${name}, it was a hard fought battle`);
    }
    
    function alertMissed() {
      alert(`Poor Vision, We missed target.`);
    }
    
    function alertAvoid() {
      alert(`HAHAHA!!!!! Great Evualness!! They couldn't touch us`);
    }
    
    function playerRetreat() {
      alert(`Waving the flag. SMH!! Man you aren't our chosen one.`);
    
    }
    
    function alertStatus (){
      alert(`The USS Schwarzenegger has a HP of ${playerSpaceship.hitPoints} left`)
    }

    function alertWin() {
      alert(`Victory for Planet Earth. All thanks to Captian ${name}`);
    }
    
    // function alertLose() {
    //   alert(`You lose. It doesn't mean you're a loser, but... oh, wait... yes it does.`);
    // }





///
  function playerAttack() {
    if (Math.random() < playerSpaceship.accuracy) {
      alienShips[0].hull -= playerSpaceship.firepower;
    }else if (alienShips[0].hull <= 0) {
        alienShips.shift(); // removes first alien from array
        console.log(alienShips)
    } else if (alienShips.length >= 1) {
          alertContinue();
          boxAction();
    } else if (alienShips.length <= 0) {
          alertWin();
    } else if (alienShips.length !== 1) {
        alienAttack();
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
        {
      } else {
      alertAvoid()
      alertStatus();
      playerAttack();
    }
  }
  
