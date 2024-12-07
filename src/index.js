document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const list = document.getElementById("tasks");

  const inputField = document.getElementById("new-task-description");
  
  inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {     event.preventDefault();
      const input = inputField.value.trim();

      if (!input || !isNaN(input)) {
        setTimeout(() => {
          alert("Write A Text Task Description!");
        }, 1000);
      } else {
        const newTask = document.createElement("li");
        const taskText = document.createTextNode(input);
        newTask.appendChild(taskText);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");

        newTask.appendChild(deleteBtn);
        list.appendChild(newTask);

        inputField.value = ""; 
        deleteBtn.addEventListener("click", () => {
          newTask.remove(); 
        });
      }
    }
  });

  // Optional: Also handle the submit event if you want a fallback
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const input = inputField.value.trim();

    if (!input || !isNaN(input)) {
      setTimeout(() => {
        alert("Write A Text Task Description!");
      }, 1000);
    } else {
      const newTask = document.createElement("li");
      const taskText = document.createTextNode(input);
      newTask.appendChild(taskText);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      newTask.appendChild(deleteBtn);
      list.appendChild(newTask);

      inputField.value = ""; // Clear the input field

      deleteBtn.addEventListener("click", () => {
        newTask.remove(); // Remove the task when delete button is clicked
      });
    }
  });
});



/* 
### Deliverables

- As a user, I should be able to type a task into the input field.
- As a user, I should be able to click some form of a submit button.
- As a user, I expect to see the task string that I provided appear in the DOM
  after the submit button has been activated.

*/