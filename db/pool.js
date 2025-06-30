const {Pool} = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: "amanuel",
    database: "top_users",
    password: "Aman1491",
    port: 5432
});