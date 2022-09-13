const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, () =>  {
    console.log('API working');
})

app.get("/", async (req, res) => { 
    res.json({status: "The app is waiting"})
})

app.get("/participants", async (req, res) => { 
    const query = 'SELECT * FROM participants';
    pool.query
})

const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
})