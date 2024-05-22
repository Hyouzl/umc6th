// const express = require('express')   // common JS
import express from 'express'  // ES6
import path from 'path';        
import { fileURLToPath } from 'url';

// Use the path functions to get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express()
const port = 3000;

import dbConfig from './config/sqlDB.js';

var conn = dbConfig.init();

dbConfig.connect(conn);

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})