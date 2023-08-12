import starIcon from "../images/icons/star.png";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useAuth } from "../context/GlobalState";
import { useState } from "react";

const Card = ({ id, image, title, rating, reviews, prevPrice, newPrice }) => {
  const [disabled, setDisabled] = useState(false);
  const [clicked, setClicked] = useState(false);

  const { dispatch } = useAuth();

  const addToFavorite = (e) => {
    e.preventDefault();
    setClicked(true);
    setDisabled(true);

    dispatch({
      type: "ADD_TO_FAVORITES",
      item: {
        id: id,
        title: title,
        price: newPrice,
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
        price: newPrice,
        image: image,
        rating: rating,
      },
    });
  };

  console.log(clicked);

  return (
    <>
      <section className="card">
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

        <img src={image} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            <div className="product-rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p key={i}>
                    <img src={starIcon} alt="star-icon" />
                  </p>
                ))}
            </div>

            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <button className="cart-button" onClick={addToBasket}>
              <AiOutlineShoppingCart className="cart-icon" />
            </button>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
