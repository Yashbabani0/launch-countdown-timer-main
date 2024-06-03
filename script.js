// Display Time
const displayDays = document.querySelector(".days");
const displayHours = document.querySelector(".hours");
const displayMinutes = document.querySelector(".minutes");
const displaySeconds = document.querySelector(".seconds");

// Initial Time
let initialTime = 14 * 24 * 60 * 60;

// Calculate Time
function calculateTime(time) {
  const days = Math.floor(time / (24 * 60 * 60));
  const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = time % 60;

  return { days, hours, minutes, seconds };
}

// Update Time
function updateTime() {
  if (initialTime > 0) {
    initialTime--; // Decrement the initial time

    const { days, hours, minutes, seconds } = calculateTime(initialTime);

    displayDays.textContent = days;
    displayHours.textContent = hours;
    displayMinutes.textContent = minutes;
    displaySeconds.textContent = seconds;
  } else {
    clearInterval(countdownInterval);
  }
}

// Initial display
updateTime();

// Update the countdown every second
const countdownInterval = setInterval(updateTime, 1000);