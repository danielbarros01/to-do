const d = document,
    btnsDelete = d.querySelectorAll(".btnDelete"),
    idBtnsDeleteArray = [],
    $template = d.getElementById("template-task").content,
    $fragment = document.createDocumentFragment(),
    $main = d.querySelectorAll(".principal");


d.addEventListener('click',async  e => {
    if (e.target.matches(".btnDelete")) {
        eliminarTask(e);
        //actualizarStatusList(e);
    }
    if (e.target.matches(".saveTask")) {
        insertarTask(e);
        //actualizarStatusList(e);
    }

    if (e.target.matches(".checkTask")) {
        actualizarTarea(e);
        actualizarTaskDom(e)
        actualizarStatusList(e);
    }

    if (e.target.matches(".relojProcess")) {
        actualizarTarea(e);
        actualizarReloj(e);
        actualizarStatusList(e); //va al ultimo porque necesita checkear despues de que se muevan en el dom
    }
});

function actualizarStatusList(e) {
    let $listTasks = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;

    //para saber si hay alguna tareas ya listas
    //entre al tasks resueltas
    let listaResueltas = $listTasks.querySelector(".tasks-resueltas");
    let tieneResueltas = listaResueltas.hasChildNodes();
    console.log('hay tareas ya resueltas?', tieneResueltas);
    //--------------

    //para saber si hay alguna tarea en proceso
    let listaResolviendo = $listTasks.querySelector('.tasks-resolviendo');
    let tieneResolviendo = listaResolviendo.hasChildNodes();
    console.log('hay tareas resolviendose?', tieneResolviendo);
    //

    //para saber si hay alguna tarea sin resolver
    let listaSinResolver = $listTasks.querySelector('.tasks-sin-resolver');
    let tieneSinResolver = listaSinResolver.hasChildNodes();
    console.log('hay tareas sin resolver?', tieneSinResolver);
    //

    const id = $listTasks.parentNode.dataset.section_list_id;
    let status = '';
    let date_of_resolution;

    //Si tiene al menos una tarea resolviendo, la lista se esta resolviendo
    if (tieneResolviendo) {
        status = 'resolviendo';
    }
    //Si tengo tareas no resueltas, pero ya resolvi un par, estoy resolviendo la lista
    else if (tieneSinResolver && tieneResueltas) {
        status = 'resolviendo';
    }
    //Si no tiene tareas resolviendose, pero tiene tareas sin resolver, la lista no se esta resolviendo ni resuelta 
    else if (tieneSinResolver) {
        status = 'sin resolver';
    }
    //si  no tengo tareas sin resolver, sin resolviendo, y hay resueltas, es porque todas estan resueltas
    else if (tieneResueltas) {
        status = 'resuelta';
        date_of_resolution = new Date();
    }

    console.log(status)

    fetch(`/list/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            status, date_of_resolution
        })
    })

}

//ACTUALIZAR TAREA
function actualizarTarea(e) {
    const id = e.target.dataset.id;
    let status = "sin resolver",
        priority = e.target.parentNode.parentNode.getElementsByClassName('task-priority')[0].textContent,
        priorityNumber = 1,
        date_of_resolution;

    if (e.target.checked) {
        status = "resuelta";
        e.target.nextSibling.src = "http://localhost:3000/img/completed_process.svg";
        e.target.setAttribute("disabled", "")
        date_of_resolution = new Date();
    } else if (e.target.src === "http://localhost:3000/img/not_process.svg") {
        status = 'resolviendo'
    } else if (e.target.src === "http://localhost:3000/img/in_process.svg") {
        status = "sin resolver"
    }

    if (priority == 'BAJA') priorityNumber = 1
    else if (priority == 'MEDIA') priorityNumber = 2
    else if (priority == 'ALTA') priorityNumber = 3
    else priorityNumber = null

    fetch(`/task/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            status,
            priority: priorityNumber,
            date_of_resolution
        })
    })
        .then(res => console.log(''))
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

    //validar campos
    if (title.trim() === '' || description.trim() === '')
        return alert("Debe rellenar los campos obligatorios")

    if(expiration_date == ''){
        return alert('Fecha requerida')
    }

    try {
        //mandar solicitud POST a /new
        let guardar = await fetch('/task/new', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ title, description, priority, status, expiration_date, creation_date, date_of_resolution, list_id })
        })

        let datos = await guardar.json();
        addTaskDom(e, datos.id);
        clearInputs();
        //ocultar vista de agregar
        (() => {
            e.target.parentNode.parentNode.parentNode.parentNode.classList.toggle('ocultar-con-lugar');
            d.querySelector('.panel-btn').classList.toggle("ocultar-con-lugar");
            d.querySelector('.principal').classList.toggle("ocultar");
        })()
    } catch (error) {
        alert('Error al insertar datos')
    }
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
    $template.querySelector('.task-dateExpired').textContent = formatear(d.getElementById('fecha_limite').value);
    $template.querySelector('.description').textContent = d.getElementById('descripcion').value;
    $template.querySelector('.task-creacion').textContent = formatear(new Date());
    $template.querySelector('.task-estado').textContent = null;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);

    //A cual lista se agregara
    let list_id = e.target.dataset.id;
    let sections = d.querySelectorAll(`[data-section_list_id]`)

    let sectionEspecifica = Array.from(sections).filter((elemento) => {
        return elemento.dataset.section_list_id == list_id;
    })

    console.log(sectionEspecifica[0].querySelector('.tasks-sin-resolver'))
    sectionEspecifica[0].querySelector('.tasks-sin-resolver').appendChild($fragment)
}

//ELIMINAR TAREA
async function eliminarTask(e) {
    const opcionesFetch = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ id: e.target.dataset.id })
    }

    try {
        let eliminar = await fetch('/task/delete', opcionesFetch)
        eliminarTaskDom(e)
        idBtnsDeleteArray.pop()
        console.log(`Tarea eliminada`);
    } catch (error) {
        console.log(`Error al eliminar tarea`);
    }

}

function eliminarTaskDom(e) {
    let task = e.target.parentNode.parentNode.parentNode;
    task.remove();
}

//ACTUALIZAR TAREA
function actualizarTaskDom(e) {
    let padre = e.target.parentNode.parentNode.parentNode;
    trasladarTarea(e, '.tasks-resueltas');
    padre.classList.add("resuelta");
    setTimeout(() => {
        padre.classList.remove("resuelta");
    }, 1000);
}

function actualizarReloj(e) {
    if (e.target.src === "http://localhost:3000/img/not_process.svg") {
        e.target.src = "/img/in_process.svg";
        trasladarTarea(e, '.tasks-resolviendo');
    } else if (e.target.src === "http://localhost:3000/img/in_process.svg") {
        e.target.src = "/img/not_process.svg";
        trasladarTarea(e, '.tasks-sin-resolver');
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

function trasladarTarea(event, listaDestino) {
    //MOVER EL NODO A RESOLVIENDO
    //Obteno la actual tarea
    const $tarea = event.target.parentNode.parentNode.parentNode
    //obtengo la lista completa
    const $listaTareas = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    //obtengo donde la voy a pasar
    const $listaDestino = $listaTareas.querySelector(listaDestino);
    //la paso
    $listaDestino.appendChild($tarea);
}

function clearInputs() {
    d.getElementById('title').value = '',
        d.getElementById('descripcion').value = '',
        d.getElementById('prioridad').value = 1,
        d.getElementById('fecha_limite').value = new Date();
}