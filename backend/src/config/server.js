const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const db = require('./db')
const router = require('../router')
const bodyParser = require('body-parser')
const path = require('path')
module.exports = () => {
    dotenv.config()
    const app = express()
    const PORT = process.env.PORT || 8823
    db()
    app.use(bodyParser.json())
    app.use(cors())
    app.use(router())
    app.use('/uploads', express.static(path.resolve('uploads')));
    app.listen(PORT, () => {
        console.log(`API RUNNING ON PORT`, PORT)
    })
}



