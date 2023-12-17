export default class View {
  constructor() {
    this.cacheElements();
  }

  cacheElements = () => {
    this.location = document.querySelector(".location");
    this.date = document.querySelector(".date");
    this.avgTemp = document.querySelector(".avg-temp-deg");
    this.minTemp = document.querySelector(".min-temp-deg");
    this.maxTemp = document.querySelector(".max-temp-deg");
    this.sunrise = document.querySelector(".sunrise");
    this.sunset = document.querySelector(".sunset");
    this.weatherDescription = document.querySelector(".weather-description");
    this.cards = document.querySelector(".cards");
    this.toggleBtn = document.querySelector(".toggle-temperature");
  };

  render = (weatherObject, measurement) => {
    this.location.textContent = weatherObject.location;
    this.date.textContent = weatherObject.date;
    this.sunrise.textContent = `Sunrise: ${weatherObject.sunrise}`;
    this.sunset.textContent = `Sunset: ${weatherObject.sunset}`;

    if (measurement === 0) {
      this.avgTemp.textContent = `${weatherObject.avgtempC} °C`;
      this.maxTemp.textContent = `${weatherObject.maxtempC} °C`;
      this.minTemp.textContent = `${weatherObject.mintempC} °C`;
    } else if (measurement === 1) {
      this.avgTemp.textContent = `${weatherObject.avgtempF} °F`;
      this.maxTemp.textContent = `${weatherObject.maxtempF} °F`;
      this.minTemp.textContent = `${weatherObject.mintempF} °F`;
    }
  };

  renderHourlyWeather = (weatherObject, measurement) => {
    weatherObject.hourlyWeather.forEach((hour) => {
      if (measurement === 0) {
        const weatherCardHTML = this.createWeatherCard(
          hour.hour,
          hour.tempC,
          hour.chanceOfRain,
          "°C"
        );
        this.cards.insertAdjacentHTML("beforeend", weatherCardHTML);
      } else if (measurement === 1) {
        const weatherCardHTML = this.createWeatherCard(
          hour.hour,
          hour.chanceOfRain * 100,
          hour.tempF,
          "°F"
        );
        this.cards.appendChild(weatherCardHTML);
      }
    });
  };

  createWeatherCard = (time, temperature, rainChance, measurement) => {
    const cardHtml = `
  <ul class="card">
    <li class="time">${time}</li>
    <li class="temp">${temperature} ${measurement}</li>
    <li class="rainchance">Rain: ${rainChance}%</li>
  </ul>`;

    return cardHtml;
  };

  bindToggleMeasurement = (handler) => {
    this.toggleBtn.addEventListener("click", (event) => {
      // code here
    });
  };
}
