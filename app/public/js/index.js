import {openDescription, viewAddTask, ocultar} from "/js/tasks.js";
import hamburguerMenu from "/js/menu.js";
import { rango } from "/js/rango.js";
import { orderBy } from "./orderTasks.js";
import { archivar } from "./archivar.js";
import { asignar } from "./asignar.js";
import { bloquearFechas } from "./tasks.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu('.panel-btn', '.panel','.menu a');
    openDescription();
    viewAddTask('.btnAddTask');
    bloquearFechas();
    ocultar();
    rango();
    orderBy();
    archivar();
    asignar();
})