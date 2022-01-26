// Cadena de conexion para poder conectar nuestro servidor con nuestra base de datos

const  mongoose = require('mongoose')

const URI = process.env.MONGODB_URI 
            ? process.env.MONGODB_URI
            : 'mongodb://localhost/dbtest'

mongoose.connect(URI) // Se conecta atraves de URI que es la variable que nosotros estamos conectando con la informacion que guardamos en nuestro variable del entorno.

const connection = mongoose.connection

connection.once('open',()=>{
    console.log('The database has been connected successfully: ', URI);
})