console.log("This is clock");

function updateClock() {
  // Get the current date
  let currentTime = new Date();

  //Extract hour, minute and seconds from the date
  let currentHour = currentTime.getHours();
  let currentMinuts = currentTime.getUTCMinutes();
  let currentSeconds = currentTime.getSeconds();

  // Pad 0 if minute or second is less than 10  (single digit)

  currentMinuts = (currentMinuts < 10 ? "0": "") + currentMinuts;
  currenSeconds = (currentSeconds < 10 ? "0": "") + currentSeconds;

  // Convert Railway clock to AM/PM clock

  currentHour = currentHour > 12 ? currentHour - 12 : currentHour;
  currentHour = currentHour == 0 ? 12 : currentHour;

  // Choose AM/PM as per the time of the day

  let timeOfDay = currentHour < 12 ? "AM" : "PM";

  // Prepare the time string from hour, minute and seconds

  let currentTimeStr =
    currentHour +
    ":" +
    ":" +
    currentMinuts +
    ":" +
    currentSeconds +
    " " +
    timeOfDay;

  // Insert the time string inside the DOM
  document.getElementById("clock").innerHTML = currentTimeStr;
}
