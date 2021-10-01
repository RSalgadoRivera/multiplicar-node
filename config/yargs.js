const opts = {
    base: {
        demand: true,
        alias: 'b',
        describe: 'Es la base de la tabla de multiplicar',
    },
    limite: {
        alias: 'l',
        default: 10,
        describe: 'Es el límite de la tabla de multiplicar',
    },
};

const argv = require( 'yargs' )
    .command( 'listar', 'Imprime en consola la tabla de multiplicar', opts )
    .command( 'crear', 'Crea un archo txt con la tabla', opts )
    .help().check( ( argv, options ) => {
        if ( isNaN(argv.base) )
            throw new Error( 'La base tiene que ser un número' );
        else if ( isNaN( argv.limite ) )
            throw new Error( 'El límite tiene que ser un número' );
         else 
            return true;        
    } ).argv;

module.exports = { argv };
