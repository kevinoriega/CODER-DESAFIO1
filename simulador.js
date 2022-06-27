function sumar(number1, number2) {
    let suma = number1 + number2;
    return suma;
}

function operacion(m,d) {
    return   m * tasa / d
}
function mostrar(mensaje) {
    console.log(mensaje);
}





function plazofijo(m, d, cambio) {

    let resultado = 0;

    switch (cambio) {
        case "p":
            
           rdo=operacion(m,d).toFixed(2);  
           resultado = sumar(m, rdo);
            console.log( 'El interes a percibir es de  $' +rdo+' al cabo de '+ dias+' dias su capital sera $')
            break;
        case "d":
           
           rdo=operacion(m,d).toFixed(2);
            resultado = sumar(m, rdo);
            console.log( 'El interes a percibir es de  $' +rdo+' al cabo de '+ dias+' dias su capital sera $'+resultado)
            break;
       
        default:
            console.log('Dato no válido');
    }
return resultado;
}
let monto = parseInt(prompt('Ingrese el monto a invertir '));
let dias = parseInt(prompt('Ingrese la cantidad de dias '));
let tasa=parseFloat(prompt('ingrese la tasa ofrecida '))
let tipo = prompt('Ingresa la moneda,  P para peso o D para dolar')
mostrar(plazofijo(monto,dias,tipo));
 