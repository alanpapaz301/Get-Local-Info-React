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



  
  /*Displays the data state only if not empty*/

  return data.hasOwnProperty("name") ? (
    <div>
      <h3 className="DataCity">
        {data.name} , {data.sys.country}
      </h3>
      <div id="DataContainer">
        <div id="localInfoContainer" className="infoBlock">
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

        <WeatherData />
      </div>
    </div>
  ) : null;;
}
export default DataDisplay;
