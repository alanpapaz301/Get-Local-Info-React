import React, { useState, useContext } from "react";
import { DataContext } from "../DataContext";
import weatherService from "../services/weather";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import { Button } from "@material-ui/core";
import CityList from "../city.list.min";
import CountryList from "../countries";

function Form() {
  const [data, setData] = useContext(DataContext);
  const [selectedCity, setSelectedCity] = useState(0);
  const [cityOptions, setcityOptions] = useState([]);
  const [cityInputText, setcityInputText] = useState("");

  let options = [];
  function setOptions(country) {
    setcityInputText("");
    setcityOptions([]);

    if (country != null) {
      CityList.map((result) =>
        result.country === country.abbreviation ? options.push(result) : null
      );
      setcityOptions(options);
      console.log(options);
    }
  }

  function cityChange(v) {
    /*Checks if the input is not empty before changing states to avoid errors*/
    if (cityOptions.indexOf(v) !== -1) {
      setcityInputText(v.name);
      setSelectedCity(v);
    }
  }

  function setWeather() {
    if (selectedCity !== 0)
      weatherService.getWeatherData(selectedCity.id).then((weatherData) => {
        setData(weatherData);
        setcityInputText("");
      });
  }

  return (
    <div id="formContainer">
      <form>
        <Autocomplete
          className="autocomplete"
          key={"countries"}
          id="countryList"
          options={CountryList}
          getOptionLabel={(option) => option.country}
          renderInput={(params) => (
            <TextField {...params} label="Country" variant="outlined" />
          )}
          onChange={(e, v) => setOptions(v)}
        />
        <Autocomplete
          className="autocomplete"
          inputValue={cityInputText}
          onInputChange={(e, v) => setcityInputText(v)}
          key={"cities"}
          id="cityList"
          options={cityOptions}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} label="City" variant="outlined" />
          )}
          onChange={(e, v) => cityChange(v)}
        />
      </form>
      <Button
        id="runBtn"
        variant="contained"
        color="primary"
        onClick={() => setWeather()}
      >
        Get local info!
      </Button>
    </div>
  );
}
export default Form;
