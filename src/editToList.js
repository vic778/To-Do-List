export default (e) => {
  const data = localStorage.getItem('stock');
  const todoArray = JSON.parse(data);
  const todoObject = todoArray.find((x) => x.index === Number(e.target.parentElement.id));
  const index = todoArray.indexOf(todoObject);
  todoArray[index].description = e.target.textContent;
  localStorage.setItem('stock', JSON.stringify(todoArray));
};
