const getCity = (weather) => {
  const city = weather.nearest_area[0].areaName[0].value;
  return city;
};

const getCityTemp = (weather) => {
  const temp = weather.current_condition[0].FeelsLikeF;
  return temp;
};

const getRegion = (weather) => {
  const region = weather.nearest_area[0].region[0].value;
  return region;
};

const getCountry = (weather) => {
  const country = weather.nearest_area[0].country[0].value;
  return country;
};
