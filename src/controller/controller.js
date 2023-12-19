export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.weatherData = this.model.fetchWeatherData("hanover");
    this.updateDisplay(this.weatherData);
    this.bindEvents();
  }

  updateDisplay = (weatherObject) => {
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

  bindEvents = () => {
    this.view.bindToggleMeasurement(this.handleToggleMeasurement);
    this.view.bindSwitchDay(this.handleSwitchDay)
  }
}
