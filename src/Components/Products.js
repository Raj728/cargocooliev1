import React, { Component } from 'react';
import img5 from '../images/img5.jpg';
import pomo from '../images/pomo.jpeg';
import green from '../images/green.jpg';
import i9 from '../images/i9.jpg';
import i13 from '../images/i13.jpg';
import i14 from '../images/i14.jpg';
import i16 from '../images/i16.jpg';
import tomato from '../images/tomato.jpeg';
import i17 from '../images/i17.jpg';
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Product.css";
import whatsapp from "../images/WhatsApp-logo.png";



function Products() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
                <div className="container">
                    <Link class="navbar-brand" to="/">
                        <a>
                            <img
                                className="logo"
                                src={logo}
                                style={{ width: "15%" }}
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


            <section className="section bg-c-light border-top product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-1 text-center">
                            <h1 className="main-heading" style={{ fontFamily: 'initial', fontSize: '30px' }}><b>Our Products</b></h1>
                            <div className="underline mx-auto"></div>
                        </div>

                        <div className='row mr-1 mt-5'>
                            <div className="col-md-4">
                                <div className='card'>
                                    <div className='card shadow'>
                                        <img src={img5} className='w-100 border-bottom'></img>
                                        <div className='card-body'>
                                            <h6 style={{ fontFamily: 'initial', fontSize: '18px' }}><b>Capsicum</b></h6>
                                            <div className='underline'></div>
                                            <p style={{ fontFamily: 'sans-serif' }}>
                                                Capsicum, also known as red pepper or chili pepper, is an herb.
                                                Its fruit is commonly applied to the skin for arthritis pain and other conditions.
                                                The fruit of the capsicum plant contains a chemical called capsaicin.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className='card'>
                                    <div className='card shadow'>
                                        <img src={green} className='w-100 border-bottom'></img>
                                        <div className='card-body'>
                                            <h6 style={{ fontFamily: 'initial', fontSize: '18px' }}><b>Grapes</b></h6>
                                            <div className='underline'></div>
                                            <p style={{ fontFamily: 'sans-serif' }}>
                                                Grapes are a type of fruit that grow in clusters of 15 to 300, and can be crimson, black, dark blue, yellow, green, orange, and pink. "White" grapes are actually green in color, and are evolutionarily derived from the purple grape
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className='card'>
                                    <div className='card shadow'>
                                        <img src={i9} className='w-100 border-bottom'></img>
                                        <div className='card-body'>
                                            <h6 style={{ fontFamily: 'initial', fontSize: '18px' }}><b>Broccoli</b></h6>
                                            <div className='underline'></div>
                                            <p style={{ fontFamily: 'sans-serif' }}>
                                                Broccoli is a fast-growing annual plant that grows 60–90 cm (24–35 inches) tall. ... Upright and branching with leathery leaves, broccoli bears dense green clusters of flower buds at the ends of the central axis and the branches..
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row mr-1 mt-5'>
                            <div className="col-md-4">
                                <div className='card'>
                                    <div className='card shadow'>
                                        <img src={i13} className='w-100 border-bottom'></img>
                                        <div className='card-body'>
                                            <h6 style={{ fontFamily: 'initial', fontSize: '18px' }}><b>White Onion</b></h6>
                                            <div className='underline'></div>
                                            <p style={{ fontFamily: 'sans-serif' }}>
                                                An onion is a round vegetable with a brown skin that grows underground. It has many white layers on its inside which have a strong, sharp smell and taste. It is made with fresh minced meat, cooked with onion and a rich tomato sauce
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className='card'>
                                    <div className='card shadow'>
                                        <img src={i14} className='w-100 border-bottom'></img>
                                        <div className='card-body'>
                                            <h6 style={{ fontFamily: 'initial', fontSize: '18px' }}><b>Red Onion</b></h6>
                                            <div className='underline'></div>
                                            <p style={{ fontFamily: 'sans-serif' }}>
                                                An onion is a round vegetable with a brown skin that grows underground. It has many white layers on its inside which have a strong, sharp smell and taste. ... It is made with fresh minced meat, cooked with onion and a rich tomato sauce
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className='card'>
                                    <div className='card shadow'>
                                        <img src={i16} className='w-100 border-bottom'></img>
                                        <div className='card-body'>
                                            <h6 style={{ fontFamily: 'initial', fontSize: '18px' }}><b>Garlic</b></h6>
                                            <div className='underline'></div>
                                            <p style={{ fontFamily: 'sans-serif' }}>
                                                Garlic (Allium sativa ), is a plant with long, flat grasslike leaves and a papery hood around the flowers. ... The stalk rises directly from the flower bulb, which is the part of the plant used as food and medicine.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='row mr-1 mt-5'>
                            <div className="col-md-4">
                                <div className='card'>
                                    <div className='card shadow'>
                                        <img src={tomato} className='w-100 border-bottom'></img>
                                        <div className='card-body'>
                                            <h6 style={{ fontFamily: 'initial', fontSize: '18px' }}><b>Tomatoes</b></h6>
                                            <div className='underline'></div>
                                            <p style={{ fontFamily: 'sans-serif' }}>
                                                Tomatoes are usually red, scarlet, or yellow, though green and purple varieties do exist, and they vary in shape from almost spherical to oval and elongate to pear-shaped.
                                                Each fruit contains at least two cells of small seeds surrounded by jellylike pulp. hothouse tomatoes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className='card'>
                                    <div className='card shadow'>
                                        <img src={i17} className='w-100 border-bottom'></img>
                                        <div className='card-body'>
                                            <h6 style={{ fontFamily: 'initial', fontSize: '18px' }}><b>Seeds</b></h6>
                                            <div className='underline'></div>
                                            <p style={{ fontFamily: 'sans-serif' }}>
                                                A seed is a small embryonic plant enclosed in a covering called the seed coat, usually with some stored food.
                                                It is the product of the ripened ovule of gymnosperm and angiosperm plants which occurs after fertilization and some growth with in the motherplant.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className='card'>
                                    <div className='card shadow'>
                                        <img src={pomo} className='w-100 border-bottom'></img>
                                        <div className='card-body'>
                                            <h6 style={{ fontFamily: 'initial', fontSize: '18px' }}><b>Pomegranate</b></h6>
                                            <div className='underline'></div>
                                            <p style={{ fontFamily: 'sans-serif' }}>
                                                The pomegranate plant is a large shrub or small tree that has smooth, evergreen leaves and showy orange to red flowers. It has rounded fruit with a dry outer covering (husk) made up of two layers: (1) a hard-outer layer called an epicarp, (2) a soft inner layer called a mesocarp.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="whatsapp_float">
                            <a href="https://wa.me/918484827393" target="_blank">
                                <img style={{ width: '80px' }} src={whatsapp} class="whatsapp_float_btn" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Products;