//Defines our arrays
var words = ["dog", "cat", "parrot", "goldfish", "hamster", "rabbit"];
var wrongLetters = [];
var answer = [];

//defines random word from words array
var randomWord = words[Math.floor(Math.random()*words.length)];
var splits = randomWord.split("");

var blanks = "_ ";
var displayWord = blanks.repeat(randomWord.length);

//where we want our game todisplay
var userGuess = document.getElementById("guess");
var answerBox = document.getElementById("answer");
var wrongBox = document.getElementById("wrongGuess");
var display = document.getElementById("displayBlank");

display.textContent = displayWord;

//guessing game itself (we need to compare the user input to the random array)
document.onkeydown = function(event){
    userGuess.textContent = event.key;
    wrongLetters.push(event.key);
}
// document.onkeypress = function(input) {
//     if(wrongLetters.indexOf(input.key)===-1){
//         wrongBox.textContent = wrongLetters;
//     }
// }