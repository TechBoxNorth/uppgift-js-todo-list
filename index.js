let tasks = [];
function newTask(task){
    const description = task;
    const done = false;
    return {
        description,
        done
    }
}

tasks.push(newTask('Make dinner'));
tasks.push(newTask('Make dinner'));
tasks.push(newTask('Make dinner'));

console.log(tasks);