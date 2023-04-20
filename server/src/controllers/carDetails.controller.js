const CAR_DETAILS = require('../models/carDetails.model');
require('dotenv').config();
const uuid = require('uuid');
const MongoClient = require("mongodb").MongoClient;
const GridFSBucket = require("mongodb").GridFSBucket;
const client = new MongoClient(process.env.DB_URL);
let carDetailsController = {};

carDetailsController.addNewCar = async function(req,res){
    try
    {
        let car = await new CAR_DETAILS({
            ...req.body,
            _id : uuid.v4(),
            image : `image/${req.file.filename}`
        });
        let newCar = car.save();
        res.status(200).json({status : "Success", message : "Successfully Added", result : car});
    }
    catch(err)
    {
        res.status(400).json({status: "Failed", message : err.message});
    }
};

carDetailsController.getCars = async function(req,res){
    try{
        let cars = await CAR_DETAILS.find();
        res.status(200).json({status : "Success", result: cars});
    }
    catch(err)
    {
        res.status(400).json({status : "Failed", message : err.message});
    }
};
carDetailsController.getCarById = async function(req,res){
    try{
        let car = await CAR_DETAILS.findById(req.params.id);
        res.status(200).json({status : "Success", result: car});
    }
    catch(err)
    {
        res.status(400).json({status : "Failed", message : err.message});
    }
}

carDetailsController.load = async function(req, res){
    try{
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        const collection = new GridFSBucket(db, {
            bucketName : process.env.DB_COLLECTION
        });
        const loadImage = collection.openDownloadStreamByName(req.params.name);
        loadImage.on("data", data => res.status(200).write(data));
        loadImage.on("error", (err) => {
            res.status(400).send({status:"failed to load", message: err.message});
        });
        loadImage.on("end", () => {
            res.end();
        });
    }
    catch(err)
    {
        res.status(500).send({status:"Server Error", message : err.message});
    }
};

carDetailsController.editCar = async function(req,res){
    try{
        let car = await CAR_DETAILS.findById(req.params.id);
        // console.log(car);
        if(car)
        {
            console.log(req.body);
           let updatedCar =  await CAR_DETAILS.findByIdAndUpdate(req.params.id, {...req.body}, {new : true});
        //    console.log(updatedCar);
           await updatedCar.save();
           res.status(200).json({status : "Success", result : updatedCar});
        }
        else
        {
            res.status(404).json({status : "Failed", result : "Car details not found"});
        }
    }
    catch(err)
    {
        res.status(400).json({status : "Success", message : err.message});
    }
};
carDetailsController.deleteCar = async function(req,res){
    try{
        let car = await CAR_DETAILS.findById(req.params.id);
        if(car)
        {
            await CAR_DETAILS.findByIdAndDelete(req.params.id);
            res.status(200).json({status : "Success", message : "Successfully deleted"});
        }
        else
        {
            res.status(404).json({status : "Failed", result : "Car details not found"});
        }
    }
    catch(err)
    {
        res.status(400).json({status : "Success", message : err.message});
    }
}

module.exports = carDetailsController;

