import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature};`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature};`;
  }

  function Day() {
    let date = new Date(props.date.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{props.data.dt}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div>
        <span className="weather-temp-max">{maxTemperature()}</span>
        <span className="weather-temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
