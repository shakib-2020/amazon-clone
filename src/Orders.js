import React, { useState, useEffect } from "react";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Order from "./Order";


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
    <div className="orders">
      <h1>Your Orders</h1>
      {orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}

      <div className="orders__order"></div>
    </div>
  );
}

export default Orders;
