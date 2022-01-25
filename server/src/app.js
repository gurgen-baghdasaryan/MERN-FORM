const express = require('express');
const cors = require('cors')

const app = express(); // esta constante almacena lo que ya requerimos de express


//configuracion

app.set('port', process.env.PORT || 4000) //aquí le decimos a la constante  app  que nos guarde una variable llamada port y como segundo parámetro le decimos en qué puerto el servidor tiene que escuchar/ejecutar

//middlewares 
app.use(cors()) //cors Es un módulo que nos permite tener una relación entre nuestro servidor backend y frontend
app.use(express.json())// para que nos envie un json 

//rutas 
app.get('/', (req, res)=>{
    res.send('Welcome to Api Rest full')
})

//ruta para nuestra api de usuarios
app.use('/api/usuarios', require('./routes/usuario'))

module.exports = app;