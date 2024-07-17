const { createPool } = require("mysql2")

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "showroom"
})

module.exports = pool