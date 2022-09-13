import React from "react";
import styles from "./InputForm.module.css";

const InputForm = () => (
  <div className={styles.InputForm}>
    <form>
      <label htmlFor="">
        Add To-Do:
        <input type="text" name="addToDo" />
      </label>
      <input type="submit" value="submit" />
    </form>
  </div>
);

export default InputForm;
