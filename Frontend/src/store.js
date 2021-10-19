//here we are creating a store so that we can save states and actions of the user
//if you download the redux devtool we can see more of this specifically
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; //the extension we see specific layout
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {}; //we first have to set the state to empty because technically the user has
//done no actions

const middleware = [thunk]; //we will use thunk to use for computations that will happen later and not ran
//on first opening of the application

const store = createStore(
  rootReducer, //we create the store and pass in root reducers
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)) //do the spread operator for the middle ware.
);

export default store;
