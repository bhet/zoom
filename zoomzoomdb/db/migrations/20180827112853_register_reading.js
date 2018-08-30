
exports.up = function(knex, Promise) {
  return knex.schema.createTable('register_reading', table=>{
    table.increments();
    table.float('sale').notNullable();
    table.float('check_cash_commission').notNullable();
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('register_reading');
};
