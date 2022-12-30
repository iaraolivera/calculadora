window.addEventListener('load',() => {
const btnNumericos = document.getElementsByClassName('boton');
const valorAnterior=document.querySelector('#valorAnterior');
const valorActual=document.querySelector('#valorActual');


const arrayBotones = Array.from(btnNumericos);
arrayBotones.forEach((button)=>{
    button.addEventListener('click', ()=>{
        calculadora(button, valorActual);
    })
})



});

const calculadora = (button, valorActual) =>{
    switch(button.innerHTML){
  
        case'AC':
        borrar(valorActual)
        break;
        case '=':
            calcular(valorActual);
            break;
        default:
            actualizar(valorActual, button);
       
}
}

function calcular(valorActual){
    valorActual.innerHTML = eval( valorActual.innerHTML)
}
function actualizar(valorActual, button){
    if (valorActual.innerHTML == 0){
        valorActual.innerHTML = '';
    }
    valorActual.innerHTML +=button.innerHTML;
}

function borrar(valorActual){
    valorAnterior.innerHTML=eval( valorActual.innerHTML);
   
    valorActual.innerHTML = 0;
    
    
}