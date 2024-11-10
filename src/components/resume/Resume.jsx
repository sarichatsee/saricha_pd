import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";
import "./wrapper.css";

const Resume = () => {
    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Experience</h2>
            <div className="wrapper__container">
                <div class="wrapper">
                    <div class="itemLeft item1"></div>
                    <div class="itemLeft item2"></div>
                    <div class="itemLeft item3"></div>
                    <div class="itemLeft item4"></div>
                    <div class="itemLeft item5"></div>
                    <div class="itemLeft item6"></div>
                    <div class="itemLeft item7"></div>
                    <div class="itemLeft item8"></div>
                </div>
                <div class="wrapper">
                    <div class="itemRight item1"></div>
                    <div class="itemRight item2"></div>
                    <div class="itemRight item3"></div>
                    <div class="itemRight item4"></div>
                    <div class="itemRight item5"></div>
                    <div class="itemRight item6"></div>
                    <div class="itemRight item7"></div>
                    <div class="itemRight item8"></div>
                </div>
            </div>
            <div className="resume__container grid">
                <div className="timeline grid">
                    {Data.map((val, id) => {
                        if (val.category === "education") {
                            return (
                                <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
                            )
                        }
                        return null;
                    })}
                </div>

                <div className="timeline grid">
                    {Data.map((val, index) => {
                        if (val.category === "experience") {
                            return (
                                <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
                            )
                        }
                        return null;
                    })}
                </div>
            </div>
        </section>
    )
}

export default Resume