const express = require("express"); //use the express server
const router = express.Router(); //express router for server
const bcrypt = require("bcryptjs"); //to decrypt the password and hash
const auth = require("../../middleware/auth"); //the middleware fo the auth
const jwt = require("jsonwebtoken"); //create  web token for user
const config = require("config"); //config global variables
const { check, validationResult } = require("express-validator/check"); //chekc if fields are correct

const User = require("../../models/User"); //need the user model

// the route we will use    GET api/auth
// description     Test route
// user type access will be:   Public
router.get("/", auth, async (req, res) => {
  //this will be for getting the users log in
  try {
    const user = await User.findById(req.user.id).select("-password"); //find by using email not using pass
    res.json(user); //respond with json format of user
  } catch (err) {
    //if erroor the log message error and send server error
    console.error(err.message);
    res.status(500).send("Server Error"); //server error
  }
});

// the route we will use    POST api/auth
// description     Authenticate user & get token
// user type access will be:   Public
router.post(
  //this will be for loging in the user and checking credentials
  "/",
  [
    check("email", "Please include a valid email").isEmail(), //check if email is properly filled out
    check("password", "Password is required").exists() //check is password is there
  ],
  async (req, res) => {
    const errors = validationResult(req); //next we use the function validationResult to see if the right
    if (!errors.isEmpty()) {
      //again see if there are any errors and if there are that to store them
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body; //deconstruct the email and password from form

    try {
      let user = await User.findOne({ email }); //we try and find the user by email they put

      if (!user) {
        //if the email does not exist then we send invalid credentials for the user
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] }); //no user exists
      }

      const isMatch = await bcrypt.compare(password, user.password); //use bycryptjs to get the password

      if (!isMatch) {
        //passwords dont match then access is denied
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const payload = {
        //if made by previous checks then user exists
        user: {
          //make the payload and give it the user id
          id: user.id
        }
      };

      jwt.sign(
        payload, //create the token for the user and we pass in the payload so it is user specific
        config.get("jwtSecret"),
        { expiresIn: 360000 }, //expression time
        (err, token) => {
          if (err) throw err;
          res.json({ token }); //log in the token
        }
      );
    } catch (err) {
      console.error(err.message); //log the error if there are any
      res.status(500).send("Server error");
    }
  }
);

module.exports = router; //export to the router
