/*
this file is for the authentication action the user will take for authorizing and or getting credentals
*/
import axios from "axios";
import { setAlert } from "./alert";
import {//actions the user will take for authentication
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE
} from "./types";
import setAuthToken from "../utils/setAuthToken"; //imports the auth token

// this will load the user
export const loadUser = () => async dispatch => {
  if (localStorage.token) {//we grag the token from the users local storage
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data //the data sent from the route
    });
  } catch (err) {
    dispatch({//if there are errors we state what type of error, the user can see this in the logs and redux dev tool
      type: AUTH_ERROR
    });
  }
};

// this section is to regiester the user
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });//convert the password and email values

  try {
    const res = await axios.post("/api/users", body, config); //request to the backend

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data //returns the token
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors; //get errors from array

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "wrong"))); //look at erros from array
    }

    dispatch({//if there are errors we state what type of error, the user can see this in the logs and redux dev tool
      type: REGISTER_FAIL
    });
  }
};

// this will log in the user
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });//convert the password and email values

  try {
    const res = await axios.post("/api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {//if there are errors we state what type of error, the user can see this in the logs and redux dev tool
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "wrong")));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};
// this will logout the user and clear the profile from the cache

export const logout = () => dispatch => {
    
  dispatch({ type: CLEAR_PROFILE });//when the user logs out we have to take actions to take the token out of storage for security and
  //we have to clear the profile so no data is carried over for the next time they log in.
  dispatch({ type: LOGOUT });
};
