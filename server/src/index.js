const app = require('./app')

//esta logica es para egecutar el servidor

async function main(){

    await app.listen(app.get('port'))
    console.log('Server is running on port ', app.get('port'));
}

main();

