/** @format */

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const ProductItem = (props) => {
  const cartLists = useSelector((state) => state.cart);
  console.log(cartLists);
  const dispatch = useDispatch();
  const { title, price, description, id, amount } = props;

  // const productController = () => {
  //   const founded = cartLists.find((item) => {
  //     return item.id === id;
  //   });

  //   return founded;
  // };

  const handlerDispathc = () => {
    // const res = productController();

    // res
    //   ? dispatch(cartActions.editItem(res))
    //   : dispatch(
    //       cartActions.addItem({ id, title, price, description, amount })
    //     );

    dispatch(cartActions.onAdd({ title, price, description, id, amount }));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handlerDispathc}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
