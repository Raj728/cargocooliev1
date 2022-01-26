import React from "react";
import ReactDOM from "react-dom";
// import img1 from '../images/img1.jpg';
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import logo from "../images/logo.png";

import { Link } from "react-router-dom";

import "./Slider.css";

function Slider() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
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

          <a className="navbar-brand" href="#"></a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
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

	  
      <div
        className="carousel slide"
        data-ride="carousel"
        id="carouselExampleIndicators"
      >
        <ol className="carousel-indicators">
          <li
            className="active"
            data-slide-to="0"
            data-target="#carouselExampleIndicators"
          ></li>
          <li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
          <li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img alt="First slide" className="slideImg" src={img1}></img>
			<div class="carousel-caption d-none d-md-block">
            <h5>Welcome To CargoCoolie Impex</h5>
            <p>World wide Agriculture commodities Import and Exports company</p>


              <div className="slider-btn">
                <a href='http://localhost:3000/products'>
                <button className="btn btn-1">Our Products</button>
                </a>
                <a href='http://localhost:3000/contact'>
                <button className="btn btn-2">Our Contacts</button>
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img alt="Third slide" className="slideImg" src={img3}></img>
			<div class="carousel-caption d-none d-md-block">
            <h5>Welcome To CargoCoolie Impex</h5>
            <p>World wide Agriculture commodities Import and Exports company</p>


              <div className="slider-btn">
                <Link to="/products">
                <button className="btn btn-1">Our Products</button>
                </Link>
                <Link to="/contact">
                <button className="btn btn-2">Our Contacts</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img alt="Third slide" className="slideImg" src={img3}></img>
			<div class="carousel-caption d-none d-md-block">
            <h5>Welcome To CargoCoolie Impex</h5>
            <p>World wide Agriculture commodities Import and Exports company</p>


              <div className="slider-btn">
                <button className="btn btn-1">Our Products</button>
                <button className="btn btn-2">Our Contacts</button>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          data-slide="prev"
          href="#carouselExampleIndicators"
          role="button"
        >
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon"
          ></span>{" "}
          <span className="sr-only">Previous</span>
        </a>{" "}
        <a
          className="carousel-control-next"
          data-slide="next"
          href="#carouselExampleIndicators"
          role="button"
        >
          <span
            aria-hidden="true"
            className="carousel-control-next-icon"
          ></span>{" "}
          <span className="sr-only">Next</span>
        </a>
      </div>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    </div>
  );
}

ReactDOM.render(Slider, document.getElementById("root"));

export default Slider;
