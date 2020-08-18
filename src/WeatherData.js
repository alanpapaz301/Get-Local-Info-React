import React, { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import {
  WiDayThunderstorm,
  WiNightThunderstorm,
  WiDaySprinkle,
  WiNightAltSprinkle,
  WiDayRain,
  WiNightAltRain,
  WiDaySnow,
  WiNightAltSnow,
  WiDayCloudy,
  WiNightAltCloudy,
  WiDaySunny,
  WiNightClear,
} from "react-icons/wi";
import { IconContext } from "react-icons";

function WeatherData() {
  const [data, setData] = useContext(DataContext);
  const [weatherIcon, setWeatherIcon] = useState(0);

  /*Float formating for temperature display*/

  function roundFix(number, precision) {
    var multi = Math.pow(10, precision);
    return Math.round((number * multi).toFixed(precision + 1)) / multi;
  }

  /*Determines the weather icon to display depending on the conditions and time of day provided by the api request */
  function WeatherIcon() {
    if (data.weather[0].main === "Clear") {
      if (data.weather[0].icon[2] === "d")
        return <WiDaySunny id="weatherIcon" />;
      else return <WiNightClear id="weatherIcon" />;
    } else if (data.weather[0].main === "Clouds") {
      if (data.weather[0].icon[2] === "d")
        return <WiDayCloudy id="weatherIcon" />;
      else return <WiNightAltCloudy id="weatherIcon" />;
    } else if (data.weather[0].main === "Snow") {
      if (data.weather[0].icon[2] === "d")
        return <WiDaySnow id="weatherIcon" />;
      else return <WiNightAltSnow id="weatherIcon" />;
    } else if (data.weather[0].main === "Rain") {
      if (data.weather[0].icon[2] === "d")
        return <WiDayRain id="weatherIcon" />;
      else return <WiNightAltRain id="weatherIcon" />;
    } else if (data.weather[0].main === "Drizzle") {
      if (data.weather[0].icon[2] === "d")
        return <WiDaySprinkle id="weatherIcon" />;
      else return <WiNightAltSprinkle id="weatherIcon" />;
    } else if (data.weather[0].main === "Thunderstorm") {
      if (data.weather[0].icon[2] === "d")
        return <WiDayThunderstorm id="weatherIcon" />;
      else return <WiNightThunderstorm id="weatherIcon" />;
    } else return null;
  }

  return (
    <div id="weatherDisplay" className="infoBlock">
      <div id="weatherIconDescription">
      <WeatherIcon />
      <h3 className="DataContent" id="weatherDescription">
        {data.weather[0].description}
      </h3>
      </div>
      <h3 className="DataContent">
        Temperature: {roundFix(data.main.temp - 273.15, 1)}℃
      </h3>
      <h3 className="DataContent">
        Feels like: {roundFix(data.main.feels_like - 273.15, 1)}℃
      </h3>
      <h3 className="DataContent">Humidity: {data.main.humidity}%</h3>
      <h3 className="DataContent">Wind speed: {data.wind.speed} Meter/sec</h3>
    </div>
  );
}
export default WeatherData;
