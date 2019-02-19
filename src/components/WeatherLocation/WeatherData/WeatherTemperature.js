import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE
} from "./../../../constants/weathers";

const stateToIconName = weatherState => {
  switch (weatherState) {
    case CLOUD:
      return "cloud";
    case SUN:
      return "sun";
    case RAIN:
      return "cloud-rain";
    case SNOW:
      return "snowflake";
    case THUNDER:
      return "poo-storm";
    case DRIZZLE:
      return "cloud-drizzle";
    default:
      return "sun";
  }
};

const getWeatherIcon = weatherState => {
  return (
    <FontAwesomeIcon
      className="wicon"
      icon={stateToIconName(weatherState)}
      size="4x"
    />
  );
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weatherTemperatureCont">
    {getWeatherIcon(weatherState)}
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType">C°</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string
};

export default WeatherTemperature;
