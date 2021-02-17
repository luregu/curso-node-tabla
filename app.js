const yargs = require('./config/yargs');
const {crearArchivo} = require('./helper/multiplicar');
//Trabajar con argumentos desde la consola
// const  [, , base] = process.argv;
// const [, tabla] = base.split('=');
// console.log(tabla);
// console.log(process.argv);
// console.log(yargs);
crearArchivo(yargs.b, yargs.l, yargs.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log('aca', err))
