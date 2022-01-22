const express = require('express');
const cors = require('cors')

const app = express();


//configuracion

app.set('port', process.env.PORT || 4000)

//middlewares 
app.use(cors()) //cors es un modulo que nos permite  que haya una relacion entre nuesro servidor de backend y en frontend 
app.use(express.json())// para que nos envie un json 

//rutas 
app.get('/', (req, res)=>{
    res.send('Welcome to Api Rest full')
})

//ruta para nuestra api de usuarios
app.use('/api/usuarios', require('./routes/usuario'))

module.exports = app;