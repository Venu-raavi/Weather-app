class WeatherService {
    async getCurrentWeather(city, unit) {
        const url = `${CONFIG.BASE_URL}/weather?q=${city},IN&units=${unit}&appid=${CONFIG.API_KEY}`;
        return this.fetchData(url);
    }

    async getForecast(city, unit) {
        const url = `${CONFIG.BASE_URL}/forecast?q=${city},IN&units=${unit}&appid=${CONFIG.API_KEY}`;
        return this.fetchData(url);
    }

    async fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "API error");
        }

        return data;
    }
}