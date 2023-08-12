import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>

      <div className="profile-container">
        <Link to={"/favorites"}>
          <FiHeart className="nav-icons heart" />
        </Link>
        <Link to={"/checkout"}>
          <AiOutlineShoppingCart className="nav-icons cart" />
        </Link>
        <Link to={"/users"}>
          <AiOutlineUserAdd className="nav-icons users" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
