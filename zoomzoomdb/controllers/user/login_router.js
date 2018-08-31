const knex = require("../../db/knex.js");
const express = require('express');
const router = express.Router();

router.post('/signup', (req, res)=>{
  knex('users').insert({
    full_name: req.body.full_name,
    user_name: req.body.user_name,
    user_eamil: req.body.user_eamil,
    password: req.body.password,
    varify_password: req.body.varify_password
  }).then(()=>{
    res.send(200)
  })
});

router.post('/login', (req, res)=>{
  knex('users').where('email', req.body.email)
  .then(result =>{
    let user = result[0];
    if(user.pasword === req.body.password){
      req.session.user = user;
      req.session.save(()=>{
        res.send(200)
      })
    } else {
      res.redirect('/login')
    }
  })
})

module.exports = router;
