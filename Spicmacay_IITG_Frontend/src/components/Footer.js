import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        
      <div className="imp-links">
      <h4>Helpful Links</h4>
          <Link to="/feedback">Feedback form</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Get in touch</Link>
        </div>
        <div className="social-links">
        <h4>Connect with us</h4>
          <Link to="#">Facebook</Link>
          <Link to="https://www.instagram.com/spicmacay_iitg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</Link>
          <Link to="#">Twitter</Link>
        </div>
        
      </div><br></br>
      <div className='get-in-touch'>

      <br></br>
      <span style={{ color: "#ffcc00", fontWeight: "bold" }}>Convenor : Abhishek Dwivedi</span>
        <p>Indian Institute of Technology, Guwahati, Assam, India - 781039</p>
        
        {/* <br></br> */}
        <p>Spicmacay Email: <span style={{ color: "#ffcc00", fontWeight: "bold" }}> spicmacay@iitg.ac.in</span></p>
        <p>Convenor Contact:<span style={{ color: "#ffcc00", fontWeight: "bold" }}>  +91 6388838049</span> </p>
      </div>
      {/* <br></br> */}
      <p>Copyright &copy; 2024<span style={{ color: "#ffcc00", fontWeight: "bold" }}> SPIC MACAY</span> | All Rights Reserved</p>

    </footer>
  );
}

export default Footer;
