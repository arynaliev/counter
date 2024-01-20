import React, { useState } from "react";
import "./animalDetails.style.css";
import { catInfo, horseInfo, dogInfo } from "../../assets/data/animalInfo";
import Popup from "../popup/Popup";

const AnimalDetails = () => {
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [isDogOpen, setIsDogOpen] = useState(false);
  const [isHorseOpen, setIsHorseOpen] = useState(false);

  const onCatClick = () => {
    setIsCatOpen(!isCatOpen);
    setIsDogOpen(false);
    setIsHorseOpen(false);
  };

  const onDogClick = () => {
    setIsDogOpen(!isDogOpen);
    setIsCatOpen(false);
    setIsHorseOpen(false);
  };

  const onHorseClick = () => {
    setIsHorseOpen(!isHorseOpen);
    setIsDogOpen(false);
    setIsCatOpen(false);
  };

  return (
    <div>
      <div className="buttons-box">
        <button onClick={onCatClick}>Cat</button>
        <button onClick={onDogClick}>Dog</button>
        <button onClick={onHorseClick}>Horse</button>
      </div>
      <div className="animals-info">
        {isCatOpen ? (
          <Popup
            info={catInfo.description}
            closePopup={() => setIsCatOpen(false)}
            imgUrl={catInfo.imgUrl.firstImg}
          />
        ) : null}
        {isDogOpen ? (
          <Popup
            info={dogInfo.description}
            closePopup={() => setIsDogOpen(false)}
            imgUrl={dogInfo.imgUrl.firstImg}
          />
        ) : null}
        {isHorseOpen ? (
          <Popup
            info={horseInfo.description}
            closePopup={() => setIsHorseOpen(false)}
            imgUrl={horseInfo.imgUrl.firstImg}
          />
        ) : null}
      </div>
    </div>
  );
};

export default AnimalDetails;
