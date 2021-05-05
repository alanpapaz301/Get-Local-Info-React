var tzlookup = require("tz-lookup");

const getTimezone = (data) => {
  return tzlookup(data.coord.lat, data.coord.lon);
};

export default { getTimezone };
