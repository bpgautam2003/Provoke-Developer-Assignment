import React from "react";
import "../styles/Canceledpage.css";
import { Link } from "react-router-dom";

export default function Canceled() {
  return (
    <div className="card-3">
      <div className="title-3">
        <h1>Current Plan Details</h1>
        <button className="status-2">Cancelled</button>
      </div>
      <div className="plan-2">
        <p>
          Standard <br />
          Phone + Tablet + Computer + TV
        </p>
      </div>
      <div className="amount-2">Rs. 500/month</div>
      <Link to="/monthlysubscription"><button className="choose-btn">Choose Plan</button></Link>
      <div className="expiry-2">
        <p>
          Your subscription has been cancelled and you lost the access to
          services.
        </p>
      </div>
    </div>
  );
}
