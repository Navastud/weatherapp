import React from 'react';

const WeatherExtraInfo = ({ humidity, wind }) => (<div>
    <span>{`${humidity} % | `}</span> 
    <span>{`${wind} wind`}</span>
</div>) //template string

export default WeatherExtraInfo;