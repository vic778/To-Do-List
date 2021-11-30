import './styles.css';
import addList from './addToList.js';
import completedTask from './checkBoxItem.js';
// eslint-disable-next-line import/extensions
import editToDoList from './editToList';
// eslint-disable-next-line import/extensions
import deleteToDo from './deleteToList';
// eslint-disable-next-line import/extensions
import clearAllList from './clearAllToList';

const todoList = document.querySelector('#todoList');
const inputFaild = document.querySelector('#inputFaild');
const clearAllToDo = document.querySelector('#clearAllToDo');

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

  // Create element in the Array
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

  // Edit element
  const editButtons = document.querySelectorAll('.description');
  editButtons.forEach((btn) => {
    btn.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        editToDoList(e);
        todoList.innerHTML = '';
        displayToDoList();
      }
    });
  });

  // delete element
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      deleteToDo(e);
      todoList.innerHTML = '';
      displayToDoList();
    });
  });
}

displayToDoList();

clearAllToDo.addEventListener('click', () => {
  clearAllList();
  todoList.innerHTML = '';
  displayToDoList();
});
