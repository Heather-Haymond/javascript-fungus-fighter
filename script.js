// State Variables can be declared outside of the onReady
let freakyFungusHP = 100;
let myPlayerAP = 100;

// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()

function attackArcaneScepter(event) {
    const apCost = 12;
    const hpDamage = 14;
} if (myPlayerAP >= apCost) {
    // If enough AP, update AP and enemy HP
    updatePlayerAP(apCost);
    updateEnemyHP(hpDamage);
} else {
    console.log("Not enough AP to perform Arcane Scepter attack!");
}