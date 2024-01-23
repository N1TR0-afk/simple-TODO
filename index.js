let todoArr = [];
let updatedTodoArr = [];
let id = Math.floor(Math.random()* 1000);
function addTodo() {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  const state = [{
    id:id,
    title:title,
    description:description
  }]
  pushTodos(state);
  updateDomToState(todoArr); 
}
function deleteTodo(e){
  e.parentElement.remove()
  console.log(e) 
}
function markDone(e) {
  e.innerText = "✅Done!"
  console.log(e.parentElement.id)
}
function updateDomToState(state) {
  document.getElementById('board').innerHTML = "";
  for (let i = 0; i < state.length; i++) {
    let title = state[i].title;
    let description = state[i].description;
    let id = state[i].id;
    let todoBoard = document.createElement('div');
    todoBoard.setAttribute('id',`${id}`)
    todoBoard.setAttribute('class','box');
    todoBoard.innerHTML = `
    <h4> Title: </h4>
    <h5>${title}</h5>
    <h4>Description:</h4>
    <p>${description}</p>
    <button onclick="markDone(this)" id="mark">Mark as Done</button>
    <button onclick="deleteTodo(this)" id="remove">Remove Todo</button>
  `
  document.getElementById('board').appendChild(todoBoard);
  }
}
// setInterval(async function() {
//     let res = await fetch('https://sum-server.100xdevs.com/todos');
//     let data = await res.json();
//     pushTodos(data.todos);
//     updateDomToState(todoArr);
//   }, 6000);
  
  function pushTodos(newTodoArr) {
    for (let i = 0; i < newTodoArr.length; i++) {
      if (checkWithOGTodo(newTodoArr[i]).isSame) {
        todoArr.splice(checkWithOGTodo(newTodoArr[i]).index, 1,newTodoArr[i]);
      }else{
        todoArr.push(newTodoArr[i]);
      }
    }
  }

  function checkWithOGTodo(someNewTodo) {
    for (let i = 0; i < todoArr.length; i++) {        
      if (todoArr[i].title == someNewTodo.title) {
        return {
          isSame: true,
          index: i
        }
      }
    }return false
  }