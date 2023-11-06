function searchCity(event) {
  event.preventDefault();

  let searchBar = document.querySelector("#search-input");
  let interurban = document.querySelector("#interurban");
  interurban.innerHTML = `${searchBar.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

//
function clickTemperature(event) {
  event.preventDefault;
  let degree = document.querySelector("#degree");
  degree.innerHTML = `70`;
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", clickTemperature);

function press(event) {
  event.preventDefault;
  let degree = document.querySelector("#degree");
  degree.innerHTML = `16`;
}

let celcius = document.querySelector("#celcius");
celcius.addEventListener("click", press);

//
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let hours = now.getHours();
let minutes = now.getMinutes();

let newDate = document.querySelector("#weather");
weather.innerHTML = `${day} ${hours}:${minutes}`;
