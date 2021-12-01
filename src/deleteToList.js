export default (e) => {
  const data = localStorage.getItem('stock');
  const todoArray = JSON.parse(data);
  const todoObject = todoArray.find((x) => x.index === Number(e.target.parentNode.id));
  todoArray.splice(todoArray.indexOf(todoObject), 1);
  localStorage.setItem('stock', JSON.stringify(todoArray));
};
