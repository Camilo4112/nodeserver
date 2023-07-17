const express = require('express');
const app = express();

const tasks = [
  {
    id: '123456',
    description: 'Walk the dog',
    isCompleted: false
  }
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
