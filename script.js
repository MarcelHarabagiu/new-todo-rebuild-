class Main {

  dom() {
    let todoButton = document.querySelector('.todo-button');
    const boundAddTodo = this.addTodo.bind(this);
    todoButton.addEventListener ('click', boundAddTodo);
  }

  addTodo() {
    const todoInput = this.getTodoInput();
    const todoText = todoInput.value;
    const todoItem = new TodoItem(todoText);
    this.modelTodos.push(todoItem);
    todoInput.value = '';
    this.createElement(todoItem);
  }
  getTodoInput() {
    return document.querySelector('.todo-input');
  }
  getTodoList() {
    return document.querySelector('.todo-list');
  }

  createElement (newTodoObj) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const todoLi = document.createElement('li');
    todoLi.innerText = newTodoObj.text;
    todoLi.classList.add('todo.item');
    todoDiv.appendChild(todoLi);
    this.getTodoList().appendChild(todoDiv);
  }
  modelTodos = [];
}

window.onload = () => {
  const main = new Main();
  main.dom();
}

class TodoItem {

  constructor(text) {
    this.text = text;
  }
}