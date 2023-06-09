const express=require("express")
const {getmybookings,postbookings,deletemybooking,getmybookingbyid,updatemybooking}=require("../controllers/mybookings.controllers")
const router=express.Router()
router.get('/mybookings/:id',getmybookings);
router.post('/mybookings',postbookings);
router.delete("/mybookings/:id",deletemybooking)
router.get('/get/:id',getmybookingbyid);
router.patch('/update/:id',updatemybooking);


module.exports=router;