import React from "react";
import { useStateValue } from "../../Context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "../SubTotal/Subtotal";
import Header from "../Header/Header";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://www.unitasterdays.com/images/banner-uosw.gif"
            alt=""
          />
          {basket?.length === 0 ? (
            <div>
              <h3>Hello,{user ? user.email : "guest"}</h3>
              <h2>Your Shopping Basket is empty!!</h2>
              <p>
                You have no items in your basket.To buy one or more items,click
                "Add to basker" next to the item.
              </p>
            </div>
          ) : (
            <div>
              <h3>Hello,{user ? user.email : "guest"}</h3>
              <h2 className="checkout__title">Your Shopping Basket.</h2>

              {/* List out aa of the checkout product*/}
              {user ? (
                basket.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))
              ) : (
                <p>
                  You have no items in your basket.To buy one or more
                  items,click "Add to basker" next to the item.
                </p>
              )}
            </div>
          )}
        </div>
        {basket.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
