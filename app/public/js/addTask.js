const d = document,
    btnsDelete = d.querySelectorAll(".btnDelete"),
    idBtnsDeleteArray = [],
    //$template = d.getElementById("template-task").content,
    $fragment = document.createDocumentFragment(),
    $main = d.querySelectorAll(".principal");


d.addEventListener('click', e => {
    if (e.target.matches(".btnDelete")) {
        eliminarTask(e);
    }
    if (e.target.matches(".saveTask")) {
        insertarTask(e);
    }

    if (e.target.matches(".checkTask")) {
        actualizarTarea(e);
        actualizarTaskDom(e)
    }

    if (e.target.matches(".relojProcess")) {
        actualizarTarea(e);
        actualizarReloj(e);
    }
});

//ACTUALIZAR TAREA
function actualizarTarea(e) {
    const id = e.target.dataset.id;
    let status = "sin resolver",
        priority = e.target.parentNode.parentNode.getElementsByClassName('task-priority')[0].textContent,
        priorityNumber = 1;

    if (e.target.checked) {
        status = "resuelta";
        e.target.nextSibling.src = "http://localhost:3000/img/completed_process.svg";
        e.target.setAttribute("disabled", "")
    } else if (e.target.src === "http://localhost:3000/img/not_process.svg") {
        status = 'resolviendo'
    } else if (e.target.src === "http://localhost:3000/img/in_process.svg") {
        status = "sin resolver"
    }

    if (priority == 'BAJA') priorityNumber = 1
    else if (priority == 'MEDIA') priorityNumber = 2
    else if (priority == 'ALTA') priorityNumber = 3
    else priorityNumber = null

    fetch(`/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            status,
            priority: priorityNumber
        })
    })
        .then(res => console.log("das"))
        .catch(err => alert(`Error al actualizar tarea ${err}`))
}

btnsDelete.forEach(btn => {
    idBtnsDeleteArray.push(btn.dataset.id)
})

//INSERTAR NUEVA TAREA
async function insertarTask(e) {
    e.preventDefault();
    const title = d.getElementById('title').value,
        description = d.getElementById('descripcion').value,
        priority = d.getElementById('prioridad').valueAsNumber,
        status = 'sin resolver',
        expiration_date = d.getElementById('fecha_limite').value,
        creation_date = new Date(),
        date_of_resolution = null,
        list_id = e.target.dataset.id;

        console.log(e.target)

    //validar campos
    if (title.trim() === '' || description.trim() === '')
        alert("Debe rellenar los campos obligatorios")

    //mandar solicitud POST a /new
    let guardar = await fetch('/new', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ title, description, priority, status, expiration_date, creation_date, date_of_resolution, list_id})
    })

    let datos = await guardar.json();
    //addTaskDom(e, datos.id);
}

function addTaskDom(e, id) {
    e.preventDefault();
    agregarBtnDelete();
    const newId = id;
    //ultimo boton que recien agrego mediante la funcion
    $template.querySelector('.btnDelete').dataset.id = newId;
    $template.querySelector('.checkTask').dataset.id = newId;
    $template.querySelector('.relojProcess').dataset.id = newId;

    $template.querySelector('.task-tile').textContent = d.getElementById('title').value;
    $template.querySelector('.task-priority').textContent = prioridad(d.getElementById('prioridad').valueAsNumber);
    $template.querySelector('.task-dateExpired').textContent = d.getElementById('fecha_limite').value;
    $template.querySelector('.description').textContent = d.getElementById('descripcion').value;
    $template.querySelector('.task-creacion').textContent = formatear(new Date());
    $template.querySelector('.task-estado').textContent = null;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
    $main[0].appendChild($fragment);
}

//ELIMINAR TAREA
function eliminarTask(e) {
    const opcionesFetch = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ id: e.target.dataset.id })
    }

    fetch('/delete', opcionesFetch)
        .then(res => console.log(`Tarea eliminada}`))
        .then(res => eliminarTaskDom(e))
        .then(res => idBtnsDeleteArray.pop())
}

function eliminarTaskDom(e) {
    let task = e.target.parentNode.parentNode.parentNode;
    task.remove();
}

//ACTUALIZAR TAREA
function actualizarTaskDom(e) {
    let padre = e.target.parentNode.parentNode.parentNode;
    padre.classList.toggle("resuelta")
}
function actualizarReloj(e) {
    if (e.target.src === "http://localhost:3000/img/not_process.svg") {
        e.target.src = "/img/in_process.svg";
    } else if (e.target.src === "http://localhost:3000/img/in_process.svg") {
        e.target.src = "/img/not_process.svg";
    }
}

//Otras funciones
function agregarBtnDelete() {
    idBtnsDeleteArray.push(Number(idBtnsDeleteArray[idBtnsDeleteArray.length - 1]) + 1);
}

function prioridad(numero) {
    switch (numero) {
        case 1: return ("BAJA")
        case 2: return ("MEDIA")
        case 3: return ("ALTA")
        default: return ("SIN PRIORIDAD")
    }
}

function formatear(date) {
    let fecha = new Date(date);
    let year = fecha.getFullYear()
    let month = fecha.getMonth()
    let day = fecha.getDate()
    return `${day}/${month}/${year}`;
}
