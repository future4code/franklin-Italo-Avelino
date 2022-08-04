var taskList = ["Treinar", "estudar"]

const addTask = (task) => {
    taskList = [...taskList, task]
}

addTask(process.argv[2])

console.log("tarefas:", taskList)