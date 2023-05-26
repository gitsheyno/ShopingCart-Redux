/** @format */

import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cartVisbilityActins } from "../../store/catVisibility";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const products = useSelector((state) => state.cart);
  console.log(products);

  const productsLength = products.reduce((acc, el) => {
    return acc + el.amount;
  }, 0);

  const dispatch = useDispatch();

  const handlerVisbility = (e) => {
    dispatch(cartVisbilityActins.handlerCartVisibility());
  };

  return (
    <button className={classes.button} onClick={handlerVisbility}>
      <span>My Cart</span>
      <span className={classes.badge}>{productsLength}</span>
    </button>
  );
};

export default CartButton;
