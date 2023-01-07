  // get references to the form and tasks container
  const form = document.getElementById('todo-form');
  const tasksContainer = document.getElementById('tasks');  
  const saveButton = document.getElementById('save-button');

  // add a submit event listener to the form
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from refreshing the page

    // get the value of the task input field
    const task = document.getElementById('task').value;

    // check if the task is not empty and the tasks container has fewer than 10 children
    if (task && tasksContainer.children.length < 11) {
      // create a new div element for the task
      const taskDiv = document.createElement('div');
      taskDiv.classList.add('task');

      // create a checkbox input for the task
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('task-checkbox');

      // add a click event listener to the checkbox that adds a strike-through effect to the task text when clicked
      checkbox.addEventListener('click', (event) => {
        taskText.classList.toggle('done');
      });

      // create a span element for the task text
      const taskText = document.createElement('span');
      taskText.classList.add('task-text');
      taskText.textContent = task;

      // create a delete button for the task
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';

      // add a click event listener to the delete button that deletes the task when clicked
      deleteButton.addEventListener('click', (event) => {
        tasksContainer.removeChild(taskDiv);
      });

      // append the checkbox, task text, and delete button to the task div
      taskDiv.appendChild(checkbox);
      taskDiv.appendChild(taskText);
      taskDiv.appendChild(deleteButton);

      // append the task div to the tasks container
      tasksContainer.appendChild(taskDiv);

      // clear the task input field
      document.getElementById('task').value = '';
    }

  });
