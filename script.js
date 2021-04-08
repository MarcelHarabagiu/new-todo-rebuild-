
class Main {

  modelTodos;
  todoButton;
  todoInput;


  dom = () => {
  this.todoButton = document.querySelector('.todo-button');
  this.todoButton.addEventListener('click', this.addTodo);
}

   addTodo = () => {
    const todoInput = getTodoInput();
    const todoText = this.todoInput.value;
    const todoItem = new TodoItem(todoText);
    this.modelTodos.push(todoItem);
    this.todoInput.value = '';
    this.createElement(todoItem);
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
    this.getTodoList().appendChild(todoDiv);
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