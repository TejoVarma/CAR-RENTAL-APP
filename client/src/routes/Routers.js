import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Admin from "../components/admin/Admin";
import AdminAddCar from "../components/admin/AdminAddCar";
import AdminEditCar from "../components/admin/AdminEditCar";

export default function Routers(){
    return <BrowserRouter>
        <Routes>
            <Route path ="/admin" element={<Admin/>}/>
            <Route path='/admin/addcar' element={<AdminAddCar/>}/>
            <Route path='/admin/edit/:id' element={<AdminEditCar/>}/>
        </Routes>
    </BrowserRouter>
}