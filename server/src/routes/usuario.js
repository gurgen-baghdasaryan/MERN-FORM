//En este archivo crearemos las rutas con las que  vamos a realizar las consultas

const{Router} =require('express')
const router = Router() 

const {createUsu, getUsu, getUsuario, deleteUsu, updatedUsu} = require('../controller/usuario.controller')
router.route('/')

    .get(getUsu)
    .post(createUsu)

router.route('/:id') // Cuando enviamos un parámetro a través de la URL vamos a ejecutar get(), delete(), put()
                     // Cuando hacemos estas solicitudes debemos enviar un indicador para que podamos decirle a la API qué documento queremos

    .get(getUsuario)
    .delete(deleteUsu)
    .put(updatedUsu)

    
module.exports = router;
