import "../../styles/CarBooking.css";
import Header from "./Header";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CarBooking() {
  const navigate=useNavigate()
  const [formdata, setformdata] = useState({
    startdate: "",
    enddate: "",
    origin: "",
    destination: "",
  });
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  }

  const handleClick = () => {
    fetch("http://localhost:4000/user/bookingdetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": JSON.parse(localStorage.getItem("userToken"))
      },
      body: JSON.stringify(formdata),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonResponse) => {
        console.log("successful:", jsonResponse);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    navigate("/booking");
    
  };
  return (
    <div className="display">
      <Header />
      <div className="total">
        <div className="home">
          <div className="text-quote">
            Main quote for the Website will be Placed here to make understand
          </div>

          <div className="input-all">
            <input
              className="booking-fields"
              placeholder="startdate"
              name="startdate"
              type="date"
              onChange={HandleChange}
            />

            <input
              className="booking-fields"
              placeholder="enddate"
              name="enddate"
              type="date"
              onChange={HandleChange}
            />

            <input
              className="booking-fields"
              placeholder="origin"
              name="origin"
              type="text"
              onChange={HandleChange}
            />

            <input
              className="booking-fields"
              placeholder="destination"
              name="destination"
              type="text"
              onChange={HandleChange}
            />
          </div>

          <button className="button2" variant="primary" onClick={handleClick}>
            Check
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarBooking;
