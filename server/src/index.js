require('dotenv').config() // Nos permite poder acceder a nuestra configuración de cadena de conexión en nuestra variable de entorno

const app = require('./app')
require('./database')


// Esta logica es para ejecutar el servidor
async function main(){

    await app.listen(app.get('port'))
    console.log('Server is running on port ', app.get('port'));
}

main();

