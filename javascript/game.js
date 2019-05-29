var words = ["dog", "cat", "parrot", "goldfish", "hamster", "rabbit"];
var randomWord = words[Math.floor(Math.random()*words.length)];
var userGuess = document.getElementById("guess");
var answerBox = document.getElementById("answer");
var wrongBox = document.getElementById("wrongGuess");
var wrong = [];
var answer = [];
for(var x = 0; x < randomWord.length; x++) {
    answer[x] = "_";
}

while(randomWord.length > 0){
    document.onkeyup = function(event){
        var guess = event.key;
        answerBox.textContent = answer;
        userGuess.textContent = event.key;
        for(var y = 0; y < randomWord.length; y++) {
            if(randomWord[y] === guess){
                answer[y] = guess;
                remains--;
            }
            else{
                wrong.push(guess);
                wrongBox.textContent = wrong;
            }
        }
    }
}