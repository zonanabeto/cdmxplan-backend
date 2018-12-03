const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/new-user', (req, res, next) => {
  User.create(req.body)
      .then(user => res.json(user))
      .catch(e => console.log(e))
});

module.exports = router;
