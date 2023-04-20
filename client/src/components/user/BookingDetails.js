import React, { useState } from "react";
import "../../styles/BookingDetails.css";
import { Button } from "react-bootstrap";
import MyBooking from "./MyBooking";
import axios from "axios";
import Header from "./Header";

const BookingDetails = (singlecar) => {
  const [mybook, setmybook] = useState(false);
  const currentDate = new Date().toLocaleDateString(); // get current date in format MM/DD/YYYY
  const currentTime = new Date().toLocaleTimeString();
  const [destination, setdestination] = useState([]);
  return (
    <>
      <Header />
      {
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
                  <h3>Toyota</h3>
                  <p>MH 03 ZQ 1234</p>
                </div>

                <div className="mini-3rd-div-img">
                  <img
                    src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?
                    cs=srgb&dl=asphalt-auto-automobile-244206.jpg&fm=jpg"
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
                  <p>Hyderabad</p>
                  <p>Delhi</p>
                  <p>3/1/23</p>
                  <p>2/2/23</p>
                </div>

                <div className="mini-3rd-div-img">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d973521.5531922826!2d73.48046505385568!3d17.6113483639419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bc100404d639073%3A0xc0e2f0fe65fa2b25!2sKolhapur%20Bus%20Stand%20(CBS)%2C%20Benadikar%20Path%2C%20Shahupuri%2C%20Kolhapur%2C%20Maharashtra%20416001!3m2!1d16.7034517!2d74.24323319999999!4m5!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!3m2!1d18.520430299999997!2d73.8567437!5e0!3m2!1sen!2sin!4v1680106081224!5m2!1sen!2sin"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
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
                <p>1 </p>
                <p>2</p>
                <p>3</p>
                <div>
                  <Button className="cancel-btn" variant="primary">
                    Cancel
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
                <p>Rs</p>
              </div>

              <div className="pricing">
                <p>Pricing</p>
                <p>Rs</p>
              </div>

              <div className="tax">
                <p>Tax Charges</p>
                <p>Rs </p>
              </div>

              <hr />

              <div className="tax">
                <p>Sub Total</p>
                <p>18100</p>
              </div>
              <Button variant="primary" className="proceed-btn">
                Proceed
              </Button>
            </div>
          </div>
        </div>
      }
      {mybook && <MyBooking />}
    </>
  );
};

export default BookingDetails;
