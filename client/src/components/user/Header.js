import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Header.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-user">
      <div className="logo-user">
        <img
          className="logo-user-pic"
          src="/logo.jpeg"
          alt="logo"
          onClick={() => navigate("/carbooking")}
        />
        <p className="company-user" onClick={() => navigate("/carbooking")}>
          Miles : Car Rental
        </p>
      </div>
      <div className="logout-container-user">
        <div className="logout-text-container-user">
          <p onClick={() => navigate("/mybookings")}>My Bookings</p>
          <p
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}
