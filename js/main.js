const $getHours = document.getElementById("hours");
const $getMinutes = document.getElementById("minutes");
const $getSeconds = document.getElementById("seconds");

const watch = setInterval(() => {
  let dateToday = new Date();
  let hour = dateToday.getHours();
  let minutes = dateToday.getMinutes();
  let seconds = dateToday.getSeconds();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  $getHours.textContent = hour;
  $getMinutes.textContent = minutes;
  $getSeconds.textContent = seconds;
});
