const express = require("express"); //this will require the express framework
const router = express.Router(); //this will route routes
const gravatar = require("gravatar"); //this will use the avatar logo 'basic one'
const bcrypt = require("bcryptjs"); //this will hash the passwords of the user
const jwt = require("jsonwebtoken"); //this will give a token to the user so that they can travel the site
const config = require("config"); //this will help in configuring everything
const { check, validationResult } = require("express-validator/check"); //we want to validate this

const User = require("../../models/User"); //this will be immpotting the model we made for the user.

// The route user will take    POST api/users
// description of action     Register user
// the route will be granted access level of:   Public
router.post(
  //this will post a new user to the data base
  "/",
  [
    check("name", "Name is required") //we use the check functions from the express validator for name
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(), //check for the email field properly filled
    check(
      //ceck if password is properly input
      "password",
      "Please enter a password with 6 or more characters" //these are the errors as second parameter
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req); //validate request by the user
    if (!errors.isEmpty()) {
      //if there are errores then request denied
      return res.status(400).json({ errors: errors.array() }); //res status and log errors in json format
    }

    const { name, email, password } = req.body; //deconstrudt the body to gram name, email, password

    try {
      let user = await User.findOne({ email }); //however now we have to check if user exists!!
      //if we find duplicat user email in database then user already exists!
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] }); //user exists so no register
      }

      const avatar = gravatar.url(email, {
        //here we will use the gravatar to assign the avatar image
        s: "200", //status
        r: "pg", //content type parental guidness
        d: "retro" //the style of the image
      });

      user = new User({
        //next we construct a new user that has these values
        name,
        email,
        avatar,
        password
      });

      const salt = await bcrypt.genSalt(10); //here we use the bycryptjs to hash the password

      user.password = await bcrypt.hash(password, salt); //the salt is fro the amount of times is spliced

      await user.save(); //save the user

      const payload = {
        //next assign a payload for the user
        user: {
          //the user will have an id
          id: user.id
        }
      };

      jwt.sign(
        payload, //here we will make the token for the user and assign it a tiime to be active for
        config.get("jwtSecret"),
        { expiresIn: 360000 }, //active time
        (err, token) => {
          if (err) throw err;
          res.json({ token }); //res the token
        }
      );
    } catch (err) {
      console.error(err.message); //if there are errors then we will output server error
      res.status(500).send("Server error");
    }
  }
);

module.exports = router; //export the router
