import React, { useState } from "react";
import "./css/Modal.css";
import logo from "./images/plane.png"
import logo1 from "./images/apple.png"
import logo2 from "./images/rent.png"

import * as FaIcons from "react-icons/fa";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <div class="btn-modal-container" >
        <button onClick={toggleModal} className="btn-modal">
        <FaIcons.FaBus alt="Bus" className="icon" />
          Travel
        </button>
        <button onClick={toggleModal} className="btn-modal">
        <FaIcons.FaShoppingBasket alt="ShoppingBasket" className="icon" />
          Groceries
        </button>
        <button onClick={toggleModal} className="btn-modal">
        <FaIcons.FaHouseUser alt="Rent" className="icon" />
          Rent
        </button>
        <button onClick={toggleModal} className="btn-modal">
          
          Other
        </button>
      </div>
      

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <form className="modal-form">
                <label className="AddLabel">Money Spent: </label>
                <input type="Add" className="AddTxt"/>
                <button className = "AddBtn"> Add </button>
            </form>
            <button className="close-modal" onClick={toggleModal}>X</button>
          </div>
        </div>
      )}
    </>
  );
}