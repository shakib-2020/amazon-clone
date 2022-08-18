import React from "react";
import "./Header.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useStateValue } from "../../Context/StateProvider";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export const HeaderNav = () => {
  const [{ basket, user }] = useStateValue();

  const handleSignOutAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  // media query

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });

  return (
    <>
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
        {isDesktopOrLaptop && (
          <>
            {/* link 4*/}
            <Link to={user ? "/checkout" : "/login"} className="header__link">
              <div className="header__optionBasket">
                {/*shopping basket icon with number*/}
                <ShoppingBasketIcon fontSize="inherit" />
                {/*Number of item in the basket*/}
                <span className="header__optionLineTwo header__basketCount">
                  {!user ? 0 : basket.length}
                </span>
              </div>
            </Link>
          </>
        )}
      </div>
    </>
  );
};
