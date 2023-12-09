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
    this.processedWeather = [];

    weatherData.forecast.forecastday.forEach((day) => {
      const {
        astro: { sunrise, sunset },
        date,
        day: {
          avgtemp_c,
          avgtemp_f,
          maxtemp_c,
          maxtemp_f,
          mintemp_c,
          mintemp_f,
          condition: { text },
        },
      } = day;

      this.processedWeather.push(
        Model.createWeatherObject(
          sunrise,
          sunset,
          date,
          avgtemp_c,
          avgtemp_f,
          maxtemp_c,
          maxtemp_f,
          mintemp_c,
          mintemp_f,
          text,
        ),
      );

      day.hour.forEach((hour) => {
        const { chance_of_rain, temp_c, temp_f, time } = hour;
        const last = this.processedWeather.length -1
        this.processedWeather[last].hourlyWeather.push(Model.createHourlyWeatherObject(chance_of_rain, temp_c, temp_f, time))
      });
    });
    console.log(this.processedWeather)
  };

  static createWeatherObject(
    sunUp,
    sunDown,
    day,
    avgtemp_c,
    avgtemp_f,
    maxtemp_c,
    maxtemp_f,
    mintemp_c,
    mintemp_f,
    text,
  ) {
    const sunrise = sunUp;
    const sunset = sunDown;
    const date = day;
    const avgtempC = avgtemp_c;
    const avgtempF = avgtemp_f;
    const maxtempC = maxtemp_c;
    const maxtempF = maxtemp_f;
    const mintempC = mintemp_c;
    const mintempF = mintemp_f;
    const weatherDescription = text;
    const hourlyWeather = [];

    return {
      sunrise,
      sunset,
      date,
      avgtempC,
      avgtempF,
      maxtempC,
      maxtempF,
      mintempC,
      mintempF,
      weatherDescription,
      hourlyWeather,
    };
  }

  static createHourlyWeatherObject(chance_of_rain, temp_c, temp_f, time) {
    const chanceOfRain = chance_of_rain;
    const tempC = temp_c;
    const tempF = temp_f;
    const hour = time;

    return { chanceOfRain, tempC, tempF, hour };
  }
}
