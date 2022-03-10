// import functions and grab DOM elements
const cupButton0 = document.getElementById('button-0');
const cupButton1 = document.getElementById('button-1');
const cupButton2 = document.getElementById('button-2');

const cupContainer0 = document.getElementById('cup-0');
const cupContainer1 = document.getElementById('cup-1');
const cupContainer2 = document.getElementById('cup-2');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');



let winsCount = 0;
let totalCount = 0;

function userGuess(chosenCup) {
    cupContainer0.src = './assets/regular-cup.png';
    cupContainer1.src = './assets/regular-cup.png';
    cupContainer2.src = './assets/regular-cup.png';

    totalCount++;

    const numberBetweenZeroAndThree = Math.floor(Math.random() * 3);

    if (chosenCup === numberBetweenZeroAndThree) {
        winsCount++;
    }

    const correctCupImgEl = document.getElementById(`cup-${numberBetweenZeroAndThree}`);
    correctCupImgEl.src = './assets/correct-guess.png';

    winsEl.textContent = winsCount;
    totalEl.textContent = totalCount;
    lossesEl.textContent = totalCount - winsCount;
}

cupButton0.addEventListener('click', () => {
    userGuess(0);
});

cupButton1.addEventListener('click', () => {
    userGuess(1);
});

cupButton2.addEventListener('click', () => {
    userGuess(2);
});