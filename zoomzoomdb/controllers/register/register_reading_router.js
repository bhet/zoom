const knex = require("../../db/knex.js");
const express = require('express');
const router = express.Router();




router.get('/reading', (req, res)=>{
  knex('register_reading').then(register_reading =>{
    res.send(register_reading)
  })
});


router.put('/update/:id', (req, res)=>{
  knex('register_reading').where('id', req.param.id)
  .update(req.body).then(response =>{
    res.send(response)
  })
});

module.exports = router;
