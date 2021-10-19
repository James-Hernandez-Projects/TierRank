import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
/*
this is the main navigation bar for the user to see, this navbar is separated into two differnt
navbars, what i mean by this is that we have navbar to show the user not logged in, and a navbar for
a user that IS logged in.
*/
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const goLinks = (//navbar for the logged in user
    <ul>
      <li>
        <Link to="/dashboard">Your Page</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          GET OUT!
        </a>
      </li>
    </ul>
  );
  const stopLinks = (//navbar for the not logged in user(guest)
    <ul>
      <li>
        <Link to="#!">Users</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  return (//part of the navbar that will always be showing.
    <nav className="hearder_nav">
      <h1>
        <Link to="/">
          TierRank
          <img src={require("../../img/little-logo.png")} />
        </Link>
      </h1>
      <span>DarkMode<input type="checkbox" id="tex"/></span>
      {!loading && <Fragment>{isAuthenticated ? goLinks : stopLinks}</Fragment>}
    </nav>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logout })(Navbar);
