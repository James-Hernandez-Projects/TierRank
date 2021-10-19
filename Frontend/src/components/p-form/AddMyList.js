import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addMyList } from "../../actions/profile";
//this component acts the same as the other forms, we take in the form data placed in fields and 
//places them into the desired variables for the form data
const AddMyList = ({ addMyList, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    item1: "",
    item2: "",
    item3: "",
    item4: "",//we are taking the data as an empty string first
    item5: '',
    description: ""
  });
  const { title, item1, item2, item3, item4,item5, description } = formData;
  const onChange = e =>//deconstruct the form data to have access to the variables 
  //allow the fields to have data to be typed in them.
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addMyList(formData, history);
  };
  return (
    <Fragment>
      <h1 class="header1_text header-color">
        Add A List
      </h1>
      <p class="desct_text">
        <i class="fas fa-award"></i> Add a list to keep on your profile page for your own personal list.
        <small>*other people can see these lists but can't comment on them</small>
      </p>
      <form class="form" onSubmit={e => onSubmit(e)}>
        <div class="form-group">
          <input type="text" placeholder="List Title" name="title" value={title} onChange={e => onChange(e)} required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Item 1" name="item1" value={item1} onChange={e => onChange(e)} required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Item 2" name="item2" value={item2} onChange={e => onChange(e)} required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Item 3" name="item3" value={item3} onChange={e => onChange(e)} required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Item 4" name="item4" value={item4} onChange={e => onChange(e)} required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Item 5" name="item5" value={item5} onChange={e => onChange(e)} required />
        </div>
        <div class="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="List's description"
            value={description} onChange={e => onChange(e)}
          ></textarea>
        </div>
        <small>* = required field</small>
        <input type="submit" class="button button-go margin_1" />
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
AddMyList.propTypes = {
    addMyList: PropTypes.func.isRequired
};

export default connect(null, { addMyList })(AddMyList);
