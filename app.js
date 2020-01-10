const express = require('express');
const path = require('path');
const users = require('./routes/users.js');
const cards = require('./routes/cards.js');
const mongoose = require('mongoose');
const router = require('express').Router();
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.use((req, res, next) => {
  req.user = {
    _id: '5e0319b3cb2a0e3ac8aa8067'
  };

  next();
});

const { PORT = 3000 } = process.env;

app.use('/',users);
app.use('/', cards);
app.listen(PORT, () => {});

app.get('/*', (req, res) => {
  res.statusCode = 404;
  res.statusMessage = 'Error';
  res.send({ message: 'Запрашиваемый ресурс не найден' });
});