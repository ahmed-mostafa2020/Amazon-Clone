import React from "react";
import "../styles/sass/_product.scss";
import starIcon from "../images/icons/star.png";

const Product = ({ id, title, price, image, rating }) => {
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>
              <img src={starIcon} alt="star-icon" />
            </p>
          ))}
      </div>

      <img src={image} alt="product-img" />

      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
