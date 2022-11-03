const d = document,
    $template2 = d.getElementById("template-list").content,
    $fragment2 = document.createDocumentFragment();

d.addEventListener('click', e => {
    if (e.target.matches(".saveList")) {
        insertarLista(e);
    }

    if (e.target.matches(".btnDeleteList")) {
        //obtener numero de tareas que tiene la lista
        deleteList(e);
    }
})

//ELIMINAR LISTA
async function deleteList(e) {
    const opcionesFetch = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ id: e.target.dataset.list_id })
    }

    const eliminar = await fetch('/list/deleteList', opcionesFetch);
    const respuesta = await eliminar.json();

    //Si tiene tareas
    if (respuesta.error) {
        alert('No se puede eliminar, la lista tiene tareas')
    }
    //Si no tiene elimina, devuelve 1, se realizo la eliminacion
    if (respuesta.eliminado) {
        eliminarListDom(e);
    }
    console.log(respuesta);
}

function eliminarListDom(e) {
    const $task = e.target.parentNode.parentNode.parentNode;
    $task.remove();
}

//INSERTAR NUEVA LISTA
async function insertarLista(e) {
    e.preventDefault();
    const title = d.getElementById('add_list_title').value,
        creation_date = new Date(),
        status = 'sin resolver';

    //validar campos
    if (title.trim() === '')
        return alert("Debe rellenar los campos obligatorios");

    try {
        //mandar solicitud POST a /newList
        let guardar = await fetch('/list/newList', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ title, creation_date, status })
        })

        let datos = await guardar.json();
        insertarListaDom(datos);
        //Limpiar input y cerrar ventana
        (() => {
            d.querySelector('#add_list_title').value = '';
            d.querySelector('.container-addList').classList.toggle('ocultar-con-lugar');
        })()
    } catch (error) {
        console.log(error)
        alert('Error al querer ingresar datos')
    }

}

function insertarListaDom(lista) {
    const newId = lista.id;
    $template2.querySelector('.list-section').dataset.section_list_id = newId;
    $template2.querySelector('.btnAddTask').dataset.id = newId;
    $template2.querySelector('.h3-title-list').textContent = lista.title;
    $template2.querySelector('.btnDeleteList').dataset.list_id = newId;

    let $clone = document.importNode($template2, true);
    $fragment2.appendChild($clone);
    d.querySelector('.principal').appendChild($fragment2);

    //Agregar al menu lateral
    let menuLateral = d.querySelector('.panel .menu');
    let linkNewList = d.createElement('a');
    linkNewList.classList.add('list');
    linkNewList.textContent = lista.title;

    menuLateral.appendChild(linkNewList)
}

