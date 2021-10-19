import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
/*
this is the register component is the registration page for the user, its just a standard form.
*/
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({//these are the variables the user will be inputing.
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const { name, email, password, password2 } = formData;
  const onChange = e =>
    setFormData({//allows the forms to have data to be inputed.
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();//allows the data to be submited
    if (password !== password2) {//simple compare to make sure passwords are same
      setAlert("pass no match", "stop");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {//once this is authenticated we redirect the user to the dashboard.
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="header1_text header-color">Sign Up</h1>
      <p className="desct_text">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
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
            minlength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
            minlength="6"
          />
        </div>
        <input type="submit" className="button button-go" value="Register" />
      </form>
      <p className="margin_1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
