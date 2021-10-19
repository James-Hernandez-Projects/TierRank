import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
const Home = ({ auth: { isAuthenticated, loading }, logout }) => {
  //this home page is just a little something that gives more about the site
  //only logged in users can access it and it gives a little more detail about how to use the site.
  return (
    <Fragment>
      <div className="glider-container">
        <h1 className="usertest">Welcome to the TierRank site!</h1>
        <div className="glider">
          <figure className="glider-fig">
            <p className="glider-text">
              Your New Journey <br />
              Starts Here...
            </p>
          </figure>
          <figure className="glider-fig">
            <p className="glider-text">
              Don't Be Afraid <br />
              Join Our Subscriber List!
            </p>
          </figure>
          <figure className="glider-fig">
            <p className="glider-text">
              Explore <span>All</span> Your Interests
              <br />
              And If You Can't Find It On Our Site Then Make One!
            </p>
          </figure>
        </div>
      </div>
      <div className="signuprow">
        <div className="signContainer">
          <p className="signContainer_text">
            Now that you have the Account create,post, and share with friends on
            social media Just go to your dashboard!
          </p>
          <Link to="/dashboard" className="signContainer_button">
            Dashbord
          </Link>
        </div>
        <div className="littleDiscription">
          Explore our website and see what
          <span className="littleDiscription_you">YOU</span> can offer to
          community
        </div>
      </div>

      <div className="slogans">
        <div className="core_capsule">
          <div className="core_title">
            <p>Make your own List!</p>
          </div>
          <div className="cores">
            <div className="cores_content">
              <p className="title">GET STARTED</p>
              <p>
                <span className="cores_num">1.</span> Head to Your Dashboard or
                Lists Tab
              </p>
              <p>
                <span className="cores_num">2.</span> Add a new List
              </p>
              <p>
                <span className="cores_num">3.</span> Give a list based on your
                opinions
              </p>
              <p className="caption">...Simple</p>
            </div>
          </div>
        </div>
        <div className="core_capsule">
          <div className="core_title">
            <p>Share with Friends!</p>
          </div>
          <div className="cores">
            <div className="cores_content">
              <p className="title">GET SHARING</p>
              <p>
                <span className="cores_num">
                  <i className="fas fa-user-plus"></i>
                </span>
                Share your lists friends on social media.
              </p>

              <p className="caption">...Simple</p>
            </div>
          </div>
        </div>
        <div className="core_capsule">
          <div className="core_title">
            <p>
              Your Interests start here!<i className="fas fa-users"></i>
            </p>
          </div>
          <div className="cores">
            <div className="cores_content">
              <p className="title">IT ALL STARTS HERE</p>
              <p>
                <span className="cores_num">
                  <i className="fas fa-users"></i>
                </span>
                See what the community has to offer and share about your
                Interests
              </p>
              <p>
                <span className="cores_num">
                  <i className="fas fa-pencil-ruler"></i>
                </span>
                If we dont have it then make it!
              </p>
              <p>
                <span className="cores_num">
                  <i className="fas fa-check-double"></i>
                </span>
                Get Started Today!
              </p>
              <p className="caption">
                <Link to="/dashboard" className="signc_button">
                  Dashboard
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Home.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logout })(Home);
