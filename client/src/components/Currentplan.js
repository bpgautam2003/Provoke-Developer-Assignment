import React from "react";
import "../styles/Currentplan.css";
import { Link } from "react-router-dom";

export default function Currentplan() {
  return (
    <div className="card-2">
      <div className="title-2">
        <h1>Current Plan Details</h1>
        <button className="status">Active</button>
        <Link to="/canceled">Cancel</Link>
      </div>
      <div className="plan">
        <p>
          Standard <br />
          Phone + Tablet + Computer + TV
        </p>
      </div>
      <div className="amount">Rs. 500/month</div>
      <Link to="/monthlysubscription"><button className="change-btn">Change Plan</button></Link>
      <div className="expiry">
        <p>
          Your subscription has started on Aug 20th, 2023 and will auto renew on
          Sep 21st 2023.
        </p>
      </div>
    </div>
  );
}
