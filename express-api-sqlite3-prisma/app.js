const express = require('express');
const path = require('path');
const logger = require('morgan');
require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/api/comments', require('./routes/comments'));

module.exports = app;