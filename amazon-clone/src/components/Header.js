import React from "react";
import "../styles/sass/_header.scss";
import logo from "../images/header-logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidCart } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-search">
        <Link to="/">
          <img className="logo" src={logo} alt="logo-image" loading="lazy" />
        </Link>

        <div className="search-box flex">
          <input className="search-input" type="text" />
          <div className="search-icon flex">
            <AiOutlineSearch />
          </div>
        </div>
      </div>

      <div className="header-nav">
        <Link className="sign-in" to="/login">
          <p>
            Hello Guest <span>Sign In</span>
          </p>
        </Link>
        <Link className="order" to="/order">
          <p>
            Returns <span> & Orders</span>
          </p>
        </Link>
        <Link className="prime" to="/prime">
          <p>
            Your <span>Prime</span>
          </p>
        </Link>
        <Link className="checkout" to="/checkout">
          <p>
            <BiSolidCart />
            <span> 0</span>
          </p>
        </Link>
      </div>
    </div>
  );
};
