import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";
/*
so here is something kinda cool, this is where we set the alert error and create the object that holds the errors, the type
of error and the id for the error, and on top of that we have a timer set for how long the error will be visible for before vanishing
*/
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  //the alert will only be active for 5 seconds.
  const id = uuid.v4(); //we use the uuid.v4() to generate unique id's or random ids for the alert.
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
