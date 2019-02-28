import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecasItem";
import transformForecast from "./../services/transformForecast";
import "./styles.css";

const api_key = "d849795d81f8be2ac7109436ff202f0b";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = { forecastData: null };
  }
  componentDidMount() {
    this.updateCity(this.props.city);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.setState({ forecastData: null });
      this.updateCity(nextProps.city);
    }
  }

  updateCity = city => {
    const url_forecast = `${url}?q=${city}&APPID=${api_key}`;
    fetch(url_forecast)
      .then(data => data.json())
      .then(weather_data => {
        const forecastData = transformForecast(weather_data);
        this.setState({ forecastData });
      });
  };
  renderForecastItemDays(forecastData) {
    return forecastData.map(forecast => (
      <ForecastItem
        key={`${forecast.weekday}-${forecast.hour}`}
        weekday={forecast.weekday}
        hour={forecast.hour}
        data={forecast.data}
      />
    ));
  }

  renderProgress() {
    return <h3>Cargando pronostico extendido</h3>;
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className="forecast-title">Pronóstico Extendido para {city}</h2>
        {forecastData
          ? this.renderForecastItemDays(forecastData)
          : this.renderProgress()}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
};

export default ForecastExtended;
