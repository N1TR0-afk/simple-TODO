let rendred;
function addTodo() {
  let title = document.getElementById('title');
  let description = document.getElementById('description');
  title = title.value;
  description = description.value;
  let todoBoard = document.createElement('div');
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
function deleteTodo(e){
  console.log(e)
  e.parentElement.remove()
}
function markDone(e) {
  e.innerText = "✅Done!"
}
// function updateDomToState(state) {
//   document.getElementById('board').innerHTML = "";
//   for (let i = 0; i < state.length; i++) {
//     let title = state[i].title;
//     let description = state[i].description;
//     let id = state[i].id;
//     let todoBoard = document.createElement('div');
//     todoBoard.setAttribute('id',`${id}`)
//     todoBoard.innerHTML = `
//     <h4> Title: </h4>
//     <h5>${title}</h5>
//     <h4>Description:</h4>
//     <p>${description}</p>
//     <button onclick="markDone(this)" id="mark">Mark ad Done</button>
//     <button onclick="deleteTodo(this)" id="remove">Remove Todo</button>
//   `
//   document.getElementById('board').appendChild(todoBoard);
//   }
// }