import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";

const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);

  const priceFormated = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({ id: id, name: name, amount: amount, price: price });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{priceFormated}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
