
exports.up = function(knex) {
    return knex.schema.createTable("ongs", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("email").notNullable().unique().comment("Used in login, ongs principal email!");
        table.string("phone").notNullable();
        table.string("city").notNullable();
        table.string("uf", 2);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("ongs");
};
