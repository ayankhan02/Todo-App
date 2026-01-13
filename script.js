const input = document.querySelector(".int");
const btn = document.querySelector(".btn");
const tasksDiv = document.querySelector(".tasks");

let count = 1;

btn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please enter a task 🙏");
  } else {
    const task = document.createElement("div");

    const taskText = document.createElement("span");
    taskText.textContent = `${count}. ${input.value}`;

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";

    delBtn.addEventListener("click", () => {
      task.remove();
    });

    task.appendChild(taskText);
    task.appendChild(delBtn);
    tasksDiv.appendChild(task);

    input.value = "";
    count++;
  }
});
