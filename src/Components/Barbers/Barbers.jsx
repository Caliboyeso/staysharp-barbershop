import React from "react";
import "./css/barbers.css";
import "../Home/css/home.scss";
import StaySharp from "../img/staysharp.png";

const Barbers = () => {
  return (
    <div className="Barbers-section">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
      </style>
      <h1 className="Barbers-header">Barbers</h1>
      <div className="Barbers-main-div">
        {/* Card #1 */}
        <div className="Barber-Card">
          <img className="Barber-img" src={StaySharp} alt="Izzy" />
          <h2 className="Barber-name">Abdiel</h2>
          <div className="Barber-btns">
            <button className="Instagram"><a href="https://www.instagram.com/209staysharpbarbershop/" className="IG-link">Instagram</a></button>
            <button className="Booksy"><a href="https://getsquire.com/booking/book/209-stay-sharp-barbershop-manteca/barber/abdiel-chiquito-1/services" className="Bookys-link">Book Appointment</a></button>
          </div>
        </div>
        {/* Card #2 */}
        <div className="Barber-Card">
          <img className="Barber-img" src={StaySharp} alt="Izzy" />
          <h2 className="Barber-name">Izzy</h2>
          <div className="Barber-btns">
            <button className="Instagram"><a href="https://www.instagram.com/eskeletoblendz/" className="IG-link">Instagram</a></button>
            <button className="Booksy"><a href="https://booksy.com/en-us/511111_israel-l_barber-shop_134738_manteca?do=invite&_branch_match_id=1141510208990503977&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVLzF1z8zNMnVLyU0CADj%2FkskiAAAA" className="Bookys-link">Book Appointment</a></button>
          </div>
        </div>
        {/* Card #3 */}
        <div className="Barber-Card">
          <img className="Barber-img" src={StaySharp} alt="Izzy" />
          <h2 className="Barber-name">Mariah</h2>
          <div className="Barber-btns">
            <button className="Instagram"><a href="https://www.instagram.com/razoriah/" className="IG-link">Instagram</a></button>
            <button className="Booksy"><a href="https://booksy.com/en-us/388450_mariah_barber-shop_134738_manteca?do=invite&_branch_match_id=1141510208990503977&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL3BM8TKJ8HVLyU0CAEfTMXwiAAAA" className="Bookys-link">Book Appointment</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barbers;
