import React from "react";
import PropTypes from "prop-types";

const ForecastItem = ({ weekday }) => <div>{weekday}</div>;

ForecastItem.propTypes = {
  weekday: PropTypes.string.isRequired
};

export default ForecastItem;
