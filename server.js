const express = require('express');
const app = express();

const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

app.use(express.json());

// Se implemento los routers en el servidor principal
app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
