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

    const todolist = document.getElementById('todo-list') //Obtengo el elemento lista del html
    todolist.innerHTML = '';//Limpio completamente elemto lista de html(le borro todo lo que muestra vizualmente)
    //recorro el arreglo todos
    for(let i = 0; i < todos.length; i++){
      todolist.innerHTML += '<li>'+todos[i]+'</li>' //por cada vez que se repita el ciclo for creo un <li> con el contendido de la lista todos
    }
  }
}
