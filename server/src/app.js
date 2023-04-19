const express = require('express');
const app = express();
const cors = require('cors');
const carRoutes = require('./routes/carDetails.routes');
const bookingRoutes=require("./routes/Booking-router")

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors());

app.use('/admin', carRoutes);
app.use('/user',bookingRoutes)
app.use('/api',require ("./routes/user.router"));
module.exports = app;