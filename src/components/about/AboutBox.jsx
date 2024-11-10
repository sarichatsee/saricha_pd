import React from "react";

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">20</h3>
                    <span className="about__subtitl">Project Completed</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>

                <div>
                    <h3 className="about__title">100+</h3>
                    <span className="about__subtitl">Cups of Coffee</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-people"></i>

                <div>
                    <h3 className="about__title">6</h3>
                    <span className="about__subtitl">Satisfied Clients</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-badge"></i>

                <div>
                    <h3 className="about__title">3</h3>
                    <span className="about__subtitl">Academic Awards</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox