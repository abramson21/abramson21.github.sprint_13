const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  avatar: {
    type: String,
    validate: {
      validator: function(v) {
        const val = /^(https|http)?:\/\/(www.)?[^-_.\s](\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3})?(:\d+)?(.+[#a-zA-Z/:0-9]{1,})?\.(.+[#a-zA-Z/:0-9]{1,})?$/;
        return val.test(v);
      },
    },
    required: true
  }
});

module.exports = mongoose.model('user', userSchema);