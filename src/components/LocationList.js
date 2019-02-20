import React from "react";
import PropTypes from "prop-types";
import WeatherLocation from "./WeatherLocation";

const LocationList = ({ cities, onSelectedLocation }) => {
  const handlerWeatherLocationClick = city => {
    console.log("handlerWeatherLocationClick");
    onSelectedLocation(city);
  };

  const stringToComponent = cities =>
    cities.map(city => (
      <WeatherLocation
        key={city}
        city={city}
        onWeatherLocationClick={() => handlerWeatherLocationClick(city)}
      />
    ));

  return <div>{stringToComponent(cities)}</div>;
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func
};

export default LocationList;
