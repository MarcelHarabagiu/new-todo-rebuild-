
// let todoInput;
// let todoButton;
// let todoList;

// todo crate array to hold all items
// array should contain OBJECTs not the string
// the OBjects will have a space for the future properties.

/**
 * step 1) create array to hold items
 * 2) add new items to array
 * 3) add element to screen BASED on update to array
 * do #3 by passing the new todo OBJECT into a function that adds it to the screen
 */

// todoInput = document.querySelector('.todo-input');
// todoButton = document.querySelector('.todo-button');
// todoList = document.querySelector('.todo-list');
// todoButton.addEventListener('click', addTodo);

// function addTodo(event) {
//   event.preventDefault();
//   const todoDiv = document.createElement('div');
//   todoDiv.classList.add('todo');
//   const newTodo = document.createElement('li');
//   newTodo.innerText = todoInput.value;
//   newTodo.classList.add('todo-item');
//   todoDiv.appendChild(newTodo);
//   todoList.appendChild(todoDiv);
//   todoInput.value = '';
// }


let todoInput;
let todoButton;
let todoList;


window.onload = dom;
function dom() {
  todoInput = document.querySelector('.todo-input');
  todoButton = document.querySelector('.todo-button');
  todoList = document.querySelector('.todo-list');
  todoButton.addEventListener('click', addTodo);
}

const modelTodos = [];

function addTodo() {
  preventDefault();
  const todoText = todoInput.value;
  const newId = addToModel(todoText);
  todoInput.value = '';
  createElement(todoText);
}


let addToModel = (text) => {
  modelTodos.push({text});
  return text;
}
let createElement = (text) => {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.innerText = text;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  todoList.appendChild(todoDiv);
  return todoDiv;
}

