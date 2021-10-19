/*Reducers specify how the application's state changes in response to actions 
sent to the store. Remember that actions only describe what happened, but don't 
describe how the application's state changes.
*/
import { combineReducers } from "redux"; //here will grab the reducers and for the route acions
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";

export default combineReducers({
  //the reducers that we have made for the 3 application states
  alert,
  auth,
  profile
});
