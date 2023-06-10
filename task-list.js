const readline = require('readline');

// Crea una interfaz para leer la entrada del usuario desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Lista de tareas
let taskList = [];

// Función para mostrar las opciones disponibles
function showOptions() {
  console.log('\nOpciones:');
  console.log('1. Agregar tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('4. Salir\n');
}

// Función para agregar una tarea
function addTask() {
  rl.question('Ingrese la descripción de la tarea: ', (description) => {
    const task = {
      id: Date.now(),
      description,
      completed: false
    };

    taskList.push(task);
    console.log('Tarea agregada con éxito.');
    console.log('ID de la tarea:', task.id); // Mostrar el ID de la tarea agregada
    showOptions();
    askUser();
  });
}

// Función para eliminar una tarea
function deleteTask() {
  rl.question('Ingrese el ID de la tarea que desea eliminar: ', (taskId) => {
    const taskIndex = taskList.findIndex(task => task.id.toString() === taskId);
    if (taskIndex !== -1) {
      taskList.splice(taskIndex, 1);
      console.log('Tarea eliminada con éxito.');
    } else {
      console.log('No se encontró ninguna tarea con ese ID.');
    }
    showOptions();
    askUser();
  });
}

// Función para completar una tarea
function completeTask() {
  rl.question('Ingrese el ID de la tarea que desea completar: ', (taskId) => {
    const task = taskList.find(task => task.id.toString() === taskId);
    if (task) {
      task.completed = true;
      console.log('Tarea marcada como completada.');
    } else {
      console.log('No se encontró ninguna tarea con ese ID.');
    }
    showOptions();
    askUser();
  });
}

// Función para manejar la entrada del usuario
function handleUserInput(option) {
  switch (option) {
    case '1':
      addTask();
      break;
    case '2':
      deleteTask();
      break;
    case '3':
      completeTask();
      break;
    case '4':
      rl.close();
      break;
    default:
      console.log('Opción inválida. Por favor, elija una opción válida.');
      showOptions();
      askUser();
  }
}

// Función para preguntar al usuario qué opción desea ejecutar
function askUser() {
  rl.question('Ingrese el número de opción que desea ejecutar: ', (option) => {
    handleUserInput(option);
  });
}

// Inicio del programa
console.log('Bienvenido a la lista de tareas.');
showOptions();
askUser();
