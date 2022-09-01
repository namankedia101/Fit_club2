import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { useState } from "react";
import Bars from "../../assets/bars.png"

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);  
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="header">
      <div className="logo">GYM TIME</div>
      {menuOpened === false && mobile === true ? (
        <div
          className="bars"
          onClick={() => setMenuOpened(true)}
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ):
        (<div className="menu">
          <span>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="home"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </span>
          <span>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="programs"
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </span>
          <span>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="reasons"
              span={true}
              smooth={true}
            >
              Why Us
            </Link>
          </span>
          <span>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="plans"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </span>
          <span>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </span>
        </div>)
      }
    </div>
  );
};
