const buttonStartEl = document.querySelector('button[data-start]');
const buttonStopEl = document.querySelector('button[data-stop]');
buttonStopEl.disabled = true;
const COLOR_INTERVAL = 1000;
let timerId = null;

console.log(buttonStartEl);
console.log(buttonStopEl);

buttonStartEl.addEventListener('click', onButtonStartClick);
buttonStopEl.addEventListener('click', onButtonStopClick);

function onButtonStartClick() {
  buttonStartEl.disabled = true;
  buttonStopEl.disabled = false;

  onBodyColor();

  timerId = setInterval(onBodyColor, COLOR_INTERVAL);
}

function onButtonStopClick() {
  clearInterval(timerId);
  buttonStartEl.disabled = false;
  buttonStopEl.disabled = true;
}

function onBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
