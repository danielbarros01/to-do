const d = document;

export function ocultar() {
    d.addEventListener('click', e => {
        if (e.target.matches('.btnOpenList')) {
            e.target.parentNode.parentNode.querySelector('.list-tasks').classList.toggle("ocultar");
        }
        if (e.target.matches('.btnViewTasks')) {
            e.target.parentNode.nextSibling.classList.toggle("ocultar");
        }
    })
}

export function openList(btn) { }

export function openDescription() {
    d.addEventListener('click', e => {
        if (e.target.matches('.button-abrirDescription')) {
            e.target.parentNode.parentNode.nextSibling.classList.toggle("ocultar");
        }
        if (e.target.matches(".btnAbrirOptions")) {
            e.target.parentNode.parentNode.parentNode.querySelector('.task-optionsDelete ').classList.toggle("ocultar-con-lugar")
        }

        if (e.target.matches(".btnAddList")) {
            d.querySelector('.container-addList').classList.toggle("ocultar-con-lugar")
        }

        if (e.target.matches(".cancelList")) {
            e.preventDefault();
            d.querySelector('.container-addList').classList.toggle("ocultar-con-lugar")
        }

        if (e.target.matches(".moreOptionsDeleteList")) {
            e.target.parentNode.parentNode.parentNode.querySelector('.btnDeleteList').classList.toggle("ocultar-con-lugar")
        }

        //asignar task a usuario especifico
        if (e.target.matches(".cancelTaskForUser")) {
            e.preventDefault();
            d.querySelector('.container-addTaskWithUser').classList.toggle("ocultar-con-lugar")
        }

        if (e.target.matches(".btnAsignar")) {
            e.preventDefault();
            d.querySelector('.container-addTaskWithUser').classList.toggle("ocultar-con-lugar")
        }

        
    })
}

export function viewAddTask(btnAdd) {
    d.addEventListener('click', e => {
        if (e.target.matches(btnAdd)) {
            e.preventDefault();
            const vistaAgregar = e.target.parentNode.parentNode.parentNode.nextSibling;
            const id = e.target.dataset.id;

            bloquearFechas();

            vistaAgregar.classList.toggle("ocultar-con-lugar");
            vistaAgregar.querySelector(".saveTask").dataset.id = id;
            d.querySelector('.panel-btn').classList.toggle("ocultar-con-lugar");
            d.querySelector('.principal').classList.toggle("ocultar");
        }
        if (e.target.matches('.cancelTask')) {
            e.preventDefault();
            e.target.parentNode.parentNode.parentNode.parentNode.classList.toggle("ocultar-con-lugar");
            d.querySelector('.panel-btn').classList.toggle("ocultar-con-lugar");
            d.querySelector('.principal').classList.toggle("ocultar");
        }
    })
}

function bloquearFechas() {
    //bloquear fechas viejas
    var fecha = new Date();
    var anio = fecha.getFullYear();
    var dia = fecha.getDate();
    var _mes = fecha.getMonth();//viene con valores de 0 al 11
    _mes = _mes + 1;//ahora lo tienes de 1 al 12
    if (_mes < 10)//ahora le agregas un 0 para el formato date
    { var mes = "0" + _mes; }
    else { var mes = _mes.toString() }
    document.getElementById("fecha_limite").min = anio + '-' + mes + '-' + dia;
}