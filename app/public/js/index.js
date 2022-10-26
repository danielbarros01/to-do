import {openDescription, viewAddTask, ocultar} from "/js/tasks.js";
import hamburguerMenu from "/js/menu.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu('.panel-btn', '.panel','.menu a');
    openDescription('.button-abrirDescription');
    viewAddTask('.btn-add');
    ocultar();
})