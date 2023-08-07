import React, { useEffect, useState } from "react";
import { useAuth } from "../context/GlobalState";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Order from "./Order";

const Orders = () => {
  // State to save orders in
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  // Use useEffect to change the order when the user changes []
  useEffect(() => {
    if (user) {
      const collectionRef = collection(db, "users", user?.uid, "orders");

      // desc arrangement for order items (the last in , the first shown)
      const orderedRef = query(collectionRef, orderBy("created", "desc"));

      onSnapshot(orderedRef, (querySnapshot) => {
        setOrders(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders-order">
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
