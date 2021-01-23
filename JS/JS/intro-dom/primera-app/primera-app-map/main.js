const todos = []
window.onload = () => {
  
  //obtengo el formulario
  const form = document.getElementById('todo-form');
  //modificar el evento submit del boton enviar del archivo html
  form.onsubmit = (e) => {
    //detiene el comportamiento por defecto del formulario, que es el de refrescar
    e.preventDefault();
    //obtengo el elemento html con el id todo
    const todo = document.getElementById('todo')
    //del elemento todo, obtengo solo el texto y se guarda en la variable
    const todoText = todo.value;
    todo.value = '' //limpiar el texto del elemento html
    todos.push(todoText) //Pasa el valor de todoText al array todos
    console.log(todoText)
    //buiscar al referencia de la lista (esta referencia se busca afuera del for para que no se busque por cada repeticion del ciclo)i
    const todolist = document.getElementById('todo-list') //Obtengo el elemento lista del html
    //Map permite recorrer un arreglo, donde t representa al elemento obtenido en cada ciclo y a este le aplica la funcion que uno defina en esta
    const todosTemplate = todos.map(t => '<li>'+ t + '</li>')
    console.log(todosTemplate)
    todolist.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li') //queryselectorall permite ir a buscar por id, al pasarle el li buscara en el id todos los elementos li y los obtendra
    elementos.forEach((elemento, i) => { //Recorre elementos y obtengo los elementos junto al indice
      console.log(elemento, i)
      //asignar evento a cada elementos
      elemento.addEventListener('click', () => {
	
      })
    } )
  }
}
