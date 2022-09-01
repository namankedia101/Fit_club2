import React, { useRef,useState } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

export const Join = () => {
  const form = useRef();
  const [email,setEmail]= useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    if(email===""){
      alert("Please enter the email");      
    }else{
      emailjs
      .sendForm(
        "service_bb5vx1i",
        "template_a9p7luu",
        form.current,
        "5qo9mgfWcTxnct-fq"
      )
      .then(
        (result) => {
          setEmail("");
          alert("Email sent successfully");
          console.log(result.text);
        },
        (error) => {
          alert("Error occured. Please try later");
          console.log(error.text);
        }
      );
    }
    
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span>READY TO</span>
          <span className="stroke-text">LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form
          ref={form}
          action=""
          className="email-container"
          onSubmit={sendEmail}
        >
          <input
            onChange={e=> setEmail(e.target.value)}            
            type="email"
            name="user_email"
            placeholder="Enter your email address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};
