// // declaring player stats with variable object 

const playerSpaceship = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7
  };
  
class azanAliens {
    constructor() {
        this.hull = mixedHull();
        this.firepower = mixedFirepower(); //making a function call within a constructor 
        this.accuracy = mixedAccuracy();
    }
}
  
  // attributes given for player is converted to a function
  // used 
  function mixedHull() {
    let hullRange = [3, 4, 5, 6];
    let hullStrength = hullRange[Math.floor(Math.random() * hullRange.length)];
    return hullStrength;
  }
  function mixedFirepower() {
    let firepowerRange = [2, 3, 4];
    let firepowerStrength = firepowerRange[Math.floor(Math.random() * firepowerRange.length)];
    return firepowerStrength;
  }
  function mixedAccuracy() {
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
  
//   function welcomeFunction(){
//     let name = prompt('What is your name?')
//       if (person != null){
//         document.getElementById("demo").innerHTML = `Welcome to Space Battle: Galaxy Wars. We need your help Captian ${name}. The aliens of the Planet Azan have attacked Earth and we need your help. Defend our home!`;

 
 function startGame() {
   setTimeout(function() {alert("Welcome to Space Battle: Galaxy Wars. We need your help Captian. The aliens of the Planet Azan have attacked Earth and we need your help. Defend our home!"); }, 2000);
   promptAction();
  }
  startGame();

 
function promptAction() {
if (playerSpaceship.hull > 0) {
let playerCommand = prompt(`The enemy is among us. What shall we do you want to do?`) `attack or retreat`;
    if (playerCommand === "attack"|| playerCommand === "Attack" || playerCommand === "a" || playerCommand ==="A") {
        playerAttack();
        console.log(playerCommand)
     }else if (playerCommand === "retreat"|| playerCommand === "Retreat" || playerCommand === "a"|| playerCommand === "R") {
        sayRetreat();
        loseGame();
        console.log(playerCommand)
       
      } else {
        alert(`There is no time for games captian. GET IT TOGETHER!!! WE NEED A VALID COMMAND!!`  );
        promptAction();
    }
  }
}


/// calls for functions within conditionals
    function sayContinue() {
      alert(`Nice Job!!! One step to saving Earth. There are: ${alienShips.length} Azan alien ships left`);
    }
      // player withstand attack revealing remaining HP
    function saySurvived() {
      alert(`The powers of the force were definitely behind us. How in the world did We survive that. ${alienShips[0].firepower} points taken away`);
    }
    // player dead no more HP
    function sayDefeat() {
      alert(`RIP Captiain ${name}, it was a hard fought battle`);
    }
    
    // if player missed the attack this would be called
    function sayMissed() {
      alert("Poor Vision, We missed target.");
    }
    // if player avoids any damage avoid  this will be called
    function sayAvoid() {
      alert("HAHAHA!!!!! Great Evualness!! They couldn't touch us");
    }
    // if you player chooses to quick no longer battle this will call
    function sayRetreat() {
      alert("Waving the flag. SMH!! Man you aren't our chosen one.");
    
    }
    // after every exchange from aliens attack this will be called
    function sayStatus (){
      alert(`The USS Schwarzenegger has a HP of ${playerSpaceship.hull} left`)
    }
    // if player defeats all 6 aliens this will be called
    function saytWin() {
      alert(`Victory for Planet Earth. All thanks to Captian ${name}`);
    }
    
    function sayLost() {
      alert("What a disappointment");
    }

    function playerAttack() {
      if (Math.random() < playerSpaceship.accuracy) {
       alienShips[0].hull -= playerSpaceship.firepower;
       if (alienShips[0].hull <= 0) {
             alienShips.shift(); // removes first alien from array
           console.log(alienShips)
        } else if (alienShips.length >= 1) {
             sayContinue();
             promptAction();
        } else if  {
             sayWin();
             }
        } else if  {
             alienAttack();
             }
        } else {
            sayMissed();
            alienAttack();
       }
     }
     //function for alien attack (move) on player and its calls using if statements (conditionals)
  function alienAttack() {
    if (Math.random() < accuracy()) {
        playerSpaceship.hull -= alienShips[0].firepower;
      //if this conditional is met: player ship is destoryed no HP left GAME OVER
        if (playerSpaceship.hull <= 0) {
        sayDefeat();
          sayLose();
        //if this conditional is met: player ship surivived attack with HP left
        } else {
            saySurvived();
            sayStatus();
            playerAttack();
        }
        //if this conditional is met: attacked by alien was missed HP stays level no change in points
      } else {          
           sayAvoid()
           sayStatus();
           sayAttack();
         }
       }

