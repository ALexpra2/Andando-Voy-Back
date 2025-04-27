require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./config/db');

const admin = require('firebase-admin');
const serviceAccount = require('./config/firebase')
const cookieParser = require('cookie-parser');

const session = require('express-session');


//Inicializamos admin, se inicia aqui antes de importar y ejecutar el middleware)
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

//Importamos las rutas desde el hub de rutas, si hay index en node no hace falta poner el nombre del archivo
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true               //permite enviar cookies
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false // Cambiar a true si se usa HTTPS
  }
}));

app.use('/api', routes);

dbConnection();

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});

module.exports = app;

