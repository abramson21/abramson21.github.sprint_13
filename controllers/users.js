const User = require('../models/user');

module.exports.getAllUsers = (req, res) => {
  User.find({})
  .then((user) => {
    if (user.length === 0){
      return res.status(404).send({ message: 'База данных user пуста! '})
    }
    return res.send({ data: user })
  })
  .catch((error) => res.status(500).send({ message: error.message }));
};

module.exports.createUser = (req, res) => {
  const {name, about, avatar} = req.body;
  User.create({name, about, avatar})
    .then(user => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Не удалось создать пользователя' }));
};

module.exports.getUser = (req, res) => {
  User.findById(req.params.userId)
  .then((userId) => {
    if (!userId) {
      res.status(404).send({ message: 'Такого пользователя нет' });
    } else {
      res.send({ userId });
    }
  })
  .catch(() => res.status(500).send({ message: "Нет пользователя с таким id"}));
};