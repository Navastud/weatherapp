import React from "react";
import WeatherData from "./WeatherData";
import PropTypes from "prop-types";
import Location from "./Location";
import "./styles.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
  <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
    <Location city={city} />
    {data ? (
      <WeatherData data={data} />
    ) : (
      <CircularProgress variant="indeterminate" />
    )}
  </div>
);

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  })
};

export default WeatherLocation;
