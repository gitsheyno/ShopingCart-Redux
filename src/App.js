/** @format */
import React, { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/Notification/Notification";
import { sendCartData, fetchData } from "./store/cart-actions";
let initial = true;

function App() {
  const cartVisbility = useSelector((state) => state.cartVisbility.visibility);
  const notification = useSelector((state) => state.cartVisbility.notification);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  console.log(cart);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Layout>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      {cartVisbility && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
