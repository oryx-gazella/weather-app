function getCurrentTime() {
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
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let displayTime = document.querySelector(`li#currentTime`);
  displayTime.innerHTML = `${day} ${hours}:${minutes}`;
}

function searchCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
  let units = "metric";
  let apiKey = "63cc099b054d2957f1a9f24cae5778b8";
  let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather`;
  let apiUrl = `${apiEndpoint}?q=${cityInput.value}`;
  axios.get(`${apiUrl}&appid=${apiKey}&units=${units}`).then(showTemperature);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(`Temperature: ${temperature}`);
  let searchForm = document.querySelector("#search-form");
  searchForm.innerHTML = `The temperature is currently ${temperature}°C`;
}

getCurrentTime();
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
