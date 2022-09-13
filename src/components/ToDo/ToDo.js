import React, { useState } from "react";
import styles from "./ToDo.module.css";

const toDosInit = [
  { task: "Add some examples" },
  { task: "of to-dos" },
  { task: "so this can be" },
  { task: "a little more full" },
  { task: "during development" },
];

function ToDo(props) {
  // this needed to be refactored into a function as Hooks (useState) can't be called @ top level
  const [toDos, setToDos] = useState(toDosInit);

  const toDoList = toDos.map((toDo) => (
    <div>
      <label>
        <input type="checkbox" key={toDo.key} />
        {toDo.task}
      </label>
    </div>
  ));

  return <div className={styles.ToDo}>{toDoList}</div>;
}

export default ToDo;
