// la carpeta controller tendra la logica/funcion   que permitan hacer  respuesta  a cada una de las peticiones que hagamos (la peticion GET POST PUT DELETE)
const usuarioCtrl = {}

const Usuario = require('../models/Usuario')

usuarioCtrl.getUsu = async(req, res) => {
    const usuarios = await Usuario.find() //aqui va a buscar y almacenar la informacion que venga desde nuestro cliente
    res.json(usuarios)
}

usuarioCtrl.createUsu = async(req, res) => {
    const {nombre, apellido, email, telefono, edad} = req.body;
    const newUsu = new Usuario({
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        edad: edad,

    }) 

    await newUsu.save();
    res.json({message:"The user has been created"})
}

usuarioCtrl.getUsuario = async(req, res) => {
    const usuario = await Usuario.findById(req.params.id)
    res.json(usuario)
}

usuarioCtrl.deleteUsu = async(req, res) => {
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({message: 'User has been deleted'}) 
}

usuarioCtrl.updatedUsu = async(req, res) => {
    const {nombre, apellido, email, telefono, edad} = req.body;
    await Usuario.findByIdAndUpdate(req.params.id, {
         nombre,
         apellido,
         email,
         telefono,
         edad,
    })
        res.json({message: 'The user has been updated'})
}

module.exports = usuarioCtrl; 
