export default class ProcessedWeather {
  constructor(
    date,
    avgTempC,
    avgTempF,
    maxTempC,
    maxTempF,
    minTempC,
    minTempF,
    sunrise,
    sunset,
    weatherDescription,
    location,
  ) {
    this.date = date;
    this.averageTempC = avgTempC;
    this.maxTempC = maxTempC;
    this.minTempC = minTempC;
    this.avgTempF = avgTempF;
    this.maxTempF = maxTempF;
    this.minTempF = minTempF;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.weatherDescription = weatherDescription;
    this.location = location;
    this.hourlyWeather = [];
  }

  // addHourlyWeather
}
