const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    port: 5432,
    database: 'freelance',
    idleTimeoutMillis: 1000
})

module.exports = pool;