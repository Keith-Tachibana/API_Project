let key = 0;
let todoArray = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];

$('#todo-add').on('click', addToDo);

function addToDo() {
  let todo = $('#todo').val();
  $('#todo-ul').append('<li>' + todo +'<span><button class="ml-2 mb-2 bg-danger text-white" id="delete-todo">Delete</button></span></li>');

}
