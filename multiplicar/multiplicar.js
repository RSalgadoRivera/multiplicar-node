// requires
const fs = require( 'fs' );
require( 'colors' );

let listarTabla = ( base, limite ) => {
    console.log( `\n===Tabla del ${ base.toString().blue }\n`.green.bold );
    console.log( `${ crearTabla( base, limite ) }`.rainbow );
    console.log( `================`.green.bold);
};

let crearTabla = ( base, limite ) => {
    let tabla = '';

    [ ...Array( limite ).keys() ]
    .map( ( i )=> tabla += `${ i + 1 } X ${ base } = ${ ( i + 1 ) * base  }\n` );

    return tabla;
};

let crearArchivo = ( base, limite ) => {
    return new Promise( ( resolve, reject ) => {
        if ( !Number( base ) ) {
            reject(`${ base } no es un número`);
            return;
        }

        let data = crearTabla( base, limite );

        fs.writeFile( `tablas/tabla-${ base }.txt`, data, err => {
            err ? reject( err ) : resolve( `tabla-${ base }-al-${ limite }.txt` );
        });
    });
};

module.exports = { crearArchivo, listarTabla };

// async function crearArchivo(base) {
//     if (!Number(base)) {
//         throw new Error(`${base} no es un número`);
//     }
//     let data = '';

//     for (let i = 0; i <= 10; i++) {
//         console.log(`${i} * ${base} = ${i * base}`);
//     }

//     fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
//         if (err) throw err;
//         else return `tabla-${base}.txt`;
//     });
// }
