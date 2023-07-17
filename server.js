const express = require('express');
const app = express();

// Middleware para validar métodos HTTP
const validateMethod = (req, res, next) => {
  if (!['GET', 'POST', 'PUT', 'DELETE'].includes(req.method)) {
    return res.status(400).json({ error: 'Método HTTP no válido' });
  }
  next();
};

// Middleware para manejar errores en el servidor
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Ocurrió un error en el servidor' });
};

app.use(express.json());

// Middleware a nivel de aplicación para validar métodos HTTP
app.use(validateMethod);

const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

// Middleware para manejo de errores en el servidor
app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
