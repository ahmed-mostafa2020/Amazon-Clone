import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useAuth } from "./context/GlobalState";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Favorites from "./components/Favorites";

const App = () => {
  const { dispatch } = useAuth();
  const stripePromise = loadStripe(
    "pk_test_51NazCrCSME61BxH3JHDOIYyyPeFNO60hawlWBb6jHaxt4AsRenmrblZZhr7d9NfCWkBq94A179nM96J9zoJJa6Tn005DH7K6Og"
  );

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          userData: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          userData: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />

        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </>
          }
        />

        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />

        <Route
          path="/favorites"
          element={
            <>
              <Header />
              <Favorites />
            </>
          }
        />

        <Route path="*" element={<h1>PageNot Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
