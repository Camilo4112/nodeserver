const express = require('express');
const app = express();

app.use(express.json());

const tasks = [
  {
    id: 1,
    description: 'Hacer la compra',
    completed: false
  },
  {
    id: 2,
    description: 'Lavar el auto',
    completed: true
  },
  {
    id: 3,
    description: 'Estudiar para el examen',
    completed: false
  }
];

// Obtener todas las tareas
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

// Obtener una sola tarea por su ID
app.get('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(task => task.id === id);

  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ error: 'Tarea no encontrada' });
  }
});

// Crear una nueva tarea
app.post('/tasks', (req, res) => {
  const { description, completed } = req.body;

  if (!description || typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Datos de tarea no válidos' });
  }

  const newTask = {
    id: tasks.length + 1,
    description,
    completed
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Actualizar una tarea existente
app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { description, completed } = req.body;

  if (!description || typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Datos de tarea no válidos' });
  }

  const index = tasks.findIndex(task => task.id === id);

  if (index !== -1) {
    tasks[index] = { ...tasks[index], description, completed };
    res.status(200).json(tasks[index]);
  } else {
    res.status(404).json({ error: 'Tarea no encontrada' });
  }
});

// Eliminar una tarea
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(task => task.id === id);

  if (index !== -1) {
    tasks.splice(index, 1);
    res.status(200).json({ message: 'Tarea eliminada exitosamente' });
  } else {
    res.status(404).json({ error: 'Tarea no encontrada' });
  }
});

// Obtener tareas completas
app.get('/tasks/completed', (req, res) => {
  const completedTasks = tasks.filter(task => task.completed);
  res.status(200).json(completedTasks);
});

// Obtener tareas incompletas
app.get('/tasks/incomplete', (req, res) => {
  const incompleteTasks = tasks.filter(task => !task.completed);
  res.status(200).json(incompleteTasks);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
