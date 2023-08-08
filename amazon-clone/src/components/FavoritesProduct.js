import React from "react";
import starIcon from "../images/icons/star.png";
import { useAuth } from "../context/GlobalState";

const FavoritesProduct = ({
  id,
  title,
  image,
  price,
  rating,
  hiddenButton,
}) => {
  const { dispatch } = useAuth();

  const removeFromFavorites = () => {
    dispatch({
      type: "REMOVE_FROM_FAVORITES",
      id: id,
    });
  };

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

        {!hiddenButton && (
          <button onClick={removeFromFavorites}>Remove from Favorites</button>
        )}
      </div>
    </div>
  );
};

export default FavoritesProduct;
