import React from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecasItem";
import "./styles.css";

const renderForecastItemDays = forecastData => {
  return forecastData.map(forecast => (
    <ForecastItem
      key={`${forecast.weekday}-${forecast.hour}`}
      weekday={forecast.weekday}
      hour={forecast.hour}
      data={forecast.data}
    />
  ));
};

const renderProgress = () => {
  return <h3>Cargando pronostico extendido</h3>;
};

const ForecastExtended = ({ city, forecastData }) => (
  <div>
    <h2 className="forecast-title">Pronóstico Extendido para {city}</h2>
    {forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
  </div>
);

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired
};

export default ForecastExtended;
