const express = require('express'),
    router = express.Router();

//Importar controladores
const TaskController = require('../controllers/TaskController');

//Guardar tarea
router.post('/new', TaskController.save);

//Eliminar tarea
router.post('/delete', TaskController.delete);

//Actualizar tarea
router.put('/update/:id', TaskController.update)

//Guardar tarea para cierto usuario
router.post('/newTaskForUser', TaskController.saveForUser);

module.exports = router;