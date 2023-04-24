import React, { useEffect, useState } from "react";
import "../../styles/BookingPage.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BookingDetails from "./BookingDetails";
import Header from "./Header";
const BookinPage = () => {
  const navigate = useNavigate();
  const [destination, setdestination] = useState([]);
  const [data, setdata] = useState([]);
  const [cardetails, setcardetails] = useState(false);
  const [singlecar, setsinglecar] = useState({
    carname: "",
    image: "",
    perkm: "",
    id: "",
  });
  const [carType, setCarType] = useState(data);
  const BookingDetail = (Item) => {
    const { carname, image, perkm, _id } = Item;
    console.log(Item);
    setsinglecar({
      carname: carname,
      image: image,
      perkm: perkm,
      id: _id,
    });

    setcardetails(true);
  };
  useEffect(() => {
    fetch("https://miles-node-ptu.onrender.com/user/getcars", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("userToken")),
      },
    })
      .then((response) => response.json())
      .then((data) => setdata(data.data));
  }, []);
  // console.log(data);
  useEffect(() => {
    fetch("https://miles-node-ptu.onrender.com/user/getbookingdetails", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: JSON.parse(localStorage.getItem("userToken")),
      },
    })
      .then((response) => response.json())
      .then((destination) =>
        setdestination(destination.data[destination.data.length - 1])
      );
  }, [data]);
  console.log(destination);

  const handleCarTypeChange = (event) => {
    setCarType(event.target.value);
    // Update state with selected carType value
  };
  useEffect(() => {
    if (carType === "all") {
      setdata(data);
    } else {
      const filteredCars = data.filter((car) => car.model === carType);
      setdata(filteredCars);
    }
  }, [carType]);
  console.log(data);

  return (
    <>
      <Header />
      {!cardetails && (
        <div>
          <div className="below-header">
            {destination.origin} ---&gt;{destination.destination} --&gt;{" "}
            {destination.startdate} - {destination.enddate}
            <Button
              variant="primary"
              className="modify-btn1"
              onClick={() => {
                navigate("/modify");
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
                <option value="all">All</option>
                <option value="xuv">XUV</option>
                <option value="suv">SUV</option>
                <option value="sedan">SEDAN</option>
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

          <div className="card-container1">
            {data.map((item) => (
              <div key={item._id} className="card">
                <img
                  src={`https://miles-node-ptu.onrender.com/admin/${item.image}`}
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
                    // onClick={()=>console.log(item._id)}
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
      {cardetails && <BookingDetails singlecar={singlecar} />}
    </>
  );
};
export default BookinPage;
