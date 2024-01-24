import React, { useState } from "react";
import "./cartApp.style.css";
import { productData } from "../../assets/data/productData";
import ProductCard from "../../components/productCard/ProductCard";

const CartApp = () => {
  const [productList, setProductList] = useState(productData);
  const [cartList, setCartList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProductToCart = (product) => {
    console.log("product", product);
    const productExists = cartList.find((el) => el.name === product.name);

    if (productExists) {
      const updatedCartList = cartList.map((el) => {
        if (el.name === product.name) {
          return { ...el, count: el.count + 1 };
        } else {
          return el;
        }
      });
      setCartList(updatedCartList);
    } else {
      setCartList([...cartList, { ...product, count: 1 }]);
    }

    cartList.map((el) => {
      setTotalCount(totalCount + 1);
      setTotalPrice(totalPrice + el.price);
    });

    console.log("cart list", cartList);
  };

  const onPlusClick = (product) => {
    cartList.map((el) => {
      setTotalCount(totalCount + 1);
      setTotalPrice(totalPrice + el.price);
    });

    if (cartList.find((el) => el.name === product.name)) {
      const updatedCartList = cartList.map((el) => {
        if (el.name === product.name) {
          return { ...el, count: el.count + 1 };
        } else {
          return el;
        }
      });
      setCartList(updatedCartList);
    } else {
      setCartList([...cartList, { ...product, count: 1 }]);
    }
  };

  const onMinusClick = () => {
    console.log("hei");
  };

  return (
    <>
      <div className="productCard-container">
        {productList.map((el, index) => (
          <ProductCard
            key={index}
            product={el}
            addProductToCart={addProductToCart}
          />
        ))}
      </div>
      <div className="checkout-container">
        <div className="added-items">
          <h4>ADDED ITEMS: {totalCount}</h4>
        </div>
        {cartList.map((el, index) =>
          el.count ? (
            <div className="product-name-count-box" key={index}>
              <p id="product-name">{el.name}</p>
              <button className="minus-plus-btns" onClick={onMinusClick}>
                -
              </button>
              <p id="product-count">{el.count}</p>
              <button className="minus-plus-btns" onClick={onPlusClick}>
                +
              </button>
            </div>
          ) : null
        )}
        <div className="price-checkout-box">
          <h4>TOTAL PRICE: ${totalPrice}</h4>
          <button>CHECKOUT</button>
        </div>
      </div>
    </>
  );
};

export default CartApp;
