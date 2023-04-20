import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import EditBookingDetails from "./EditBookingDetails";
import '../../styles/EditBookingDetails.css'
import '../../styles/MyBooking.css'
import axios from "axios";
import Header from "./Header";

const MyBooking = () => {
  const [editpage, seteditpage] = useState(false);
  const currentDate = new Date().toLocaleDateString(); // get current date in format MM/DD/YYYY
  const currentTime = new Date().toLocaleTimeString();
  const [destination, setdestination] = useState([]);
  return (
    <>
      <Header />
      {
        // !editpage &&
        <div className="my-box">
          <div className="div-1">
            <div className="one-div">
              <img src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?
                    cs=srgb&dl=asphalt-auto-automobile-244206.jpg&fm=jpg" alt="photo" />
            </div>

            <div className="two-div">
              <h2>carname</h2>
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
                  <p>origin</p>
                  <p>destination</p>
                  <p>startdate</p>
                  <p>enddate</p>
                </div>

                <div className="mini-3rd-div-img">
                  <img src="hello" alt='hello'/>
                </div>
              </div>
            </div>

            <div className="four-div">
              <div className="mini-four-div">
                <div>
                  <p>BId:</p>
        <p>currentDate:{currentDate}</p>
        <p>currentTime:{currentTime}</p>
                </div>
              </div>
            </div>

            <div className="five-div">
              <Button variant="primary" className="edit-btn">
                Edit
              </Button>
              <Button variant="secondary" className="canceled-btn">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      }

      {editpage && <EditBookingDetails />}
    </>
  );
};

export default MyBooking;
