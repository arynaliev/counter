import React, { useState } from "react";
import "./App.css";
// import AnimalDetails from "./components/animalDetails/AnimalDetails";
import CartApp from "./applications/cartApp/CartApp";

function App() {
  return (
    <>
      <div className="container">
        <CartApp />
      </div>
    </>
  );
}

export default App;
