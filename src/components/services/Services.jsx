import React from "react";
import "./services.css";
import Image1 from "../../assets/ui.png";
import Image2 from "../../assets/coding.png";
import Image3 from "../../assets/palette.png";
import Image4 from "../../assets/game-console.png";

const data = [
    {
      id: 1,
      image: Image1,
      title: "UI/UX design",
      description:
        "Strong foundation in UI/UX design, leveraging tools like Figma to create user-friendly interfaces. I've also completed Google Coursera courses that deepened my understanding of design principles and user experience",
    },
    {
      id: 2,
      image: Image2,
      title: "Full-stack Development",
      description:
        "Skilled in a variety of programming languages and frameworks, including C, C#, Python, NodeJS, Express, and React, for creating comprehensive and robust applications.",
    },
    {
      id: 3,
      image: Image3,
      title: "Graphic Design",
      description:
        "Bring ideas to life visually with proficiency in Clip Studio Paint, Adobe Photoshop, and Adobe Illustrator, ensuring that my designs are both impactful and aesthetically pleasing.",
    },
    {
      id: 4,
      image: Image4,
      title: "Game Development",
      description:
        "With a passion for immersive experiences, I have designed both VR and AR projects, including a VR escape room and various AR applications, all developed in Unity",
    },
  ];
  

const Services = () => {
    return <section className="services container section" id="services">
        <h2 className="section__title">Services</h2>

        <div className="services__container grid">
            {data.map(({id, image, title, description}) => {
                return (
                    <div className="services__card">
                        <img src={image} alt="" className="services__img" />
                        
                        <h3 className="services__title">{title}</h3>

                        <p className="services__description">{description}</p>
                    </div>
                )
            })}
        </div>
    </section>
       
}

export default Services