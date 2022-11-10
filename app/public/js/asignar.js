const d = document;

export function asignar() {
    d.addEventListener('click', async e => {
        if (e.target.matches(".saveTaskForUser")) {
            insertarTaskForUser(e);
        }
    });
}


async function insertarTaskForUser(e) {
    e.preventDefault();
    const userId = d.getElementById('seleccionUserAddTask').value,
        title = d.getElementById('titleTaskForUser').value,
        description = d.getElementById('descripcionTaskForUser').value,
        priority = d.getElementById('prioridadTaskForUser').valueAsNumber,
        status = 'sin resolver',
        expiration_date = d.getElementById('fecha_limiteTaskForUser').value,
        creation_date = new Date(),
        date_of_resolution = null;
    //tareas asignadas, cual es el id?
    //lo tratamos en el controlador?
    //list_id = e.target.dataset.id;

    //validar campos
    if (title.trim() === '' || description.trim() === '')
        return alert("Debe rellenar los campos obligatorios")

    if (expiration_date == '') {
        return alert('Fecha requerida')
    }

    try {
        //mandar solicitud POST a /new
        let guardar = await fetch('/task/newTaskForUser', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ title, description, priority, status, expiration_date, creation_date, date_of_resolution, userId })
        })

        let datos = await guardar.json();
        alert(`Tarea ${datos.title} asignada con exito al usuario`)
        clearInputs();
        //ocultar vista de agregar
        (() => {
            e.target.parentNode.parentNode.parentNode.parentNode.classList.toggle('ocultar-con-lugar');
        })()
    } catch (error) {
        alert('Error al insertar datos')
    }
}

function clearInputs() {
    d.getElementById('titleTaskForUser').value = '',
        d.getElementById('descripcionTaskForUser').value = '',
        d.getElementById('prioridadTaskForUser').value = 1,
        d.getElementById('fecha_limiteTaskForUser').value = '';
}