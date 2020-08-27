import React, { useState, useContext } from "react";
import { DataContext } from "../DataContext";
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

function WeatherIcon() {
  const [data, setData] = useContext(DataContext);

  /*Determines the weather icon to display depending on the conditions and time of day provided by the api request */
  const Icon = () => {
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
  };
  return (
    <div id="weatherIconDescription">
      <Icon />
      <h1 id="weatherDescription">
        {data.weather[0].description}
      </h1>
    </div>
  );
}

export default WeatherIcon;
