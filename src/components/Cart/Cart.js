/** @format */

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
const Cart = (props) => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(products);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>

      <ul>
        {products.map((product) => {
          if (product.amount > 0) {
            return (
              <CartItem
                key={product.id}
                title={product.title}
                quantity={product.amount}
                total={product.totalPrice}
                price={product.price}
                id={product.id}
              />
            );
          }
        })}
      </ul>
    </Card>
  );
};

export default Cart;
