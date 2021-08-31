var addRandom = 0
function rollDice(){
    var randomNum = Math.floor(Math.random()*6+1); // generate random number 1 to 6

    document.getElementById("display").innerHTML = randomNum
    
    addRandom = addRandom + randomNum // Add the numbers
    

    if (addRandom % 7 == 0){ // check addRandom is multiple number of 7
        alert(addRandom+" is a Multiple number of 7")
        addRandom = 0
    }
    if (addRandom  >= 100){ 
        alert("You win ..Congratulations")
    }
    document.getElementById("totalDisplay").innerHTML = addRandom

}