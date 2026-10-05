const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";
    completeBtn.className = "complete-btn";

    completeBtn.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

clearBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
});
