import React, { useContext, useEffect, useState } from "react";
import '../../styles/Admin.css';
import AdminHeader from "./AdminHeader";
import Cars from "./Cars";
import { Link } from "react-router-dom";
import { CarList } from "../../contexts/AdminContexts";
import { getCars } from "../../utils/adminData";

export default function Admin() {
    // const { cars } = useContext(CarList);
    const [cars, setCars] = useState([]);
    // console.log(cars);
    useEffect(() => {
        getCars().then(res => {
            setCars(res.result.reverse());
        });
        // setPreview("");
    }, []);
    return <div>
        <AdminHeader />
        <div>
            <div className="admin-body-admin">
                <div className="welcome-message-admin">
                    <h1>Hello Admin...</h1>
                </div>
                <div className="cars-container-admin">
                    <div className="car-heading-and-add-container-admin">
                        <div className="cars-heading-container-admin">
                            <h3 className="cars-heading-admin">Cars</h3>
                        </div>
                        <div className="add-car-btn-admin">
                            <Link to={"addcar"}>
                                <button className="addCar-admin">Add Car</button>
                            </Link>
                        </div>
                    </div>
                    {
                        cars.length === 0 ? <h1>You haven't uploaded any cars</h1> :
                            <div className="car-cards-container-admin">
                                {
                                    cars.map(car => {
                                        return <Cars key={car._id} car={car} />
                                    })
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    </div>
}