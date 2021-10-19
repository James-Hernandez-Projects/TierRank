import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
//so for this component is what we have here is a private route componetn
//the purpose of the component is that only authorized users can access it, so only users who are logged
//in, in addition we are able to take in our props(other webpages) and pass those in so only
//authorized users can see them and if they are not authorized they wont see them
import { connect } from "react-redux";
const PRoute = ({
  component: Component,
  auth: { isAuthenticated, loading }, //we check if authenticated
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !loading ? ( //if the are authorized user then show them the page.
        <Redirect to="/login" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  auth: state.auth
});

export default connect(mapStatetoProps)(PRoute);
