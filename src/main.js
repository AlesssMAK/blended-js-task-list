// тут будуть слухачі


import { refs } from "./js/refs";
import { addTask, getTasks, deleteTask } from "./js/tasks";

getTasks();

refs.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = refs.inputTaskName.value.trim();
  const description = refs.inputTaskDescription.value.trim();

  if (!title || !description) {
    alert('error')
    return;
  }

  addTask({ title, description })

  refs.form.reset();
});

refs.tasksList.addEventListener("click", (event) => {
  if (!event.target.classList.contains('task-list-item-btn')) return;

  const title = event.target.nextElementSibling?.textContent.trim();

  if (title) {
    deleteTask(title);
  }
});

