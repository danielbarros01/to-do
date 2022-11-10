import {openDescription, viewAddTask, ocultar} from "/js/tasks.js";
import hamburguerMenu from "/js/menu.js";
import { orderBy } from "./orderTasks.js";
import { archivar } from "./archivar.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu('.panel-btn', '.panel','.menu a');
    openDescription();
    ocultar();
    orderBy();
    archivar();
})