import React, { useState } from "react";

import Card from "../../common/Card/Card"
import Modal from "../Modal/Modal"

import './Cards.css';

const Cards = ({ images }) => {
    const [modalActive, setModalActive] = useState(false)
    const [chosenImage, setChosenImage] = useState({})

    return (
        <>
            <div className="cards_wrapper">
                {
                    images?.map(image => (
                        <Card
                            key={image.id}
                            id={image.id}
                            url={image.url}
                            setChosenImage={setChosenImage}
                            setModalActive={setModalActive}
                        />
                    ))
                }
            </div>

            <Modal
                active={modalActive}
                setActive={setModalActive}
                chosenImage={chosenImage}
                setChosenImage={setChosenImage}
            />


        </>
    )

}





export default Cards;
