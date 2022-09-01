import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";

export const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="logo-f">
            <span>GYM TIME</span>
        </div>
      </div>
    </div>
  );
};
