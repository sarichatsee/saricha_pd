import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation
import "./sidebar.css";
import Logo from "../../assets/fatcatlogo.png";

const Sidebar = () => {
    const [isSpinning, setIsSpinning] = useState(false);
    const navigate = useNavigate();

    // Handle the logo click (spin animation + navigate to home)
    const handleLogoClick = () => {
        setIsSpinning(true); // Start spinning the logo
        setTimeout(() => setIsSpinning(false), 1000); // Stop spinning after 1 second
        navigateToHome(); // Navigate to home
    };

    // Navigate to the home page and scroll to the top
    const navigateToHome = () => {
        navigate("/"); // Navigate to the home page
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to the top
        }, 0); // Ensure scrolling happens after navigation
    };

    // Navigate to a specific section on the main page
    const navigateToSection = (sectionId) => {
        navigate("/"); // Navigate to the main page first
        setTimeout(() => {
            const section = document.getElementById(sectionId); // Find the section by ID
            if (section) {
                section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
            }
        }, 0); // Ensure navigation is complete before scrolling
    };

    return (
        <aside className="aside">
            {/* Logo navigates to the home page with spinning animation */}
            <button className="nav__logo" onClick={handleLogoClick}>
                <img
                    src={Logo}
                    alt="Logo"
                    className={isSpinning ? "spin" : ""}
                />
            </button>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        {/* Home button */}
                        <li className="nav__item">
                            <button
                                className="nav__link"
                                onClick={navigateToHome}
                            >
                                <i className="icon-home"></i>
                            </button>
                        </li>
                        {/* Section navigation buttons */}
                        <li className="nav__item">
                            <button
                                className="nav__link"
                                onClick={() => navigateToSection("about")}
                            >
                                <i className="icon-user-following"></i>
                            </button>
                        </li>
                        <li className="nav__item">
                            <button
                                className="nav__link"
                                onClick={() => navigateToSection("services")}
                            >
                                <i className="icon-briefcase"></i>
                            </button>
                        </li>
                        <li className="nav__item">
                            <button
                                className="nav__link"
                                onClick={() => navigateToSection("resume")}
                            >
                                <i className="icon-graduation"></i>
                            </button>
                        </li>
                        <li className="nav__item">
                            <button
                                className="nav__link"
                                onClick={() => navigateToSection("portfolio")}
                            >
                                <i className="icon-layers"></i>
                            </button>
                        </li>
                        <li className="nav__item">
                            <button
                                className="nav__link"
                                onClick={() => navigateToSection("certificate")}
                            >
                                <i className="icon-badge"></i>
                            </button>
                        </li>
                        <li className="nav__item">
                            <button
                                className="nav__link"
                                onClick={() => navigateToSection("contact")}
                            >
                                <i className="icon-bubble"></i>
                            </button>
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
