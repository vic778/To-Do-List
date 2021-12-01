export default () => {
  const data = JSON.parse(localStorage.getItem('stock'));
  const stockClear = data.filter((elem) => elem.completed);
  stockClear.forEach((elem) => {
    const index = data.indexOf(elem);
    data.splice(index, 1);
  });
  localStorage.setItem('stock', JSON.stringify(data));
};
