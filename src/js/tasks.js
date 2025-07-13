

import { getFormLS, saveInLS } from "./local-storage-api";
import { makeTaskList } from "./render-tasks";

let tasks = getFormLS("tasks") || [];

export const getTasks = () => {
    makeTaskList(tasks);
}

export const addTask = (task) => {
    tasks.push(task);
    makeTaskList(tasks);
    saveInLS("tasks", tasks);
}

export const deleteTask = (text) => {
    tasks = tasks.filter(({ title }) => title !== text);

  makeTaskList(tasks);
  saveInLS('tasks', tasks);
}
