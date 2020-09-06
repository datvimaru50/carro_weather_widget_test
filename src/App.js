import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import "./App.css";

import {
  selectCurrentData,
  selectForcastData,
  fetchCurrentWeather,
  fetchWeatherForecast,
} from "./features/weather/weatherSlice";

const iconBaseUrl = "http://openweathermap.org/img/w/";

function App() {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const currentData = useSelector(selectCurrentData);
  const forcastData = useSelector(selectForcastData);

  const loadingStatus = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);

  useEffect(() => {
    dispatch(fetchCurrentWeather({ query: "hanoi" }));
  }, [dispatch]);

  useEffect(() => {
    if (currentData) {
      const { lat, lon } = currentData.coord;
      dispatch(fetchWeatherForecast({ lat, lon }));
    }
  }, [dispatch, currentData]);

  let content;

  if (loadingStatus) {
    content = <div className="loader">Loading...</div>;
  } else {
    if (error) {
      content = <div>City not found</div>;
    } else {
      content = (
        <>
          <CurrentWeather
            cityName={currentData.name}
            icon={iconBaseUrl + currentData.weather[0].icon + ".png"}
            mainWeather={currentData.weather[0].main}
            mainTemp={currentData.main.temp}
            windSpeed={currentData.wind.speed}
            sunriseTime={moment.unix(currentData.sys.sunrise).format("LT")}
            sunsetTime={moment.unix(currentData.sys.sunset).format("LT")}
          />

          {forcastData && (
            <div className="fiveDaysWeather">
              {forcastData.daily.slice(1, 6).map((item, idx) => (
                <ForcastWeatherDayItem
                  key={idx}
                  date={moment.unix(item.dt).format("ddd").toUpperCase()}
                  icon={iconBaseUrl + item.weather[0].icon + ".png"}
                  temp={Math.floor(item.temp.day)}
                />
              ))}
            </div>
          )}
        </>
      );
    }
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(fetchCurrentWeather({ query }));
  }

  return (
    <div className="App">
      <img src="/logo.png" className="App-logo" alt="logo" />
      <form>
        <input
          type="text"
          placeholder="Type city name, eg: Hanoi"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button aria-label="Search" onClick={handleClick}>
          Search
        </button>
      </form>
      <div className="weatherData">{content}</div>
    </div>
  );
}

export default App;

function CurrentWeather(props) {
  return (
    <>
      <p className="cityName">{props.cityName}</p>
      <div className="currentWeather">
        <div>
          <img src={props.icon} alt="icon" />
          <b>{props.mainWeather}</b>
        </div>
        <div className="temp">
          <div>
            {props.mainTemp}
            <sup>o</sup>C
          </div>
        </div>
        <div>
          <span>Wind: {props.windSpeed} m/s</span>
          <span>Sunrise: {props.sunriseTime}</span>
          <span>Sunset: {props.sunsetTime}</span>
        </div>
      </div>
    </>
  );
}

function ForcastWeatherDayItem(props) {
  return (
    <div>
      <span>{props.date}</span>
      <img src={props.icon} alt="icon" />
      <span>
        {props.temp}
        <sup>o</sup>C
      </span>
    </div>
  );
}
