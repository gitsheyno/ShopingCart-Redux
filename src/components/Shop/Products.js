/** @format */

import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  {
    id: "p1",
    title: "test",
    price: 6,
    description: "This is a first product - amazing!",
    amount: 0,
  },
  {
    id: "p2",
    title: "test 2",
    price: 8,
    description: "This is a first product - amazing!",
    amount: 0,
  },
  {
    id: "p3",
    title: "test 3",
    price: 5,
    description: "This is a first product - amazing!",
    amount: 0,
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>

      <ul>
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              amount={product.amount}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
