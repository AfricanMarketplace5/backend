//POSTGRES KNEX NEEDED???
//Export Up
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
        users.integer('role_id') //Foreign Key
          .unsigned()
          .notNullable()
          .references('role_id')
          .inTable('roles')
          .onUpdate('RESTRICT')
          .onDelete('RESTRICT')
    })

    .createTable('users_items', table => {
        table.increments('users_items_id') //PK
        table.integer('user_id') //FK
            .unsigned()
            .notNullable()
            .references('user_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        table.integer('item_id') //FK
            .unsigned()
            .notNullable()
            .references('item_id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
}


//Export Down
exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('users_items')
    .dropTableIfExists('users')
    .dropTableIfExists('items')
    .dropTableIfExists('roles')
}
