//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions

function addToDo(event) {
  //prevent form from submitting
  event.preventDefault();

  //creating todo DIV
  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add('todo');

  //create li
  const newToDo = document.createElement('li');
  newToDo.innerText = todoInput.value;
  newToDo.classList.add('todo-item');

  //append newToDo to toDoDiv
  toDoDiv.appendChild(newToDo);

  //CHECK MARK
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('completed-btn');
  toDoDiv.appendChild(completedButton);

  //Delete button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  toDoDiv.appendChild(trashButton);

  //Append toDoDiv to todoList
  todoList.appendChild(toDoDiv);

  //clear input box
  todoInput.value = '';
}

function deleteCheck(event) {
  const item = event.target;
  console.log(item);
  //DELETE Todo
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    //transition
    todo.classList.add('fall');
    //delete todo div after trasnition end
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }
  //CHECK mark
  if (item.classList[0] === 'completed-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filterTodo(event) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'none';
        } else {
          todo.style.display = 'flex';
        }
        break;
    }
  });
}
