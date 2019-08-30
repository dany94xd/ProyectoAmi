const express = require('express');
const router = express.Router();

const mobileapp = require('../controllers/mobileapp.controller');

router.get('/:id', mobileapp.getUsuarioData);
router.get('/data/:id', mobileapp.getMatriculaData);
router.get('/userdata/:id', mobileapp.getMatriculaData);
router.put('/prueba/:id', mobileapp.prueba);
router.put('/saldo/:id', mobileapp.editUsuarioSaldo);



module.exports = router;
