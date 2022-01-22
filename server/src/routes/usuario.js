//En esta carpeta crearemos las rutas con las que  vamos a realizar las consultas

const{Router} =require('express')
const router = Router() 

const {createUsu, getUsu, getUsuario, deleteUsu, updatedUsu} = require('../controller/usuario.controller')
router.route('/')

    .get(getUsu)
    .post(createUsu)

router.route('./:id')

    .get(getUsuario) 
    .delete(deleteUsu)
    .put(updatedUsu)

    
module.exports = router;
