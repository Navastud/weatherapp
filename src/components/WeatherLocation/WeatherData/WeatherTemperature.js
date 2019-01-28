import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faSun, faCloudRain, faSnowflake, faCloudMeatball, faWind } from '@fortawesome/free-solid-svg-icons'
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from './../../../constants/weathers'

const stateToIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return faCloud;
        case CLOUDY:
            return faCloudMeatball;
        case SUN:
            return faSun;
        case RAIN:
            return faCloudRain;
        case SNOW:
            return faSnowflake;
        case WINDY:
            return faWind;
        default:
            return faSun
    }
}

const getWeatherIcon = (weatherState) => {
    return <FontAwesomeIcon className="wicon" icon={stateToIconName(weatherState)} size="4x" />
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperaturetype">C°</span>
    </div>
)

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
}

export default WeatherTemperature;