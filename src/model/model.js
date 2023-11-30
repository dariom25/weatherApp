
export default class Model {
    constructor() {
        this.location = "Hannover"
        this.key = "bd332034335c4701ac3183417232611" // key ist möglicherweise falsch
        this.fetchWeatherData(this.key, this.location);
    }

    static async fetchWeatherData(key, location) {
        const weatherDataJSON = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`);

        console.log(weatherDataJSON);
    }

}