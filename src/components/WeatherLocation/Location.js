import React from "react";
import PropTypes from "prop-types";

const Location = (
  { city } //destructuring
) => <h1>{city}</h1>;

Location.propTypes = {
  city: PropTypes.string.isRequired
};

export default Location;
