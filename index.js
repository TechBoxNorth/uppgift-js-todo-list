const taskTextBox = document.querySelector('.task-textbox')
const taskList = document.querySelector('.task-list');

function addTask(){
    if(taskTextBox.value !== ''){
        let item = document.createElement('li');
        item.classList.add('task');
        item.innerHTML = `<p>${taskTextBox.value}</p><div class="icons"><img src="img/arrow_up.svg" class="move-up" alt="up arrow"><img src="img/arrow_down.svg" class="move-down" alt="down arrow"><img src="img/delete.svg" class="delete-task" alt="trash bin"><img src="img/check.svg" class="check-task" alt="check mark"></div>`;
        taskList.appendChild(item);
        taskTextBox.value = '';
    } else {
        alert('You must describe the task!');
    }
}

taskList.addEventListener('click', (e) => {
    if(e.target.classList.contains('check-task')){
        console.log('check!');
        e.target.classList.toggle('checked')
    } else if (e.target.classList.contains('delete-task')){
        console.log('delete');
        const task = e.target.parentElement.parentElement;
        console.log(task);
        task.remove();
    }
});


/*
const taskList = document.querySelector('.task-list');
const createBtn = document.querySelector('.create-btn');
createBtn.addEventListener('click', () => {
    const taskTxt = document.querySelector('.task-text');
    taskList.insertAdjacentHTML("afterbegin", `<li class="task">
    <p>${taskTxt.value}</p>
    <div class="icons">
        <img src="img/arrow_up.svg" class="move-up" alt="up arrow">
        <img src="img/arrow_down.svg" class="move-down" alt="down arrow">
        <img src="img/delete.svg" class="delete-task" alt="trash bin">
        <img src="img/check.svg" class="check-task" alt="check mark">
    </div>
</li>`);
    taskTxt.value = null;
});
*/