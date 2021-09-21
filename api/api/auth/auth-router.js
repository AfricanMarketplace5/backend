//Imports
const bcrypt = require('bcryptjs')

const router = require('express').Router()
const Users = require('./users-model')
const md = require('../middleware/middleware')
const tokenBuilder = require('../middleware/tokenBuilder')


//Ednpoints
router.post('/register', 
  md.requireUsernamePassword, 
  md.checkUsernameTaken, 
  (req, res, next) => {
    const { username, password } = req.body
    const hash = bcrypt.hashSync(password, 8);

    Users.add({ username, password: hash })
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(next);
});

router.post('/login', 
  md.requireUsernamePassword, 
  md.checkUsernamePasswordExist, 
  (req, res, next) => {
    if (bcrypt.compareSync(req.body.password, req.user.password)) {
      const token = tokenBuilder(req.user);
           
      res.status(200).json({
        message: `welcome, ${req.user.username}`,
        token,
      });
    } else {
      next({
        status: 401,
        message: 'invalid credentials' 
      });
    }
});


//Exports; Exposing
module.exports = router;