import { FC } from "react";
import { Task as ITask } from "../../types";

interface TaskProps {
  task: ITask;
  toggleDone: (id: number) => void;
  deleteTask: (id: number) => void;
}

export const Task: FC<TaskProps> = ({ task, toggleDone, deleteTask }) => {

  return (
    <li>
      <input
        type="checkbox"
        onChange={() => {
          toggleDone(task.id);
        }}
        checked={task.done}
      />
      {task.todo}
      <button onClick={()=> {deleteTask(task.id)}}>x</button>
    </li>
  );
};
