function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

//Defines our arrays
var words = ["shit", "piss", "fuck", "cunt", "cocksucker", "motherfucker", "tits"];
var wrongLetters = [];
var letterBank = [];
var emptyWord =[];
var guesses = 10;
var index = 0;
var mySound = new sound("images/noisemaker.mp3");
var userGuess = document.getElementById("guess");
var wrongBox = document.getElementById("wrongGuess");
var display = document.getElementById("displayBlank");
var result = document.getElementById("result")
var guess = document.getElementById("chance");
var pictureHTML = document.getElementById("winner");

//defines random word from words array
var randomWord = words[Math.floor(Math.random()*words.length)];

//creates blanks in blank array
for(var i = 0; i < randomWord.length; i++){
    emptyWord.push("_");
}

display.textContent = emptyWord;

function resetGame(x){
    location.reload();
}

//guessing game itself
document.onkeypress = function(event){
    userGuess.textContent = event.key;
    letterBank.push(event.key);
    guess.textContent = guesses;
    //wrong word box
    if(randomWord.indexOf(event.key)===-1){
        wrongLetters.push(event.key);
        wrongBox.textContent = wrongLetters;
        guesses--;
    }
    //blanks filling in
    if(letterBank.indexOf() === -1){
        for(var x = 0; x < randomWord.length; x++){
            index++;
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
            mySound.play();
            switch(randomWord){
                case "piss": pictureHTML.src="images/carlin2.jpg";
                break;
                case "shit": pictureHTML.src="images/carlin3.jpg";
                break;
                case "fuck": pictureHTML.src="images/carlin4.jpg";
                break;
                case "cunt": pictureHTML.src="images/carlin5.jpg";
                break;
                case "tits": pictureHTML.src="images/carlin6.jpg";
                break;
                case "cocksucker": pictureHTML.src="images/carlin7.jpg";
                break;
                case "motherfucker": pictureHTML.src="images/carlin8.jpg";
                break;
            }
            document.addEventListener("keypress", function(e){
                if(e.keyCode == 13){
                    resetGame();
                }
            });
        }
        else if (guesses === 0){
            result.textContent = "You lose! You are a good person.";
            document.addEventListener("keypress", function(e){
                if(e.keyCode == 13){
                    resetGame();
                }
            });
        }
    }
    else{
        console.log("Already typed");
    }
}