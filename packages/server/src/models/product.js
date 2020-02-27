import knex from 'knex'

const myConnection = knex({
  client: 'pg',
  version: '12.1',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'example',
    database: 'pricey',
  },
})

function getAll() {
  myConnection
    .select()
    .from('products')
    .then(console.log)
}

export default {
  getAll,
}
