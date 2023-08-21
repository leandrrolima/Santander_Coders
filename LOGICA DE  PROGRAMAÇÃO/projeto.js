const tasks = [];

function addTask(description) {
    const task = { id: tasks.length + 1, description };
    tasks.push(task);
}

function editTask(id, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.description = newDescription;
    }
}

function removeTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
}

function listTasks() {
    console.log("Lista de Tarefas:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Descrição: ${task.description}`);
    });
}

function getTaskById(id) {
    return tasks.find(task => task.id === id);
}


addTask("Comprar leite");
addTask("Fazer exercícios");
addTask("Ler um livro");

listTasks();

editTask(2, "Fazer yoga");

console.log("Após edição:");
listTasks();

removeTask(1);

console.log("Após remoção:");
listTasks();

// const listTasks = () => {
//     const tasksByStatus = {};
    
//     possibleStatus.forEach(status => {
//       tasksByStatus[status] = todos.filter(task => task.status === status);
//     });
  
//     return tasksByStatus;
//   };
  


