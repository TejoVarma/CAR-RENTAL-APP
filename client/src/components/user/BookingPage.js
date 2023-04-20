import React, { useEffect, useState } from "react";
import "../../styles/BookingPage.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BookingDetails from "./BookingDetails";
import Header from "./Header";
const BookinPage = () => {
  const navigate = useNavigate();
  const [destination, setdestination] = useState([]);
  const [data, setdata] = useState([]);
  const [cardetails, setcardetails] = useState(false);
  // const [singlecar, setsingkecar] = useState({
  //   carname: "",
  //   image: "",
  //   perkm: "",
  //   id: "",
  // });
  const [carType, setCarType] = useState(data);
  const BookingDetail = (Item) => {
    // console.log(Item._id);
    const { carname, image, perkm, _id } = Item;
    console.log(Item);
    // setsingkecar({
    //   carname: carname,
    //   image: image,
    //   perkm: perkm,
    //   id: _id,
    // });

    setcardetails(true);
  };
  // console.log(singlecar);
  // useEffect(() => {
  //   Promise.all([
  //     axios.get("http://localhost:4000/user/getcars"),
  //     axios.get("http://localhost:4000/user/getbookingdetails"),
  //   ])
  //     .then(([adminData, bookingData]) => {
  //       console.log(adminData.data);
  //       setdata([adminData.data]);
  //       // console.log([data]);
  //       console.log(bookingData.data)
  //       setdestination(
  //         bookingData.data.users[bookingData.data.users.length - 1]
  //       );
  //       console.log(bookingData.data.users.length)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  useEffect(() => {
    fetch("http://localhost:4000/user/getcars")
      .then((response) => response.json())
      .then((data) => setdata(data.data));
  }, []);
  // console.log(data);
  useEffect(() => {
    fetch("http://localhost:4000/user/getbookingdetails")
      .then((response) => response.json())
      .then((destination) => setdestination(destination.data));
  }, []);
  console.log(destination);

  const handleCarTypeChange = (event) => {
    console.log(event.target.target);
    setCarType(event.target.value); // Update state with selected carType value
  };
  useEffect(() => {
    if (carType === "All") {
      setdata(data);
    } else {
      const filteredCars = data.filter((car) => car.type === carType);
      setdata(filteredCars);
    }
  }, [carType]);
  // console.log(data)

  return (
    <>
      <div className="header">
        <div className="logo">LOGO</div>
        <div
          className="bookings"
          onClick={() => {
            navigate("/bookingcar");
          }}
        >
          My Booking
        </div>
        <div
          className="logout"
          onClick={() => {
            navigate("/");
          }}
        >
          Logout
        </div>
      </div>
      {!cardetails && (
        <div>
          <div className="below-header">
            {console.log(destination)}
            {destination.origin} ---&gt;{destination.destination} --&gt;{" "}
            {destination.startdate} - {destination.enddate}
            <Button
              variant="primary"
              className="modify-btn1"
              onClick={() => {
                navigate("/bookingcar");
              }}
            >
              Modify
            </Button>
          </div>
          <section className="thirdNavbar">
            <section className="thirdNavbar">
              <select
                className="dropdown"
                value={carType}
                onChange={handleCarTypeChange}
              >
                <option value="">Car Type</option>
                <option value="XUV">XUV</option>
                <option value="MV">MV</option>
                <option value="All">All</option>
              </select>
            </section>
            <button
              className="setting"
              onClick={() => {
                window.location.reload();
              }}
            >
              Seating
            </button>
            <button className="setting">Milage</button>
            <button className="setting">Other</button>
          </section>

          <div className="card-container">
            {data.map((item, index) => (
              <div key={index} className="card">
                <img
                  src={`http://localhost:4000/admin/${item.image}`}
                  alt={item.carname}
                  onClick={() => {
                    console.log("hello");
                  }}
                />
                <p className="seat">5 Persons</p>
                <div className="card-details">
                  <h3>{item.carname}</h3>
                  <p className="RSKM">{item.perkm} Rs/Km</p>
                </div>
                <div className="other flex flex-dir-r j-content">
                  <div className="fair-details">Details:{item.details}</div>
                  <Button
                    variant="primary"
                    className="book-now"
                    onClick={() => {
                      BookingDetail(item);
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* {cardetails && <BookingDetails singlecar={singlecar} />} */}
    </>
  );
};
export default BookinPage;
