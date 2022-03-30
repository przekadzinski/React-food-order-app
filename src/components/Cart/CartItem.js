import React from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ name, amount, onRemove, onAdd, price }) => {
  const priceNum = `$${price}`;
  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{name}</h2>
      </div>
      <div className={styles.summary}>
        <span className={styles.price}>{priceNum}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={onRemove}>-</button>
        <span className={styles.amount}> x{amount}</span>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
