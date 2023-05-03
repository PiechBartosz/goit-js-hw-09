const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

startButton.addEventListener('click', () => {
  intervalId = setInterval(changeBackgroundColor, 1000);
  startButton.disabled = true;
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
  startButton.disabled = false;
});
