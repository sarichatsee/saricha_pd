import React from "react";
import "./home.css";
import Me from "../../assets/pictures-of-my-ugly-face/myface2.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                {/* <div className={`profile-container ${flipped ? "flipped" : ""}`} onClick={handleFlip}>
                    <img
                        src={flipped ? profileIllus : profilePic}
                        alt="Profile"
                        className="profile-pic"
                    />
                </div> */}
                <h1 className="home__name">Tsee Saricha</h1>
                <span className="home__education">Digital Design & Development</span>


                <HeaderSocials />

                <a href="#contact" className="btn">Hire Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    );
}

export default Home