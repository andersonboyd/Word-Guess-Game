//Defines our arrays
var words = ["shit", "piss", "fuck", "cunt", "cocksucker", "motherfucker", "tits"];
var wrongLetters = [];
var letterBank = [];
var emptyWord =[];
var guesses = 10;
var userGuess = document.getElementById("guess");
var wrongBox = document.getElementById("wrongGuess");
var display = document.getElementById("displayBlank");
var result = document.getElementById("result")
var guess = document.getElementById("chance");

//defines random word from words array
var randomWord = words[Math.floor(Math.random()*words.length)];

//creates blanks in blank array
for(var i = 0; i < randomWord.length; i++){
    emptyWord.push("_");
}

display.textContent = emptyWord;

//guessing game itself
document.onkeypress = function(event){
    userGuess.textContent = event.key;
    letterBank.push(event.key);
    guess.textContent = guesses;
    if(randomWord.indexOf(event.key)===-1){
        wrongLetters.push(event.key);
        wrongBox.textContent = wrongLetters;
        guesses--;
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
        if((emptyWord.indexOf("_") === -1)&&(guesses !== 0)){
            result.textContent = "Winner! Do you kiss your mother with that mouth?";
        }
        else if (guesses === 0){
            result.textContent = "You lose! You are a good person.";
        }
    }
    else{
        console.log("Already typed");
    }
}