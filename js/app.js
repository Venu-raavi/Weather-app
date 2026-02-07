const weatherService = new WeatherService();
const ui = new WeatherUI();

const searchBtn = document.getElementById("searchBtn");
const unitToggle = document.getElementById("unitToggle");
const searchInput = document.getElementById("searchInput");

async function loadWeather(city) {
    try {
        Storage.saveCity(city);
        const weather = await weatherService.getCurrentWeather(city, ui.unit);
        const forecast = await weatherService.getForecast(city, ui.unit);
        ui.displayCurrentWeather(weather);
        ui.displayForecast(forecast);
    } catch (err) {
        ui.showError(err.message);
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchInput.value.trim().toLowerCase();
    if (city) loadWeather(city);
});

unitToggle.addEventListener("click", () => {
    ui.unit = ui.unit === "metric" ? "imperial" : "metric";
    unitToggle.textContent = ui.unit === "metric" ? "Switch to °F" : "Switch to °C";

    const city = Storage.getCity();
    if (city) loadWeather(city);
});

const lastCity = Storage.getCity();
if (lastCity) {
    searchInput.value = lastCity;
    loadWeather(lastCity);
}