export default (stock, todo) => {
  stock.push({
    description: todo,
    completed: 0,
    index: stock.length + 1,
  });
  localStorage.setItem('stock', JSON.stringify(stock));
};