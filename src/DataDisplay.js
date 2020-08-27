import React, { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import Fetch from "./Fetch.js";
import WeatherData from "./WeatherData.js";

import Clock from "react-live-clock";

var tzlookup = require("tz-lookup");

function DataDisplay() {
  const [data, setData] = useContext(DataContext);

  /*Converts timezone result from the API to UTC*/
  const TimezoneUTC = () => {
    var timezone = data.timezone / 60 / 60;
    var timezoneReturn;
    if (data.timezone >= 0) timezoneReturn = "UTC + " + timezone;
    else timezoneReturn = "UTC " + timezone;
    return timezoneReturn;
  };

  const TimeDisplay = () => {
    return (
      <div id="timeContainer" className="infoBlock">
        <div className="localTime">
          <h3>Local time:</h3>
          <Clock
            className="liveClock"
            format={"HH:mm:ss"}
            ticking={true}
            timezone={tzlookup(data.coord.lat, data.coord.lon)}
          />
        </div>
        <h3 className="DataContent">
          Timezone: ({tzlookup(data.coord.lat, data.coord.lon)})
        </h3>
        <div className="DataContent">
          <TimezoneUTC />
        </div>
      </div>
    );
  };

  /*Displays the data state only if not empty*/
  const DataRender = () => {
    return data.hasOwnProperty("name") ? (
      <div id="containerBackground">
        <h1 className="DataCity">
          {data.name} , {data.sys.country}
        </h1>

        <div id="displayContainer">
          <WeatherData />
          <TimeDisplay />
          <TimeDisplay />
          <WeatherData />
          <TimeDisplay />
          <TimeDisplay />
        </div>
      </div>
    ) : null;
  };

  return <DataRender />;
}
export default DataDisplay;
