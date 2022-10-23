const d = document,
    btnsDelete = d.querySelectorAll(".btnDelete"),
    idBtnsDeleteArray = [],
    $template = d.getElementById("template-task").content,
    $fragment = document.createDocumentFragment(),
    $main = d.querySelectorAll(".principal");


d.addEventListener('click', e => {
    if(e.target.matches(".btnDelete")){
        eliminarTask(e);
    }
    if(e.target.matches(".saveTask")){
        insertarTask(e);
    }
});

btnsDelete.forEach(btn => {
    idBtnsDeleteArray.push(btn.dataset.id)
})

function insertarTask(e) {
    e.preventDefault();
    const title = d.getElementById('title').value,
        description = d.getElementById('descripcion').value,
        priority = d.getElementById('prioridad').valueAsNumber,
        status = 'sin resolver',
        expiration_date = d.getElementById('fecha_limite').value,
        creation_date = new Date(),
        date_of_resolution = null;
    //validar campos
    if (title.trim() === '' || description.trim() === '')
        alert("Debe rellenar los campos obligatorios")

    console.log(title, description, priority, status, expiration_date, creation_date, date_of_resolution)
    //mandar solicitud POST a /new
    fetch('/new', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ title, description, priority, status, expiration_date, creation_date, date_of_resolution })
    })
        .then(res => res.text())
        .then(data => {
            //mostrar mensaje de error/exito
            alert(data);
            addTaskDom(e);
        })

}

function eliminarTask(e) {
    const opcionesFetch = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ id: e.target.dataset.id })
    }

    fetch('/delete', opcionesFetch)
        .then(res => console.log(`Tarea eliminada: ${res.json()}`))
        .then(res => eliminarTaskDom(e))
        .then(res => idBtnsDeleteArray.pop())
}

function eliminarTaskDom(e) {
    let task = e.target.parentNode.parentNode.parentNode;
    task.remove();
}

function addTaskDom(e) {
    e.preventDefault();
    agregarBtnDelete();
    
    //ultimo boton que recien agrego mediante la funcion
    $template.querySelector('.btnDelete').dataset.id = idBtnsDeleteArray[idBtnsDeleteArray.length - 1];
    $template.querySelector('.task-tile').textContent = d.getElementById('title').value;
    $template.querySelector('.task-priority').textContent = prioridad(d.getElementById('prioridad').valueAsNumber);
    $template.querySelector('.task-dateExpired').textContent = d.getElementById('fecha_limite').value;
    $template.querySelector('.description').textContent = d.getElementById('descripcion').value;
    $template.querySelector('.task-creacion').textContent = formatear(new Date());
    $template.querySelector('.task-estado').textContent = null;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
    console.log($fragment)
    $main[0].appendChild($fragment);
}

function agregarBtnDelete() {
    idBtnsDeleteArray.push(Number(idBtnsDeleteArray[idBtnsDeleteArray.length - 1]) + 1);
}

function prioridad(numero){
    switch (numero) {
        case 1: return("BAJA")
        case 2: return("MEDIA")
        case 3: return("ALTA")
        default: return("SIN PRIORIDAD")
    }
}

function formatear(date) {
    let fecha = new Date(date);
    let year = fecha.getFullYear()
    let month = fecha.getMonth()
    let day = fecha.getDate()
    return `${day}/${month}/${year}`;
}
