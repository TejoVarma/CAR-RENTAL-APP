import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../../styles/EditBookingDetails.css";
import Header from "./Header";
import MapComponent from "./MapComponent";
const EditBookingDetails = () => {
  const navigate = useNavigate();
  const currentDate = new Date().toLocaleDateString(); // get current date in format MM/DD/YYYY
  const currentTime = new Date().toLocaleTimeString();
  const [carNames, setCarNames] = useState([]);
  const [destination, setdestination] = useState([]);
  const [details, setDetails] = useState([]);
  const id = JSON.parse(localStorage.getItem("key"));
  const [selectedCar, setSelectedCar] = useState("");
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
  useEffect(() => {
    fetch(`https://miles-node-ptu.onrender.com/user/get/${id}`, {
      headers: {
        authorization: JSON.parse(localStorage.getItem("userToken")),
      },
    })
      .then((response) => response.json())
      .then((details) => setDetails(details.data));
  }, []);

  useEffect(() => {
    fetch("https://miles-node-ptu.onrender.com/user/getcars", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("userToken")),
      },
    })
      .then((response) => response.json())
      .then((carNames) => setCarNames(carNames.data));
  }, []);

  const handleCarChange = (event) => {
    setSelectedCar(event.target.value);
  };
  

  return (
    <>
      <Header />
      <div className="EditBox flex">
        <div className="left-box Left-Edit-Section">
          <div>
            <h3 className="edit-title1">Edit Booking Details</h3>
          </div>

          <div>
            <div className="mid-div">
              <div>
                <p>Car Name</p>
                <p>Car Number</p>
              </div>

              <div className="cars-1">
                <select
                  id="car-dropdown"
                  value={selectedCar}
                  onChange={handleCarChange}
                >
                  <option value={details.carname}>{details.carname}</option>
                  {carNames.map((car) => (
                    <option key={car.id} value={car.carname}>
                      {car.carname}
                    </option>
                  ))}
                </select>

                <p id="car-num">TS 03 ZQ 1234</p>
              </div>

              <div className="mini-3rd-div-img">
                <img
                  src={`https://miles-node-ptu.onrender.com/admin/${details.image}`}
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

              <div id="edit-details-1">
                <input
                  type="text"
                  value={details.origin}
                  onChange={(event) =>
                    setDetails({ ...details, origin: event.target.value })
                  }
                />
                <input
                  type="text"
                  value={details.destination}
                  onChange={(event) =>
                    setDetails({ ...details, destination: event.target.value })
                  }
                />
                <input
                  type="date"
                  value={details.startdate}
                  onChange={(event) =>
                    setDetails({ ...details, startdate: event.target.value })
                  }
                />
                <input
                  type="date"
                  value={details.enddate}
                  onChange={(event) =>
                    setDetails({ ...details, enddate: event.target.value })
                  }
                />
              </div>

              <div className="mini-3rd-div-img">
                <MapComponent id={id} />
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
              <p>{id} </p>
              <p>{currentDate}</p>
              <p>{currentTime}</p>
              <div>
                {" "}
                <Button
                  className="cancel-btn"
                  variant="primary"
                  onClick={() => {
                    navigate("/mybookings");
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
            <h3 className="edit2-title2">Payment Details</h3>
          </div>

          <div>
            <div className="price">
              <p>Price per km</p>
              <p>Rs {Math.floor(Math.random() * 90) + 10}</p>
            </div>

            <div className="pricing">
              <p>Pricing</p>
              <p>Rs {Math.floor(Math.random() * 9000) + 1000}</p>
            </div>

            <div className="tax">
              <p>Tax Charges</p>
              <p>Rs {(150 * 18) / 100}</p>
            </div>

            <hr />

            <div className="tax">
              <p>Sub Total</p>
              <p>Rs {Math.floor(Math.random() * 9000) + 1000}</p>
            </div>
            <Button
              variant="primary"
              className="proceed-btn"
              onClick={() => {
                fetch(`https://miles-node-ptu.onrender.com/user/update/${id}`, {
                  method: "PATCH",
                  headers: {
                    "Content-Type": "application/json",
                    authorization: JSON.parse(
                      localStorage.getItem("userToken")
                    ),
                  },
                  body: JSON.stringify({
                    ...details,
                    carname: details.carname,
                  }),
                })
                  .then((response) => response.json())
                  .then((data) => console.log(data))
                  .catch((error) => console.error(error));
                  navigate("/mybookings")
              }}
            >
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBookingDetails;
