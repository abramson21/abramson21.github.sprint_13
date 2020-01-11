const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
  },
  link: {
    type: String,
    validate: {
      validator: function(v) {
        const val = /^(https|http)?:\/\/(www.)?[^-_.\s](\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3})?(:\d+)?(.+[#a-zA-Z/:0-9]{1,})?\.(.+[#a-zA-Z/:0-9]{1,})?$/;
        return val.test(v);
      },
    },
    required: true
  },
  owner : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  likes : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    default: []
  }],
  createdAt : {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('card', cardSchema);