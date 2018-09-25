const knex = require("../../db/knex.js");
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

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
  console.log(req.body);
  knex('users').where('email', req.body.email)
  .then(result =>{
    let user = result[0];
    console.log(user.password);
    console.log(req.body.password);
    console.log(user.password === req.body.password);
    if(user.password === req.body.password){
      console.log("running this");
      let token = jwt.sign(user, require('../../config/secret_key'));
      console.log(token);
      res.json({token});

    } else {
      res.sendStatus(400);
    }
  })
})

module.exports = router;
