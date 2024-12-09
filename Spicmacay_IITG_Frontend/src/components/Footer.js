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
          <Link to="#">Instagram</Link>
          <Link to="#">Twitter</Link>
        </div>
        
      </div><br></br><br></br>
      <p>Copyright &copy; 2024<span style={{ color: "#ffcc00", fontWeight: "bold" }}> SPIC MACAY</span> | All Rights Reserved</p>

    </footer>
  );
}

export default Footer;
