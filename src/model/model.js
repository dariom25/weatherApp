export default class Model {
  constructor() {
    this.location = "hanover";
    this.key = "bd332034335c4701ac3183417232611";
  }

  fetchWeatherData = async (location) => {
    try{const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${this.key}&q=${location}&days=3`,
      { mode: "cors" },
    );
    const weatherData = await response.json();
    return this.processWeatherData(weatherData);
    } catch(err) {
      console.log(err)
    }
  };

  processWeatherData = (weatherData) => {
    const processedWeather = [];

    const place = weatherData.location.name;

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

      processedWeather.push(
        this.createWeatherObject(
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
          place,
        ),
      );

      day.hour.forEach((hour) => {
        const { chance_of_rain, temp_c, temp_f, time } = hour;
        const last = processedWeather.length - 1;
        processedWeather[last].hourlyWeather.push(
          this.createHourlyWeatherObject(chance_of_rain, temp_c, temp_f, time),
        );
      });
    });
    return processedWeather;
  };

  createWeatherObject(
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
    place,
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
    const location = place;

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
      location,
    };
  }

  createHourlyWeatherObject(chance_of_rain, temp_c, temp_f, time) {
    const chanceOfRain = chance_of_rain;
    const tempC = temp_c;
    const tempF = temp_f;
    const hourAndDate = time.split(" ");
    const hour = hourAndDate[1]
  

    return { chanceOfRain, tempC, tempF, hour };
  }
}
