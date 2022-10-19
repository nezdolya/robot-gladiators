// Game States
// WIN - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// LOSE - Player's robot health is zero or less

var playerName = window.prompt("What is yout robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Array for enemy names
var enemyNames = ["Roborto", "Any Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


   
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    // ask player if he wants to fight
    var promptFight= window.prompt("Would you like to FIGHT or SKIP this battle?");
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        for(var i = 0; i < enemyNames.length; i++) {
    
        // Subtract the value of 'playerAttack from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a result message to the console so we know that it worker.
        console.log(playerName + " attacked " + enemyNames[i] + ". " ,enemyNames[i] + " now has " + enemyHealth + " health remaining.");
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames[i] + " has died!");
        }
        else {
            window.alert (enemyNames[i] + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of 'enemyAttack' from the value pf 'playerHealth' and use that result to update the value in the 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(enemyNames[i] + " attacked " + playerName + ". " ,playerName + " now has " + playerHealth + " health ramaining.");
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert (playerName + " still has " + playerHealth + " heath left.");
        }
    }
    // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has choosen to skip the fight!");
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave the fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip the fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
       }