document.getElementById('cargar').addEventListener('click', cargarDatos)

function cargarDatos() {
  // Crear objeto XMLHttpRequest
  const xhr = new XMLHttpRequest()
  // Abrir la conexión
  xhr.open('GET', 'datos.txt', true)
  // Una vez que carga

  // xhr.onload = function() { // Forma Nueva
  //   // 200: correcto || 403: prohibido || 404: No encontrado
  //   if(this.status === 200) { 
  //     document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`
  //   }
  // }
  xhr.onreadystatechange = function () { // Forma Nueva

    console.log(`Estado => ${this.readyState}`)

    if(this.readyState === 4 && this.status === 200) {
      console.log(this.responseText)
    }
    /** Ready Status
     * 0 - No inicializado
     * 1 - Conexión establecida
     * 2 - Recibido
     * 3 - Procesando
     * 4 - Respuesta lista
     */
  }


  xhr.send()
}