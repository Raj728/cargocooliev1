import React from "react";
import i7 from "../images/i7.jpg";
import "./About.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import whatsapp from "../images/WhatsApp-logo.png";

function About() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
        <div className="container">
          <Link class="navbar-brand" to="/">
            <a>
              <img
                className="logo"
                src={logo}
                style={{ width: "18%" }}
                alt="logo"
              ></img>
            </a>
          </Link>
          <a className="navbar-brand" href="#"></a>{" "}
          <button
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbarSupportedContent"
            data-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li class="nav-item">
                <Link to="/" class="nav-link active">
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/products" class="nav-link active">
                  Products
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/about" class="nav-link active">
                  About
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/contact" class="nav-link active">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="about">
        <div
          className="aboutTop"
          style={{ backgroundImage: `url(${i7})` }}
        ></div>
        <div className="aboutBottom">
          <h1 style={{ fontFamily: "initial" }}>
            <b> ABOUT US</b>
          </h1>
          <br></br>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h6
                  class="responsive-font-example lead"
                  id="p1"
                  style={{ fontFamily: "serif", alignContent: "center" }}
                >
                  Our organization Cargocoolie Impex is an emerging trading
                  based, fully integrated & a professionally managed company. We
                  are dealing in import and export activities of wide range of commodities.
                  Covercoolie impex is specialized in providing quality agro
                  product, processed food as well as different domestic and
                  industrial commedities. Products are procured from 200+
                  selected suppliers, So we can supply products to our business
                  partners, within the frame & with the assurance of high
                  quality, We are trading successfully in different country.
                </h6>
              </div>
            </div>
          </div>
          <div className="whatsapp_float">
              <a href="https://wa.me/918484827393" target="_blank">
                <img style={{width:'80px'}} src={whatsapp}  class="whatsapp_float_btn" />
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
