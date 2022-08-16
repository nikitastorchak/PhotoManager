import React, { useState } from "react";
import axios from "axios";

import './Modal.css';

const Modal = ({ active, setActive, chosenImage, setChosenImage }) => {

    const [comment, setComment] = useState("")

    const modalCloseHandler = () => {
        setChosenImage({})
        setComment("")
        setActive(false)
    }

    const commentHandler = (value) => {
        setComment(value)
    }
 
    const addCommentHandler = async (id) => {
        try {
            const response = await axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {name: "Ricardo Cooper", comment});
            alert(response.status)
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => modalCloseHandler()}>
            <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
                <img className="chosenImage" src={chosenImage.url} alt="Image" />
                <div className="comment_block">
                    <label htmlFor="comment" className="comment_text">Comment</label>
                    <textarea id="comment" className="comment_field" value={comment} onChange={(e) => commentHandler(e.target.value)}/>
                    <p className="comment_placeholder">Write a few sentences about the photo.</p>
                    <button className="submit" onClick={() => addCommentHandler(chosenImage.id)}>Save</button>
                </div>

            </div>
        </div>
    )
}

export default Modal;
