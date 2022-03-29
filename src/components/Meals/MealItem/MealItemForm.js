import React from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";
const MealItemForm = () => {
  return (
    <>
      <form action="" className={styles.form}>
        <Input
          label="Amount: "
          input={{
            id: Math.floor(Math.random() * 1234),
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default MealItemForm;
