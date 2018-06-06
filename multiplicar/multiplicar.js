//requireds
const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//const fs = require('./fs');

let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('=================='.green);
    if (!Number(base)) {
        reject(`El valor introducido a la base ${base} no es un numero`);
        return;
    }
    if (!Number(limite)) {
        reject(`El valor introducido al limite ${base} no es un numero`);
        return;
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += ` El resultado de ${base} * ${i} = ${i*base} \n`;
    }

    console.log(data);
}
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += ` El resultado de ${base} * ${i} = ${i*base} \n`;
        }

        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(colors.red(`tabla-${base}.txt`))
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}