const myBookings = require("../models/mybookings");
const User = require("../models/user.model");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.getmybookings = async (req, res) => {
  try {
    let token = await getToken(req.headers);
    let payload = await jwt.verify(token, process.env.SECRET);
    console.log(payload);
    let newUser = await User.findById(payload.user.id);
    if (token && newUser) {
      const users = await myBookings.find({});
      return res.status(200).send({
        success: true,
        userCount: users.length,
        message: "All users Data",
        data: users,
      });
    } else {
      res.status(403).json({ status: "Failed", result: "Unauthorized" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Error in Getting All users Data",
      err,
    });
  }
};
exports.postbookings = async (req, res) => {
  try {
    let token = await getToken(req.headers);
    let payload = await jwt.verify(token, process.env.SECRET);
    // console.log(payload);
    let newUser = await User.findById(payload.user.id);
    if (token && newUser) {
      const { startdate, enddate, origin, destination, carname, image } =
        req.body;
      const user = new myBookings({
        startdate,
        enddate,
        origin,
        destination,
        carname,
        image,
        userId: newUser._id,
      });

      await user.save();
      return res.status(200).send({
        success: true,
        message: "successful",
        user,
      });
    } else {
      res.status(403).json({ status: "Failed", result: "Unauthorized" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "error in my bookings",
      err,
    });
  }
};
exports.updatemybooking = async (req, res) => {
  console.log(req);
  try {
    let token = await getToken(req.headers);
    let payload = await jwt.verify(token, process.env.SECRET);
    console.log(payload);
    let newUser = await User.findById(payload.user.id);
    if (token && newUser) {
    const { id } = req.params;
    const { carname, startdate, enddate, origin, destination } = req.body;
    // if (!startdate || !enddate || !origin || !destination||!carname) {
    //   return res.status(401).send({
    //     success: false,
    //     message: "please fill all fields",
    //   });
    // }
    const updatedDetails = await myBookings.findByIdAndUpdate(
      id,
      { carname, startdate, enddate, origin, destination },
      { new: true }
    );
    if (!updatedDetails) {
      return res.status(404).send({
        success: false,
        message: "Booking details not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Booking Details Updated Succesfully",
      details: updatedDetails,
    });
    } else {
      res.status(403).json({ status: "Failed", result: "Unauthorized" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "error in updated booking details",
      err,
    });
  }
};
exports.deletemybooking = async (req, res) => {
  try {
    let token = await getToken(req.headers);
    let payload = await jwt.verify(token, process.env.SECRET);
    console.log(payload);
    let newUser = await User.findById(payload.user.id);
    if (token && newUser) {
      const bookingId = req.params.id;
      const booking = await myBookings.findByIdAndDelete(bookingId);
      if (!booking) {
        return res.status(404).send({
          success: false,
          message: "Booking details not found",
        });
      }
      return res.status(200).send({
        success: true,
        message: "Booking Details Deleted Succesfully",
        booking,
      });
    } else {
      res.status(403).json({ status: "Failed", result: "Unauthorized" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "error in deleting booking details",
      err,
    });
  }
};
exports.getmybookingbyid = async (req, res) => {
  try {
    let token = await getToken(req.headers);
    let payload = await jwt.verify(token, process.env.SECRET);
    // console.log(payload);
    let newUser = await User.findById(payload.user.id);
    if (token && newUser) {
      const { bookingId } = req.params;
      const booking = await myBookings.findById(req.params.id);
      return res.status(200).send({
        success: true,
        data: booking,
      });
    } else {
      res.status(403).json({ status: "Failed", result: "Unauthorized" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Error in Getting Booking Data by Id",
      err,
    });
  }
};
function getToken(headers) {
  if (headers && headers.authorization) {
    let token = headers.authorization;
    return token;
  } else {
    return null;
  }
}
