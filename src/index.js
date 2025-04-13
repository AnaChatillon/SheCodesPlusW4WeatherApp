//Challenge 1 - Replace the city without reloading
function citySearch(event) {
  event.preventDefault();
  let searchCityInput = document.querySelector("#search-city-input");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchCityInput.value}`;
}

let form = document.querySelector("#city-search-form");
form.addEventListener("submit", citySearch);
form.addEventListener("keyofenter", citySearch);

//Challenge 2 - Show the curruent time (Week day + hour & minutes)

let now = new Date();
let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = week[now.getDay()];
let minutes = now.getMinutes().toString().padStart(2, "0");

let currentTime = document.querySelector(".currentTime");
currentTime.innerHTML = `${day} ${now.getHours()}:${minutes}`;
