const knex = require("../../db/knex.js");
const express = require('express');
const router = express.Router();

router.post('/create', (req, res)=>{
  knex('users').insert({
    full_name: req.body.full_name,
    user_name: req.body.user_name,
    password: req.body.password
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
