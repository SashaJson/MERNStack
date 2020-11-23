'use strict';

const express  = require('express');
const config   = require('config');
const mongoose = require('mongoose');

const app = express();

const PORT = config.get('port');

async function start () {
    try {
        await mongoose.connect(config.get('mongoUri'));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    } 
}

app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`));