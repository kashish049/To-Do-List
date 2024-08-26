document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');

        const listItem = document.createElement('li');
        listItem.textContent = todoText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => listItem.remove());

        listItem.addEventListener('click', () => listItem.classList.toggle('completed'));

        listItem.appendChild(deleteBtn);
        todoList.appendChild(listItem);

        todoInput.value = '';
    }
}