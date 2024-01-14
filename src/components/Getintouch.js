import React from "react";
import "./Getintouch.css";
export default function Getintouch() {
  return (
    <div className="component__space">
      <div className="quote">
        <p>
          "Let's go invent tomorrow instead of worring about what happened
          yesterday."
        </p>
      </div>
      <div className="git__cont component__space">
        <div className="git  " id="CONTACT">
          <div className="maingit">
            <div className="git__inner">
              <h1>Get in Touch</h1>

              <p>You can connect with me on Social Media</p>
              <div className="c_info">
                <i className="fas fa-map-marker-alt">
                  <span> PUNJAB, INDIA</span>
                </i>

              </div>
              <div className="smedia">
                <a
                  href="https://www.linkedin.com/in/shubham05116/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/shubham05116" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://www.instagram.com/shubham__ks/" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
               
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
