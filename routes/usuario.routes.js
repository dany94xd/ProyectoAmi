const express = require('express');
const router = express.Router();

const usuario = require('../controllers/usuario.controller');

router.get('/', usuario.getUsuarios);
router.post('/', usuario.createUsuario);
router.get('/:id', usuario.getUsuario);
router.put('/:id', usuario.editUsuario);
router.delete('/:id', usuario.deleteUsuario);
router.post('/login/',usuario.loginUser);
router.post('/register/',usuario.registerUser);
router.put('/register/:id', usuario.editUsuarioHash);
router.put('/webdata/:id', usuario.editUsuarioWeb);

module.exports = router;
