const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  handle: {
    type: String,
    required: true,
    max: 40
  },

  company: {
    type: String
  },

  website: {
    type: String
  },

  location: {
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

  githubUsername: {
    type: String
  },

  bio: {
    type: String
  },

  education: [
    {
      institution: {
        type: String,
        required: true
      },
      qualification: {
        type: String,
        required: true
      },
      fieldOfStudy: {
        type: String,
        require: true
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
      location: {
        type: String
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
  social: {
    youtube: {
      link: String
    },
    twitter: {
      link: String
    },
    facebook: {
      link: String
    },
    linkedin: {
      link: String
    },
    instagram: {
      link: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profie = mongoose.model("profile", ProfileSchema);
