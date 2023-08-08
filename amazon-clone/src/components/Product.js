import React, { useState } from "react";
import starIcon from "../images/icons/star.png";
import { useAuth } from "../context/GlobalState";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Product = ({ id, title, price, image, rating }) => {
  const [clicked, setClicked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const { dispatch } = useAuth();

  const addToFavorite = () => {
    setClicked(true);
    setDisabled(true);

    dispatch({
      type: "ADD_TO_FAVORITES",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };

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
      <div className="favorite">
        <button
          className="heart-container"
          onClick={addToFavorite}
          disabled={disabled}
        >
          {clicked ? (
            <AiFillHeart className="favorite-icon" />
          ) : (
            <AiOutlineHeart className="favorite-icon" />
          )}
        </button>
      </div>

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

      <button className="btn" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
