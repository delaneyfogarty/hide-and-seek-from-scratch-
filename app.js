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



let wins = 0;
let total = 0;

function handleGuess(chosenCup) {
  cupContainer0.src = 'assets/regular-cup.png';
  cupContainer1.src = 'assets/regular-cup.png';
  cupContainer2.src = 'assets/regular-cup.png';

  total++;

  const numberBetweenOneAndThree = Math.floor(Math.random() * 3);

  if (numberBetweenOneAndThree === chosenCup) {
    wins++;
  }
}
const correctCupImgEl = document.getELementById(`cup-${numberBetweenOneAndThree}`); {
  correctCupImgEl.src = 'assets/correct-guess.png';

  winsEl.textContent = wins;
  totalEl.textContent = total;
  lossesEl.textContent = total - wins;
}

cupButton0.addEventListener('click', () => {
  handleGuess(0);
});

cupButton1.addEventListener('click', () => {
  handleGuess(1);
});

cupButton2.addEventListener('click', () => {
  handleGuess(2);
});