import React from "react";
import { Link } from "react-router-dom";
import buyNow from "../images/buynow.jpg";

const NavShop = () => {
  return (
    <div className="nav-shop">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/shoes">Shoes</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/bags">Bags</Link>
        <Link to="/fashion">Fashion</Link>
      </div>
      <Link className="buy-now" to="#">
        <img src={buyNow} alt="buy-noe" />
      </Link>
    </div>
  );
};

export default NavShop;
