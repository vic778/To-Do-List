export default () => {
  const data = JSON.parse(localStorage.getItem('stock'));
  const itemClear = data.filter((elem) => elem.completed);
  itemClear.forEach((elem) => {
    const index = data.indexOf(elem);
    data.splice(index, 1);
  });
  localStorage.setItem('stock', JSON.stringify(data));
};
