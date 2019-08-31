const express = require('express');
const router = express.Router();

const webapp = require('../controllers/webapp.controller');

router.get('/data/:id', webapp.getMatriculaData);
router.get('/userdata/:id', webapp.getUserData);
router.put('/updatesaldo/:id', webapp.updateSaldo);
router.get('/persona/:id', webapp.getCedulaData);

module.exports = router;
