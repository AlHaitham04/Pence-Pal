import React, { useState } from "react";
import "./css/Modal.css";
import logo from "./images/plane.png"
import logo1 from "./images/apple.png"
import logo2 from "./images/rent.png"


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
        <img src={logo} alt="Plane" className="planeImg" />
          Travel
        </button>
        <button onClick={toggleModal} className="btn-modal">
        <img src={logo1} alt="Apple" className="appleImg" />
          Groceries
        </button>
        <button onClick={toggleModal} className="btn-modal">
        <img src={logo2} alt="Rent" className="rentImg" />
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
            <form>
                <label>Money Spent </label>
                <input type="Add" className="Addtxt"/>
                <button className = "AddBtn"> Add </button>
            </form>
            <button className="close-modal" onClick={toggleModal}> CLOSE </button>
          </div>
        </div>
      )}
    </>
  );
}