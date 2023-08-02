import React from "react";
import "../styles/sass/_checkout.scss";
import checkoutImg from "../images/checkoutAd.jpg";
import { useAuth } from "../context/GlobalState";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const { user, basket } = useAuth();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img src={checkoutImg} alt="advertising" />

        <h3>Hello, {user?.email}</h3>
        <h2 className="checkout-title">Your shopping Basket</h2>

        {basket.length > 0 ? (
          basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))
        ) : (
          <p>
            You have no items in your basket.To buy one or more items,click"Add
            to basket".
          </p>
        )}
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
