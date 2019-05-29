//Defines our arrays
var words = ["dog", "cat", "parrot", "goldfish", "hamster", "rabbit"];
var wrong = [];
var answer = [];

//defines random word from words array
var randomWord = words[Math.floor(Math.random()*words.length)];

//where we want our game todisplay
var userGuess = document.getElementById("guess");
var answerBox = document.getElementById("answer");
var wrongBox = document.getElementById("wrongGuess");

//adds spaces to answer array
for(var x = 0; x < randomWord.length; x++) {
    answer[x] = "_";
}

var remains = randomWord.length(); // makes a variable the length of the random word

//guessing game itself (this needs some work)
document.onkeyup = function(event){//this makes the keys work (I think)
    while(remains > 0){//this should mean "while random word length variable is greater than zero..."
        var guess = event.key; //makes the key event a variable called guess
        answerBox.textContent = answer.join(" "); //I want the answer to show
        userGuess.textContent = event.key;//I want the key pressed to show
        for(var y = 0; y < randomWord.length; y++) {//for as long as y is less than the length of the random word...
            if(guess === randomWord[y]){//if the key pressed is one of the letters in the random word
                answer[y] = guess;//the letter should show up in the answer
                remains--;//the random word length variable defined earlier drops by 1
            }
            else{
                wrong.push(guess); //adds the key press to the array called wrong
                wrongBox.textContent = wrong;//I want the wrong answers to show
            }
        }
    }
}