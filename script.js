
let todoInput;
let todoButton;
let todoList;

todoInput = document.querySelector('.todo-input');
todoButton = document.querySelector('.todo-button');
todoList = document.querySelector('.todo-list');
todoButton.addEventListener('click', addTodo);

function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  todoList.appendChild(todoDiv);
  todoInput.value = ''
}
