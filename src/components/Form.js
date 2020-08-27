import React, { useState, useContext } from "react";
import { DataContext } from "../DataContext";
import Fetch from "../Fetch.js";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import { createFilterOptions } from "@material-ui/lab/Autocomplete";
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

  function runFetch() {
    if (selectedCity !== 0) Fetch.fetchWeather(selectedCity.id, data, setData);
    setcityInputText("");
  }

  return (
    <div id="formContainer">
      <form>
        <Autocomplete
          classname="autocomplete"
          key={"countries"}
          id="countryList"
          options={CountryList}
          getOptionLabel={(option) => option.country}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Country" variant="outlined" />
          )}
          onChange={(e, v) => setOptions(v)}
        />
        <Autocomplete
          classname="autocomplete"
          inputValue={cityInputText}
          onInputChange={(e, v) => setcityInputText(v)}
          key={"cities"}
          id="cityList"
          options={cityOptions}
          getOptionLabel={(option) => option.name}
          style={{
            width: 300
            
          }}
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
        onClick={() => runFetch()}
      >
        Get local info!
      </Button>
    </div>
  );
}
export default Form;
