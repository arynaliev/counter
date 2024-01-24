import React from "react";
import PropTypes from "prop-types";
import "./productCard.style.css";

const ProductCard = ({ product, addProductToCart }) => {
  const { imageUrl, name, price, description, inStock } = product;

  const onAddClickHandler = () => {
    addProductToCart(product);
  };

  return (
    <div className="product-container">
      <div className="img-box">
        <img src={imageUrl} alt={name} />
      </div>
      <div>
        <h4>{name}</h4>
        <p>In stock: {inStock}</p>
      </div>
      <p>{description}</p>
      <h5>${price}</h5>
      <button id="add-btn" onClick={onAddClickHandler}>
        Add
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  inStock: PropTypes.number.isRequired,
};

export default ProductCard;
