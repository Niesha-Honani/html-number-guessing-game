console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM
let guess = 0;
let guess_list = [];
let answer = getRandomNumber();

function getRandomNumber(){
    let min = 1;
    let max = 100;
    return Math.floor(Math.random()* (max-min + 1)) + min;
}

function number_guess(){
    const number_input = document.getElementById("guess").value;
    guess = Number(number_input);

    const isNewGuess = push_number_to_guess_list();
    if(!isNewGuess){
        return;
    }
    display_guess(guess);
    winning_number();
}
function display_guess(n){
    document.getElementById("current-guess").innerHTML = `Your current guess: ${n} and answer: ${answer}`;
}
function numbers_guessed(){
    document.getElementById("hidden-card").innerHTML = `Guesses so far: ${guess_list}`;
}
function winning_number(){
    currentGuess = document.getElementById("current-guess");
    const hidden_card = document.getElementById("hidden-card");

    if(guess === answer){
        hidden_card.innerHTML = `You Win!`;
        new_game_btn();
    }
    else if(guess < answer){
        currentGuess.innerHTML += " Too Low, Try Again."
        numbers_guessed();
    }
    else if(guess > answer){
        currentGuess.innerHTML += " Too High, Try Again."
        numbers_guessed();
    }
}
function push_number_to_guess_list(){
    if(guess_list.includes(guess)){
        current_guess = document.getElementById("current-guess").innerHTML = "You already guessed this number";
        return false;
    }
    else{
        guess_list.push(guess);
        return true;
    }
}
function new_game_btn(){
    const new_game_btn = document.createElement('button');
    new_game_btn.textContent='Play Again';
    new_game_btn.id = 'new_game_btn';
    //event-listener
    new_game_btn.onclick = reset_game;
    //append
    const hidden_card = document.getElementById("hidden-card");
    hidden_card.appendChild(document.createElement('br'));
    hidden_card.appendChild(new_game_btn);
}
function reset_game(){
    answer = getRandomNumber()
    guess_list = [];
    //clear field, screen and hints
    document.getElementById("guess").value="";
    document.getElementById("current-guess").innerHTML="";
    document.getElementById("hidden-card").innerHTML = "";
    const btn = document.getElementById('new_game_button')
    if(btn) btn.remove();
}