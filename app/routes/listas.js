const express = require('express'),
    router = express.Router();

//Importar controladores
const ListController = require('../controllers/ListController');

//Traer listas
router.get('/lists', ListController.all);

//Guardar lista
router.post('/newList', ListController.save)

//Elimindar lista
router.post('/deleteList', ListController.delete);

//Actualizar lista
router.put('/update/:id', ListController.update)

module.exports = router;