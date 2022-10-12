//  
// Script - script.js
// author - Jamal
// date - 11 octobar 2022

// USED TO COUNT CHARACTERS
function count() {
    // GETTING THE VALUE FROM THE ELEMENTS ID AND SAVING IT IN TOTAL
    let total = document.getElementById("text").value;
    // REMOVING BLANK SPACE
    total = total.replace(/\s/g, '');
    // SENDING THE LENGTH OF CHARACTER TO THE ELEMENT 
    document.getElementById("total").innerHTML = total.length;
}