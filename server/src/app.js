const express = require('express');
const cors = require('cors')

const app = express(); // Esta constante almacena lo que ya requerimos de express


//configuracion

app.set('port', process.env.PORT || 4000) //Aquí le decimos a la constante  app  que nos guarde una variable llamada port y como segundo parámetro le decimos en qué puerto el servidor tiene que escuchar/ejecutar

//middlewares 
app.use(cors()) //Cors Es un módulo que nos permite tener una relación entre nuestro servidor backend y frontend
app.use(express.json()) // para que nos envíe un json



//Ruta para nuestra API de usuarios
app.use('/api/usuarios', require('./routes/usuario'))

module.exports = app;