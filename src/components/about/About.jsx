import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./about.css";

import Avatar1 from "../../assets/pictures-of-my-ugly-face/avatar1.png";
import Avatar2 from "../../assets/pictures-of-my-ugly-face/avatar2.png";
import Avatar3 from "../../assets/pictures-of-my-ugly-face/avatar3.png";

import AboutBox from "./AboutBox";
import "../resume/wrapper.css";
import Marquee from "./Marquee.jsx";

const About = () => {
    const [currentImage, setCurrentImage] = useState(Avatar1);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleAvatarClick = () => {
        if (isAnimating) return; // handle clicks midway animation

        // Start animation
        setIsAnimating(true);

        // Change image halfway through the animation
        setTimeout(() => {
            setCurrentImage((prevImage) =>
                prevImage === Avatar1 ? Avatar2 : prevImage === Avatar2 ? Avatar3 : Avatar1
            );
        }, 1125); // Halfway through the animation

        // End animation after the full duration
        setTimeout(() => {
            setIsAnimating(false);
        }, 1500); // Match the total animation duration
    };

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">
                About Me <br />
                <span className="text-animation"><span></span></span>
            </h2>

            <div className="about__container grid">
                {/* Avatar with animation */}
                <img
                    src={currentImage}
                    alt="Avatar"
                    className={`about__img ${isAnimating ? "animate-avatar" : ""}`}
                    onClick={handleAvatarClick}
                />

                <div className="about__data">
                    <div className="about__info">
                        {/* <p className="about__description">
                            I'm Tsee Saricha, developer from Singapore. My favourite pastime is searching for cats
                            around void decks to pet as well as cafe hopping. I'm a Fullstack Developer with experience
                            in React, Node.js, Express, and MySQL.
                        </p> */}
                        <p>
                            I'm Tsee Saricha, developer from Singapore. My favourite pastime is searching for 
                            <Link to="/cats" style={{ color: "inherit", textDecoration: "underline" }}> cats </Link>
                             around void decks to pet as well as cafe hopping. I'm a Fullstack Developer with experience in React, Node.js, Express, and MySQL.
                        </p>

                        <a
                            href="/assets/Resume-jan2025.pdf"
                            download="Resume-jan2025.pdf"
                            className="btn">
                            Download CV
                        </a>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">80%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">UI/UX design</h3>
                                <span className="skills__number">90%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">Graphic design</h3>
                                <span className="skills__number">60%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage graphic__design"></span>
                            </div>
                        </div>
                    </div> */}
                    <br />
                    <Marquee />
                </div>

            </div>



            <AboutBox />
        </section>
    );
};

export default About;
