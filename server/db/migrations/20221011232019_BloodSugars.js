/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('blood_sugar_values', (table) => {
    table.increments()
    table.date('measure_datetime')
    table.decimal('bs_value')
    table.string('note')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('blood_sugar_values')
}
