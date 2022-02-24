


let user = prompt('Ingresa aquí tu peso en Kg: ');
let masa = parseFloat(user);
let gv_tierra = 9.8;
let gv_marte = 3.7;
let gv_jupiter = 24.8;

let masaFinal;

masaFinal = (masa * gv_marte) / gv_tierra;
masaFinal = parseFloat(masaFinal.toFixed(2));
document.write('Your weight in Mars is: <strong>' + masaFinal + ' kilos</strong>');

