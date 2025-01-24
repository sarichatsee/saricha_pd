import React from "react";
import "./catspage.css";

const CatsPage = () => {
    const images = [
        { src: require("../../assets/cats/fatcow.jpg"), caption: "Fattie" },
        { src: require("../../assets/cats/meowmeow.jpg"), caption: "Meowmeow being a void" },
        { src: require("../../assets/cats/niuniu.jpg"), caption: "Niuniu being a cutie 🥺" },
        { src: require("../../assets/cats/niuniu2.jpg"), caption: "More scritches for niuniu" },
        { src: require("../../assets/cats/oatley.jpg"), caption: "Oatley!!" },
        { src: require("../../assets/cats/princess-swagger.jpg"), caption: "The sweetest: Princess" },
        { src: require("../../assets/cats/fatcow2LOL.jpg"), caption: "Lazy ahh fattie :>" },
        { src: require("../../assets/cats/niuniu3.jpg"), caption: "BELLY ROLL FROM NIUNIU" },
    ];

    return (
        <main>
            <br/><br/>
            <h2 className="section__title">My Neighbourhood Cats</h2>
    
            <div className="masonry">
                {images.map((image, index) => (
                    <div className="item" key={index}>
                        <img src={image.src} alt={image.caption} />
                        <figcaption>{image.caption}</figcaption>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default CatsPage;
