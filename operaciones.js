const fs = require('fs');

function registrar(nombre, edad, tipo, color, enfermedad) {
    const data = fs.readFileSync('citas.json', 'utf-8');
    const citas = JSON.parse(data);
    const nuevaCita = { nombre, edad, tipo, color, enfermedad };
    citas.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
    console.log('Cita registrada');
}

function leer() {
    const data = fs.readFileSync('citas.json', 'utf-8');
    const citas = JSON.parse(data);
    console.log(citas);
}

module.exports = { registrar, leer };
