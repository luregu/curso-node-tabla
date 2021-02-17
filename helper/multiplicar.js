const fs = require('fs');

//con asyn por defecto esto devuelve una promesa
const crearArchivo = async(tabla, l, hasta) => {
    try {
        console.log('l', l)
        console.log('Entra funcion')
        console.log('===============');
    console.log('Tabla del ', tabla);
    console.log('===============');

    let salida = '';
    for (let index = 1; index <= hasta; index++) {
        let resultado = tabla * index;
        salida += tabla + 'x' + index + '=' + resultado + '\n';
    }
    
    if (l) {
        console.log(salida); 
    }
    
    const nombreDeArchivo = `./salida/tabla-${tabla}.txt`;
    fs.writeFileSync(nombreDeArchivo,salida);
    
    console.log('Se ha creado el archivo ', nombreDeArchivo);

    return nombreDeArchivo;

    } catch (error) {
        console.log('Entra en error')
        console.log('error ', error)
        throw error;
    }

    
}


//exportar este objeto
module.exports = {
    crearArchivo
}