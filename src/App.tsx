import "./App.css";
import { FC, useState } from "react";
import { Input } from "./components/Input/Input";
import { TaskList } from "./components/TaskList/TaskList";
import { Task } from "./types";

const tasksList: Task[] = [
  {
    id: 1,
    todo: "do something",
    done: false,
  },
  {
    id: 2,
    todo: "do something else",
    done: false,
  },
];

export const App: FC = () => {
  const [tasks, setTasks] = useState<Task[]>(tasksList);

  function addTask(title: string): void {
    setTasks((prev) => {
      return [{ id: prev.length + 1, todo: title }, ...prev];
    });
  }

  function toggleDone(id: Task["id"]) {
    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        } else {
          return task;
        }
      });
    });
  }

  function deleteTask(id: Task["id"]) {
	setTasks((prev)=>prev.filter((task) => task.id !== id))
  }

  return (
    <>
      <Input addTask={addTask} />
      <TaskList tasks={tasks} toggleDone={toggleDone} deleteTask={deleteTask} />
    </>
  );
};
