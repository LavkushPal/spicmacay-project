import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="imp-links">
          <h4>Helpful Links</h4>
          <Link to="/feedback">Feedback form</Link>
          <Link to="/about">About us</Link>
          <Link to="mailto:spicmacay@iitg.ac.in">Get in touch</Link>
        </div>
        <div className="social-links">
          <h4>Connect with us</h4>
          <Link to="#">Facebook</Link>
          <Link to="https://www.instagram.com/spicmacay_iitg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            Instagram
          </Link>
          <Link to="https://www.linkedin.com/in/lavkush-pal-b53812320?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3By9j%2F8Cw4QnOllSPrXprmtg%3D%3D">LinkedIn</Link>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="get-in-touch">
       
        <p>
          Website Work Contributed By:{" "}
          <span style={{ color: "#ffcc00", fontWeight: "bold" }}>
            <a
              href="https://www.linkedin.com/in/shivaram-m-cse?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"

              style={{
                color: "#0072b1", // LinkedIn's official blue color
                fontWeight: "bold",
                
              }}
            >
              Shivaram & {" "}
            </a>
          </span>
          <span style={{ color: "#ffcc00", fontWeight: "bold" }}>
            <a
              href="https://www.linkedin.com/in/lavkush-pal-b53812320?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3By9j%2F8Cw4QnOllSPrXprmtg%3D%3D"
              target="_blank"
              
              style={{
                color: "#0072b1", // LinkedIn's official blue color
                fontWeight: "bold",
                
              }}
            >
              Lavkush Pal
            </a>
          </span>
        </p>
        <p>Convenor : 
        <span style={{ color: "#ffcc00", fontWeight: "bold" }}>
          Abhishek Dwivedi
        </span>
        </p>
        <p>Indian Institute of Technology, Guwahati, Assam, India - 781039</p>
        <p>
          Spicmacay Email:{" "}
          <span style={{ color: "#ffcc00", fontWeight: "bold" }}>
            <a
              href="mailto:spicmacay@iitg.ac.in"
              style={{ color: "#ffcc00", fontWeight: "bold" }}
            >
              spicmacay@iitg.ac.in
            </a>
          </span>
        </p>{" "}
        <p>
          Convenor Contact:
          <span style={{ color: "#ffcc00", fontWeight: "bold" }}>
            {" "}
            <a
              href="mailto:+91 6388838049"
              style={{ color: "#ffcc00", fontWeight: "bold" }}
            >
              {" "}
              +91 6388838049
            </a>
          </span>{" "}
        </p>
      </div>
      <p>
        Copyright &copy; 2024
        <span style={{ color: "#ffcc00", fontWeight: "bold" }}>
          {" "}
          SPIC MACAY
        </span>{" "}
        | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
