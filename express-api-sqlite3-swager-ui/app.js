const express = require('express');
const path = require('path');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger');
require('dotenv').config();

const app = express();
const swaggerCss = { customCss: '.topbar {display: none;}' };

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/posts', require('./routes/posts'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, swaggerCss));

module.exports = app;