// la carpeta controller tendra la logica/funcion   que permitan poder hacer  respuesta  a cada una de las peticiones que hagamos (la peticion GET POST PUT DELETE)
const usuarioCtrl = {}

const Usuario = require('../models/Usuario')

usuarioCtrl.getUsu = async(req, res) => {
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

usuarioCtrl.createUsu = async(req, res) => {
    const {nombre, apellido, email, telefono, edad} = req.body;
    const newUsu = new Usuario({
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        email: email,
        telefono: telefono,
        edad: edad,

    }) 

    await newUsu.save();
    res.json({message:"The user has been created"})
}

usuarioCtrl.getUsu = async(req, res) => {
    
}

usuarioCtrl.getUsu = async(req, res) => {
    
}

usuarioCtrl.getUsu = async(req, res) => {
    
}