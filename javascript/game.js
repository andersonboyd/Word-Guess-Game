//Defines our arrays
var words = ["dog", "cat", "parrot", "goldfish", "hamster", "rabbit"];
var wrongLetters = [];
var letterBank = [];
var emptyWord =[];
var guesses = 10;
var userGuess = document.getElementById("guess");
var wrongBox = document.getElementById("wrongGuess");
var display = document.getElementById("displayBlank");

//defines random word from words array
var randomWord = words[Math.floor(Math.random()*words.length)];

//creates blanks in blank array
for(var i = 0; i < randomWord.length; i++){
    emptyWord.push("_");
}

display.textContent = emptyWord;

//guessing game itself (we need to compare the user input to the random array)
document.onkeypress = function(event){
    userGuess.textContent = event.key;
    letterBank.push(event.key);
    if(randomWord.indexOf(event.key)===-1){
        wrongLetters.push(event.key);
        wrongBox.textContent = wrongLetters;
    }
    if(letterBank.indexOf() === -1){
        for(var x = 0; x < randomWord.length; x++){
            if(randomWord[x] === event.key){
                emptyWord[x] = event.key;
                display.textContent = emptyWord;
            }
            else {
                console.log("Not in array at input")
            }
        }
        guesses--;
        if(emptyWord.indexOf("_") === -1){
            console.log("Winner!");
        }
        else if (guesses === 0){
            console.log("Loser!");
        }
    }
    else{
        console.log("Already typed");
    }
}