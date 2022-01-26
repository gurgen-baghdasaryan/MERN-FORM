require('dotenv').config() //nos permite  poder  axeder a la configuracion de nuestra cadena de conexion en nuestra variable del entorno

const app = require('./app')
require('./database')


//esta logica es para ejecutar el servidor
async function main(){

    await app.listen(app.get('port'))
    console.log('Server is running on port ', app.get('port'));
}

main();

