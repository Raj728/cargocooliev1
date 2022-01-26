import React from 'react';
import img4 from '../images/img4.jpg';
function VMC() {
    return (
        <section className="section bg-c-light border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-5 text-center">
                        <h1 className="main-heading" style={{fontFamily:'initial'}}><b>CargoCoolie Impex</b></h1>
                        <div className="underline mx-auto"></div>

                    </div>
                    <div className="col-md-4 text-center">


                        <h3 style={{fontFamily:'initial'}}><b>Our Vision</b></h3>
                        <p style={{fontFamily:'serif', fontSize:'18px'}}>

                        To Provide Superior Agricultural products to each and every corner of the World with the associated farmers of India.
                        To constantly innovate, create and Adapt to the latest technologies to leave a truly international footprint.
                        </p>

                    </div>
                    <div className="col-md-4 text-center">
                        <img src={img4} className="w-100 border-bottom photo" alt="services" />
                    </div>
                    <div className="col-md-4 text-center">
                        <h3 style={{fontFamily:'initial'}}><b> OUR QUALITY</b></h3>
                        <p style={{fontFamily:'serif', fontSize:'18px'}}>
                           
                        CargoCoolie Exports is certified by APEDA. Quality speaks forever. 
                        The ultimate aim of our concern is to deliver the products at a quality 
                        in all shapes according to the availability of the Buyers.
                        </p>

                    </div>

                </div>
            </div>

        </section>
    );
}
export default VMC;