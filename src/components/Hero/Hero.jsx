import React from "react";
import "./Hero.css";
import { Header } from "../Header/Header";
import { Link } from "react-scroll";
import NumberCounter from "number-counter";

export const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <div className="hero-content">
        <div className="hero-txt">
          <span>
            Let's Get In Shape
            <br />
          </span>
          {/* <span><br/></span> */}
          <span className="stroke-text">
            TRAIN HARD
            <br />
          </span>
        </div>
        <div className="stats">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay="3" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <buttons className="btn">
            <Link activeClass="active" to="join-us" span={true} smooth={true}>
              Get Started
            </Link>
          </buttons>
          <buttons className="btn">
            <Link activeClass="active" to="reasons" span={true} smooth={true}>
              Learn More
            </Link>
          </buttons>
        </div>
      </div>
    </div>
  );
};
