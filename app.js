const { argv } = require('./config/yargs');
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo =>
                console.log(`Archivo creado: ${colors.green(archivo)}`.blue),
            )
            .catch(err => console.error(err));
        break;
    default:
        console.log('comando no reconocido'.red);
}

// [...Array(10).keys()].map((number)=>data+=(`${number + 1} * ${base} = ${(number + 1) * base} \n`));
