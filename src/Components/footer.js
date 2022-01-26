import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
 import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          
        <div className="footer-link-items">
          <a>
            <img
              className="logo"
              src={logo}
              style={{ width: "100%", height: "120%" }}
              alt="logo"
            ></img>
          </a>
          </div>

          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/products">Products</Link>
            <Link to="/">Terms of Service</Link>
          </div>

          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact">Contact</Link>
          </div>

           <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/cargocoolie/">Instagram</a>
            <a href="https://www.facebook.com/Cargocoolie-110096161501103/">Facebook</a>
            
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Footer;
