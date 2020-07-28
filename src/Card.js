import React, { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import Fetch from "./Fetch.js";
import Clock from "react-live-clock";
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
var tzlookup = require("tz-lookup");

function Card() {
  const [data, setData] = useContext(DataContext);
  const [weatherIcon, setWeatherIcon] = useState(0);

  /*Float formating for temperature display*/

  function roundFix(number, precision) {
    var multi = Math.pow(10, precision);
    return Math.round((number * multi).toFixed(precision + 1)) / multi;
  }

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
    } 
    else if (data.weather[0].main === "Thunderstorm") {
      if (data.weather[0].icon[2] === "d")
        return <WiDayThunderstorm id="weatherIcon" />;
      else return <WiNightThunderstorm  id="weatherIcon" />;
    } 
    
    
    
    
    else return null;
  }

  /*Displays the data state only if not empty*/

  const ConditionalRender = () => {
    return data.hasOwnProperty("name") ? (
      <div className="cardDisplay">
        <h3 className="cardCity">
          {data.name} , {data.sys.country}
        </h3>
        <div className="localTime">
          <h3>Local time:</h3>
          <Clock
            className="liveClock"
            format={"HH:mm:ss"}
            ticking={true}
            timezone={tzlookup(data.coord.lat, data.coord.lon)}
          />
          <h3>({tzlookup(data.coord.lat, data.coord.lon)})</h3>
        </div>
        <div id="weatherDisplay">
          <WeatherIcon />
          <h3 className="cardContent" id="weatherDescription">
            {data.weather[0].description}
          </h3>
          <h3 className="cardContent">
            Temperature: {roundFix(data.main.temp - 273.15, 1)}℃
          </h3>
          <h3 className="cardContent">
            Feels like: {roundFix(data.main.feels_like - 273.15, 1)}℃
          </h3>
          <h3 className="cardContent">Humidity: {data.main.humidity}%</h3>
        </div>
      </div>
    ) : null;
  };

  return (
    <div id="cardContainer">
      <ConditionalRender />
    </div>
  );
}
export default Card;
