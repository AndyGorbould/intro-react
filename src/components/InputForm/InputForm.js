import React, { useRef } from "react";
import styles from "./InputForm.module.css";

export default function InputForm() {
  const inputRef = useRef();

  function clickHandler(e) {
    // 👽👽👽👽  remember 'e.preventDefault()' to stop refresh on submit click
    e.preventDefault();
    const inputElement = inputRef.current;

    console.log(inputElement.value);
  }

  return (
    <div className={styles.InputForm}>
      <form>
        <label>
          Add To-Do:
          <input type="text" name="addToDo" placeholder="u haz moar 2 do" ref={inputRef} />
        </label>
        <button type="submit" value="submit" onClick={clickHandler}>
          Add
        </button>
      </form>
    </div>
  );
}
