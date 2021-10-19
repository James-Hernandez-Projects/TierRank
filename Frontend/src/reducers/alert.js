/*Reducers specify how the application's state changes in response to actions 
sent to the store. Remember that actions only describe what happened, but don't 
describe how the application's state changes.
*/
import { SET_ALERT, REMOVE_ALERT } from "../actions/types";
const initialState = []; //so we create the reducer for alerting components that will be used for authentications and alerting actions
//based on user actions

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_ALERT": //in the action of set alert we take in the pay load and the state of the user and put that into the store
      return [...state, payload];
    case "REMOVE_ALERT": //after a set amount of time we want to remove the alert from the store and app, so we will filter through and remove it
      return state.filter(alert => alert.id !== payload);
    default:
      //in the default state we will be just giving the state back to its store.
      return state;
  }
}
