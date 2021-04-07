
class Main {

const todoItem = new Main(todoText)

let dom = () => {
  let todoButton = document.querySelector('.todo-button');
  todoButton.addEventListener('click', addTodo);
}

let addTodo = () => {
  const todoInput = getTodoInput();
  const todoText = todoInput.value;
  const todoItem = new TodoItem(todoText);
  modelTodos.push(todoItem);
  todoInput.value = '';
  createElement(todoItem);
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

}

const main = new Main()
window.onload = main.dom;



class TodoItem {

  constructor(text) {
    this.text = text;
  }
}