const mongoose = require("mongoose");
//now this is the build modle for the user's profile that we will put in the database
const ProfileSchema = new mongoose.Schema({
  user: {
    //the user of the profile
    type: mongoose.Schema.Types.ObjectId,
    ref: "user" //referencing the user modle
  },
  website: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },

  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],

  list: [
    {
      title: {
        type: String,
        required: true
      },
      item1: {
        type: String,
        require: true
      },
      item2: {
        type: String,
        require: true
      },
      item3: {
        type: String,
        require: true
      },
      item4: {
        type: String,
        require: true
      },
      item5: {
        type: String,
        require: true
      },
      description: {
        type: String
      }
    }
  ],

  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
