import React, { useState, useContext } from "react";
import { DataContext } from "../DataContext";
var tzlookup = require("tz-lookup");

function Timezone() {
  const [data, setData] = useContext(DataContext);

  /*Converts timezone result from the API to UTC*/
  const TimezoneUTC = () => {
    var timezone = data.timezone / 60 / 60;
    var timezoneReturn;
    if (data.timezone >= 0) timezoneReturn = "UTC + " + timezone
    else timezoneReturn = "UTC " + timezone
    return (
    <div className="dataContent">
        {timezoneReturn}
    </div>
    )
  };

    return (
      <div id="timezoneContainer" className="infoBlock">
        <h1 className="blockTitle">
          Timezone 
        </h1>
        <h3 className="dataContent" id="timezoneName">({tzlookup(data.coord.lat, data.coord.lon)})</h3>
          <TimezoneUTC />
      </div>
    );
  }
  export default Timezone;