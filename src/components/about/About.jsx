import React from "react";
import "./about.css";
import Image from "../../assets/pictures-of-my-ugly-face/avatar1.png";
import AboutBox from "./AboutBox";
import "../resume/wrapper.css";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me <br /><span className="text-animation"><span></span></span></h2>


            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            I'm Tsee Saricha, developer from Singapore. My favourite pastime is searching for cats around void decks to pet as well as cafe hopping. I'm a Fullstack Developer with experience in React, Node.js, Express and MySQL.
                        </p>
                        <a href="" className="btn">Download CV</a>
                    </div>

                    <div className="about__skills grid">
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
                    </div>
                </div>
            </div>

            <br /><br />

            <div className="wrapper__container">
                {/* Left scroller */}
                <div className="wrapper">
                    <div className="itemLeft itemLeft1"></div>
                    <div className="itemLeft itemLeft2"></div>
                    <div className="itemLeft itemLeft3"></div>
                    <div className="itemLeft itemLeft4"></div>
                    <div className="itemLeft itemLeft5"></div>
                    <div className="itemLeft itemLeft6"></div>
                </div>

                {/* Right scroller */}
                <div className="wrapper">
                    <div className="itemRight itemRight1"></div>
                    <div className="itemRight itemRight2"></div>
                </div>
            </div>

            <AboutBox />
        </section>
    );
}

export default About