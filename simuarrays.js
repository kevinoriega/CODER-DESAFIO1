function sumar(number1, number2) {
    let suma = number1 + number2;
    return suma;
}

function operacion(m,d) {
    return   m * tasa / d
}


  let resultado = 0;


function plazofijo(m, d, cambio) {

  

    switch (cambio) {

        case "p":
            
           rdo=operacion(m,d);  
           resultado = sumar(m, rdo);
            console.log( 'El interes a percibir es de  $' +rdo.toFixed(2)+' al cabo de '+ dias+' dias')
            break;
        case "d":
           
           rdo=operacion(m,d);
            resultado = sumar(m, rdo);
            console.log( 'El interes a percibir es de  U$D ' +rdo.toFixed(2)+' al cabo de '+ dias+' dias ')
            break;
       
        default:
            console.log('Dato no válido');
    }
return resultado;
}


let monto = parseInt(prompt('Ingrese el monto a invertir '));
let dias = parseInt(prompt('Ingrese la cantidad de dias '));
let tasa=parseFloat(prompt('ingrese la tasa ofrecida '))
let tipo = prompt('Ingresa la moneda,  P para peso o D para dolar').toLowerCase()




function datos(mo,di,ta){
    this.monto=mo;
    this.dias=di;
    this.tasa=ta;
   

}

let jj= new datos(monto,dias,tasa);
console.log(jj);
plazofijo(monto,dias,tipo);
const opereta=['MONTO=',monto,'  DIAS=', dias,' TASA=', tasa,' CAPITAL FINAL=']
opereta.push( resultado.toFixed(2))

console.log('RESUMEN= '+opereta);

 