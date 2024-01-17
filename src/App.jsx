import "./App.css";

function App() {
  const onMinusClick = () => {
    alert("inus clicked");
  };

  const onPlusClick = () => {
    alert("plus clicked");
  };

  return (
    <div className="counter">
      <button onClick={onMinusClick}> - </button>
      <p>0</p>
      <button onClick={onPlusClick}> + </button>
    </div>
  );
}

export default App;
