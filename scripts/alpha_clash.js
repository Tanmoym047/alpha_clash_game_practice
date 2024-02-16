// function play(){
//     // step 1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     console.log(homeSection.classList);
//     homeSection.classList.add('hidden'); 

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     console.log((playgroundSection.classList));
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    // console.log('player pressed', event.key);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // stop game if pressed esc
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log(('point'));

        const currentScore = getTextElementValueById('current-score');
        console.log((currentScore));
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore)

        // // update score:
        // // 1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // // 2. increase the score by 1
        // const newScore = currentScore + 1;
        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;



        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);
        if (updatedLife === 0) {
            console.log('over');
            gameOver();
        }


        // step 1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step 2: reduce the life count
        // const newLife = currentLife - 1;
        // // step 3: display the updated life count
        // currentLifeElement.innerText = newLife;

    }

}
// capture keyboard key press...callback function
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();

    //  set randomly generated alphabet on the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    // hide everything, show only playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    // reset score & life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('game-score', lastScore);

    // clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);

}