
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table=>{
    table.increments();
    table.string('name').notNullable();
    table.string('user_name').notNullable();
    table.string('email')
    table.string('password').notNullable();
    table.string('verify_password').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
