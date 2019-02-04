// Declaring the variables for the game//
//Variable with array that has all the letters the player and computer can choose from//
var gameChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Variables to keep track of score//
var wins = 1;
var losses = 1;
var guessLeft = 8;

//Function to grab the HTML element by ID//
function getElementbyId(element) {
    var information = document.getElementById(element);
    return information;
}

// Code for recognizing the letter key presses//
document.onkeyup = function (event) {

    // Variable for the computer to choose a random letter//
    var gameGuessingNumber = Math.floor(Math.random() * gameChoices.length),

        // The computer's guess //
        randomGuess = gameChoices[gameGuessingNumber],

        information = document.createTextNode(event.key + ", ");

    //The player's guess//
    getElementbyId("yourGuess").appendChild(information);

    // If statement to check if the player's guess was right// 
    if (randomGuess === event.key) {
        getElementbyId("wins").textContent = "Wins: " + wins++;


        // adds point if player guessed right // 
        if (wins >= 1) {

            getElementbyId("guessesLeft").textContent = "Guess Left: " + 9;
            guessLeft = 8;

            //when player guesses the letter, alert player//
            alert("You won!");
        }

    }



    else {
        //if player guesses the wrong letter//
        getElementbyId("guessesLeft").textContent = "Guess Left: " + guessLeft--;


        if (guessLeft <= -1) {


            getElementbyId("losses").textContent = "Loss: " + losses++;
            //When player loses, alert player//
            alert("You Lost! Try Again");

            //clears score if you run out of guesses//
            getElementbyId("guessesLeft").textContent = "Guess Left: " + 9;
            guessLeft = 8;



        }

    }

}

