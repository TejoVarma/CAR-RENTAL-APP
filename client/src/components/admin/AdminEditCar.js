import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { deleteCar, editCar, getCarById } from "../../utils/adminData";
import AdminHeader from "./AdminHeader";
import ImagePreview from "./ImagePreview";
import { CarList } from "../../contexts/AdminContexts";

export default function AdminEditCar(){
    const { id } = useParams();
    const {addPreview} = useContext(CarList);
    const [edit,setEdit] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        carname: "",
        type: "",
        model: "",
        mileage: "",
        perkm: "",
        availablefrom: "",
        availabletill: "",
        description: "",
        cardetails: "",
        details: ""
    });
    useEffect(()=>{
        getCarById(id).then(res=>{
            setFormData({
                carname: res.result.carname,
                type: res.result.type,
                model: res.result.model,
                mileage: res.result.mileage,
                perkm: res.result.perkm,
                availablefrom: res.result.availablefrom,
                availabletill: res.result.availabletill,
                description: res.result.description,
                cardetails: res.result.cardetails,
                details: res.result.details
            })
            // console.log(res.result);
        });
    },[]);
    // console.log(car);
    function formValidation(e) {
        e.preventDefault();
        // setLoader(true);
        if(edit)
        {
            const car = new FormData(e.target);
            editCar(car, id)
            .then(res => {
                if(res.status === "Success") {
                    setFormData({
                        carname: "",
                        type: "",
                        model: "",
                        mileage: "",
                        perkm: "",
                        availablefrom: "",
                        availabletill: "",
                        description: "",
                        cardetails: "",
                        details: ""
                    });
                    // setLoader(false);
                    navigate("/admin");
                    window.location.reload();
                } else {
                    // setLoader(false);
                    alert("Failed to edit car, try again...")
                }
                
            })   
        }
        else
        {
            deleteCar(id)
            .then(res => {
                if(res.status === "Success")
                {
                    setEdit(false);
                    navigate('/admin')
                    window.location.reload();
                }
                else
                {
                    setEdit(false);
                    alert("Failed to delete car, try again...")
                }
            })
        }
    }
    return <div>
        <AdminHeader/>
        <div className="add-car-body">
            <div className="add-car-heading"><h2>Edit Car Details</h2></div>
            <div className="form-container">
                <form onSubmit={formValidation}>
                    <div className="sections">
                        <div className="left-section">
                            <div className="field-container">
                                <label className="labels" htmlFor="carname">Car Name</label>
                                <input type={"text"} id="carname" name="carname" placeholder="Name of the car" value={formData.carname} maxLength = {15} required onChange={(e) => {
                                    setFormData(data => {
                                        return {
                                            ...data,
                                            carname: e.target.value
                                        }
                                    })
                                }} />
                            </div>
                            <div className="field-container flex">
                                <div className="flex-boxes">
                                    <label className="labels" htmlFor="type">Type</label>
                                    <select name="type" id="type" required onChange={(e) => {
                                    setFormData(data => {
                                        return {
                                            ...data,
                                            type: e.target.value
                                        }
                                    })
                                }} >
                                        <option value="petrol">petrol</option>
                                        <option value="diesel">diesel</option>
                                        <option value="ev">ev</option>
                                    </select>
                                </div>
                                <div className="flex-boxes">
                                    <label className="labels" htmlFor="model">Model</label>
                                    <select name="model" id="model" required onChange={(e) => {
                                    setFormData(data => {
                                        return {
                                            ...data,
                                            model: e.target.value
                                        }
                                    })
                                }} >
                                        <option value="xuv">xuv</option>
                                        <option value="suv">suv</option>
                                        <option value="sedan">sedan</option>
                                    </select>
                                </div>
                            </div>
                            <div className="field-container flex">
                                <div className="flex-boxes">
                                    <label className="labels" htmlFor="carname">Mileage</label>
                                    <input type={"number"} id="mileage" name="mileage" placeholder="KM/L" value={formData.mileage} required onChange={(e) => {
                                    setFormData(data => {
                                        return {
                                            ...data,
                                            mileage: e.target.value
                                        }
                                    })
                                }} />
                                </div>
                                <div className="flex-boxes">
                                    <label className="labels" htmlFor="perkm">PerKm</label>
                                    <input type={"number"} id="perkm" name="perkm" placeholder="0000" value={formData.perkm} required onChange={(e) => {
                                    setFormData(data => {
                                        return {
                                            ...data,
                                            perkm: e.target.value
                                        }
                                    })
                                }} />
                                </div>
                            </div>
                            <div className="field-container flex">
                                <div className="flex-boxes">
                                    <label className="labels" htmlFor="availablefrom">Available From</label>
                                    <input type={'date'} id="availablefrom" name="availablefrom" placeholder="DD MM YYYY" value={formData.availablefrom} onChange={(e) => {
                                    setFormData(data => {
                                        return {
                                            ...data,
                                            availablefrom: e.target.value
                                        }
                                    })
                                }} />
                                </div>
                                <div className="flex-boxes">
                                    <label className="labels" htmlFor="availabletill">Available Till</label>
                                    <input type={'date'} id="availabletill" name="availabletill" placeholder="DD MM YYYY" value={formData.availabletill} onChange={(e) => {
                                    setFormData(data => {
                                        return {
                                            ...data,
                                            availabletill: e.target.value
                                        }
                                    })
                                }} />
                                </div>
                            </div>
                            <div className="field-container">
                                <label className="labels" htmlFor="description">Description</label>
                                <textarea rows="5" cols="60" name="description" id="description" placeholder="Description" value={formData.description} required onChange={(e) => {
                                    setFormData(data => {
                                        return {
                                            ...data,
                                            description: e.target.value
                                        }
                                    })
                                }} ></textarea>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="field-container">
                                <label className="labels" htmlFor="file">Image</label>
                                <input type={"file"} id="file" name="image" accept="image/*" onChange={(e) => {
                                    addPreview(URL.createObjectURL(e.target.files[0]));
                                    setFormData(data => {
                                        return {
                                            ...data,
                                            image: e.target.files[0]
                                        }
                                    })
                                }}/>
                            </div>
                            <div className="field-container">
                                <label className="labels" htmlFor="cardetails">Car Details</label>
                                <textarea rows="5" cols="60" name="cardetails" id="cardetails" placeholder="Car Details" value={formData.cardetails}  onChange={(e) => {
                                    setFormData(data => {
                                        return {
                                            ...data,
                                            cardetails: e.target.value
                                        }
                                    })
                                }} ></textarea>
                            </div>
                            <div className="field-container">
                                <label className="labels" htmlFor="details">Details</label>
                                <textarea rows="5" cols="60" name="details" id="details" placeholder="Details" value={formData.details} required onChange={(e) => {
                                    setFormData(data => {
                                        return {
                                            ...data,
                                            details: e.target.value
                                        }
                                    })
                                }} ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="buttons-container">
                        <div className="field-container flex-boxes">
                            <button className="cancel-button" onClick={()=> navigate('/admin')}>Cancel</button>
                        </div>
                        <div className="field-container flex-boxes post">
                            <div>
                                <button className="submit-button delete" type={"submit"}>Delete</button>
                                <button className="submit-button save" type={"submit"} onClick={()=>setEdit(true)}>Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
}