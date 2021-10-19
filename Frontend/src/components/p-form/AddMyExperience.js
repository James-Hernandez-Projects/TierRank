import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addMyExperience } from "../../actions/profile";
//this component acts the same as the other forms, we take in the form data placed in fields and
//places them into the desired variables for the form data
const AddMyExperience = ({ addMyExperience, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    description: "",
    current: false
  });
  const { title, company, location, from, to, description, current } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addMyExperience(formData, history);
  };
  return (
    <Fragment>
      <h1 className="header1_text header-color">Add An Experience</h1>
      <p className="desct_text">
        <i className="fas fa-award"></i> Add any experience you may have that
        supports your list ranking *this is not mandatory for list creations
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Job Title"
            name="title"
            value={title}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Company"
            name="company"
            value={company}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            name="from"
            value={from}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              value={current}
              onChange={e => onChange(e)}
            />{" "}
            Current Job
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" value={to} onChange={e => onChange(e)} />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Experience description"
            value={description}
            onChange={e => onChange(e)}
          ></textarea>
        </div>
        <small>* = required field</small>
        <input type="submit" className="button button-go margin_1" />
        <Link className="button button-go margin_1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};
/*
You can use prop-types to document the intended types of properties passed to components.
will check props passed to your components against those definitions, 
and warn in development if they don’t match.
*/
//these next functions are essentially making the neew component and rendering it on the page.
AddMyExperience.propTypes = {
  addMyExperience: PropTypes.func.isRequired
};

export default connect(null, { addMyExperience })(AddMyExperience);
