const inputNombre = document.getElementById('nombre');
const inputCantidad = document.getElementById('cantidad');
const formulario = document.getElementById("formulario");
const btnAgregar = document.getElementById('agregar');
const listaGastos = document.getElementById('lista-gastos');
const vacio = document.getElementById('vacio');
const spanGasto = document.getElementById('cifra-total');
const btnEliminar = document.getElementById('eliminar');

let arrGastos = [];

const calcularTotal = function() {
  return arrGastos.reduce((acc, gasto) => acc + gasto.cantidad, 0);
}

const actualizarUI = function (){

  listaGastos.innerHTML = '';
  inputNombre.value = '';
  inputCantidad.value = '';
  
  arrGastos.forEach(gasto => {
    const li = `<li class="gasto"><p>${gasto.nombre}: <span class="cifra">${
        gasto.cantidad
      }</span> CUP</p><button onclick="eliminarGasto(${gasto.id})" class="eliminar-gasto"><img src="close-icon.png"></button></li>`;
      
      listaGastos.insertAdjacentHTML('afterbegin',li);
  });
  spanGasto.textContent = calcularTotal();
  
  if (arrGastos.length === 0) {
    listaGastos.insertAdjacentHTML('afterbegin', `<li id="vacio" class="gasto">No hay gastos registrados</li>`)
  }
}

const eliminarGasto = function(id) {
  arrGastos = arrGastos.filter(gasto => gasto.id !== id);
  actualizarUI();
}

formulario.addEventListener('submit', e => {
  e.preventDefault();
  
  const nombre = inputNombre.value;
  const cantidad = Number(inputCantidad.value);
  
  if (nombre && cantidad) {
    arrGastos.push({
      id: Date.now(),
      nombre,
      cantidad,
    });
    
    actualizarUI();
  }
});