// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return; // Don't add empty tasks

        const li = document.createElement('li');
        li.textContent = taskText;

        li.addEventListener('click', () => {
            li.remove(); // Remove task when clicked
        });

        taskList.appendChild(li);
        taskInput.value = ''; // Clear the input field
    }
});
