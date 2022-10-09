import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecats-day">Tru</div>
          <WeatherIcon code="01d" size={36} />
          <div>
            <span className="weather-temp-max">19</span>
            <span className="weather-temp-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}