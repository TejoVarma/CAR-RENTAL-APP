const express = require("express")
const router = express.Router();
const admin = require("../models/admin.model")
const { body, validationResult } = require('express-validator');
require("dotenv").config();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = process.env.SECRET;



// creating a new user 
router.post("/createAdmin", [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'password min length is 5').isLength({ min: 5 }),
], async (req, res) => {

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt)

    try {
        let validAdmin = await admin.find({ email: req.body.email });
        // console.log(validAdmin);
        await admin.create({
            name: req.body.name,
            contact: req.body.contact,
            email: req.body.email,
            password: secPassword
        })
        res.json({ success: true })
    } catch (error) {
    res.json({ success: false })
    console.log(error)

}

})

//---------------------------------------------------------------------------------
// logging in a new user 

router.post("/loginAdmin", async (req, res) => {
    try {
        let userData = await admin.find({ email : req.body.email });
        if (!userData) {
            return res.status(400).json({ errors: "user not found" });
        }

        const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
        if (!pwdCompare) {
            return res.status(400).json({ errors: "incorrect password" });
        }

        const data = {
            user: {
                id: userData._id,
                email: userData.email
            }
        }
        const authToken = jwt.sign(data, jwtSecret)
        return res.json({ success: true, authToken: authToken })
    } catch (error) {
        res.json({ success: false })
        // console.log(error)

    }

})


module.exports = router;
