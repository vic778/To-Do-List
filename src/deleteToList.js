// eslint-disable-next-line import/no-cycle
import { stock, displayToDoList } from './index.js';

export default (e) => {
  stock = stock.filter((x) => x.index !== Number(e.target.parentElement.id - 1));
  for (let i = 0; i < stock.length; i += 1) {
    stock[i].index = i + 1;
  }
  displayToDoList(stock);
  localStorage.setItem('stock', JSON.stringify(stock));
};
