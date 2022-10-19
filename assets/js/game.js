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
   
// fight function
var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
          // confirm player wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
          // if yes (true), leave fight
          if (confirmSkip) {
            window.alert(playerName + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
          }
        }
}
        // Hit the enemy
        enemyHealth = enemyHealth - playerAttack;
        // Log result if attack 
        console.log(playerName + " attacked " + enemyNames + ". " ,enemyNames + " now has " + enemyHealth + " health remaining.");
        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");
        }
        else {
            window.alert (enemyName + " still has " + enemyHealth + " health left.");
        }
        // Enemy attacks player.
        playerHealth = playerHealth - enemyAttack;
        // Log a result of enemys attack.
        console.log(enemyNames + " attacked " + playerName + ". " ,playerName + " now has " + playerHealth + " health ramaining.");
        // Check player's health.
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert (playerName + " still has " + playerHealth + " heath left.");
        }
    
        
    




       //my code 


    // // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");
    // // ask player if he wants to fight
    // var promptFight= window.prompt("Would you like to FIGHT or SKIP this battle?");
    // // if player choses to fight, then fight
    //     if (promptFight === "fight" || promptFight === "FIGHT") {
    //         // FOR loop 
    //         // ??? (redefined fight)
    //         var fight = function(enemyName) {
    //         for(var i = 0; i < enemyNames.length; i++) {
    //             fight(enemyNames[i]);
    //            // debugger;
    //             //Fight with enemy robots
    //             while(enemyHealth > 0 ) {