const express=require('express')
const {getbookdetail,bookdetailcontrol,updatebooking,deletebooking}=require("../controllers/Booking-details")
const router=express.Router()
router.get('/getbookingdetails',getbookdetail);
router.post('/bookingdetails',bookdetailcontrol);
router.put('/updatebooking/:id',updatebooking)
router.delete('/deletebooking/:id',deletebooking);
module.exports=router;