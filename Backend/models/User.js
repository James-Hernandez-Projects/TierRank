const mongoose = require("mongoose");
/*
okay so here we have the model that we will be using to construct a user; so a user will typically have a 
name type string, an email type string, password type string, and we want to give them an avatar which
will also be a type string, this is becasue we want to use the gravatar dependency to link a url to a basic
avatar photo you will see in final development, and finally we want the user to have date they signed up
which will be the date.now action
*/
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});
//we use mongoose to export our model of user to the other files that will be requiring it on the server
//side
module.exports = User = mongoose.model("user", UserSchema);
