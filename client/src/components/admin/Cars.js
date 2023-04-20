import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Cars({ car }) {
    const { carname, perkm, availablefrom, availabletill, image } = car;
    const { id } = useParams();
    return <div className="card-container">
            <Link to={`/${car._id}`}>
                <section className="image-container">
                    <img className="image" src={`http://localhost:4000/admin/${image}`} alt="car"/>
                </section>
            </Link>
            <footer className="card-footer">
                <section className="persons-container">
                    <p className="persons">5 persons</p>
                </section>
                <section className="description">
                    <p className="carname">{carname}</p>
                    <p className="perkm">{perkm}Rs/Km</p>
                </section>
                <section className="date-container">
                    <p className="date-notation">Available date</p>
                    <p className="date">{availablefrom}-{availabletill}</p>
                </section>
            </footer>
        </div>
}