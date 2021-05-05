import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import WeatherIcon from "./components/WeatherIcon.js";
import WeatherDetails from "./components/WeatherDetails.js";
import Wind from "./components/Wind";
import TimeDisplay from "./components/TimeDisplay";
import Humidity from "./components/Humidity";
import Timezone from "./components/Timezone";

function DataDisplay() {
  const [data, setData] = useContext(DataContext);

  /*Displays the data state only if not empty*/
  const DataRender = () => {
    return data.hasOwnProperty("name") ? (
      <div>
        <h1 className="cityName">
          {data.name} , {data.sys.country}
        </h1>

        <div id="displayContainer">
          <WeatherIcon />
          <WeatherDetails />
          <Wind />
          <Humidity />
          <TimeDisplay />
          <Timezone />
        </div>
      </div>
    ) : (
      <div id="emptyDisplayContainer">
        <h1>Choose a country and city to see the magic</h1>
      </div>
    );
  };

  return <DataRender />;
}
export default DataDisplay;
