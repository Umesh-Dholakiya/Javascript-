let todoList = [];

function addTodobtn() {
    const todoInput = document.getElementById('todo-input');
    const task = todoInput.value.trim();
    if (task !== '') {
        todoList.push({ task: task, done: false });
        displayTodos();
        todoInput.value = '';
    }
}

function toggleDone(index) {
    todoList[index].done = !todoList[index].done;
    displayTodos();
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    displayTodos();
}

function displayTodos() {
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = '';
    todoList.forEach((todo, index) => {
        const div = document.createElement('div');
        div.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.done;
        checkbox.addEventListener('change', () => toggleDone(index));

       
        const taskSpan = document.createElement('span');
        taskSpan.textContent = todo.task;
        taskSpan.style.textDecoration = todo.done ? 'line-through' : 'none';

       
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '❌';
        deleteBtn.addEventListener('click', () => deleteTodo(index));

        div.appendChild(checkbox);
        div.appendChild(taskSpan);
        div.appendChild(deleteBtn);

        todoListElement.appendChild(div);
    });
}