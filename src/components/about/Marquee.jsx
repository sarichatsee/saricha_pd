import React, { useEffect } from "react";
import "./marquee.css";

const Marquee = () => {
    useEffect(() => {
        // Replicate elements for smooth looping
        const root = document.documentElement;
        const marqueeContent = document.querySelector(".marquee-content");
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
            "--marquee-elements-displayed"
        );

        root.style.setProperty(
            "--marquee-elements",
            marqueeContent.children.length
        );

        for (let i = 0; i < marqueeElementsDisplayed; i++) {
            marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
    }, []);

    return (
        <div className="marquee">
            <ul className="marquee-content">
                <li>
                    <i className="fab fa-github"></i>
                </li>
                <li>
                    <i className="fa-brands fa-html5"></i>
                </li>
                <li>
                    <i className="fab fa-css3-alt"></i> 
                </li>
                <li>
                    <i className="fab fa-js"></i> 
                </li>
                <li>
                    <i className="fab fa-free-code-camp"></i>
                </li>
                <li>
                    <i class="fa-brands fa-figma"></i>
                </li>
                <li>
                    <i className="fab fa-react"></i>
                </li>
                <li>
                    <i class="fa-brands fa-node-js"></i>
                </li>
                <li>
                    <i className="fab fa-aws"></i>
                </li>
                <li>
                    <i className="fab fa-android"></i>
                </li>
            </ul>
        </div>
    );
};

export default Marquee;
