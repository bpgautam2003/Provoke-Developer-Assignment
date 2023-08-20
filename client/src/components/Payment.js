import React from "react";
import "../styles/Paymentpage.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Payment() {
  const loc = useLocation();
  const methods = loc.state;
  return (
    <div className="card-1">
      <div className="summary">
        <h1>Order Summary</h1>

        {/* const planName = "abcd";
        if (planType == 100) {
      planName = "Mobile";
    } else if (amount == 200) {
      planName = "Basic";
    } else if (amount == 500) {
      planName = "Standard";
    } else {
      planName = "Premium";
    } */}
        <h4>Plan Name : Standard</h4>
        <div className="hr-line-1"></div>
        <h4>Billing Cycle : Monthly</h4>
        <div className="hr-line-1"></div>
        <h4>Plan Price : 500</h4>
        <div className="hr-line-1"></div>
      </div>
      <div className="container-1">
        

        <Link
          to={
            methods.planType == 0
              ? `https://buy.stripe.com/test_8wM4gI6VqbqXeYgfYZ?client_reference_id=${localStorage.getItem(
                  "user"
                )}`
              : methods.planType == 1
              ? `https://buy.stripe.com/test_bIY28AcfK8eL2bu6or?client_reference_id=${localStorage.getItem(
                  "user"
                )}`
              : methods.planType == 2
              ? `https://buy.stripe.com/test_4gwcNe7ZueD917qaEG?client_reference_id=${localStorage.getItem(
                  "user"
                )}`
              : `https://buy.stripe.com/test_5kAcNe0x2dz57vOeUY?client_reference_id=${localStorage.getItem(
                  "user"
                )}`
          }
        >
          <button className="pay-btn">Confirm Payment</button>

        </Link>
        <Link to="/currentplan">
        <div className="pay-btn-1">View my Plan</div>
        </Link>
      </div>
    </div>
  );
}
