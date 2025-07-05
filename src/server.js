
const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'DESKTOP-0328TGV',
    password:'',
    database: 'GolfApp'
})

app.get('/', (re, res) => {
    return res.json("from backend")
})

app.get('/persona', (req, res) => {
    const sql = "SELECT * FROM Persona"
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})