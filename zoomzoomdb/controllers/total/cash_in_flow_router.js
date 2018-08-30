const knex = require("../../db/knex.js");
const express = require('express');
const router = express.Router();


router.get('/inflow', (req, res)=>{
  knex('daily_total_cashflow').then(cash =>{
    res.send(cash)
  })
});
module.exports = router;
