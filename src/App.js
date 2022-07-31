/* eslint-disable no-empty-pattern */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import { Login } from "./Login";
import { Registration } from "./Registration";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51LOHwtEpxgMDK8rjzvhZ8jLEYWt1impUZLfiml6le8xt5l1ggcJje0lgAgHlXpB6GEP7hULJOSUNCoFy1LzeMuKN001c7HP5jj"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is ------> ", authUser);

      if (authUser) {
        //the user just logged in/was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/registration" element={<Registration />}></Route>

          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route
            exact
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          ></Route>
          <Route exact path="/orders" element={<Orders />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
