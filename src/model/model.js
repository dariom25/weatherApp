export default class Model {
  constructor() {
    this.location = "hanover";
    this.key = "bd332034335c4701ac3183417232611";
    Model.fetchWeatherData(this.key, this.location);
  }

  static fetchWeatherData = async (key, location) => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3`,
      { mode: "cors" },
    );
    const weatherData = await response.json();
    Model.processWeatherData(weatherData);
  };

  static processWeatherData = (weatherData) => {
    console.log(weatherData.forecast);
  };
}
