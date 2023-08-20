import { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import "../styles/Monthlypage.css"


export default function Monthly() {
  const [planType, setPlanType] = useState(0);
  const [planDuration, setPlanDuration] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h2>Choose the right plan for you</h2>
        </div>
        <div className="plan-selector">
          <div className="radio-btn col1">
            <div
              className={`monthly-btn ${planDuration === 0 ? "active" : null}`}
              onClick={() => {
                setPlanDuration(0);
                setPlanType(0);
              }}
            >
              <p>Monthly</p>
            </div>
            <div
              className={`yearly-btn ${planDuration === 1 ? "active" : null}`}
              onClick={() => {
                // setPlanDuration(1);
                // setPlanType(0);
                navigate("/yearlysubscription");
              }}
            >
              <p>Yearly</p>
            </div>
          </div>
          <div
            className={`type-mobile btn ${planType === 0 ? "active" : null}`}
            onClick={() => setPlanType(0)}
          >
            <p>Mobile</p>
          </div>
          <div
            className={`type-mobile btn ${planType === 1 ? "active" : null}`}
            onClick={() => setPlanType(1)}
          >
            Basic
          </div>
          <div
            className={`type-mobile btn ${planType === 2 ? "active" : null}`}
            onClick={() => setPlanType(2)}
          >
            Standard
          </div>
          <div
            className={`type-mobile btn ${planType === 3 ? "active" : null}`}
            onClick={() => setPlanType(3)}
          >
            Premium
          </div>
        </div>

        <div className="row-1">
          <div className="col1-text">
            <p>Monthly price</p>
          </div>
          <div className={`col-text ${planType === 0 ? "active" : null}`}>
            <p>₹ 100</p>
          </div>
          <div className={`col-text ${planType === 1 ? "active" : null}`}>
            <p>₹ 200</p>
          </div>
          <div className={`col-text ${planType === 2 ? "active" : null}`}>
            <p>₹ 500</p>
          </div>
          <div className={`col-text ${planType === 3 ? "active" : null}`}>
            <p>₹ 700</p>
          </div>
        </div>
        <div className="hr-line"></div>

        <div className="row-1">
          <div className="col1-text">
            <p>Video quality</p>
          </div>
          <div className={`col-text ${planType === 0 ? "active" : null}`}>
            <p>Good</p>
          </div>
          <div className={`col-text ${planType === 1 ? "active" : null}`}>
            <p>Good</p>
          </div>
          <div className={`col-text ${planType === 2 ? "active" : null}`}>
            <p>Better</p>
          </div>
          <div className={`col-text ${planType === 3 ? "active" : null}`}>
            <p>Best</p>
          </div>
        </div>
        <div className="hr-line"></div>
        <div className="row-1">
          <div className="col1-text">
            <p>Resolution</p>
          </div>
          <div className={`col-text ${planType === 0 ? "active" : null}`}>
            <p>480p</p>
          </div>
          <div className={`col-text ${planType === 1 ? "active" : null}`}>
            <p>480p</p>
          </div>
          <div className={`col-text ${planType === 2 ? "active" : null}`}>
            <p>1080p</p>
          </div>
          <div className={`col-text ${planType === 3 ? "active" : null}`}>
            <p>4K+HDR</p>
          </div>
        </div>
        <div className="hr-line"></div>
        <div className="row-1">
          <div className="col1-text">
            <p>Devices you can use to watch</p>
          </div>
          <div className={`col-text ${planType === 0 ? "active" : null}`}>
            <p>Phone</p>
          </div>
          <div className={`col-text ${planType === 1 ? "active" : null}`}>
            <p>Phone</p>
          </div>
          <div className={`col-text ${planType === 2 ? "active" : null}`}>
            <p>Phone</p>
          </div>
          <div className={`col-text ${planType === 3 ? "active" : null}`}>
            <p>Phone</p>
          </div>
        </div>

        <div className="row-1">
          <div className="col1-text">
            <p></p>
          </div>

          <div className={`col-text ${planType === 0 ? "active" : null}`}>
            <p>Tablet</p>
          </div>
          <div className={`col-text ${planType === 1 ? "active" : null}`}>
            <p>Tablet</p>
          </div>
          <div className={`col-text ${planType === 2 ? "active" : null}`}>
            <p>Tablet</p>
          </div>
          <div className={`col-text ${planType === 3 ? "active" : null}`}>
            <p>Tablet</p>
          </div>
        </div>
        <div className="row-1">
          <div className="col1-text">
            <p></p>
          </div>

          <div className="col-text">
            <p></p>
          </div>
          <div className={`col-text ${planType === 1 ? "active" : null}`}>
            <p>Computer</p>
          </div>
          <div className={`col-text ${planType === 2 ? "active" : null}`}>
            <p>Computer</p>
          </div>
          <div className={`col-text ${planType === 3 ? "active" : null}`}>
            <p>Computer</p>
          </div>
        </div>
        <div className="row-1">
          <div className="col1-text">
            <p></p>
          </div>

          <div className="col-text">
            <p></p>
          </div>
          <div className={`col-text ${planType === 1 ? "active" : null}`}>
            <p>Tv</p>
          </div>
          <div className={`col-text ${planType === 2 ? "active" : null}`}>
            <p>Tv</p>
          </div>
          <div className={`col-text ${planType === 3 ? "active" : null}`}>
            <p>Tv</p>
          </div>
        </div>

        <Link to="/payment" state={{"planType": planType, "period": 0}}> <button className="next-btn">Next</button></Link>
      </div>
    </div>
  );
}
