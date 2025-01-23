import React from 'react';

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a
                href="https://www.instagram.com/fixahen/?hl=en"
                className="home__social-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-instagram"></i>
            </a>

            <a
                href="https://bsky.app/profile/is-a-chair.bsky.social"
                className="home__social-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-square-bluesky"></i>
            </a>

            <a
                href="https://www.linkedin.com/in/saricha-tsee-7011bb254/"
                className="home__social-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
                href="https://www.behance.net/tsaricha"
                className="home__social-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-behance"></i>
            </a>

            <a
                href="https://github.com/sarichatsee"
                className="home__social-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
    );
};

export default HeaderSocials;
