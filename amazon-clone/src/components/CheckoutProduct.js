import React from "react";
import "../styles/sass/_checkout-product.scss";
import starIcon from "../images/icons/star.png";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct-image"
        src={image}
        alt="checkoutProduct-img"
      />

      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <img src={starIcon} alt="star-icon" />
              </p>
            ))}
        </div>

        <button>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
