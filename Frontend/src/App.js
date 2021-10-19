import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";//navbar Comonent
import SubNavBar from "./components/layout/SubNavBar";//subnavbar component
import Landing from "./components/layout/Landing";//landing page component
import Login from "./components/auth/Login";//login page component
import Register from "./components/auth/Register";//register page component
import Alert from "./components/layout/Alert";//alert the user component
import Dash from "./components/userdash/Dash";//Users dashboarde component
import Home from "./components/layout/Home";//////////home page component
import AddProfile from "./components/p-form/AddProfile";//profile form component
import UpdateProfile from "./components/p-form/UpdateProfile";//update profile form component
import AddMyExperience from "./components/p-form/AddMyExperience";//add experience form component
import AddMyList from "./components/p-form/AddMyList";//add list form component
import PRoute from "./components/layout/routes/PRoute";//Authorization routs component
//components for redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

if (localStorage.token) {//we set the authorization token for the user
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());//put the store the beginning actions
  }, []); //adding empty sets of brackets allows it to only run once
//so all the pages are being loaded in the same container so all pages will be loaded in the switch
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <SubNavBar />
          <Route exact path="/" component={Landing} />
          <section className="section_container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PRoute exact path="/dashboard" component={Dash} />
              <PRoute exact path="/addProfile" component={AddProfile} />
              <PRoute exact path="/updateMyProfile" component={UpdateProfile} />
              <PRoute
                exact
                path="/addMyExperience"
                component={AddMyExperience}
              />
              <PRoute exact path="/addMyList" component={AddMyList} />
              <PRoute exact path="/home" component={Home} /> 
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;//exporting the app component for the other files like index.js to use.
