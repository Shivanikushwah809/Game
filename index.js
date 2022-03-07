let computerGuess;
let userGuess = [];
let userGussesUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputbox")

const num = () => {
    computerGuess = Math.floor(Math.random() * 100);
    // console.log(computerGuess)
    document.getElementById("newgameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";

};


const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}
const startNewGame = () =>{
    document.getElementById("newgameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled",true)

}
const newGameBegin =()=>{
    window.location.reload();
}

const compareGusess = () => {
    const userNumber = Number(document.getElementById("inputbox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("Guesses").innerHTML = userGuess;



   if(userGuess.length < maxGusses) {
        if (userNumber > computerGuess) {
            userGussesUpdate.innerHTML = "**your gusses is high**"
            userNumberUpdate.value = " ";
        }
        else if (userNumber < computerGuess) {
            userGussesUpdate.innerHTML = "**your gusses is low**"
            userNumberUpdate.value = " ";

        }
        else {
            userGussesUpdate.innerHTML = "**It's Correct ! **"
            userNumberUpdate.value = " ";
            startNewGame();

        }
    }
    else{
        if (userNumber > computerGuess) {
            userGussesUpdate.innerHTML = `**you loose !! correct answer was ${computerGuess}**`
            userNumberUpdate.value = " ";
            startNewGame();
        }
        else if (userNumber < computerGuess) {
            userGussesUpdate.innerHTML = `**you loose !! correct answe was ${computerGuess}**`
            userNumberUpdate.value = " ";
            startNewGame();


        }
        else {
            userGussesUpdate.innerHTML = "**It's Correct ! **"
            userNumberUpdate.value = " ";
            startNewGame();


        }

    }
    document.getElementById("attemps").innerHTML = userGuess.length;

}

const easyMode = () => {
    maxGusses = 10;
    startGame();
}

const hardMode = () => {
    maxGusses = 5;

    startGame();
}
