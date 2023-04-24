import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../../styles/EditBookingDetails.css";
import "../../styles/MyBooking.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import MapComponent from "./MapComponent";

const MyBooking = () => {
  // const [editpage, seteditpage] = useState(false);
  const currentDate = new Date().toLocaleDateString(); // get current date in format MM/DD/YYYY
  const currentTime = new Date().toLocaleTimeString();
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://miles-node-ptu.onrender.com/user/mybookings", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("userToken")),
      },
    })
      .then((response) => response.json())
      .then((data) => setdata(data.data));
  }, []);
  console.log(data);
  // const cancelHandler=()=>{
  //   console.log(data[0]._id)

  // }

  return (
    <>
      <div className="my-bookings-user">
        <Header />
        <div className="my-bookings-container-user">
          {data.map((item) => (
            <div className="div-1" key={item._id}>
              <div className="one-div">
                <img
                  src={`https://miles-node-ptu.onrender.com/admin/${item.image}`}
                  alt="photo"
                />
              </div>

              <div className="two-div">
                <h3>{item.carname}</h3>
                <h4> TS 03 ZQ {Math.floor(Math.random() * 9000) + 1000}</h4>
              </div>

              <div className="three-div">
                <div className="mini-3rd-div">
                  <div>
                    <p>Origin :</p>
                    <p>Destination :</p>
                    <p>Start Date :</p>
                    <p>End Date :</p>
                  </div>

                  <div>
                    <p>{item.origin}</p>
                    <p>{item.destination}</p>
                    <p>{item.startdate}</p>
                    <p>{item.enddate}</p>
                  </div>

                  <div className="mini-3rd-div-img">
                    <MapComponent id={item._id} />
                  </div>
                </div>
              </div>

              <div className="four-div">
                <div className="mini-four-div">
                  <div>
                    <p>BookingId:{item._id}</p>
                    <p>currentDate:{currentDate}</p>
                    <p>currentTime:{currentTime}</p>
                  </div>
                </div>
              </div>

              <div className="five-div">
                <Button
                  variant="primary"
                  className="edit-btn"
                  onClick={() => {
                    // seteditpage(true);
                    console.log(item._id);
                    localStorage.setItem("key", JSON.stringify(item._id));
                    navigate("/editbooking");
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="secondary"
                  className="canceled-btn1"
                  onClick={() => {
                    console.log(item._id);
                    fetch(
                      `https://miles-node-ptu.onrender.com/user/mybookings/${item._id}`,
                      {
                        method: "DELETE",
                        headers: {
                          authorization: JSON.parse(
                            localStorage.getItem("userToken")
                          ),
                        },
                      }
                    )
                      .then((response) => {
                        if (response.ok) {
                          fetch(
                            "https://miles-node-ptu.onrender.com/user/mybookings",
                            {
                              headers: {
                                authorization: JSON.parse(
                                  localStorage.getItem("userToken")
                                ),
                              },
                            }
                          )
                            .then((response) => response.json())
                            .then((data) => setdata(data.data));
                          console.log("Data deleted successfully");
                        } else {
                          throw new Error("Error deleting data");
                        }
                      })
                      .catch((error) => {
                        console.error("Error deleting data:", error);
                      });
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyBooking;
