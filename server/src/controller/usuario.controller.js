// El archivo controller tendra la logica/funcion   que permitan hacer  respuesta  a cada una de las peticiones que hagamos (la peticion GET POST PUT DELETE)
const usuarioCtrl = {}; 

const Usuario = require("../models/Usuario"); // Importamos nuestro modelo

usuarioCtrl.getUsu = async (req, res) => {
  const usuarios = await Usuario.find(); // Aqui va a buscar y almacenar la informacion que venga desde nuestro cliente
  res.json(usuarios);
};

// La logica para poder crear usuario (el metodo POST)
usuarioCtrl.createUsu = async (req, res) => {
  const { nombre, apellido, email, telefono, edad } = req.body;
  const newUsu = new Usuario({
    nombre: nombre,
    apellido: apellido,
    email: email,
    telefono: telefono,
    edad: edad,
  });

  await newUsu.save(); // Estamos almacenando un nuevo documento de lo que viene del Clienteee
  res.json({ message: "The user has been created" });
};

usuarioCtrl.getUsuario = async (req, res) => {
  console.log(req);
  try {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
  } catch (err) {
    console.log(err);
  }
};

usuarioCtrl.deleteUsu = async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ message: "User has been deleted" });
};

usuarioCtrl.updatedUsu = async (req, res) => {
  const { nombre, apellido, email, telefono, edad } = req.body;
  await Usuario.findByIdAndUpdate(req.params.id, {
    nombre,
    apellido,
    email,
    telefono,
    edad,
  });
  res.json({ message: "The user has been updated" });
};

module.exports = usuarioCtrl;
