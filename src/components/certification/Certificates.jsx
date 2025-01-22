import React, { useState, useEffect } from "react";
import "./certificates.css";
import CertData from "./certlist.jsx";

const Certificates = () => {
    const [items, setItems] = useState(CertData); // Use CertData instead of CertList
    const [modal, setModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null); // Declare setSelectedItem
    const [isVisible, setIsVisible] = useState(false); // Declare setIsVisible

    const filterItem = (categoryItem) => {
        const updatedItems = CertData.filter((curElem) => curElem.category === categoryItem);
        setItems(updatedItems);
    };

    const openModal = (item) => {
        setSelectedItem(item); // Set selected item
        setModal(true);
        setTimeout(() => setIsVisible(true), 10); // Show modal after a delay
    };

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [modal]);

    return (
        <section className="work container section" id="certificate">
            <h2 className="section__title">Certifications</h2>

            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(CertData)}>Everything</span>
                <span className="work__item" onClick={() => filterItem("Creative")}>Creative</span>
                <span className="work__item" onClick={() => filterItem("Art")}>Art</span>
                <span className="work__item" onClick={() => filterItem("Design")}>Design</span>
                <span className="work__item" onClick={() => filterItem("Programming")}>Programming</span>
            </div>

            {/* Add display logic for items */}
            <div className="work__list">
                {items.map((item) => (
                    <div key={item.id} className="work__card" onClick={() => openModal(item)}>
                        <img src={item.image} alt={item.title} className="work__image" />
                        <h3 className="work__title">{item.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
