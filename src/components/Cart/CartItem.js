/** @format */

import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = (props) => {
  const { title, quantity, total, price, id } = props;

  const dispatch = useDispatch();
  const handlerSum = () => {
    console.log(1);
    dispatch(cartActions.onAdd({ title, quantity, total, price, id }));
  };
  const handlerSub = () => {
    dispatch(cartActions.onSub(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total} <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handlerSub}>-</button>
          <button onClick={handlerSum}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
