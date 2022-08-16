import React, { useState, useEffect } from 'react';
import axios from "axios";

import Icon from "./common/Icon/Icon"
import Cards from "./components/Cards/Cards"
import Avatar from "./img/avatar.png"

import './App.css';

const App = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getImages()
  }, []);

  const getImages = async () => {
    try {
      const response = await axios.get("https://boiling-refuge-66454.herokuapp.com/images");
      setImages(response.data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="layout">
      <div className="container">
        <header>
          <div className="header_bg" />
          <div className="header_info">
            <div className="profile_wrapper">
              <img src={Avatar} className="avatar" />
              <p className="profile_name">Ricardo Cooper</p>
            </div>
            <div className="buttons_wrapper">
              <div className="button_wrapper">
                <Icon name="message" size="16" color="#9CA3AF" />
                <p className="button_name">Message</p>
              </div>
              <div className="button_wrapper">
                <Icon name="call" size="16" color="#9CA3AF" />
                <p className="button_name">Call</p>
              </div>
            </div>
          </div>
        </header>
        <div>
          {!images ? <p>Loading</p> : (
            images === "Error" ? <p>Not Found</p> : <Cards images={images}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
