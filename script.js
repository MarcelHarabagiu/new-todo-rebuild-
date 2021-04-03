let dom = () => {
  let todoButton = document.querySelector('.todo-button');
  todoButton.addEventListener('click', addTodo);
}
window.onload = dom;

let addTodo = () => {
  const todoInput = getTodoInput();
  const todoText = todoInput.value;
  const newTodoObj = addToModel(todoText);
  todoInput.value = '';
  createElement(newTodoObj);
}
let getTodoInput = () => document.querySelector('.todo-input');
let getTodoList = () => document.querySelector('.todo-list');

let createElement = (newTodoObj) => {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const todoLi = document.createElement('li');
  todoLi.innerText = newTodoObj.text;
  todoLi.classList.add('todo.item');
  todoDiv.appendChild(todoLi);
  getTodoList().appendChild(todoDiv);
}
const modelTodos = [];

const addToModel = (text) => {
  const newTodo = { text };
  modelTodos.push(newTodo); // non es6 => { text: text }
  return newTodo;
}

