import ProcessedWeather from "./weatherOfDay";

export default class Model {
  constructor() {
    this.location = "hanover";
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
      const {
        location: { name: nameOfLocation },
      } = weather;
      weather.forecast.forecastday.forEach((day) => {
        const {
          date,
          day: {
            avgtemp_c,
            avgtemp_f,
            maxtemp_c,
            maxtemp_f,
            mintemp_c,
            mintemp_f,
            condition: { text: weatherDescription },
          },
          astro: { sunrise, sunset },
        } = day;
        const weatherOfTheDay = new ProcessedWeather(
          date,
          avgtemp_c,
          avgtemp_f,
          maxtemp_c,
          maxtemp_f,
          mintemp_c,
          mintemp_f,
          sunrise,
          sunset,
          weatherDescription,
          nameOfLocation,
        );

        console.log(weatherOfTheDay);
      });
    });
  };
}
