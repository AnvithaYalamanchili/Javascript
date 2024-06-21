const todoList = [];

function renderTodoList() {
    let todoHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        const html = `
        
            <div>${name}</div>
            <div>${dueDate}</div>
            <ion-icon class="ion" onclick="removeTodo(${i})" name="trash-outline"></ion-icon>
            
        `;
        todoHtml += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoHtml;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateElement = document.querySelector('.js-due-date-input');
    const dueDate = dateElement.value;

    if (name === '') {
        alert("Enter an activity");
        return;
    }

    if (dueDate === '') {
        alert('Enter date');
        return;
    }

    todoList.push({
        name,
        dueDate
    });

    inputElement.value = '';
    dateElement.value = '';

    renderTodoList();
}

function removeTodo(index) {
    todoList.splice(index, 1);
    renderTodoList();
}

function deleteAll() {
    todoList.length = 0;
    renderTodoList();
}
