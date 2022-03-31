require("dotenv").config()

const pgp = require("pg-promise")({});

const db = pgp('postgress://localhost:5432/booking_db1')
//const db = pgp(process.env.DATABASE_URL);

module.exports = db;