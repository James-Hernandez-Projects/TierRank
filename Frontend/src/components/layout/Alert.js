import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
/*
So this component is a little dynamic, these are the alerts the user will see throughtout the site,
and we are given the type of alert based on the alertType which is given from the error msg or Alert msg
*/
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((
    alert //here we go through the alert and set the type
  ) => (
    <div key={alert.id} className={`button button-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
