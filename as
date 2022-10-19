[33mcommit b9b197039c797920b1dd6a04e6c6794f023e5650[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m)[m
Author: danielbarros01 <danibelgranocab@hotmail.com>
Date:   Tue Oct 18 19:13:15 2022 -0300

    1.Falta agregar al boton add la funcionalidad y su vista, task ya tiene su forma

[1mdiff --git a/.gitignore b/.gitignore[m
[1mnew file mode 100644[m
[1mindex 0000000..40b878d[m
[1m--- /dev/null[m
[1m+++ b/.gitignore[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32mnode_modules/[m
\ No newline at end of file[m
[1mdiff --git a/app/app.js b/app/app.js[m
[1mnew file mode 100644[m
[1mindex 0000000..f78032e[m
[1m--- /dev/null[m
[1m+++ b/app/app.js[m
[36m@@ -0,0 +1,23 @@[m
[32m+[m[32mconst express = require('express'),[m
[32m+[m[32m    app = express(),[m
[32m+[m[32m    //sequelize[m
[32m+[m[32m    pug = require('pug');[m
[32m+[m
[32m+[m
[32m+[m[32mconst port = process.env.port || 3000,[m
[32m+[m[32m    publicDir = express.static(`${__dirname}/public`),[m
[32m+[m[32m    viewsDir = `${__dirname}/views`,[m
[32m+[m[32m    routes = require('./routes/routes');[m
[32m+[m
[32m+[m[32mapp[m
[32m+[m[32m    .set('views', viewsDir)[m
[32m+[m[32m    .set('view engine', 'pug')[m
[32m+[m[32m    .set('port', port);[m
[32m+[m
[32m+[m[32mapp[m
[32m+[m[32m    .use(express.json())[m
[32m+[m[32m    .use(express.urlencoded({ extended: false }))[m
[32m+[m[32m    .use(publicDir)[m
[32m+[m[32m    .use('/', routes);[m
[32m+[m
[32m+[m[32mmodule.exports = app;[m
\ No newline at end of file[m
[1mdiff --git a/app/bin/server.js b/app/bin/server.js[m
[1mnew file mode 100644[m
[1mindex 0000000..1d1797b[m
[1m--- /dev/null[m
[1m+++ b/app/bin/server.js[m
[36m@@ -0,0 +1,4 @@[m
[32m+[m[32mconst app = require('../app.js'),[m
[32m+[m[32m    server = app.listen(app.get('port'), () => {[m
[32m+[m[32m        console.log(`Iniciando Express en el puerto ${app.get('port')}`)[m
[32m+[m[32m    });[m
\ No newline at end of file[m
[1mdiff --git a/app/public/css/menu.css b/app/public/css/menu.css[m
[1mnew file mode 100644[m
[1mindex 0000000..580e4f3[m
[1m--- /dev/null[m
[1m+++ b/app/public/css/menu.css[m
[36m@@ -0,0 +1,54 @@[m
[32m+[m[32m.header{[m
[32m+[m[32m    z-index: 997;[m
[32m+[m[32m    top: 0;[m
[32m+[m[32m    padding: 1em;[m
[32m+[m[32m    background-color: var(--main-color);[m
[32m+[m[32m    color: var(--second-color);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.header h1{[m
[32m+[m[32m    margin: 0;[m
[32m+[m[32m    text-align: center;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.panel{[m
[32m+[m[32m    position: fixed;[m
[32m+[m[32m    z-index: 998;[m
[32m+[m[32m    top: 0;[m
[32m+[m[32m    bottom: 0;[m
[32m+[m[32m    left: 0;[m
[32m+[m[32m    width: 20vw;[m
[32m+[m[32m    overflow-y: auto; /* en y necesito que se adapte, genera barra de scroll*/[m
[32m+[m[32m    background-color: yellow;[m
[32m+[m[32m    transform: translate(-100%,0);[m
[32m+[m[32m    transition: transform .3s ease;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.panel-btn{[m
[32m+[m[32m    position: fixed;[m
[32m+[m[32m    z-index: 999;[m
[32m+[m[32m    top: 0;[m
[32m+[m[32m    margin: 1rem;[m
[32m+[m[32m    width: 4rem;[m
[32m+[m[32m    height: 4rem;[m
[32m+[m[32m    border-radius: 50%;[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    justify-content: center;[m
[32m+[m[32m    align-items: center;[m
[32m+[m[32m    background-color: #f7df1e;[m
[32m+[m[32m    cursor: pointer;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.panel.is-active{[m
[32m+[m[32m    transform: translate(0,0);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.menu{[m
[32m+[m[32m    width: 100%;[m
[32m+[m[32m    margin-top: 5rem;[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    flex-direction: column;[m
[32m+[m[32m    justify-content: space-evenly;[m
[32m+[m[32m    align-items: center;[m
[32m+[m[32m    text-align: center;[m
[32m+[m[32m}[m
[1mdiff --git a/app/public/css/styles.css b/app/public/css/styles.css[m
[1mnew file mode 100644[m
[1mindex 0000000..387101e[m
[1m--- /dev/null[m
[1m+++ b/app/public/css/styles.css[m
[36m@@ -0,0 +1,28 @@[m
[32m+[m[32mhtml{[m
[32m+[m[32m    box-sizing: border-box;[m
[32m+[m[32m    font-family: var(--main-font);[m
[32m+[m[32m    font-size: var(--font-size);[m
[32m+[m[32m    scroll-behavior: smooth;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/* Todos los elementos hereden el box-sizing */[m
[32m+[m[32m*,[m
[32m+[m[32m*:before,[m
[32m+[m[32m*:after{[m
[32m+[m[32m    box-sizing: inherit;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mbody{[m
[32m+[m[32m    margin: 0;[m
[32m+[m[32m    overflow-x: hidden;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.btn-add{[m
[32m+[m[32m    margin: 1rem;[m
[32m+[m[32m    font-size: 1.5rem;[m
[32m+[m[32m    border: none;[m
[32m+[m[32m    background-color: rgb(5, 60, 142);[m
[32m+[m[32m    color: white;[m
[32m+[m[32m    border-radius: 10px;[m
[32m+[m[32m    cursor: pointer;[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/app/public/css/tareas.css b/app/public/css/tareas.css[m
[1mnew file mode 100644[m
[1mindex 0000000..39d3a5a[m
[1m--- /dev/null[m
[1m+++ b/app/public/css/tareas.css[m
[36m@@ -0,0 +1,37 @@[m
[32m+[m[32m.principal{[m
[32m+[m[32m    background-color: thistle;[m
[32m+[m[32m    width: 80vw;[m
[32m+[m[32m    height: 100vh;[m
[32m+[m[32m    margin: auto;[m
[32m+[m[32m}[m
[32m+[m[32m.task{[m[41m    [m
[32m+[m[32m    background-color: salmon;[m
[32m+[m[32m    border: 1px solid black;[m
[32m+[m[32m    border-radius: 15px;[m
[32m+[m[32m    padding: 0.5rem;[m
[32m+[m[32m    padding-bottom: 0;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.task-principal{[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    justify-content: space-between;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.button-abrirDescription{[m
[32m+[m[32m    font-size: 1rem;[m
[32m+[m[32m    margin: 1rem;[m
[32m+[m[32m    cursor: pointer;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.task-secondary{[m
[32m+[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.task-secondary-final{[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    justify-content: space-between;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.ocultar{[m
[32m+[m[32m    display: none;[m
[32m+[m[32m}[m
[1mdiff --git a/app/public/js/index.js b/app/public/js/index.js[m
[1mnew file mode 100644[m
[1mindex 0000000..e542f9c[m
[1m--- /dev/null[m
[1m+++ b/app/public/js/index.js[m
[36m@@ -0,0 +1,9 @@[m
[32m+[m[32mimport openDescription from "/js/tasks.js";[m
[32m+[m[32mimport hamburguerMenu from "/js/menu.js";[m
[32m+[m
[32m+[m[32mconst d = document;[m
[32m+[m
[32m+[m[32md.addEventListener("DOMContentLoaded", e => {[m
[32m+[m[32m    hamburguerMenu('.panel-btn', '.panel','.menu a');[m
[32m+[m[32m    openDescription('.button-abrirDescription');[m
[32m+[m[32m})[m
\ No newline at end of file[m
[1mdiff --git a/app/public/js/menu.js b/app/public/js/menu.js[m
[1mnew file mode 100644[m
[1mindex 0000000..6d5acd1[m
[1m--- /dev/null[m
[1m+++ b/app/public/js/menu.js[m
[36m@@ -0,0 +1,9 @@[m
[32m+[m[32mexport default function hamburguerMenu(panelBtn, panel){[m
[32m+[m[32m    const d = document;[m
[32m+[m[32m    d.addEventListener("click", e => {[m
[32m+[m[32m        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){[m
[32m+[m[32m            d.querySelector(panel).classList.toggle("is-active");[m
[32m+[m[32m            d.querySelector(panelBtn).classList.toggle("is-active");[m
[32m+[m[32m        }[m
[32m+[m[32m    });[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/app/public/js/tasks.js b/app/public/js/tasks.js[m
[1mnew file mode 100644[m
[1mindex 0000000..476eca7[m
[1m--- /dev/null[m
[1m+++ b/app/public/js/tasks.js[m
[36m@@ -0,0 +1,9 @@[m
[32m+[m[32mconst d = document;[m
[32m+[m
[32m+[m[32mexport default function openDescription(taskBtn){[m
[32m+[m[32m    d.addEventListener('click', e => {[m
[32m+[m[32m        if(e.target.matches(taskBtn)){[m
[32m+[m[32m            e.target.parentNode.nextSibling.classList.toggle("ocultar");[m
[32m+[m[32m        }[m
[32m+[m[32m    })[m
[32m+[m[32m}[m
[1mdiff --git a/app/routes/routes.js b/app/routes/routes.js[m
[1mnew file mode 100644[m
[1mindex 0000000..14da7d8[m
[1m--- /dev/null[m
[1m+++ b/app/routes/routes.js[m
[36m@@ -0,0 +1,9 @@[m
[32m+[m[32mconst express = require('express'),[m
[32m+[m[32m    router = express.Router();[m
[32m+[m
[32m+[m[32m//Home[m
[32m+[m[32mrouter.get('/', (req, res) => {[m
[32m+[m[32m    res.render('index');[m
[32m+[m[32m})[m
[32m+[m
[32m+[m[32mmodule.exports = router;[m
\ No newline at end of file[m
[1mdiff --git a/app/views/index.pug b/app/views/index.pug[m
[1mnew file mode 100644[m
[1mindex 0000000..53ac016[m
[1m--- /dev/null[m
[1m+++ b/app/views/index.pug[m
[36m@@ -0,0 +1,31 @@[m
[32m+[m[32minclude layout[m
[32m+[m
[32m+[m[32mheader.header[m[41m [m
[32m+[m[32m    h1 To-Do[m[41m [m
[32m+[m
[32m+[m[32m//-Menu lateral[m
[32m+[m[32mbutton.panel-btn.hamburger.hamburger--arrow(type="button")[m
[32m+[m[32m      span.hamburger-box[m
[32m+[m[32m        span.hamburger-inner[m
[32m+[m
[32m+[m[32maside.panel[m[41m [m
[32m+[m[32m    nav.menu[m
[32m+[m[32m        a Cocina[m[41m [m
[32m+[m[32m        a Pieza[m
[32m+[m[32m        a Escuela[m
[32m+[m
[32m+[m[32m//-Inicio[m
[32m+[m[32mmain.principal[m
[32m+[m[32m    button.btn-add Add task[m
[32m+[m[32m    section.task[m
[32m+[m[32m        .task-principal[m[41m [m
[32m+[m[32m            input(type="checkbox")[m
[32m+[m[32m            p.task-tile Hacer capelettis a la salsa[m[41m [m
[32m+[m[32m            p.task-priority HIGH[m
[32m+[m[32m            p.task-dateExpired 22/11/2022[m
[32m+[m[32m            p.button-abrirDescription V[m
[32m+[m[32m        .task-secondary[m[41m [m
[32m+[m[32m            p.description Tenemos que realizar salsa para nuestros invitados el dia de hoy[m
[32m+[m[32m            .task-secondary-final[m[41m [m
[32m+[m[32m                p.task-creacion Creada el 18/10/2022[m
[32m+[m[32m                p.task-estado Sin resolver[m
\ No newline at end of file[m
[1mdiff --git a/app/views/layout.pug b/app/views/layout.pug[m
[1mnew file mode 100644[m
[1mindex 0000000..997549f[m
[1m--- /dev/null[m
[1m+++ b/app/views/layout.pug[m
[36m@@ -0,0 +1,13 @@[m
[32m+[m[32mdoctype html[m
[32m+[m[32mhtml(lang="en")[m
[32m+[m[32m    head[m
[32m+[m[32m        meta(charset="UTF-8")[m
[32m+[m[32m        meta(http-equiv="X-UA-Compatible", content="IE=edge")[m
[32m+[m[32m        meta(name="viewport", content="width=device-width, initial-scale=1.0")[m
[32m+[m[32m        link(rel="stylesheet", href="/css/styles.css")[m
[32m+[m[32m        link(rel="stylesheet", href="/css/menu.css")[m
[32m+[m[32m        link(rel="stylesheet", href="/css/tareas.css")[m
[32m+[m[32m        link(rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.2.1/hamburgers.min.css" integrity="sha512-+mlclc5Q/eHs49oIOCxnnENudJWuNqX5AogCiqRBgKnpoplPzETg2fkgBFVC6WYUVxYYljuxPNG8RE7yBy1K+g==" crossorigin="anonymous" referrerpolicy="no-referrer")[m
[32m+[m[32m        script(src="/js/index.js" type="module" defer)[m[41m [m
[32m+[m[32m        title To-Do[m
[32m+[m[32m    body[m[41m [m
\ No newline at end of file[m
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mnew file mode 100644[m
[1mindex 0000000..063cc03[m
[1m--- /dev/null[m
[1m+++ b/package-lock.json[m
[36m@@ -0,0 +1,3883 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "name": "todo2",[m
[32m+[m[32m  "version": "1.0.0",[m
[32m+[m[32m  "lockfileVersion": 2,[m
[32m+[m[32m  "requires": true,[m
[32m+[m[32m  "packages": {[m
[32m+[m[32m    "": {[m
[32m+[m[32m      "name": "todo2",[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "express": "^4.18.2",[m
[32m+[m[32m        "faker": "^5.5.3",[m
[32m+[m[32m        "mysql2": "^2.3.3",[m
[32m+[m[32m        "nodemon": "^2.0.20",[m
[32m+[m[32m        "pug": "^3.0.2",[m
[32m+[m[32m        "sequelize": "^6.25.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "devDependencies": {[m
[32m+[m[32m        "sequelize-cli": "^6.5.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-string-parser": {[m
[32m+[m[32m      "version": "7.19.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.19.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-nHtDoQcuqFmwYNYPz3Rah5ph2p8PFeFCsZk9A/48dPc/rGocJ5J3hAAZ7pb76VWX3fZKu+uEr/FhH5jLx7umrw==",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-validator-identifier": {[m
[32m+[m[32m      "version": "7.19.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.19.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-awrNfaMtnHUr653GgGEs++LlAvW6w+DcPrOliSMXWCKo597CwL5Acf/wWdNkf/tfEQE3mjkeD1YOVZOUV/od1w==",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/parser": {[m
[32m+[m[32m      "version": "7.19.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.19.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-qpVT7gtuOLjWeDTKLkJ6sryqLliBaFpAtGeqw5cs5giLldvh+Ch0plqnUMKoVAUS6ZEueQQiZV+p5pxtPitEsA==",[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "parser": "bin/babel-parser.js"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/types": {[m
[32m+[m[32m      "version": "7.19.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.19.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-M5LK7nAeS6+9j7hAq+b3fQs+pNfUtTGq+yFFfHnauFA8zQtLRfmuipmsKDKKLuyG+wC8ABW43A153YNawNTEtw==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-string-parser": "^7.19.4",[m
[32m+[m[32m        "@babel/helper-validator-identifier": "^7.19.1",[m
[32m+[m[32m        "to-fast-properties": "^2.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@types/debug": {[m
[32m+[m[32m      "version": "4.1.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@types/debug/-/debug-4.1.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-9AonUzyTjXXhEOa0DnqpzZi6VHlqKMswga9EXjpXnnqxwLtdvPPtlO8evrI5D9S6asFRCQ6v+wpiUKbw+vKqyg==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@types/ms": "*"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@types/ms": {[m
[32m+[m[32m      "version": "0.7.31",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@types/ms/-/ms-0.7.31.tgz",[m
[32m+[m[32m      "integrity": "sha512-iiUgKzV9AuaEkZqkOLDIvlQiL6ltuZd9tGcW3gwpnX8JbuiuhFlEGmmFXEXkN50Cvq7Os88IY2v0dkDqXYWVgA=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@types/node": {[m
[32m+[m[32m      "version": "18.11.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@types/node/-/node-18.11.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-IOXCvVRToe7e0ny7HpT/X9Rb2RYtElG1a+VshjwT00HxrM2dWBApHQoqsI6WiY7Q03vdf2bCrIGzVrkF/5t10w=="[m
[32m+[m[32m    },[