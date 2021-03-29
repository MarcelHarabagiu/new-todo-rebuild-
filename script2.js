function newElement() {
  var li = document.createElement('li');
  var inputValue = document.getElementById('todoInput').value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('scrie ceva!');
  } else {
    document.getElementById('todos').appendChild(li);
  }
  document.getElementById('todoInput').value = '';

  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
  }
