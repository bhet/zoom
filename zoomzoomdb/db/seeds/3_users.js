
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'sam', user_name: 'sam123', email: 'sam@gmail.com', password: 'asd12', verify_password: 'asd12'},
        { name: 'smrit', user_name: 'smrit12', email: 'smrit@gmail.com', password: 'dog12', verify_password:'dog12'},
      ]);
    });
};
