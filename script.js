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

class NewTodo {

  constructor(text) {
    this.text = text;
    this.modelClass = modelClass;
    this.createElement();
  }
  addToModel(todoItemClass) {
    this.modelTodos.push(todoItemClass);
  }
}

//   const addToModel = (text) => {
//     const newTodo = { text };
//     modelTodos.push(newTodo); // non es6 => { text: text }
//     return newTodo;
//   }
// }

// class TodoItemClass {

//   text;
//   elementTodoContainer;
//   modelClass;

//   constructor(text) {
//     this.text = text;
//     this.modelClass = modelClass;
//     this.createElement();
//   }

//   createElement() {
//     const todoList = document.querySelector('.todo-list');
//     this.elementTodoContainer = document.createElement('div');
//     this.elementTodoContainer.classList.add('todo');
//     const newTodo = document.createElement('li');
//     newTodo.innerText = this.text;
//     newTodo.classList.add('todo-item');
//     this.elementTodoContainer.appendChild(newTodo);
//     todoList.appendChild(this.elementTodoContainer);
//   }

// }

// class ModelTodos {
//   todoItemClasses

//   constructor() {
//     this.todoItemClasses = [];
//   }
//   addToModel(todoItemClass) {
//     this.todoItemClasses.push(todoItemClass);
//   }
// }