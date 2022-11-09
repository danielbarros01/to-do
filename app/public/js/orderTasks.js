const d = document;

export function orderBy() {
    d.addEventListener('click', e => {
        if (e.target.matches('#btnOrdenPrioridad')) {
            //cambiar prioridad
            let orden = e.target.dataset.orden;

            if (orden == 'menorAMayor') {
                e.target.dataset.orden = 'mayorAMenor'
            } else if (orden == 'mayorAMenor') {
                e.target.dataset.orden = 'menorAMayor'
            }


            const contenedorTasks = e.target.parentNode.parentNode;
            //let tasks = contenedorTasks.getElementsByClassName('task');

            let containerTasksSinResolver = contenedorTasks.querySelector('.tasks-sin-resolver');
            let containerTasksResolviendo = contenedorTasks.querySelector('.tasks-resolviendo');
            let containerTasksResueltas = contenedorTasks.querySelector('.tasks-resueltas');

            function ordenInterno(containerTask, orden = e.target.dataset.orden) {
                let tasks = containerTask.childNodes;

                if (tasks.lenght <= 1) return;

                let prioridadBaja = [];
                let prioridadMedia = [];
                let prioridadAlta = [];

                Array.from(tasks).forEach(tarea => {
                    let prioridad = tarea.querySelector('.task-priority').textContent;

                    //eliminar tarea del container
                    tarea.parentNode.removeChild(tarea);

                    if (prioridad == 'BAJA') {
                        prioridadBaja.push(tarea);
                    }
                    else if (prioridad == 'MEDIA') {
                        prioridadMedia.push(tarea);
                    }
                    else if (prioridad == 'ALTA') {
                        prioridadAlta.push(tarea);
                    }
                });

                let listaOrdenada;

                if (orden == 'menorAMayor') {
                    listaOrdenada = [...prioridadBaja, ...prioridadMedia, ...prioridadAlta];
                } else if (orden == 'mayorAMenor') {
                    listaOrdenada = [...prioridadAlta, ...prioridadMedia, ...prioridadBaja];
                }


                Array.from(listaOrdenada).forEach(tarea => {
                    containerTask.appendChild(tarea);
                })

            }

            ordenInterno(containerTasksSinResolver);
            ordenInterno(containerTasksResolviendo);
            ordenInterno(containerTasksResueltas);
        }

        if (e.target.matches('#btnOrdenExpiration')) {
            //cambiar prioridad
            let orden = e.target.dataset.orden;

            if (orden == 'ASC') {
                e.target.dataset.orden = 'DESC'
            } else if (orden == 'DESC') {
                e.target.dataset.orden = 'ASC'
            }


            const contenedorTasks = e.target.parentNode.parentNode;
            let containerTasksSinResolver = contenedorTasks.querySelector('.tasks-sin-resolver');
            let containerTasksResolviendo = contenedorTasks.querySelector('.tasks-resolviendo');
            let containerTasksResueltas = contenedorTasks.querySelector('.tasks-resueltas');

            function ordenInterno(containerTask) {
                let tasks = containerTask.childNodes;
                if (tasks.lenght <= 1) return;

                let fechas = [];

                Array.from(tasks).forEach(tarea => {
                    let fecha = (tarea.querySelector('.task-dateExpired').textContent).split('/');
                    fechas.push({
                        date :new Date(`${fecha[2]}-${fecha[1]}-${fecha[0]}`),
                        tarea: tarea
                    });
                    tarea.parentNode.removeChild(tarea);
                })


                if (orden == 'ASC') {
                    //DESC
                    fechas.sort((a, b) => a.date - b.date);
                } else if (orden == 'DESC') {
                    //ASC
                    fechas.sort((a, b) => b.date - a.date);
                }

                Array.from(fechas).forEach(obj => {
                    containerTask.appendChild(obj.tarea);
                })
            }

            ordenInterno(containerTasksSinResolver);
            ordenInterno(containerTasksResolviendo);
            ordenInterno(containerTasksResueltas);
        }
    });
}
