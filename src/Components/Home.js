import React from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import VMC from "./vmc";
import MSME from "../images/MSME.png";
import APEDA from "../images/APEDA.png";
import FIEO from "../images/FIEO.png";
import whatsapp from "../images/WhatsApp-logo.png";

import "./Home.css";

function Home() {
  return (
    <div>
      <Slider />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading" style={{ fontFamily: "initial" }}>
                <b>Cargo Coolie</b>
              </h3>
              <div className="underline mx-auto"></div>
              <p
                className="myColor"
                style={{ fontFamily: "serif", fontSize: "18px" }}
              >
                Our organization Cargocoolie Impex is an emerging trading based,
                fully integrated & a professionally managed company. We are
                dealing in import and export activities of wide range of commodities.
                Cargocoolie impex is specialized in providing quality agro
                product, processed food as well as different domestic and
                industrial commedities.
              </p>
              {/* <Link to="/about" className="btn btn-warning shadow">Read More</Link> */}
            </div>
          </div>
        </div>
      </section>

      <VMC />

      <section className="section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading" style={{ fontFamily: "initial" }}>
                <b>Membership And Accreditations</b>
              </h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 ">
              <div className="card shadow">
                <img
                  src={APEDA}
                  className="w-100 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h6>
                    <b>
                      {" "}
                      Agricultural and Processed Food Products Export
                      Development Authority
                    </b>
                  </h6>
                  <div className="underline"></div>
                  <p style={{ fontFamily: "serif", fontSize: "18px" }}>
                    The Agricultural and Processed Food Products Export
                    Development Authority (APEDA) was established by the
                    Government of India under the APEDA Act passed by the
                    Parliament in December, 1985. The Act came into effect from
                    13th February 1986.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card shadow">
                <img
                  src={MSME}
                  className="w-100 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h6>
                    <b>Micro, Small and Medium Enterprise</b>
                  </h6>
                  <div className="underline"></div>
                  <p style={{ fontFamily: "serif", fontSize: "18px" }}>
                    MSME stands for Micro, Small and Medium Enterprise. It was
                    introduced by the Government of India in agreement with the
                    Micro, Small and Medium Enterprises Development (MSMED) Act
                    of 2006. As per this act, MSMEs are the enterprises involved
                    in the production, & preservation of goods and commodities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card shadow">
                <img
                  src={FIEO}
                  className="w-100 border-bottom"
                  alt="services"
                />
                <div className="card-body">
                  <h6>
                    <b>Federation of Indian Export Organisations</b>
                  </h6>
                  <div className="underline"></div>
                  <p style={{ fontFamily: "serif", fontSize: "18px" }}>
                    The Federation of Indian Export Organisations represents the
                    Indian entrepreneurs spirit of enterprise in the global
                    market. Known popularly as "FIEO", this apex body of Indian
                    export promotion organizations was set up Government of
                    India.
                  </p>
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
      </section>
    </div>
  );
}

export default Home;
