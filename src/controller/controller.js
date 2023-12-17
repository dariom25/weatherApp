export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.weatherData = this.model.fetchWeatherData("hanover");
    this.updateDisplay(this.weatherData, 0);
  }

  updateDisplay = (weatherObject, measurement) => {
    weatherObject.then((weatherData) => {
      this.view.render(weatherData[0], measurement);
      this.view.renderHourlyWeather(weatherData[0], measurement);
    });
  };
}
