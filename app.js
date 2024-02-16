 let numeroSecreto;
 let intentos;
 let listaNumeros = [];
 let numeroMaximo =10;

condicionesIniciales();

function verificarIntento (){
    let numeroUsuario= parseInt(document.getElementById('numeroUsu').value);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Felicidades, has adivinado el numero secreto ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);  
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        numeroUsuario > numeroSecreto ? asignarTextoElemento('p', 'El numero secreto es menor') : asignarTextoElemento('p', 'El numero secreto es mayor');
        intentos++;      
        limpiarCaja();
    }

}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
  
}

function limpiarCaja(){
    document.querySelector('#numeroUsu').value = '';
}

function generarNumeroSecreto (){
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    
    if(listaNumeros.length === numeroMaximo){

        asignarTextoElemento('p', 'Se han agotado todos los numeros');
    }else{
        if(listaNumeros.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function condicionesIniciales(){
asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', `Adivina un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
 intentos =1;
}