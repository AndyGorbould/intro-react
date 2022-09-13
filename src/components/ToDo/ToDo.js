import React, { useState } from "react";
import styles from "./ToDo.module.css";

const toDosInit = [
  { task: "Add some examples", isCompleted: false },
  { task: "of to-dos", isCompleted: false },
  { task: "so this can be", isCompleted: false },
  { task: "a little more full", isCompleted: true },
  { task: "during development", isCompleted: false },
];

function ToDo(props) {
  // this needed to be refactored into a function as Hooks (useState) can't be called @ top level
  const [toDos, setToDos] = useState(toDosInit);

  const completedChange = (index) => {
    console.log(index);
    setToDos(index.toDos);
  };

  const toDoList = toDos.map((toDo, key) => (
    // remove div, only here to improve spacing until CSS is completed
    <div>
      <li key={key}>
        <input
          type="checkbox"
          checked={toDo.isCompleted}
          onChange={(e) => {
            const checked = e.target.checked;
            let newToDos = [...toDos];
            let index = newToDos.findIndex(
              (element) => element.key === toDo.key
            );
            newToDos[index].isCompleted = checked;
            completedChange({ toDos: newToDos });
          }}
        />
        {toDo.task}
      </li>
    </div>
  ));

  return (
    <div className={styles.ToDo}>
      <ul>{toDoList}</ul>
    </div>
  );
}

export default ToDo;
