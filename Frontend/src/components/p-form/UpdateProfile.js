/*
so here is the form component that will be used to update the profile,
with this however there is a check to see if the user updated the form and to see
which field was updated.
*/
import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProfile, getProfileNow } from "../../actions/profile";
const UpdateProfile = ({
  profile: { profile, loading },//deconstruct profile
  addProfile,//get the functions we will be needing
  getProfileNow,
  history
}) => {
  const [formData, setFormData] = useState({
    website: "",
    status: "",//these are the fields that will be updated and or infor put into
    skills: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: ""
  });

  useEffect(() => {
    getProfileNow();
    setFormData({//here is the function to see if the the profile was updated or not
      website: loading || !profile.website ? "" : profile.website,
//example, webiste is loading cause we havent hit submit, if it wasnt updated than commit nothiing
//else we update the profile website attribute.
      status: loading || !profile.status ? "" : profile.status,
      skills: loading || !profile.skills ? "" : profile.skills.join(","),

      bio: loading || !profile.bio ? "" : profile.bio,
      twitter: loading || !profile.social ? "" : profile.social.twitter,

      facebook: loading || !profile.social ? "" : profile.social.facebook,
      linkedin: loading || !profile.social ? "" : profile.social.linkedin,

      youtube: loading || !profile.social ? "" : profile.social.youtube,
      instagram: loading || !profile.social ? "" : profile.social.instagram
    });
  }, [loading]);

  const {
    website,
    status,//here we deconstruct the information to grab the values to use later on.
    skills,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>//here is the onchange function to allow the user to type and submit information
  //into the fields. without thes they would not be able to 
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addProfile(formData, history, true);
  };
  return (
    <Fragment>
      <h1 className="header1_text header-color">Create Your Profile</h1>
      <p className="desct_text">
        <i className="fas fa-user"></i> How about we pick your brain for a sec?
        Share some info for your profile
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <select name="status" value={status} onChange={e => onChange(e)}>
            <option value="0">* What type are you?</option>
            <option value="Average Consumer">Average Consumer</option>
            <option value="Enthusiast">Enthusiast</option>
            <option value="Expert">Expert</option>
            <option value="Jack of All Trades">Jack of All Trades</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Tell the community what you fall under
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            Do you have your own website that you want to share with others?
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            Please use comma separated values (eg.
            coding,architecture,pc-building,...)
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={e => onChange(e)}
          ></textarea>
          <small className="form-text">
            But above all us, give us a little about yourself..please
          </small>
        </div>

        <div className="margin_2">
          <button type="button" className="button button-go">
            Add Social Network Links
          </button>
          <span>
            Now, this is completely optional but it would be rather useful for
            yourself and others if you shared any social media accounts
          </span>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-twitter fa-2x"></i>
          <input
            type="text"
            placeholder="Twitter URL"
            name="twitter"
            value={twitter}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-facebook fa-2x"></i>
          <input
            type="text"
            placeholder="Facebook URL"
            name="facebook"
            value={facebook}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-youtube fa-2x"></i>
          <input
            type="text"
            placeholder="YouTube URL"
            name="youtube"
            value={youtube}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-linkedin fa-2x"></i>
          <input
            type="text"
            placeholder="Linkedin URL"
            name="linkedin"
            value={linkedin}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-instagram fa-2x"></i>
          <input
            type="text"
            placeholder="Instagram URL"
            name="instagram"
            value={instagram}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="button button-go margin_1" />
        <Link className="button button-go margin_1" to="/dashboard">
          Go Back
        </Link>
      </form>
      <small>* = required field</small>
    </Fragment>
  );
};
/*
You can use prop-types to document the intended types of properties passed to components.
will check props passed to your components against those definitions, 
and warn in development if they don’t match.
*/
UpdateProfile.propTypes = {//these are the proptypes users profile will be checking for.
  addProfile: PropTypes.func.isRequired,
  getProfileNow: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
//these next functions are essentially making the neew component and rendering it on the page.
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(mapStateToProps, { addProfile, getProfileNow })(
  withRouter(UpdateProfile)
);
