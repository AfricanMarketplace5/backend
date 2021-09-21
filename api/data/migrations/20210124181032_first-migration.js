//POSTGRES KNEX
//Will NEED items-owners table

exports.up = async (knex) => {
  await knex.schema
    .createTable('roles', roles => {
      roles.increments('role_id') //Primary Key
      roles.string('role_name', 50).notNullable().unique()
    })

    .createTable('items', items => {
        items.increments('item_id') //Primary Key
        items.string('item_name', 100).notNullable()
        items.string('item_description', 200).notNullable()
        items.string('item_location', 100).notNullable()
        items.string('item_price', 32).notNullable()
    })

    .createTable('users', users => {
      users.increments('user_id') //Primary Key
      users.string('username', 100).notNullable().unique()
      users.string('password', 100).notNullable()
    })
}
// users.integer('role_id') //Foreign Key
//         .unsigned()
//         .notNullable()
//         .references('role_id')
//         .inTable('roles')
//         .onUpdate('RESTRICT')
//         .onDelete('RESTRICT')
//     users.integer('item_id') //Foreign Key
//         .unsigned()
//         .notNullable()
//         .references('item_id')
//         .inTable('items')
//         .onUpdate('RESTRICT')
//         .onDelete('RESTRICT')

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('items')
    .dropTableIfExists('roles')
}
// exports.up = async (knex) => {
//   await knex.schema
//     .createTable('users', (users) => {
//       users.increments('user_id')
//       users.string('username', 200).notNullable()
//       users.string('password', 200).notNullable()
//       users.timestamps(false, true)
//     })
// }

// exports.down = async (knex) => {
//   await knex.schema.dropTableIfExists('users')
// }
