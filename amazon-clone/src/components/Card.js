import { BsFillBagFill } from "react-icons/bs";
import starIcon from "../images/icons/star.png";

const Card = ({ id, image, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card">
        {/* <div className="favorite">
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
      </div> */}

        <img src={image} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            <div className="product-rating">
              {Array(star)
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
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
