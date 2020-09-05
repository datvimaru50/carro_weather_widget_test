import React from "react";
// import logo from "../public/logo.png";
// import cloud from "../public/cloud.png";
import "./App.css";

function App() {
    return (
        <div className="App">
            <img src="/logo.png" className="App-logo" alt="logo" />
            <form>
                <input type="text" placeholder="Type city name, eg: Hanoi" />
                <button aria-label="Search">Search</button>
            </form>
            <div className="weatherData">
                <p className="cityName">Singapore</p>

                <div className="currentWeather">
                    <div>
                        <img src="/cloud.png" alt="icon" />
                        <b>Mostly Cloudy</b>
                    </div>
                    <div className="temp">
                        <div>
                            30<sup>o</sup>C
                        </div>
                    </div>
                    <div>
                        <span>Wind: 2.1 m/s</span>
                        <span>Sunrise: 07:05 AM</span>
                        <span>Sunset: 07:16 PM</span>
                    </div>
                </div>
                <div className="fiveDaysWeather">
                    <div>
                        <span>THU</span>
                        <img src="/icon-weather.png" alt="icon" />
                        <span>30<sup>o</sup>C</span>
                    </div>
                    <div>
                        <span>FRI</span>
                        <img src="/icon-weather.png" alt="icon" />
                        <span>30<sup>o</sup>C</span>
                    </div>
                    <div>
                        <span>SAT</span>
                        <img src="/icon-weather.png" alt="icon" />
                        <span>30<sup>o</sup>C</span>
                    </div>
                    <div>
                        <span>SUN</span>
                        <img src="/icon-weather.png" alt="icon" />
                        <span>30<sup>o</sup>C</span>
                    </div>
                    <div>
                        <span>MON</span>
                        <img src="/icon-weather.png" alt="icon" />
                        <span>30<sup>o</sup>C</span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default App;
