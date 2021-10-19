import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
/*
this is the login component the user will see
*/
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",//data we will get from form fields
    password: ""
  });
  const { email, password } = formData;
  const onChange = e =>//allows the data to be inputed
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {//allows the data to be submitted
    e.preventDefault();
    login(email, password);
  };
  //if the user is properly authenticated than we will redirect to the user

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="header1_text header-color">Sign In</h1>
      <p className="desct_text">
        <i className="fas fa-user"></i> Log into your account already!
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="button button-go" value="Login" />
      </form>
      <p className="margin_1">
        You got no Account? No worries just make one.{" "}
        <Link to="/register">Sign Up Here</Link>
      </p>
    </Fragment>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
