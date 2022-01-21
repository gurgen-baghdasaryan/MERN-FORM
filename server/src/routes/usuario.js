//En esta carpeta crearemos las rutas con las que  vamos a realizar las consultas

const{Router} =require('express')
const router = Router() 

router.route('/')

    .get()
    .post()

router.route('./:id')

    .get()
    .delete()
    .put()

module.exports = router;
