import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Orders.css";
import { useStateValue } from "../../Context/StateProvider";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import Order from "./Order";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const getData = async () => {
        const querySnapshot = await getDocs(
          collection(db, "users", user.uid, "orders")
        );
        setOrders(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      };
      getData();
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log(orders);

  return (
    <>
      <Header />
      <div className="orders">
        <h1>Your Orders</h1>
        <hr></hr>
        {orders.length === 0 && (
          <>
            <h3>You have no orders to fulfill.</h3>
            <br></br>
            <br></br>
            <span>
              Return to {">"}{" "}
              <Link to={"/"} style={{ fontWeight: "bold" }}>
                Home page
              </Link>
            </span>
          </>
        )}
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}

        <div className="orders__order"></div>
      </div>
      <Footer />
    </>
  );
}

export default Orders;
