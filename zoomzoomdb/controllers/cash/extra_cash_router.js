const knex = require("../../db/knex.js");
const express = require('express');
const router = express.Router();
const libFunc = require('../../lib/query_functions')



router.get('/entry', (req, res)=>{
  knex('extra_cash').then(extra_cash =>{
    res.send(extra_cash)
  })
});

router.post('/entry/new', (req, res)=>{
  Promise.all([
    libFunc.extra_cash(knex, req.body.extra_cash),
    libFunc.register_reading(knex, req.body.register_reading)
  ]).then(function(arrOfResolvedStuff) {
    console.log("All Promise", arrOfResolvedStuff)
    const extra_cash_vals = arrOfResolvedStuff[0][0]
    const register_reading_vals = arrOfResolvedStuff[1][0]

    let extra_cash_sum = 0;
    for(let p in extra_cash_vals){
      extra_cash_sum += (p !== 'id' && p!== 'created_at' && p!== 'updated_at') ? extra_cash_vals[p]: 0;
    }
    let register_reading_sum = 0;
    for(let props in register_reading_vals){
      register_reading_sum += (props !== 'id' && props !== 'created_at' && props !== 'updated_at') ? register_reading_vals[props] :0
    }
    const total_cashflow = extra_cash_sum + register_reading_sum;
    console.log("Total", total_cashflow);
    knex('daily_total_cashflow').insert({
      cash_total: extra_cash_sum,
      register_total: register_reading_sum,
      total_cash_flow: total_cashflow,
      extra_cash_id: extra_cash_vals['id'],
      register_reading_id: register_reading_vals['id']
    }, '*').then(data =>{
      console.log("data", data)
      res.send(data[0])
    })
  })
});

router.put('/entry/update/:id', (req, res) =>{
  knex('extra_cash').where('id', req.param.id)
  .update(req.body).then(response =>{
    res.send(response)
  })
})


module.exports = router;
