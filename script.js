 'use strict';
// variables
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let Score = 20;
let highScore = 0;

// get check btn
const checkBtn = document.querySelector('.check');
const ResetBtn = document.querySelector('.again');
//function to display a message and multi use selectors
const multiUse = function (Selector, Message) {
  document.querySelector(Selector).textContent = Message;
};


checkBtn.addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    multiUse('.message', '🚫 No Number');
  } else if (guessNumber === SecretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    multiUse('.number', SecretNumber);
    multiUse('.message', '🎉 Correct Number');
    if (Score > highScore) {
      highScore = Score;
    }
    multiUse('.highscore', highScore);
  } else if (guessNumber !== SecretNumber) {
    multiUse(
      '.message',
      guessNumber > SecretNumber ? '📉 too high' : '📈 to low'
    );
    Score--;
    document.querySelector('.score').textContent = Score;
    if (Score < 1) {
      multiUse('.message', '🥴 you lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ef3737';
    }
    console.log(Score);
  }
});

ResetBtn.addEventListener('click', function () {
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  multiUse('.number', '?');
  document.querySelector('.guess').value = '';
  multiUse('.message', 'Start guessing...');
  multiUse('.score', 20);

  Score = 20;
});
