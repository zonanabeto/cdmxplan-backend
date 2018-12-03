const router = require('express').Router;
const User = require('../models/User');

router.post('/new-user', (req, res, next) => {
  User.create(req.body)
      .then(user => res.json(user))
      .catch(e => console.log(e))
});
