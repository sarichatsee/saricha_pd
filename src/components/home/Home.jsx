import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Tsee Saricha</h1>
                <span className="home__education">I'm a Fullstack Developer</span>
                <h3 className="text-animation">I'm a <span></span></h3>

                <HeaderSocials />

                <a href="#contact" className="btn">Hire Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    );
}

export default Home