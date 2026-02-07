class WeatherUI {
    constructor() {
        this.currentWeatherEl = document.getElementById("currentWeather");
        this.forecastEl = document.getElementById("forecast");
        this.unit = "metric";
    }

    displayCurrentWeather(data) {
        const unitSymbol = this.unit === "metric" ? "°C" : "°F";

        this.currentWeatherEl.innerHTML = `
            <div class="card">
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>🌡 ${Math.round(data.main.temp)} ${unitSymbol}</p>
                <p>☁ ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌬 Wind: ${data.wind.speed} m/s</p>
            </div>
        `;
    }

    displayForecast(data) {
        const unitSymbol = this.unit === "metric" ? "°C" : "°F";
        const dailyMap = new Map();

        data.list.forEach(item => {
            const [date, time] = item.dt_txt.split(" ");
            if (time === "12:00:00" && !dailyMap.has(date)) {
                dailyMap.set(date, item);
            }
        });

        const days = Array.from(dailyMap.values()).slice(0, 5);

        let html = "<h3>5-Day Forecast</h3><div class='forecast'>";

        days.forEach(item => {
            html += `
                <div class="forecast-card">
                    <p>${new Date(item.dt_txt).toDateString()}</p>
                    <p>${Math.round(item.main.temp)} ${unitSymbol}</p>
                    <p>${item.weather[0].main}</p>
                </div>
            `;
        });

        html += "</div>";
        this.forecastEl.innerHTML = html;
    }

    showError(msg) {
        this.currentWeatherEl.innerHTML = `<p class="error">${msg}</p>`;
        this.forecastEl.innerHTML = "";
    }
}