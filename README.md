# Weather Application 🌦

A responsive Weather Dashboard web application that displays real-time weather data and a 5-day forecast for any city using the OpenWeatherMap public API.

## Features
- Real-time weather data
- 5-day forecast
- City search
- API error handling
- LocalStorage usage
- Responsive design

## Technologies Used
- HTML
- CSS
- JavaScript
- OpenWeatherMap API



Step 1: GET API KEY

Go to: https://openweathermap.org/api
Sign up / log in
Generate a free API key


Step 2: ADD API KEY

"replace the API key in .env"
WEATHER_API_KEY=API KEY

"Open js/config.js and replace with your key"

const CONFIG = {
    API_KEY: "YOUR_OPENWEATHERMAP_API_KEY",
    BASE_URL: "https://api.openweathermap.org/data/2.5"
};
