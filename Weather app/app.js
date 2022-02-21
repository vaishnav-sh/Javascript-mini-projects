// This project uses a free RESTful API provided by OpenWeatherMap

import WEATHER_API_KEY from "./apikey.js";

window.addEventListener("DOMContentLoaded", () => {
  fetchWeather("Dubai");
});

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = document.getElementById("user-input").value;
  fetchWeather(city);
});

async function fetchWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
  );
  const data = await response.json();

  // sets the place and temperature in celsuis
  document.querySelector("#place").innerText = data["name"];
  document.querySelector(".temp").innerText = `${Math.ceil(data["main"]["temp"])}°C`;

  // sets the description of the weather with the suitable icon
  let description = document.querySelector(".description");
  description.innerText = data["weather"][0]["main"];
  let icon = document.createElement("img");
  icon.classList.add("desc-icon");
  icon.src = `http://openweathermap.org/img/wn/${data["weather"][0]["icon"]}@2x.png`;

  description.appendChild(icon);

  document.querySelector(".humidity").innerText = `Humidity: ${data["main"]["humidity"]}%`;
  document.querySelector(".wind").innerText = `Wind speed: ${data["wind"]["speed"]} kmph`;
}
