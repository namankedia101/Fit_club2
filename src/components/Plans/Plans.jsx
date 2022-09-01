import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";
import { Link } from "react-scroll";

export const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span> YOUR JOURNEY</span>
        <span className="stroke-text"> NOW WITHUS</span>
      </div>

      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key="i">
            {plan.icon}
            <span>{plan.name}</span>
            <span>INR {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -{">"}</span>
            </div>
            <button className="btn">
              <Link activeClass="active" to="join-us" span={true} smooth={true}>
                Join Now
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
