const express = require('express');
const router = express.Router();

let tasks = [
  {
    id: '1',
    description: 'Hacer la compra',
    completed: false
  },
  {
    id: '2',
    description: 'Lavar el auto',
    completed: true
  },
  {
    id: '3',
    description: 'Estudiar para el examen',
    completed: false
  }
];

// Middleware para validar solicitudes POST y PUT
const validateTaskData = (req, res, next) => {
  const { description, completed } = req.body;
  if (req.method === 'POST' && (!description || typeof completed !== 'boolean')) {
    return res.status(400).json({ error: 'Información de tarea no válida' });
  }
  if (req.method === 'PUT' && (Object.keys(req.body).length === 0 || !description || typeof completed !== 'boolean')) {
    return res.status(400).json({ error: 'Información de tarea no válida' });
  }
  next();
};

router.post('/create', validateTaskData, (req, res) => {
  const { description, completed } = req.body;
  const newTask = { id: String(tasks.length + 1), description, completed };
  tasks.push(newTask);
  res.json(newTask);
});

router.put('/:id', validateTaskData, (req, res) => {
  const id = req.params.id;
  const { description, completed } = req.body;
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], description, completed };
    res.json(tasks[index]);
  } else {
    res.status(404).json({ error: 'Tarea no encontrada' });
  }
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  tasks = tasks.filter(task => task.id !== id);
  res.json({ message: 'Tarea eliminada exitosamente' });
});

module.exports = router;
