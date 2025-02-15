function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskTime = document.getElementById('taskTime');
    const taskList = document.getElementById('taskList');
    const alertSound = document.getElementById('alertSound');

    if (taskInput.value === '' || taskTime.value === '') {
        alert('Please enter both task and time.');
        return;
    }

    const taskText = taskInput.value;
    const taskDueTime = new Date(taskTime.value).getTime();
    
    const li = document.createElement('li');
    li.innerHTML = `${taskText} - Due at ${new Date(taskDueTime).toLocaleString()}
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
    
    taskList.appendChild(li);

    // Clear inputs
    taskInput.value = '';
    taskTime.value = '';

    // Set an alert for the task time
    const timeUntilAlert = taskDueTime - Date.now();
    if (timeUntilAlert > 0) {
        setTimeout(() => {
            alertSound.play();
        }, timeUntilAlert);
    } else {
        alertSound.play();
    }
}

function deleteTask(button) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(button.parentElement);
}
