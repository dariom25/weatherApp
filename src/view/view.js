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
    this.sunrise = document.querySelector(".sunsrise");
    this.sunset = document.querySelector(".sunset");
    this.weatherDescription = document.querySelector(".weather-description");
  };

  render = (weatherObject, measurement) => {
    if ((measurement === 0)) {
      this.location.textContent = weatherObject.location;
      this.date.textContent = weatherObject.date;
      this.avgTemp.textContent = weatherObject.avgtempC;
      this.maxTemp.textContent = weatherObject.maxtempC;
      this.minTemp.textContent = weatherObject.mintempC;
    } else if ((measurement === 1)) {
      this.location.textContent = weatherObject.location;
      this.date.textContent = weatherObject.date;
      this.avgTemp.textContent = weatherObject.avgtempF;
      this.maxTemp.textContent = weatherObject.maxtempF;
      this.minTemp.textContent = weatherObject.mintempF;
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
