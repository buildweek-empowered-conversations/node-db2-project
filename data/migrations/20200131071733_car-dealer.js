
exports.up = function(knex) {
    return knex.schema.createTable('cars',tbl => {
        tbl.increments();
        tbl.text('make', 120).notNullable();
        tbl.text('model', 120).notNullable();
        tbl.integer('year').notNullable();
        tbl.integer('miles');
        tbl.text('title');
        tbl.integer('vin');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  
};
