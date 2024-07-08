import { FC } from "react";
import { Task } from "../Task/Task";
import { Task as ITask } from "../../types";

interface TasksProps {
  tasks: ITask[];
  toggleDone: (id: number) => void;
  deleteTask: (id: number) => void;
}

export const TaskList: FC<TasksProps> = ({ tasks, toggleDone, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleDone={toggleDone}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};