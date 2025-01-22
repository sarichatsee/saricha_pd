import React, { useState, useEffect } from "react";
import "./portfolio.css";
import Menu from "./certlist.j";
import TestCarousel from "../testcarousel/test-carousel";

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const [modal, setModal] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => curElem.category === categoryItem);
        setItems(updatedItems);
    };

    const openModal = (item) => {
        setSelectedItem(item);
        setModal(true);
        setTimeout(() => setIsVisible(true), 10);
    };

    const closeModal = () => {
        setIsVisible(false);
        setTimeout(() => {
            setModal(false);
            setSelectedItem(null);
        }, 300);
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
        <section className="work container section" id="portfolio">
            <h2 className="section__title">Recent Works</h2>

            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
                <span className="work__item" onClick={() => filterItem("Creative")}>Creative</span>
                <span className="work__item" onClick={() => filterItem("Art")}>Art</span>
                <span className="work__item" onClick={() => filterItem("Design")}>Design</span>
                <span className="work__item" onClick={() => filterItem("Programming")}>Programming</span>
            </div>

            <div className="work__container grid">
                {items.map((elem) => {
                    const { id, image, title, category } = elem;
                    return (
                        <div onClick={() => openModal(elem)} className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className="work__img" />
                                <div className="work__mask"></div>
                            </div>
                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                        </div>
                    );
                })}
            </div>

            {/* Modal */}
            {modal && (
                <div className={`modal__overlay ${isVisible ? "active" : ""}`} onClick={closeModal}>
                    <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                        <button className="close__modal" onClick={closeModal}>X</button>
                        {selectedItem && (
                            <>
                                <h3>{selectedItem.title}</h3>
                                <p>{selectedItem.category}</p>
                                {/* Render TestCarousel with selected images */}
                                <TestCarousel images={selectedItem.images} />
                                <p dangerouslySetInnerHTML={{ __html: selectedItem.desc }}></p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
