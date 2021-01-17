'use strict';

const express = require('express'),
    config = require('config'),
    mongoose = require('mongoose');

const PORT = config.get('port');

const app = express();

async function start () {
    try {
        await mongoose.connect(config.get('mongoUri'));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    } 
}

app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`));