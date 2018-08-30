module.exports = {
  extra_cash(knex, body) {
    return knex('extra_cash').insert({
      yesterday_cash: body.yesterday_cash,
      cash_from_bank: body.cash_from_bank,
      cash_from_atm: body.cash_from_atm,
      orlandi_valuta: body.orlandi_valuta,
      money_order: body.money_order,
      money_gram: body.money_gram,
      lotto_lottery: body.lotto_lottery,
      anonymous: body.anonymous
    }, '*')
  },
  register_reading(knex, body) {
    return knex('register_reading').insert({
      sale: body.sale,
      check_cash_commission: body.check_cash_commission
    }, '*')
  }
}
