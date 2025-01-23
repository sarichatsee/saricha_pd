import React, { useState } from "react";
import "./certificates.css";
import CertData from "./certlist.jsx";

const Certificates = () => {
    const [items, setItems] = useState(CertData);

    const filterItem = (categoryItem) => {
        const updatedItems = CertData.filter((curElem) => curElem.category === categoryItem);
        setItems(updatedItems);
    };

    return (
        <section className="cert container section" id="certificate">
            <h2 className="section__title">Certification</h2>

            <div className="cert__filters">
                <span className="cert__filter-item" onClick={() => setItems(CertData)}>
                    Everything
                </span>
                <span className="cert__filter-item" onClick={() => filterItem("2025")}>
                    2025
                </span>
                <span className="cert__filter-item" onClick={() => filterItem("2024")}>
                    2024
                </span>
                <span className="cert__filter-item" onClick={() => filterItem("2023")}>
                    2023
                </span>
                <span className="cert__filter-item" onClick={() => filterItem("Before")}>
                    Before
                </span>
            </div>

            <div className="cert__container">
                {items.map((item) => (
                    <div key={item.id} className="cert__card">
                        <img src={item.image} alt={item.title} className="cert__image" />
                        <div className="cert__mask">
                            <h3 className="cert__title">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
