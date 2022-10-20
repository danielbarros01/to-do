const d = document,
    btnSave = d.querySelector(".saveTask");

btnSave.addEventListener('click', e => {
    //validar campos
    validacion(e);
})

function validacion(e) {
    e.preventDefault();
    const title = d.getElementById('title').value,
        description = d.getElementById('descripcion').value,
        priority = d.getElementById('prioridad').valueAsNumber,
        status = 'sin resolver',
        expiration_date = d.getElementById('fecha_limite').value,
        creation_date = new Date(),
        date_of_resolution = null;

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
        })

}