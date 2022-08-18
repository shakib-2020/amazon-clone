import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { HeaderNav } from "./HeaderNav";
import { useStateValue } from "../../Context/StateProvider";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  const [isClicked, setClicked] = useState(false);
  const [{ basket, user }] = useStateValue();

  // media query
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });

  const handleClick = () => {
    if (isClicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <>
      <nav className="header">
        {isTabletOrMobile && (
          <section className="header__sm">
            {/* link 4*/}
            <Link
              to={user ? "/checkout" : "/login"}
              className="header__sm__link"
            >
              <div className="header__optionBasket">
                {/*shopping basket icon with number*/}
                <ShoppingBasketIcon fontSize="inherit" />
                {/*Number of item in the basket*/}
                <span className="header__optionLineTwo header__basketCount">
                  {!user ? 0 : basket.length}
                </span>
              </div>
            </Link>
          </section>
        )}
        {/*logo on the left*/}
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
        {isTabletOrMobile && (
          <button className="toggler__button" onClick={handleClick}>
            <DensityMediumIcon sx={{ color: "#f79b34" }} />
          </button>
        )}
        {isDesktopOrLaptop && (
          <>
            {/* search bar */}
            <div className="header__search">
              <input
                type="text"
                name="searchBar"
                className="header__searchInput"
              />
              <SearchIcon className="header__searchIcon" />
            </div>
            {/* haedr_nav */}
            <HeaderNav />
          </>
        )}
      </nav>
      {isTabletOrMobile && isClicked && <HeaderNav />}
    </>
  );
}

export default Header;
