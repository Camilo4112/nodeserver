const express = require('express');
const router = express.Router();

const tasks = [
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

// Middleware para validar parámetros
const validateParams = (req, res, next) => {
  const id = req.params.id;
  if (!id || isNaN(id)) {
    return res.status(400).json({ error: 'Parámetro no válido' });
  }
  next();
};

router.get('/completed', (req, res) => {
  const completedTasks = tasks.filter(task => task.completed);
  res.json(completedTasks);
});

router.get('/incomplete', (req, res) => {
  const incompleteTasks = tasks.filter(task => !task.completed);
  res.json(incompleteTasks);
});

// Agregar el middleware para validar parámetros a la ruta
router.get('/:id', validateParams, (req, res) => {
  const id = req.params.id;
  const task = tasks.find(task => task.id === id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Tarea no encontrada' });
  }
});

module.exports = router;
