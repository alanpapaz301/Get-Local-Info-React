import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const getWeatherData = (cityID) => {
  console.log("key" + API_KEY);
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${API_KEY}`
  );
  return request.then((response) => response.data);
};

export default { getWeatherData };
