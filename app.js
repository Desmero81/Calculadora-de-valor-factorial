let numeroDado = 0;
let contador = 0;
let resultado = 1;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Calculadora de valor factorial (n!)');
    asignarTextoElemento('p','Ingresa cualquier número del 1 al 100');
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    document.getElementById('valorUsuario').removeAttribute('disabled'); // Habilitar el input del usuario
}

function numeroUsuario() {
    
    numeroDado = parseInt(document.getElementById('valorUsuario').value);
    contador = numeroDado;
    console.log(typeof(numeroDado));
    console.log(`"El número de usuario es: ${numeroDado}"`);
    asignarTextoElemento('p',`El número de usuario es: ${numeroDado}`);
    limpiarCaja();
    calcularFactorial();
    return (numeroDado);
}

function calcularFactorial(){
    if (numeroDado > 0) {
        mayorCero();
    } else if (numeroDado < 0) {
        asignarTextoElemento('p',`¡El valor factorial de ${numeroDado} está indeterminado para números negativos!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('valorUsuario').setAttribute('disabled', 'true'); // Deshabilitar el input del usuario
      } else {
        asignarTextoElemento('p','El valor factorial de 0 es 1');
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('valorUsuario').setAttribute('disabled', 'true'); // Deshabilitar el input del usuario
    } 
    
} 

function mayorCero() {
    while (numeroDado > 1){    
        resultado *= numeroDado;
        numeroDado--; 
    }
    asignarTextoElemento('p',`El valor factorial de ${contador} es ${resultado}`);
    console.log(resultado);
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('valorUsuario').setAttribute('disabled', 'true'); // Deshabilitar el input del usuario
    return(resultado);
}

function reiniciarCalculo() {
    numeroDado = 0;
    contador = 0;
    resultado = 1;
    condicionesIniciales();
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; 
}

condicionesIniciales();