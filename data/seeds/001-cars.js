
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, make: 'Chevy',model:'Corvette', year:1985, miles:100000},
        {id: 2, make: 'Ford', model: 'Mustang', year:1991, miles:50000},
        {id: 3,make:'Toyota', model:'Camry', year:2012, miles:2000}
      ]);
    });
};
