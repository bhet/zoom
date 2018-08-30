
exports.up = function(knex, Promise) {
  return knex.schema.createTable('extra_cash', table =>{
    table.increments();
    table.float('yesterday_cash').notNullable();
    table.float('cash_from_bank').notNullable();
    table.float('cash_from_atm').notNullable();
    table.float('orlandi_valuta').notNullable();
    table.float('money_order').notNullable();
    table.float('money_gram').notNullable();
    table.float('lotto_lottery').notNullable();
    table.float('anonymous').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('extra_cash');
};
