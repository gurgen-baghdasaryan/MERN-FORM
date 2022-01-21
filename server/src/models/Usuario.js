// aqui crearemos el mmodelo para poder acceder a nuestra base de datos y tener la schema de la informacion que vamos a guardar en el API

const { Schema, model } = require('mongoose')

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    telefono: Number,
    email: String,
},

{
    timestamps: true,
})

module.exports = model('Usuario', usuarioSchema);