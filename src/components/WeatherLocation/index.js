import React from "react";
import { Card } from "antd";
import WeatherData from "./WeatherData";
import PropTypes from "prop-types";
import Location from "./Location";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./styles.css";

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
  <Card
    onClick={onWeatherLocationClick}
    style={{ marginBottom: "16px", cursor: "pointer" }}
  >
    <Location city={city} />
    {data ? (
      <WeatherData data={data} />
    ) : (
      <CircularProgress variant="indeterminate" />
    )}
  </Card>
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
