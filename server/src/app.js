const express = require('express');
const app = express();
const cors = require('cors');
const carRoutes = require('./routes/carDetails.routes');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors());

app.use('/admin', carRoutes);

module.exports = app;