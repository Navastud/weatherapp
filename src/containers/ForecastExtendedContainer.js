import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ForecastExtended from "./../components/ForecastExtended";

class ForecastExtendedContainer extends Component {
  render() {
    return this.props.city && <ForecastExtended city={this.props.city} />;
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired0
};

const mapToStateProps = ({ city }) => ({ city });

export default connect(mapToStateProps)(ForecastExtendedContainer);
