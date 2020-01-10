const router = require('express').Router();
const express = require('express');
const fs = require('fs');
const User = require('../models/user');

router.get('/users', (req, res) => {
  User.find({})
  .then(user => res.send({ data: user }))
  .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

router.post('/users', (req, res) => {
  const {name, about, avatar} = req.body;
  console.log('Сработал весь список');
  console.log(req.body);
  User.create({name, about, avatar})
    .then(user => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

router.get('/users/:userId', (req, res) => {
  console.log('Сработала одна позиция');
  User.findById(req.params.userId)
    .then(user => res.send({ data: user }))
    .catch(() => res.status(404).send({ message: 'Данного пользователя нет' }));
});

module.exports = router;