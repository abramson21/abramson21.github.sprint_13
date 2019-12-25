const router = require('express').Router();
const fs = require('fs');
const mongoose = require('mongoose');

const Card = require('../models/card');

mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

router.get('/cards', (req, res) => {
  Card.find({})
    .then(card => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

router.post('/cards', (req, res) => {
  const {name, link} = req.body;
  Card.create({name, link})
    .then(card => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

router.delete('/cards/:cardId', (req, res) => {
  Card.findByIdAndRemove(req.params.id)
      .then(user => res.send({ data: user }))
      .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
});

module.exports = router;