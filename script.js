'use strict';
// variables
let SecretNumber = Math.trunc(Math.random() * 30) + 1;
let Score = 30;
let highScore = 0;
// get check btn
const checkBtn = document.querySelector('.check');
const ResetBtn = document.querySelector('.again');
//functions
const multiUse = function (Selector, Message) {
  document.querySelector(Selector).textContent = Message;
};
const backGrColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

checkBtn.addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    backGrColor('#a1a105');
    multiUse('.message', '🚫 No Number');
  } else if (guessNumber === SecretNumber) {
    backGrColor('#60b347');
    multiUse('.number', SecretNumber);
    multiUse('.message', '🎉 Correct Number');
    if (Score > highScore) {
      highScore = Score;
    }
    multiUse('.highscore', highScore);
  } else if (guessNumber !== SecretNumber) {
    backGrColor('#222');
    multiUse(
      '.message',
      guessNumber > SecretNumber ? '📉 too high' : '📈 to low'
    );
    Score--;
    multiUse('.score', Score);
    if (Score < 1) {
      multiUse('.message', '🥴 you lost the game');
      multiUse('.score', 0);
      backGrColor('#ef3737');
    }
  }
});
ResetBtn.addEventListener('click', function () {
  SecretNumber = Math.trunc(Math.random() * 30) + 1;
  backGrColor('#222');
  multiUse('.number', '?');
  document.querySelector('.guess').value = '';
  multiUse('.message', 'Start guessing...');
  multiUse('.score', 30);
  Score = 30;
});
