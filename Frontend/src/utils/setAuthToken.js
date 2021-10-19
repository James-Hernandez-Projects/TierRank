//this function will take the token and import it to the headers
import axios from "axios";

const setAuthToken = token => {
  //like in postman
  if (token) {
    //checks the token from local storage
    //we will be using axios because we will be making requests to the x-auth headers and set them to token
    axios.defaults.headers.common["x-auth-token"] = token; //set the headers
  } else {
    delete axios.defaults.headers.common["x-auth-token"]; //if the token is not there delete from the global headers
  }
};

export default setAuthToken;
