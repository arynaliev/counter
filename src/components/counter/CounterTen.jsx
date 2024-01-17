import "./counterTen.style.css";
import React, { useState } from "react";

const CounterTen = () => {
  const [count, setCount] = useState(0);

  const onMinusClick = () => {
    if (count > 0) {
      setCount(count - 10);
    }
  };

  const onPlusClick = () => {
    if (count < 100) {
      setCount(count + 10);
    }
  };

  const showMessage = () => {
    if (count < 100 && count > 0) {
      return <p>Keep it going!</p>;
    } else if (count === 100) {
      return <p>Reached Max!</p>;
    } else if (count === 0) {
      return <p>Reached Min!</p>;
    }
  };

  return (
    <div className="counterTen">
      <div className="button-box">
        <button onClick={onMinusClick}>-</button>
        <p>{count}</p>
        <button onClick={onPlusClick}>+</button>
      </div>
      <div>{showMessage()}</div>
    </div>
  );
};

export default CounterTen;
