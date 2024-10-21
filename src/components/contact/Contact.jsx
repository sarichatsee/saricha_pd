import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yiyep8r', 'template_ncegkdc', form.current, '8u7AoHlbCJcqGTHfo').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        form.current.reset();
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's talk about everything~</h3>
                    <p className="contact__details">Don't like forms? Send me an email! ✌️</p>
                </div>

                <form action="" className="contact__form" ref={form} onSubmit={sendEmail}>
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input 
                            type="text" 
                            name="from_name" 
                            className="contact__form-input" 
                            placeholder="Insert your Name" 
                            required/>
                        </div>

                        <div className="contact__form-div">
                            <input 
                            type="email" 
                            name="from_email" 
                            className="contact__form-input" 
                            placeholder="Insert your email"
                            required />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input 
                        type="text" 
                        name="from_subject" 
                        className="contact__form-input" 
                        placeholder="Insert your subject" 
                        required />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            name="from_message"
                            id=""
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Write your message"
                            required
                        ></textarea>
                    </div>

                    <input type="submit" value="Send Message" className="btn"></input>
                </form>
            </div>
        </section>
    );
}

export default Contact