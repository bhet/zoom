
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('extra_cash').del()
    .then(function () {
      // Inserts seed entries
      return knex('extra_cash').insert([
        { yesterday_cash: 2059, cash_from_bank: 246500, cash_from_atm: 4000, orlandi_valuta: 150, money_order: 1880, money_gram: 0, lotto_lottery: 443.95, anonymous: 0 },
        { yesterday_cash: 2059, cash_from_bank: 40000, cash_from_atm: 0, orlandi_valuta: 900, money_order: 1000, money_gram: 200, lotto_lottery: 400, anonymous: 0 }
      ]);
    });
};
