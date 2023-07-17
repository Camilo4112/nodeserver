const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const users = [
  {
    id: 1,
    username: 'usuario1',
    password: 'contrasena1'
  },
  {
    id: 2,
    username: 'usuario2',
    password: 'contrasena2'
  }
];

const jwtSecret = process.env.JWT_SECRET || 'mysecretpassword';

const generateToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, jwtSecret, { expiresIn: '1h' });
};

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.user = user;
    next();
  });
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  const token = generateToken(user);
  res.json({ token });
});

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Ruta protegida alcanzada', user: req.user });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
