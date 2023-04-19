const express=require('express')
const {getbookingdetails,bookingdetailcontrol,updatebooking,deletebooking}=require("../controllers/Booking-details")
const router=express.Router()
router.get('/getbookingdetails',getbookingdetails);
router.post('/bookingdetails',bookingdetailcontrol);
router.put('/updatebooking/:id',updatebooking)
router.delete('/deletebooking/:id',deletebooking);
module.exports=router;