 import React, { useState } from "react";

const HomePage = () =>{


        return (
            <div className ="home">
                <section>
                    <header className="header-banner">
                        <img src="./assets/images/hotel-background.jpg" alt="Seven Star Hotel" className="header-image" />
                        <div className="overlay"></div>
                        <div className="animated-texts overlay-content">
                            <h1>
                                Welcome to <span className="seven-color">Seven Star Hotel</span> 
                            </h1><br />
                            <h3>Step into a haven of comfort and care</h3>
                        </div>
                    </header>
                </section>

                

                <h2 className="home-services">Services We Offer At <span className="seven-color">Seven star Hotel</span></h2>


                <section className="service-section"><div className="service-card">
                    <img src="./assets/images/ac.png" alt="Air-conditioning" />
                    <div className="service-details">
                        <h3 className="service-title">Air Conditioning</h3>
                        <p className="service-description">Stay cool and comfortable throughout your stay with our individually controlled in-room air conditioning.</p>
                    </div>
                </div>
                    <div className="service-card">
                        <img src="./assets/images/mini-bar.png" alt ="Mini Bar" />
                        <div className="service-details">
                            <h3 className="service-title">Mini Bar</h3>
                            <p className="service-description">Enjoy a convenient selection of beverages and snacks stocked in your room's mini bar with no additional cost. </p>
                        </div>
                    </div>
                    <div className="service-card">
                        <img src="./assets/images/parking.png" alt="parking" />
                        <div className="service-details">
                            <h3 className= "service-title">Parking</h3>
                            <p className="service-description">We offer on-site spacious parking for your convenience . </p>
                        </div>
                    </div>
                    <div className="service-card">
                        <img src="./assets/images/wifi.png" alt="WIFI" />
                        <div className="service-details">
                            <h3 className="service-title">WIFI</h3>
                            <p className="service-description"> Stay connected throughout your stay with complimentary high-speed Wi-Fi access available in all guest rooms and public areas.</p>
                        </div>
                    </div>

                </section>

                <section>

                </section>
            </div>
        );
    
}

export default HomePage;