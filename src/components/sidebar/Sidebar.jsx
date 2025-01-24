import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/fatcatlogo.png";

const Sidebar = () => {
    const [isSpinning, setIsSpinning] = useState(false);

    const handleLogoClick = () => {
        setIsSpinning(true); // Start spinning
        setTimeout(() => setIsSpinning(false), 1000); // Stop spinning after 1 second
    };

    return (
        <aside className="aside">
            <a href="#home" className="nav__logo" onClick={handleLogoClick}>
                <img
                    src={Logo}
                    alt="Logo"
                    className={isSpinning ? "spin" : ""}
                />
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="icon-user-following"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="icon-briefcase"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#resume" className="nav__link">
                                <i className="icon-graduation"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="icon-layers"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#certificate" className="nav__link">
                                <i className="icon-badge"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="icon-bubble"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">&copy; 2022 - 2023.</span>
            </div>
        </aside>
    );
};

export default Sidebar;
