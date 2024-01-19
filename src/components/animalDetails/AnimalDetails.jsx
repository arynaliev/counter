import React, { useState } from "react";
import "./animalDetails.style.css";
import { catInfo, horseInfo, dogInfo } from "../../assets/data/animalInfo";

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
      <div>
        {isCatOpen ? <p>{catInfo}</p> : null}
        {isDogOpen ? <p>{dogInfo}</p> : null}
        {isHorseOpen ? <p>{horseInfo}</p> : null}
      </div>
    </div>
  );
};

export default AnimalDetails;
