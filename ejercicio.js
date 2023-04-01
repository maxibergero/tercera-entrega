const formulario = document.querySelector('#ingresar')
const inputNombre = document.querySelector('#nombre')
const inputApellido = document.querySelector('#apellido')
const titulo = document.querySelector('#titulo')

const Usuario = document.querySelectorAll('.cardProducto')


//click sobre el boton ingresar
ingresar.onsubmit = (e) => {
    e.preventDefault()
    const infoUsuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
    }



    localStorage.setItem('infoUsuario', JSON.stringify(infoUsuario))
    ingresar.remove()


}

// mirar si en storage existe infoUsuario
//const infoUsuario = JSON.parse(localStorage.getItem('infoUsuario'))
const infoUsuario = localStorage.getItem('infoUsuario')
const infoUsuarioJS = JSON.parse(infoUsuario)
if (infoUsuario) {

    titulo.innerText = `Bienvenido confirma tu identidad`
}

class Transportista {
    constructor(id, nombre, apellido, dni) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;

    }
}

const transportistas = [
    new Transportista(1, 'maxi', 'bergero', 33162258),
    new Transportista(2, 'lucas', 'amaya', 33254125),
    new Transportista(3, 'gaston', 'barberis', 35542574),
    new Transportista(4, 'flavio', 'vazquez', 32564874),
    new Transportista(5, 'lucio', 'cordoba', 33521458),
    new Transportista(6, 'alexander', 'bergero', 32654213),
    new Transportista(7, 'mariana', 'cepeda', 32652148),
    new Transportista(8, 'maxi', 'vede', 32654128),
    new Transportista(9, 'martin', 'comamala', 30214874),
    new Transportista(10, 'luciano', 'muzo', 34581234)
];

transportistas.forEach((t) => {
    Trans.innerHTML += `<div class="card cardProducto">
      <div class="card-body">
        <h5 class="card-title">Nombre:${t.nombre}</h5>
        <h5 class="card-title">Apellido:${t.apellido}</h5>
        <button id="${t.id}" class="btn btn-primary">Entrar</button>
      </div>
    </div>`
});

const carrito = [];

const botonesAgregar = document.querySelectorAll('.btn-primary');
botonesAgregar.forEach((boton) => {
    boton.onclick = () => {

        const transportistaSeleccionado = transportistas.find((prod) => prod.id === parseInt(boton.id));

        const prodCarrito = {
            id: transportistaSeleccionado.id,
            nombre: transportistaSeleccionado.nombre,
            apellido: transportistaSeleccionado.apellido,
            dni: transportistaSeleccionado.dni,
        }

        const indexProd = carrito.findIndex((prod) => prod.id === prodCarrito.id)
        if (indexProd === -1) {
            carrito.push(prodCarrito)
            
        } else {
            alert('ingreso a la planta')
        }
        console.log(carrito)
    }
});

  
  
  
  



const botonFinalizar = document.querySelector('#finalizar')
const thead = document.querySelector('#thead')
const tbody = document.querySelector('#tbody')

botonFinalizar.onclick = () => {

    carrito.forEach(prod => {
        tbody.innerHTML += `
        <tr>
          <td>${prod.nombre}</td>
          <td>${prod.apellido}</td>
          <td>${prod.dni}</td>
          <td>${prod.id}</td>
        </tr>
        `
    })

}


