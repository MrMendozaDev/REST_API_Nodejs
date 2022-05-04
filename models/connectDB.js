const mysql = require("mysql")

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "mavi",
    connectionLimit: 50,
    charset: "utf8mb4"
})


module.exports = {pool}