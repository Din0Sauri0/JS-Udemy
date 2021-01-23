window.onload = () =>{
  //Codigo para ejecutar
}//con windows.onload uno puede colocar la etiqueta de scrip al inicio del archivo html, luego ejecutara el codigo dentro de la funcion
console.log('intro al dom desde main.js')
const parrafo = document.getElementById('text')//obtiene un elemento del html mediante el id
console.log(parrafo.innerHTML) //Con innerHtml o innerText puedo acceder solo al texto dentro de la etiqueta

parrafo.innerHTML = 'texto actualizado' //cambia el texto del archivo HTML
parrafo.innerHTML = '<li>elemeto uno</li><li>elemento 2</li>'

