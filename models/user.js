'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String
  },
  name: {
    type: String
  },
  photo: {
    type: String
  },
  githubId: {
    type: String
  },
  username: {
    type: String
  },
  passwordHash: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
