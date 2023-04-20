import React from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

export default function AdminEditCar(){
    const { id } = useParams();
    return <div>
        This is from Admin Edit Car page
    </div>
}