const inputNombre = document.getElementById('nombre');
const inputCantidad = document.getElementById('cantidad');
const btnAgregar = document.getElementById('agregar');
const listaGastos = document.getElementById('lista-gastos');
const vacio = document.getElementById('vacio');
const spanGasto = document.getElementById('cifra-total');
const btnEliminar = document.getElementById('eliminar-gasto');

const arrGastos = [];

btnAgregar.addEventListener('click', e => {
  e.preventDefault();

  if (inputNombre.value && inputCantidad.value) {
    arrGastos.push({
      id: arrGastos.length,
      nombre: inputNombre.value,
      cantidad: Number(inputCantidad.value),
      html: `<li class="gasto"><p>${this.nombre}: <span class="cifra">${
        this.cantidad
      }</span> CUP</p><button onclick="${eliminarGasto(
        this.id
      )}" class="eliminar-gasto"><img src="close-icon.png"></button></li>`,
    });

    console.log(arrGastos);

    listaGastos.innerHTML = '';
    arrGastos.forEach(gasto =>
      listaGastos.insertAdjacentHTML('afterbegin', gasto.html)
    );

    const gastoTotal = arrGastos.reduce(
      (acc, gasto) => acc + gasto.cantidad,
      0
    );
    spanGasto.textContent = gastoTotal;
  }

  inputNombre.value = '';
  inputCantidad.value = '';
});

const eliminarGasto = function (index) {
  arrGastos = arrGastos.filter(gasto => gasto.id !== index);
};
