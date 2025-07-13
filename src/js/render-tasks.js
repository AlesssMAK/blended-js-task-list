import { refs } from "./refs";

export const makeTaskList = (tasks) => {

  const markup = tasks
    .map(({ title, description }) => {
      return `
        <li class="task-list-item">
          <button class="task-list-item-btn">Delete</button>
          <h3>${title}</h3>
          <p>${description}</p>
        </li>`;
    })
    .join("");

    refs.tasksList.innerHTML = markup;
}