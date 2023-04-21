import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Admin from "../components/admin/Admin";
import AdminAddCar from "../components/admin/AdminAddCar";
import AdminEditCar from "../components/admin/AdminEditCar";
import BookingPage from "../components/user/BookingPage";
import MyBooking from "../components/user/MyBooking";
import BookingDetails from "../components/user/BookingDetails";
import CarBooking from "../components/user/CarBooking";
import EditBookingDetails from "../components/user/EditBookingDetails";
import ModifyBooking from "../components/user/ModifyBooking";

export default function Routers(){
    return <BrowserRouter>
        <Routes>
            <Route path ="/admin" element={<Admin/>}/>
            <Route path='/admin/addcar' element={<AdminAddCar/>}/>
            <Route path='/admin/:id' element={<AdminEditCar/>}/>
            <Route path="/booking" element={<BookingPage/>}/>
            <Route path="/mybookings" element={<MyBooking/>}/>
            <Route path="/bookingdetails" element={<BookingDetails/>}/>
            <Route path="/carbooking" element={<CarBooking/>}/>
            <Route path="/editbooking" element={<EditBookingDetails/>}/>
            <Route path="modify" element={<ModifyBooking/>}/>
        </Routes>
    </BrowserRouter>
}