import './styles.css';
import addList from './addToList.js';
import completedTask from './checkBoxItem.js';

const todoList = document.querySelector('#todoList');
const inputFaild = document.querySelector('#inputFaild');

const stock = [];

function displayToDoList() {
  const data = localStorage.getItem('stock');
  if (data) {
    JSON.parse(data).forEach((todo) => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      const text = `<div class="list-todo" >
      <div class="group-items" id="${todo.index}">
    <input class="form-check-input" type="checkbox" value="" ${todo.completed ? 'checked' : ''} id="defaultCheck1"/>
          <div class="description ${todo.completed ? 'checked' : ''}" contenteditable="${!todo.completed}">${todo.description}</div>
          </div>
          <i class="fas fa-trash delete"></i>
       </div>`;
      li.innerHTML = text;
      todoList.appendChild(li);
    });
  }

  inputFaild.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputFaild.value) {
      addList(stock, inputFaild.value);
      todoList.innerHTML = '';
      displayToDoList();
      inputFaild.value = '';
    }
  });

  // for check all box
  const checkBoxButtons = document.querySelectorAll('#defaultCheck1');
  checkBoxButtons.forEach((btn) => {
    btn.addEventListener('change', (e) => {
      completedTask(e);
    });
  });
}

displayToDoList();
