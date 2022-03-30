import React from "react";
import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>FoodApp</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="table full of food" />
      </div>
    </>
  );
};

export default Header;
