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
  };

  render = (weatherObject, measurement) => {
    console.log(weatherObject);
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

  /* static bindSwitchDay = (handler) => {
    const daysParent = document.querySelector(".upcoming-days");
    const days = daysParent.querySelectorAll("div");
    days.forEach((day) => {
      day.addEventListener("click", (event) => {
        // removes the selected class from list item
        days.forEach(newDay => {
          newDay.classList.remove("selected", newDay.classList.contains("selected"));
        })
        
        event.target.classList.toggle(
          "selected",
          !event.target.classList.contains("selected"),
        );
        const { id } = event.target;
        handler(id);
      });
    });
  } */
}
