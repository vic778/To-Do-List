export default (e) => {
  const data = localStorage.getItem('stock');
  const todoArray = JSON.parse(data);
  const todoObject = todoArray.find((x) => x.index === Number(e.target.parentElement.id));
  const index = todoArray.indexOf(todoObject);
  if (!todoArray[index].completed) {
    todoArray[index].completed = 1;
    e.target.parentElement.children[1].classList.add('checked');
    localStorage.setItem('stock', JSON.stringify(todoArray));
  } else {
    todoArray[index].completed = 0;
    e.target.parentElement.children[1].classList.remove('checked');
    localStorage.setItem('stock', JSON.stringify(todoArray));
  }
};