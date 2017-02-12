const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(express.static('client'));

app.listen(port);
