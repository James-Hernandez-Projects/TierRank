/*Reducers specify how the application's state changes in response to actions 
sent to the store. Remember that actions only describe what happened, but don't 
describe how the application's state changes.
*/
import {
  //for the authentication we will be using the actions created from the actions folder
  REGISTER_SUCCESS,
  REGISTER_FAIL, //actiions are self explanatory given the name
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from "../actions/types";

const initialState = {
  //for the initial state upon open we first want to set grab the token
  token: localStorage.getItem("token"),
  isAuthenticated: null, //set to null cause they arent logged in
  loading: true, //set to true because app has loaded
  user: null //set to null cause not user is signed in yet
};

export default function(state = initialState, action) {
  const { type, payload } = action; //deconstructor
  //so now depending on the actions that the user will be using
  //will correspond to how the reducer will react
  switch (type) {
    case USER_LOADED:
      return {
        //if user is loaded successfully we copy over the state
        ...state,
        isAuthenticated: true, //logged in true
        loading: false, //means everythis has already been loaded
        user: payload //send over user's data
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS: //Now some actiions will have the reducer do the same things because
      //they will use the same mechanics.
      localStorage.setItem("token", payload.token);
      return {
        ...state, //spread operator for state
        ...payload, //sprad operator for payload taht holds info
        isAuthenticated: true, //has credentials
        loading: false //loading is completed
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT: //Now some actiions will have the reducer do the same things because
      //they will use the same mechanics.
      localStorage.removeItem("token"); //take away the token so for security purposees
      return {
        //reinitalize the state so when the user logs back in it will start over.
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    default:
      return state;
  }
}
