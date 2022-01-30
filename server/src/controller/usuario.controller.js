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

// Vamos a obtener un solo usuario
usuarioCtrl.getUsuario = async (req, res) => {
  console.log(req);
  try {
    const usuario = await Usuario.findById(req.params.id); // Le decimos que busque por el Id
    res.json(usuario); // Nos devuelve a traves de un json
  } catch (err) {
    console.log(err);
  }
};

// Logica para borrar el usuario por Id, que donde encuntre el parametro Id que nos venga por el ·req vamos a encontralo y lo vamos a eliminar de nuestro modelo
usuarioCtrl.deleteUsu = async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ message: "User has been deleted" });
};

// Aqui tenemos la peticion ·Put, lo va buscar dentro de nuestro modelo y lo va ·Actualizar
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
