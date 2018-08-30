
exports.up = function(knex, Promise) {
  return knex.schema.createTable('daily_total_cashflow', table=>{
    table.increments();
    table.float('cash_total');
    table.float('register_total');
    table.float('total_cash_flow');
    table.integer('extra_cash_id')
    .references('id')
    .inTable('extra_cash')
    .onDelete('CASCADE')
    .index();
    table.integer('register_reading_id')
    .references('id')
    .inTable('register_reading')
    .onDelete('CASCADE')
    .index();

    table.timestamps(true, true)
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('daily_total_cashflow');
};
