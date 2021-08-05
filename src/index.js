const todoFormId = 'create-task-form'
document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById(todoFormId);
  todoForm.addEventListener('submit', addToDo)
});

function addToDo (e) {
  e.preventDefault();
  const todoText = e.target.description.value
  const taskList = document.getElementById('tasks')
  
  const newTask = document.createElement('li')
  newTask.innerText = todoText;

  const deleteButton = document.createElement('button');
  deleteButton.innerText = '[ X ]';
  newTask.append(deleteButton);

  deleteButton.addEventListener('click', e => {
    const li = e.target.parentNode;
    li.remove();
     
  });

  taskList.append(newTask);

  e.target.reset();
}
