import starIcon from "../images/icons/star.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAuth } from "../context/GlobalState";

const Card = ({ id, image, title, rating, reviews, prevPrice, newPrice }) => {
  const { dispatch } = useAuth();

  const addToBasket = (e) => {
    e.preventDefault();
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

  return (
    <>
      <section className="card">
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
