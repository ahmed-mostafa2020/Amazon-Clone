// import React from "react";
// import "../styles/sass/_header.scss";
// import logo from "../images/header-logo.png";
// import { AiOutlineSearch } from "react-icons/ai";
// import { BiSolidCart } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import { useAuth } from "../context/GlobalState";

// const Header = () => {
//   const { user } = useAuth();
//   console.log(user?.email);
//   return (
//     <div className="header">
//       <div className="header-search">
//         <Link to="/">
//           <img className="logo" src={logo} alt="logo" loading="lazy" />
//         </Link>

//         <div className="search-box flex">
//           <input className="search-input" type="text" />
//           <div className="search-icon flex">
//             <AiOutlineSearch />
//           </div>
//         </div>
//       </div>

//       <div className="header-nav">
//         <Link className="sign-in" to="/login">
//           <p>
//             Hello {user ? `${user.email}` : "Guest"}
//             <span>{user ? "Sign out" : "Sign in"}</span>
//           </p>
//         </Link>
//         <Link className="order" to="/order">
//           <p>
//             Returns <span> & Orders</span>
//           </p>
//         </Link>
//         <Link className="prime" to="/prime">
//           <p>
//             Your <span>Prime</span>
//           </p>
//         </Link>
//         <Link className="checkout" to="/checkout">
//           <p>
//             <BiSolidCart />
//             <span> 0</span>
//           </p>
//         </Link>
//       </div>
//     </div>
//   );
// };
// export default Header;

import React from "react";
import "../styles/sass/_header.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../context/GlobalState";
import Logo from "../images/header-logo.png";
import searchIcon from "../images/icons/searchIcon.png";
import shoppingCart from "../images/icons/shopping-cart.png";
import { auth } from "../firebase";

const Header = () => {
  const { user, basket } = useAuth();
  const handleAuthentication = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="logo-img" />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img className="header-searchIcon" src={searchIcon} alt="search-icon" />
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option" onClick={handleAuthentication}>
            <span className="header-optionLineOne">
              Hello {user ? `${user.email}` : "Guest"}
            </span>
            <span className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header-optionBasket">
            <img src={shoppingCart} />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
