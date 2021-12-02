/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */
import './styles.css';
import addList from './addToList.js';
import completedTask from './checkBoxItem.js';
import editToDoList from './editToList.js';
import deleteToDo from './deleteToList.js';
import clearAllList from './clearAllToList.js';

const todoList = document.querySelector('#todoList');
const inputFaild = document.querySelector('#inputFaild');
const clearAllToDo = document.querySelector('#clearAllToDo');

// eslint-disable-next-line prefer-const
export let stock = JSON.parse(localStorage.getItem('stock')) || [];

export function displayToDoList(stock) {
  if (stock !== null) {
    stock.forEach((todo) => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      const text = `<div class="list-todo" id="${todo.index + 1}">
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
        e.preventDefault();
        editToDoList(e);
      }
    });
  });

  // delete element
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      todoList.innerHTML = '';
      deleteToDo(e);
    });
  });
}

// Create element in the Array
inputFaild.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputFaild.value) {
    todoList.innerHTML = '';
    addList(stock, inputFaild.value);
    inputFaild.value = '';
  }
});

clearAllToDo.addEventListener('click', () => {
  todoList.innerHTML = '';
  clearAllList();
});

window.addEventListener('load', () => {
  const data = localStorage.getItem('stock');
  const todoArray = JSON.parse(data);
  displayToDoList(todoArray);
});
