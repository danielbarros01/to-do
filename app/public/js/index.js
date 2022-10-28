import {openDescription, viewAddTask, ocultar} from "/js/tasks.js";
import hamburguerMenu from "/js/menu.js";
import { rango } from "/js/rango.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu('.panel-btn', '.panel','.menu a');
    openDescription();
    viewAddTask('.btnAddTask');
    ocultar();
    rango();
})