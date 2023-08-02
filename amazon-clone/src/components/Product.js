import React from "react";
import "../styles/sass/_product.scss";
import starIcon from "../images/icons/star.png";
import { useAuth } from "../context/GlobalState";

const Product = ({ id, title, price, image, rating }) => {
  const { dispatch } = useAuth();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };

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
            <p key={i}>
              <img src={starIcon} alt="star-icon" />
            </p>
          ))}
      </div>

      <img src={image} alt="product-img" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
