import React, { useState } from "react";
import "./App.css";
import CounterTen from "./components/counter/CounterTen";

function App() {
  // const count = 0;
  const [count, setCount] = useState(0);

  const onMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onPlusClick = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const showMessage = () => {
    if (count < 10 && count > 0) {
      return <p>Keep it going!</p>;
    } else if (count === 10) {
      return <p>Reached Max!</p>;
    } else if (count === 0) {
      return <p>Reached Min!</p>;
    }
  };

  return (
    <>
      <div className="counter">
        <div className="button-box">
          <button onClick={onMinusClick}> - </button>
          <p>{count}</p>
          <button onClick={onPlusClick}> + </button>
        </div>
        <div>{showMessage()}</div>
      </div>
      <div className="counterTen">
        <CounterTen />
      </div>
    </>
  );
}

export default App;
