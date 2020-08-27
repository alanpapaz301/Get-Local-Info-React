import React, { useState, useContext } from "react";
import { DataContext } from "../DataContext";
import Clock from "react-live-clock";
var tzlookup = require("tz-lookup");

function TimeDisplay() {
  const [data, setData] = useContext(DataContext);

  /*Converts timezone result from the API to UTC*/
  const TimezoneUTC = () => {
    var timezone = data.timezone / 60 / 60;
    var timezoneReturn;
    if (data.timezone >= 0) timezoneReturn = "UTC + " + timezone;
    else timezoneReturn = "UTC " + timezone;
    return timezoneReturn;
  };

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
      </div>
    );
  }
  export default TimeDisplay;