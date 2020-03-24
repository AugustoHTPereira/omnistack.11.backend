
exports.up = function(knex) {
    return knex.schema.createTable("incidents", (table) => {
        table.increments("id").primary();
        table.string("title").notNullable();
        table.text("description").notNullable();
        table.decimal("value").notNullable();

        table.integer("ong_id").notNullable().unsigned();
        table.foreign("ong_id").references("ongs.id");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
