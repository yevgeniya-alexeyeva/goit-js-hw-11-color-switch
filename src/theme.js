import colors from './colors';

const ref = {
  body: document.querySelector('body'),
  buttonStart: document.querySelector('button[data-action="start"]'),
  buttonStop: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColorTheme() {
  const timerId = setInterval(() => {
    ref.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);

  ref.buttonStart.removeEventListener('click', changeColorTheme);

  ref.buttonStop.addEventListener('click', () => {
    clearInterval(timerId);
    ref.buttonStart.addEventListener('click', changeColorTheme);
  });
}

ref.buttonStart.addEventListener('click', changeColorTheme);
