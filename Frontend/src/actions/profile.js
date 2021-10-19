import axios from "axios";
import { setAlert } from "./alert";
import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from "./types";

//need to get current users profile
export const getProfileNow = () => async dispatch => {
  try {
    const res = await axios.get("api/profile/me");
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
//addProfile
//create the profile and or update the profile
// Create or update profile
export const addProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'//here we set the content type the for the headers for the information 
      }
    };

    const res = await axios.post('/api/profile', formData, config);//the route we will be using.

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'go'));

    if (!edit) {//if the profiile was updated we want to add the new informaiton 
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'wrong')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//IN THIS SECTION WE ILL BE ADDING SOME USER EXPERENCE
export const addMyExperience = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: { "Content-Type": "application/json" }//here we set the content type the for the headers for the information 
    };
    const res = await axios.put("/api/profile/experience", formData, config);//the route we will be using.
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert("You have added an experience"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "wrong")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
//IN THIS SECTION WE ILL BE ADDING A LIST
//
export const addMyList = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: { "Content-Type": "application/json" }//here we set the content type the for the headers for the information 
    };
    const res = await axios.put("/api/profile/list", formData, config);//the route we will be using.
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert("You have added a list"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "wrong")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
// we want to delete the experiene we made api/profile/experience/:id
export const delMyExp = id => async dispatch => {
  try {
    const res = await axios.delete(`api/profile/experience/${id}`);//the route we will be using.
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
// we want to delete the list we made api/profile/experience/:id
export const delMyList = id => async dispatch => {
  try {
    const res = await axios.delete(`api/profile/list/${id}`);//the route we will be using.
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
