import React, { useContext } from "react";
import AdminHeader from "./AdminHeader";
import Cars from "./Cars";
import { Link } from "react-router-dom";
import { CarList } from "../../contexts/AdminContexts";

export default function Admin(){
    const { cars } = useContext(CarList);
    // console.log(cars);
    return <div>
        <AdminHeader/>
        <div>
            <div className="admin-body">
                <div className="welcome-message">
                    <h1>Hello Admin...</h1>
                </div>
                <div className="cars-container">
                    <h3 className="cars-heading">Cars</h3>
                    <div className="add-car-btn">
                        <Link to={"addcar"}>
                            <button className="addCar">Add Car</button>
                        </Link>
                    </div>
                    <div className="car-cards-container">
                        {
                            cars.map(car => {
                                return <Cars key={car._id} car={car}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}