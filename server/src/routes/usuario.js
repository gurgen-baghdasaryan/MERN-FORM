//En este archivo crearemos las rutas con las que  vamos a realizar las consultas

const{Router} =require('express')
const router = Router() 

const {createUsu, getUsu, getUsuario, deleteUsu, updatedUsu} = require('../controller/usuario.controller')
router.route('/') // Importamos las funcionalidades desde nustro controller

    .get(getUsu) // Es nuestra peticon global
    .post(createUsu) // Es la peticon Post donde tenemos la logica para crear usuario 

router.route('/:id') // Cuando enviamos un parámetro a través de la URL vamos a ejecutar get(), delete(), put()
                     // Cuando hacemos estas solicitudes debemos enviar un indicador para que podamos decirle a la API qué documento queremos

    .get(getUsuario)
    .delete(deleteUsu)
    .put(updatedUsu)

    
module.exports = router;
