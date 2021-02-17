const yargs = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption : true,
                    describe: 'Es la base para multiplicar'
                })
                .check((argv,options) =>{
                    if (isNaN(argv.b)) {
                        throw 'La base tiene que ser numerico'
                        
                    }
                    return true;
                } )
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true
                })
                .argv;

module.exports = yargs;