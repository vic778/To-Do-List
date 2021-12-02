// eslint-disable-next-line import/no-cycle
import { displayToDoList } from './index.js';

export default () => {
  let data = JSON.parse(localStorage.getItem('stock'));
  data = data.filter((elem) => elem.completed !== 1);
  for (let i = 0; i < data.length; i += 1) {
    data[i].index = i + 1;
  }
  displayToDoList(data);
  localStorage.setItem('stock', JSON.stringify(data));
};
