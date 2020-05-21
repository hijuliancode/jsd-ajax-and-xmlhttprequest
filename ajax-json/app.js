// Variables
  const btnEmpleado = document.getElementById('boton1')
  const listaEmpleado = document.getElementById('empleado')

  const btnEmpleados = document.getElementById('boton2')
  const listaEmpleados = document.getElementById('empleados')

// EventListeners
btnEmpleado.addEventListener('click', ajaxEmpleado)
btnEmpleados.addEventListener('click', ajaxEmpleados)

// Functions
function ajaxEmpleado() {
  let empleado;
  xhr = new XMLHttpRequest()
  xhr.open('GET', 'empleado.json', true)
  xhr.onload = function () {
    if (this.status === 200) {
      empleado = JSON.parse(this.responseText)
      mostrarEmpleado(empleado)
    } else {
      console.log('Error al traer la información del empleado')
    }
  }
  xhr.send()
}

function ajaxEmpleados() {}

function mostrarEmpleado(empleado) {
  listaEmpleado.innerHTML = templateEmpleado(empleado)
}

function mostrarEmpleados() {
  console.log('mostrarEmpleados')
}

function templateEmpleado(empleadoInfo) {
  const htmlTemplate = `
    <ul>
      <li>ID: ${empleadoInfo.id}</li>
      <li>Nombre: ${empleadoInfo.nombre}</li>
      <li>Empresa: ${empleadoInfo.empresa}</li>
      <li>Actividades: ${empleadoInfo.trabajo}</li>
    </ul>
  `;
  return htmlTemplate;
}