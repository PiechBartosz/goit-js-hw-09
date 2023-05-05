const timerFields = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const startButton = document.querySelector('[data-start]');
startButton.disabled = true;
let countdownInterval = null;
let selectedDate = null;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      alert('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
});

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  countdownInterval = setInterval(() => {
    const timeLeft = selectedDate - new Date();
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      alert('Time is up!');
    } else {
      const time = convertMs(timeLeft);
      timerFields.days.textContent = addLeadingZero(time.days);
      timerFields.hours.textContent = addLeadingZero(time.hours);
      timerFields.minutes.textContent = addLeadingZero(time.minutes);
      timerFields.seconds.textContent = addLeadingZero(time.seconds);
    }
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
