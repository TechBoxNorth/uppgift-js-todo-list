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