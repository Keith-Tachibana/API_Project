const taskList = [];
const ul = document.getElementById('toDo-ul');
const add = document.getElementById('toDo-add');
const deleteButton = document.getElementById('delete-toDo');
add.addEventListener('click', addToDo);

function addToDo() {
  let toDo = $('#toDo').val();
  if (!toDo) {
    return null;
  }
  const task = {
    task: toDo
  };
  taskList[taskList.length] = task;
  localStorage.taskList = JSON.stringify(taskList);
  $('#toDo').val('');
  loadToDo();
}

function loadToDo() {
  if (!localStorage.taskList) {
    return false;
  }
  ul.textContent = '';
  let newTaskList = JSON.parse(localStorage.taskList);
  for (let i = 0; i < newTaskList.length; i++) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    li.textContent = newTaskList[i].task;
    deleteButton.classList.add('ml-2', 'mb-2', 'bg-danger', 'text-white');
    deleteButton.setAttribute('id', 'delete-toDo');
    span.appendChild(deleteButton);
    li.appendChild(span);
    ul.appendChild(li);
    deleteButton.addEventListener('click', function () {
      let sliced = event.currentTarget.parentElement.parentElement.textContent.replace('Delete', '');
      deleteToDo(sliced);
    })
  }
}

function deleteToDo(task) {
  localStorage.removeItem(JSON.stringify(task));
}

loadToDo();
