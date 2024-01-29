let secretNumber = 0;
let score = 0;
let highestRecord = 0;

document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('.score').textContent = 'Score: ' + score;
  secretNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector('.record').textContent = 'Highest Score: ' + 0;
  console.log(secretNumber);
});

document.querySelector('.check-btn').addEventListener('click', function () {
  let inputNumber = document.querySelector('.guess-number').value;
  console.log(inputNumber === secretNumber);
  console.log(secretNumber);
  if (inputNumber == secretNumber) {
    document.querySelector('.message').textContent = 'Congratulations! you win the game';
    if (score > highestRecord) {
      document.querySelector('.record').textContent =
        'Highest Score: ' + score;
    }
    return;
  } else if (inputNumber < secretNumber) {
    document.querySelector('.message').textContent = 'You guess is too small!';
    score++;
  } else {
    document.querySelector('.message').textContent = 'You guess is too large!';
    score++;
  }
  document.querySelector('.score').textContent = 'Score: ' + score;
});

document.querySelector('.again-btn').addEventListener('click', function () {
    score = 0;
    secretNumber = Math.floor(Math.random() * 100 + 1);
    document.querySelector('.score').textContent = 'Score: ' + score;
  });