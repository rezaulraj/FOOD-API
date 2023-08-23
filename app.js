const express = require('express');
const morgan = require('morgan');

const app = express();
// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
// router level middleware
app.use('/api/v1/tours', tourRouter);
module.exports = app;
