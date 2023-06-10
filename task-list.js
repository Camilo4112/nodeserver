/**usando async/await*/
function startProgram() {
  console.log('Bienvenido a la lista de tareas.');
  showOptions();

  askUser()
    .then(option => {
      if (option !== '4') {
        startProgram();
      } else {
        rl.close();
      }
    });
}

function askUser() {
  return new Promise((resolve) => {
    rl.question('Ingrese el número de opción que desea ejecutar: ', (option) => {
      handleUserInput(option)
        .then(() => resolve(option));
    });
  });
}

function handleUserInput(option) {
  return new Promise((resolve) => {
    switch (option) {
      case '1':
        addTask()
          .then(() => resolve());
        break;
      case '2':
        deleteTask()
          .then(() => resolve());
        break;
      case '3':
        completeTask()
          .then(() => resolve());
        break;
      default:
        console.log('Opción inválida. Por favor, elija una opción válida.');
        showOptions();
        resolve();
    }
  });
}

startProgram();


/* 
Usando then()


function startProgram() {
    console.log('Bienvenido a la lista de tareas.');
    showOptions();
  
    askUser()
      .then(option => {
        if (option !== '4') {
          startProgram();
        } else {
          rl.close();
        }
      });
  }
  
  function askUser() {
    return new Promise((resolve) => {
      rl.question('Ingrese el número de opción que desea ejecutar: ', (option) => {
        handleUserInput(option)
          .then(() => resolve(option));
      });
    });
  }
  
  function handleUserInput(option) {
    return new Promise((resolve) => {
      switch (option) {
        case '1':
          addTask()
            .then(() => resolve());
          break;
        case '2':
          deleteTask()
            .then(() => resolve());
          break;
        case '3':
          completeTask()
            .then(() => resolve());
          break;
        default:
          console.log('Opción inválida. Por favor, elija una opción válida.');
          showOptions();
          resolve();
      }
    });
  }
  
  startProgram();
  */