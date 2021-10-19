import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
/*
here we have the subnavbar componetn, this componetn is where the categories will be placeed
like the links to the different categories. this will only pop up if the user is logged in
*/
const SubNavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  //check for authentication first and if true we show the user the nav bar
  const subgoLinks = (
    <div className="category_container">
      <div className="category_container_Button">
        <span className="category_container_topic">
          <a href="#" className="category_container_link">
            <i className="fas fa-desktop"></i>Electronics
          </a>
        </span>
      </div>
      <div className="category_container_Button">
        <span className="category_container_topic">
          <a href="#" className="category_container_link">
            <i className="fas fa-heartbeat"></i>Health & Fitness
          </a>
        </span>
      </div>
      <div className="category_container_Button">
        <span className="category_container_topic">
          <a href="#" className="category_container_link">
            <i className="fas fa-ghost"></i>Gaming
          </a>
        </span>
      </div>
      <div className="category_container_Button">
        <span className="category_container_topic">
          <a href="#" className="category_container_link">
            <i className="fas fa-book-reader"></i>Education
          </a>
        </span>
      </div>
      <div className="category_container_Button">
        <span className="category_container_topic">
          <a href="#" className="category_container_link">
            <i className="fas fa-music"></i>Music
          </a>
        </span>
      </div>
    </div>
  );
  return (//a turnary statment to show the user if they are lgged in.
    <div>
      {!loading && <Fragment>{isAuthenticated ? subgoLinks : ""}</Fragment>}
    </div>
  );
};

SubNavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logout })(SubNavBar);
