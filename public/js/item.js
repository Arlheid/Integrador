const agregar = document.querySelector('#agregar');
const quitar = document.querySelector('#quitar');
const quantity = document.querySelector('#quantity');

console.log(agregar, quitar, quantity);

agregar.addEventListener('click',() => quantity.value = Number(quantity.value)+1);

quitar.addEventListener('click',() => {
    if (quantity.value>=1)
    {
        quantity.value = Number(quantity.value)-1
    }
});

