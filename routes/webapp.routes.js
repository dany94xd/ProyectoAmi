const express = require('express');
const router = express.Router();

const webapp = require('../controllers/webapp.controller');

router.get('/data/:id', webapp.getMatriculaData);

module.exports = router;
