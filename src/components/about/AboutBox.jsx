import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';


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
                <FontAwesomeIcon icon={faCat} size="2x" className="about__icon" />

                <div>
                    <h3 className="about__title">6</h3>
                    <span className="about__subtitl">Cats Petted</span>
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