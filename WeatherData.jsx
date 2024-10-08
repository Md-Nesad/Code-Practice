import React, { forwardRef } from "react";
import search_icon from "../assets/search.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";

function WeatherData({ weatherData }, ref) {
  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={ref} type="text" placeholder="search here" />
        <img
          src={search_icon}
          alt="search_Icon"
          onClick={() => {
            search(ref.current.value);
            ref.current.value = "";
          }}
        />
      </div>
      {weatherData ? (
        <>
          <img src={weatherData.icon} alt="clear_Icon" className="clear-icon" />
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humadity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="" />
              <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span>Wind speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
const weatherRef = forwardRef(WeatherData);
export default weatherRef;
