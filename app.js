
const cuadrado = document.querySelector('.negro');

const botonAzul = document.querySelector('.btn-primary');

const botonVerde = document.querySelector('.btn-success');

const botonRojo = document.querySelector('.btn-danger');


botonAzul.addEventListener('click', () =>{

    console.log('me diste click');  

    cuadrado.classList.toggle('cambioAzul');

});

botonVerde.addEventListener('click', () =>{

    console.log('me diste click');  

    cuadrado.classList.toggle('cambioVerde');

});

botonRojo.addEventListener('click', () =>{
    console.log('me diste click');  

    cuadrado.classList.toggle('cambioRojo');
})