import ProcessedWeather from "./weatherOfDay";

export default class Model {
  constructor() {
    this.location = "hannover";
    this.key = "bd332034335c4701ac3183417232611";
    this.weatherData = Model.fetchWeatherData(this.key, this.location);
    this.processedWeatherData = [];
    Model.processWeatherData(this.weatherData);
  }

  static fetchWeatherData = async (key, location) => {
    // hier noch error handling mit try catch
    const weatherData = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3`,
      { mode: "cors" },
    );

    const weatherDataJSON = await weatherData.json();
    return weatherDataJSON;
  };

  static processWeatherData = (data) => {
    data.then((weather) => {
      console.log(weather)
    });
  };
}
