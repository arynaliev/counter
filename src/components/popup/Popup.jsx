import React from "react";
import PropTypes from "prop-types";
import "./popup.style.css";

const Popup = ({ info, closePopup, imgUrl }) => {
  return (
    <div className="popup-container">
      <div className="popup-text">
        <div className="img-box">
          <img src={imgUrl} alt="Animal" />
        </div>
        <p>{info}</p>
        <button id="close-popup" onClick={closePopup}>
          X
        </button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  info: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default Popup;
