const d = document;

export function archivar() {
    d.addEventListener('click', async e => {
        if (e.target.matches('.btnArchivar')) {
            archivarse(e);
        }
        if (e.target.matches('.btnDesarchivar')) {
            desarchivarse(e);
        }
    });
}

async function archivarse(e) {
    console.log('archivar');

    //traer info sobre si lista tiene todas sus tareas listas
    const id = e.target.dataset.list_id;

    let respuesta = await fetch(`/list/listArchivar/${id}`);

    let tareas = await respuesta.json();

    let archivable = 0;

    (tareas.tareas).forEach(task => {
        if (task.status == 'sin resolver' || task.status == 'resolviendo') {
            archivable = 0;
        } else {
            archivable = 1;
        }
    });

    if(archivable == 0){
        return alert('Tienen que estar todas las tareas resueltas para poder archivar la lista');
    }else if (archivable == 1) {
        fetch(`/list/updateArchive/${id}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                archivada: 1
            })
        }).then(res => {
            let list = e.target.parentNode.parentNode.parentNode;
            list.remove();
            alert('Lista archivada');
        })
    }

    console.log(tareas.tareas)

    /* if(sePuedeArchivar){
        console.log('archivada')
    }else{

    } */

}

async function desarchivarse(e){
    const id = e.target.dataset.list_id;

    fetch(`/list/updateArchive/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            archivada: 0
        })
    }).then(res => {
        let list = e.target.parentNode.parentNode.parentNode;
        list.remove();
        alert('Lista desarchivada');
    })
}