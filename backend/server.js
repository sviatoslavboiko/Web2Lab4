const path = require('path');
const express = require('express');
var cors = require('cors');

// Database
var monk = require('monk');
var db = monk('localhost:27017/lab4');

var trainRouter = require('./routes/trains');
var passengerRouter = require('./routes/passengers');
var ticketRouter = require('./routes/tickets');
var statisticsRouter = require('./routes/statistics');

const app = express();

app.use(cors());

// Make our db accessible to our router
app.use(function (req, res, next) {
    req.db = db;
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/trains', trainRouter);
app.use('/passengers', passengerRouter);
app.use('/tickets', ticketRouter);
app.use('/statistics', statisticsRouter);

const host = "localhost";
const port = "3000";
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
});

module.exports = app;
