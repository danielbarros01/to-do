const express = require('express'),
    router = express.Router();

//Importar controladores
const ListController = require('../controllers/ListController');
const auth = require('../middlewares/auth')

//Traer listas
router.get('/lists', ListController.all);

//Guardar lista
router.post('/newList', auth.isAuthenticated ,ListController.save)

//Elimindar lista
router.post('/deleteList', ListController.delete);

//Actualizar lista
router.put('/update/:id', ListController.update)

//Traer lista especifica
router.get('/listArchivar/:id', ListController.sePuedeArchivar);

//archivarLista
router.put('/updateArchive/:id', ListController.archivar);

//Traer archivadas
router.get('/archive', auth.isAuthenticated ,ListController.allArchivadas);

module.exports = router;