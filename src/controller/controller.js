export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.weatherData = this.model.fetchWeatherData(this.model.location);
    this.gifUrl = this.model.getWeatherDescription(
      this.weatherData,
      this.view.day,
    );

    this.updateDisplay(this.weatherData, this.gifUrl);
    this.bindEvents();
  }

  updateDisplay = (weatherObject, gifUrl) => {
    this.view.deleteWeatherCards();
    weatherObject.then((weatherData) => {
      this.view.render(weatherData[this.view.day]);
      this.view.renderHourlyWeather(weatherData[this.view.day]);
    });
    gifUrl.then((gif) => {
      this.view.renderGif(gif);
    });
  };

  handleToggleMeasurement = () => {
    this.updateDisplay(this.weatherData, this.gifUrl);
  };

  handleSwitchDay = () => {
    this.gifUrl = this.model.getWeatherDescription(
      this.weatherData,
      this.view.day,
    );
    this.updateDisplay(this.weatherData, this.gifUrl);
  };

  handleSearchLocation = () => {
    this.model.location = this.view.getUserInput();
    this.weatherData = this.model.fetchWeatherData(this.model.location);
    this.view.emptyInput();
    this.updateDisplay(this.weatherData);
  };

  bindEvents = () => {
    this.view.bindToggleMeasurement(this.handleToggleMeasurement);
    this.view.bindSwitchDay(this.handleSwitchDay);
    this.view.bindSearchLocation(this.handleSearchLocation);
  };
}
