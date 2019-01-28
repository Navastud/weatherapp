import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="weatherExtraInfoCont">
        <span>{`${humidity} % | `}</span>
        <span>{`${wind} wind`}</span>
    </div>) //template string

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
}

export default WeatherExtraInfo;