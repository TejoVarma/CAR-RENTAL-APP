const mongoose = require('mongoose');
const uuid = require('uuid');
const Schema = mongoose.Schema;

const carDetailsSchema = Schema({
    _id : {
        type : String,
        default : uuid.v4()
    },
    carname : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    model : {
        type : String,
        required : true
    },
    mileage : {
        type : Number,
        required : true
    },
    perkm : {
        type : Number,
        required : true
    },
    availablefrom : {
        type : String,
        required : true
    },
    availabletill : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    cardetails : {
        type : String,
        required : true
    },
    details : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
});

const carDetailsModel = new mongoose.model('CAR_DETAILS', carDetailsSchema);

module.exports = carDetailsModel;