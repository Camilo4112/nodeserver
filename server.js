const http = require('http');

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

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(tasks));
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
