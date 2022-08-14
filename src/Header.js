import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleSignOutAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
      <nav className="header">
        {/*logo on the left*/}
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        {/*search bar*/}
        <div className="header__search">
          <input type="text" name="searchBar" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        {/*3links*/}
        <div className="header__nav">
          {/* link 1*/}
          <Link to={!user && "/login"} className="header__link">
            <div className="header__option" onClick={handleSignOutAuth}>
              <span className="header__optionLineOne">
                hello,{user ? `${user.email}` : `guest`}
              </span>
              <span className="header__optionLineTwo">
                {user ? `Sign Out` : `Sign In`}
              </span>
            </div>
          </Link>
          {/* link 2*/}
          <Link to={user ? "/orders" : "/login"} className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          {/* link 3*/}
          <Link to={user ? "/" : "/login"} className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>
          {/* link 4*/}
          <Link to={user ? "/checkout" : "/login"} className="header__link">
            <div className="header__optionBasket">
              {/*shopping basket icon*/}
              <ShoppingBasketIcon />
              {/*Number of item in the basket*/}
              <span className="header__optionLineTwo header__basketCount">
                {!user ? 0 : basket.length}
              </span>
            </div>
          </Link>
        </div>
        {/*basket icon with number*/}
      </nav>
    </>
  );
}

export default Header;
