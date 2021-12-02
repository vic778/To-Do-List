// eslint-disable-next-line import/no-cycle
import { displayToDoList } from './index.js';

export default (stock, todo) => {
  stock.push({
    description: todo,
    completed: 0,
    index: stock.length + 1,
  });
  displayToDoList(stock);

  localStorage.setItem('stock', JSON.stringify(stock));
};