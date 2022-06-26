import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";




function Header() {
      const[{basket}]=useStateValue();
      console.log(basket);
    return (
        <nav className="header">

            {/*logo on the left*/}
            <Link to="/">
            <img
             className="header__logo"
             src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
             alt=""/>
            </Link>

            {/*search bar*/}
            <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </div>

            {/*3links*/}
             <div className="header__nav">
             {/* link 1*/}
             <Link to="/login" className="header__link">
             <div className="header__option">
             <span className="header__optionLineOne">hello,Shakib</span>
             <span className="header__optionLineTwo">Sign In</span>
             </div>
             </Link>
             {/* link 2*/}
             <Link to="/" className="header__link">
             <div className="header__option">
             <span className="header__optionLineOne">Returns</span>
             <span className="header__optionLineTwo">& Orders</span>
             </div>
             </Link>
             {/* link 3*/}
             <Link to="/" className="header__link">
             <div className="header__option">
             <span className="header__optionLineOne">Your</span>
             <span className="header__optionLineTwo">Prime</span>
             </div>
             </Link>
             {/* link 4*/}
             <Link to="/checkout" className="header__link">
             <div className="header__optionBasket">
             {/*shopping basket icon*/}
             <ShoppingBasketIcon/>
             {/*Number of item in the basket*/}
             <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
              </div>
             </Link>

             </div>
            {/*basket icon with number*/}

        </nav>
    );
}

export default Header
