import axios from "axios";

// const API_KEY = "567fb009055f8d8fddf69948130c088f";
// const API_KEY = "61737e3df5801f4acde69b09f4c29f4c";
const API_KEY = "973a2c8241caab0c413eb6053b005bc1";

export default {
    fetchCurrentWeather: ({ query }) =>
        axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`
        ),
    fetchWeatherForecast: ({ lat, lon }) =>
        axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,current&appid=${API_KEY}`
        ),
};
