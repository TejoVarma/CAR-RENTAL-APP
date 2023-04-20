import { useNavigate } from "react-router-dom";
import "../../styles/CarBooking.css";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";

function CarBooking() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    startdate: "",
    enddate: "",
    origin: "",
    destination: "",
  });
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  const submitData = () => {
    console.log(formdata)
    axios
      .post("http://localhost:4000/user/bookingdetails", formdata)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      navigate('/booking')
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

          <button className="button2" variant="primary" onClick={submitData}>
            Check
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarBooking;
