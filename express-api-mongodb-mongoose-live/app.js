const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error));

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()); 

app.use('/', require('./routes/index'));
app.use('/api/aliens', require('./routes/aliens'));

module.exports = app;
