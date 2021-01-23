const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const render = () => {
    const taskTemplate = tasks.map(t => '<div id="tarea"><h2>' + t.titulo + '</h2><h3>'+ t.descripcion +'</h3><p>' + t.cuerpo + '</p></div>');
    console.log(taskTemplate)
    const listTask = document.getElementById('task-list')
    listTask.innerHTML = taskTemplate.join('');
    const elementos = document.querySelectorAll('#tarea');
    console.log(elementos)
    elementos.forEach((elemento, i) => {
      elemento.addEventListener('click', () => {
	elemento.parentNode.removeChild(elemento)
	tasks.splice(i, 1);
	actualizarTask(tasks);
	render();
      })
    })
}

const actualizarTask = (tasks) => {
  const stringTask = JSON.stringify(tasks);
  localStorage.setItem('tasks', stringTask);
}
window.onload = () => {
  render();
  const form = document.getElementById('form-task');
  form.onsubmit = (e) => {
    e.preventDefault();
    const titulo = document.getElementById('titulo-task')
    const descripcion = document.getElementById('descripcion-task')
    const cuerpo = document.getElementById('cuerpo-task')
    const task = {
      titulo: titulo.value,
      descripcion: descripcion.value,
      cuerpo: cuerpo.value,
    }
    tasks.push(task);
    actualizarTask(tasks);
    titulo.value = ''
    descripcion.value = ''
    cuerpo.value = ''    //console.log(tasks)
    render(); 
  }

  
}
