
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('register_reading').del()
    .then(function () {
      // Inserts seed entries
      return knex('register_reading').insert([
        { sale: 7284.87, check_cash_commission: 3177.58},
        { sale: 3000, check_cash_commission: 900},
      ]);
    });
};
