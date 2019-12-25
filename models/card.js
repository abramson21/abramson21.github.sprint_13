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
    required: true
  },
  owner : {
    type: Object,
    default: [],
    required: true
  },
  likes : {
    type: Object,
    default: [],
    required: true
  },
  createdAt : {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model('card', cardSchema);