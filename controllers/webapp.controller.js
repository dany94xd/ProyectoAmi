const Usuario = require('../models/usuario');
const Persona = require('../models/persona');

const webAppCtrl = {};

//Vamos jc
webAppCtrl.getMatriculaData = async (req, res, next) => {
    const { id } = req.params;
    
    const usuarioData = await Usuario.find({ 'matricula': id}).select({ idInstitucion:1, matricula:1, NroBotellas: 1, saldoVerde: 1, saldoActual: 1 });
 
 //const { personaId } = await Usuario.find({ 'matricula': id}).select({ idPersona:1});

 const personaData = await Persona.find({ 'matricula': id }).select({ nombre: 1, apellido: 1});
   //const personaData = await Persona.find({ '_id': personaId.idPersona }).select({ nombre: 1, apellido: 1}); 
    
    const dataFinal= [await usuarioData, await personaData];
    
    //console.log(dataFinal);
    res.json(dataFinal);
};








module.exports = webAppCtrl;