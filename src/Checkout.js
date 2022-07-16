import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import Header from "./Header";

function Checkout() {
  const [{ basket }] = useStateValue();

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
              <h2>Your Shopping Basket is empty!!</h2>
              <p>
                You have no items in your basket.To buy one or more items,click
                "Add to basker" next to the item.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Your Shopping Basket.</h2>

              {/* List out aa of the checkout product*/}
              {basket.map((item) => (
                <CheckoutProduct
                  Key={item.Key}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
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
