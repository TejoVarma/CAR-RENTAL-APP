import React, { useState, useEffect } from "react";
import "../../styles/BookingDetails.css";
import { Button } from "react-bootstrap";
import Map from "./Map";
import { useNavigate } from "react-router-dom";
const BookingDetails = (singlecar) => {
  const navigate = useNavigate();
  // const [mybook, setmybook] = useState(false);
  const currentDate = new Date().toLocaleDateString(); // get current date in format MM/DD/YYYY
  const currentTime = new Date().toLocaleTimeString();
  const [destination, setdestination] = useState([]);
  useEffect(() => {
    fetch("https://miles-node-ptu.onrender.com/user/getbookingdetails", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("userToken")),
      },
    })
      .then((response) => response.json())
      .then((destination) =>
        setdestination(destination.data[destination.data.length - 1])
      );
  }, []);
  const handleClick = () => {
    const data = {
      origin: destination.origin,
      destination: destination.destination,
      carname: singlecar.singlecar.carname,
      image: singlecar.singlecar.image,
      startdate: destination.startdate,
      enddate: destination.enddate,
    };

    fetch("https://miles-node-ptu.onrender.com/user/mybookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": JSON.parse(localStorage.getItem("userToken")),
      },
      body: JSON.stringify(data),
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
    navigate("/mybookings");
  };
  return (
    <>
        <div className="EditBox flex">
          <div className="left-box Left-Edit-Section">
            <div>
              <h3 className="title1">Booking Details</h3>
            </div>

            <div>
              <div className="mid-div">
                <div>
                  <p>Car Name</p>
                  <p>Car Number</p>
                </div>

                <div>
                  <h3>{singlecar.singlecar.carname}</h3>
                  <p>MH 03 ZQ 1234</p>
                </div>

                <div className="mini-3rd-div-img">
                  <img
                    src={`https://miles-node-ptu.onrender.com/admin/${singlecar.singlecar.image}`}
                    alt="photo"
                  />
                </div>
              </div>
            </div>

            <hr />

            <div>
              <div className="mid-div">
                <div>
                  <p>Origin</p>
                  <p>Destination</p>
                  <p>Start Date</p>
                  <p>End Date</p>
                </div>

                <div>
                  <p>{destination.origin}</p>
                  <p>{destination.destination}</p>
                  <p>{destination.startdate}</p>
                  <p>{destination.enddate}</p>
                </div>

                <div className="mini-3rd-div-img">
                  <div style={{ width: "180px", height: "180px" }}>
                    <Map />
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div className="bottom-div">
              <div>
                <p>Booking ID </p>
                <p>Booking Date</p>
                <p>Booking Time</p>
              </div>
              <div>
                <p>{singlecar.singlecar.id} </p>
                <p>{currentDate}</p>
                <p>{currentTime}</p>
                <div>
                  {" "}
                  <Button
                    className="cancel-btn1"
                    variant="primary"
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    {" "}
                    Cancel{" "}
                  </Button>
                </div>
              </div>
            </div>

            <hr />
          </div>

          <div className="right-box Right-Edit-Section">
            <div>
              <h3 className="title2">Payment Details</h3>
            </div>

            <div>
              <div className="price">
                <p>Price per km</p>
                <p>Rs {singlecar.singlecar.perkm}</p>
              </div>

              <div className="pricing">
                <p>Pricing</p>
                <p>Rs {singlecar.singlecar.perkm * 150}</p>
              </div>

              <div className="tax">
                <p>Tax Charges</p>
                <p>Rs {(singlecar.singlecar.perkm * 150 * 18) / 100}</p>
              </div>

              <hr />

              <div className="tax">
                <p>Sub Total</p>
                <p>
                  Rs{" "}
                  {singlecar.singlecar.perkm * 150 +
                    (singlecar.singlecar.perkm * 150 * 18) / 100}
                </p>
              </div>
              <Button
                variant="primary"
                className="proceed-btn"
                onClick={handleClick}
              >
                Proceed
              </Button>
            </div>
          </div>
        </div>
    </>
  );
};

export default BookingDetails;
