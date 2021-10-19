/*Reducers specify how the application's state changes in response to actions 
sent to the store. Remember that actions only describe what happened, but don't 
describe how the application's state changes.
*/
import {
  //here are the reducer actions that user will be using for the profile
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE
} from "../actions/types";

const initialState = {
  //we set the initial state for the profile reducers
  profile: null, //no user uploaded yet
  profiles: [], //no credentials in the profile yet
  loading: true, //has not been loaded yet.
  error: {} //no errors yet
};
export default function(state = initialState, action) {
  const { type, payload } = action; //we are passing in the user information

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE: //these actions will setting the same functionality.
      return {
        ...state, //spread operator
        profile: payload,
        loading: false //done loading and will render for the user to see if using redux dev tool
      };

    case PROFILE_ERROR:
      return {
        ...state, //spread operator
        error: payload, //set the payload to the error msg
        loading: false //done loading and will render for the user to see if using redux dev tool
      };
    case CLEAR_PROFILE:
      return {
        ...state, //spread operator
        profile: null,
        loading: false //done loading and will render for the user to see if using redux dev tool
      };
    default:
      return state;
  }
}
