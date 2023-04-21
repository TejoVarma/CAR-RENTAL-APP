  import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import EditBookingDetails from "./EditBookingDetails";
import "../../styles/EditBookingDetails.css";
import "../../styles/MyBooking.css";
import axios from "axios";
import Header from "./Header";

const MyBooking = (BookedCar) => {
  const [editpage, seteditpage] = useState(false);
  const currentDate = new Date().toLocaleDateString(); // get current date in format MM/DD/YYYY
  const currentTime = new Date().toLocaleTimeString();
  const [destination, setdestination] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/user/getbookingdetails")
      .then((response) => response.json())
      .then((destination) => setdestination(destination.data[destination.data.length-1]))
  }, [destination]);
  console.log(destination)
  
  return (
    <>
      {/* <Header /> */}
      {!editpage && (
        <div className="my-box">
          <div className="div-1">
            <div className="one-div">
              <img
                src={`http://localhost:4000/admin/${BookedCar.BookedCar.singlecar.image}`}
                alt="photo"
              />
            </div>

            <div className="two-div">
              <h2>{BookedCar.BookedCar.singlecar.carname}</h2>
              <h5> MH 03 ZQ 1234</h5>
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
                  <p>{destination.origin}</p>
                  <p>{destination.destination}</p>
                  <p>{destination.startdate}</p>
                  <p>{destination.enddate}</p>
                </div>

                <div className="mini-3rd-div-img">
                  {/* <div className="mini-3rd-div-img"> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d973521.5531922826!2d73.48046505385568!3d17.6113483639419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bc100404d639073%3A0xc0e2f0fe65fa2b25!2sKolhapur%20Bus%20Stand%20(CBS)%2C%20Benadikar%20Path%2C%20Shahupuri%2C%20Kolhapur%2C%20Maharashtra%20416001!3m2!1d16.7034517!2d74.24323319999999!4m5!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!3m2!1d18.520430299999997!2d73.8567437!5e0!3m2!1sen!2sin!4v1680106081224!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              {/* </div> */}
                </div>
              </div>
            </div>

            <div className="four-div">
              <div className="mini-four-div">
                <div>
                  <p>BookingId:{BookedCar.BookedCar.singlecar.id}</p>
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
                  seteditpage(true);
                }}
              >
                Edit
              </Button>
              <Button
                variant="secondary"
                className="canceled-btn1"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {editpage && <EditBookingDetails editBookedcar={BookedCar} />}
    </>
  );
};

export default MyBooking;
