export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.weatherData = this.model.fetchWeatherData("hanover");
    this.updateDisplay(this.weatherData, "0");
    this.bindEvents();
  }

  updateDisplay = (weatherObject, measurement) => {
    weatherObject.then((weatherData) => {
      this.view.render(weatherData[0], measurement);
      this.view.renderHourlyWeather(weatherData[0], measurement);
    });
  };

  handleToggleMeasurement = (id) => {
    this.updateDisplay(this.weatherData, id);
  }

  bindEvents = () => {
    this.view.bindToggleMeasurement(this.handleToggleMeasurement);
  }
}
