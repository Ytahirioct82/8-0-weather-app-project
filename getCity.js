// ........extracts the name of the area....
const getCity = (weather) => {
  const city = weather.nearest_area[0].areaName[0].value;
  return city;
};

// ........extracts the feels like temperature....
const getCityTemp = (weather) => {
  const temp = weather.current_condition[0].FeelsLikeF;
  return temp;
};

// ........extracts the name of the region....
const getRegion = (weather) => {
  const region = weather.nearest_area[0].region[0].value;
  return region;
};

// ........extracts the name of the country....
const getCountry = (weather) => {
  const country = weather.nearest_area[0].country[0].value;
  return country;
};

// ........extracts today average temperature....
const getTodayAverage = (weather) => {
  const today = weather.weather[0].avgtempF;
  return today;
};

// ........extracts today maximum temperature....
const getTodayMax = (weather) => {
  const today = weather.weather[0].maxtempF;
  return today;
};

// ........extracts today minimum temperature....
const getTodayMin = (weather) => {
  const today = weather.weather[0].mintempF;
  return today;
};

// ........extracts tomorrow average temperature....
const getTomorrowAverage = (weather) => {
  const tomorrow = weather.weather[1].avgtempF;
  return tomorrow;
};

// ........extracts tomorrow maximum temperature....
const getTomorrowMax = (weather) => {
  const tomorrow = weather.weather[1].maxtempF;
  return tomorrow;
};

// ........extracts tomorrow minimum temperature....
const getTomorrowMin = (weather) => {
  const tomorrow = weather.weather[1].mintempF;
  return tomorrow;
};

// ........extracts day after tomorrow average temperature....
const getDayAfterAverage = (weather) => {
  const dayAfter = weather.weather[2].avgtempF;
  return dayAfter;
};

// ........extracts day after tomorrow maximum temperature....
const getDayAfterMax = (weather) => {
  const dayAfter = weather.weather[2].maxtempF;
  return dayAfter;
};

// ........extracts day after tomorrow minimum temperature....
const getDayAfterMin = (weather) => {
  const dayAfter = weather.weather[2].mintempF;
  return dayAfter;
};
