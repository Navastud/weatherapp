import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecasItem";
import "./styles.css";

const api_key = "d849795d81f8be2ac7109436ff202f0b";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = { forecastData: null };
  }
  componentDidMount() {
    //fetch or axios
    const url_forecast = `${url}?q=${this.props.city}&APPID=${api_key}`;
    fetch(url_forecast)
      .then(data => data.json())
      .then(weather_data => {
        console.log(weather_data);
      });
  }

  renderForecastItemDays() {
    return "Render Item";
    /*  return days.map(day => (
      <ForecastItem weekday={day} hour={10} data={data} />
    )); */
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
        {forecastData ? this.renderForecastItemDays() : this.renderProgress()}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
};

export default ForecastExtended;
