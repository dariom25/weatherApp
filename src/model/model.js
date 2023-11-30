
export default class Model {
    constructor() {
        this.location = "hannover"
        this.key = "bd332034335c4701ac3183417232611" // key ist möglicherweise falsch
        Model.fetchWeatherData(this.key, this.location);
    }

    static fetchWeatherData = async (key, location) => {
        const weatherDataJSON = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`, {
            mode: 'cors'
        });

        return weatherDataJSON.json();
    }

}