import React from "react";
import styles from "./ToDo.module.css";

const data = [
  { task: "Add some examples" },
  { task: "of to-dos" },
  { task: "so this can be" },
  { task: "a little more full" },
  { task: "during development" },
];

const toDoList = data.map((d) => (
  <div>
    <label>
      <input type="checkbox" key={d.task} />
      {d.task}
    </label>
  </div>
));

const ToDo = () => <div className={styles.ToDo}>{toDoList}</div>;

export default ToDo;
