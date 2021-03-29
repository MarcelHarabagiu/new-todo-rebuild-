var todos = [];
document.getElementById('button').addEventListener('click', function () {
var list = document.getElementById('toDoList');
list.innerHTML = '';
  var todoInput = document.getElementById('todoInput').value;
todos.push(todoInput)

    var item = document.createElement("li");
for (var i = 0; i < todos.length; i++) {
    var listItem = document.createTextNode(todos[i]);
   var li = document.createElement("li");
li.appendChild(document.createTextNode(todos[i]));
list.append(li);
}
});