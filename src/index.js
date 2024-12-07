document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  const sortAscBtn = document.getElementById("sort-asc");
  const sortDescBtn = document.getElementById("sort-desc");

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = document.getElementById("new-task-description").value.trim();
    const priority = document.getElementById("priority").value;
    const user = document.getElementById("user").value.trim();

    if (!input || !isNaN(input)) {
      setTimeout(() => {
        alert("Write A Text Task Description!");
      }, 1000);
    } else {
      const newTask = document.createElement("li");
      const taskText = document.createTextNode(input);
      newTask.appendChild(taskText);

      setTaskPriority(newTask, priority);
      appendUserToTask(newTask, user);
      addDeleteButton(newTask);
      addEditButton(newTask, input);

      taskList.appendChild(newTask);

      document.getElementById("new-task-description").value = "";
      document.getElementById("user").value = "";
    }
  });

  sortAscBtn.addEventListener("click", () => {
    sortTasksByPriority("asc");
  });

  sortDescBtn.addEventListener("click", () => {
    sortTasksByPriority("desc");
  });

  function setTaskPriority(task, priority) {
    switch (priority) {
      case "high":
        task.classList.add("high-priority");
        break;
      case "medium":
        task.classList.add("medium-priority");
        break;
      case "low":
        task.classList.add("low-priority");
        break;
    }
  }

  function appendUserToTask(task, user) {
    if (user) {
      const userSpan = document.createElement("span");
      userSpan.textContent = ` (Assigned to: ${user})`;
      task.appendChild(userSpan);
    }
  }

  function addDeleteButton(task) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    task.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      task.remove();
    });
  }

  function addEditButton(task, input) {
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    task.appendChild(editBtn);
    editBtn.addEventListener("click", () => {
      const newDescription = prompt("Edit your task description:", input);
      if (newDescription) {
        task.firstChild.textContent = newDescription;
      }
    });
  }

  function sortTasksByPriority(order) {
    const tasks = Array.from(taskList.children);
    tasks.sort((a, b) => {
      const priorityA = getPriorityValue(a);
      const priorityB = getPriorityValue(b);

      return order === "asc" ? priorityA - priorityB : priorityB - priorityA;
    });
    tasks.forEach(task => taskList.appendChild(task));
  }

  function getPriorityValue(task) {
    if (task.classList.contains("high-priority")) return 1;
    if (task.classList.contains("medium-priority")) return 2;
    return 3; // low-priority
  }
});
