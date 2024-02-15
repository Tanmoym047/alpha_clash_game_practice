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
function continueGame(){
    // step-1: generate a random alphabet
     const alphabet = getARandomAlphabet();
    //  set randomly generated alphabet on the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}