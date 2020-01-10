const router = require('express').Router();
const fs = require('fs');
const mongoose = require('mongoose');

const Card = require('../models/card');

router.get('/cards', (req, res) => {
  Card.find({})
    .then(card => res.send({ data: card }))
    .catch(() => res.status(404).send({ message: 'Карточек нет' }));
});

router.post('/cards', (req, res) => {
  const {name, link} = req.body;
  console.log(req.body);
  Card.create({name, link})
    .then(card => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

router.delete('/cards/:cardId', (req, res) => {
  Card.findByIdAndRemove(req.params.id)
      .then(user => res.send({ data: user }))
      .catch(err => res.status(404).send({ message: 'Данной карточки нет' }));
});

module.exports = router;