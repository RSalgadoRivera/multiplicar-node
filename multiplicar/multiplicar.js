// requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log(`\n===Tabla de ${base}===\n`.green);
    console.log(`${crearTabla(base, limite)}`.blue);
    console.log(`======================`.green);
};

let crearTabla = (base, limite) => {
    let tabla = '';

    for (let i = 1; i <= limite; i++) {
        tabla += `${i} * ${base} = ${i * base}\n`;
    }
    return tabla;
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }

        let data = crearTabla(base, limite);

        fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
            if (err) reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`);
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
