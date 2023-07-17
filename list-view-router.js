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

router.get('/completed', (req, res) => {
  const completedTasks = tasks.filter(task => task.completed);
  res.json(completedTasks);
});

router.get('/incomplete', (req, res) => {
  const incompleteTasks = tasks.filter(task => !task.completed);
  res.json(incompleteTasks);
});

module.exports = router;
