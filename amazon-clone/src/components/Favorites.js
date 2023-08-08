import React from "react";
import checkoutImg from "../images/checkoutAd.jpg";
import { useAuth } from "../context/GlobalState";
import FavoritesProduct from "./FavoritesProduct";

const Favorites = () => {
  const { user, favorites } = useAuth();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src={checkoutImg} alt="advertising" />

        <h3>Hello, {user?.email}</h3>
        <h2 className="checkout-title">Your Favorite Items</h2>

        {favorites.length > 0 ? (
          favorites.map((item) => (
            <FavoritesProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))
        ) : (
          <p className="empty-items-message">You have no favorite items</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
