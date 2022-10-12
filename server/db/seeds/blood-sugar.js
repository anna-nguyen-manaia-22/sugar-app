/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('blood_sugar_values')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('blood_sugar_values').insert([
        {
          measure_datetime: new Date('2022-08-28T06:00:00+13:00'),
          bs_value: 5,
        },
        {
          measure_datetime: new Date('2022-08-28T12:00:00+13:00'),
          bs_value: 7,
        },
        {
          measure_datetime: new Date('2022-08-28T18:00:00+13:00'),
          bs_value: 7.5,
        },
        {
          measure_datetime: new Date('2022-08-29T06:00:00+13:00'),
          bs_value: 3.0,
        },
        {
          measure_datetime: new Date('2022-08-29T12:00:00+13:00'),
          bs_value: 10,
        },
        {
          measure_datetime: new Date('2022-08-29T18:00:00+13:00'),
          bs_value: 15.0,
        },
        {
          measure_datetime: new Date('2022-08-30T06:00:00+13:00'),
          bs_value: 4.5,
        },
        {
          measure_datetime: new Date('2022-08-30T12:00:00+13:00'),
          bs_value: 8.0,
        },
        {
          measure_datetime: new Date('2022-08-30T18:00:00+13:00'),
          bs_value: 4.0,
        },
        {
          measure_datetime: new Date('2022-08-31T00:00:00+13:00'),
          bs_value: 5.5,
        },
        {
          measure_datetime: new Date('2022-08-31T00:00:00+13:00'),
          bs_value: 10,
        },
        {
          measure_datetime: new Date('2022-08-31T00:00:00+13:00'),
          bs_value: 5.0,
        },
      ])
    })
}
