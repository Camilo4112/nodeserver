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

router.post('/create', (req, res) => {
  const { id, description, completed } = req.body;
  const newTask = { id, description, completed };
  tasks.push(newTask);
  res.json(newTask);
});

router.delete('/:id', (req, res) => {
  const taskId = req.params.id;
  tasks = tasks.filter(task => task.id !== taskId);
  res.json({ message: 'Tarea eliminada exitosamente' });
});

router.put('/:id', (req, res) => {
  const taskId = req.params.id;
  const { description, completed } = req.body;

  tasks = tasks.map(task =>
    task.id === taskId ? { ...task, description, completed } : task
  );

  res.json({ message: 'Tarea actualizada exitosamente' });
});

module.exports = router;
