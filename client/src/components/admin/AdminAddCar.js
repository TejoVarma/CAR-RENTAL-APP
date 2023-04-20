import React, { useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { CarList } from "../../contexts/AdminContexts";
import { addNewCar } from "../../utils/adminData";
import AdminHeader from "./AdminHeader";
import ImagePreview from "./ImagePreview";

export default function AdminAddCar() {
    const navigate = useNavigate();
    const {addCar, addPreview, preview} = useContext(CarList);

    const [loader, setLoader] = useState(false);
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

    function formValidation(e) {
        e.preventDefault();
        setLoader(true);

        const post = new FormData(e.target);
        post.append("date", new Date().toDateString());
        post.append("likes", 0);
        post.append("id", Date.now());
        
        addNewCar(post)
        .then(res => {
            if(res.status === "Success") {
                addCar(res.result);
                addPreview("");
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
                setLoader(false);
                navigate("/admin")
            } else {
                setLoader(false);
                alert("Failed to add car, try again...")
            }
            
        })
    }
    return <>
        <AdminHeader/>
        <div className="add-car-body">
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
                                    }}>
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
                                    }}>
                                        <option value="xuv">xuv</option>
                                        <option value="suv">suv</option>
                                        <option value="sedan">sedan</option>
                                    </select>
                                </div>
                            </div>
                            <div className="field-container flex">
                                <div className="flex-boxes">
                                    <label className="labels" htmlFor="carname">Mileage</label>
                                    <input type={"number"} id="mileage" name="mileage" placeholder="KM/L" value={formData.mileage} required onChange={(e)=>{
                                        setFormData(data=>{
                                            return {
                                                ...data,
                                                mileage : e.target.value
                                            }
                                        })
                                    }}/>
                                </div>
                                <div className="flex-boxes">
                                    <label className="labels" htmlFor="perkm">PerKm</label>
                                    <input type={"number"} id="perkm" name="perkm" placeholder="0000" value={formData.perkm} required onChange={(e)=>{
                                        setFormData(data => {
                                            return {
                                                ...data,
                                                perkm : e.target.value
                                            }
                                        });
                                    }}/>
                                </div>
                            </div>
                            <div className="field-container flex">
                                <div className="flex-boxes">
                                    <label className="labels" htmlFor="availablefrom">Available From</label>
                                    <input type={'date'} id="availablefrom" name="availablefrom" placeholder="DD MM YYYY" value={formData.availablefrom} required onChange={(e) => {
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
                                    <input type={'date'} id="availabletill" name="availabletill" placeholder="DD MM YYYY" value={formData.availabletill} required onChange={(e) => {
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
                                <input type={"text"} id="description" name="description" placeholder="description" value={formData.description} required onChange={(e) => {
                                    setFormData(data => {
                                        return {
                                            ...data,
                                            description: e.target.value
                                        }
                                    })
                                }} />
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="field-container">
                                <label className="labels" htmlFor="file">Image</label>
                                <input type={"file"} id="file" name="image" accept="image/*" required onChange={(e) => {
                                    addPreview(URL.createObjectURL(e.target.files[0]));
                                    setFormData(data => {
                                        return {
                                            ...data,
                                            image: e.target.files[0]
                                        }
                                    })
                                }} />
                            </div>
                            <div id="preview-container">
                                {preview ? <ImagePreview /> : null}
                            </div>
                            <div className="field-container">
                                <label className="labels" htmlFor="cardetails">Car Details</label>
                                <input type={"text"} id="cardetails" name="cardetails" placeholder="Car Details" value={formData.cardetails} required onChange={(e) => {
                                    setFormData(data => {
                                        return {
                                            ...data,
                                            cardetails: e.target.value
                                        }
                                    })
                                }} />
                            </div>
                            <div className="field-container">
                                <label className="labels" htmlFor="details">Details</label>
                                <input type={"text"} id="details" name="details" placeholder="Details" value={formData.details} required onChange={(e) => {
                                    setFormData(data => {
                                        return {
                                            ...data,
                                            details: e.target.value
                                        }
                                    })
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className="field-container">
                        <button className="cancel-button" onClick={()=> navigate('/admin')}>Cancel</button>
                    </div>
                    <div className="field-container">
                        <button className="submit-button" type={"submit"}>Post</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}