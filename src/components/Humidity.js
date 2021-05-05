import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Humidity() {
  const [data, setData] = useContext(DataContext);

  return (
    <div id="humidityDisplay" className="infoBlock">
      <h1 className="blockTitle" id="humidityTitle">
        Humidity
      </h1>
      <CircularProgressbar
        id="humidityBar"
        value={data.main.humidity}
        text={`${data.main.humidity}%`}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",

          // Text size
          textSize: "20px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 2,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: "#877EBF",
          textColor: "#3e328c",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
      />
    </div>
  );
}
export default Humidity;
