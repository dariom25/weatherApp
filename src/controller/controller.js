export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.weatherData = this.model.fetchWeatherData(this.model.location);
    this.updateDisplay(this.weatherData);
    this.bindEvents();
  }

  updateDisplay = (weatherObject) => {
    this.view.deleteWeatherCards();
    weatherObject.then((weatherData) => {
      this.view.render(weatherData[this.view.day], this.view.measurement);
      this.view.renderHourlyWeather(weatherData[this.view.day], this.view.measurement);
    });
  };

  handleToggleMeasurement = (id) => {
    this.updateDisplay(this.weatherData, id);
  }

  handleSwitchDay = () => {
    this.updateDisplay(this.weatherData, this.view.measurement)
  }

  handleSearchLocation = () => {
    this.model.location = this.view.getUserInput();
    this.weatherData = this.model.fetchWeatherData(this.model.location);
    this.updateDisplay(this.weatherData);
  }

  bindEvents = () => {
    this.view.bindToggleMeasurement(this.handleToggleMeasurement);
    this.view.bindSwitchDay(this.handleSwitchDay);
    this.view.bindSearchLocation(this.handleSearchLocation);
  }
}
