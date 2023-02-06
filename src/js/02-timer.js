import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const textEl = document.getElementById('datetime-picker');
const buttonStartEl = document.querySelector('button[data-start]');
const timerEl = document.querySelector('.timer');
const daysEl = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEi = document.querySelector('[data-seconds]');

buttonStartEl.disabled = true;

buttonStartEl.addEventListener('click', onButtonClick);

console.log(textEl);
console.log(buttonStartEl);
console.log(daysEl);
console.log(hours);
console.log(minutesEl);
console.log(secondsEi);
console.log(timerEl);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      buttonStartEl.disabled = true;
    } else {
      buttonStartEl.disabled = false;
    }
    console.log(selectedDates[0]);
  },
};

flatpickr(textEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}

function onButtonClick() {
  timerId = setInterval(() => {
    let counter = new Date(textEl.value) - new Date();
    buttonStartEl.disabled = true;
  });
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
