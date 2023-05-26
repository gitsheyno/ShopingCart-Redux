/** @format */

import { cartVisbilityActins } from "./catVisibility";
import { cartActions } from "./cartSlice";

export const fetchData = () => {
  return async (dispatch) => {
    const callApi = async () => {
      const response = await fetch(
        "https://testpj-02-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Fetching data faild!");
      }

      const data = await response.json();
      console.log(data);
      return data;
    };

    try {
      const cartData = await callApi();
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      dispatch(
        cartVisbilityActins.hanlderNotification({
          title: "Error!",
          message: "sent cart data error!!",
          status: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  console.log(cart, { cart });
  return async (dispatch) => {
    dispatch(
      cartVisbilityActins.hanlderNotification({
        title: "Sending...",
        message: "Sending cart data!",
        status: "pending",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://testpj-02-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({ cart }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("sending cart data failed!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        cartVisbilityActins.hanlderNotification({
          title: "Success!",
          message: "sent cart data successfully!",
          status: "success",
        })
      );
    } catch (err) {
      dispatch(
        cartVisbilityActins.hanlderNotification({
          title: "Error!",
          message: "sent cart data error!!",
          status: "error",
        })
      );
    }
  };
};
