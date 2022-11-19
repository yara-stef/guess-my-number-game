'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const colorStyle = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const styleWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    if (!guess) {
        displayMessage('No number!⛔');
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!🏆');

        
        displayNumber(secretNumber);

        colorStyle('#60b347');

        styleWidth('30rem');

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!📈' : 'Too low!📉');
            score--;
            displayScore(score);
        } else {
            displayMessage('You lost the game 💥');
            displayScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
    displayScore(score);
    displayMessage('Start guessing...');
  colorStyle('#222');

  styleWidth('15rem');
  displayNumber('?');
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});