const express = require('express');
const path = require('path');
const logger = require('morgan');
const debug = require('debug');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()); 

app.use('/', require('./routes/index'));
app.use('/api/cars', require('./routes/cars'));

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  debug('Express server listening on port ' + server.address().port);
});
