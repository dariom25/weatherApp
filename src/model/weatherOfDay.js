export default class ProcessedWeather {
  constructor(
    date,
    avgTemp,
    maxTemp,
    minTemp,
    sunrise,
    sunset,
    weatherDescription,
    location,
  ) {
    this.date = date;
    this.averageTemp = avgTemp;
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.weatherDescription = weatherDescription;
    this.location = location;
    this.hourlyWeather = [];
  }

  // addHourlyWeather
}
