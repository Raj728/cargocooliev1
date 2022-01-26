import emailjs from 'emailjs-com';
import React from "react";
import c4 from "../images/c4.jpg";
import "./Contact.css";
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import whatsapp from "../images/WhatsApp-logo.png";


function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_zmzg2m8', 'template_x21e5ef', e.target, 'user_rESEgn84O0eNW7VtsBHA6')
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  return (

    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
        <div className="container"  >

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

      <section className="contact">
        <div className="containerr"
          style={{ backgroundImage: `url(${c4})` }}
        >
          <div className="row">
            <div className="item col-md-6">
              {/* <img src={i6} class="img-thumbnail" alt="..." 
          /> */}

              <div className="contact-section">
                <div className="contact-info">
                  <div>
                    <i class="fas fa-map-marker-alt"></i> Muralidhar Nagar, Nashik,
                    Maharashtra-422010
                  </div>
                  <br />
                  <div>
                    <i class="fas fa-envelope"></i> impex@cargocoolie.com
                  </div>
                  <br />
                  <div>
                    <i class="fas fa-phone"></i> +91 8484827393
                   
                  </div>
                  <div>
                    <i ></i>&nbsp; &nbsp;&nbsp;   +91 9049049708
                    
                  </div>
                  <br />
                  
                </div>
              </div>



            </div>


            
            <div className="col-md-4">
              <h2 style={{ fontFamily: 'initial', marginTop: '10px'}}><b>Contact Us</b></h2>
              <form onSubmit={sendEmail}>
                <div class="form-group">
                  <label for="exampleFormControlInput1" style={{ fontFamily: 'serif', fontSize: '18px' }}>Full Name</label>
                  <input type="text" name='name' class="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1" style={{ fontFamily: 'serif', fontSize: '18px' }}>Email address</label>
                  <input type="email" name="userEmail" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1" style={{ fontFamily: 'serif', fontSize: '18px' }}>Enter Message</label>
                  <textarea class="form-control" name='message' id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div>
                  <button type="submit" class="btn btn-primary mb-2" style={{ fontFamily: 'serif', fontSize: '18px' }}>Submit</button>
                </div>
              </form>


            </div>
            <div className="whatsapp_float">
              <a href="https://wa.me/918484827393" target="_blank">
                <img style={{width:'80px'}} src={whatsapp}  class="whatsapp_float_btn" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
