let dom = () => {
  let todoButton = document.querySelector('.todo-button');
  todoButton.addEventListener('click', addTodo);
}
window.onload = dom;

const modelTodos = [];

let getTodoInput = () => document.querySelector('.todo-input'); // same as { return xx; }
let getTodoList = () => document.querySelector('.todo-list');

let addTodo = (event) => {
  event.preventDefault();
  const todoInput = getTodoInput();
  const todoText = todoInput.value;
  const newTodoObj = addToModel(todoText);
  todoInput.value = ''; // clear input
  createElement(newTodoObj);
}
let addToModel = (text) => {
  const newTodo = {text};
  modelTodos.push(newTodo);  // non es6 => { text: text }
  return newTodo;
}
let createElement = (newTodoObj) => {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const todoLi = document.createElement('li');
  todoLi.innerText = newTodoObj.text;
  todoLi.classList.add('todo-item');
  todoDiv.appendChild(todoLi);
  getTodoList().appendChild(todoDiv);5
}