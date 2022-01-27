// Aqui crearemos el modelo para poder acceder a nuestra base de datos y tener la schema de la informacion que vamos a guardar en el API

const { Schema, model } = require('mongoose') // Una desestructuración para importar las funcionalidades (schema y model) de Mongoose 

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    telefono: Number,
    email: String,
},

{
    timestamps: true, // Se almacena de forma  automatica el tema de cuando se creo  y cuando fue la ultima vez que se actualizo el documento
})

module.exports = model('Usuario', usuarioSchema);