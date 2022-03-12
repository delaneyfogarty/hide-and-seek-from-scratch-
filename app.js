// import functions and grab DOM elements
const cupButton0 = document.getElementById('button-0');
const cupButton1 = document.getElementById('button-1');
const cupButton2 = document.getElementById('button-2');

const cupContainer0 = document.getElementById('cup0-container');
const cupContainer1 = document.getElementById('cup1-container');
const cupContainer2 = document.getElementById('cup2-container');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

let winsCount = 0;
let totalCount = 0;

resetStyles();

function userGuess(chosenCup, correctSpot) {
    resetStyles();

    totalCount++;

    let correctCupEl = document.getElementById(correctSpot + '-container');
    correctCupEl.src = ('./assets/correct-guess.png');

    if (chosenCup === correctSpot) {
        winsCount++;
    }
    totals();
}

cupButton0.addEventListener('click', () => {
    const correctSpot = getRandomItem();
    userGuess('cup0-container', correctSpot);
});

cupButton1.addEventListener('click', () => {
    const correctSpot = getRandomItem();
    userGuess('cup1-container', correctSpot);
});

cupButton2.addEventListener('click', () => {
    const correctSpot = getRandomItem();
    userGuess('cup2-container', correctSpot);
});

function resetStyles() {
    cupContainer0.src = './assets/regular-cup.png';
    cupContainer1.src = './assets/regular-cup.png';
    cupContainer2.src = './assets/regular-cup.png';
}

function getRandomItem() {
    const chosenItem = [
        'cup0',
        'cup1',
        'cup2'
    ];
    const index = Math.floor(Math.random() * chosenItem.length);
    return chosenItem[index];
}

function totals() {
    winsEl.textContent = winsCount;
    totalEl.textContent = totalCount;
    lossesEl.textContent = totalCount - winsCount;
}